import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';

// Import case images
import airpods2Case from '@/assets/products/airpods-2-case.png';
import airpods3Case from '@/assets/products/airpods-3-case.png';
import airpods4Case from '@/assets/products/airpods-4-case.png';
import airpodsPro1Case from '@/assets/products/airpods-pro-1-case.png';
import airpodsPro2Case from '@/assets/products/airpods-pro-2-case.png';

const CaseSelector = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const cases = [
    {
      id: 'case-1-2',
      name: 'Case Gen 1/2',
      description: isEnglish ? 'For AirPods 1st & 2nd generation' : 'Voor AirPods 1e & 2e generatie',
      slug: 'airpods-2e-generatie-oplaadcase',
      features: ['Lightning', 'Wireless'],
      image: airpods2Case,
    },
    {
      id: 'case-3',
      name: 'Case Gen 3',
      description: isEnglish ? 'For AirPods 3rd generation' : 'Voor AirPods 3e generatie',
      slug: 'airpods-3e-generatie-oplaadcase-magsafe',
      features: ['MagSafe', 'Lightning'],
      image: airpods3Case,
    },
    {
      id: 'case-4',
      name: 'Case Gen 4',
      description: isEnglish ? 'For AirPods 4th generation' : 'Voor AirPods 4e generatie',
      slug: 'airpods-4e-generatie-oplaadcase',
      features: ['USB-C', 'MagSafe'],
      image: airpods4Case,
    },
    {
      id: 'case-pro-1',
      name: 'Case Pro 1',
      description: isEnglish ? 'For AirPods Pro 1st generation' : 'Voor AirPods Pro 1e generatie',
      slug: 'airpods-pro-1e-generatie-oplaadcase-magsafe',
      features: ['MagSafe', 'Lightning'],
      image: airpodsPro1Case,
    },
    {
      id: 'case-pro-2',
      name: 'Case Pro 2',
      description: isEnglish ? 'For AirPods Pro 2' : 'Voor AirPods Pro 2',
      slug: 'airpods-pro-2e-generatie-oplaadcase-lightning',
      features: ['Lightning', 'USB-C'],
      image: airpodsPro2Case,
    },
    {
      id: 'case-pro-3',
      name: 'Case Pro 3',
      description: isEnglish ? 'For AirPods Pro 3' : 'Voor AirPods Pro 3',
      slug: 'airpods-pro-3e-generatie-oplaadcase',
      features: ['USB-C', 'MagSafe'],
      image: airpodsPro2Case,
    },
  ];

  return (
    <section className="py-8 md:py-24">
      <div className="container mx-auto px-3 md:px-6 lg:px-10">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4 text-foreground">
            {isEnglish ? 'Replacement charging cases' : 'Losse oplaadcases'}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto hidden md:block">
            {isEnglish 
              ? 'Charging case lost or broken? Order an original Apple charging case separately. All cases are 100% original and carefully tested.'
              : 'Oplaadcase kwijt of kapot? Bestel een originele Apple oplaadcase los. Alle cases zijn 100% origineel en zorgvuldig getest.'
            }
          </p>
        </div>

        {/* Mobile: 3 column grid, Desktop: 3 column */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 max-w-5xl mx-auto">
          {cases.map((caseItem) => (
            <Link key={caseItem.id} to={`${prefix}/product/${caseItem.slug}`}>
              <Card className="group p-2 md:p-5 hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
                {/* Mobile: vertical layout */}
                <div className="flex flex-col md:flex-row items-center md:gap-4">
                  <div className="w-12 h-12 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center mb-1.5 md:mb-0">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-medium text-foreground text-[10px] md:text-base leading-tight group-hover:text-primary transition-colors">
                      {caseItem.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 hidden md:block">{caseItem.description}</p>
                    <div className="flex-wrap gap-2 hidden md:flex">
                      {caseItem.features.map((feature) => (
                        <span 
                          key={feature}
                          className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-4 md:mt-8">
          <Link 
            to={`${prefix}${isEnglish ? '/charging-cases' : '/losse-oplaadcases'}`} 
            className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium text-primary border border-primary/30 rounded-full hover:bg-accent transition-colors"
          >
            {isEnglish ? 'View all cases' : 'Alle oplaadcases'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseSelector;
