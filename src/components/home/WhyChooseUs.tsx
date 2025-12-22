import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { 
  SlidersHorizontal, 
  BadgeCheck, 
  Shield, 
  Truck, 
  MessageCircle,
  RotateCcw
} from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const reasons = [
    {
      icon: SlidersHorizontal,
      titleKey: 'whyChoose.conditions.title',
      descKey: 'whyChoose.conditions.description',
    },
    {
      icon: BadgeCheck,
      titleKey: 'whyChoose.original.title',
      descKey: 'whyChoose.original.description',
    },
    {
      icon: Shield,
      titleKey: 'whyChoose.warranty.title',
      descKey: 'whyChoose.warranty.description',
    },
    {
      icon: Truck,
      titleKey: 'whyChoose.shipping.title',
      descKey: 'whyChoose.shipping.description',
    },
    {
      icon: MessageCircle,
      titleKey: 'whyChoose.support.title',
      descKey: 'whyChoose.support.description',
    },
    {
      icon: RotateCcw,
      titleKey: 'whyChoose.return.title',
      descKey: 'whyChoose.return.description',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
            {t('whyChoose.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        {/* Reasons Grid - 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 md:p-4 lg:p-6 bg-background rounded-lg md:rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-3 lg:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-sm lg:text-base leading-tight">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                  {t(reason.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
