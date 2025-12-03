import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const GenerationSelector = () => {
  const generations = [
    {
      id: 'gen-1',
      name: 'AirPods 1',
      subtitle: '1e generatie',
      slug: 'airpods-1e-generatie',
      year: '2016',
    },
    {
      id: 'gen-2',
      name: 'AirPods 2',
      subtitle: '2e generatie',
      slug: 'airpods-2e-generatie',
      year: '2019',
    },
    {
      id: 'gen-3',
      name: 'AirPods 3',
      subtitle: '3e generatie',
      slug: 'airpods-3e-generatie',
      year: '2021',
    },
    {
      id: 'gen-4',
      name: 'AirPods 4',
      subtitle: '4e generatie',
      slug: 'airpods-4e-generatie',
      year: '2024',
    },
    {
      id: 'pro-1',
      name: 'AirPods Pro',
      subtitle: '1e generatie',
      slug: 'airpods-pro-1e-generatie',
      year: '2019',
    },
    {
      id: 'pro-2',
      name: 'AirPods Pro 2',
      subtitle: '2e generatie',
      slug: 'airpods-pro-2e-generatie',
      year: '2022',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Losse AirPods per generatie
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Vervang je linker of rechter AirPod per stuk. Kies hieronder jouw generatie 
            om de juiste losse AirPod te vinden.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {generations.map((gen) => (
            <Link key={gen.id} to={`/model/${gen.slug}`}>
              <Card className="group p-6 text-center hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-semibold text-primary">
                    {gen.name.includes('Pro') ? 'P' : gen.name.slice(-1)}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {gen.name}
                </h3>
                <p className="text-xs text-muted-foreground">{gen.subtitle}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/welke-airpods" 
            className="text-sm text-primary hover:underline"
          >
            Weet je niet welke generatie je hebt? Ontdek het hier →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenerationSelector;
