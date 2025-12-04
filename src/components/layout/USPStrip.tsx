import { Truck, Shield, RotateCcw, Star, Award } from 'lucide-react';

const USPStrip = () => {
  const usps = [
    {
      icon: Award,
      text: '#1 Electronicazaak NL',
      subtext: 'op Trustpilot',
    },
    {
      icon: Star,
      text: '4.9/5 sterren',
      subtext: '1000+ klanten',
    },
    {
      icon: Truck,
      text: 'Binnen 24 uur verzonden',
      subtext: '€4,95 verzendkosten',
    },
    {
      icon: Shield,
      text: 'Tot 12 maanden garantie',
      subtext: '100% origineel Apple',
    },
    {
      icon: RotateCcw,
      text: '14 dagen retourrecht',
      subtext: 'Niet goed, geld terug',
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Desktop: Show all */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center gap-2">
              <usp.icon className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-medium whitespace-nowrap">{usp.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Scrolling marquee */}
        <div className="md:hidden relative">
          <div className="flex animate-marquee gap-8">
            {[...usps, ...usps].map((usp, index) => (
              <div key={index} className="flex items-center gap-2 flex-shrink-0">
                <usp.icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{usp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPStrip;


