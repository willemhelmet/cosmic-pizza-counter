import { Pizza, PizzaPhysicsAnalysis, Fortune, DroppedIngredient, Cluster } from '../types';
import * as THREE from 'three';

export class FortuneGenerator {
  private apiKey: string;
  private apiEndpoint: string;
  private fortuneEndings: string[] = [
    "The pizza has spoken. Listen carefully.",
    "Your destiny is baked, but not yet served.",
    "The cosmic oven dings for thee.",
    "Trust the crust, for it knows the way.",
    "In cheese we trust, in sauce we believe.",
    "The toppings have aligned. Act accordingly.",
    "Your future is as certain as melted mozzarella.",
    "The universe tastes your intentions.",
    "Wisdom comes in slices, not wholes.",
    "The circle is complete, but your journey continues."
  ];

  constructor() {
    this.apiKey = import.meta.env.VITE_CLAUDE_API_KEY || '';
    this.apiEndpoint = 'https://api.anthropic.com/v1/messages';
  }

  async generateFortune(pizza: Pizza, analysis: PizzaPhysicsAnalysis): Promise<Fortune> {
    const prompt = this.buildPrompt(pizza, analysis);
    
    try {
      if (this.apiKey) {
        const response = await this.callClaudeAPI(prompt);
        return this.parseFortune(response, pizza.id);
      } else {
        console.log('No API key found, using fallback fortune');
        return this.generateFallbackFortune(pizza, analysis);
      }
    } catch (error) {
      console.error('Failed to generate fortune:', error);
      return this.generateFallbackFortune(pizza, analysis);
    }
  }

  private buildPrompt(pizza: Pizza, analysis: PizzaPhysicsAnalysis): string {
    // Create detailed ingredient list with positions
    const ingredientDetails = pizza.droppedIngredients.map(i => {
      const posDesc = i.position.y > 1 ? 'stacked high' : 
                      Math.abs(i.position.x) > 1.5 || Math.abs(i.position.z) > 1.5 ? 'edge dweller' : 
                      'centered';
      return `${i.ingredient.name} (${i.ingredient.category}, ${posDesc})`;
    });
    
    // Count ingredient categories
    const normalCount = pizza.droppedIngredients.filter(i => i.ingredient.category === 'normal').length;
    const bizarreCount = pizza.droppedIngredients.filter(i => i.ingredient.category === 'bizarre').length;
    const specialCount = pizza.droppedIngredients.filter(i => i.ingredient.category === 'special').length;
    
    return `You are a mystical pizza fortune teller who makes profound psychological insights through pizza toppings. Each ingredient choice reveals deep truths about the person's inner state, fears, desires, and future.

PSYCHOLOGICAL INGREDIENT MEANINGS:
- dust bunnies = neglecting self-care, possible depression or overwhelm
- forgotten passwords = losing touch with one's past self, identity crisis
- Monday mornings = dread of routine, seeking escape from obligations
- crushed dreams = processing failure, transformation through disappointment
- expired coupons = missed opportunities, regret, fear of wasting potential
- brain = overthinking, analysis paralysis, intellectual ego
- eyeballs = paranoia, feeling watched, or desperate need to be seen
- old socks = comfort in familiar dysfunction, resistance to change
- glass shards = fragmented self, sharp edges protecting soft interior
- toy dinosaurs = nostalgia for simpler times, inner child needs attention
- Normal foods = attempting to appear conventional while hiding deeper truths

PIZZA ANALYSIS:
Ingredients (${pizza.droppedIngredients.length} total):
${ingredientDetails.join('\n')}

Categories: ${normalCount} normal (conformity), ${bizarreCount} bizarre (rebellion), ${specialCount} special (uniqueness)

PHYSICS REVELATIONS:
- Chaos Level: ${analysis.chaosScore}% = ${analysis.chaosScore > 70 ? 'life in turmoil, seeking radical change' : analysis.chaosScore > 40 ? 'controlled chaos, managing multiple stressors' : 'rigid control, fear of spontaneity'}
- Balance: ${analysis.symmetryScore}% (${analysis.distributionPattern}) = ${analysis.distributionPattern === 'centered' ? 'self-focused, possible isolation' : analysis.distributionPattern === 'edge-heavy' ? 'avoiding core issues, living on margins' : 'scattered attention, lack of focus'}
- Stack Height: ${analysis.maxStackHeight} = ${analysis.maxStackHeight > 3 ? 'ambitious but precarious goals' : 'playing it safe, fear of reaching high'}
- Collisions: ${analysis.totalCollisions} = relationship dynamics, social friction

CLUSTERS & ISOLATION:
${analysis.ingredientClusters.length > 0 ? 
  `Bonded items (${analysis.ingredientClusters.map(c => c.members.join('+')).join(', ')}) = codependent patterns` : 
  'No clusters = emotional isolation'}
${analysis.loneIngredients.length > 0 ? 
  `Isolated items (${analysis.loneIngredients.join(', ')}) = rejected aspects of self` : ''}

Write a fortune that:
1. Makes bold psychological assessments based on specific ingredients (e.g., "The dust bunnies reveal you're drowning in neglected responsibilities")
2. Interprets bizarre choices as coping mechanisms or hidden desires
3. Reads the physics as current life state (chaos = internal turmoil, etc.)
4. Makes ONE eerily specific prediction that sounds almost too accurate
5. Includes ONE rhyming couplet for dramatic effect
6. Does NOT end with the same cliché - vary your closing line

Be direct, slightly unsettling, and psychologically penetrating. 100-150 words.

End with: "Lucky numbers: [5 numbers between 1-49 based on patterns]"`
  }

  private async callClaudeAPI(prompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error('API key not configured');
    }

    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 400,
        temperature: 0.9,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  private parseFortune(response: string, pizzaId: string): Fortune {
    // Extract lucky numbers from response
    const numberMatch = response.match(/Lucky numbers:.*?(\d+.*?\d+.*?\d+.*?\d+.*?\d+)/);
    const luckyNumbers = numberMatch 
      ? numberMatch[1].match(/\d+/g)?.slice(0, 5).map(n => parseInt(n)) || this.generateLuckyNumbers()
      : this.generateLuckyNumbers();

    // Remove lucky numbers from main text
    const mainText = response.replace(/Lucky numbers:.*$/i, '').trim();
    
    // Split response into meaningful sections
    const lines = mainText.split(/[.!?]/).filter(l => l.trim());
    
    return {
      id: `fortune_${Date.now()}`,
      pizzaId,
      generalReading: mainText,
      chaosInterpretation: lines.find(l => l.toLowerCase().includes('chaos')) || 'Chaos guides your path',
      symmetryMeaning: lines.find(l => l.toLowerCase().includes('balance') || l.toLowerCase().includes('symmetr')) || 'Balance awaits',
      heightPrediction: lines.find(l => l.toLowerCase().includes('stack') || l.toLowerCase().includes('tower')) || 'Heights call to you',
      ingredientMeanings: lines.filter(l => 
        pizza.droppedIngredients.some(i => l.includes(i.ingredient.name))
      ).slice(0, 3),
      luckyNumbers
    };
  }

  private generateFallbackFortune(pizza: Pizza, analysis: PizzaPhysicsAnalysis): Fortune {
    const ingredients = pizza.droppedIngredients;
    const weirdest = ingredients.find(i => i.ingredient.category === 'bizarre' || i.ingredient.category === 'special');
    const normalCount = ingredients.filter(i => i.ingredient.category === 'normal').length;
    const bizarreCount = ingredients.filter(i => i.ingredient.category === 'bizarre').length;
    
    let generalReading = `Your pizza reveals uncomfortable truths about your psyche. `;
    
    // Deeper psychological chaos interpretation
    if (analysis.chaosScore > 70) {
      generalReading += `The ${analysis.chaosScore}% chaos energy screams of inner turmoil you're desperately trying to control. `;
    } else if (analysis.chaosScore < 30) {
      generalReading += `Your rigid ${analysis.chaosScore}% chaos level exposes a deep fear of losing control - you're suffocating your own spontaneity. `;
    } else {
      generalReading += `At ${analysis.chaosScore}% chaos, you're maintaining a facade of balance while storms rage beneath. `;
    }
    
    // Psychological ingredient interpretations
    if (weirdest) {
      const deepMeanings = {
        'dust bunnies': 'The dust bunnies expose your neglected corners - depression has been your quiet roommate',
        'forgotten passwords': 'Forgotten passwords reveal you\'ve locked away parts of yourself you\'re afraid to access',
        'Monday mornings': 'Monday mornings show you\'re trapped in cycles you created but now despise',
        'crushed dreams': 'Those crushed dreams aren\'t dead, they\'re composting into something unrecognizable',
        'expired coupons': 'Expired coupons - you hoard opportunities but never act, paralyzed by perfect timing',
        'brain': 'The brain reveals your thoughts have become a prison of your own making',
        'eyeballs': 'Those eyeballs confirm your suspicion: yes, they ARE watching and judging',
        'old socks': 'Old socks indicate you find comfort in your own staleness',
        'glass shards': 'Glass shards - you\'ve shattered but convinced yourself the pieces are art',
        'toy dinosaurs': 'Toy dinosaurs prove you\'re extinct in your own life, living in prehistoric patterns'
      };
      
      const meaning = deepMeanings[weirdest.ingredient.name] || 
        `The ${weirdest.ingredient.name} exposes what you refuse to acknowledge about yourself`;
      
      generalReading += meaning + '. ';
    }
    
    if (bizarreCount > normalCount) {
      generalReading += `Your rejection of normalcy is a scream for help disguised as rebellion. `;
    } else if (normalCount > bizarreCount) {
      generalReading += `Hiding behind conventional choices won\'t mask the chaos within. `;
    }
    
    if (analysis.ingredientClusters.length > 0) {
      generalReading += `The clustering of ${analysis.ingredientClusters[0].members.join(' and ')} mirrors your codependent patterns. `;
    }
    
    // Eerily specific prediction with rhyme
    const predictions = [
      "Next Thursday at 3:47 PM, you'll realize why you chose these toppings. The moment will sting, but the clarity will bring relief.",
      "Within 13 days, someone will say exactly what you've been thinking. Their words will shake, your foundation will quake.",
      "You'll dream of this pizza three times before the month ends. Each dream will reveal a different fear you've been feeding.",
      "A stranger will remind you of crushed dreams next week. Don't run - they hold a key you thought you'd lost."
    ];
    
    generalReading += predictions[Math.floor(Math.random() * predictions.length)] + ' ';
    
    // Varied endings
    const ending = this.fortuneEndings[Math.floor(Math.random() * this.fortuneEndings.length)];
    generalReading += ending;
    
    return {
      id: `fortune_${Date.now()}`,
      pizzaId: pizza.id,
      generalReading,
      chaosInterpretation: this.getChaosInterpretation(analysis.chaosScore),
      symmetryMeaning: this.getBalanceInterpretation(analysis.distributionPattern),
      heightPrediction: `${analysis.maxStackHeight} layers reveal ${analysis.maxStackHeight > 3 ? 'dangerous ambitions built on shaky foundations' : 'fear of reaching beyond your comfort zone'}`,
      ingredientMeanings: ingredients.slice(0, 3).map(i => 
        `${i.ingredient.name}: ${this.getDeepMeaning(i.ingredient.name)}`
      ),
      luckyNumbers: this.generateLuckyNumbers(analysis.totalCollisions)
    };
  }

  private getDeepMeaning(ingredientName: string): string {
    const meanings: Record<string, string> = {
      'cheese': 'comfort seeking, fear of rawness',
      'pepperoni': 'aggressive tendencies, spicy anger',
      'mushrooms': 'thriving in darkness, decomposer energy',
      'pineapple': 'controversial choices, need to provoke',
      'olives': 'acquired taste, forcing sophistication',
      'anchovies': 'self-sabotage disguised as boldness',
      'dust bunnies': 'accumulated neglect, depression debris',
      'forgotten passwords': 'locked memories, identity crisis',
      'Monday mornings': 'existential dread, routine prison',
      'crushed dreams': 'fertilizer for bitterness or wisdom',
      'brain': 'overthinking, mental masturbation',
      'eyeballs': 'paranoid vigilance, performative existence'
    };
    
    return meanings[ingredientName] || 'unexamined impulses';
  }

  private getChaosInterpretation(score: number): string {
    if (score > 80) return 'CHAOS OVERLOAD: Your internal screaming has become external';
    if (score > 60) return 'HIGH CHAOS: Juggling flaming batons while your house burns';
    if (score > 40) return 'MANAGED CHAOS: Organized disaster, scheduled breakdowns';
    if (score > 20) return 'CONTROLLED: Gripping the wheel so tight your knuckles are translucent';
    return 'RIGID ORDER: The prison you built has golden bars';
  }

  private getBalanceInterpretation(pattern: string): string {
    switch (pattern) {
      case 'centered': return 'Narcissistic focus - the world revolves around your pizza';
      case 'edge-heavy': return 'Avoiding the center - afraid of your own core';
      case 'chaotic': return 'Scattered like your attention, commitment issues manifest';
      case 'balanced': return 'Performative balance hiding internal chaos';
      default: return 'Undefined patterns, just like your life goals';
    }
  }

  private getPatienceInterpretation(settleTime: number): string {
    if (settleTime > 4) return 'waiting for permission to live your life';
    if (settleTime > 2) return 'moderate patience masking indecision';
    return 'impulsive decisions to avoid feeling';
  }

  private generateLuckyNumbers(seed: number = 0): number[] {
    const numbers: number[] = [];
    const base = seed || Math.floor(Math.random() * 10) + 1;
    
    for (let i = 0; i < 5; i++) {
      numbers.push((base * (i + 1) + Math.floor(Math.random() * 20)) % 49 + 1);
    }
    
    return [...new Set(numbers)].slice(0, 5); // Ensure unique numbers
  }

  analyzePhysics(pizza: Pizza): PizzaPhysicsAnalysis {
    const ingredients = pizza.droppedIngredients;
    
    if (ingredients.length === 0) {
      return this.getEmptyAnalysis(pizza.id);
    }
    
    // Calculate center of mass
    let centerX = 0, centerZ = 0;
    ingredients.forEach(i => {
      centerX += i.position.x;
      centerZ += i.position.z;
    });
    centerX /= ingredients.length;
    centerZ /= ingredients.length;
    
    // Calculate distribution pattern
    const distanceFromCenter = Math.sqrt(centerX * centerX + centerZ * centerZ);
    let distributionPattern: 'centered' | 'edge-heavy' | 'chaotic' | 'balanced';
    
    if (distanceFromCenter < 0.5) distributionPattern = 'centered';
    else if (distanceFromCenter > 1.5) distributionPattern = 'edge-heavy';
    else if (pizza.chaosScore > 70) distributionPattern = 'chaotic';
    else distributionPattern = 'balanced';
    
    // Find clusters (ingredients within 0.5 units of each other)
    const clusters: Cluster[] = [];
    const visited = new Set<string>();
    
    ingredients.forEach(ing1 => {
      if (visited.has(ing1.id)) return;
      
      const cluster: Cluster = {
        members: [ing1.ingredient.name],
        position: ing1.position.clone(),
        strength: 1
      };
      
      ingredients.forEach(ing2 => {
        if (ing1.id !== ing2.id && !visited.has(ing2.id)) {
          const distance = ing1.position.distanceTo(ing2.position);
          if (distance < 0.5) {
            cluster.members.push(ing2.ingredient.name);
            visited.add(ing2.id);
            cluster.strength++;
          }
        }
      });
      
      if (cluster.members.length > 1) {
        clusters.push(cluster);
        visited.add(ing1.id);
      }
    });
    
    // Find lone ingredients
    const loneIngredients = ingredients
      .filter(i => !clusters.some(c => c.members.includes(i.ingredient.name)))
      .map(i => i.ingredient.name);
    
    // Calculate max stack height
    const maxY = Math.max(...ingredients.map(i => i.position.y));
    const maxStackHeight = Math.ceil(maxY / 0.2); // Assuming 0.2 units per ingredient
    
    // Calculate settle time (mock - would need actual physics tracking)
    const avgMass = ingredients.reduce((sum, i) => {
      const profile = i.ingredient.physicsProfile;
      return sum + (typeof profile === 'object' ? profile.mass : 1);
    }, 0) / ingredients.length;
    const settleTime = 1.5 + (avgMass * 0.5) + (ingredients.length * 0.1);
    
    return {
      totalCollisions: pizza.totalCollisions,
      maxVelocityReached: 10,
      chaosScore: pizza.chaosScore,
      centerOfMass: new THREE.Vector3(centerX, 0, centerZ),
      symmetryScore: pizza.symmetryScore,
      distributionPattern,
      maxStackHeight,
      towerFormations: [],
      stabilityScore: 100 - pizza.chaosScore,
      ingredientClusters: clusters,
      loneIngredients,
      bondStrength: clusters.reduce((sum, c) => sum + c.strength, 0) * 10,
      settleTime: Math.round(settleTime * 10) / 10,
      lastIngredientLanded: ingredients[ingredients.length - 1]?.ingredient.name || 'none'
    };
  }

  private getEmptyAnalysis(pizzaId: string): PizzaPhysicsAnalysis {
    return {
      totalCollisions: 0,
      maxVelocityReached: 0,
      chaosScore: 0,
      centerOfMass: new THREE.Vector3(0, 0, 0),
      symmetryScore: 100,
      distributionPattern: 'balanced',
      maxStackHeight: 0,
      towerFormations: [],
      stabilityScore: 100,
      ingredientClusters: [],
      loneIngredients: [],
      bondStrength: 0,
      settleTime: 0,
      lastIngredientLanded: 'none'
    };
  }
}