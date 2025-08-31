# Pizza Fortune Teller 3D - Technical Specification

## Project Overview

An immersive 3D web application where users build a custom pizza by dropping physics-enabled ingredients onto a pizza base using Three.js and Rapier physics. Each ingredient placement affects the mystical fortune reading, creating a fun blend of pizza-making simulation and fortune-telling entertainment.

## Core Features

### 1. 3D Pizza Builder
- Interactive 3D scene with rotating camera
- Physics-based ingredient dropping
- Realistic collision and stacking
- Ingredient bouncing and settling animations
- Real-time shadows and lighting
- Pizza base that catches ingredients

### 2. Physics Simulation
- Gravity-affected ingredient drops
- Collision detection between ingredients
- Ingredients settle naturally on pizza
- Bounce and friction parameters per ingredient
- Ability to "shake" the pizza to redistribute toppings

### 3. Fortune Generation
- AI-powered fortune based on:
  - Which ingredients were chosen
  - How ingredients landed (position, orientation)
  - Ingredient clustering patterns
  - "Chaos factor" from physics interactions
- Shareable 3D pizza snapshot with fortune

### 4. User Experience
- Click ingredients from a 3D carousel/shelf
- Drop ingredients from above the pizza
- Camera controls (orbit, zoom)
- Particle effects on ingredient impact
- Sound effects for drops and collisions
- "Bake" animation before fortune reveal

## Technical Architecture

### Frontend Structure

```
pizza-fortune-3d/
├── index.html
├── styles/
│   ├── main.css
│   ├── ui-overlay.css
│   └── fortune-display.css
├── scripts/
│   ├── app.ts
│   ├── types.ts
│   ├── scene/
│   │   ├── SceneManager.ts
│   │   ├── PizzaBase.ts
│   │   ├── IngredientMesh.ts
│   │   ├── Lighting.ts
│   │   └── CameraController.ts
│   ├── physics/
│   │   ├── PhysicsWorld.ts
│   │   ├── IngredientBody.ts
│   │   └── CollisionHandler.ts
│   ├── components/
│   │   ├── IngredientSpawner.ts
│   │   ├── IngredientSelector.ts
│   │   ├── FortuneDisplay.ts
│   │   └── ParticleSystem.ts
│   ├── services/
│   │   ├── FortuneGenerator.ts
│   │   ├── AssetLoader.ts
│   │   └── SoundManager.ts
│   └── utils/
│       ├── MeshFactory.ts
│       └── PhysicsHelpers.ts
├── assets/
│   ├── models/
│   │   ├── ingredients/
│   │   └── pizza-base.glb
│   ├── textures/
│   │   ├── ingredients/
│   │   └── environment/
│   └── sounds/
└── shaders/
    ├── cheese-melt.glsl
    └── sauce-spread.glsl
```

## Data Models

### TypeScript Interfaces

```typescript
import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d';

interface Ingredient3D {
  id: string;
  name: string;
  category: 'sauce' | 'cheese' | 'meat' | 'vegetable' | 'special';
  modelPath: string;
  texturePath?: string;
  scale: THREE.Vector3;
  fortuneTraits: FortuneTrait[];
  physics: PhysicsProperties;
  meshProperties: MeshProperties;
}

interface PhysicsProperties {
  mass: number;
  restitution: number; // bounciness
  friction: number;
  linearDamping: number;
  angularDamping: number;
  colliderType: 'box' | 'sphere' | 'cylinder' | 'convexHull';
  colliderScale?: THREE.Vector3;
}

interface MeshProperties {
  castShadow: boolean;
  receiveShadow: boolean;
  materialType: 'standard' | 'physical' | 'toon';
  materialProps: any;
}

interface DroppedIngredient {
  id: string;
  ingredient: Ingredient3D;
  mesh: THREE.Mesh;
  rigidBody: RAPIER.RigidBody;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  landedAt: Date;
  velocity: THREE.Vector3;
  settled: boolean;
}

interface Pizza3D {
  id: string;
  base: PizzaBase;
  droppedIngredients: DroppedIngredient[];
  chaosScore: number; // Based on how messily ingredients landed
  symmetryScore: number; // Based on ingredient distribution
  stackHeight: number; // Maximum ingredient stack height
  createdAt: Date;
}

interface PizzaBase {
  mesh: THREE.Mesh;
  rigidBody: RAPIER.RigidBody;
  radius: number;
  thickness: number;
  crust: 'thin' | 'thick' | 'stuffed';
}

interface Fortune3D {
  id: string;
  pizzaId: string;
  generalReading: string;
  chaosInterpretation: string; // Based on how ingredients landed
  symmetryMeaning: string; // Based on pizza balance
  heightPrediction: string; // Based on stacking
  ingredientMeanings: IngredientMeaning[];
  physicsInsights: PhysicsInsight[];
}

interface PhysicsInsight {
  description: string;
  meaning: string;
  intensity: number;
}

interface SceneState {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  physicsWorld: RAPIER.World;
  isPaused: boolean;
  isDropping: boolean;
  selectedIngredient: Ingredient3D | null;
}
```

## Component Specifications

### SceneManager Component

**Responsibilities:**
- Initialize Three.js scene
- Manage render loop
- Handle window resize
- Coordinate physics updates
- Manage scene objects

**Implementation:**
```typescript
class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private physicsWorld: PhysicsWorld;
  private clock: THREE.Clock;

  init(container: HTMLElement): void;
  animate(): void;
  addObject(mesh: THREE.Mesh, body?: RAPIER.RigidBody): void;
  removeObject(mesh: THREE.Mesh): void;
  captureSnapshot(): string; // Base64 image
  private updatePhysics(delta: number): void;
  private render(): void;
}
```

### PhysicsWorld Component

**Responsibilities:**
- Initialize Rapier physics world
- Create rigid bodies and colliders
- Handle collision events
- Sync physics with Three.js meshes

**Implementation:**
```typescript
class PhysicsWorld {
  private world: RAPIER.World;
  private eventQueue: RAPIER.EventQueue;
  private meshToBody: Map<THREE.Mesh, RAPIER.RigidBody>;

  init(): void;
  createRigidBody(
    mesh: THREE.Mesh,
    props: PhysicsProperties
  ): RAPIER.RigidBody;

  createPizzaBase(radius: number, thickness: number): RAPIER.RigidBody;
  step(delta: number): void;
  syncMeshWithBody(mesh: THREE.Mesh, body: RAPIER.RigidBody): void;
  onCollision(callback: CollisionCallback): void;

  // Special physics methods
  applyImpulse(body: RAPIER.RigidBody, force: THREE.Vector3): void;
  shakePizza(intensity: number): void;
  getSettledIngredients(): DroppedIngredient[];
}
```

### IngredientSpawner Component

**Responsibilities:**
- Spawn ingredients above pizza
- Apply initial velocity/rotation
- Manage drop animation
- Queue multiple ingredients

**Implementation:**
```typescript
class IngredientSpawner {
  private spawnHeight: number = 10;
  private dropQueue: Ingredient3D[];
  private isDropping: boolean;

  dropIngredient(
    ingredient: Ingredient3D,
    dropPosition?: THREE.Vector3
  ): Promise<DroppedIngredient>;

  private createIngredientMesh(ingredient: Ingredient3D): THREE.Mesh;
  private calculateDropPosition(): THREE.Vector3;
  private addRandomSpin(body: RAPIER.RigidBody): void;
  batchDrop(ingredients: Ingredient3D[]): Promise<void>;
}
```

### CameraController Component

**Responsibilities:**
- Orbit controls around pizza
- Zoom limits
- Smooth camera movements
- Focus animations

**Implementation:**
```typescript
class CameraController {
  private camera: THREE.PerspectiveCamera;
  private controls: THREE.OrbitControls;
  private targetPosition: THREE.Vector3;

  init(camera: THREE.PerspectiveCamera, domElement: HTMLElement): void;
  setLimits(minDistance: number, maxDistance: number): void;
  focusOnPizza(pizza: PizzaBase, duration: number): void;
  shakeCamera(intensity: number, duration: number): void;
  animateToPosition(position: THREE.Vector3, target: THREE.Vector3): void;
  enableControls(enabled: boolean): void;
}
```

### ParticleSystem Component

**Responsibilities:**
- Impact particles when ingredients land
- Steam effects during "baking"
- Magical sparkles during fortune reveal
- Ingredient-specific effects

**Implementation:**
```typescript
class ParticleSystem {
  private particlePool: THREE.Points[];
  private activeEffects: ParticleEffect[];

  createImpactEffect(
    position: THREE.Vector3,
    ingredient: Ingredient3D
  ): void;

  createSteamEffect(pizza: Pizza3D): void;
  createMagicReveal(duration: number): void;
  update(delta: number): void;

  private recycleParticles(effect: ParticleEffect): void;
}
```

## 3D Assets & Materials

### Ingredient Models

```typescript
const INGREDIENT_CONFIGS: Record<string, Ingredient3D> = {
  pepperoni: {
    id: 'pepperoni',
    name: 'Pepperoni',
    category: 'meat',
    modelPath: '/assets/models/ingredients/pepperoni.glb',
    scale: new THREE.Vector3(0.5, 0.5, 0.1),
    physics: {
      mass: 0.2,
      restitution: 0.3,
      friction: 0.8,
      linearDamping: 0.5,
      angularDamping: 0.5,
      colliderType: 'cylinder'
    },
    meshProperties: {
      castShadow: true,
      receiveShadow: true,
      materialType: 'physical',
      materialProps: {
        roughness: 0.8,
        metalness: 0.1,
        clearcoat: 0.3
      }
    },
    fortuneTraits: [
      { category: 'personality', weight: 0.8, keywords: ['bold', 'spicy'] }
    ]
  },
  mushroom: {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'vegetable',
    modelPath: '/assets/models/ingredients/mushroom.glb',
    scale: new THREE.Vector3(0.3, 0.3, 0.3),
    physics: {
      mass: 0.1,
      restitution: 0.5, // bouncier
      friction: 0.6,
      linearDamping: 0.3,
      angularDamping: 0.3,
      colliderType: 'convexHull'
    },
    // ... more properties
  }
  // ... more ingredients
};
```

### Pizza Base Geometry

```typescript
class PizzaBaseGeometry {
  static createDough(radius: number, thickness: number): THREE.BufferGeometry {
    // Custom geometry with raised edges
    const geometry = new THREE.CylinderGeometry(
      radius * 0.95, // top radius (slightly smaller for crust lip)
      radius,        // bottom radius
      thickness,
      64,           // segments for smoothness
      1,
      false
    );

    // Add displacement for crust
    this.addCrustDisplacement(geometry);
    return geometry;
  }

  static createSauceLayer(radius: number): THREE.BufferGeometry {
    // Slightly smaller than base, with irregular edges
    // Uses custom shader for spreading animation
  }
}
```

## Physics Configuration

### World Settings

```typescript
const PHYSICS_CONFIG = {
  gravity: { x: 0.0, y: -9.81, z: 0.0 },
  timestep: 1/60,
  substeps: 4,

  // Pizza base physics
  pizzaBase: {
    restitution: 0.1, // Not bouncy
    friction: 1.0,    // High friction to catch ingredients
    mass: 0,          // Static (infinite mass)
  },

  // Drop configuration
  drop: {
    minHeight: 8,
    maxHeight: 12,
    randomSpinForce: 2,
    lateralRandomness: 1, // Random x/z offset
  },

  // Settlement detection
  settlement: {
    velocityThreshold: 0.1,
    angularThreshold: 0.1,
    checkDelay: 500, // ms after landing
  }
};
```

### Collision Groups

```typescript
enum CollisionGroups {
  PIZZA_BASE = 0x0001,
  INGREDIENTS = 0x0002,
  BOUNDARIES = 0x0004,
  SENSORS = 0x0008,
}

// Ingredients collide with everything
// Pizza base only collides with ingredients
// Boundaries prevent ingredients from falling off table
```

## Fortune Generation Algorithm (3D Enhanced)

### Physics-Based Fortune Factors

```typescript
interface PhysicsFortuneFactors {
  chaosScore: number;        // Based on final velocities, rotations
  symmetryScore: number;      // Distribution around center
  stackingScore: number;      // How well ingredients stacked
  coverageScore: number;      // Pizza surface coverage
  collisionIntensity: number; // How hard ingredients hit
  settleTime: number;         // Time to settle (patience indicator)
  centerMass: THREE.Vector3;  // Balance point of toppings
}

class Fortune3DGenerator {
  generateFortune(pizza: Pizza3D): Fortune3D {
    const factors = this.analyzePhysics(pizza);
    const traits = this.extractTraits(pizza.droppedIngredients);

    return {
      generalReading: this.generateReading(traits, factors),
      chaosInterpretation: this.interpretChaos(factors.chaosScore),
      symmetryMeaning: this.interpretSymmetry(factors.symmetryScore),
      heightPrediction: this.interpretHeight(factors.stackingScore),
      physicsInsights: this.generatePhysicsInsights(factors),
      ingredientMeanings: this.analyzeIngredientPositions(pizza)
    };
  }

  private interpretChaos(score: number): string {
    // High chaos = adventurous spirit, embracing change
    // Low chaos = seeking stability, methodical approach
  }

  private analyzeIngredientClusters(pizza: Pizza3D): ClusterMeaning[] {
    // Ingredients that landed together have connected meanings
    // Use DBSCAN or similar clustering algorithm
  }
}
```

## Rendering Pipeline

### Three.js Setup

```typescript
class Renderer {
  private renderer: THREE.WebGLRenderer;
  private composer: THREE.EffectComposer;

  init() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true, // For screenshots
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    // Post-processing
    this.setupPostProcessing();
  }

  private setupPostProcessing() {
    // Bloom for magical effects
    // SSAO for better depth
    // FXAA for anti-aliasing
  }
}
```

### Lighting Setup

```typescript
class LightingSetup {
  static create(scene: THREE.Scene) {
    // Key light (main directional)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(5, 10, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;

    // Fill light (softer, opposite side)
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.5);
    fillLight.position.set(-5, 5, -5);

    // Rim light (backlight for depth)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 5, -10);

    // Ambient light (overall brightness)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

    // Environment map for reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    // Load HDR environment map

    scene.add(keyLight, fillLight, rimLight, ambientLight);
  }
}
```

## Animation System

### Ingredient Drop Sequence

```typescript
class DropAnimation {
  async animateIngredientDrop(
    ingredient: DroppedIngredient,
    spawner: IngredientSpawner
  ): Promise<void> {
    // 1. Spawn above pizza with "poof" particle effect
    await spawner.spawnWithEffect(ingredient);

    // 2. Apply initial impulse and random spin
    this.applyDropForces(ingredient.rigidBody);

    // 3. Wait for settlement
    await this.waitForSettlement(ingredient);

    // 4. Trigger impact particles based on collision force
    this.createImpactEffect(ingredient);

    // 5. Small "bounce settle" animation
    await this.microBounce(ingredient);
  }
}
```

### Fortune Reveal Animation

```typescript
class FortuneRevealAnimation {
  async reveal(pizza: Pizza3D, fortune: Fortune3D): Promise<void> {
    // 1. Camera pulls back to show full pizza
    await camera.animateToRevealPosition();

    // 2. Pizza starts glowing/steaming
    particles.createSteamEffect(pizza);

    // 3. Ingredients briefly levitate and spin
    await this.levitateIngredients(pizza.droppedIngredients);

    // 4. Magical particles swirl around pizza
    particles.createMagicSwirl();

    // 5. Fortune UI fades in with typewriter effect
    await ui.revealFortune(fortune);
  }
}
```

## Performance Optimizations

### Level of Detail (LOD)

```typescript
class IngredientLOD {
  createLODMesh(ingredient: Ingredient3D): THREE.LOD {
    const lod = new THREE.LOD();

    // High detail (close up)
    const highDetail = this.loadModel(ingredient.modelPath);
    lod.addLevel(highDetail, 0);

    // Medium detail
    const mediumDetail = this.createSimplifiedMesh(highDetail, 0.5);
    lod.addLevel(mediumDetail, 10);

    // Low detail (far away)
    const lowDetail = this.createSimplifiedMesh(highDetail, 0.2);
    lod.addLevel(lowDetail, 20);

    return lod;
  }
}
```

### Physics Optimization

```typescript
const PHYSICS_OPTIMIZATIONS = {
  // Sleep ingredients that have settled
  sleepThreshold: {
    linear: 0.1,
    angular: 0.1,
  },

  // Reduce simulation rate for settled objects
  adaptiveTimestep: true,

  // Broad phase optimization
  broadPhase: 'SweepAndPrune',

  // Limit active bodies
  maxActiveBodies: 50,

  // Simplify distant collision shapes
  distanceLOD: true,
};
```

## Interaction Methods

### Input Handling

```typescript
class InteractionManager {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  onMouseClick(event: MouseEvent): void {
    // Raycast to check if clicking on ingredient shelf
    const intersects = this.raycast(event);

    if (intersects.length > 0) {
      const object = intersects[0].object;

      if (object.userData.isIngredient) {
        this.selectIngredient(object.userData.ingredient);
      } else if (object.userData.isPizza) {
        this.dropSelectedIngredient(intersects[0].point);
      }
    }
  }

  onTouchDrop(event: TouchEvent): void {
    // Handle mobile touch events
    // Support pinch zoom, rotate gestures
  }
}
```

## Sound Design

```typescript
const SOUND_MAP = {
  // Impact sounds based on ingredient type
  impacts: {
    soft: ['/sounds/soft_land_1.mp3', '/sounds/soft_land_2.mp3'],
    hard: ['/sounds/hard_land_1.mp3', '/sounds/hard_land_2.mp3'],
    wet: ['/sounds/wet_splat_1.mp3', '/sounds/wet_splat_2.mp3'],
  },

  // UI sounds
  ui: {
    select: '/sounds/ingredient_select.mp3',
    hover: '/sounds/hover.mp3',
    fortuneReveal: '/sounds/magical_reveal.mp3',
  },

  // Ambient
  ambient: {
    kitchen: '/sounds/kitchen_ambience.mp3',
    mystical: '/sounds/fortune_teller_ambience.mp3',
  }
};

class SoundManager {
  private audioContext: AudioContext;
  private sounds: Map<string, AudioBuffer>;

  playImpactSound(
    ingredient: Ingredient3D,
    velocity: number
  ): void {
    const volume = Math.min(velocity / 10, 1.0);
    const soundType = this.getSoundType(ingredient);
    this.play(soundType, volume);
  }
}
```

## Mobile Optimization

```typescript
class MobileOptimizer {
  static getQualitySettings(): QualitySettings {
    const isMobile = /Android|webOS|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      return {
        shadowMapSize: 512,
        antialias: false,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        maxIngredients: 8,
        particleCount: 100,
        postProcessing: false,
      };
    }

    return {
      shadowMapSize: 2048,
      antialias: true,
      pixelRatio: window.devicePixelRatio,
      maxIngredients: 20,
      particleCount: 500,
      postProcessing: true,
    };
  }
}
```

## Development Roadmap

### Phase 1: Core 3D Implementation
- Basic Three.js scene setup
- Pizza base and simple ingredients
- Basic Rapier physics integration
- Simple drop mechanics

### Phase 2: Enhanced Physics
- Realistic collision responses
- Ingredient settling detection
- Multiple collision shapes
- Physics-based fortune factors

### Phase 3: Visual Polish
- Particle effects system
- Advanced materials and textures
- Post-processing effects
- Smooth animations

### Phase 4: Fortune Integration
- Physics analysis algorithms
- 3D-aware fortune generation
- Visual fortune reveal
- Screenshot/share functionality

### Phase 5: Advanced Features
- Multiplayer pizza building
- VR/AR support
- Recipe saving/loading
- Achievements and unlockables
