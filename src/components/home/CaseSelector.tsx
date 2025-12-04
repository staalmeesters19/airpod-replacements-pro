import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

// Import case images
import airpods2Case from '@/assets/products/airpods-2-case.png';
import airpods3Case from '@/assets/products/airpods-3-case.png';
import airpods4Case from '@/assets/products/airpods-4-case.png';
import airpodsPro1Case from '@/assets/products/airpods-pro-1-case.png';
import airpodsPro2Case from '@/assets/products/airpods-pro-2-case.png';

const CaseSelector = () => {
  const cases = [
    {
      id: 'case-1-2',
      name: 'Case Gen 1/2',
      description: 'Voor AirPods 1e & 2e generatie',
      slug: 'airpods-2e-generatie-oplaadcase',
      features: ['Lightning', 'Wireless'],
      image: airpods2Case,
    },
    {
      id: 'case-3',
      name: 'Case Gen 3',
      description: 'Voor AirPods 3e generatie',
      slug: 'airpods-3e-generatie-oplaadcase-magsafe',
      features: ['MagSafe', 'Lightning'],
      image: airpods3Case,
    },
    {
      id: 'case-4',
      name: 'Case Gen 4',
      description: 'Voor AirPods 4e generatie',
      slug: 'airpods-4e-generatie-oplaadcase',
      features: ['USB-C', 'MagSafe'],
      image: airpods4Case,
    },
    {
      id: 'case-pro-1',
      name: 'Case Pro 1',
      description: 'Voor AirPods Pro 1e generatie',
      slug: 'airpods-pro-1e-generatie-oplaadcase-magsafe',
      features: ['MagSafe', 'Lightning'],
      image: airpodsPro1Case,
    },
    {
      id: 'case-pro-2',
      name: 'Case Pro 2',
      description: 'Voor AirPods Pro 2',
      slug: 'airpods-pro-2e-generatie-oplaadcase-lightning',
      features: ['Lightning', 'USB-C'],
      image: airpodsPro2Case,
    },
    {
      id: 'case-pro-3',
      name: 'Case Pro 3',
      description: 'Voor AirPods Pro 3',
      slug: 'airpods-pro-3e-generatie-oplaadcase',
      features: ['USB-C', 'MagSafe'],
      image: airpodsPro2Case,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Losse oplaadcases
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Oplaadcase kwijt of kapot? Bestel een originele Apple oplaadcase los. 
            Alle cases zijn 100% origineel en zorgvuldig getest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((caseItem) => (
            <Link key={caseItem.id} to={`/product/${caseItem.slug}`}>
              <Card className="group p-5 hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      {caseItem.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{caseItem.description}</p>
                    <div className="flex flex-wrap gap-2">
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

        <div className="text-center mt-8">
          <Link 
            to="/losse-oplaadcases" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary border border-primary/30 rounded-full hover:bg-accent transition-colors"
          >
            Bekijk alle oplaadcases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseSelector;
