import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Battery, Zap, Usb } from 'lucide-react';

const CaseSelector = () => {
  const cases = [
    {
      id: 'case-1-2',
      name: 'Case Gen 1/2',
      description: 'Voor AirPods 1e & 2e generatie',
      slug: 'oplaadcase-gen-1-2',
      features: ['Lightning'],
      icon: Battery,
    },
    {
      id: 'case-3',
      name: 'Case Gen 3',
      description: 'Voor AirPods 3e generatie',
      slug: 'oplaadcase-gen-3',
      features: ['MagSafe', 'Lightning'],
      icon: Zap,
    },
    {
      id: 'case-4',
      name: 'Case Gen 4',
      description: 'Voor AirPods 4e generatie',
      slug: 'oplaadcase-gen-4',
      features: ['USB-C', 'MagSafe'],
      icon: Usb,
    },
    {
      id: 'case-pro-1',
      name: 'Case Pro 1',
      description: 'Voor AirPods Pro 1e generatie',
      slug: 'oplaadcase-pro-1',
      features: ['MagSafe', 'Lightning'],
      icon: Zap,
    },
    {
      id: 'case-pro-2-lightning',
      name: 'Case Pro 2 Lightning',
      description: 'Voor AirPods Pro 2 (Lightning)',
      slug: 'oplaadcase-pro-2-lightning',
      features: ['MagSafe', 'Lightning'],
      icon: Zap,
    },
    {
      id: 'case-pro-2-usbc',
      name: 'Case Pro 2 USB-C',
      description: 'Voor AirPods Pro 2 (USB-C)',
      slug: 'oplaadcase-pro-2-usbc',
      features: ['USB-C', 'MagSafe'],
      icon: Usb,
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
              <Card className="group p-6 hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <caseItem.icon className="w-6 h-6 text-primary" />
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
