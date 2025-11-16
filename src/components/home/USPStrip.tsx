import { Package, TruckIcon, Star, Store } from 'lucide-react';

const USPStrip = () => {
  const usps = [
    {
      icon: Package,
      text: '100% originele Apple-producten',
    },
    {
      icon: TruckIcon,
      text: 'Vandaag besteld, morgen in huis',
    },
    {
      icon: Star,
      text: '300+ 5-sterren reviews',
    },
    {
      icon: Store,
      text: 'Afhalen en testen mogelijk in Amsterdam',
    },
  ];

  return (
    <section className="py-12 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <usp.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-sm font-medium text-foreground">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPStrip;
