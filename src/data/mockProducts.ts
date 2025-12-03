// Product images imports
import airpods2Left from '@/assets/products/airpods-2-left.png';
import airpods2Right from '@/assets/products/airpods-2-right.png';
import airpods2Case from '@/assets/products/airpods-2-case.png';
import airpods3Left from '@/assets/products/airpods-3-left.png';
import airpods3Right from '@/assets/products/airpods-3-right.png';
import airpods3Case from '@/assets/products/airpods-3-case.png';
import airpods4Left from '@/assets/products/airpods-4-left.png';
import airpods4Right from '@/assets/products/airpods-4-right.png';
import airpods4Case from '@/assets/products/airpods-4-case.png';
import airpodsPro1Left from '@/assets/products/airpods-pro-1-left.png';
import airpodsPro1Right from '@/assets/products/airpods-pro-1-right.png';
import airpodsPro1Case from '@/assets/products/airpods-pro-1-case.png';
import airpodsPro2Left from '@/assets/products/airpods-pro-2-left.png';
import airpodsPro2Right from '@/assets/products/airpods-pro-2-right.png';
import airpodsPro2Case from '@/assets/products/airpods-pro-2-case.png';
import siliconeTips from '@/assets/products/silicone-tips.png';

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
  model: 'airpods-1' | 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-4-anc' | 'airpods-pro-1' | 'airpods-pro-2' | 'airpods-pro-2-usbc' | 'airpods-pro-3';
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
  // ========== AirPods 1e generatie ==========
  {
    id: 'ap1-left',
    slug: 'airpods-1e-generatie-links',
    name: 'Losse linker AirPod – 1e generatie',
    model: 'airpods-1',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 58.95, stock: 5 },
      { condition: 'uitstekend', price: 53.95, stock: 8 },
      { condition: 'goed', price: 45.95, stock: 10 },
      { condition: 'gebruikt', price: 38.90, stock: 7 },
      { condition: 'beperkt', price: 33.80, stock: 4 },
    ],
    images: [airpods2Left], // Using airpods 2 image as placeholder
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 1e generatie set.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'Oplaadcase 1e generatie'],
    whatsIncluded: '1x linker AirPod (1e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap1-right',
    slug: 'airpods-1e-generatie-rechts',
    name: 'Losse rechter AirPod – 1e generatie',
    model: 'airpods-1',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 58.95, stock: 4 },
      { condition: 'uitstekend', price: 53.95, stock: 6 },
      { condition: 'goed', price: 45.95, stock: 8 },
      { condition: 'gebruikt', price: 38.90, stock: 5 },
      { condition: 'beperkt', price: 33.80, stock: 3 },
    ],
    images: [airpods2Right], // Using airpods 2 image as placeholder
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 1e generatie set.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'Oplaadcase 1e generatie'],
    whatsIncluded: '1x rechter AirPod (1e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap1-case',
    slug: 'airpods-1e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 1e generatie',
    model: 'airpods-1',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 56.95, stock: 6 },
      { condition: 'uitstekend', price: 46.95, stock: 10 },
      { condition: 'goed', price: 43.95, stock: 8 },
      { condition: 'gebruikt', price: 35.90, stock: 5 },
      { condition: 'beperkt', price: 23.80, stock: 3 },
    ],
    images: [airpods2Case], // Using airpods 2 image as placeholder
    description: 'Originele Apple oplaadcase voor AirPods 1e generatie. Met Lightning aansluiting.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'AirPods 2e generatie'],
    whatsIncluded: '1x oplaadcase (Lightning), geen AirPods inbegrepen.',
  },

  // ========== AirPods 2e generatie ==========
  {
    id: 'ap2-left',
    slug: 'airpods-2e-generatie-links',
    name: 'Losse linker AirPod – 2e generatie',
    model: 'airpods-2',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 58.95, stock: 8 },
      { condition: 'uitstekend', price: 53.95, stock: 12 },
      { condition: 'goed', price: 45.95, stock: 15 },
      { condition: 'gebruikt', price: 38.90, stock: 10 },
      { condition: 'beperkt', price: 33.80, stock: 6 },
    ],
    images: [airpods2Left],
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
      { condition: 'nieuw', price: 58.95, stock: 6 },
      { condition: 'uitstekend', price: 53.95, stock: 8 },
      { condition: 'goed', price: 45.95, stock: 11 },
      { condition: 'gebruikt', price: 38.90, stock: 9 },
      { condition: 'beperkt', price: 33.80, stock: 5 },
    ],
    images: [airpods2Right],
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
      { condition: 'nieuw', price: 61.95, stock: 10 },
      { condition: 'uitstekend', price: 53.95, stock: 15 },
      { condition: 'goed', price: 38.95, stock: 12 },
      { condition: 'gebruikt', price: 33.90, stock: 8 },
      { condition: 'beperkt', price: 28.80, stock: 4 },
    ],
    images: [airpods2Case],
    description: 'Originele Apple oplaadcase voor AirPods 2e generatie. Met Lightning aansluiting en draadloos laden.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'AirPods 1e generatie'],
    whatsIncluded: '1x oplaadcase (Lightning + Wireless), geen AirPods inbegrepen.',
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
      { condition: 'nieuw', price: 61.95, stock: 6 },
      { condition: 'uitstekend', price: 51.95, stock: 10 },
      { condition: 'goed', price: 46.95, stock: 8 },
      { condition: 'gebruikt', price: 43.90, stock: 5 },
      { condition: 'beperkt', price: 38.80, stock: 3 },
    ],
    images: [airpods3Left],
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
      { condition: 'nieuw', price: 61.95, stock: 5 },
      { condition: 'uitstekend', price: 51.95, stock: 7 },
      { condition: 'goed', price: 46.95, stock: 9 },
      { condition: 'gebruikt', price: 43.90, stock: 6 },
      { condition: 'beperkt', price: 38.80, stock: 4 },
    ],
    images: [airpods3Right],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel. Nieuw design met Spatial Audio.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)', 'MagSafe oplaadcase 3e generatie'],
    whatsIncluded: '1x rechter AirPod (3e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap3-case-lightning',
    slug: 'airpods-3e-generatie-oplaadcase-lightning',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    model: 'airpods-3',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 78.95, stock: 6 },
      { condition: 'uitstekend', price: 68.95, stock: 8 },
      { condition: 'goed', price: 63.95, stock: 7 },
      { condition: 'gebruikt', price: 58.90, stock: 5 },
      { condition: 'beperkt', price: 53.80, stock: 3 },
    ],
    images: [airpods3Case],
    description: 'Originele Apple oplaadcase voor AirPods 3e generatie met Lightning aansluiting.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x oplaadcase (Lightning), geen AirPods inbegrepen.',
  },
  {
    id: 'ap3-case-magsafe',
    slug: 'airpods-3e-generatie-oplaadcase-magsafe',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    model: 'airpods-3',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 83.95, stock: 8 },
      { condition: 'uitstekend', price: 78.95, stock: 12 },
      { condition: 'goed', price: 73.95, stock: 10 },
      { condition: 'gebruikt', price: 68.90, stock: 7 },
      { condition: 'beperkt', price: 63.80, stock: 3 },
    ],
    images: [airpods3Case],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods 3e generatie. Ondersteunt draadloos laden.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x MagSafe oplaadcase, geen AirPods inbegrepen.',
  },

  // ========== AirPods 4e generatie (zonder ANC) ==========
  {
    id: 'ap4-left',
    slug: 'airpods-4e-generatie-links',
    name: 'Losse linker AirPod – 4e generatie',
    model: 'airpods-4',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 73.95, stock: 4 },
      { condition: 'uitstekend', price: 68.95, stock: 6 },
      { condition: 'goed', price: 63.95, stock: 5 },
      { condition: 'gebruikt', price: 58.90, stock: 3 },
      { condition: 'beperkt', price: 52.80, stock: 2 },
    ],
    images: [airpods4Left],
    description: 'De nieuwste linker AirPod 4e generatie (zonder ANC) met H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)', 'USB-C oplaadcase 4e generatie'],
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
      { condition: 'nieuw', price: 73.95, stock: 4 },
      { condition: 'uitstekend', price: 68.95, stock: 5 },
      { condition: 'goed', price: 63.95, stock: 4 },
      { condition: 'gebruikt', price: 58.90, stock: 3 },
      { condition: 'beperkt', price: 52.80, stock: 2 },
    ],
    images: [airpods4Right],
    description: 'De nieuwste rechter AirPod 4e generatie (zonder ANC) met H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)', 'USB-C oplaadcase 4e generatie'],
    whatsIncluded: '1x rechter AirPod (4e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap4-case',
    slug: 'airpods-4e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 4',
    model: 'airpods-4',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 88.95, stock: 6 },
      { condition: 'uitstekend', price: 73.95, stock: 8 },
      { condition: 'goed', price: 68.95, stock: 6 },
      { condition: 'gebruikt', price: 63.90, stock: 4 },
      { condition: 'beperkt', price: 58.80, stock: 2 },
    ],
    images: [airpods4Case],
    description: 'Originele Apple USB-C oplaadcase voor AirPods 4e generatie. Met MagSafe ondersteuning.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)'],
    whatsIncluded: '1x USB-C oplaadcase met MagSafe, geen AirPods inbegrepen.',
  },

  // ========== AirPods 4e generatie (met ANC) ==========
  {
    id: 'ap4-anc-left',
    slug: 'airpods-4e-generatie-anc-links',
    name: 'Losse linker AirPod – 4e generatie ANC',
    model: 'airpods-4-anc',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 88.95, stock: 4 },
      { condition: 'uitstekend', price: 78.95, stock: 5 },
      { condition: 'goed', price: 73.95, stock: 4 },
      { condition: 'gebruikt', price: 68.90, stock: 3 },
      { condition: 'beperkt', price: 62.80, stock: 2 },
    ],
    images: [airpods4Left],
    description: 'De nieuwste linker AirPod 4e generatie met Active Noise Cancelling, H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)', 'USB-C oplaadcase 4e generatie ANC'],
    whatsIncluded: '1x linker AirPod (4e generatie ANC), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap4-anc-right',
    slug: 'airpods-4e-generatie-anc-rechts',
    name: 'Losse rechter AirPod – 4e generatie ANC',
    model: 'airpods-4-anc',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 88.95, stock: 4 },
      { condition: 'uitstekend', price: 78.95, stock: 4 },
      { condition: 'goed', price: 73.95, stock: 3 },
      { condition: 'gebruikt', price: 68.90, stock: 3 },
      { condition: 'beperkt', price: 62.80, stock: 2 },
    ],
    images: [airpods4Right],
    description: 'De nieuwste rechter AirPod 4e generatie met Active Noise Cancelling, H2 chip en verbeterde geluidskwaliteit.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)', 'USB-C oplaadcase 4e generatie ANC'],
    whatsIncluded: '1x rechter AirPod (4e generatie ANC), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap4-anc-case',
    slug: 'airpods-4e-generatie-anc-oplaadcase',
    name: 'Losse oplaadcase – AirPods 4 ANC',
    model: 'airpods-4-anc',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 98.95, stock: 5 },
      { condition: 'uitstekend', price: 83.95, stock: 6 },
      { condition: 'goed', price: 78.95, stock: 5 },
      { condition: 'gebruikt', price: 73.90, stock: 3 },
      { condition: 'beperkt', price: 68.80, stock: 2 },
    ],
    images: [airpods4Case],
    description: 'Originele Apple USB-C oplaadcase voor AirPods 4e generatie ANC. Met MagSafe ondersteuning.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)'],
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
      { condition: 'nieuw', price: 73.95, stock: 5 },
      { condition: 'uitstekend', price: 66.95, stock: 8 },
      { condition: 'goed', price: 61.95, stock: 7 },
      { condition: 'gebruikt', price: 58.90, stock: 6 },
      { condition: 'beperkt', price: 52.80, stock: 4 },
    ],
    images: [airpodsPro1Left],
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
      { condition: 'nieuw', price: 73.95, stock: 4 },
      { condition: 'uitstekend', price: 66.95, stock: 7 },
      { condition: 'goed', price: 61.95, stock: 6 },
      { condition: 'gebruikt', price: 58.90, stock: 5 },
      { condition: 'beperkt', price: 52.80, stock: 3 },
    ],
    images: [airpodsPro1Right],
    description: 'Rechter AirPod Pro 1e generatie met Active Noise Cancelling en silicone tips.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)', 'MagSafe oplaadcase Pro 1'],
    whatsIncluded: '1x rechter AirPod Pro (1e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app1-case-lightning',
    slug: 'airpods-pro-1e-generatie-oplaadcase-lightning',
    name: 'Losse oplaadcase – AirPods Pro 1e generatie',
    model: 'airpods-pro-1',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 93.95, stock: 5 },
      { condition: 'uitstekend', price: 68.95, stock: 8 },
      { condition: 'goed', price: 63.95, stock: 6 },
      { condition: 'gebruikt', price: 58.90, stock: 4 },
      { condition: 'beperkt', price: 52.80, stock: 3 },
    ],
    images: [airpodsPro1Case],
    description: 'Originele Apple oplaadcase voor AirPods Pro 1e generatie. Lightning aansluiting.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)'],
    whatsIncluded: '1x oplaadcase met Lightning, geen AirPods inbegrepen.',
  },
  {
    id: 'app1-case-magsafe',
    slug: 'airpods-pro-1e-generatie-oplaadcase-magsafe',
    name: 'Losse oplaadcase – AirPods Pro 1e generatie',
    model: 'airpods-pro-1',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 98.95, stock: 6 },
      { condition: 'uitstekend', price: 71.95, stock: 10 },
      { condition: 'goed', price: 68.95, stock: 8 },
      { condition: 'gebruikt', price: 63.90, stock: 5 },
      { condition: 'beperkt', price: 58.80, stock: 3 },
    ],
    images: [airpodsPro1Case],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 1e generatie. Lightning aansluiting met draadloos laden.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
  },

  // ========== AirPods Pro 2e generatie (Lightning) ==========
  {
    id: 'app2-lightning-left',
    slug: 'airpods-pro-2e-generatie-lightning-links',
    name: 'Losse linker AirPod Pro – 2e generatie (Lightning)',
    model: 'airpods-pro-2',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 108.95, stock: 4 },
      { condition: 'uitstekend', price: 91.95, stock: 6 },
      { condition: 'goed', price: 83.95, stock: 7 },
      { condition: 'gebruikt', price: 75.90, stock: 5 },
      { condition: 'beperkt', price: 71.80, stock: 3 },
    ],
    images: [airpodsPro2Left],
    description: 'Linker AirPod Pro 2e generatie (Lightning versie) met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie Lightning (model A2699/A2698)', 'MagSafe oplaadcase Pro 2 Lightning'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie Lightning), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-lightning-right',
    slug: 'airpods-pro-2e-generatie-lightning-rechts',
    name: 'Losse rechter AirPod Pro – 2e generatie (Lightning)',
    model: 'airpods-pro-2',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 108.95, stock: 3 },
      { condition: 'uitstekend', price: 91.95, stock: 5 },
      { condition: 'goed', price: 83.95, stock: 6 },
      { condition: 'gebruikt', price: 75.90, stock: 4 },
      { condition: 'beperkt', price: 71.80, stock: 2 },
    ],
    images: [airpodsPro2Right],
    description: 'Rechter AirPod Pro 2e generatie (Lightning versie) met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie Lightning (model A2699/A2698)', 'MagSafe oplaadcase Pro 2 Lightning'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie Lightning), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-case-lightning',
    slug: 'airpods-pro-2e-generatie-oplaadcase-lightning',
    name: 'Losse oplaadcase – AirPods Pro 2e generatie',
    model: 'airpods-pro-2',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 5 },
      { condition: 'uitstekend', price: 93.95, stock: 8 },
      { condition: 'goed', price: 83.95, stock: 6 },
      { condition: 'gebruikt', price: 78.90, stock: 4 },
      { condition: 'beperkt', price: 73.80, stock: 2 },
    ],
    images: [airpodsPro2Case],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 2e generatie met Lightning aansluiting.',
    compatibility: ['AirPods Pro 2e generatie (Lightning versie)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
  },

  // ========== AirPods Pro 2e generatie (USB-C) ==========
  {
    id: 'app2-usbc-left',
    slug: 'airpods-pro-2e-generatie-usbc-links',
    name: 'Losse linker AirPod Pro – 2e generatie (USB-C)',
    model: 'airpods-pro-2-usbc',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 108.95, stock: 5 },
      { condition: 'uitstekend', price: 91.95, stock: 7 },
      { condition: 'goed', price: 83.95, stock: 8 },
      { condition: 'gebruikt', price: 75.90, stock: 6 },
      { condition: 'beperkt', price: 71.80, stock: 4 },
    ],
    images: [airpodsPro2Left],
    description: 'Linker AirPod Pro 2e generatie (USB-C versie) met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie USB-C (model A3048/A3047)', 'MagSafe oplaadcase Pro 2 USB-C'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie USB-C), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-usbc-right',
    slug: 'airpods-pro-2e-generatie-usbc-rechts',
    name: 'Losse rechter AirPod Pro – 2e generatie (USB-C)',
    model: 'airpods-pro-2-usbc',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 108.95, stock: 4 },
      { condition: 'uitstekend', price: 91.95, stock: 6 },
      { condition: 'goed', price: 83.95, stock: 7 },
      { condition: 'gebruikt', price: 75.90, stock: 5 },
      { condition: 'beperkt', price: 71.80, stock: 3 },
    ],
    images: [airpodsPro2Right],
    description: 'Rechter AirPod Pro 2e generatie (USB-C versie) met H2 chip, verbeterde ANC en Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie USB-C (model A3048/A3047)', 'MagSafe oplaadcase Pro 2 USB-C'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie USB-C), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app2-case-usbc',
    slug: 'airpods-pro-2e-generatie-oplaadcase-usbc',
    name: 'Losse oplaadcase – AirPods Pro 2e generatie',
    model: 'airpods-pro-2-usbc',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 4 },
      { condition: 'uitstekend', price: 93.95, stock: 6 },
      { condition: 'goed', price: 83.95, stock: 5 },
      { condition: 'gebruikt', price: 78.90, stock: 3 },
      { condition: 'beperkt', price: 73.80, stock: 2 },
    ],
    images: [airpodsPro2Case],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 2e generatie met USB-C aansluiting.',
    compatibility: ['AirPods Pro 2e generatie (USB-C versie)'],
    whatsIncluded: '1x MagSafe oplaadcase met USB-C, geen AirPods inbegrepen.',
  },

  // ========== AirPods Pro 3e generatie ==========
  {
    id: 'app3-left',
    slug: 'airpods-pro-3e-generatie-links',
    name: 'Losse linker AirPod Pro – 3e generatie',
    model: 'airpods-pro-3',
    side: 'left',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 3 },
      { condition: 'uitstekend', price: 107.95, stock: 4 },
      { condition: 'goed', price: 102.95, stock: 5 },
      { condition: 'gebruikt', price: 97.90, stock: 3 },
      { condition: 'beperkt', price: 92.80, stock: 2 },
    ],
    images: [airpodsPro2Left], // Using Pro 2 image as placeholder
    description: 'Linker AirPod Pro 3e generatie met de nieuwste H3 chip en verbeterde ANC.',
    compatibility: ['AirPods Pro 3e generatie', 'MagSafe oplaadcase Pro 3'],
    whatsIncluded: '1x linker AirPod Pro (3e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app3-right',
    slug: 'airpods-pro-3e-generatie-rechts',
    name: 'Losse rechter AirPod Pro – 3e generatie',
    model: 'airpods-pro-3',
    side: 'right',
    type: 'earbud',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 3 },
      { condition: 'uitstekend', price: 107.95, stock: 4 },
      { condition: 'goed', price: 102.95, stock: 4 },
      { condition: 'gebruikt', price: 97.90, stock: 3 },
      { condition: 'beperkt', price: 92.80, stock: 2 },
    ],
    images: [airpodsPro2Right], // Using Pro 2 image as placeholder
    description: 'Rechter AirPod Pro 3e generatie met de nieuwste H3 chip en verbeterde ANC.',
    compatibility: ['AirPods Pro 3e generatie', 'MagSafe oplaadcase Pro 3'],
    whatsIncluded: '1x rechter AirPod Pro (3e generatie), geen oplaadcase of tips inbegrepen.',
  },
  {
    id: 'app3-case',
    slug: 'airpods-pro-3e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods Pro 3',
    model: 'airpods-pro-3',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 3 },
      { condition: 'uitstekend', price: 107.95, stock: 4 },
      { condition: 'goed', price: 102.95, stock: 4 },
      { condition: 'gebruikt', price: 97.90, stock: 3 },
      { condition: 'beperkt', price: 92.80, stock: 2 },
    ],
    images: [airpodsPro2Case], // Using Pro 2 image as placeholder
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 3e generatie met USB-C aansluiting.',
    compatibility: ['AirPods Pro 3e generatie'],
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
    images: [siliconeTips],
    description: 'Originele Apple silicone tips set voor AirPods Pro. Bevat alle 3 maten.',
    compatibility: ['AirPods Pro 1e generatie', 'AirPods Pro 2e generatie', 'AirPods Pro 3e generatie'],
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
    modelNumbers: ['A3053', 'A3050'],
    description: 'De nieuwste generatie AirPods met H2 chip en USB-C.',
  },
  'airpods-4-anc': {
    name: 'AirPods 4e generatie ANC',
    modelNumbers: ['A3056', 'A3055'],
    description: 'De nieuwste generatie AirPods met Active Noise Cancelling, H2 chip en USB-C.',
  },
  'airpods-pro-1': {
    name: 'AirPods Pro 1e generatie',
    modelNumbers: ['A2084', 'A2083'],
    description: 'AirPods Pro met Active Noise Cancelling en silicone tips.',
  },
  'airpods-pro-2': {
    name: 'AirPods Pro 2e generatie (Lightning)',
    modelNumbers: ['A2699', 'A2698'],
    description: 'AirPods Pro 2 met H2 chip, Adaptive Audio en Lightning case.',
  },
  'airpods-pro-2-usbc': {
    name: 'AirPods Pro 2e generatie (USB-C)',
    modelNumbers: ['A3048', 'A3047'],
    description: 'AirPods Pro 2 met H2 chip, Adaptive Audio en USB-C case.',
  },
  'airpods-pro-3': {
    name: 'AirPods Pro 3e generatie',
    modelNumbers: [],
    description: 'De nieuwste AirPods Pro met H3 chip en verbeterde functies.',
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
