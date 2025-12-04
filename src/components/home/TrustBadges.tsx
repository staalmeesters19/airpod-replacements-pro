import { Shield, Truck, RotateCcw, Award, CheckCircle } from 'lucide-react';

const TrustBadges = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Tot 12 maanden garantie',
      description: '6 maanden op refurbished, 12 maanden op nieuw',
    },
    {
      icon: CheckCircle,
      title: '100% Origineel Apple',
      description: 'Alleen echte Apple onderdelen',
    },
    {
      icon: Truck,
      title: 'Binnen 24 uur verzonden',
      description: 'Bestel vandaag, morgen in huis',
    },
    {
      icon: RotateCcw,
      title: '14 dagen retourrecht',
      description: 'Niet tevreden? Geld terug!',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {guarantees.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews summary */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {/* Trustpilot */}
            <a 
              href="https://nl.trustpilot.com/review/repairpods.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5 op Trustpilot</p>
                <p className="text-xs text-muted-foreground">#1 Electronicazaak van NL</p>
              </div>
            </a>
            
            {/* Google Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5 op Google</p>
                <p className="text-xs text-muted-foreground">290+ reviews</p>
              </div>
            </div>
            
            {/* Customers */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">1000+ klanten</p>
                <p className="text-xs text-muted-foreground">Tevreden geholpen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;



