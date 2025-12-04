import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';

// Import product images for each generation
import airpods2Left from '@/assets/products/airpods-2-left.png';
import airpods3Left from '@/assets/products/airpods-3-left.png';
import airpods4Left from '@/assets/products/airpods-4-left.png';
import airpodsPro1Left from '@/assets/products/airpods-pro-1-left.png';
import airpodsPro2Left from '@/assets/products/airpods-pro-2-left.png';

const GenerationSelector = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const generations = [
    {
      id: 'gen-1',
      name: 'AirPods 1',
      subtitle: isEnglish ? '1st generation' : '1e generatie',
      slug: 'airpods-1e-generatie',
      year: '2016',
      image: airpods2Left,
    },
    {
      id: 'gen-2',
      name: 'AirPods 2',
      subtitle: isEnglish ? '2nd generation' : '2e generatie',
      slug: 'airpods-2e-generatie',
      year: '2019',
      image: airpods2Left,
    },
    {
      id: 'gen-3',
      name: 'AirPods 3',
      subtitle: isEnglish ? '3rd generation' : '3e generatie',
      slug: 'airpods-3e-generatie',
      year: '2021',
      image: airpods3Left,
    },
    {
      id: 'gen-4',
      name: 'AirPods 4',
      subtitle: isEnglish ? '4th generation' : '4e generatie',
      slug: 'airpods-4e-generatie',
      year: '2024',
      image: airpods4Left,
    },
    {
      id: 'pro-1',
      name: 'AirPods Pro',
      subtitle: isEnglish ? '1st generation' : '1e generatie',
      slug: 'airpods-pro-1e-generatie',
      year: '2019',
      image: airpodsPro1Left,
    },
    {
      id: 'pro-2',
      name: 'AirPods Pro 2',
      subtitle: isEnglish ? '2nd generation' : '2e generatie',
      slug: 'airpods-pro-2e-generatie',
      year: '2022',
      image: airpodsPro2Left,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            {isEnglish ? 'Single AirPods by generation' : 'Losse AirPods per generatie'}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {isEnglish 
              ? 'Replace your left or right AirPod individually. Choose your generation below to find the right single AirPod.'
              : 'Vervang je linker of rechter AirPod per stuk. Kies hieronder jouw generatie om de juiste losse AirPod te vinden.'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {generations.map((gen) => (
            <Link 
              key={gen.id} 
              to={`${prefix}/model/${gen.slug}`} 
              aria-label={isEnglish ? `View single ${gen.name} products` : `Bekijk losse ${gen.name} producten`}
            >
              <Card className="group p-4 text-center hover:shadow-card hover:border-primary/30 transition-all duration-200 h-full">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={gen.image} 
                    alt={`${gen.name} ${gen.subtitle}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
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
            to={`${prefix}${isEnglish ? '/which-airpods' : '/welke-airpods'}`} 
            className="text-sm text-primary hover:underline"
          >
            {isEnglish 
              ? "Don't know which generation you have? Find out here →"
              : 'Weet je niet welke generatie je hebt? Ontdek het hier →'
            }
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenerationSelector;
