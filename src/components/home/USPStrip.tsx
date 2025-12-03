import { Shield, Truck, Star, MapPin } from 'lucide-react';

const USPStrip = () => {
  const usps = [
    {
      icon: Shield,
      text: '100% originele Apple-onderdelen',
    },
    {
      icon: Truck,
      text: 'Vandaag besteld, morgen in huis',
    },
    {
      icon: Star,
      text: '300+ 5-sterren reviews',
    },
    {
      icon: MapPin,
      text: 'Afhalen en testen mogelijk in Amsterdam',
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
