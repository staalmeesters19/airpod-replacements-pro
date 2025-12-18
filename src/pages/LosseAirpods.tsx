import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { mockProducts, getLowestPrice, getLocalizedProductName } from '@/data/mockProducts';
import { useTranslation } from 'react-i18next';

const faqItemsNL = [
  {
    question: 'Kan ik een losse AirPod kopen als vervanging?',
    answer: 'Ja, bij RePairPods kun je losse AirPods per stuk kopen. Of je nu je linker of rechter AirPod kwijt bent, wij hebben alle generaties op voorraad.',
  },
  {
    question: 'Werkt een losse AirPod met mijn bestaande set?',
    answer: 'Absoluut! Een losse AirPod koppelt automatisch met je bestaande oplaadcase en andere AirPod. Je hoeft alleen de nieuwe AirPod in de case te plaatsen en opnieuw te koppelen.',
  },
  {
    question: 'Hoe weet ik welke generatie AirPods ik heb?',
    answer: 'Je vindt het modelnummer op je oplaadcase of via Instellingen > Bluetooth > AirPods op je iPhone. Bekijk onze hulppagina "Welke AirPods heb ik?" voor meer informatie.',
  },
  {
    question: 'Zijn jullie AirPods 100% origineel?',
    answer: 'Ja, al onze AirPods zijn 100% originele Apple producten. Wij verkopen geen namaak of replica producten.',
  },
];

const faqItemsEN = [
  {
    question: 'Can I buy a single AirPod as a replacement?',
    answer: 'Yes, at RePairPods you can buy single AirPods individually. Whether you lost your left or right AirPod, we have all generations in stock.',
  },
  {
    question: 'Does a single AirPod work with my existing set?',
    answer: 'Absolutely! A single AirPod automatically pairs with your existing charging case and other AirPod. Just place the new AirPod in the case and re-pair.',
  },
  {
    question: 'How do I know which generation AirPods I have?',
    answer: 'You can find the model number on your charging case or via Settings > Bluetooth > AirPods on your iPhone. Check our help page "Which AirPods do I have?" for more information.',
  },
  {
    question: 'Are your AirPods 100% original?',
    answer: 'Yes, all our AirPods are 100% original Apple products. We do not sell counterfeit or replica products.',
  },
];

const LosseAirpods = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const { t } = useTranslation(['products', 'common', 'nav']);
  const prefix = isEnglish ? '/en' : '';
  const faqItems = isEnglish ? faqItemsEN : faqItemsNL;
  const [selectedSide, setSelectedSide] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');

  // Read URL parameters on mount
  useEffect(() => {
    const kantParam = searchParams.get('kant');
    const sideParam = searchParams.get('side');
    
    // Support both ?kant=links/rechts and ?side=left/right
    if (kantParam === 'links' || sideParam === 'left') {
      setSelectedSide('left');
    } else if (kantParam === 'rechts' || sideParam === 'right') {
      setSelectedSide('right');
    }
  }, [searchParams]);

  const earbuds = useMemo(() => {
    let filtered = mockProducts.filter((p) => p.type === 'earbud');

    if (selectedSide !== 'all') {
      filtered = filtered.filter((p) => p.side === selectedSide);
    }
    if (selectedModel !== 'all') {
      filtered = filtered.filter((p) => p.model === selectedModel);
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));
        break;
      case 'price-desc':
        filtered.sort((a, b) => getLowestPrice(b) - getLowestPrice(a));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [selectedSide, selectedModel, sortBy]);

  const clearFilters = () => {
    setSelectedSide('all');
    setSelectedModel('all');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{isEnglish ? 'Buy Single AirPods | Left or Right AirPod | RePairPods' : 'Losse AirPods Kopen | Links en Rechts per Stuk | RePairPods'}</title>
        <meta
          name="description"
          content={isEnglish 
            ? 'Buy single AirPods individually. Lost your left or right AirPod? Replace only what you need. All generations in stock, 100% original Apple, delivered tomorrow.'
            : 'Koop losse AirPods per stuk. Linker of rechter AirPod kwijt? Vervang alleen wat je mist. Alle generaties op voorraad, 100% origineel Apple, morgen in huis.'
          }
        />
        <meta name="keywords" content={isEnglish ? 'single airpods, buy left airpod, buy right airpod, single airpod, airpod replacement' : 'losse airpods, airpod links kopen, airpod rechts kopen, losse airpod, airpod per stuk, airpods vervangen'} />
        <link rel="canonical" href={isEnglish ? 'https://repairpods.nl/en/single-airpods' : 'https://repairpods.nl/losse-airpods'} />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-3 md:px-6 lg:px-10 py-4 md:py-8">
          <Breadcrumb className="mb-4 md:mb-6 text-xs md:text-sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={prefix || '/'}>{t('nav:breadcrumbs.home')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{isEnglish ? 'Single AirPods' : 'Losse AirPods'}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-4 md:mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
              {isEnglish ? 'Buy Single AirPods' : 'Losse AirPods Kopen'}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl hidden md:block">
              {isEnglish 
                ? 'Lost or broken an AirPod? Buy a single left or right AirPod as a replacement. All our AirPods are 100% original Apple and delivered the next day. Choose from 5 different conditions and save up to 70%.'
                : 'Eén AirPod kwijt of kapot? Koop een losse linker of rechter AirPod als vervanging. Al onze AirPods zijn 100% origineel Apple en worden de volgende dag geleverd. Kies uit 5 verschillende condities en bespaar tot 70%.'
              }
            </p>
          </header>

          <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8 p-3 md:p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium w-full md:w-auto">
              <Filter className="h-3 w-3 md:h-4 md:w-4" />
              {isEnglish ? 'Filters:' : 'Filters:'}
            </div>
            
            <Select value={selectedSide} onValueChange={setSelectedSide}>
              <SelectTrigger className="w-[calc(50%-4px)] md:w-40 h-8 md:h-10 text-xs md:text-sm">
                <SelectValue placeholder={t('products:filters.side')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('products:filters.allSides')}</SelectItem>
                <SelectItem value="left">{t('common:sides.left')}</SelectItem>
                <SelectItem value="right">{t('common:sides.right')}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[calc(50%-4px)] md:w-48 h-8 md:h-10 text-xs md:text-sm">
                <SelectValue placeholder={t('products:filters.model')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('products:filters.allModels')}</SelectItem>
                <SelectItem value="airpods-2">{isEnglish ? 'AirPods 2' : 'AirPods 2'}</SelectItem>
                <SelectItem value="airpods-3">{isEnglish ? 'AirPods 3' : 'AirPods 3'}</SelectItem>
                <SelectItem value="airpods-4">{isEnglish ? 'AirPods 4' : 'AirPods 4'}</SelectItem>
                <SelectItem value="airpods-pro-1">Pro 1</SelectItem>
                <SelectItem value="airpods-pro-2">Pro 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-44 h-8 md:h-10 text-xs md:text-sm">
                <SelectValue placeholder={t('products:filters.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">{t('products:filters.priceAsc')}</SelectItem>
                <SelectItem value="price-desc">{t('products:filters.priceDesc')}</SelectItem>
                <SelectItem value="name-asc">{t('products:filters.nameAsc')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
            {earbuds.length} {isEnglish ? 'products' : 'producten'}
          </p>

          {earbuds.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 mb-8 md:mb-16">
              {earbuds.map((product) => (
                <ProductCard key={product.id} product={product} isEnglish={isEnglish} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12">
              <p className="text-muted-foreground mb-4 text-sm">{isEnglish ? 'No products found.' : 'Geen producten gevonden.'}</p>
              <Button variant="outline" size="sm" onClick={clearFilters}>
                {t('common:cta.clearFilters')}
              </Button>
            </div>
          )}

          <section className="mt-8 md:mt-16 prose prose-neutral dark:prose-invert max-w-none hidden md:block">
            <h2 className="text-2xl font-semibold mb-4">
              {isEnglish ? 'Buy a single AirPod: replace only what you lost' : 'Losse AirPod kopen: vervang alleen wat je kwijt bent'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEnglish 
                ? "It happens more often than you think: you lose one AirPod or the battery of your left or right earbud starts to deteriorate. At Apple you often have to buy a completely new set, but at RePairPods you can order a single AirPod individually. That saves you up to 70% of the cost of a new set!"
                : "Het gebeurt vaker dan je denkt: je verliest één AirPod of de batterij van je linker of rechter oortje gaat achteruit. Bij Apple moet je dan vaak een volledig nieuwe set kopen, maar bij RePairPods kun je een losse AirPod per stuk bestellen. Dat scheelt je tot wel 70% van de kosten van een nieuwe set!"
              }
            </p>
            
            <h3 className="text-xl font-medium mb-3">{isEnglish ? '5 conditions to choose from' : '5 condities om uit te kiezen'}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>{t('common:conditions.new')}</strong> – {isEnglish ? 'Brand new and unused' : 'Gloednieuw en ongebruikt'}</li>
              <li><strong>{t('common:conditions.excellent')}</strong> – {isEnglish ? 'Like new' : 'Zo goed als nieuw'}</li>
              <li><strong>{t('common:conditions.good')}</strong> – {isEnglish ? 'Light signs of use' : 'Lichte gebruikssporen'}</li>
              <li><strong>{t('common:conditions.used')}</strong> – {isEnglish ? 'Visible signs of use' : 'Duidelijke gebruikssporen'}</li>
              <li><strong>{t('common:conditions.limited')}</strong> – {isEnglish ? 'Visible wear' : 'Zichtbare slijtage'}</li>
            </ul>
          </section>

          <section className="mt-8 md:mt-16">
            <h2 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">{isEnglish ? 'FAQ' : 'Veelgestelde vragen'}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mt-8 md:mt-16 grid grid-cols-3 gap-2 md:gap-6">
            <Link 
              to={`${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}?kant=links`} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'Left' : 'Links'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'View all left AirPods' : 'Bekijk linker AirPods'}</p>
            </Link>
            <Link 
              to={`${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}?kant=rechts`} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'Right' : 'Rechts'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'View all right AirPods' : 'Bekijk rechter AirPods'}</p>
            </Link>
            <Link 
              to={`${prefix}${isEnglish ? '/charging-cases' : '/losse-oplaadcases'}`} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'Cases' : 'Cases'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'View charging cases' : 'Bekijk oplaadcases'}</p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LosseAirpods;
