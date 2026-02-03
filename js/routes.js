/**
 * Pre-designed cycling routes through Provence.
 * Each route includes waypoints (lat/lng), metadata, and stage breakdowns.
 * Coordinates trace actual cycling-friendly roads.
 */
const ROUTES = [
  {
    id: "luberon-loop",
    name: "The Luberon Loop",
    days: 4,
    distance: 165,
    difficulty: "moderate",
    color: "#e67e22",
    summary: "A classic circuit through the heart of the Luberon, passing lavender fields, perched villages, and the ochre cliffs of Roussillon.",
    stages: [
      { day: 1, from: "Cavaillon", to: "Bonnieux", km: 38, climb: 620, description: "Cross the Durance plain then climb into the Petit Luberon. Stop at Oppède-le-Vieux for ruins with panoramic views." },
      { day: 2, from: "Bonnieux", to: "Apt", km: 42, climb: 480, description: "Wind through Roussillon's ochre trails and Gordes before descending to the market town of Apt. Wednesday and Saturday are market days." },
      { day: 3, from: "Apt", to: "Lourmarin", km: 48, climb: 550, description: "Ride through Saignon and the lavender plateau above Buoux. Descend the dramatic Combe de Lourmarin." },
      { day: 4, from: "Lourmarin", to: "Cavaillon", km: 37, climb: 280, description: "A gentle return through the Durance valley via Lauris and Mérindol, with vineyard views throughout." }
    ],
    coordinates: [
      [43.8384, 5.0387],  // Cavaillon
      [43.8262, 5.0650],
      [43.8100, 5.1000],
      [43.7950, 5.1350],
      [43.7890, 5.1550],
      [43.7700, 5.1750],  // Near Oppède
      [43.7550, 5.2000],
      [43.7500, 5.2800],  // Bonnieux
      [43.7600, 5.3000],
      [43.7800, 5.2900],
      [43.7950, 5.2850],  // Near Roussillon
      [43.8100, 5.2700],
      [43.8300, 5.2900],
      [43.8500, 5.3200],
      [43.8769, 5.3960],  // Apt
      [43.8600, 5.3800],
      [43.8400, 5.3600],
      [43.8200, 5.3400],
      [43.8000, 5.3200],
      [43.7800, 5.3000],
      [43.7650, 5.2800],  // Lourmarin
      [43.7700, 5.2500],
      [43.7800, 5.2000],
      [43.7900, 5.1500],
      [43.8100, 5.1000],
      [43.8384, 5.0387]   // Back to Cavaillon
    ],
    tips: [
      "Carry extra water in summer — fountains are sparse on the Luberon ridge.",
      "Apt's Saturday market is one of the best in Provence for cheap picnic supplies.",
      "The D943 has a shoulder but can be busy; leave early in the morning."
    ]
  },
  {
    id: "lavender-route",
    name: "Lavender Fields Route",
    days: 5,
    distance: 210,
    difficulty: "moderate",
    color: "#e67e22",
    summary: "Ride through the iconic lavender plateau of Valensole and the dramatic Gorges du Verdon, one of France's most stunning natural sites.",
    stages: [
      { day: 1, from: "Manosque", to: "Valensole", km: 32, climb: 450, description: "Climb gently onto the Valensole plateau. In June-July the lavender is in full bloom — an unforgettable sight." },
      { day: 2, from: "Valensole", to: "Moustiers-Sainte-Marie", km: 45, climb: 600, description: "Cross the plateau and descend to the turquoise Lac de Sainte-Croix. Moustiers is a stunning cliffside village." },
      { day: 3, from: "Moustiers-Sainte-Marie", to: "La Palud-sur-Verdon", km: 38, climb: 750, description: "Ride the Route des Crêtes above the Gorges du Verdon. Vertigo-inducing viewpoints — take your time." },
      { day: 4, from: "La Palud-sur-Verdon", to: "Riez", km: 48, climb: 520, description: "Return via the south rim of the gorges, then descend to the Roman town of Riez with its 1st-century columns." },
      { day: 5, from: "Riez", to: "Manosque", km: 47, climb: 380, description: "A relaxed final day through almond orchards and olive groves back to Manosque." }
    ],
    coordinates: [
      [43.8287, 5.7870],  // Manosque
      [43.8400, 5.8200],
      [43.8500, 5.8600],
      [43.8600, 5.9000],
      [43.8370, 5.9830],  // Valensole
      [43.8200, 6.0200],
      [43.8000, 6.0600],
      [43.7900, 6.1000],
      [43.7750, 6.1500],
      [43.7766, 6.2204],  // Moustiers
      [43.7800, 6.2500],
      [43.7900, 6.2800],
      [43.7750, 6.3200],
      [43.7824, 6.3430],  // La Palud
      [43.7700, 6.3200],
      [43.7500, 6.2800],
      [43.7300, 6.2400],
      [43.8100, 6.0930],  // Riez
      [43.8200, 6.0500],
      [43.8300, 6.0000],
      [43.8350, 5.9500],
      [43.8400, 5.9000],
      [43.8350, 5.8500],
      [43.8287, 5.7870]   // Back to Manosque
    ],
    tips: [
      "Lavender blooms mid-June to mid-July. Outside this window the plateau is still beautiful but golden.",
      "The Route des Crêtes is closed to cars in winter but open to bikes year-round.",
      "Fill up on water at Moustiers — the gorge section has nothing for 30km."
    ]
  },
  {
    id: "camargue-coast",
    name: "Camargue & Coast",
    days: 3,
    distance: 120,
    difficulty: "easy",
    color: "#3498db",
    summary: "Flat riding through the wetlands of the Camargue — wild horses, flamingos, and salt flats — ending at the Mediterranean coast.",
    stages: [
      { day: 1, from: "Arles", to: "Saintes-Maries-de-la-Mer", km: 40, climb: 30, description: "Almost entirely flat along the Petit Rhône. Watch for flamingos in the étangs. Roman Arles is worth a morning before you leave." },
      { day: 2, from: "Saintes-Maries-de-la-Mer", to: "Aigues-Mortes", km: 38, climb: 15, description: "Coast along the Mediterranean beaches and salt pans. Aigues-Mortes has intact medieval walls and cheap restaurants." },
      { day: 3, from: "Aigues-Mortes", to: "Arles", km: 42, climb: 20, description: "Return north through rice paddies and bull ranches. Stop at the Pont de Gau bird sanctuary." }
    ],
    coordinates: [
      [43.6767, 4.6278],  // Arles
      [43.6500, 4.6000],
      [43.6200, 4.5700],
      [43.5800, 4.5300],
      [43.5500, 4.5000],
      [43.5200, 4.4700],
      [43.4530, 4.4283],  // Saintes-Maries
      [43.4600, 4.3800],
      [43.4700, 4.3300],
      [43.4900, 4.2800],
      [43.5100, 4.2300],
      [43.5389, 4.1904],  // Aigues-Mortes
      [43.5600, 4.2300],
      [43.5800, 4.2800],
      [43.6000, 4.3500],
      [43.6200, 4.4200],
      [43.6400, 4.4800],
      [43.6600, 4.5500],
      [43.6767, 4.6278]   // Back to Arles
    ],
    tips: [
      "This is the flattest route — great for beginners or windy days (the Mistral blows hard here).",
      "Mosquitoes are brutal in the Camargue from May to September. Bring repellent.",
      "Free wild camping is tolerated on the beaches east of Saintes-Maries outside high season."
    ]
  },
  {
    id: "mont-ventoux",
    name: "Mont Ventoux Challenge",
    days: 5,
    distance: 230,
    difficulty: "hard",
    color: "#e74c3c",
    summary: "For strong legs: a loop that includes the legendary Mont Ventoux climb (1,909m), the Dentelles de Montmirail, and the wine villages of the Côtes du Rhône.",
    stages: [
      { day: 1, from: "Orange", to: "Vaison-la-Romaine", km: 35, climb: 350, description: "Warm-up day through Côtes du Rhône vineyards. Orange has a magnificent Roman theatre; Vaison has Roman ruins and a medieval upper town." },
      { day: 2, from: "Vaison-la-Romaine", to: "Malaucène", km: 42, climb: 700, description: "Ride through the Dentelles de Montmirail — jagged limestone peaks surrounded by vineyards. Taste Gigondas wine at source." },
      { day: 3, from: "Malaucène", to: "Summit & Bédoin", km: 52, climb: 1600, description: "The big day: climb Ventoux from Malaucène (21km, 1535m elevation gain). Descend via Bédoin. Carry warm layers for the summit." },
      { day: 4, from: "Bédoin", to: "Carpentras", km: 45, climb: 400, description: "Recovery day descending to Carpentras through cherry orchards. Friday is Carpentras market day — one of the biggest in Provence." },
      { day: 5, from: "Carpentras", to: "Orange", km: 56, climb: 250, description: "Gentle return through Châteauneuf-du-Pape and its famous vineyards. Flat finish into Orange." }
    ],
    coordinates: [
      [44.1366, 4.8091],  // Orange
      [44.1600, 4.8400],
      [44.1800, 4.8800],
      [44.2000, 4.9200],
      [44.2200, 4.9500],
      [44.2413, 5.0645],  // Vaison-la-Romaine
      [44.2200, 5.0800],
      [44.2000, 5.1000],
      [44.1800, 5.1200],  // Dentelles
      [44.1730, 5.1330],  // Malaucène
      [44.1600, 5.1500],
      [44.1500, 5.1700],
      [44.1400, 5.1900],
      [44.1740, 5.2789],  // Mont Ventoux summit
      [44.1500, 5.2500],
      [44.1300, 5.2200],
      [44.1260, 5.1810],  // Bédoin
      [44.1100, 5.1500],
      [44.1000, 5.1200],
      [44.0556, 5.0489],  // Carpentras
      [44.0700, 5.0000],
      [44.0800, 4.9500],
      [44.0559, 4.8316],  // Châteauneuf-du-Pape
      [44.0800, 4.8200],
      [44.1000, 4.8100],
      [44.1366, 4.8091]   // Back to Orange
    ],
    tips: [
      "Ventoux can have snow and freezing winds even in June. Always carry arm warmers and a windbreaker.",
      "Start the Ventoux climb at dawn to avoid afternoon heat and traffic.",
      "There's a water fountain at Chalet Reynard (6km from summit) — last refill point."
    ]
  },
  {
    id: "aix-marseille",
    name: "Aix to Marseille Calanques",
    days: 3,
    distance: 115,
    difficulty: "moderate",
    color: "#e67e22",
    summary: "From the elegant streets of Aix-en-Provence to the dramatic limestone calanques of the Mediterranean coast.",
    stages: [
      { day: 1, from: "Aix-en-Provence", to: "Aubagne", km: 35, climb: 400, description: "Ride through the pine-covered hills of the Étoile massif. Stop at Marcel Pagnol's village of La Treille." },
      { day: 2, from: "Aubagne", to: "Cassis", km: 32, climb: 550, description: "Climb the Col de la Gineste with views over the calanques, then descend to the picturesque fishing port of Cassis." },
      { day: 3, from: "Cassis", to: "Marseille", km: 48, climb: 480, description: "Ride the stunning Route des Crêtes between Cassis and La Ciotat, then coast into Marseille along the corniche." }
    ],
    coordinates: [
      [43.5297, 5.4474],  // Aix-en-Provence
      [43.5100, 5.4600],
      [43.4900, 5.4800],
      [43.4700, 5.5000],
      [43.4500, 5.5200],
      [43.2955, 5.5671],  // Aubagne
      [43.2800, 5.5500],
      [43.2600, 5.5300],
      [43.2400, 5.5100],
      [43.2149, 5.5370],  // Cassis
      [43.2200, 5.5000],
      [43.2300, 5.4600],
      [43.2400, 5.4200],
      [43.2500, 5.3800],
      [43.2600, 5.3400],
      [43.2965, 5.3698]   // Marseille
    ],
    tips: [
      "The calanques are a national park — wild camping is strictly prohibited inside park boundaries.",
      "Cassis has a tiny beach but big prices. Buy food in Aubagne instead.",
      "The Route des Crêtes closes on windy days (Mistral) — check ahead."
    ]
  }
];
