import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { 
  SlidersHorizontal, 
  BadgeCheck, 
  Shield, 
  Truck, 
  MessageCircle 
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
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
