import './style.css';
import * as THREE from 'three';
import { SceneManager } from './scene/SceneManager';
import { PhysicsWorld } from './physics/PhysicsWorld';
import { IngredientSpawner } from './ingredients/IngredientSpawner';
import { FortuneGenerator } from './fortune/FortuneGenerator';
import { INGREDIENTS } from './ingredients/ingredientData';
import { Ingredient, Pizza } from './types';

class PizzaFortuneApp {
  private sceneManager: SceneManager;
  private physicsWorld: PhysicsWorld;
  private ingredientSpawner: IngredientSpawner;
  private fortuneGenerator: FortuneGenerator;
  private selectedIngredient: Ingredient | null = null;
  private clock: THREE.Clock;
  private isInitialized = false;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private previewMesh: THREE.Mesh | null = null;

  constructor() {
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.init();
  }

  private async init(): Promise<void> {
    try {
      // Get containers
      const sceneContainer = document.getElementById('scene-container');
      const loadingScreen = document.getElementById('loading-screen');
      
      if (!sceneContainer) {
        throw new Error('Scene container not found');
      }

      // Initialize scene
      this.sceneManager = new SceneManager(sceneContainer);
      
      // Initialize physics
      this.physicsWorld = new PhysicsWorld();
      await this.physicsWorld.init();
      
      // Initialize ingredient spawner
      this.ingredientSpawner = new IngredientSpawner(this.sceneManager, this.physicsWorld);
      
      // Initialize fortune generator
      this.fortuneGenerator = new FortuneGenerator();
      
      // Setup UI
      this.setupIngredientCarousel();
      this.setupControls();
      this.setupClickHandlers();
      
      // Hide loading screen
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
      
      // Setup splash screen
      this.setupSplashScreen();
      
      // Start animation loop
      this.isInitialized = true;
      this.sceneManager.start();
      this.animate();
      
    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.showError('Failed to initialize the mystical pizza kitchen');
    }
  }

  private setupSplashScreen(): void {
    const splashScreen = document.getElementById('splash-screen');
    const startBtn = document.getElementById('start-btn');
    
    if (splashScreen && startBtn) {
      startBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        setTimeout(() => {
          splashScreen.style.display = 'none';
        }, 500);
      });
    }
  }
  
  private setupIngredientCarousel(): void {
    this.setupIngredientPanel();
  }
  
  private setupIngredientPanel(): void {
    const grid = document.getElementById('ingredient-grid');
    if (!grid) return;
    
    // Category tabs
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const category = target.dataset.category || 'all';
        this.filterIngredients(category);
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        target.classList.add('active');
      });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.ingredient-search') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase();
        this.searchIngredients(query);
      });
    }
    
    // Populate grid with all ingredients
    this.populateIngredientGrid(INGREDIENTS);
  }
  
  private populateIngredientGrid(ingredients: Ingredient[]): void {
    const grid = document.getElementById('ingredient-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    ingredients.forEach(ingredient => {
      const card = document.createElement('div');
      card.className = 'ingredient-card';
      card.dataset.ingredientId = ingredient.id;
      card.dataset.category = ingredient.category;
      card.dataset.name = ingredient.name.toLowerCase();
      
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.textContent = ingredient.emoji || '🍕';
      
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = ingredient.name;
      
      card.appendChild(emoji);
      card.appendChild(name);
      
      card.addEventListener('click', () => this.selectIngredient(ingredient, card));
      
      grid.appendChild(card);
    });
  }
  
  private filterIngredients(category: string): void {
    const cards = document.querySelectorAll('.ingredient-card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  private searchIngredients(query: string): void {
    const cards = document.querySelectorAll('.ingredient-card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      const name = card.dataset.name || '';
      if (name.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  private selectIngredient(ingredient: Ingredient, element: HTMLElement): void {
    // Toggle selection
    if (this.selectedIngredient?.id === ingredient.id) {
      // Deselect if clicking the same ingredient
      element.classList.remove('selected');
      this.selectedIngredient = null;
      document.body.classList.remove('has-ingredient');
      this.updateSelectedDisplay(null);
    } else {
      // Remove previous selection
      document.querySelectorAll('.ingredient-card').forEach(item => {
        item.classList.remove('selected');
      });
      
      // Select new ingredient
      element.classList.add('selected');
      this.selectedIngredient = ingredient;
      document.body.classList.add('has-ingredient');
      
      // Update selected display
      this.updateSelectedDisplay(ingredient);
      
      // Create preview mesh
      if (this.previewMesh) {
        this.sceneManager.removeObject(this.previewMesh);
        this.previewMesh = null;
      }
      this.createPreviewMesh();
    }
  }
  
  private updateSelectedDisplay(ingredient: Ingredient | null): void {
    const display = document.querySelector('.selected-display');
    if (!display) return;
    
    if (ingredient) {
      display.classList.remove('empty');
      display.innerHTML = `
        <div class="selected-name">${ingredient.emoji} ${ingredient.name}</div>
        <div class="instruction">Click on the pizza to drop!</div>
      `;
    } else {
      display.classList.add('empty');
      display.textContent = 'Select an ingredient to begin';
    }
  }
  

  private setupControls(): void {
    const shakeBtn = document.getElementById('shake-btn');
    const bakeBtn = document.getElementById('bake-btn');
    const resetBtn = document.getElementById('reset-btn');
    const screenshotBtn = document.getElementById('screenshot-btn');
    
    shakeBtn?.addEventListener('click', () => {
      this.physicsWorld.shakePizza(5);
    });
    
    bakeBtn?.addEventListener('click', () => {
      this.bakePizza();
    });
    
    resetBtn?.addEventListener('click', () => {
      this.reset();
    });
    
    screenshotBtn?.addEventListener('click', () => {
      this.takeScreenshot();
    });
  }

  private setupClickHandlers(): void {
    const canvas = this.sceneManager.getState().renderer.domElement;
    
    // Mouse move for preview
    canvas.addEventListener('mousemove', (event) => {
      if (!this.selectedIngredient) {
        if (this.previewMesh) {
          this.sceneManager.removeObject(this.previewMesh);
          this.previewMesh = null;
        }
        return;
      }
      
      // Update mouse position
      const rect = canvas.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update preview position
      this.updatePreviewPosition();
    });
    
    // Click to drop
    canvas.addEventListener('click', (event) => {
      if (!this.selectedIngredient || !this.ingredientSpawner.canDrop()) {
        return;
      }
      
      // Get intersection point from preview
      const dropPosition = this.getIntersectionPoint();
      if (dropPosition) {
        // Drop directly above the clicked position
        dropPosition.y = 2; // Drop from height 2 (lower for better accuracy)
        this.dropSelectedIngredient(dropPosition);
      }
    });
  }
  
  private updatePreviewPosition(): void {
    if (!this.selectedIngredient) return;
    
    const intersectionPoint = this.getIntersectionPoint();
    if (!intersectionPoint) {
      if (this.previewMesh) {
        this.previewMesh.visible = false;
      }
      return;
    }
    
    // Create or update preview mesh
    if (!this.previewMesh) {
      this.createPreviewMesh();
    }
    
    if (this.previewMesh) {
      this.previewMesh.position.copy(intersectionPoint);
      this.previewMesh.position.y += 0.2; // Slightly above pizza surface
      this.previewMesh.visible = true;
    }
  }
  
  private createPreviewMesh(): void {
    if (!this.selectedIngredient) return;
    
    // Create a simple preview mesh based on ingredient
    const geometry = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 16);
    const material = new THREE.MeshBasicMaterial({
      color: parseInt(this.selectedIngredient.color.replace('#', '0x')),
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    
    this.previewMesh = new THREE.Mesh(geometry, material);
    this.previewMesh.name = 'preview';
    this.sceneManager.addObject(this.previewMesh);
  }
  
  private getIntersectionPoint(): THREE.Vector3 | null {
    const camera = this.sceneManager.getState().camera;
    const scene = this.sceneManager.getState().scene;
    
    // Cast ray from camera
    this.raycaster.setFromCamera(this.mouse, camera);
    
    // Get pizza base
    const pizzaBase = scene.getObjectByName('pizzaBase');
    if (!pizzaBase) return null;
    
    // Check intersection with pizza
    const intersects = this.raycaster.intersectObject(pizzaBase, false);
    
    if (intersects.length > 0) {
      return intersects[0].point;
    }
    
    return null;
  }

  private async dropSelectedIngredient(position?: THREE.Vector3): Promise<void> {
    if (!this.selectedIngredient || !this.ingredientSpawner.canDrop()) {
      return;
    }
    
    try {
      await this.ingredientSpawner.dropIngredient(this.selectedIngredient, position);
      
      // Keep the selection active for multiple drops
      // Don't clear selection after drop
      
    } catch (error) {
      console.error('Failed to drop ingredient:', error);
    }
  }

  private animate(): void {
    if (!this.isInitialized) return;
    
    requestAnimationFrame(this.animate.bind(this));
    
    const delta = this.clock.getDelta();
    
    // Update physics
    this.physicsWorld.step(delta);
  }

  private async bakePizza(): Promise<void> {
    const fortuneDisplay = document.getElementById('fortune-display');
    const bakeBtn = document.getElementById('bake-btn') as HTMLButtonElement;
    
    if (!fortuneDisplay || !bakeBtn) return;
    
    // Disable bake button
    bakeBtn.disabled = true;
    
    // Get dropped ingredients
    const droppedIngredients = this.ingredientSpawner.getDroppedIngredients();
    
    if (droppedIngredients.length === 0) {
      alert('Add some ingredients to your pizza first!');
      bakeBtn.disabled = false;
      return;
    }
    
    // Create pizza object
    const pizza: Pizza = {
      id: `pizza_${Date.now()}`,
      droppedIngredients,
      chaosScore: Math.random() * 100, // Calculate based on physics
      symmetryScore: Math.random() * 100, // Calculate based on distribution
      stackHeight: Math.max(...droppedIngredients.map(i => i.position.y)),
      totalCollisions: this.physicsWorld.getTotalCollisions(),
      createdAt: new Date()
    };
    
    // Analyze physics and generate fortune
    const analysis = this.fortuneGenerator.analyzePhysics(pizza);
    const fortune = await this.fortuneGenerator.generateFortune(pizza, analysis);
    
    // Display fortune
    const fortuneText = document.getElementById('fortune-text');
    const luckyNumbers = document.getElementById('lucky-numbers');
    
    if (fortuneText && luckyNumbers) {
      fortuneText.textContent = fortune.generalReading;
      
      // Display lucky numbers
      luckyNumbers.innerHTML = '';
      fortune.luckyNumbers.forEach((num, i) => {
        const numElement = document.createElement('div');
        numElement.className = 'lucky-number';
        numElement.style.setProperty('--i', i.toString());
        numElement.textContent = num.toString();
        luckyNumbers.appendChild(numElement);
      });
    }
    
    // Show fortune display with animation
    fortuneDisplay.classList.remove('hidden');
    
    // Re-enable button after delay
    setTimeout(() => {
      bakeBtn.disabled = false;
    }, 2000);
  }

  private reset(): void {
    // Clear all ingredients
    this.ingredientSpawner.clearAllIngredients();
    
    // Hide fortune display
    const fortuneDisplay = document.getElementById('fortune-display');
    if (fortuneDisplay) {
      fortuneDisplay.classList.add('hidden');
    }
    
    // Clear selection
    document.querySelectorAll('.ingredient-card').forEach(item => {
      item.classList.remove('selected');
    });
    this.selectedIngredient = null;
    document.body.classList.remove('has-ingredient');
    this.updateSelectedDisplay(null);
    
    // Remove preview
    if (this.previewMesh) {
      this.sceneManager.removeObject(this.previewMesh);
      this.previewMesh = null;
    }
  }

  private takeScreenshot(): void {
    const renderer = this.sceneManager.getState().renderer;
    const camera = this.sceneManager.getState().camera;
    const scene = this.sceneManager.getState().scene;
    
    // Render the 3D scene
    renderer.render(scene, camera);
    
    // Create canvas for composite image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = renderer.domElement.width;
    canvas.height = renderer.domElement.height + 200; // Extra space for fortune text
    
    // Draw 3D scene
    ctx.drawImage(renderer.domElement, 0, 0);
    
    // Add fortune text if visible
    const fortuneText = document.getElementById('fortune-text');
    if (fortuneText && !document.getElementById('fortune-display')?.classList.contains('hidden')) {
      // Add dark background for text
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, renderer.domElement.height, canvas.width, 200);
      
      // Add fortune text
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      
      // Word wrap the fortune text
      const text = fortuneText.textContent || '';
      const words = text.split(' ');
      let line = '';
      let y = renderer.domElement.height + 40;
      const lineHeight = 25;
      const maxWidth = canvas.width - 40;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, canvas.width / 2, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, canvas.width / 2, y);
      
      // Add watermark
      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('🍕 Pizza Fortune Teller 🔮', canvas.width / 2, y + 40);
    }
    
    // Download composite image
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `pizza-fortune-${Date.now()}.png`;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  }

  private showError(message: string): void {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.innerHTML = `
        <div style="color: #ff6b6b; text-align: center;">
          <h2>Oops!</h2>
          <p>${message}</p>
          <p>Please refresh the page to try again.</p>
        </div>
      `;
    }
  }
}

// Start the app
new PizzaFortuneApp();