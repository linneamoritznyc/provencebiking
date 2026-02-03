/**
 * Points of Interest data for Provence cycling.
 * Categories: camping, food, water, bike_shop, attraction, rest_stop
 */
const POIS = [
  // ============ CAMPING ============
  {
    id: "camp-cavaillon",
    category: "camping",
    type: "municipal",
    name: "Camping de la Durance",
    lat: 43.8320,
    lng: 5.0420,
    price: "€12/night",
    description: "Shaded municipal campsite by the river. Hot showers, basic kitchen area. Bike-friendly access.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "camp-apt",
    category: "camping",
    type: "municipal",
    name: "Camping Les Cèdres, Apt",
    lat: 43.8750,
    lng: 5.3900,
    price: "€10/night",
    description: "Simple municipal site on the edge of town. Walking distance to Saturday market. Has washing facilities.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "camp-lourmarin",
    category: "camping",
    type: "municipal",
    name: "Camping Les Oliviers, Lourmarin",
    lat: 43.7680,
    lng: 5.2750,
    price: "€14/night",
    description: "Olive grove campsite near the château. Small but peaceful. Bread delivery in the morning.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "camp-valensole",
    category: "camping",
    type: "bivouac",
    name: "Bivouac Spot — Valensole Plateau",
    lat: 43.8350,
    lng: 5.9900,
    price: "Free",
    description: "Flat area off the D6 with lavender views. No facilities — bring everything. Leave no trace.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "camp-moustiers",
    category: "camping",
    type: "municipal",
    name: "Camping St Jean, Moustiers",
    lat: 43.7740,
    lng: 6.2180,
    price: "€11/night",
    description: "Terraced campsite below the village. Stunning views of the gorge entrance. Small shop on site.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "camp-stesmaries",
    category: "camping",
    type: "municipal",
    name: "Camping La Brise, Saintes-Maries",
    lat: 43.4550,
    lng: 4.4300,
    price: "€13/night",
    description: "Sandy campsite near the beach. Can be windy but great for sunset watching. Basic showers.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "camp-aiguesmortes",
    category: "camping",
    type: "municipal",
    name: "Camping La Petite Camargue",
    lat: 43.5420,
    lng: 4.1950,
    price: "€14/night",
    description: "Just outside the medieval walls. Pool, laundry, and bike storage. Good base to explore the town.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "camp-vaison",
    category: "camping",
    type: "municipal",
    name: "Camping du Théâtre Romain, Vaison",
    lat: 43.2450,
    lng: 5.0680,
    price: "€12/night",
    description: "Near the Roman bridge. Shaded pitches, clean facilities. Walking distance to old town restaurants.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "camp-bedoin",
    category: "camping",
    type: "municipal",
    name: "Camping Pastory, Bédoin",
    lat: 44.1240,
    lng: 5.1780,
    price: "€11/night",
    description: "Popular with cyclists doing Ventoux. Shaded spots under plane trees. Bike wash station available.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "camp-cassis",
    category: "camping",
    type: "municipal",
    name: "Camping Les Cigales, Cassis",
    lat: 43.2180,
    lng: 5.5400,
    price: "€15/night",
    description: "Terraced site in the pines above Cassis. 15 min walk to port. Gets busy in summer — arrive early.",
    nearRoute: ["aix-marseille"]
  },

  // ============ FOOD — SUPERMARKETS ============
  {
    id: "food-lidl-cavaillon",
    category: "food",
    type: "supermarket",
    name: "Lidl Cavaillon",
    lat: 43.8410,
    lng: 5.0350,
    price: "€",
    description: "Budget supermarket on the north edge of town. Good for stocking up on pasta, cheese, and wine.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "food-intermarche-apt",
    category: "food",
    type: "supermarket",
    name: "Intermarché Apt",
    lat: 43.8780,
    lng: 5.4000,
    price: "€",
    description: "Large supermarket with bakery section. Grab baguettes and local cheese for the road.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "food-carrefour-manosque",
    category: "food",
    type: "supermarket",
    name: "Carrefour Contact Manosque",
    lat: 43.8300,
    lng: 5.7900,
    price: "€",
    description: "City-center supermarket. Stock up before hitting the plateau — nothing for 30km after this.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "food-casino-arles",
    category: "food",
    type: "supermarket",
    name: "Casino Supermarché Arles",
    lat: 43.6780,
    lng: 4.6310,
    price: "€",
    description: "Central Arles location. Good deli counter and regional products section.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "food-lidl-orange",
    category: "food",
    type: "supermarket",
    name: "Lidl Orange",
    lat: 44.1380,
    lng: 4.8050,
    price: "€",
    description: "Stock up before starting the Ventoux loop. Cheap and well-stocked.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "food-monoprix-aix",
    category: "food",
    type: "supermarket",
    name: "Monoprix Aix-en-Provence",
    lat: 43.5280,
    lng: 5.4470,
    price: "€€",
    description: "City-center supermarket on Cours Mirabeau. Pricier but convenient and has prepared foods.",
    nearRoute: ["aix-marseille"]
  },

  // ============ FOOD — MARKETS ============
  {
    id: "market-apt",
    category: "food",
    type: "market",
    name: "Apt Saturday Market",
    lat: 43.8769,
    lng: 5.3960,
    price: "€",
    description: "One of Provence's best markets. Cheap fruit, vegetables, cheese, olives, and rotisserie chicken. Saturday mornings only.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "market-vaison",
    category: "food",
    type: "market",
    name: "Vaison-la-Romaine Tuesday Market",
    lat: 44.2413,
    lng: 5.0645,
    price: "€",
    description: "Large market filling the town center. Local honey, sausisson, goat cheese, and cheap clothing. Tuesday mornings.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "market-carpentras",
    category: "food",
    type: "market",
    name: "Carpentras Friday Market",
    lat: 44.0556,
    lng: 5.0489,
    price: "€",
    description: "Huge Friday market famous for truffles (winter) and berlingots candy. Great cheap produce and street food.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "market-arles",
    category: "food",
    type: "market",
    name: "Arles Saturday Market",
    lat: 43.6780,
    lng: 4.6300,
    price: "€",
    description: "Stretches along Boulevard des Lices. Excellent sausages, cheese, and Camargue rice. Saturday mornings.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "market-aix",
    category: "food",
    type: "market",
    name: "Aix-en-Provence Daily Market",
    lat: 43.5310,
    lng: 5.4490,
    price: "€",
    description: "Place Richelme has a small daily produce market. Bigger flower and food market Tue/Thu/Sat.",
    nearRoute: ["aix-marseille"]
  },

  // ============ FOOD — BAKERIES ============
  {
    id: "bakery-bonnieux",
    category: "food",
    type: "bakery",
    name: "Boulangerie de Bonnieux",
    lat: 43.7500,
    lng: 5.2800,
    price: "€",
    description: "Excellent village bakery at the base of the hill. Croissants, pain au chocolat, and fougasse from €1.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "bakery-moustiers",
    category: "food",
    type: "bakery",
    name: "La Boulangerie du Village, Moustiers",
    lat: 43.7766,
    lng: 6.2204,
    price: "€",
    description: "Fresh bread and pastries from 6:30am. The lavender honey tartlets are a local specialty.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "bakery-bedoin",
    category: "food",
    type: "bakery",
    name: "Boulangerie Le Fournil, Bédoin",
    lat: 44.1260,
    lng: 5.1810,
    price: "€",
    description: "Fuel up before Ventoux with a pain aux noix and espresso. Opens at 6am.",
    nearRoute: ["mont-ventoux"]
  },

  // ============ WATER SOURCES ============
  {
    id: "water-fontaine-vaucluse",
    category: "water",
    type: "fountain",
    name: "Fontaine-de-Vaucluse Spring",
    lat: 43.9220,
    lng: 5.1290,
    price: "Free",
    description: "One of the largest natural springs in the world. Refill bottles with fresh spring water. Beautiful detour from the Luberon loop.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "water-apt",
    category: "water",
    type: "fountain",
    name: "Public Fountain, Place de la Bouquerie, Apt",
    lat: 43.8765,
    lng: 5.3950,
    price: "Free",
    description: "Drinking water fountain in the old town center. Easy to find on market days.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "water-moustiers",
    category: "water",
    type: "fountain",
    name: "Village Fountain, Moustiers",
    lat: 43.7770,
    lng: 6.2210,
    price: "Free",
    description: "Potable fountain in the main square. Fill up here — no water sources for 30km into the gorges.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "water-chalet-reynard",
    category: "water",
    type: "fountain",
    name: "Chalet Reynard Water Point",
    lat: 44.1600,
    lng: 5.2450,
    price: "Free",
    description: "Last water point before Ventoux summit. Restaurant also sells cold drinks. At 1400m elevation.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "water-cassis",
    category: "water",
    type: "fountain",
    name: "Public Fountain, Port de Cassis",
    lat: 43.2149,
    lng: 5.5370,
    price: "Free",
    description: "Drinking fountain near the harbor. Refill after the Col de la Gineste descent.",
    nearRoute: ["aix-marseille"]
  },

  // ============ BIKE SHOPS ============
  {
    id: "bike-cavaillon",
    category: "bike_shop",
    type: "repair",
    name: "Cycles Cavaillonnais",
    lat: 43.8370,
    lng: 5.0400,
    price: "€€",
    description: "Full-service bike shop. Spare tubes, tires, and basic repairs. Closed Sundays and Monday mornings.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "bike-apt",
    category: "bike_shop",
    type: "repair",
    name: "Vélo Loisir Luberon, Apt",
    lat: 43.8750,
    lng: 5.3930,
    price: "€€",
    description: "Specializes in touring bikes. Good advice on local routes. Rents panniers if you need extras.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "bike-bedoin",
    category: "bike_shop",
    type: "repair",
    name: "Cycles Bédoin",
    lat: 44.1255,
    lng: 5.1800,
    price: "€€",
    description: "The go-to shop for Ventoux cyclists. Tubes, chains, and emergency repairs. Knows the mountain roads well.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "bike-arles",
    category: "bike_shop",
    type: "repair",
    name: "Taco & Co Vélos, Arles",
    lat: 43.6760,
    lng: 4.6290,
    price: "€€",
    description: "Repairs, rentals, and advice on Camargue cycling. Also rents waterproof panniers for the marshy terrain.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "bike-marseille",
    category: "bike_shop",
    type: "repair",
    name: "La Cyclerie, Marseille",
    lat: 43.2960,
    lng: 5.3700,
    price: "€€",
    description: "Community bike workshop near the Vieux Port. Tools available, parts at cost. Great for DIY repairs.",
    nearRoute: ["aix-marseille"]
  },

  // ============ ATTRACTIONS ============
  {
    id: "attr-roussillon",
    category: "attraction",
    type: "landmark",
    name: "Roussillon Ochre Cliffs",
    lat: 43.7980,
    lng: 5.2920,
    price: "€2.50 entry",
    description: "Stunning ochre-colored cliffs and walking trail through former pigment quarries. The village itself is built from the red rock.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "attr-gordes",
    category: "attraction",
    type: "village",
    name: "Gordes",
    lat: 43.9120,
    lng: 5.2000,
    price: "Free",
    description: "One of the \"Plus Beaux Villages de France.\" Perched dramatically on a hillside with panoramic Luberon views. Very touristy but worth a photo stop.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "attr-senanque",
    category: "attraction",
    type: "landmark",
    name: "Abbaye de Sénanque",
    lat: 43.9280,
    lng: 5.1870,
    price: "€8 guided tour",
    description: "12th-century Cistercian abbey surrounded by lavender fields. The most photographed spot in Provence. Monks still live here.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "attr-verdon",
    category: "attraction",
    type: "landmark",
    name: "Gorges du Verdon Viewpoint",
    lat: 43.7600,
    lng: 6.3300,
    price: "Free",
    description: "Europe's largest canyon. The Route des Crêtes has multiple viewpoints over 700m drops. Not for vertigo sufferers.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "attr-lac-stecroix",
    category: "attraction",
    type: "landmark",
    name: "Lac de Sainte-Croix",
    lat: 43.7700,
    lng: 6.1800,
    price: "Free",
    description: "Stunning turquoise lake at the mouth of the Verdon gorges. Good swimming spot. Pedal boat rental available.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "attr-arles-roman",
    category: "attraction",
    type: "landmark",
    name: "Arles Roman Amphitheatre",
    lat: 43.6778,
    lng: 4.6312,
    price: "€9",
    description: "2,000-year-old Roman amphitheatre still used for bullfights and concerts. Also see the Roman theatre nearby.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "attr-flamingos",
    category: "attraction",
    type: "nature",
    name: "Parc Ornithologique de Pont de Gau",
    lat: 43.4750,
    lng: 4.4150,
    price: "€7.50",
    description: "Boardwalk trails through flamingo habitats. Hundreds of pink flamingos up close. Best in spring and autumn.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "attr-ventoux",
    category: "attraction",
    type: "landmark",
    name: "Mont Ventoux Summit",
    lat: 44.1740,
    lng: 5.2789,
    price: "Free",
    description: "The \"Beast of Provence\" at 1,909m. Legendary Tour de France climb. The Tom Simpson memorial is 1km below the summit.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "attr-orange-theatre",
    category: "attraction",
    type: "landmark",
    name: "Théâtre Antique d'Orange",
    lat: 44.1370,
    lng: 4.8095,
    price: "€10.50",
    description: "Best-preserved Roman theatre in Europe. The stage wall is 36m high and 103m wide. UNESCO World Heritage Site.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "attr-calanques",
    category: "attraction",
    type: "nature",
    name: "Calanques de Cassis",
    lat: 43.2100,
    lng: 5.5100,
    price: "Free",
    description: "Dramatic limestone inlets with turquoise water. Hike to Calanque de Port-Miou (easy) or En-Vau (strenuous). Lock your bike well.",
    nearRoute: ["aix-marseille"]
  },
  {
    id: "attr-aix-cezanne",
    category: "attraction",
    type: "landmark",
    name: "Atelier de Cézanne",
    lat: 43.5340,
    lng: 5.4460,
    price: "€6.50",
    description: "The studio where Paul Cézanne painted. His easel, hat, and still-life objects remain as he left them.",
    nearRoute: ["aix-marseille"]
  },

  // ============ REST STOPS ============
  {
    id: "rest-oppede",
    category: "rest_stop",
    type: "viewpoint",
    name: "Oppède-le-Vieux Viewpoint",
    lat: 43.7700,
    lng: 5.1750,
    price: "Free",
    description: "Ruined medieval village with panoramic views over the Luberon valley. Shaded benches under old oaks. Good lunch spot.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "rest-buoux",
    category: "rest_stop",
    type: "picnic",
    name: "Aire de Pique-Nique, Fort de Buoux",
    lat: 43.8200,
    lng: 5.3700,
    price: "Free",
    description: "Shaded picnic tables near the old fort. Cool even in summer under the cliff overhang. No water — bring your own.",
    nearRoute: ["luberon-loop"]
  },
  {
    id: "rest-valensole-lavender",
    category: "rest_stop",
    type: "viewpoint",
    name: "Lavender Viewpoint D6",
    lat: 43.8380,
    lng: 5.9850,
    price: "Free",
    description: "Pull-off along the D6 with endless lavender field views. Best in late June. Good for photos and a snack break.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "rest-verdon-belvedere",
    category: "rest_stop",
    type: "viewpoint",
    name: "Belvédère de la Dent d'Aire",
    lat: 43.7650,
    lng: 6.3100,
    price: "Free",
    description: "Stomach-dropping viewpoint over the Verdon canyon. Stone safety wall. Bench for resting.",
    nearRoute: ["lavender-route"]
  },
  {
    id: "rest-camargue-etang",
    category: "rest_stop",
    type: "viewpoint",
    name: "Étang de Vaccarès Observation Point",
    lat: 43.5200,
    lng: 4.5000,
    price: "Free",
    description: "Bird observation point on the largest lagoon. Flamingos, herons, and egrets. Flat and exposed — bring sun protection.",
    nearRoute: ["camargue-coast"]
  },
  {
    id: "rest-ventoux-chalet",
    category: "rest_stop",
    type: "picnic",
    name: "Chalet Reynard Rest Area",
    lat: 44.1580,
    lng: 5.2430,
    price: "Free (restaurant €€)",
    description: "Last civilisation before the summit. Restaurant, toilets, and water fountain at 1400m. Good place to assess weather before the final push.",
    nearRoute: ["mont-ventoux"]
  },
  {
    id: "rest-gineste-col",
    category: "rest_stop",
    type: "viewpoint",
    name: "Col de la Gineste Summit",
    lat: 43.2400,
    lng: 5.5000,
    price: "Free",
    description: "Top of the climb from Aubagne. Panoramic views over the calanques coast. Bench and shade trees. All downhill from here to Cassis.",
    nearRoute: ["aix-marseille"]
  }
];

/**
 * Category display configuration
 */
const POI_CATEGORIES = {
  camping: {
    label: "Camping & Bivouac",
    icon: "⛺",
    color: "#27ae60",
    markerColor: "green"
  },
  food: {
    label: "Food & Markets",
    icon: "🛒",
    color: "#f39c12",
    markerColor: "gold"
  },
  water: {
    label: "Water Sources",
    icon: "💧",
    color: "#3498db",
    markerColor: "blue"
  },
  bike_shop: {
    label: "Bike Shops",
    icon: "🔧",
    color: "#9b59b6",
    markerColor: "purple"
  },
  attraction: {
    label: "Attractions",
    icon: "🏛️",
    color: "#8b1a2b",
    markerColor: "burgundy"
  },
  rest_stop: {
    label: "Rest Stops & Views",
    icon: "🌿",
    color: "#16a085",
    markerColor: "teal"
  }
};
