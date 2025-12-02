import { AgeType, AgeConfig, TimelineEvent } from './types';

export const AGES: AgeConfig[] = [
  { 
    id: AgeType.YUVARA, 
    label: "Age of Yuvara", 
    yearRange: "0001YV - 6999YV", 
    color: "text-gray-400",
    description: "The earliest identified era. Fragmentary records. Data processed by Codex Cortex."
  },
  { 
    id: AgeType.UMBARA, 
    label: "Age of Umbara", 
    yearRange: "0001UB - 6999UB", 
    color: "text-neon-purple",
    description: "Era of discovery, divine beings (Amecka, Krulljino, Neznee), and the rise of the Myojin Swarm."
  },
  { 
    id: AgeType.PILLARA, 
    label: "Age of Pillara", 
    yearRange: "0001PA - 6999PA", 
    color: "text-blue-400",
    description: "Rise of the Intergalactic Trade Federation, the Seven Families, and the transformation of the Myojin."
  },
  { 
    id: AgeType.FINARA, 
    label: "Age of Finara", 
    yearRange: "0001FN - 6999FN", 
    color: "text-red-400",
    description: "Collapse of travel, rise of warlords like Hirik and Silus, and the Gloomgore Corrosion."
  },
  { 
    id: AgeType.HELIORA, 
    label: "Age of Heliora", 
    yearRange: "0001HL - 6999HL", 
    color: "text-neon-gold",
    description: "Arrival of Cyphar, the Federation of Peace, Daxen Baytorrow, and the Sunstride Crisis."
  },
  { 
    id: AgeType.COSARA, 
    label: "Age of Cosara", 
    yearRange: "0001CS - Present", 
    color: "text-neon-blue",
    description: "The era of the Galacticana, intergalactic combat sports, and the modern Federation."
  },
];

// A curated selection of events from the provided text to populate the timeline.
export const TIMELINE_DATA: TimelineEvent[] = [
  // Yuvara
  { age: AgeType.YUVARA, year: "0001", suffix: "YV", description: "Earliest identified era. Details speculative due to near-total absence of direct evidence." },
  
  // Umbara
  { age: AgeType.UMBARA, year: "0001", suffix: "UB", description: "Hypatonius arrives on Atherea, declaring the Age of Umbara." },
  { age: AgeType.UMBARA, year: "0010", suffix: "UB", description: "First accounts of Amecka, appearing in the Golden Cloak of Liberation." },
  { age: AgeType.UMBARA, year: "0030", suffix: "UB", description: "Krulljino appears, draped in the Velvet Veil of Curiosity." },
  { age: AgeType.UMBARA, year: "0050", suffix: "UB", description: "Neznee first sighted, clad in the Platinum Mantle of Tranquility." },
  { age: AgeType.UMBARA, year: "0072", suffix: "UB", description: "The Grizzak Grand Prix is officially conceived in the Juthreem System." },
  { age: AgeType.UMBARA, year: "0116", suffix: "UB", description: "The Myojin Swarm is first reported, a terrifying force of consumption led by the Empress." },
  { age: AgeType.UMBARA, year: "2279", suffix: "UB", description: "Amecka, Krulljino, and Neznee unite to split the Azure Inferno using the Tri-Torches of Eternity." },
  { age: AgeType.UMBARA, year: "3389", suffix: "UB", description: "Kepler Kemplorion pilots the Titanius Maximus in the Grizzak Grand Prix, interrupted by a Myojin attack." },
  { age: AgeType.UMBARA, year: "6001", suffix: "UB", description: "Rowyn, the Breaker of Suns, destroys the Pegasi System in a fit of rage after the Trials of Annihilation fail." },
  { age: AgeType.UMBARA, year: "6111", suffix: "UB", description: "The Dawn of the Radiant Crown ends. Hypatonius withdraws from the Federation Spaceway." },

  // Pillara
  { age: AgeType.PILLARA, year: "0001", suffix: "PA", description: "The Venderizi establish the Intergalactic Trade Federation." },
  { age: AgeType.PILLARA, year: "0999", suffix: "PA", description: "The Intergalactic Council of One is formed to govern the Federation." },
  { age: AgeType.PILLARA, year: "3135", suffix: "PA", description: "The Federation descends into the War of Seven Strifes, fought by the Seven Families." },
  { age: AgeType.PILLARA, year: "4008", suffix: "PA", description: "The Arcane Crystal appears in the Ryuto System." },
  { age: AgeType.PILLARA, year: "4704", suffix: "PA", description: "Transformation of the Myojin Swarm into the Myojin Colony after consuming the red soil of Sahlolnu's moon." },
  { age: AgeType.PILLARA, year: "6000", suffix: "PA", description: "The Kemplorion Family fractures into competing factions." },

  // Finara
  { age: AgeType.FINARA, year: "0001", suffix: "FN", description: "Federation Spaceway fractures into isolated realms following collapse of interstellar travel." },
  { age: AgeType.FINARA, year: "0242", suffix: "FN", description: "Hirik Si Tono's sons form Hirik's Havoc Squad." },
  { age: AgeType.FINARA, year: "0244", suffix: "FN", description: "Silus Kar Dotarvayne destroys the Joradd System. Myojin survivors flee to Arachbots Outpost." },
  { age: AgeType.FINARA, year: "1666", suffix: "FN", description: "The Gloomgore Corrosion descends on the planet Atta." },
  { age: AgeType.FINARA, year: "1671", suffix: "FN", description: "The Akanese capture the Gloomgore Corrosion in the Dangerdome." },
  { age: AgeType.FINARA, year: "3903", suffix: "FN", description: "The planet Tomiko vanishes, along with its yidromite gems." },
  { age: AgeType.FINARA, year: "5023", suffix: "FN", description: "Formation of the Forge-World Pact." },

  // Heliora
  { age: AgeType.HELIORA, year: "0001", suffix: "HL", description: "Cyphar crash lands on Thyferra and is nursed back to health." },
  { age: AgeType.HELIORA, year: "0029", suffix: "HL", description: "Daxen Baytorrow is born on Yadalla." },
  { age: AgeType.HELIORA, year: "0054", suffix: "HL", description: "Chokori Pirate Fleet invades Yadalla. Daxen is transformed on Raysho and returns to liberate his world." },
  { age: AgeType.HELIORA, year: "0151", suffix: "HL", description: "Tagnara Twins discover Rae Doniah." },
  { age: AgeType.HELIORA, year: "0255", suffix: "HL", description: "Battle for the Mowsta System involving Hirik's Havoc Squad, Daxen, Cyphar, and the Forge-World Pact." },
  { age: AgeType.HELIORA, year: "0299", suffix: "HL", description: "Establishment of the Federation of Peace Treaty on Aku." },
  { age: AgeType.HELIORA, year: "0406", suffix: "HL", description: "Coalition forces defeat the planet-eating Nevrekar in the Eldafar System." },
  { age: AgeType.HELIORA, year: "1664", suffix: "HL", description: "Capto Enterno appears as a vigilante in Horizon City." },
  { age: AgeType.HELIORA, year: "1699", suffix: "HL", description: "Hazezon Battalion destroys Thyferra." },
  { age: AgeType.HELIORA, year: "2113", suffix: "HL", description: "Destruction of the Ark Destroyer Nymar by fanatical Hypatonius Knights." },
  { age: AgeType.HELIORA, year: "3240", suffix: "HL", description: "Cyphar sacrifices himself to save the Sunstride System. Daxen inherits his aura." },
  { age: AgeType.HELIORA, year: "3242", suffix: "HL", description: "\"United We Stand\" Treaty signed. Federation of Unity established." },
  { age: AgeType.HELIORA, year: "6999", suffix: "HL", description: "Daxen Baytorrow establishes the Proving Grounds and unveils the Infinity Championship." },

  // Cosara
  { age: AgeType.COSARA, year: "0001", suffix: "CS", description: "The Galacticana starship is unveiled. Marak Ednar becomes the first Infinity Champion." },
  { age: AgeType.COSARA, year: "0002", suffix: "CS", description: "Expansion of Galacticana events: Brawl4All, Proxima Ultima, Kepler's Conquest." },
  { age: AgeType.COSARA, year: "0010", suffix: "CS", description: "Introduction of Avernos Duos Championship belts." },
  { age: AgeType.COSARA, year: "0036", suffix: "CS", description: "Inaugural Combataclysm event. Dophosarr becomes first Berzerker Champion." },
  { age: AgeType.COSARA, year: "0300", suffix: "CS", description: "Introduction of Infernios Trios Championships." },
  { age: AgeType.COSARA, year: "0350", suffix: "CS", description: "Imugio Mishra challenges Daxen Baytorrow. Daxen wins and becomes the Eternal Champion." },
  { age: AgeType.COSARA, year: "1587", suffix: "CS", description: "The Noxclaw Accord makes their debut." },
  { age: AgeType.COSARA, year: "1812", suffix: "CS", description: "Mining operations commence on Edzell III by Minera Company." },
  { age: AgeType.COSARA, year: "2484", suffix: "CS", description: "Raxus emerges from the deserts of Delphon." },
  { age: AgeType.COSARA, year: "2664", suffix: "CS", description: "Yessika System suns merge, destroying inner planets." },
  { age: AgeType.COSARA, year: "2726", suffix: "CS", description: "Raiden Pike enrolls in Vurmad Dojo Institute." },
  { age: AgeType.COSARA, year: "2753", suffix: "CS", description: "Werick Rex releases 'My Muscles, My Music'." },
  { age: AgeType.COSARA, year: "2760", suffix: "CS", description: "The Doomsday Trio (Cyzoth, Zakk Tibalt, Venser Dwen) invited to Galacticana." },
  { age: AgeType.COSARA, year: "2776", suffix: "CS", description: "Current Cycle. New teams debut: Shin Jo Force, Crusader Corps, The Faith." },
];
