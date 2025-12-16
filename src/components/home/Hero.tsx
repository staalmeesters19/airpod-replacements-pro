import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  return (
    <section 
      className="relative overflow-hidden min-h-[320px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-3 md:px-6 lg:px-10 relative z-10 py-6 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand badge - hidden on mobile */}
          <div className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90 mb-8">
            <span>{isEnglish ? 'formerly Airpods-handel' : 'voorheen Airpods-handel'}</span>
            <span className="mx-2 text-white/40">•</span>
            <span>{isEnglish ? 'Known from our store in Amsterdam' : 'Bekend van onze winkel in Amsterdam'}</span>
          </div>
          
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3 md:mb-6 leading-tight">
            {isEnglish ? 'Replace your lost AirPod' : 'Vervang je verloren AirPod'}
          </h1>
          
          <p className="text-sm md:text-xl text-white/80 mb-5 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {isEnglish 
              ? 'Buy single AirPods & charging cases. Why buy a whole set?'
              : 'Koop losse AirPods & oplaadcases. Waarom een hele set kopen?'
            }
          </p>
          
          <div className="flex flex-row gap-2 md:gap-4 justify-center">
            <Button asChild size="default" className="text-xs md:text-base px-4 md:px-8 h-9 md:h-12 rounded-full bg-white text-foreground hover:bg-white/90">
              <Link to={`${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}`}>
                {isEnglish ? 'Single AirPods' : 'Losse AirPods'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="default" className="text-xs md:text-base px-4 md:px-8 h-9 md:h-12 rounded-full border-black/30 bg-black/80 text-white hover:bg-black/90 hover:text-white">
              <Link to={`${prefix}${isEnglish ? '/which-airpods' : '/welke-airpods'}`}>
                {isEnglish ? 'Which AirPods?' : 'Welke AirPods?'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
