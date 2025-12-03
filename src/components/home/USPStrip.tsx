import { Shield, Truck, Star, MapPin, Award } from 'lucide-react';

const USPStrip = () => {
  const usps = [
    {
      icon: Award,
      text: '#1 Electronicazaak van NL op Trustpilot',
    },
    {
      icon: Star,
      text: '4.9/5 sterren • 1000+ tevreden klanten',
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
    <section className="py-6 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <usp.icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
              <span>{usp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPStrip;
