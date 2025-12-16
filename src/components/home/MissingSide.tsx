import { Link, useLocation } from 'react-router-dom';
import airpodLeft from '@/assets/airpod-left.png';
import airpodRight from '@/assets/airpod-right.png';
import airpodCase from '@/assets/airpod-case.png';

const MissingSide = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const options = isEnglish ? [
    {
      id: 'links',
      title: 'Left AirPod',
      description: 'Only lost your left earbud? Order a single left AirPod.',
      image: airpodLeft,
      href: `${prefix}/single-airpods?kant=links`,
      alt: 'Buy single left AirPod - RePairPods',
    },
    {
      id: 'case',
      title: 'Charging Case',
      description: 'Case broken or lost? Find a replacement original charging case.',
      image: airpodCase,
      href: `${prefix}/charging-cases`,
      alt: 'Buy AirPods charging case - RePairPods',
    },
    {
      id: 'rechts',
      title: 'Right AirPod',
      description: 'Only lost your right earbud? Order a single right AirPod.',
      image: airpodRight,
      href: `${prefix}/single-airpods?kant=rechts`,
      alt: 'Buy single right AirPod - RePairPods',
    },
  ] : [
    {
      id: 'links',
      title: 'Linker AirPod',
      description: 'Alleen je linker oortje kwijt? Bestel een losse linker AirPod.',
      image: airpodLeft,
      href: '/losse-airpods?kant=links',
      alt: 'Losse linker AirPod kopen - RePairPods',
    },
    {
      id: 'case',
      title: 'Oplaadcase',
      description: 'Case kapot of kwijt? Vind een losse originele oplaadcase.',
      image: airpodCase,
      href: '/losse-oplaadcases',
      alt: 'Losse AirPods oplaadcase kopen - RePairPods',
    },
    {
      id: 'rechts',
      title: 'Rechter AirPod',
      description: 'Alleen je rechter oortje kwijt? Bestel een losse rechter AirPod.',
      image: airpodRight,
      href: '/losse-airpods?kant=rechts',
      alt: 'Losse rechter AirPod kopen - RePairPods',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            {isEnglish ? 'Which side are you missing?' : 'Welke kant mis jij?'}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {isEnglish 
              ? "Lost an AirPod or have a broken charging case? You don't need to buy a whole set. Choose what you need below."
              : 'Eén AirPod kwijt of een kapotte oplaadcase? Je hoeft geen hele set te kopen. Kies hieronder wat je nodig hebt.'
            }
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto">
          {options.map((option) => (
            <Link
              key={option.id}
              to={option.href}
              className="group flex flex-col items-center p-3 md:p-8 bg-secondary/30 rounded-xl md:rounded-2xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200"
            >
              <div className="w-16 h-16 md:w-32 md:h-32 mb-2 md:mb-6 flex items-center justify-center">
                <img
                  src={option.image}
                  alt={option.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-xs md:text-lg font-semibold text-foreground mb-1 md:mb-2 text-center leading-tight">{option.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground text-center hidden md:block">{option.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissingSide;
