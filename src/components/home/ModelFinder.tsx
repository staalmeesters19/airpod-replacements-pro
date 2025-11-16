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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welke AirPods heb jij?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kies je model om direct de juiste losse AirPods en oplaadcases te vinden
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {models.map((model) => (
            <Link key={model.slug} to={`/model/${model.slug}`}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center p-8">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-base mb-1">{model.name}</h3>
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
