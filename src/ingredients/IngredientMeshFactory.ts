import * as THREE from 'three';
import { Ingredient } from '../types';

export class IngredientMeshFactory {
  private textureLoader: THREE.TextureLoader;
  private fontLoader: THREE.FontLoader | null = null;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  createMesh(ingredient: Ingredient): THREE.Object3D {
    switch (ingredient.modelType) {
      case 'procedural':
        return this.createProceduralMesh(ingredient);
      case 'particle':
        return this.createParticleMesh(ingredient);
      case 'text3d':
        return this.createText3DMesh(ingredient);
      case 'symbolic':
        return this.createSymbolicMesh(ingredient);
      case 'composite':
        return this.createCompositeMesh(ingredient);
      default:
        return this.createProceduralMesh(ingredient);
    }
  }

  private createProceduralMesh(ingredient: Ingredient): THREE.Mesh {
    let geometry: THREE.BufferGeometry;
    
    // Create different geometries based on ingredient type
    switch (ingredient.category) {
      case 'liquid':
        // Blob-like sphere for liquids
        geometry = new THREE.SphereGeometry(0.3, 16, 12);
        break;
      case 'normal':
        if (ingredient.id.includes('pepper')) {
          // Flat disc for pepperoni, peppers
          geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16);
        } else if (ingredient.id.includes('mushroom')) {
          // Mushroom shape
          const shape = new THREE.Group();
          const cap = new THREE.ConeGeometry(0.2, 0.15, 8);
          const stem = new THREE.CylinderGeometry(0.05, 0.05, 0.15, 8);
          return this.createGroupMesh([cap, stem], ingredient);
        } else {
          // Default food chunk
          geometry = new THREE.BoxGeometry(0.3, 0.2, 0.3);
        }
        break;
      case 'bizarre':
        if (ingredient.id === 'baseball') {
          geometry = new THREE.SphereGeometry(0.3, 16, 16);
        } else if (ingredient.id === 'rubber_duck') {
          // Simple duck shape
          const body = new THREE.SphereGeometry(0.25, 12, 12);
          const head = new THREE.SphereGeometry(0.15, 8, 8);
          return this.createGroupMesh([body, head], ingredient);
        } else if (ingredient.id === 'marble') {
          geometry = new THREE.SphereGeometry(0.15, 16, 16);
        } else {
          geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        }
        break;
      case 'special':
        if (ingredient.id === 'brain') {
          // Wrinkled sphere for brain
          geometry = new THREE.SphereGeometry(0.35, 12, 8);
          this.addNoise(geometry, 0.05);
        } else if (ingredient.id === 'eyeball') {
          geometry = new THREE.SphereGeometry(0.2, 16, 16);
        } else {
          geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        }
        break;
      default:
        geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    }

    const material = this.createMaterial(ingredient);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(ingredient.scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { ingredient };
    
    return mesh;
  }

  private createParticleMesh(ingredient: Ingredient): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const particleCount = ingredient.id === 'glitter' ? 50 : 20;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 0.3;
      positions[i + 1] = (Math.random() - 0.5) * 0.3;
      positions[i + 2] = (Math.random() - 0.5) * 0.3;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      color: ingredient.color,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const points = new THREE.Points(geometry, material);
    points.scale.setScalar(ingredient.scale);
    points.userData = { ingredient };
    
    return points;
  }

  private createText3DMesh(ingredient: Ingredient): THREE.Mesh {
    // For now, create a plane with text texture
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = ingredient.color;
    ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const text = ingredient.id === 'forgotten_password' ? '********' : ingredient.name;
    ctx.fillText(text, 128, 32);
    
    const texture = new THREE.CanvasTexture(canvas);
    const geometry = new THREE.PlaneGeometry(1, 0.25);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(ingredient.scale);
    mesh.userData = { ingredient };
    
    return mesh;
  }

  private createSymbolicMesh(ingredient: Ingredient): THREE.Mesh {
    let geometry: THREE.BufferGeometry;
    
    if (ingredient.id === 'monday_morning') {
      // Create a clock showing Monday 9 AM
      geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16);
    } else if (ingredient.id === 'crushed_dreams') {
      // Broken star shape
      geometry = new THREE.ConeGeometry(0.2, 0.4, 5);
    } else {
      // Default symbolic shape
      geometry = new THREE.TetrahedronGeometry(0.3);
    }
    
    const material = this.createMaterial(ingredient);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.setScalar(ingredient.scale);
    mesh.castShadow = true;
    mesh.userData = { ingredient };
    
    return mesh;
  }

  private createCompositeMesh(ingredient: Ingredient): THREE.Group {
    const group = new THREE.Group();
    
    if (ingredient.id === 'zodiac_signs') {
      // Create 12 small symbols in a circle
      const symbols = 12;
      for (let i = 0; i < symbols; i++) {
        const angle = (i / symbols) * Math.PI * 2;
        const x = Math.cos(angle) * 0.2;
        const z = Math.sin(angle) * 0.2;
        
        const symbolGeometry = new THREE.TetrahedronGeometry(0.05);
        const symbolMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(i / symbols, 1, 0.5),
          emissive: new THREE.Color().setHSL(i / symbols, 1, 0.3),
          emissiveIntensity: 0.5
        });
        
        const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
        symbol.position.set(x, 0, z);
        symbol.castShadow = true;
        group.add(symbol);
      }
    }
    
    group.scale.setScalar(ingredient.scale);
    group.userData = { ingredient };
    
    return group;
  }

  private createGroupMesh(geometries: THREE.BufferGeometry[], ingredient: Ingredient): THREE.Group {
    const group = new THREE.Group();
    const material = this.createMaterial(ingredient);
    
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, material);
      if (index === 1) {
        // Position second part (like mushroom stem or duck head)
        mesh.position.y = 0.2;
      }
      mesh.castShadow = true;
      group.add(mesh);
    });
    
    group.scale.setScalar(ingredient.scale);
    group.userData = { ingredient };
    
    return group;
  }

  private createMaterial(ingredient: Ingredient): THREE.Material {
    const color = new THREE.Color(ingredient.color);
    
    if (ingredient.category === 'liquid' || ingredient.id === 'jello') {
      // Translucent material for liquids
      return new THREE.MeshPhysicalMaterial({
        color,
        metalness: 0,
        roughness: 0.1,
        transmission: 0.8,
        thickness: 0.5,
        transparent: true,
        opacity: 0.8
      });
    } else if (ingredient.category === 'abstract' || ingredient.category === 'special') {
      // Glowing material for special items
      return new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.3,
        metalness: 0.3,
        roughness: 0.5
      });
    } else {
      // Standard material for normal items
      return new THREE.MeshStandardMaterial({
        color,
        metalness: 0.1,
        roughness: 0.7
      });
    }
  }

  private addNoise(geometry: THREE.BufferGeometry, amplitude: number): void {
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      );
      vertex.normalize();
      vertex.multiplyScalar(1 + (Math.random() - 0.5) * amplitude);
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
  }
}