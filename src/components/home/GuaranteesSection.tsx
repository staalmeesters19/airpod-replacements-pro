import { Star, Truck, RotateCcw, CheckCircle, Battery, Headphones } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const GuaranteesSection = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const guarantees = isEnglish ? [
    {
      icon: Star,
      title: '500+ 5-star reviews',
      description: 'Rated #1 on Trustpilot',
      isTrustpilot: true,
      link: 'https://nl.trustpilot.com/review/airpodshandel.nl',
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
      icon: Star,
      title: '500+ 5-sterren reviews',
      description: 'Beoordeeld #1 op Trustpilot',
      isTrustpilot: true,
      link: 'https://nl.trustpilot.com/review/airpodshandel.nl',
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

  const CardContent = ({ item }: { item: typeof guarantees[0] }) => (
    <>
      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-1.5 md:mb-4 mx-auto md:mx-0 ${'isTrustpilot' in item && item.isTrustpilot ? 'bg-[#00b67a]/10' : 'bg-primary/10'}`}>
        <item.icon className={`w-4 h-4 md:w-6 md:h-6 ${'isTrustpilot' in item && item.isTrustpilot ? 'text-[#00b67a] fill-[#00b67a]' : 'text-primary'}`} />
      </div>
      <h3 className="font-semibold text-foreground text-[10px] md:text-base leading-tight">{item.title}</h3>
      <p className="text-sm text-muted-foreground hidden md:block">{item.description}</p>
      {'isTrustpilot' in item && item.isTrustpilot && (
        <p className="text-[8px] md:text-xs text-[#00b67a] font-medium mt-0.5 md:mt-1">★ Trustpilot</p>
      )}
    </>
  );

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
            'link' in item && item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-xl md:rounded-2xl p-2 md:p-6 shadow-sm border border-border hover:border-[#00b67a]/40 hover:shadow-md transition-all text-center md:text-left cursor-pointer"
              >
                <CardContent item={item} />
              </a>
            ) : (
              <div 
                key={index} 
                className="bg-background rounded-xl md:rounded-2xl p-2 md:p-6 shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all text-center md:text-left"
              >
                <CardContent item={item} />
              </div>
            )
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
