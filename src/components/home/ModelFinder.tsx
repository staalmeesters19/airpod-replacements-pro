import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const ModelFinder = () => {
  const models = [
    {
      name: 'AirPods 1/2',
      generation: '2e generatie',
      slug: 'airpods-2e-generatie',
      image: '/placeholder.svg',
    },
    {
      name: 'AirPods 3',
      generation: '3e generatie',
      slug: 'airpods-3e-generatie',
      image: '/placeholder.svg',
    },
    {
      name: 'AirPods 4',
      generation: '4e generatie',
      slug: 'airpods-4e-generatie',
      image: '/placeholder.svg',
    },
    {
      name: 'AirPods Pro 1',
      generation: '1e generatie',
      slug: 'airpods-pro-1e-generatie',
      image: '/placeholder.svg',
    },
    {
      name: 'AirPods Pro 2',
      generation: '2e generatie',
      slug: 'airpods-pro-2e-generatie',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Welke AirPods heb jij?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Kies je model om direct de juiste losse AirPods en oplaadcases te vinden
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {models.map((model) => (
            <Link key={model.slug} to={`/model/${model.slug}`}>
              <Card className="group cursor-pointer hover:shadow-card transition-all duration-200 overflow-hidden border-border hover:border-primary/30">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center p-8">
                  <img
                    src={model.image}
                    alt={`${model.name} - RePairPods`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-base mb-1 text-foreground">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">{model.generation}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelFinder;
