import * as THREE from 'three';
import { Ingredient, DroppedIngredient } from '../types';
import { IngredientMeshFactory } from './IngredientMeshFactory';
import { PhysicsWorld } from '../physics/PhysicsWorld';
import { SceneManager } from '../scene/SceneManager';

export class IngredientSpawner {
  private meshFactory: IngredientMeshFactory;
  private physicsWorld: PhysicsWorld;
  private sceneManager: SceneManager;
  private droppedIngredients: DroppedIngredient[] = [];
  private isDropping = false;
  private dropHeight = 2; // Lowered to prevent missing pizza
  private nextId = 0;

  constructor(sceneManager: SceneManager, physicsWorld: PhysicsWorld) {
    this.sceneManager = sceneManager;
    this.physicsWorld = physicsWorld;
    this.meshFactory = new IngredientMeshFactory();
  }

  async dropIngredient(
    ingredient: Ingredient,
    dropPosition?: THREE.Vector3
  ): Promise<DroppedIngredient> {
    if (this.isDropping) {
      throw new Error('Already dropping an ingredient');
    }

    this.isDropping = true;

    // Create mesh for ingredient
    const mesh = this.meshFactory.createMesh(ingredient);
    
    // Calculate drop position
    const position = dropPosition || this.calculateDropPosition();
    position.y = this.dropHeight;
    mesh.position.copy(position);
    
    // Start with no rotation
    mesh.rotation.x = 0;
    mesh.rotation.y = 0;
    mesh.rotation.z = 0;
    
    // Add to scene
    this.sceneManager.addObject(mesh);
    
    // Create physics body
    const rigidBody = this.physicsWorld.createRigidBody(
      mesh,
      position,
      ingredient.physicsProfile
    );
    
    if (!rigidBody) {
      this.sceneManager.removeObject(mesh);
      this.isDropping = false;
      throw new Error('Failed to create physics body');
    }
    
    // NO rotational velocity - items drop straight down
    // this.physicsWorld.applyRandomSpin(rigidBody, 0);
    
    // NO horizontal velocity - drop exactly where clicked
    // const horizontalImpulse = new THREE.Vector3(0, 0, 0);
    // this.physicsWorld.applyImpulse(rigidBody, horizontalImpulse);
    
    // Create dropped ingredient object
    const droppedIngredient: DroppedIngredient = {
      id: `ingredient_${this.nextId++}`,
      ingredient,
      mesh,
      rigidBody,
      position: position.clone(),
      rotation: new THREE.Euler(mesh.rotation.x, mesh.rotation.y, mesh.rotation.z),
      landedAt: Date.now(),
      velocity: new THREE.Vector3(),
      settled: false
    };
    
    this.droppedIngredients.push(droppedIngredient);
    
    // Wait for settling
    setTimeout(() => {
      this.checkSettlement(droppedIngredient);
      this.isDropping = false;
    }, 500);
    
    return droppedIngredient;
  }

  private calculateDropPosition(): THREE.Vector3 {
    // Random position within pizza radius
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 2; // Pizza radius is 2.5, so keep within 2
    
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      this.dropHeight,
      Math.sin(angle) * radius
    );
  }

  private async checkSettlement(ingredient: DroppedIngredient): Promise<void> {
    // Check if ingredient has settled
    const checkInterval = setInterval(() => {
      if (this.physicsWorld.isSettled(ingredient.rigidBody)) {
        ingredient.settled = true;
        clearInterval(checkInterval);
        
        // Add particle effect at landing position
        this.createLandingEffect(ingredient.mesh.position);
      }
    }, 100);
    
    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
      ingredient.settled = true;
    }, 5000);
  }

  private createLandingEffect(position: THREE.Vector3): void {
    // Simple particle burst effect
    const particleCount = 10;
    const particles: THREE.Mesh[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.05, 4, 4);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.8
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.copy(position);
      
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        Math.random() * 5,
        (Math.random() - 0.5) * 5
      );
      
      particle.userData.velocity = velocity;
      particles.push(particle);
      this.sceneManager.addObject(particle);
    }
    
    // Animate particles
    let opacity = 0.8;
    const animateParticles = () => {
      opacity -= 0.02;
      
      particles.forEach(particle => {
        const vel = particle.userData.velocity as THREE.Vector3;
        particle.position.add(vel.clone().multiplyScalar(0.02));
        vel.y -= 0.2; // Gravity
        
        (particle.material as THREE.MeshBasicMaterial).opacity = opacity;
      });
      
      if (opacity > 0) {
        requestAnimationFrame(animateParticles);
      } else {
        // Remove particles
        particles.forEach(particle => {
          this.sceneManager.removeObject(particle);
          particle.geometry.dispose();
          (particle.material as THREE.Material).dispose();
        });
      }
    };
    
    animateParticles();
  }

  async batchDrop(ingredients: Ingredient[], delay: number = 500): Promise<void> {
    for (const ingredient of ingredients) {
      await this.dropIngredient(ingredient);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  getDroppedIngredients(): DroppedIngredient[] {
    return this.droppedIngredients;
  }

  getSettledIngredients(): DroppedIngredient[] {
    return this.physicsWorld.getSettledIngredients(this.droppedIngredients);
  }

  clearAllIngredients(): void {
    this.droppedIngredients.forEach(ingredient => {
      this.sceneManager.removeObject(ingredient.mesh);
      this.physicsWorld.removeBody(ingredient.mesh);
    });
    this.droppedIngredients = [];
    this.physicsWorld.resetCollisionCount();
  }

  canDrop(): boolean {
    return !this.isDropping;
  }
}