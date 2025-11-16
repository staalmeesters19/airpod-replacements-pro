import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2">
            voorheen Airpods-handel · Bekend van onze winkel in Amsterdam
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Vervang je verloren AirPod in één klik
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Koop losse AirPods, oplaadcases en accessoires. Waarom een hele nieuwe set kopen als je er maar één kwijt bent?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/losse-airpods">Bekijk losse AirPods</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/welke-airpods">Welke AirPods heb ik?</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
