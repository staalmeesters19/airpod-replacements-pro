import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Product } from '@/data/mockProducts';

interface ModelNumbers {
  left: string;
  right: string;
  case: string;
  label: string;
}

// Mapping van product model naar modelnummers
const modelNumberMapping: Record<string, ModelNumbers> = {
  // AirPods 2e generatie (standaard case met Lightning)
  'airpods-2': {
    left: 'A2031',
    right: 'A2032',
    case: 'A1602',
    label: 'AirPods 2e generatie',
  },
  // AirPods 3e generatie MagSafe (standaard)
  'airpods-3': {
    left: 'A2564',
    right: 'A2565',
    case: 'A2566',
    label: 'AirPods 3e generatie',
  },
  // AirPods Pro 1e generatie
  'airpods-pro-1': {
    left: 'A2084',
    right: 'A2083',
    case: 'A2190',
    label: 'AirPods Pro 1e generatie',
  },
};

// AirPods 4e generatie varianten
const airpods4Variants: Record<string, ModelNumbers> = {
  'zonder-anc': {
    left: 'A3053',
    right: 'A3050',
    case: 'A3058',
    label: 'AirPods 4 (zonder ANC)',
  },
  'met-anc': {
    left: 'A3056',
    right: 'A3055',
    case: 'A3059',
    label: 'AirPods 4 (met ANC)',
  },
};

// AirPods Pro 2e generatie varianten
const airpodsPro2Variants: Record<string, ModelNumbers> = {
  'lightning': {
    left: 'A2699',
    right: 'A2698',
    case: 'A2700',
    label: 'AirPods Pro 2 (Lightning)',
  },
  'usb-c': {
    left: 'A3048',
    right: 'A3047',
    case: 'A2968',
    label: 'AirPods Pro 2 (USB-C)',
  },
};

export type Pro2Variant = 'lightning' | 'usb-c';
export type Gen4Variant = 'zonder-anc' | 'met-anc';

interface ModelNumberCheckProps {
  product: Product;
  pro2Variant?: Pro2Variant;
  gen4Variant?: Gen4Variant;
}

const ModelNumberCheck = ({ product, pro2Variant, gen4Variant }: ModelNumberCheckProps) => {
  let modelNumbers: ModelNumbers | undefined;

  // Bepaal de juiste modelnummers op basis van product en variant
  if (product.model === 'airpods-pro-2') {
    modelNumbers = airpodsPro2Variants[pro2Variant || 'lightning'];
  } else if (product.model === 'airpods-4') {
    modelNumbers = airpods4Variants[gen4Variant || 'zonder-anc'];
  } else {
    modelNumbers = modelNumberMapping[product.model];
  }

  // Skip voor accessoires
  if (product.type === 'accessory' || !modelNumbers) {
    return null;
  }

  return (
    <Card className="p-5 border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <h3 className="font-semibold text-foreground">Controleer je modelnummer</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        Het komt regelmatig voor dat klanten per ongeluk de verkeerde generatie bestellen. 
        Check daarom eerst je modelnummer: ga naar <strong>Instellingen → Bluetooth</strong> op je iPhone, 
        tik op het <strong>"i"-icoontje</strong> naast je AirPods en scroll naar <strong>Modelnummer</strong> (begint met "A"). 
        Bestel alleen als jouw modelnummer hieronder staat. Weet je niet welke AirPods je hebt? 
        Bekijk onze <Link to="/welke-airpods-heb-ik" className="text-primary hover:underline font-medium">hulppagina</Link>.
      </p>

      <div className="rounded-lg border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-border">
              <td className="py-2.5 px-3 text-muted-foreground">Linker AirPod</td>
              <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.left}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2.5 px-3 text-muted-foreground">Rechter AirPod</td>
              <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.right}</td>
            </tr>
            <tr>
              <td className="py-2.5 px-3 text-muted-foreground">Oplaadcase</td>
              <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.case}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        Twijfel je? Stuur ons een foto van je modelnummer via WhatsApp en we helpen je graag.
      </p>
    </Card>
  );
};

export default ModelNumberCheck;
