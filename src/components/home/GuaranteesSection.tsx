import { Shield, Truck, RotateCcw, CheckCircle, Battery, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Tot 12 maanden garantie',
      description: '6 maanden op refurbished, 12 maanden op nieuwe producten',
    },
    {
      icon: CheckCircle,
      title: '100% Origineel Apple',
      description: 'Alleen echte Apple onderdelen, geen namaak',
    },
    {
      icon: Battery,
      title: 'Min. 80% batterij',
      description: 'Getest en gegarandeerd bij elk product',
    },
    {
      icon: Truck,
      title: 'Binnen 24 uur verzonden',
      description: 'Bestel vandaag, morgen in huis',
    },
    {
      icon: RotateCcw,
      title: '14 dagen bedenktijd',
      description: 'Niet tevreden? Retourneren kan altijd',
    },
    {
      icon: Headphones,
      title: 'Persoonlijke support',
      description: 'Bereikbaar via WhatsApp en e-mail',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Onze beloftes aan jou
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bij RepairPods koop je met vertrouwen. Elke AirPod wordt getest, gereinigd en verzonden met garantie.
          </p>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {guarantees.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link 
            to="/faq" 
            className="text-primary hover:underline"
          >
            Veelgestelde vragen →
          </Link>
          <span className="text-border">|</span>
          <Link 
            to="/over-ons" 
            className="text-primary hover:underline"
          >
            Meer over ons →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
