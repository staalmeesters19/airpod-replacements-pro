import { Truck, Shield, RotateCcw, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const USPStrip = () => {
  const { t } = useTranslation('home');

  const usps = [
    {
      icon: Award,
      text: t('usp.topStore'),
      subtext: t('usp.topStoreSubtext'),
    },
    {
      icon: Star,
      text: t('usp.rating'),
      subtext: t('usp.ratingSubtext'),
    },
    {
      icon: Truck,
      text: t('usp.shipping24h'),
      subtext: t('usp.shippingCost'),
    },
    {
      icon: Shield,
      text: t('usp.warranty'),
      subtext: t('usp.originalApple'),
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
