# 🍕 Pizza Fortune Teller 3D - Full Specification

## Project Vision
An immersive 3D web experience where users build custom pizzas by dropping physics-enabled ingredients onto a spinning pizza base. Each ingredient's placement, velocity, and interaction with other toppings affects a mystical AI-powered fortune reading. Think "Cooking Simulator" meets "Fortune Cookie" with absurdist humor.

## Core Experience

### The Magic Pizza Kitchen
- **3D Environment**: A mystical pizzeria floating in space/clouds
- **Interactive Camera**: Orbit around the pizza, zoom in/out, dramatic angles
- **Physics Playground**: Ingredients fall, bounce, collide, and stack realistically
- **Ambient Magic**: Floating particles, glowing effects, mystical atmosphere

### Gameplay Loop
1. **Choose Your Base**: Select pizza size and crust type
2. **Pick Ingredients**: Browse a 3D carousel of increasingly absurd toppings
3. **Drop & Watch**: Click to drop ingredients from above, watch physics chaos
4. **Witness the Magic**: Pizza "bakes" with magical effects
5. **Receive Your Fortune**: AI reads your future based on the pizza chaos

## Technical Stack

### Core Technologies
- **Three.js**: 3D graphics and rendering
- **Rapier3D**: Physics simulation
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tooling
- **Claude API**: Fortune generation
- **GSAP**: Smooth animations

## Ingredient System

### Normal Ingredients (Foundation)
```javascript
const normalIngredients = [
  'cheese', 'pepperoni', 'mushrooms', 'onions', 'olives',
  'pineapple', 'bacon', 'sausage', 'anchovies', 'jalapeños',
  'garlic', 'basil', 'tomatoes', 'bell peppers', 'spinach'
];
```

### Bizarre Ingredients (The Fun Part)
```javascript
const bizarreIngredients = [
  // Surreal Items
  'dust bunnies', 'forgotten passwords', 'Monday mornings',
  'crushed dreams', 'tangled Christmas lights', 'expired coupons',
  
  // Weird Foods
  'boiled shoe', 'mystery sauce from back of fridge',
  'Halloween candy from 2019', 'expired yogurt', 'soggy cereal',
  
  // Abstract Concepts
  'every zodiac sign', 'magic 8-ball fluid', 'tears', 'lint',
  
  // Random Objects
  'baseball', 'glass shards', 'bubble wrap', 'rubber duckies',
  'old socks', 'pencil erasers', 'glitter', 'toothpaste',
  'soap bars', 'marbles', 'crayons', 'paper clips',
  
  // Toys & Nonsense
  'toy dinosaurs', 'whoopee cushions', 'miniature umbrellas',
  'friendship bracelet strings', 'deflated balloons',
  
  // Meta Items
  'broken calculators', 'old VHS tapes', 'lost guitar picks',
  'crumpled receipts', 'sticky notes', 'fortune cookie fortunes'
];
```

### Special Ingredients (Unique Physics)
```javascript
const specialIngredients = [
  { name: 'brain', physics: 'jiggly', fortune: 'intelligence' },
  { name: 'eyeballs', physics: 'rolling', fortune: 'perception' },
  { name: 'fingers', physics: 'grasping', fortune: 'dexterity' },
  { name: 'milk varieties', physics: 'liquid', fortune: 'nurture' },
  { name: 'ice cream', physics: 'melting', fortune: 'sweetness' },
  { name: 'jello', physics: 'bouncy', fortune: 'flexibility' },
  { name: 'gummy bears', physics: 'sticky', fortune: 'childlike' }
];
```

## 3D Physics Properties

### Physics Categories
```typescript
interface PhysicsProfile {
  mass: number;           // 0.1 - 5.0
  bounciness: number;     // 0.0 - 1.0
  friction: number;       // 0.0 - 1.0
  airResistance: number;  // 0.0 - 1.0
  stickiness: number;     // 0.0 - 1.0
  meltFactor: number;     // 0.0 - 1.0
  chaosMultiplier: number;// 1.0 - 5.0
}

const physicsProfiles = {
  heavy: { mass: 3.0, bounciness: 0.1, friction: 0.8 },    // Baseball, glass
  light: { mass: 0.2, bounciness: 0.3, airResistance: 0.8 },// Dust, lint
  bouncy: { mass: 0.5, bounciness: 0.9, friction: 0.3 },   // Rubber items
  liquid: { mass: 1.0, bounciness: 0.0, stickiness: 0.9 }, // Milk, sauce
  sticky: { mass: 0.3, bounciness: 0.2, stickiness: 0.8 }, // Gummy, glue
  rigid: { mass: 1.5, bounciness: 0.4, friction: 0.6 },    // Normal foods
  ethereal: { mass: 0.1, bounciness: 0.5, airResistance: 0.9 } // Dreams, concepts
};
```

## 3D Visual Representation

### Model Strategy
```typescript
type ModelType = 
  | 'realistic'    // Actual 3D models (pepperoni, mushrooms)
  | 'symbolic'     // Abstract representation (dreams = cloud)
  | 'particle'     // Particle system (dust, glitter)
  | 'procedural'   // Generated geometry (liquids, jello)
  | 'text3d'       // 3D text for concepts ("Monday")
  | 'composite';   // Multiple elements (zodiac signs = 12 symbols)
```

### Visual Effects per Ingredient
- **Normal Foods**: Realistic textures, subsurface scattering
- **Liquids**: Shader-based flowing, pooling effects
- **Abstract Concepts**: Glowing auras, particle trails
- **Objects**: Toon shading for toy-like appearance
- **Ethereal Items**: Transparency, floating animation

## Fortune Generation System

### Physics-Based Fortune Factors
```typescript
interface PizzaPhysicsAnalysis {
  // Chaos Metrics
  totalCollisions: number;
  maxVelocityReached: number;
  chaosScore: number; // 0-100
  
  // Balance Metrics  
  centerOfMass: Vector3;
  symmetryScore: number; // 0-100
  distributionPattern: 'centered' | 'edge-heavy' | 'chaotic' | 'balanced';
  
  // Stacking Metrics
  maxStackHeight: number;
  towerFormations: TowerInfo[];
  stabilityScore: number; // 0-100
  
  // Interaction Metrics
  ingredientClusters: Cluster[];
  loneIngredients: string[];
  bondStrength: number; // How well things stuck together
  
  // Time Metrics
  settleTime: number; // How long until everything stopped moving
  lastIngredientLanded: string;
}
```

### AI Fortune Prompt Structure
```typescript
const generateFortunePrompt = (analysis: PizzaPhysicsAnalysis, ingredients: Ingredient[]) => `
You are a mystical pizza fortune teller. Based on this pizza's creation:

INGREDIENTS CHOSEN: ${ingredients.map(i => i.name).join(', ')}

PHYSICS STORY:
- Chaos Level: ${analysis.chaosScore}/100 (${getChaosInterpretation(analysis.chaosScore)})
- Balance: ${analysis.symmetryScore}/100 (${getBalanceInterpretation(analysis.distributionPattern)})
- Stability: ${analysis.stabilityScore}/100
- Settlement Time: ${analysis.settleTime}s (${getpatienceInterpretation(analysis.settleTime)})

INGREDIENT RELATIONSHIPS:
- Clusters formed: ${analysis.ingredientClusters.map(c => c.members.join('+')).join(', ')}
- Loners: ${analysis.loneIngredients.join(', ')}
- Tallest tower: ${analysis.maxStackHeight} ingredients high

Generate a mystical fortune that:
1. Interprets the chaos as life energy
2. Reads meaning from ingredient combinations
3. Predicts future based on physics patterns
4. Includes one specific prediction based on the weirdest ingredient
5. Ends with lucky numbers derived from collision count

Keep it mystical yet humorous. Reference specific ingredients in cosmic terms.
`;
```

## User Interface

### 3D Scene Layout
```
┌──────────────────────────────────────┐
│  [Ingredient Shelf - 3D Carousel]    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐       │
│  │ 🧀 │ │ 🍄 │ │ 👁️ │ │ 🧸 │  ...  │
│  └────┘ └────┘ └────┘ └────┘       │
├──────────────────────────────────────┤
│                                      │
│         [3D Pizza Scene]             │
│            ┌─────┐                   │
│           /       \                  │
│          │  Pizza  │                 │
│           \       /                  │
│            └─────┘                   │
│     [Orbit Camera Controls]          │
│                                      │
├──────────────────────────────────────┤
│ [Shake] [Bake] [Reset] [Screenshot]  │
└──────────────────────────────────────┘
```

### Interactive Elements
- **Ingredient Shelf**: Rotates in 3D, hover for preview
- **Drop Zones**: Click anywhere above pizza to drop
- **Camera**: Mouse drag to orbit, scroll to zoom
- **Action Buttons**: Physical interactions with pizza

## Animation & Effects

### Drop Sequence
1. **Selection**: Ingredient glows and levitates from shelf
2. **Trajectory**: Arcs through air with trail effect
3. **Impact**: Particle burst, sound effect, ripple on pizza
4. **Settling**: Realistic physics settling with micro-bounces
5. **Reaction**: Other ingredients respond to impact

### Baking Animation
1. **Oven Door**: Virtual oven door closes over pizza
2. **Heat Waves**: Shader-based heat distortion
3. **Transformation**: Cheese melts, ingredients sizzle
4. **Steam**: Particle system steam effects
5. **Golden Glow**: Pizza gains magical aura

### Fortune Reveal
1. **Cosmic Zoom**: Camera pulls back to show stars
2. **Levitation**: Pizza and ingredients float and spin
3. **Crystal Ball**: Translucent sphere encompasses pizza
4. **Text Materialization**: Fortune appears letter by letter
5. **Lucky Numbers**: Slot machine style number reveal

## Sound Design

### Dynamic Audio System
```typescript
interface SoundCategories {
  impacts: {
    soft: string[];     // Cheese, bread
    hard: string[];     // Baseball, marbles  
    wet: string[];      // Sauces, liquids
    bizarre: string[];  // Dreams, concepts (ethereal sounds)
  };
  
  ambient: {
    kitchen: string;           // Background pizzeria
    mystical: string;          // Fortune telling mode
    space: string;            // Cosmic view
  };
  
  reactions: {
    squish: string[];         // Stacking sounds
    clatter: string[];        // Multiple collisions
    magical: string[];        // Special ingredients
  };
  
  ui: {
    hover: string;
    select: string;
    drop: string;
    shake: string;
    bake: string;
    reveal: string;
  };
}
```

## Performance Optimization

### Level of Detail (LOD)
- **Close**: Full geometry, all particles
- **Medium**: Simplified meshes, reduced particles  
- **Far**: Billboard sprites, no particles

### Physics Optimization
- Sleep threshold for settled objects
- Maximum 30 active rigid bodies
- Simplified colliders for distant objects
- Batch similar ingredients

### Mobile Adaptations
- Reduced polygon count
- Simpler shaders
- Touch-friendly controls
- Progressive physics complexity

## API Security

### Environment Variables
```env
VITE_CLAUDE_API_KEY=sk-ant-api03-xxxxx
VITE_API_ENDPOINT=https://api.anthropic.com/v1/messages
```

### API Proxy Setup
- Never expose API key in client code
- Use serverless function or backend proxy
- Rate limiting per session
- Implement caching for similar pizzas

## Development Phases

### Phase 1: Core 3D World (Week 1)
- Three.js scene setup
- Basic pizza base model
- Camera controls
- Simple lighting

### Phase 2: Physics Integration (Week 1)
- Rapier3D setup
- Basic drop mechanics
- Collision detection
- Settling detection

### Phase 3: Ingredient System (Week 2)
- 15 normal ingredients
- 15 bizarre ingredients
- Different physics profiles
- Visual representations

### Phase 4: Fortune System (Week 2)
- Physics analysis
- Claude API integration
- Fortune generation
- Display UI

### Phase 5: Polish (Week 3)
- All 95 ingredients
- Particle effects
- Sound system
- Animations

### Phase 6: Optimization (Week 3)
- Mobile support
- Performance tuning
- Loading optimization
- Error handling

## Success Metrics
- 60 FPS on desktop
- 30 FPS on mobile
- < 3 second initial load
- < 1 second fortune generation
- Shareable pizza screenshots
- Social media integration

## Easter Eggs
- Secret ingredient combinations unlock special fortunes
- Physics glitches become "cosmic events"
- Stack 10+ ingredients for "Tower of Babel" achievement
- All bizarre ingredients = "Chaos Pizza" special ending
- Hidden ingredient: "The Developer's Sanity"