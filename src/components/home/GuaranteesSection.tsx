import { Shield, Truck, RotateCcw, CheckCircle, Battery, Headphones } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const GuaranteesSection = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const guarantees = isEnglish ? [
    {
      icon: Shield,
      title: 'Up to 12 months warranty',
      description: '6 months on refurbished, 12 months on new products',
    },
    {
      icon: CheckCircle,
      title: '100% Original Apple',
      description: 'Only genuine Apple parts, no fakes',
    },
    {
      icon: Battery,
      title: 'Min. 80% battery',
      description: 'Tested and guaranteed on every product',
    },
    {
      icon: Truck,
      title: 'Ships within 24 hours',
      description: 'Order today, delivered tomorrow',
    },
    {
      icon: RotateCcw,
      title: '14-day return policy',
      description: 'Not satisfied? Returns always possible',
    },
    {
      icon: Headphones,
      title: 'Personal support',
      description: 'Available via WhatsApp and email',
    },
  ] : [
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
            {isEnglish ? 'Our promises to you' : 'Onze beloftes aan jou'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {isEnglish 
              ? 'At RepairPods you buy with confidence. Every AirPod is tested, cleaned and shipped with warranty.'
              : 'Bij RepairPods koop je met vertrouwen. Elke AirPod wordt getest, gereinigd en verzonden met garantie.'
            }
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
            to={`${prefix}/faq`} 
            className="text-primary hover:underline"
          >
            {isEnglish ? 'Frequently asked questions →' : 'Veelgestelde vragen →'}
          </Link>
          <span className="text-border">|</span>
          <Link 
            to={`${prefix}${isEnglish ? '/about-us' : '/over-ons'}`} 
            className="text-primary hover:underline"
          >
            {isEnglish ? 'More about us →' : 'Meer over ons →'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
