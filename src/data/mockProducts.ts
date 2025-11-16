export interface Product {
  id: string;
  slug: string;
  name: string;
  model: 'airpods-2' | 'airpods-3' | 'airpods-4' | 'airpods-pro-1' | 'airpods-pro-2';
  side?: 'left' | 'right';
  type: 'earbud' | 'case' | 'accessory';
  price: number;
  oldPrice?: number;
  condition: 'new' | 'refurbished';
  stock: number;
  images: string[];
  description: string;
  compatibility: string[];
  whatsIncluded: string;
}

export const mockProducts: Product[] = [
  // AirPods 2e generatie
  {
    id: 'ap2-left-new',
    slug: 'airpods-2e-generatie-enkel-links',
    name: 'Losse linker AirPod – 2e generatie',
    model: 'airpods-2',
    side: 'left',
    type: 'earbud',
    price: 49.95,
    oldPrice: 59.95,
    condition: 'new',
    stock: 12,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)'],
    whatsIncluded: '1x linker AirPod (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap2-right-new',
    slug: 'airpods-2e-generatie-enkel-rechts',
    name: 'Losse rechter AirPod – 2e generatie',
    model: 'airpods-2',
    side: 'right',
    type: 'earbud',
    price: 49.95,
    condition: 'new',
    stock: 8,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)'],
    whatsIncluded: '1x rechter AirPod (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap2-case-new',
    slug: 'airpods-2e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 2e generatie',
    model: 'airpods-2',
    type: 'case',
    price: 39.95,
    condition: 'new',
    stock: 15,
    images: ['/placeholder.svg'],
    description: 'Originele Apple oplaadcase voor AirPods 2e generatie.',
    compatibility: ['AirPods 2e generatie (model A2032/A2031)'],
    whatsIncluded: '1x oplaadcase, geen AirPods inbegrepen.',
  },
  // AirPods 3e generatie
  {
    id: 'ap3-left-new',
    slug: 'airpods-3e-generatie-enkel-links',
    name: 'Losse linker AirPod – 3e generatie',
    model: 'airpods-3',
    side: 'left',
    type: 'earbud',
    price: 69.95,
    condition: 'new',
    stock: 10,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren linker AirPod met dit originele Apple onderdeel.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x linker AirPod (3e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap3-right-new',
    slug: 'airpods-3e-generatie-enkel-rechts',
    name: 'Losse rechter AirPod – 3e generatie',
    model: 'airpods-3',
    side: 'right',
    type: 'earbud',
    price: 69.95,
    condition: 'new',
    stock: 7,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren rechter AirPod met dit originele Apple onderdeel.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x rechter AirPod (3e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'ap3-case-new',
    slug: 'airpods-3e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods 3e generatie',
    model: 'airpods-3',
    type: 'case',
    price: 49.95,
    condition: 'new',
    stock: 12,
    images: ['/placeholder.svg'],
    description: 'Originele Apple oplaadcase voor AirPods 3e generatie.',
    compatibility: ['AirPods 3e generatie (model A2565/A2564)'],
    whatsIncluded: '1x oplaadcase, geen AirPods inbegrepen.',
  },
  // AirPods Pro 2e generatie
  {
    id: 'app2-left-new',
    slug: 'airpods-pro-2e-generatie-enkel-links',
    name: 'Losse linker AirPod Pro – 2e generatie',
    model: 'airpods-pro-2',
    side: 'left',
    type: 'earbud',
    price: 89.95,
    condition: 'new',
    stock: 6,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren linker AirPod Pro met dit originele Apple onderdeel.',
    compatibility: ['AirPods Pro 2e generatie (model A2931/A2698)'],
    whatsIncluded: '1x linker AirPod Pro (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'app2-right-new',
    slug: 'airpods-pro-2e-generatie-enkel-rechts',
    name: 'Losse rechter AirPod Pro – 2e generatie',
    model: 'airpods-pro-2',
    side: 'right',
    type: 'earbud',
    price: 89.95,
    condition: 'new',
    stock: 5,
    images: ['/placeholder.svg'],
    description: 'Vervang je verloren rechter AirPod Pro met dit originele Apple onderdeel.',
    compatibility: ['AirPods Pro 2e generatie (model A2931/A2698)'],
    whatsIncluded: '1x rechter AirPod Pro (2e generatie), geen oplaadcase inbegrepen.',
  },
  {
    id: 'app2-case-new',
    slug: 'airpods-pro-2e-generatie-oplaadcase',
    name: 'Losse oplaadcase – AirPods Pro 2e generatie',
    model: 'airpods-pro-2',
    type: 'case',
    price: 79.95,
    condition: 'new',
    stock: 8,
    images: ['/placeholder.svg'],
    description: 'Originele Apple oplaadcase voor AirPods Pro 2e generatie met MagSafe.',
    compatibility: ['AirPods Pro 2e generatie (model A2931/A2698)'],
    whatsIncluded: '1x oplaadcase met MagSafe, geen AirPods inbegrepen.',
  },
  // Accessoires
  {
    id: 'cleaning-pen',
    slug: 'airpods-schoonmaak-pen',
    name: 'AirPods schoonmaak pen',
    model: 'airpods-2',
    type: 'accessory',
    price: 9.95,
    condition: 'new',
    stock: 25,
    images: ['/placeholder.svg'],
    description: 'Houd je AirPods schoon met deze handige schoonmaak pen.',
    compatibility: ['Alle AirPods modellen'],
    whatsIncluded: '1x schoonmaak pen met borstel en tip.',
  },
  {
    id: 'silicone-tips',
    slug: 'airpods-pro-silicone-tips',
    name: 'Silicone tips voor AirPods Pro',
    model: 'airpods-pro-2',
    type: 'accessory',
    price: 12.95,
    condition: 'new',
    stock: 30,
    images: ['/placeholder.svg'],
    description: 'Set van 3 paar silicone tips (S, M, L) voor AirPods Pro.',
    compatibility: ['AirPods Pro 1e en 2e generatie'],
    whatsIncluded: '3 paar silicone tips (klein, medium, groot).',
  },
];

export const modelInfo = {
  'airpods-2': {
    name: 'AirPods 2e generatie',
    modelNumbers: ['A2032', 'A2031'],
    description: 'De tweede generatie AirPods met verbeterde batterijduur en optionele draadloze oplaadcase.',
  },
  'airpods-3': {
    name: 'AirPods 3e generatie',
    modelNumbers: ['A2565', 'A2564'],
    description: 'AirPods met vernieuwd design, spatial audio en MagSafe oplaadcase.',
  },
  'airpods-4': {
    name: 'AirPods 4e generatie',
    modelNumbers: ['A3048', 'A3047'],
    description: 'De nieuwste generatie AirPods met verbeterde geluidskwaliteit.',
  },
  'airpods-pro-1': {
    name: 'AirPods Pro 1e generatie',
    modelNumbers: ['A2084', 'A2083'],
    description: 'AirPods Pro met actieve noise cancelling en aanpasbare silicone tips.',
  },
  'airpods-pro-2': {
    name: 'AirPods Pro 2e generatie',
    modelNumbers: ['A2931', 'A2698'],
    description: 'De nieuwste AirPods Pro met verbeterde noise cancelling, spatial audio en MagSafe.',
  },
};
