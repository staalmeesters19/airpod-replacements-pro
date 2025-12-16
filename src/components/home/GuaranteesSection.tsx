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
    <section className="py-8 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-3 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-lg md:text-3xl font-semibold text-foreground mb-2 md:mb-3">
            {isEnglish ? 'Our promises to you' : 'Onze beloftes aan jou'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xs md:text-base hidden md:block">
            {isEnglish 
              ? 'At RepairPods you buy with confidence. Every AirPod is tested, cleaned and shipped with warranty.'
              : 'Bij RepairPods koop je met vertrouwen. Elke AirPod wordt getest, gereinigd en verzonden met garantie.'
            }
          </p>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8 mb-4 md:mb-10">
          {guarantees.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl md:rounded-2xl p-2 md:p-6 shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all text-center md:text-left"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-1.5 md:mb-4 mx-auto md:mx-0">
                <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-[10px] md:text-base leading-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground hidden md:block">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA links */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
          <Link 
            to={`${prefix}/faq`} 
            className="text-primary hover:underline"
          >
            {isEnglish ? 'FAQ →' : 'Veelgestelde vragen →'}
          </Link>
          <span className="text-border hidden md:inline">|</span>
          <Link 
            to={`${prefix}${isEnglish ? '/about-us' : '/over-ons'}`} 
            className="text-primary hover:underline"
          >
            {isEnglish ? 'About us →' : 'Over ons →'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
