import { useTranslation } from 'react-i18next';
import { Search, MousePointer, Package, Smile } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation('home');

  const steps = [
    {
      icon: Search,
      stepKey: 'howItWorks.step1',
    },
    {
      icon: MousePointer,
      stepKey: 'howItWorks.step2',
    },
    {
      icon: Package,
      stepKey: 'howItWorks.step3',
    },
    {
      icon: Smile,
      stepKey: 'howItWorks.step4',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 md:top-0 md:right-4 lg:right-8 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 md:mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <Icon className="w-7 h-7 md:w-9 md:h-9 text-primary" />
                </div>
                
                {/* Text */}
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {t(`${step.stepKey}.title`)}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed px-1">
                  {t(`${step.stepKey}.description`)}
                </p>

                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
