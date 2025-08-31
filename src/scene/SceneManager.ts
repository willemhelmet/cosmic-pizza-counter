import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SceneState } from '../types';

export class SceneManager {
  private state: SceneState;
  private controls: OrbitControls;
  private clock: THREE.Clock;
  private animationId: number | null = null;

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    
    // Initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0033);
    scene.fog = new THREE.Fog(0x1a0033, 10, 50);

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 0, 0);

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Initialize controls
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 25;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.2;
    this.controls.target.set(0, 0, 0);

    // Store state
    this.state = {
      camera,
      scene,
      renderer,
      physicsWorld: null,
      isPaused: false,
      isDropping: false,
      selectedIngredient: null
    };

    // Setup scene elements
    this.setupLighting();
    this.setupEnvironment();
    this.createPizzaBase();
    
    // Handle resize
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private setupLighting(): void {
    const { scene } = this.state;

    // Ambient light for overall brightness
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Key light (main directional)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(5, 10, 5);
    keyLight.castShadow = true;
    keyLight.shadow.camera.left = -10;
    keyLight.shadow.camera.right = 10;
    keyLight.shadow.camera.top = 10;
    keyLight.shadow.camera.bottom = -10;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Fill light (softer, opposite side)
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.5);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // Rim light (backlight for depth)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 5, -10);
    scene.add(rimLight);

    // Point lights for magical effect
    const magicLight1 = new THREE.PointLight(0xff00ff, 0.5, 10);
    magicLight1.position.set(-5, 2, 5);
    scene.add(magicLight1);

    const magicLight2 = new THREE.PointLight(0x00ffff, 0.5, 10);
    magicLight2.position.set(5, 2, -5);
    scene.add(magicLight2);
  }

  private setupEnvironment(): void {
    const { scene } = this.state;

    // Create floor/table
    const floorGeometry = new THREE.CylinderGeometry(15, 15, 0.5, 32);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a0845,
      metalness: 0.3,
      roughness: 0.7
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Add stars/particles for mystical atmosphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = Math.random() * 30 - 5;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
  }

  private createPizzaBase(): void {
    const { scene } = this.state;

    // Pizza dough base - reduced size
    const baseGeometry = new THREE.CylinderGeometry(2.5, 2.6, 0.3, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a574,
      roughness: 0.8,
      metalness: 0.1
    });
    const pizzaBase = new THREE.Mesh(baseGeometry, baseMaterial);
    pizzaBase.position.y = 0;
    pizzaBase.castShadow = true;
    pizzaBase.receiveShadow = true;
    pizzaBase.name = 'pizzaBase';
    scene.add(pizzaBase);

    // Raised crust edge
    const crustGeometry = new THREE.TorusGeometry(2.55, 0.15, 8, 32);
    const crustMaterial = new THREE.MeshStandardMaterial({
      color: 0xc49660,
      roughness: 0.9,
      metalness: 0.05
    });
    const crust = new THREE.Mesh(crustGeometry, crustMaterial);
    crust.position.y = 0.1;
    crust.rotation.x = Math.PI / 2;
    crust.castShadow = true;
    scene.add(crust);

    // Sauce layer
    const sauceGeometry = new THREE.CylinderGeometry(2.3, 2.3, 0.05, 32);
    const sauceMaterial = new THREE.MeshStandardMaterial({
      color: 0xcc2222,
      roughness: 0.3,
      metalness: 0.1
    });
    const sauce = new THREE.Mesh(sauceGeometry, sauceMaterial);
    sauce.position.y = 0.2;
    scene.add(sauce);
  }

  public start(): void {
    this.animate();
  }

  private animate(): void {
    if (this.state.isPaused) return;
    
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    
    const delta = this.clock.getDelta();
    
    // Update controls
    this.controls.update();
    
    // Rotate particles slowly for mystical effect
    const particles = this.state.scene.getObjectByName('particles');
    if (particles) {
      particles.rotation.y += delta * 0.05;
    }
    
    // Render scene
    this.state.renderer.render(this.state.scene, this.state.camera);
  }

  private handleResize(): void {
    const { camera, renderer } = this.state;
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  public getState(): SceneState {
    return this.state;
  }

  public addObject(object: THREE.Object3D): void {
    this.state.scene.add(object);
  }

  public removeObject(object: THREE.Object3D): void {
    this.state.scene.remove(object);
  }

  public pause(): void {
    this.state.isPaused = true;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  public resume(): void {
    this.state.isPaused = false;
    this.animate();
  }

  public dispose(): void {
    this.pause();
    this.controls.dispose();
    this.state.renderer.dispose();
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
}