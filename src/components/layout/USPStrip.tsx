import { Truck, Shield, RotateCcw, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const USPStrip = () => {
  const { t, i18n } = useTranslation('home');
  const isEnglish = i18n.language === 'en';

  const usps = [
    {
      icon: Award,
      text: isEnglish ? '#1 Electronics store NL' : '#1 Electronicazaak NL',
      subtext: isEnglish ? 'on Trustpilot' : 'op Trustpilot',
    },
    {
      icon: Star,
      text: t('usp.rating'),
      subtext: isEnglish ? '1000+ customers' : '1000+ klanten',
    },
    {
      icon: Truck,
      text: t('usp.shipping24h'),
      subtext: isEnglish ? '€4.95 shipping' : '€4,95 verzendkosten',
    },
    {
      icon: Shield,
      text: t('usp.warranty'),
      subtext: isEnglish ? '100% original Apple' : '100% origineel Apple',
    },
    {
      icon: RotateCcw,
      text: t('usp.return'),
      subtext: t('usp.returnSubtext'),
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Desktop: Show all */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center gap-2">
              <usp.icon className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-medium whitespace-nowrap">{usp.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Scrolling marquee */}
        <div className="md:hidden relative">
          <div className="flex animate-marquee gap-8">
            {[...usps, ...usps].map((usp, index) => (
              <div key={index} className="flex items-center gap-2 flex-shrink-0">
                <usp.icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{usp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPStrip;
