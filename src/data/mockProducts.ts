export type Condition = 'nieuw' | 'uitstekend' | 'goed' | 'gebruikt' | 'beperkt';

export interface ConditionVariant {
  condition: Condition;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: 'airpods-1' | 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-pro-1' | 'airpods-pro-2';
  side?: 'left' | 'right';
  type: 'earbud' | 'case' | 'accessory';
  variants: ConditionVariant[];
  images: string[];
  description: string;
  compatibility: string[];
  whatsIncluded: string;
}

export const conditionLabels: Record<Condition, string> = {
  'nieuw': 'Nieuw',
  'uitstekend': 'Uitstekend',
  'goed': 'Goed',
  'gebruikt': 'Gebruikt',
  'beperkt': 'Beperkt',
};

export const conditionDescriptions: Record<Condition, string> = {
  'nieuw': 'Gloednieuw en ongebruikt, in originele Apple staat',
  'uitstekend': 'Zo goed als nieuw, geen zichtbare gebruikssporen',
  'goed': 'Lichte gebruikssporen, werkt perfect',
  'gebruikt': 'Duidelijke gebruikssporen, volledig functioneel',
  'beperkt': 'Zichtbare slijtage, werkt naar behoren',
};

export const mockProducts: Product[] = [
  // ========== AirPods 2e generatie ==========
  {
    id: 'ap2-left',
    slug: 'airpods-2e-generatie-links',
    name: 'Losse linker AirPod – 2e generatie',
    model: 'airpods-2',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 59.95, stock: 8 },
      { condition: 'uitstekend', price: 49.95, stock: 12 },
      { condition: 'goed', price: 44.95, stock: 15 },
      { condition: 'gebruikt', price: 39.95, stock: 10 },
      { condition: 'beperkt', price: 29.95, stock: 6 },
    ],
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 2e generatie set.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'Oplaadcase 2e generatie'],
    whatsIncluded: '1x linker AirPod (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap2-right',
    slug: 'airpods-2e-generatie-rechts',
    name: 'Losse rechter AirPod – 2e generatie',
    model: 'airpods-2',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 59.95, stock: 6 },
      { condition: 'uitstekend', price: 49.95, stock: 8 },
      { condition: 'goed', price: 44.95, stock: 11 },
      { condition: 'gebruikt', price: 39.95, stock: 9 },
      { condition: 'beperkt', price: 29.95, stock: 5 },
    ],
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 2e generatie set.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'Oplaadcase 2e generatie'],
    whatsIncluded: '1x rechter AirPod (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap2-case',
    slug: 'airpods-2e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 2e generatie',
    model: 'airpods-2',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 49.95, stock: 10 },
      { condition: 'uitstekend', price: 39.95, stock: 15 },
      { condition: 'goed', price: 34.95, stock: 12 },
      { condition: 'gebruikt', price: 29.95, stock: 8 },
      { condition: 'beperkt', price: 19.95, stock: 4 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple oplaadcase voor AirPods 2e generatie. Met Lightning aansluiting.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'AirPods 1e generatie'],
    whatsIncluded: '1x oplaadcase, geen AirPods inbegrepen.',
  },

  // ========== AirPods 3e generatie ==========
  {
    id: 'ap3-left',
    slug: 'airpods-3e-generatie-links',
    name: 'Losse linker AirPod – 3e generatie',
    model: 'airpods-3',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 79.95, stock: 6 },
      { condition: 'uitstekend', price: 69.95, stock: 10 },
      { condition: 'goed', price: 59.95, stock: 8 },
      { condition: 'gebruikt', price: 54.95, stock: 5 },
      { condition: 'beperkt', price: 44.95, stock: 3 },
    ],
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel. Nieuw design met Spatial Audio.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)', 'MagSafe oplaadcase 3e generatie'],
    whatsIncluded: '1x linker AirPod (3e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap3-right',
    slug: 'airpods-3e-generatie-rechts',
    name: 'Losse rechter AirPod – 3e generatie',
    model: 'airpods-3',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 79.95, stock: 5 },
      { condition: 'uitstekend', price: 69.95, stock: 7 },
      { condition: 'goed', price: 59.95, stock: 9 },
      { condition: 'gebruikt', price: 54.95, stock: 6 },
      { condition: 'beperkt', price: 44.95, stock: 4 },
    ],
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel. Nieuw design met Spatial Audio.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)', 'MagSafe oplaadcase 3e generatie'],
    whatsIncluded: '1x rechter AirPod (3e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap3-case',
    slug: 'airpods-3e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    model: 'airpods-3',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 59.95, stock: 8 },
      { condition: 'uitstekend', price: 49.95, stock: 12 },
      { condition: 'goed', price: 44.95, stock: 10 },
      { condition: 'gebruikt', price: 39.95, stock: 7 },
      { condition: 'beperkt', price: 29.95, stock: 3 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods 3e generatie. Ondersteunt draadloos laden.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x MagSafe oplaadcase, geen AirPods inbegrepen.',
  },

  // ========== AirPods 4e generatie ==========
  {
    id: 'ap4-left',
    slug: 'airpods-4e-generatie-links',
    name: 'Losse linker AirPod – 4e generatie',
    model: 'airpods-4',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 89.95, stock: 4 },
      { condition: 'uitstekend', price: 79.95, stock: 6 },
      { condition: 'goed', price: 69.95, stock: 5 },
      { condition: 'gebruikt', price: 59.95, stock: 3 },
      { condition: 'beperkt', price: 49.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'De nieuwste linker AirPod 4e generatie met H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie (model A3048/A3047)', 'USB-C oplaadcase 4e generatie'],
    whatsIncluded: '1x linker AirPod (4e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap4-right',
    slug: 'airpods-4e-generatie-rechts',
    name: 'Losse rechter AirPod – 4e generatie',
    model: 'airpods-4',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 89.95, stock: 4 },
      { condition: 'uitstekend', price: 79.95, stock: 5 },
      { condition: 'goed', price: 69.95, stock: 4 },
      { condition: 'gebruikt', price: 59.95, stock: 3 },
      { condition: 'beperkt', price: 49.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'De nieuwste rechter AirPod 4e generatie met H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie (model A3048/A3047)', 'USB-C oplaadcase 4e generatie'],
    whatsIncluded: '1x rechter AirPod (4e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap4-case',
    slug: 'airpods-4e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 4e generatie',
    model: 'airpods-4',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 69.95, stock: 6 },
      { condition: 'uitstekend', price: 59.95, stock: 8 },
      { condition: 'goed', price: 54.95, stock: 6 },
      { condition: 'gebruikt', price: 49.95, stock: 4 },
      { condition: 'beperkt', price: 39.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple USB-C oplaadcase voor AirPods 4e generatie. Met MagSafe ondersteuning.',
    compatibility: ['AirPods 4e generatie (model A3048/A3047)'],
    whatsIncluded: '1x USB-C oplaadcase met MagSafe, geen AirPods inbegrepen.',
  },

  // ========== AirPods Pro 1e generatie ==========
  {
    id: 'app1-left',
    slug: 'airpods-pro-1e-generatie-links',
    name: 'Losse linker AirPod Pro – 1e generatie',
    model: 'airpods-pro-1',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 79.95, stock: 5 },
      { condition: 'uitstekend', price: 69.95, stock: 8 },
      { condition: 'goed', price: 59.95, stock: 7 },
      { condition: 'gebruikt', price: 49.95, stock: 6 },
      { condition: 'beperkt', price: 39.95, stock: 4 },
    ],
    images: ['/placeholder.svg'],
    description: 'Linker AirPod Pro 1e generatie met Active Noise Cancelling en silicone tips.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)', 'MagSafe oplaadcase Pro 1'],
    whatsIncluded: '1x linker AirPod Pro (1e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app1-right',
    slug: 'airpods-pro-1e-generatie-rechts',
    name: 'Losse rechter AirPod Pro – 1e generatie',
    model: 'airpods-pro-1',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 79.95, stock: 4 },
      { condition: 'uitstekend', price: 69.95, stock: 7 },
      { condition: 'goed', price: 59.95, stock: 6 },
      { condition: 'gebruikt', price: 49.95, stock: 5 },
      { condition: 'beperkt', price: 39.95, stock: 3 },
    ],
    images: ['/placeholder.svg'],
    description: 'Rechter AirPod Pro 1e generatie met Active Noise Cancelling en silicone tips.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)', 'MagSafe oplaadcase Pro 1'],
    whatsIncluded: '1x rechter AirPod Pro (1e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app1-case',
    slug: 'airpods-pro-1e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods Pro 1e generatie',
    model: 'airpods-pro-1',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 69.95, stock: 6 },
      { condition: 'uitstekend', price: 59.95, stock: 10 },
      { condition: 'goed', price: 49.95, stock: 8 },
      { condition: 'gebruikt', price: 44.95, stock: 5 },
      { condition: 'beperkt', price: 34.95, stock: 3 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 1e generatie. Lightning aansluiting.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
  },

  // ========== AirPods Pro 2e generatie ==========
  {
    id: 'app2-left',
    slug: 'airpods-pro-2e-generatie-links',
    name: 'Losse linker AirPod Pro – 2e generatie',
    model: 'airpods-pro-2',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 99.95, stock: 4 },
      { condition: 'uitstekend', price: 89.95, stock: 6 },
      { condition: 'goed', price: 79.95, stock: 7 },
      { condition: 'gebruikt', price: 69.95, stock: 5 },
      { condition: 'beperkt', price: 59.95, stock: 3 },
    ],
    images: ['/placeholder.svg'],
    description: 'Linker AirPod Pro 2e generatie met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie (model A2931/A2698)', 'MagSafe oplaadcase Pro 2'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-right',
    slug: 'airpods-pro-2e-generatie-rechts',
    name: 'Losse rechter AirPod Pro – 2e generatie',
    model: 'airpods-pro-2',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 99.95, stock: 3 },
      { condition: 'uitstekend', price: 89.95, stock: 5 },
      { condition: 'goed', price: 79.95, stock: 6 },
      { condition: 'gebruikt', price: 69.95, stock: 4 },
      { condition: 'beperkt', price: 59.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'Rechter AirPod Pro 2e generatie met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie (model A2931/A2698)', 'MagSafe oplaadcase Pro 2'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-case-lightning',
    slug: 'airpods-pro-2e-generatie-oplaadcase-lightning',
    name: 'Losse oplaadcase – AirPods Pro 2 (Lightning)',
    model: 'airpods-pro-2',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 89.95, stock: 5 },
      { condition: 'uitstekend', price: 79.95, stock: 8 },
      { condition: 'goed', price: 69.95, stock: 6 },
      { condition: 'gebruikt', price: 59.95, stock: 4 },
      { condition: 'beperkt', price: 49.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 2e generatie met Lightning aansluiting.',
    compatibility: ['AirPods Pro 2e generatie (Lightning versie)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
  },
  {
    id: 'app2-case-usbc',
    slug: 'airpods-pro-2e-generatie-oplaadcase-usbc',
    name: 'Losse oplaadcase – AirPods Pro 2 (USB-C)',
    model: 'airpods-pro-2',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 99.95, stock: 4 },
      { condition: 'uitstekend', price: 89.95, stock: 6 },
      { condition: 'goed', price: 79.95, stock: 5 },
      { condition: 'gebruikt', price: 69.95, stock: 3 },
      { condition: 'beperkt', price: 59.95, stock: 2 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 2e generatie met USB-C aansluiting.',
    compatibility: ['AirPods Pro 2e generatie (USB-C versie)'],
    whatsIncluded: '1x MagSafe oplaadcase met USB-C, geen AirPods inbegrepen.',
  },

  // ========== Accessoires ==========
  {
    id: 'tips-pro',
    slug: 'silicone-tips-airpods-pro',
    name: 'Silicone tips voor AirPods Pro',
    model: 'airpods-pro-2',
    type: 'accessory',
    variants: [
      { condition: 'nieuw', price: 12.95, stock: 30 },
    ],
    images: ['/placeholder.svg'],
    description: 'Originele Apple silicone tips set voor AirPods Pro. Bevat alle 3 maten.',
    compatibility: ['AirPods Pro 1e generatie', 'AirPods Pro 2e generatie'],
    whatsIncluded: '3 paar silicone tips (klein, medium, groot).',
  },
];

export const modelInfo: Record<string, { name: string; modelNumbers: string[]; description: string }> = {
  'airpods-1': {
    name: 'AirPods 1e generatie',
    modelNumbers: ['A1523', 'A1722'],
    description: 'De eerste generatie AirPods, uitgebracht in 2016.',
  },
  'airpods-2': {
    name: 'AirPods 2e generatie',
    modelNumbers: ['A2032', 'A2031'],
    description: 'De tweede generatie AirPods met H1 chip en Hey Siri ondersteuning.',
  },
  'airpods-3': {
    name: 'AirPods 3e generatie',
    modelNumbers: ['A2565', 'A2564'],
    description: 'AirPods met vernieuwd design, Spatial Audio en MagSafe oplaadcase.',
  },
  'airpods-4': {
    name: 'AirPods 4e generatie',
    modelNumbers: ['A3048', 'A3047'],
    description: 'De nieuwste generatie AirPods met H2 chip en USB-C.',
  },
  'airpods-pro-1': {
    name: 'AirPods Pro 1e generatie',
    modelNumbers: ['A2084', 'A2083'],
    description: 'AirPods Pro met Active Noise Cancelling en silicone tips.',
  },
  'airpods-pro-2': {
    name: 'AirPods Pro 2e generatie',
    modelNumbers: ['A2931', 'A2698'],
    description: 'De nieuwste AirPods Pro met H2 chip en Adaptive Audio.',
  },
};

// Helper functie om de laagste prijs van een product te krijgen
export const getLowestPrice = (product: Product): number => {
  return Math.min(...product.variants.map(v => v.price));
};

// Helper functie om de hoogste prijs van een product te krijgen
export const getHighestPrice = (product: Product): number => {
  return Math.max(...product.variants.map(v => v.price));
};

// Helper functie om totale voorraad te krijgen
export const getTotalStock = (product: Product): number => {
  return product.variants.reduce((sum, v) => sum + v.stock, 0);
};
