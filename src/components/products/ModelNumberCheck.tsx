import { AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  'airpods-2': {
    left: 'A2031',
    right: 'A2032',
    case: 'A1602',
    label: 'AirPods 2e generatie',
  },
  'airpods-3': {
    left: 'A2564',
    right: 'A2565',
    case: 'A2566',
    label: 'AirPods 3e generatie',
  },
  'airpods-pro-1': {
    left: 'A2084',
    right: 'A2083',
    case: 'A2190',
    label: 'AirPods Pro 1e generatie',
  },
};

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
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  let modelNumbers: ModelNumbers | undefined;

  if (product.model === 'airpods-pro-2') {
    modelNumbers = airpodsPro2Variants[pro2Variant || 'lightning'];
  } else if (product.model === 'airpods-4') {
    modelNumbers = airpods4Variants[gen4Variant || 'zonder-anc'];
  } else {
    modelNumbers = modelNumberMapping[product.model];
  }

  if (product.type === 'accessory' || !modelNumbers) {
    return null;
  }

  const isPro2 = product.model === 'airpods-pro-2';
  const isGen4 = product.model === 'airpods-4';

  // Translations
  const t = {
    title: isEnglish ? 'Check your model number' : 'Controleer je modelnummer',
    leftAirPod: isEnglish ? 'Left AirPod' : 'Linker AirPod',
    rightAirPod: isEnglish ? 'Right AirPod' : 'Rechter AirPod',
    chargingCase: isEnglish ? 'Charging case' : 'Oplaadcase',
    part: isEnglish ? 'Part' : 'Onderdeel',
    version: isEnglish ? 'Version / connection' : 'Versie / aansluiting',
    variant: isEnglish ? 'Variant' : 'Variant',
    withoutANC: isEnglish ? 'Without ANC' : 'Zonder ANC',
    withANC: isEnglish ? 'With ANC' : 'Met ANC',
    whichAirPodsLink: isEnglish ? '/en/which-airpods-do-i-have' : '/welke-airpods-heb-ik',
    whichAirPodsText: isEnglish ? 'Which AirPods do I have?' : 'Welke AirPods heb ik?',
    helpText: isEnglish 
      ? "Not sure? Send us a photo of your model number via WhatsApp and we'll help you."
      : 'Twijfel je? Stuur ons een foto van je modelnummer via WhatsApp en we helpen je graag.',
    pro2Warning: isEnglish
      ? '<strong>Note:</strong> The AirPods Pro 2 Lightning and USB-C versions do <strong>not</strong> work together. You cannot combine a Lightning AirPod with a USB-C set (and vice versa). Check your model number via <strong>Settings → Bluetooth</strong> on your iPhone, tap the <strong>"i" icon</strong> next to your AirPods and scroll to <strong>Model Number</strong> (starts with "A"). Verify that your model number matches the correct column below.'
      : '<strong>Let op:</strong> de AirPods Pro 2 Lightning en USB-C versies werken <strong>niet</strong> onderling samen. Je kunt dus geen Lightning-oortje combineren met een USB-C-set (en andersom). Check je modelnummer via <strong>Instellingen → Bluetooth</strong> op je iPhone, tik op het <strong>"i"-icoontje</strong> naast je AirPods en scroll naar <strong>Modelnummer</strong> (begint met "A"). Controleer of jouw modelnummer overeenkomt met de juiste kolom hieronder.',
    gen4Warning: isEnglish
      ? '<strong>Note:</strong> The AirPods 4 without ANC and with ANC are <strong>not</strong> interchangeable. Check your model number via <strong>Settings → Bluetooth</strong> on your iPhone, tap the <strong>"i" icon</strong> next to your AirPods and scroll to <strong>Model Number</strong> (starts with "A"). Verify that your model number matches the correct column below.'
      : '<strong>Let op:</strong> de AirPods 4 zonder ANC en met ANC zijn <strong>niet</strong> onderling uitwisselbaar. Check je modelnummer via <strong>Instellingen → Bluetooth</strong> op je iPhone, tik op het <strong>"i"-icoontje</strong> naast je AirPods en scroll naar <strong>Modelnummer</strong> (begint met "A"). Controleer of jouw modelnummer overeenkomt met de juiste kolom hieronder.',
    defaultWarning: isEnglish
      ? 'Customers sometimes accidentally order the wrong generation. Check your model number first: go to <strong>Settings → Bluetooth</strong> on your iPhone, tap the <strong>"i" icon</strong> next to your AirPods and scroll to <strong>Model Number</strong> (starts with "A"). Only order if your model number is listed below.'
      : 'Het komt regelmatig voor dat klanten per ongeluk de verkeerde generatie bestellen. Check daarom eerst je modelnummer: ga naar <strong>Instellingen → Bluetooth</strong> op je iPhone, tik op het <strong>"i"-icoontje</strong> naast je AirPods en scroll naar <strong>Modelnummer</strong> (begint met "A"). Bestel alleen als jouw modelnummer hieronder staat.',
    notSure: isEnglish ? "Not sure which AirPods you have? Check our page" : "Weet je niet zeker welke AirPods je hebt? Bekijk onze pagina",
  };

  return (
    <Card className="p-5 border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <h3 className="font-semibold text-foreground">{t.title}</h3>
      </div>
      
      {isPro2 ? (
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: t.pro2Warning }} />{' '}
          {t.notSure} <Link to={t.whichAirPodsLink} className="text-primary hover:underline font-medium">{t.whichAirPodsText}</Link>
        </p>
      ) : isGen4 ? (
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: t.gen4Warning }} />{' '}
          {t.notSure} <Link to={t.whichAirPodsLink} className="text-primary hover:underline font-medium">{t.whichAirPodsText}</Link>
        </p>
      ) : (
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: t.defaultWarning }} />{' '}
          {t.notSure} <Link to={t.whichAirPodsLink} className="text-primary hover:underline font-medium">{t.whichAirPodsText}</Link>
        </p>
      )}

      <div className="rounded-lg border border-border bg-background overflow-x-auto">
        {isPro2 ? (
          <table className="w-full text-sm min-w-[300px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">{t.part}</th>
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">Pro 2 Lightning</th>
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">Pro 2 USB-C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.leftAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A2699</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3048</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.rightAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A2698</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3047</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-muted-foreground">{t.version}</td>
                <td className="py-2.5 px-3 font-medium text-foreground">Lightning</td>
                <td className="py-2.5 px-3 font-medium text-foreground">USB-C</td>
              </tr>
            </tbody>
          </table>
        ) : isGen4 ? (
          <table className="w-full text-sm min-w-[300px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">{t.part}</th>
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">{t.withoutANC}</th>
                <th className="py-2.5 px-3 text-left text-muted-foreground font-medium">{t.withANC}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.leftAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3053</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3056</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.rightAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3050</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">A3055</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-muted-foreground">{t.variant}</td>
                <td className="py-2.5 px-3 font-medium text-foreground">{t.withoutANC}</td>
                <td className="py-2.5 px-3 font-medium text-foreground">{t.withANC}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.leftAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.left}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-3 text-muted-foreground">{t.rightAirPod}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.right}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-muted-foreground">{t.chargingCase}</td>
                <td className="py-2.5 px-3 font-mono font-medium text-foreground">{modelNumbers.case}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        {t.helpText}
      </p>
    </Card>
  );
};

export default ModelNumberCheck;