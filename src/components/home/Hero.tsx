import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span>voorheen Airpods-handel</span>
            <span className="mx-2 text-border">•</span>
            <span>Bekend van onze winkel in Amsterdam</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
            Vervang je verloren AirPod in één klik
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Koop losse AirPods, oplaadcases en accessoires. Waarom een hele nieuwe set kopen als je er maar één kwijt bent?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 h-12 rounded-full">
              <Link to="/losse-airpods">Bekijk losse AirPods</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 rounded-full border-border hover:bg-secondary hover:text-foreground">
              <Link to="/welke-airpods">Welke AirPods heb ik?</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
