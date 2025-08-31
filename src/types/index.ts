import * as THREE from 'three';
import type { RigidBody, Collider, World } from '@dimforge/rapier3d';

// Physics profiles for different ingredient types
export interface PhysicsProfile {
  mass: number;
  restitution: number; // bounciness
  friction: number;
  linearDamping: number;
  angularDamping: number;
  airResistance?: number;
  stickiness?: number;
  meltFactor?: number;
  chaosMultiplier?: number;
}

// Visual representation strategy
export type ModelType = 
  | 'realistic'    // Actual 3D models
  | 'symbolic'     // Abstract representation
  | 'particle'     // Particle system
  | 'procedural'   // Generated geometry
  | 'text3d'       // 3D text
  | 'composite';   // Multiple elements

// Ingredient definition
export interface Ingredient {
  id: string;
  name: string;
  emoji?: string;
  category: 'normal' | 'bizarre' | 'special' | 'liquid' | 'abstract';
  modelType: ModelType;
  physicsProfile: keyof typeof PHYSICS_PROFILES;
  color: string;
  scale: number;
  fortuneTraits: FortuneTrait[];
}

// Fortune trait for ingredients
export interface FortuneTrait {
  category: 'personality' | 'future' | 'luck' | 'chaos';
  keywords: string[];
  weight: number;
}

// Dropped ingredient in scene
export interface DroppedIngredient {
  id: string;
  ingredient: Ingredient;
  mesh: THREE.Mesh | THREE.Group;
  rigidBody: RigidBody;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  landedAt: number;
  velocity: THREE.Vector3;
  settled: boolean;
}

// Pizza state
export interface Pizza {
  id: string;
  droppedIngredients: DroppedIngredient[];
  chaosScore: number;
  symmetryScore: number;
  stackHeight: number;
  totalCollisions: number;
  createdAt: Date;
}

// Physics analysis for fortune
export interface PizzaPhysicsAnalysis {
  // Chaos Metrics
  totalCollisions: number;
  maxVelocityReached: number;
  chaosScore: number;
  
  // Balance Metrics  
  centerOfMass: THREE.Vector3;
  symmetryScore: number;
  distributionPattern: 'centered' | 'edge-heavy' | 'chaotic' | 'balanced';
  
  // Stacking Metrics
  maxStackHeight: number;
  towerFormations: TowerInfo[];
  stabilityScore: number;
  
  // Interaction Metrics
  ingredientClusters: Cluster[];
  loneIngredients: string[];
  bondStrength: number;
  
  // Time Metrics
  settleTime: number;
  lastIngredientLanded: string;
}

export interface TowerInfo {
  ingredients: string[];
  height: number;
  stability: number;
}

export interface Cluster {
  members: string[];
  position: THREE.Vector3;
  strength: number;
}

// Fortune generation
export interface Fortune {
  id: string;
  pizzaId: string;
  generalReading: string;
  chaosInterpretation: string;
  symmetryMeaning: string;
  heightPrediction: string;
  ingredientMeanings: string[];
  luckyNumbers: number[];
}

// Scene state
export interface SceneState {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  physicsWorld: World | null;
  isPaused: boolean;
  isDropping: boolean;
  selectedIngredient: Ingredient | null;
}

// Predefined physics profiles - minimal bounce for better sticking
export const PHYSICS_PROFILES = {
  heavy: {
    mass: 2.0,
    restitution: 0.01,  // Almost no bounce
    friction: 1.2,      // High friction
    linearDamping: 0.8,
    angularDamping: 0.8
  },
  light: {
    mass: 0.15,
    restitution: 0.02,  // Tiny bounce
    friction: 0.8,
    linearDamping: 0.6,
    angularDamping: 0.6,
    airResistance: 0.8
  },
  bouncy: {
    mass: 0.4,
    restitution: 0.08,  // Still bouncy but much less
    friction: 0.6,
    linearDamping: 0.5,
    angularDamping: 0.5
  },
  liquid: {
    mass: 0.8,
    restitution: 0.0,   // No bounce
    friction: 0.3,
    linearDamping: 1.2,
    angularDamping: 1.2,
    stickiness: 0.9
  },
  sticky: {
    mass: 0.25,
    restitution: 0.01,  // Almost no bounce
    friction: 1.5,      // Very high friction
    linearDamping: 0.9,
    angularDamping: 0.9,
    stickiness: 0.8
  },
  rigid: {
    mass: 1.0,
    restitution: 0.03,  // Minimal bounce
    friction: 1.0,
    linearDamping: 0.7,
    angularDamping: 0.7
  },
  ethereal: {
    mass: 0.08,
    restitution: 0.05,  // Reduced from 0.2
    friction: 0.4,
    linearDamping: 0.3,
    angularDamping: 0.3,
    airResistance: 0.9,
    chaosMultiplier: 2.0
  }
} as const;