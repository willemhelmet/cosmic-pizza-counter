import * as THREE from 'three';
import type { RigidBody, World, EventQueue, RigidBodyDesc, ColliderDesc } from '@dimforge/rapier3d';
import { DroppedIngredient, PHYSICS_PROFILES } from '../types';

export class PhysicsWorld {
  private RAPIER: any;
  private world: World | null = null;
  private eventQueue: EventQueue | null = null;
  private meshToBody: Map<THREE.Object3D, RigidBody> = new Map();
  private bodyToMesh: Map<RigidBody, THREE.Object3D> = new Map();
  private pizzaBaseBody: RigidBody | null = null;
  private collisionCallbacks: ((handle1: number, handle2: number) => void)[] = [];
  private totalCollisions = 0;

  async init(): Promise<void> {
    // Dynamically import Rapier3D
    const RAPIER = await import('@dimforge/rapier3d');
    this.RAPIER = RAPIER;
    
    // Create physics world with gravity
    const gravity = { x: 0.0, y: -9.81, z: 0.0 };
    this.world = new RAPIER.World(gravity);
    this.eventQueue = new RAPIER.EventQueue(true);
    
    // Set up collision detection
    this.world.timestep = 1 / 60;
    
    // Create pizza base as static body
    this.createPizzaBase();
  }

  private createPizzaBase(): void {
    if (!this.world || !this.RAPIER) return;

    // Create static rigid body for pizza base
    const bodyDesc = this.RAPIER.RigidBodyDesc.fixed()
      .setTranslation(0, 0.25, 0);  // Raised to match visual pizza height
    
    this.pizzaBaseBody = this.world.createRigidBody(bodyDesc);

    // Create cylinder collider for pizza surface - raised to prevent sinking
    const colliderDesc = this.RAPIER.ColliderDesc.cylinder(0.1, 2.5)  // Thinner collider
      .setTranslation(0, 0, 0)  // Relative to body position
      .setRestitution(0.01)  // Almost no bounce
      .setFriction(2.0);     // Very high friction to help ingredients stick
    
    this.world.createCollider(colliderDesc, this.pizzaBaseBody);

    // Create torus collider for raised edge - now taller and angled inward
    // Using multiple box colliders to approximate torus
    const edgeCount = 24; // More segments for smoother edge
    const radius = 2.55;
    for (let i = 0; i < edgeCount; i++) {
      const angle = (i / edgeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      // Make barriers taller and angle them slightly inward
      const edgeCollider = this.RAPIER.ColliderDesc.cuboid(0.15, 0.5, 0.15) // Taller barrier
        .setTranslation(x, 0.05, z)  // Adjusted for raised pizza base
        .setRestitution(0.01) // Very low bounce to prevent items flying off
        .setFriction(1.0);    // High friction to catch items
      
      this.world.createCollider(edgeCollider, this.pizzaBaseBody);
    }
    
    // Add an invisible secondary wall further out to catch escapees
    const outerRadius = 2.8;
    for (let i = 0; i < edgeCount; i++) {
      const angle = (i / edgeCount) * Math.PI * 2;
      const x = Math.cos(angle) * outerRadius;
      const z = Math.sin(angle) * outerRadius;
      
      const outerWall = this.RAPIER.ColliderDesc.cuboid(0.1, 0.8, 0.1)
        .setTranslation(x, 0.15, z)  // Adjusted for raised pizza base
        .setRestitution(0.0)  // No bounce at all
        .setFriction(2.0);    // Maximum friction
      
      this.world.createCollider(outerWall, this.pizzaBaseBody);
    }
  }

  createRigidBody(
    mesh: THREE.Object3D,
    position: THREE.Vector3,
    profileKey: keyof typeof PHYSICS_PROFILES
  ): RigidBody | null {
    if (!this.world || !this.RAPIER) return null;

    const profile = PHYSICS_PROFILES[profileKey];

    // Create rigid body
    const bodyDesc = this.RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setLinearDamping(profile.linearDamping)
      .setAngularDamping(profile.angularDamping);
    
    const rigidBody = this.world.createRigidBody(bodyDesc);

    // Create appropriate collider based on mesh geometry
    let colliderDesc: ColliderDesc;
    
    // Simplified collision shapes for now
    const scale = (mesh as any).scale || { x: 1, y: 1, z: 1 };
    
    if (profileKey === 'liquid') {
      // Sphere for liquids
      colliderDesc = this.RAPIER.ColliderDesc.ball(0.3 * scale.x);
    } else if (profileKey === 'ethereal' || profileKey === 'light') {
      // Small sphere for light items
      colliderDesc = this.RAPIER.ColliderDesc.ball(0.2 * scale.x);
    } else if (profileKey === 'heavy') {
      // Box for heavy items
      colliderDesc = this.RAPIER.ColliderDesc.cuboid(0.3 * scale.x, 0.3 * scale.y, 0.3 * scale.z);
    } else {
      // Default cylinder for food items
      colliderDesc = this.RAPIER.ColliderDesc.cylinder(0.1 * scale.y, 0.25 * scale.x);
    }

    colliderDesc
      .setRestitution(profile.restitution)
      .setFriction(profile.friction)
      .setMass(profile.mass);

    this.world.createCollider(colliderDesc, rigidBody);

    // Store mappings
    this.meshToBody.set(mesh, rigidBody);
    this.bodyToMesh.set(rigidBody, mesh);

    return rigidBody;
  }

  step(delta: number): void {
    if (!this.world || !this.eventQueue) return;

    // Step physics simulation
    this.world.timestep = Math.min(delta, 1/30); // Cap timestep for stability
    this.world.step(this.eventQueue);

    // Process collision events
    this.eventQueue.drainCollisionEvents((handle1, handle2, started) => {
      if (started) {
        this.totalCollisions++;
        this.collisionCallbacks.forEach(cb => cb(handle1, handle2));
      }
    });

    // Sync mesh positions with physics bodies
    this.bodyToMesh.forEach((mesh, body) => {
      const translation = body.translation();
      const rotation = body.rotation();
      
      mesh.position.set(translation.x, translation.y, translation.z);
      mesh.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
    });
  }

  applyImpulse(body: RigidBody, force: THREE.Vector3): void {
    body.applyImpulse({ x: force.x, y: force.y, z: force.z }, true);
  }

  applyRandomSpin(body: RigidBody, intensity: number = 2): void {
    const torque = {
      x: (Math.random() - 0.5) * intensity,
      y: (Math.random() - 0.5) * intensity,
      z: (Math.random() - 0.5) * intensity
    };
    body.applyTorqueImpulse(torque, true);
  }

  shakePizza(intensity: number): void {
    this.bodyToMesh.forEach((mesh, body) => {
      if (body !== this.pizzaBaseBody) {
        const impulse = {
          x: (Math.random() - 0.5) * intensity,
          y: Math.random() * intensity * 2,
          z: (Math.random() - 0.5) * intensity
        };
        body.applyImpulse(impulse, true);
      }
    });
  }

  isSettled(body: RigidBody, threshold: number = 0.1): boolean {
    const linVel = body.linvel();
    const angVel = body.angvel();
    
    const linSpeed = Math.sqrt(linVel.x ** 2 + linVel.y ** 2 + linVel.z ** 2);
    const angSpeed = Math.sqrt(angVel.x ** 2 + angVel.y ** 2 + angVel.z ** 2);
    
    return linSpeed < threshold && angSpeed < threshold;
  }

  getSettledIngredients(ingredients: DroppedIngredient[]): DroppedIngredient[] {
    return ingredients.filter(ing => {
      return this.isSettled(ing.rigidBody);
    });
  }

  onCollision(callback: (handle1: number, handle2: number) => void): void {
    this.collisionCallbacks.push(callback);
  }

  getTotalCollisions(): number {
    return this.totalCollisions;
  }

  resetCollisionCount(): void {
    this.totalCollisions = 0;
  }

  removeBody(mesh: THREE.Object3D): void {
    const body = this.meshToBody.get(mesh);
    if (body && this.world) {
      this.world.removeRigidBody(body);
      this.meshToBody.delete(mesh);
      this.bodyToMesh.delete(body);
    }
  }

  dispose(): void {
    this.meshToBody.clear();
    this.bodyToMesh.clear();
    this.collisionCallbacks = [];
    this.world = null;
    this.eventQueue = null;
  }
}