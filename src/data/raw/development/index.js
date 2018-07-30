export default {
  "pokemons": [
    {
      "id": 1,
      "avatar": require('./images/avatars/001.png'),
      "name": "Bulbasaur",
      "type": [
        "grass",
        "poison"
      ],
      "classification": "Seed Pokémon",
      "moves": [
        {
          "name": "Petal Dance",
          "type": "grass",
          "attack": "156",
          "wait": "5",
          "description": "The user spins in place, scattering petals that deal damage to enemies around it.",
          "learnable": true
        },
        {
          "name": "Synthesis",
          "type": "grass",
          "attack": "0",
          "wait": "5",
          "description": "The user absorbs light, raising the damage it deals for a while.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Toxic",
          "type": "poison",
          "attack": "59",
          "wait": "4",
          "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it.",
          "learnable": true
        },
        {
          "name": "Vine Whip",
          "type": "grass",
          "attack": "237",
          "wait": "5",
          "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Hit Healing +2%",
          "Healing from K.O. +2%",
          "Own Knockback Distance -10%"
        ],
        [
          "Healing per Wave +50%",
          "Resistant to Poisoned +100%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Grass Type Moves +20%",
          "HP +550",
          "Own Knockback Distance -30%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "125",
      "baseAtk": "75",
      "sprite": require('./images/sprites/1.png'),
      "color": "Yellow",
      "dishWeight": {
        "mulligan": [
          0,
          500,
          10000,
          10000
        ],
        "color": [
          0,
          165,
          3300,
          3300
        ],
        "type": [
          0,
          400,
          8000,
          8000
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 2,
      "avatar": require('./images/avatars/002.png'),
      "name": "Ivysaur",
      "type": [
        "grass",
        "poison"
      ],
      "classification": "Seed Pokémon",
      "evolution": "Evolve Bulbasaur (Lv. 16)",
      "moves": [
        {
          "name": "Leech Seed",
          "type": "grass",
          "attack": "103",
          "wait": "9",
          "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user's HP.",
          "learnable": true
        },
        {
          "name": "Petal Dance",
          "type": "grass",
          "attack": "156",
          "wait": "5",
          "description": "The user spins in place, scattering petals that deal damage to enemies around it.",
          "learnable": true
        },
        {
          "name": "Poison Powder",
          "type": "poison",
          "attack": "67",
          "wait": "4",
          "description": "The user scatters poison powder in front of itself, often poisoning enemies hit by it.",
          "learnable": true
        },
        {
          "name": "Synthesis",
          "type": "grass",
          "attack": "0",
          "wait": "5",
          "description": "The user absorbs light, raising the damage it deals for a while.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Take Down",
          "type": "normal",
          "attack": "189",
          "wait": "5",
          "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage.",
          "learnable": true
        },
        {
          "name": "Toxic",
          "type": "poison",
          "attack": "59",
          "wait": "4",
          "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it.",
          "learnable": true
        },
        {
          "name": "Vine Whip",
          "type": "grass",
          "attack": "237",
          "wait": "5",
          "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Hit Healing +2%",
          "Healing from K.O. +2%",
          "Own Knockback Distance -10%"
        ],
        [
          "Healing per Wave +40%",
          "Resistant to Poisoned +100%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Grass Type Moves +15%",
          "HP +250",
          "Own Knockback Distance -30%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "400",
      "baseAtk": "100",
      "sprite": require('./images/sprites/2.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 3,
      "avatar": require('./images/avatars/003.png'),
      "name": "Venusaur",
      "type": [
        "grass",
        "poison"
      ],
      "classification": "Seed Pokémon",
      "evolution": "Evolve Ivysaur (Lv. 32)",
      "moves": [
        {
          "name": "Leech Seed",
          "type": "grass",
          "attack": "103",
          "wait": "9",
          "description": "The user plants a seed on the ground in front of itself. Enemies in range are gradually damaged. Part of the damage dealt is absorbed to restore the user's HP.",
          "learnable": true
        },
        {
          "name": "Mega Drain",
          "type": "grass",
          "attack": "165",
          "wait": "9",
          "description": "The user attacks enemies in front of itself, dealing damage to them. Some of the damage dealt is absorbed by the user, restoring its HP.",
          "learnable": true
        },
        {
          "name": "Petal Dance",
          "type": "grass",
          "attack": "156",
          "wait": "5",
          "description": "The user spins in place, scattering petals that deal damage to enemies around it.",
          "learnable": true
        },
        {
          "name": "Solar Beam",
          "type": "grass",
          "attack": "227",
          "wait": "7",
          "description": "The user gathers light and unleashes it in front of itself, dealing damage to enemies hit by it.",
          "learnable": true
        },
        {
          "name": "Synthesis",
          "type": "grass",
          "attack": "0",
          "wait": "5",
          "description": "The user absorbs light, raising the damage it deals for a while.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Take Down",
          "type": "normal",
          "attack": "189",
          "wait": "5",
          "description": "The user slams into enemies in front of itself with a reckless, full-body charge, damaging all enemies hit by it. The user also takes recoil damage.",
          "learnable": true
        },
        {
          "name": "Toxic",
          "type": "poison",
          "attack": "59",
          "wait": "4",
          "description": "The user sprays a powerful poison around itself, often poisoning enemies hit by it.",
          "learnable": true
        },
        {
          "name": "Vine Whip",
          "type": "grass",
          "attack": "237",
          "wait": "5",
          "description": "The user strikes enemies in front of itself with whiplike vines. Deals damage to enemies hit by them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Hit Healing +2%",
          "Healing from K.O. +2%",
          "Own Knockback Distance -10%"
        ],
        [
          "Ice Type Damage Taken -50%",
          "Resistant to Poisoned +100%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Grass Type Moves +10%",
          "Fire-Type Damage Taken -50%",
          "Own Knockback Distance -30%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "550",
      "baseAtk": "150",
      "sprite": require('./images/sprites/3.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 4,
      "avatar": require('./images/avatars/004.png'),
      "name": "Charmander",
      "type": [
        "fire"
      ],
      "classification": "Lizard Pokémon",
      "moves": [
        {
          "name": "Ember",
          "type": "fire",
          "attack": "109",
          "wait": "7",
          "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Punch",
          "type": "fire",
          "attack": "229",
          "wait": "5",
          "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Spin",
          "type": "fire",
          "attack": "97",
          "wait": "5",
          "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Metal Claw",
          "type": "steel",
          "attack": "211",
          "wait": "5",
          "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals.",
          "learnable": true
        },
        {
          "name": "Scratch",
          "type": "normal",
          "attack": "231",
          "wait": "5",
          "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Fire Type Moves Wait -5%",
          "Critical Hit Rate +5%",
          "Movement Speed +30%"
        ],
        [
          "ATK of Fire Type Moves +15%",
          "Critical Hit Rate +20%",
          "Resistant to Burned +100%"
        ],
        [
          "ATK of Fire Type Moves +20%",
          "ATK + 550",
          "Movement Speed +40%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "75",
      "baseAtk": "125",
      "sprite": require('./images/sprites/4.png'),
      "color": "Red",
      "dishWeight": {
        "mulligan": [
          0,
          500,
          10000,
          10000
        ],
        "color": [
          0,
          165,
          3300,
          3300
        ],
        "type": [
          0,
          400,
          8000,
          8000
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 5,
      "avatar": require('./images/avatars/005.png'),
      "name": "Charmeleon",
      "type": [
        "fire"
      ],
      "classification": "Flame Pokémon",
      "evolution": "Evolve Charmander (Lv. 16)",
      "moves": [
        {
          "name": "Dragon Claw",
          "type": "dragon",
          "attack": "296",
          "wait": "5",
          "description": "The user gathers its strength, then charges forward while spinning, damaging enemies with its sharp claws.",
          "learnable": true
        },
        {
          "name": "Ember",
          "type": "fire",
          "attack": "109",
          "wait": "7",
          "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Punch",
          "type": "fire",
          "attack": "229",
          "wait": "5",
          "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Spin",
          "type": "fire",
          "attack": "97",
          "wait": "5",
          "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Flamethrower",
          "type": "fire",
          "attack": "94",
          "wait": "5",
          "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Metal Claw",
          "type": "steel",
          "attack": "211",
          "wait": "5",
          "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals.",
          "learnable": true
        },
        {
          "name": "Scratch",
          "type": "normal",
          "attack": "231",
          "wait": "5",
          "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Fire Type Moves Wait -5%",
          "Critical Hit Rate +5%",
          "Movement Speed +30%"
        ],
        [
          "ATK of Fire Type Moves +10%",
          "Critical Hit Rate +15%",
          "Resistant to Burned +100%"
        ],
        [
          "ATK of Fire Type Moves +15%",
          "ATK +250",
          "Movement Speed +40%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "100",
      "baseAtk": "400",
      "sprite": require('./images/sprites/5.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 6,
      "avatar": require('./images/avatars/006.png'),
      "name": "Charizard",
      "type": [
        "fire",
        "flying"
      ],
      "classification": "Flame Pokémon",
      "evolution": "Evolve Charmeleon (Lv. 36)",
      "moves": [
        {
          "name": "Dragon Claw",
          "type": "dragon",
          "attack": "296",
          "wait": "5",
          "description": "The user gathers its strength, then charges forward while spinning, damaging enemies with its sharp claws.",
          "learnable": true
        },
        {
          "name": "Ember",
          "type": "fire",
          "attack": "109",
          "wait": "7",
          "description": "The user fires sparks in front of itself that split and run in three directions when they hit the ground. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Blast",
          "type": "fire",
          "attack": "179",
          "wait": "5",
          "description": "The user sprays an all-consuming fire on the ground, damaging enemies hit by it and sometimes burning them.",
          "learnable": true
        },
        {
          "name": "Fire Punch",
          "type": "fire",
          "attack": "229",
          "wait": "5",
          "description": "The user imbues its fist with the power of flames, and strikes enemies directly in front of it with a burning punch. Deals damage and sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Fire Spin",
          "type": "fire",
          "attack": "97",
          "wait": "5",
          "description": "The user creates flames all around itself and fires them off in a spiral. Deals damage to enemies they hit. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Flame Charge",
          "type": "fire",
          "attack": "0",
          "wait": "5",
          "description": "The user stores up the power of flames, raising the damage it deals for a while.",
          "learnable": true
        },
        {
          "name": "Flamethrower",
          "type": "fire",
          "attack": "94",
          "wait": "5",
          "description": "The user continuously breathes out long flames for a while. Deals damage to enemies as long as they remain in the flames. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Flare Blitz",
          "type": "fire",
          "attack": "128",
          "wait": "5",
          "description": "The user creates a path of flames in front of itself and charges forward along it. Deals damage to enemies. Sometimes burns enemies.",
          "learnable": true
        },
        {
          "name": "Metal Claw",
          "type": "steel",
          "attack": "211",
          "wait": "5",
          "description": "The user rakes enemies in front of itself with its steel claws, dealing damage. Sometimes raises the amount of damage the user deals.",
          "learnable": true
        },
        {
          "name": "Scratch",
          "type": "normal",
          "attack": "231",
          "wait": "5",
          "description": "The user rakes its hard, pointed claws over enemies directly in front of itself, damaging them.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Fire Type Moves Wait -5%",
          "Critical Hit Rate +5%",
          "Movement Speed +30%"
        ],
        [
          "Fire Type Moves Wait -5%",
          "Critical Hit Rate +10%",
          "Resistant to Burned +100%"
        ],
        [
          "ATK of Fire Type Moves +10%",
          "Critical Hit Rate +15%",
          "Movement Speed +40%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "200",
      "baseAtk": "600",
      "sprite": require('./images/sprites/6.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 7,
      "avatar": require('./images/avatars/007.png'),
      "name": "Squirtle",
      "type": [
        "water"
      ],
      "classification": "Tiny Turtle Pokémon",
      "moves": [
        {
          "name": "Bubble",
          "type": "water",
          "attack": "68",
          "wait": "7",
          "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Whirlpool",
          "type": "water",
          "attack": "94",
          "wait": "5",
          "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user.",
          "learnable": true
        },
        {
          "name": "Withdraw",
          "type": "water",
          "attack": "0",
          "wait": "5",
          "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "ATK of Water Type Moves +5%",
          "Water Type Moves Wait -5%",
          "Natural HP Healing +10%"
        ],
        [
          "ATK of Water Type Moves +15%",
          "Water Type Moves Wait -20%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Water Type Moves 20%",
          "ATK +550",
          "HP +550"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "100",
      "baseAtk": "100",
      "sprite": require('./images/sprites/7.png'),
      "color": "Blue",
      "dishWeight": {
        "mulligan": [
          0,
          500,
          10000,
          10000
        ],
        "color": [
          0,
          250,
          5000,
          5000
        ],
        "type": [
          0,
          200,
          4000,
          4000
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 8,
      "avatar": require('./images/avatars/008.png'),
      "name": "Wartortle",
      "type": [
        "water"
      ],
      "classification": "Turtle Pokémon",
      "evolution": "Evolve Squirtle (Lv. 16)",
      "moves": [
        {
          "name": "Aqua Jet",
          "type": "water",
          "attack": "182",
          "wait": "5",
          "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them.",
          "learnable": true
        },
        {
          "name": "Aqua Ring",
          "type": "water",
          "attack": "0",
          "wait": "9",
          "description": "The user envelops itself in a veil made of water, restoring some of its HP.",
          "learnable": true
        },
        {
          "name": "Blizzard",
          "type": "ice",
          "attack": "52",
          "wait": "5",
          "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them.",
          "learnable": true
        },
        {
          "name": "Bubble",
          "type": "water",
          "attack": "68",
          "wait": "7",
          "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed.",
          "learnable": true
        },
        {
          "name": "Surf",
          "type": "water",
          "attack": "127",
          "wait": "5",
          "description": "The user creates a wide wave and charges forward on it. Deals damage to enemies caught in the wave.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Waterfall",
          "type": "water",
          "attack": "252",
          "wait": "5",
          "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits.",
          "learnable": true
        },
        {
          "name": "Whirlpool",
          "type": "water",
          "attack": "94",
          "wait": "5",
          "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "ATK of Water Type Moves +5%",
          "Water Type Moves Wait -5%",
          "Natural HP Healing +10%"
        ],
        [
          "ATK of Water Type Moves +10%",
          "Water Type Moves Wait -15%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Water Type Moves 15%",
          "ATK +350",
          "HP +350"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "250",
      "baseAtk": "250",
      "sprite": require('./images/sprites/8.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 9,
      "avatar": require('./images/avatars/009.png'),
      "name": "Blastoise",
      "type": [
        "water"
      ],
      "classification": "Shellfish Pokémon",
      "evolution": "Evolve Wartortle (Lv. 36)",
      "moves": [
        {
          "name": "Aqua Jet",
          "type": "water",
          "attack": "182",
          "wait": "5",
          "description": "The user charges at enemies in front of itself with tremendous speed, dealing damage to them.",
          "learnable": true
        },
        {
          "name": "Aqua Ring",
          "type": "water",
          "attack": "0",
          "wait": "9",
          "description": "The user envelops itself in a veil made of water, restoring some of its HP.",
          "learnable": true
        },
        {
          "name": "Blizzard",
          "type": "ice",
          "attack": "52",
          "wait": "5",
          "description": "The user moves about while creating a blizzard centered on itself. Deals damage to enemies around the user and sometimes freezes them.",
          "learnable": true
        },
        {
          "name": "Bubble",
          "type": "water",
          "attack": "68",
          "wait": "7",
          "description": "The user fires bubbles in three directions. Deals damage to enemies hit by the bubbles and sometimes lowers their movement speed.",
          "learnable": true
        },
        {
          "name": "Hydro Pump",
          "type": "water",
          "attack": "213",
          "wait": "5",
          "description": "The user shoots four pillars of water up from the ground and sends them out in front of itself. Deals damage to enemies hit by them.",
          "learnable": true
        },
        {
          "name": "Tackle",
          "type": "normal",
          "attack": "163",
          "wait": "5",
          "description": "The user smashes into enemies in front of itself with all its might, damaging them.",
          "learnable": true
        },
        {
          "name": "Waterfall",
          "type": "water",
          "attack": "252",
          "wait": "5",
          "description": "The user approaches enemies in front of itself and creates a pillar of water beneath them. This deals damage to enemies it hits.",
          "learnable": true
        },
        {
          "name": "Whirlpool",
          "type": "water",
          "attack": "94",
          "wait": "5",
          "description": "The user creates a whirlpool around itself. Deals damage to enemies around the user.",
          "learnable": true
        },
        {
          "name": "Withdraw",
          "type": "water",
          "attack": "0",
          "wait": "5",
          "description": "The user withdraws into its hard shell, reducing the amount of damage it takes for a while.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "ATK of Water Type Moves +5%",
          "Water Type Moves Wait -5%",
          "Natural HP Healing +10%"
        ],
        [
          "ATK of WaterType Moves +10%",
          "Water Type Moves Wait -10%",
          "Own Knockback Distance -20%"
        ],
        [
          "ATK of Water Type Moves 10%",
          "Water Type Moves Wait -15%",
          "Own Knockback Distance -30%"
        ]
      ],
      "automaticStyle": "Melee",
      "baseHp": "400",
      "baseAtk": "400",
      "sprite": require('./images/sprites/9.png'),
      "color": "unknown",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          0
        ]
      }
    },
    {
      "id": 151,
      "avatar": require('./images/avatars/151.png'),
      "name": "Mew",
      "type": [
        "psychic"
      ],
      "classification": "New Species Pokémon",
      "moves": [
        {
          "name": "Amnesia",
          "type": "psychic",
          "attack": "0",
          "wait": "8",
          "description": "The user temporarily empties its mind to forget its concerns, raising the amount of damage it deals and making it more resistant to negative effects.",
          "learnable": true
        },
        {
          "name": "Flash Cannon",
          "type": "steel",
          "attack": "170",
          "wait": "7",
          "description": "The user focuses all of its light energy into a single point and fires a beam in front of itself, sometimes raising the amount of damage enemies take.",
          "learnable": true
        },
        {
          "name": "Giga Impact",
          "type": "normal",
          "attack": "176",
          "wait": "5",
          "description": "The user focuses every bit of its power and charges toward enemies in front of itself, dealing huge damage to them.",
          "learnable": true
        },
        {
          "name": "Heat Wave",
          "type": "fire",
          "attack": "123",
          "wait": "7",
          "description": "The user exhales hot breath in front of itself, damaging enemies hit by it and sometimes burning them.",
          "learnable": true
        },
        {
          "name": "Hyper Beam",
          "type": "normal",
          "attack": "300",
          "wait": "10",
          "description": "The user stores up power and then fires a tremendous beam at enemies. Deals severe damage to enemies it hits.",
          "learnable": true
        },
        {
          "name": "Light Screen",
          "type": "psychic",
          "attack": "0",
          "wait": "3",
          "description": "The user creates a wall of light, making it harder for it to be affected by negative effects for a while.",
          "learnable": true
        },
        {
          "name": "Psychic",
          "type": "psychic",
          "attack": "121",
          "wait": "7",
          "description": "The user creates a large, mysterious light and fires it out, dealing damage to enemies hit by it. Sometimes raises the amount of damage they take.",
          "learnable": true
        },
        {
          "name": "Recover",
          "type": "normal",
          "attack": "0",
          "wait": "9",
          "description": "Restoring its own cells, the user restores its HP.",
          "learnable": true
        },
        {
          "name": "Teleport",
          "type": "psychic",
          "attack": "0",
          "wait": "3",
          "description": "The user utilizes its psychic powers to teleport.",
          "learnable": true
        },
        {
          "name": "Thunder",
          "type": "electric",
          "attack": "204",
          "wait": "5",
          "description": "The user strikes the area in front of itself with a lightning bolt. Deals damage to nearby enemies. Sometimes paralyzes enemies.",
          "learnable": true
        },
        {
          "name": "Transform",
          "type": "normal",
          "attack": "0",
          "wait": "0",
          "description": "When Ditto transforms into another Pokémon, this changes into a move that Pokémon can learn.",
          "learnable": true
        },
        {
          "name": "Tri Attack",
          "type": "normal",
          "attack": "81",
          "wait": "5",
          "description": "The user's body is imbued with three powers as it attacks enemies in front of itself, damaging them. Sometimes burns, paralyzes, or freezes enemies.",
          "learnable": true
        }
      ],
      "bonus": [
        [
          "Critical Hit Damage +20%",
          "Resistant to ↓ Effects +20%",
          "Movement Speed +50%"
        ],
        [
          "Critical Hit Rate +20%",
          "Resistant to Status Conditions +20%",
          "Time to Recover -20%"
        ],
        [
          "Psychic Type Moves Wait -20%",
          "Own Knockback Distance -20%",
          "Wait for Standard Attacks -50%"
        ]
      ],
      "automaticStyle": "Range",
      "baseHp": "650",
      "baseAtk": "650",
      "sprite": require('./images/sprites/151.png'),
      "color": "Red",
      "dishWeight": {
        "mulligan": [
          0,
          0,
          0,
          0
        ],
        "color": [
          0,
          0,
          0,
          0
        ],
        "type": [
          0,
          0,
          0,
          0
        ],
        "legendary": [
          0,
          0,
          0,
          30
        ]
      }
    }
  ],
  "dishes": [
    {
      "id": 1,
      "name": "Mulligan Stew a la Cube",
      "description": "Favorite food of some Pokémon on Tumblecube Island",
      "ingredients": "Whatever ingredients you like",
      "pokemonFilter": {
        "color": "",
        "type": "",
        "legendary": false
      },
      "ingredientRules": [],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 2,
      "name": "Red Stew a la Cube",
      "description": "Favorite food of reddish Pokémon",
      "ingredients": "A whole lot of red",
      "pokemonFilter": {
        "color": "red",
        "type": "",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "red",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 3,
      "name": "Blue Soda a la Cube",
      "description": "Favorite food of bluish Pokémon",
      "ingredients": "A whole lot of blue",
      "pokemonFilter": {
        "color": "blue",
        "type": "",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "blue",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 4,
      "name": "Yellow Curry a la Cube",
      "description": "Favorite food of yellowish Pokémon",
      "ingredients": "A whole lot of yellow",
      "pokemonFilter": {
        "color": "yellow",
        "type": "",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "yellow",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 5,
      "name": "Gray Porridge a la Cube",
      "description": "Favorite food of grayish Pokémon",
      "ingredients": "A whole lot of gray",
      "pokemonFilter": {
        "color": "gray",
        "type": "",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "gray",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 6,
      "name": "Mouth-Watering Dip a la Cube",
      "description": "Favorite food of Water-type Pokémon",
      "ingredients": "A whole lot of soft things and a lot of blue",
      "pokemonFilter": {
        "color": "",
        "type": "water",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "blue",
          "minimum": 3
        },
        {
          "attribute": "soft",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 7,
      "name": "Plain Crepe a la Cube",
      "description": "Favorite food of Normal-type Pokémon",
      "ingredients": "A lot of sweet things and a few gray",
      "pokemonFilter": {
        "color": "",
        "type": "normal",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "gray",
          "minimum": 2
        },
        {
          "attribute": "sweet",
          "minimum": 3
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 8,
      "name": "Sludge Soup a la Cube",
      "description": "Favorite food of Poison-type Pokémon",
      "ingredients": "A whole lot of mushrooms and a lot of soft things",
      "pokemonFilter": {
        "color": "",
        "type": "poison",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "soft",
          "minimum": 3
        },
        {
          "attribute": "mushroom",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 9,
      "name": "Mud Pie a la Cube",
      "description": "Favorite food of Ground-type Pokémon",
      "ingredients": "A few minerals and a lot of soft things",
      "pokemonFilter": {
        "color": "",
        "type": "ground",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "soft",
          "minimum": 3
        },
        {
          "attribute": "mineral",
          "minimum": 2
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 10,
      "name": "Veggie Smoothie a la Cube",
      "description": "Favorite food of Grass-type Pokémon",
      "ingredients": "A whole lot of plants and a few soft things",
      "pokemonFilter": {
        "color": "",
        "type": "grass",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "soft",
          "minimum": 2
        },
        {
          "attribute": "plant",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 11,
      "name": "Honey Nectar a la Cube",
      "description": "Favorite food of Bug-type Pokémon",
      "ingredients": "A whole lot of sweet things and a lot of yellow",
      "pokemonFilter": {
        "color": "",
        "type": "bug",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "yellow",
          "minimum": 3
        },
        {
          "attribute": "sweet",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 12,
      "name": "Brain Food a la Cube",
      "description": "Favorite food of Psychic-type Pokémon",
      "ingredients": "A lot of sweet things and a few hard things",
      "pokemonFilter": {
        "color": "",
        "type": "psychic",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "hard",
          "minimum": 2
        },
        {
          "attribute": "sweet",
          "minimum": 3
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 13,
      "name": "Stone Soup a la Cube",
      "description": "Favorite food of Rock-type Pokémon",
      "ingredients": "A whole lot of hard things and a few minerals",
      "pokemonFilter": {
        "color": "",
        "type": "rock",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "hard",
          "minimum": 4
        },
        {
          "attribute": "mineral",
          "minimum": 2
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 14,
      "name": "Light-as-Air Casserole a la Cube",
      "description": "Favorite food of Flying-type Pokémon",
      "ingredients": "A lot of minerals and a few plants",
      "pokemonFilter": {
        "color": "",
        "type": "flying",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "plant",
          "minimum": 2
        },
        {
          "attribute": "mineral",
          "minimum": 3
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 15,
      "name": "Hot Pot a la Cube",
      "description": "Favorite food of Fire-type Pokémon",
      "ingredients": "A lot of mushrooms and a little red",
      "pokemonFilter": {
        "color": "",
        "type": "fire",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "red",
          "minimum": 2
        },
        {
          "attribute": "mushroom",
          "minimum": 3
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 16,
      "name": "Watt a Risotta a la Cube",
      "description": "Favorite food of Electric-type Pokémon",
      "ingredients": "A whole lot of soft things and a lot of yellow",
      "pokemonFilter": {
        "color": "",
        "type": "electric",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "yellow",
          "minimum": 3
        },
        {
          "attribute": "soft",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 17,
      "name": "Get Swole Syrup a la Cube",
      "description": "Favorite food of Fighting-type Pokémon",
      "ingredients": "A lot of sweet things and a few mushrooms",
      "pokemonFilter": {
        "color": "",
        "type": "fighting",
        "legendary": false
      },
      "ingredientRules": [
        {
          "attribute": "mushroom",
          "minimum": 2
        },
        {
          "attribute": "sweet",
          "minimum": 3
        }
      ],
      "logo": require('./images/dishes/0.png')
    },
    {
      "id": 18,
      "name": "Ambrosia of Legends a la Cube",
      "description": "Favorite food of extremely rare Pokémon",
      "ingredients": "A whole lot of mystical things",
      "pokemonFilter": {
        "color": "",
        "type": "",
        "legendary": true
      },
      "ingredientRules": [
        {
          "attribute": "mystical",
          "minimum": 4
        }
      ],
      "logo": require('./images/dishes/0.png')
    }
  ],
  "ingredients": [
    {
      "id": 1,
      "name": "Tiny mushrooms",
      "color": "red",
      "hardness": "soft",
      "matterial": "mushroom",
      "quality": 1,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 2,
      "name": "Bluk Berries",
      "color": "blue",
      "hardness": "soft",
      "matterial": "sweet",
      "quality": 1,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 3,
      "name": "Apricorns",
      "color": "yellow",
      "hardness": "hard",
      "matterial": "plant",
      "quality": 1,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 4,
      "name": "Fossils",
      "color": "gray",
      "hardness": "hard",
      "matterial": "mineral",
      "quality": 1,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 5,
      "name": "Big roots",
      "color": "red",
      "hardness": "soft",
      "matterial": "plant",
      "quality": 2,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 6,
      "name": "Icy rocks",
      "color": "blue",
      "hardness": "hard",
      "matterial": "mineral",
      "quality": 2,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 7,
      "name": "Honey",
      "color": "yellow",
      "hardness": "soft",
      "matterial": "sweet",
      "quality": 2,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 8,
      "name": "Balm mushrooms",
      "color": "gray",
      "hardness": "soft",
      "matterial": "mushroom",
      "quality": 2,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 9,
      "name": "Rainbow Matter",
      "color": "",
      "hardness": "",
      "matterial": "",
      "quality": 3,
      "logo": require('./images/ingredients/0.png')
    },
    {
      "id": 10,
      "name": "Mystical Shell",
      "color": "",
      "hardness": "",
      "matterial": "mystical",
      "quality": 2,
      "logo": require('./images/ingredients/0.png')
    }
  ],
  "pots": [
    {
      "id": 1,
      "name": "brass",
      "statBonus": 0,
      "ivRange": {
        "minimum": 0,
        "maximum": 10
      },
      "cookTurns": {
        "normal": 2,
        "good": 4,
        "veryGood": 5,
        "special": 6
      }
    },
    {
      "id": 2,
      "name": "bronze",
      "statBonus": 50,
      "ivRange": {
        "minimum": 0,
        "maximum": 50
      },
      "cookTurns": {
        "normal": 2,
        "good": 4,
        "veryGood": 5,
        "special": 6
      }
    },
    {
      "id": 3,
      "name": "silver",
      "statBonus": 100,
      "ivRange": {
        "minimum": 0,
        "maximum": 100
      },
      "cookTurns": {
        "normal": 3,
        "good": 5,
        "veryGood": 6,
        "special": 7
      }
    },
    {
      "id": 4,
      "name": "gold",
      "statBonus": 300,
      "ivRange": {
        "minimum": 0,
        "maximum": 100
      },
      "cookTurns": {
        "normal": 4,
        "good": 6,
        "veryGood": 7,
        "special": 8
      }
    }
  ]
}
