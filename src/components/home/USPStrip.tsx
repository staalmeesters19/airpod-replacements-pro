import { Shield, Truck, Star, MapPin, Award } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const USPStrip = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const usps = isEnglish ? [
    {
      icon: Award,
      text: '#1 Electronics store NL on Trustpilot',
    },
    {
      icon: null,
      text: '4.9/5 stars • 300+ happy customers',
      isRating: true,
    },
    {
      icon: Shield,
      text: '100% original Apple • Up to 12 mo warranty',
    },
    {
      icon: Truck,
      text: 'Ships within 24 hours • €4.95',
    },
    {
      icon: MapPin,
      text: 'Pickup available in Amsterdam',
    },
  ] : [
    {
      icon: Award,
      text: '#1 Electronicazaak van NL op Trustpilot',
    },
    {
      icon: null,
      text: '4.9/5 sterren • 300+ tevreden klanten',
      isRating: true,
    },
    {
      icon: Shield,
      text: '100% originele Apple • Tot 12 mnd garantie',
    },
    {
      icon: Truck,
      text: 'Binnen 24 uur verzonden • €4,95',
    },
    {
      icon: MapPin,
      text: 'Afhalen mogelijk in Amsterdam',
    },
  ];

  return (
    <section className="py-4 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-3">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              {usp.isRating ? (
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-3.5 w-3.5 fill-[#00b67a] text-[#00b67a]" 
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-foreground">4.9</span>
                  <span className="text-muted-foreground">• {isEnglish ? '300+ customers' : '300+ klanten'}</span>
                </div>
              ) : (
                <>
                  {usp.icon && <usp.icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />}
                  <span>{usp.text}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPStrip;
