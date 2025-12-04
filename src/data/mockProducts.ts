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
  slugEN?: string;
  name: string;
  nameEN?: string;
  model: 'airpods-1' | 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-4-anc' | 'airpods-pro-1' | 'airpods-pro-2' | 'airpods-pro-2-usbc' | 'airpods-pro-3';
  side?: 'left' | 'right';
  type: 'earbud' | 'case' | 'accessory';
  variants: ConditionVariant[];
  images: string[];
  description: string;
  descriptionEN?: string;
  compatibility: string[];
  compatibilityEN?: string[];
  whatsIncluded: string;
  whatsIncludedEN?: string;
}

export const conditionLabels: Record<Condition, string> = {
  'nieuw': 'Nieuw',
  'uitstekend': 'Uitstekend',
  'goed': 'Goed',
  'gebruikt': 'Gebruikt',
  'beperkt': 'Beperkt',
};

export const conditionLabelsEN: Record<Condition, string> = {
  'nieuw': 'New',
  'uitstekend': 'Excellent',
  'goed': 'Good',
  'gebruikt': 'Used',
  'beperkt': 'Limited',
};

export const conditionDescriptions: Record<Condition, string> = {
  'nieuw': 'Gloednieuw en ongebruikt, in originele Apple staat',
  'uitstekend': 'Zo goed als nieuw, geen zichtbare gebruikssporen',
  'goed': 'Lichte gebruikssporen, werkt perfect',
  'gebruikt': 'Duidelijke gebruikssporen, volledig functioneel',
  'beperkt': 'Zichtbare slijtage, werkt naar behoren',
};

export const conditionDescriptionsEN: Record<Condition, string> = {
  'nieuw': 'Brand new and unused, in original Apple condition',
  'uitstekend': 'Like new, no visible signs of use',
  'goed': 'Light signs of use, works perfectly',
  'gebruikt': 'Visible signs of use, fully functional',
  'beperkt': 'Visible wear, works properly',
};

export const mockProducts: Product[] = [
  // ========== AirPods 1e generatie ==========
  {
    id: 'ap1-left',
    slug: 'airpods-1e-generatie-links',
    slugEN: 'airpods-1st-generation-left',
    name: 'Losse linker AirPod – 1e generatie',
    nameEN: 'Single Left AirPod – 1st Generation',
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
    images: [airpods2Left],
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 1e generatie set.',
    descriptionEN: 'Replace your lost left AirPod with this original Apple part. Fits perfectly with your existing 1st generation set.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'Oplaadcase 1e generatie'],
    compatibilityEN: ['AirPods 1st generation (model A1722/A1523)', 'Charging case 1st generation'],
    whatsIncluded: '1x linker AirPod (1e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x left AirPod (1st generation), charging case not included.',
  },
  {
    id: 'ap1-right',
    slug: 'airpods-1e-generatie-rechts',
    slugEN: 'airpods-1st-generation-right',
    name: 'Losse rechter AirPod – 1e generatie',
    nameEN: 'Single Right AirPod – 1st Generation',
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
    images: [airpods2Right],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel. Past perfect bij je bestaande 1e generatie set.',
    descriptionEN: 'Replace your lost right AirPod with this original Apple part. Fits perfectly with your existing 1st generation set.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'Oplaadcase 1e generatie'],
    compatibilityEN: ['AirPods 1st generation (model A1722/A1523)', 'Charging case 1st generation'],
    whatsIncluded: '1x rechter AirPod (1e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x right AirPod (1st generation), charging case not included.',
  },
  {
    id: 'ap1-case',
    slug: 'airpods-1e-generatie-oplaadcase',
    slugEN: 'airpods-1st-generation-charging-case',
    name: 'Losse oplaadcase – AirPods 1e generatie',
    nameEN: 'Single Charging Case – AirPods 1st Generation',
    model: 'airpods-1',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 56.95, stock: 6 },
      { condition: 'uitstekend', price: 46.95, stock: 10 },
      { condition: 'goed', price: 43.95, stock: 8 },
      { condition: 'gebruikt', price: 35.90, stock: 5 },
      { condition: 'beperkt', price: 23.80, stock: 3 },
    ],
    images: [airpods2Case],
    description: 'Originele Apple oplaadcase voor AirPods 1e generatie. Met Lightning aansluiting.',
    descriptionEN: 'Original Apple charging case for AirPods 1st generation. With Lightning connection.',
    compatibility: ['AirPods 1e generatie (model A1722/A1523)', 'AirPods 2e generatie'],
    compatibilityEN: ['AirPods 1st generation (model A1722/A1523)', 'AirPods 2nd generation'],
    whatsIncluded: '1x oplaadcase (Lightning), geen AirPods inbegrepen.',
    whatsIncludedEN: '1x charging case (Lightning), AirPods not included.',
  },

  // ========== AirPods 2e generatie ==========
  {
    id: 'ap2-left',
    slug: 'airpods-2e-generatie-links',
    slugEN: 'airpods-2nd-generation-left',
    name: 'Losse linker AirPod – 2e generatie',
    nameEN: 'Single Left AirPod – 2nd Generation',
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
    descriptionEN: 'Replace your lost left AirPod with this original Apple part. Fits perfectly with your existing 2nd generation set.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'Oplaadcase 2e generatie'],
    compatibilityEN: ['AirPods 2nd generation (model A2032/A2031)', 'Charging case 2nd generation'],
    whatsIncluded: '1x linker AirPod (2e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x left AirPod (2nd generation), charging case not included.',
  },
  {
    id: 'ap2-right',
    slug: 'airpods-2e-generatie-rechts',
    slugEN: 'airpods-2nd-generation-right',
    name: 'Losse rechter AirPod – 2e generatie',
    nameEN: 'Single Right AirPod – 2nd Generation',
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
    descriptionEN: 'Replace your lost right AirPod with this original Apple part. Fits perfectly with your existing 2nd generation set.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'Oplaadcase 2e generatie'],
    compatibilityEN: ['AirPods 2nd generation (model A2032/A2031)', 'Charging case 2nd generation'],
    whatsIncluded: '1x rechter AirPod (2e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x right AirPod (2nd generation), charging case not included.',
  },
  {
    id: 'ap2-case',
    slug: 'airpods-2e-generatie-oplaadcase',
    slugEN: 'airpods-2nd-generation-charging-case',
    name: 'Losse oplaadcase – AirPods 2e generatie',
    nameEN: 'Single Charging Case – AirPods 2nd Generation',
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
    descriptionEN: 'Original Apple charging case for AirPods 2nd generation. With Lightning connection and wireless charging.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)', 'AirPods 1e generatie'],
    compatibilityEN: ['AirPods 2nd generation (model A2032/A2031)', 'AirPods 1st generation'],
    whatsIncluded: '1x oplaadcase (Lightning + Wireless), geen AirPods inbegrepen.',
    whatsIncludedEN: '1x charging case (Lightning + Wireless), AirPods not included.',
  },

  // ========== AirPods 3e generatie ==========
  {
    id: 'ap3-left',
    slug: 'airpods-3e-generatie-links',
    slugEN: 'airpods-3rd-generation-left',
    name: 'Losse linker AirPod – 3e generatie',
    nameEN: 'Single Left AirPod – 3rd Generation',
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
    descriptionEN: 'Replace your lost left AirPod with this original Apple part. New design with Spatial Audio.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)', 'MagSafe oplaadcase 3e generatie'],
    compatibilityEN: ['AirPods 3rd generation (model A2565/A2564)', 'MagSafe charging case 3rd generation'],
    whatsIncluded: '1x linker AirPod (3e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x left AirPod (3rd generation), charging case not included.',
  },
  {
    id: 'ap3-right',
    slug: 'airpods-3e-generatie-rechts',
    slugEN: 'airpods-3rd-generation-right',
    name: 'Losse rechter AirPod – 3e generatie',
    nameEN: 'Single Right AirPod – 3rd Generation',
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
    descriptionEN: 'Replace your lost right AirPod with this original Apple part. New design with Spatial Audio.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)', 'MagSafe oplaadcase 3e generatie'],
    compatibilityEN: ['AirPods 3rd generation (model A2565/A2564)', 'MagSafe charging case 3rd generation'],
    whatsIncluded: '1x rechter AirPod (3e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x right AirPod (3rd generation), charging case not included.',
  },
  {
    id: 'ap3-case-lightning',
    slug: 'airpods-3e-generatie-oplaadcase-lightning',
    slugEN: 'airpods-3rd-generation-charging-case-lightning',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    nameEN: 'Single Charging Case – AirPods 3rd Generation',
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
    descriptionEN: 'Original Apple charging case for AirPods 3rd generation with Lightning connection.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    compatibilityEN: ['AirPods 3rd generation (model A2565/A2564)'],
    whatsIncluded: '1x oplaadcase (Lightning), geen AirPods inbegrepen.',
    whatsIncludedEN: '1x charging case (Lightning), AirPods not included.',
  },
  {
    id: 'ap3-case-magsafe',
    slug: 'airpods-3e-generatie-oplaadcase-magsafe',
    slugEN: 'airpods-3rd-generation-charging-case-magsafe',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    nameEN: 'Single MagSafe Charging Case – AirPods 3rd Generation',
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
    descriptionEN: 'Original Apple MagSafe charging case for AirPods 3rd generation. Supports wireless charging.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    compatibilityEN: ['AirPods 3rd generation (model A2565/A2564)'],
    whatsIncluded: '1x MagSafe oplaadcase, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x MagSafe charging case, AirPods not included.',
  },

  // ========== AirPods 4e generatie (zonder ANC) ==========
  {
    id: 'ap4-left',
    slug: 'airpods-4e-generatie-links',
    slugEN: 'airpods-4th-generation-left',
    name: 'Losse linker AirPod – 4e generatie',
    nameEN: 'Single Left AirPod – 4th Generation',
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
    descriptionEN: 'The latest left AirPod 4th generation (without ANC) with H2 chip and improved sound quality.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)', 'USB-C oplaadcase 4e generatie'],
    compatibilityEN: ['AirPods 4th generation without ANC (model A3053/A3050)', 'USB-C charging case 4th generation'],
    whatsIncluded: '1x linker AirPod (4e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x left AirPod (4th generation), charging case not included.',
  },
  {
    id: 'ap4-right',
    slug: 'airpods-4e-generatie-rechts',
    slugEN: 'airpods-4th-generation-right',
    name: 'Losse rechter AirPod – 4e generatie',
    nameEN: 'Single Right AirPod – 4th Generation',
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
    descriptionEN: 'The latest right AirPod 4th generation (without ANC) with H2 chip and improved sound quality.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)', 'USB-C oplaadcase 4e generatie'],
    compatibilityEN: ['AirPods 4th generation without ANC (model A3053/A3050)', 'USB-C charging case 4th generation'],
    whatsIncluded: '1x rechter AirPod (4e generatie), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x right AirPod (4th generation), charging case not included.',
  },
  {
    id: 'ap4-case',
    slug: 'airpods-4e-generatie-oplaadcase',
    slugEN: 'airpods-4th-generation-charging-case',
    name: 'Losse oplaadcase – AirPods 4',
    nameEN: 'Single Charging Case – AirPods 4',
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
    descriptionEN: 'Original Apple USB-C charging case for AirPods 4th generation. With MagSafe support.',
    compatibility: ['AirPods 4e generatie zonder ANC (model A3053/A3050)'],
    compatibilityEN: ['AirPods 4th generation without ANC (model A3053/A3050)'],
    whatsIncluded: '1x USB-C oplaadcase met MagSafe, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x USB-C charging case with MagSafe, AirPods not included.',
  },

  // ========== AirPods 4e generatie (met ANC) ==========
  {
    id: 'ap4-anc-left',
    slug: 'airpods-4e-generatie-anc-links',
    slugEN: 'airpods-4th-generation-anc-left',
    name: 'Losse linker AirPod – 4e generatie ANC',
    nameEN: 'Single Left AirPod – 4th Generation ANC',
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
    descriptionEN: 'The latest left AirPod 4th generation with Active Noise Cancelling, H2 chip and improved sound quality.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)', 'USB-C oplaadcase 4e generatie ANC'],
    compatibilityEN: ['AirPods 4th generation with ANC (model A3056/A3055)', 'USB-C charging case 4th generation ANC'],
    whatsIncluded: '1x linker AirPod (4e generatie ANC), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x left AirPod (4th generation ANC), charging case not included.',
  },
  {
    id: 'ap4-anc-right',
    slug: 'airpods-4e-generatie-anc-rechts',
    slugEN: 'airpods-4th-generation-anc-right',
    name: 'Losse rechter AirPod – 4e generatie ANC',
    nameEN: 'Single Right AirPod – 4th Generation ANC',
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
    descriptionEN: 'The latest right AirPod 4th generation with Active Noise Cancelling, H2 chip and improved sound quality.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)', 'USB-C oplaadcase 4e generatie ANC'],
    compatibilityEN: ['AirPods 4th generation with ANC (model A3056/A3055)', 'USB-C charging case 4th generation ANC'],
    whatsIncluded: '1x rechter AirPod (4e generatie ANC), geen oplaadcase inbegrepen.',
    whatsIncludedEN: '1x right AirPod (4th generation ANC), charging case not included.',
  },
  {
    id: 'ap4-anc-case',
    slug: 'airpods-4e-generatie-anc-oplaadcase',
    slugEN: 'airpods-4th-generation-anc-charging-case',
    name: 'Losse oplaadcase – AirPods 4 ANC',
    nameEN: 'Single Charging Case – AirPods 4 ANC',
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
    descriptionEN: 'Original Apple USB-C charging case for AirPods 4th generation ANC. With MagSafe support.',
    compatibility: ['AirPods 4e generatie met ANC (model A3056/A3055)'],
    compatibilityEN: ['AirPods 4th generation with ANC (model A3056/A3055)'],
    whatsIncluded: '1x USB-C oplaadcase met MagSafe, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x USB-C charging case with MagSafe, AirPods not included.',
  },

  // ========== AirPods Pro 1e generatie ==========
  {
    id: 'app1-left',
    slug: 'airpods-pro-1e-generatie-links',
    slugEN: 'airpods-pro-1st-generation-left',
    name: 'Losse linker AirPod Pro – 1e generatie',
    nameEN: 'Single Left AirPod Pro – 1st Generation',
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
    descriptionEN: 'Left AirPod Pro 1st generation with Active Noise Cancelling and silicone tips.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)', 'MagSafe oplaadcase Pro 1'],
    compatibilityEN: ['AirPods Pro 1st generation (model A2084/A2083)', 'MagSafe charging case Pro 1'],
    whatsIncluded: '1x linker AirPod Pro (1e generatie), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x left AirPod Pro (1st generation), charging case or tips not included.',
  },
  {
    id: 'app1-right',
    slug: 'airpods-pro-1e-generatie-rechts',
    slugEN: 'airpods-pro-1st-generation-right',
    name: 'Losse rechter AirPod Pro – 1e generatie',
    nameEN: 'Single Right AirPod Pro – 1st Generation',
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
    descriptionEN: 'Right AirPod Pro 1st generation with Active Noise Cancelling and silicone tips.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)', 'MagSafe oplaadcase Pro 1'],
    compatibilityEN: ['AirPods Pro 1st generation (model A2084/A2083)', 'MagSafe charging case Pro 1'],
    whatsIncluded: '1x rechter AirPod Pro (1e generatie), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x right AirPod Pro (1st generation), charging case or tips not included.',
  },
  {
    id: 'app1-case-lightning',
    slug: 'airpods-pro-1e-generatie-oplaadcase-lightning',
    slugEN: 'airpods-pro-1st-generation-charging-case-lightning',
    name: 'Losse oplaadcase – AirPods Pro 1e generatie',
    nameEN: 'Single Charging Case – AirPods Pro 1st Generation',
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
    descriptionEN: 'Original Apple charging case for AirPods Pro 1st generation. Lightning connection.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)'],
    compatibilityEN: ['AirPods Pro 1st generation (model A2084/A2083)'],
    whatsIncluded: '1x oplaadcase met Lightning, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x charging case with Lightning, AirPods not included.',
  },
  {
    id: 'app1-case-magsafe',
    slug: 'airpods-pro-1e-generatie-oplaadcase-magsafe',
    slugEN: 'airpods-pro-1st-generation-charging-case-magsafe',
    name: 'Losse oplaadcase – AirPods Pro 1e generatie',
    nameEN: 'Single MagSafe Charging Case – AirPods Pro 1st Generation',
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
    descriptionEN: 'Original Apple MagSafe charging case for AirPods Pro 1st generation. Lightning connection with wireless charging.',
    compatibility: ['AirPods Pro 1e generatie (model A2084/A2083)'],
    compatibilityEN: ['AirPods Pro 1st generation (model A2084/A2083)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x MagSafe charging case with Lightning, AirPods not included.',
  },

  // ========== AirPods Pro 2e generatie (Lightning) ==========
  {
    id: 'app2-lightning-left',
    slug: 'airpods-pro-2e-generatie-lightning-links',
    slugEN: 'airpods-pro-2nd-generation-lightning-left',
    name: 'Losse linker AirPod Pro – 2e generatie (Lightning)',
    nameEN: 'Single Left AirPod Pro – 2nd Generation (Lightning)',
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
    descriptionEN: 'Left AirPod Pro 2nd generation (Lightning version) with H2 chip, improved ANC and Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie Lightning (model A2699/A2698)', 'MagSafe oplaadcase Pro 2 Lightning'],
    compatibilityEN: ['AirPods Pro 2nd generation Lightning (model A2699/A2698)', 'MagSafe charging case Pro 2 Lightning'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie Lightning), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x left AirPod Pro (2nd generation Lightning), charging case or tips not included.',
  },
  {
    id: 'app2-lightning-right',
    slug: 'airpods-pro-2e-generatie-lightning-rechts',
    slugEN: 'airpods-pro-2nd-generation-lightning-right',
    name: 'Losse rechter AirPod Pro – 2e generatie (Lightning)',
    nameEN: 'Single Right AirPod Pro – 2nd Generation (Lightning)',
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
    descriptionEN: 'Right AirPod Pro 2nd generation (Lightning version) with H2 chip, improved ANC and Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie Lightning (model A2699/A2698)', 'MagSafe oplaadcase Pro 2 Lightning'],
    compatibilityEN: ['AirPods Pro 2nd generation Lightning (model A2699/A2698)', 'MagSafe charging case Pro 2 Lightning'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie Lightning), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x right AirPod Pro (2nd generation Lightning), charging case or tips not included.',
  },
  {
    id: 'app2-case-lightning',
    slug: 'airpods-pro-2e-generatie-oplaadcase-lightning',
    slugEN: 'airpods-pro-2nd-generation-charging-case-lightning',
    name: 'Losse oplaadcase – AirPods Pro 2e generatie',
    nameEN: 'Single Charging Case – AirPods Pro 2nd Generation (Lightning)',
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
    descriptionEN: 'Original Apple MagSafe charging case for AirPods Pro 2nd generation with Lightning connection.',
    compatibility: ['AirPods Pro 2e generatie (Lightning versie)'],
    compatibilityEN: ['AirPods Pro 2nd generation (Lightning version)'],
    whatsIncluded: '1x MagSafe oplaadcase met Lightning, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x MagSafe charging case with Lightning, AirPods not included.',
  },

  // ========== AirPods Pro 2e generatie (USB-C) ==========
  {
    id: 'app2-usbc-left',
    slug: 'airpods-pro-2e-generatie-usbc-links',
    slugEN: 'airpods-pro-2nd-generation-usbc-left',
    name: 'Losse linker AirPod Pro – 2e generatie (USB-C)',
    nameEN: 'Single Left AirPod Pro – 2nd Generation (USB-C)',
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
    descriptionEN: 'Left AirPod Pro 2nd generation (USB-C version) with H2 chip, improved ANC and Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie USB-C (model A3048/A3047)', 'MagSafe oplaadcase Pro 2 USB-C'],
    compatibilityEN: ['AirPods Pro 2nd generation USB-C (model A3048/A3047)', 'MagSafe charging case Pro 2 USB-C'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie USB-C), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x left AirPod Pro (2nd generation USB-C), charging case or tips not included.',
  },
  {
    id: 'app2-usbc-right',
    slug: 'airpods-pro-2e-generatie-usbc-rechts',
    slugEN: 'airpods-pro-2nd-generation-usbc-right',
    name: 'Losse rechter AirPod Pro – 2e generatie (USB-C)',
    nameEN: 'Single Right AirPod Pro – 2nd Generation (USB-C)',
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
    descriptionEN: 'Right AirPod Pro 2nd generation (USB-C version) with H2 chip, improved ANC and Adaptive Audio.',
    compatibility: ['AirPods Pro 2e generatie USB-C (model A3048/A3047)', 'MagSafe oplaadcase Pro 2 USB-C'],
    compatibilityEN: ['AirPods Pro 2nd generation USB-C (model A3048/A3047)', 'MagSafe charging case Pro 2 USB-C'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie USB-C), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x right AirPod Pro (2nd generation USB-C), charging case or tips not included.',
  },
  {
    id: 'app2-case-usbc',
    slug: 'airpods-pro-2e-generatie-oplaadcase-usbc',
    slugEN: 'airpods-pro-2nd-generation-charging-case-usbc',
    name: 'Losse oplaadcase – AirPods Pro 2e generatie',
    nameEN: 'Single Charging Case – AirPods Pro 2nd Generation (USB-C)',
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
    descriptionEN: 'Original Apple MagSafe charging case for AirPods Pro 2nd generation with USB-C connection.',
    compatibility: ['AirPods Pro 2e generatie (USB-C versie)'],
    compatibilityEN: ['AirPods Pro 2nd generation (USB-C version)'],
    whatsIncluded: '1x MagSafe oplaadcase met USB-C, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x MagSafe charging case with USB-C, AirPods not included.',
  },

  // ========== AirPods Pro 3e generatie ==========
  {
    id: 'app3-left',
    slug: 'airpods-pro-3e-generatie-links',
    slugEN: 'airpods-pro-3rd-generation-left',
    name: 'Losse linker AirPod Pro – 3e generatie',
    nameEN: 'Single Left AirPod Pro – 3rd Generation',
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
    images: [airpodsPro2Left],
    description: 'Linker AirPod Pro 3e generatie met de nieuwste H3 chip en verbeterde ANC.',
    descriptionEN: 'Left AirPod Pro 3rd generation with the latest H3 chip and improved ANC.',
    compatibility: ['AirPods Pro 3e generatie', 'MagSafe oplaadcase Pro 3'],
    compatibilityEN: ['AirPods Pro 3rd generation', 'MagSafe charging case Pro 3'],
    whatsIncluded: '1x linker AirPod Pro (3e generatie), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x left AirPod Pro (3rd generation), charging case or tips not included.',
  },
  {
    id: 'app3-right',
    slug: 'airpods-pro-3e-generatie-rechts',
    slugEN: 'airpods-pro-3rd-generation-right',
    name: 'Losse rechter AirPod Pro – 3e generatie',
    nameEN: 'Single Right AirPod Pro – 3rd Generation',
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
    images: [airpodsPro2Right],
    description: 'Rechter AirPod Pro 3e generatie met de nieuwste H3 chip en verbeterde ANC.',
    descriptionEN: 'Right AirPod Pro 3rd generation with the latest H3 chip and improved ANC.',
    compatibility: ['AirPods Pro 3e generatie', 'MagSafe oplaadcase Pro 3'],
    compatibilityEN: ['AirPods Pro 3rd generation', 'MagSafe charging case Pro 3'],
    whatsIncluded: '1x rechter AirPod Pro (3e generatie), geen oplaadcase of tips inbegrepen.',
    whatsIncludedEN: '1x right AirPod Pro (3rd generation), charging case or tips not included.',
  },
  {
    id: 'app3-case',
    slug: 'airpods-pro-3e-generatie-oplaadcase',
    slugEN: 'airpods-pro-3rd-generation-charging-case',
    name: 'Losse oplaadcase – AirPods Pro 3',
    nameEN: 'Single Charging Case – AirPods Pro 3',
    model: 'airpods-pro-3',
    type: 'case',
    variants: [
      { condition: 'nieuw', price: 113.95, stock: 3 },
      { condition: 'uitstekend', price: 107.95, stock: 4 },
      { condition: 'goed', price: 102.95, stock: 4 },
      { condition: 'gebruikt', price: 97.90, stock: 3 },
      { condition: 'beperkt', price: 92.80, stock: 2 },
    ],
    images: [airpodsPro2Case],
    description: 'Originele Apple MagSafe oplaadcase voor AirPods Pro 3e generatie met USB-C aansluiting.',
    descriptionEN: 'Original Apple MagSafe charging case for AirPods Pro 3rd generation with USB-C connection.',
    compatibility: ['AirPods Pro 3e generatie'],
    compatibilityEN: ['AirPods Pro 3rd generation'],
    whatsIncluded: '1x MagSafe oplaadcase met USB-C, geen AirPods inbegrepen.',
    whatsIncludedEN: '1x MagSafe charging case with USB-C, AirPods not included.',
  },

  // ========== Accessoires ==========
  {
    id: 'tips-pro',
    slug: 'silicone-tips-airpods-pro',
    slugEN: 'silicone-tips-airpods-pro',
    name: 'Silicone tips voor AirPods Pro',
    nameEN: 'Silicone Tips for AirPods Pro',
    model: 'airpods-pro-2',
    type: 'accessory',
    variants: [
      { condition: 'nieuw', price: 12.95, stock: 30 },
    ],
    images: [siliconeTips],
    description: 'Originele Apple silicone tips set voor AirPods Pro. Bevat alle 3 maten.',
    descriptionEN: 'Original Apple silicone tips set for AirPods Pro. Includes all 3 sizes.',
    compatibility: ['AirPods Pro 1e generatie', 'AirPods Pro 2e generatie', 'AirPods Pro 3e generatie'],
    compatibilityEN: ['AirPods Pro 1st generation', 'AirPods Pro 2nd generation', 'AirPods Pro 3rd generation'],
    whatsIncluded: '3 paar silicone tips (klein, medium, groot).',
    whatsIncludedEN: '3 pairs of silicone tips (small, medium, large).',
  },
];

export const modelInfo: Record<string, { name: string; nameEN: string; modelNumbers: string[]; description: string; descriptionEN: string }> = {
  'airpods-1': {
    name: 'AirPods 1e generatie',
    nameEN: 'AirPods 1st Generation',
    modelNumbers: ['A1523', 'A1722'],
    description: 'De eerste generatie AirPods, uitgebracht in 2016.',
    descriptionEN: 'The first generation AirPods, released in 2016.',
  },
  'airpods-2': {
    name: 'AirPods 2e generatie',
    nameEN: 'AirPods 2nd Generation',
    modelNumbers: ['A2032', 'A2031'],
    description: 'De tweede generatie AirPods met H1 chip en Hey Siri ondersteuning.',
    descriptionEN: 'The second generation AirPods with H1 chip and Hey Siri support.',
  },
  'airpods-3': {
    name: 'AirPods 3e generatie',
    nameEN: 'AirPods 3rd Generation',
    modelNumbers: ['A2565', 'A2564'],
    description: 'AirPods met vernieuwd design, Spatial Audio en MagSafe oplaadcase.',
    descriptionEN: 'AirPods with redesigned look, Spatial Audio and MagSafe charging case.',
  },
  'airpods-4': {
    name: 'AirPods 4e generatie',
    nameEN: 'AirPods 4th Generation',
    modelNumbers: ['A3053', 'A3050'],
    description: 'De nieuwste generatie AirPods met H2 chip en USB-C.',
    descriptionEN: 'The latest generation AirPods with H2 chip and USB-C.',
  },
  'airpods-4-anc': {
    name: 'AirPods 4e generatie ANC',
    nameEN: 'AirPods 4th Generation ANC',
    modelNumbers: ['A3056', 'A3055'],
    description: 'De nieuwste generatie AirPods met Active Noise Cancelling, H2 chip en USB-C.',
    descriptionEN: 'The latest generation AirPods with Active Noise Cancelling, H2 chip and USB-C.',
  },
  'airpods-pro-1': {
    name: 'AirPods Pro 1e generatie',
    nameEN: 'AirPods Pro 1st Generation',
    modelNumbers: ['A2084', 'A2083'],
    description: 'AirPods Pro met Active Noise Cancelling en silicone tips.',
    descriptionEN: 'AirPods Pro with Active Noise Cancelling and silicone tips.',
  },
  'airpods-pro-2': {
    name: 'AirPods Pro 2e generatie (Lightning)',
    nameEN: 'AirPods Pro 2nd Generation (Lightning)',
    modelNumbers: ['A2699', 'A2698'],
    description: 'AirPods Pro 2 met H2 chip, Adaptive Audio en Lightning case.',
    descriptionEN: 'AirPods Pro 2 with H2 chip, Adaptive Audio and Lightning case.',
  },
  'airpods-pro-2-usbc': {
    name: 'AirPods Pro 2e generatie (USB-C)',
    nameEN: 'AirPods Pro 2nd Generation (USB-C)',
    modelNumbers: ['A3048', 'A3047'],
    description: 'AirPods Pro 2 met H2 chip, Adaptive Audio en USB-C case.',
    descriptionEN: 'AirPods Pro 2 with H2 chip, Adaptive Audio and USB-C case.',
  },
  'airpods-pro-3': {
    name: 'AirPods Pro 3e generatie',
    nameEN: 'AirPods Pro 3rd Generation',
    modelNumbers: [],
    description: 'De nieuwste AirPods Pro met H3 chip en verbeterde functies.',
    descriptionEN: 'The latest AirPods Pro with H3 chip and improved features.',
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

// Helper functie om gelokaliseerde productnaam te krijgen
export const getLocalizedProductName = (product: Product, isEnglish: boolean): string => {
  return isEnglish && product.nameEN ? product.nameEN : product.name;
};

// Helper functie om gelokaliseerde beschrijving te krijgen
export const getLocalizedDescription = (product: Product, isEnglish: boolean): string => {
  return isEnglish && product.descriptionEN ? product.descriptionEN : product.description;
};

// Helper functie om gelokaliseerde compatibiliteit te krijgen
export const getLocalizedCompatibility = (product: Product, isEnglish: boolean): string[] => {
  return isEnglish && product.compatibilityEN ? product.compatibilityEN : product.compatibility;
};

// Helper functie om gelokaliseerde whatsIncluded te krijgen
export const getLocalizedWhatsIncluded = (product: Product, isEnglish: boolean): string => {
  return isEnglish && product.whatsIncludedEN ? product.whatsIncludedEN : product.whatsIncluded;
};

// Helper functie om gelokaliseerde condition label te krijgen
export const getLocalizedConditionLabel = (condition: Condition, isEnglish: boolean): string => {
  return isEnglish ? conditionLabelsEN[condition] : conditionLabels[condition];
};

// Helper functie om gelokaliseerde condition description te krijgen
export const getLocalizedConditionDescription = (condition: Condition, isEnglish: boolean): string => {
  return isEnglish ? conditionDescriptionsEN[condition] : conditionDescriptions[condition];
};
