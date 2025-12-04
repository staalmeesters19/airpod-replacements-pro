import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  return (
    <section 
      className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90 mb-8">
            <span>{isEnglish ? 'formerly Airpods-handel' : 'voorheen Airpods-handel'}</span>
            <span className="mx-2 text-white/40">•</span>
            <span>{isEnglish ? 'Known from our store in Amsterdam' : 'Bekend van onze winkel in Amsterdam'}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            {isEnglish ? 'Replace your lost AirPod in one click' : 'Vervang je verloren AirPod in één klik'}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {isEnglish 
              ? 'Buy single AirPods, charging cases and accessories. Why buy a whole new set when you only lost one?'
              : 'Koop losse AirPods, oplaadcases en accessoires. Waarom een hele nieuwe set kopen als je er maar één kwijt bent?'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 h-12 rounded-full bg-white text-foreground hover:bg-white/90">
              <Link to={`${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}`}>
                {isEnglish ? 'View single AirPods' : 'Bekijk losse AirPods'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 rounded-full border-black/30 bg-black/80 text-white hover:bg-black/90 hover:text-white">
              <Link to={`${prefix}${isEnglish ? '/which-airpods' : '/welke-airpods'}`}>
                {isEnglish ? 'Which AirPods do I have?' : 'Welke AirPods heb ik?'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
