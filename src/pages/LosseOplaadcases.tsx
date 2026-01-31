import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
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
import { mockProducts, getLowestPrice } from '@/data/mockProducts';
import { useTranslation } from 'react-i18next';

const faqItemsNL = [
  {
    question: 'Kan ik een losse oplaadcase kopen zonder AirPods?',
    answer: 'Ja, bij Earbud restore verkopen we losse oplaadcases zonder AirPods. Perfect als je case kwijt of kapot is, maar je AirPods nog prima werken.',
  },
  {
    question: 'Past elke oplaadcase op elke AirPod generatie?',
    answer: 'Nee, elke generatie AirPods heeft een specifieke oplaadcase. AirPods 2 passen niet in een AirPods 3 case en vice versa. Controleer altijd welke generatie je hebt.',
  },
  {
    question: 'Wat is het verschil tussen Lightning en USB-C cases?',
    answer: 'Oudere generaties (AirPods 2, 3, Pro 1) hebben Lightning aansluiting. Nieuwere modellen (AirPods 4, Pro 2 USB-C) hebben USB-C. Sommige cases ondersteunen ook draadloos laden via MagSafe.',
  },
  {
    question: 'Kan ik mijn AirPods koppelen aan een nieuwe case?',
    answer: 'Ja, je kunt je AirPods eenvoudig koppelen aan een nieuwe oplaadcase. Plaats je AirPods in de nieuwe case, druk op de knop achterop, en koppel opnieuw via je iPhone.',
  },
];

const faqItemsEN = [
  {
    question: 'Can I buy a charging case without AirPods?',
    answer: 'Yes, at Earbud restore we sell charging cases without AirPods. Perfect if your case is lost or broken, but your AirPods still work fine.',
  },
  {
    question: 'Does every charging case fit every AirPods generation?',
    answer: 'No, each generation of AirPods has a specific charging case. AirPods 2 do not fit in an AirPods 3 case and vice versa. Always check which generation you have.',
  },
  {
    question: 'What is the difference between Lightning and USB-C cases?',
    answer: 'Older generations (AirPods 2, 3, Pro 1) have Lightning connection. Newer models (AirPods 4, Pro 2 USB-C) have USB-C. Some cases also support wireless charging via MagSafe.',
  },
  {
    question: 'Can I pair my AirPods with a new case?',
    answer: 'Yes, you can easily pair your AirPods with a new charging case. Place your AirPods in the new case, press the button on the back, and re-pair via your iPhone.',
  },
];

const LosseOplaadcases = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const { t } = useTranslation(['products', 'common', 'nav']);
  const prefix = isEnglish ? '/en' : '';
  const faqItems = isEnglish ? faqItemsEN : faqItemsNL;
  
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');

  const cases = useMemo(() => {
    let filtered = mockProducts.filter((p) => p.type === 'case');

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
  }, [selectedModel, sortBy]);

  const clearFilters = () => {
    setSelectedModel('all');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{isEnglish ? 'Buy AirPods Charging Case | All Generations | Earbud restore' : 'Losse Oplaadcase Kopen | AirPods Cases per Generatie | Earbud restore'}</title>
        <meta
          name="description"
          content={isEnglish 
            ? 'Buy a replacement AirPods charging case. Case lost or broken? All generations in stock: AirPods 2, 3, 4, Pro 1 and Pro 2. 100% original Apple, delivered tomorrow.'
            : 'Koop een losse AirPods oplaadcase. Case kwijt of kapot? Alle generaties op voorraad: AirPods 2, 3, 4, Pro 1 en Pro 2. 100% origineel Apple, morgen in huis.'
          }
        />
        <meta name="keywords" content={isEnglish ? 'airpods charging case, buy airpods case, replacement case airpods, airpods case only' : 'losse oplaadcase, airpods case kopen, oplaadcase airpods, airpods case los, airpods hoesje kopen'} />
        <link rel="canonical" href={isEnglish ? 'https://earbudrestore.nl/en/charging-cases' : 'https://earbudrestore.nl/losse-oplaadcases'} />
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
                <BreadcrumbPage>{isEnglish ? 'Cases' : 'Oplaadcases'}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-4 md:mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
              {isEnglish ? 'Charging Cases' : 'Losse Oplaadcases'}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl hidden md:block">
              {isEnglish 
                ? 'Charging case lost or broken? Buy a replacement original Apple charging case.'
                : 'Oplaadcase kwijt of kapot? Koop een losse originele Apple oplaadcase.'
              }
            </p>
          </header>

          <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8 p-3 md:p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium w-full md:w-auto">
              <Filter className="h-3 w-3 md:h-4 md:w-4" />
              {isEnglish ? 'Filters:' : 'Filters:'}
            </div>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[calc(50%-4px)] md:w-48 h-8 md:h-10 text-xs md:text-sm">
                <SelectValue placeholder={t('products:filters.model')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('products:filters.allModels')}</SelectItem>
                <SelectItem value="airpods-2">AirPods 2</SelectItem>
                <SelectItem value="airpods-3">AirPods 3</SelectItem>
                <SelectItem value="airpods-4">AirPods 4</SelectItem>
                <SelectItem value="airpods-pro-1">Pro 1</SelectItem>
                <SelectItem value="airpods-pro-2">Pro 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[calc(50%-4px)] md:w-44 h-8 md:h-10 text-xs md:text-sm">
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
            {cases.length} {isEnglish ? 'cases' : 'oplaadcases'}
          </p>

          {cases.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 mb-8 md:mb-16">
              {cases.map((product) => (
                <ProductCard key={product.id} product={product} isEnglish={isEnglish} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12">
              <p className="text-muted-foreground mb-4 text-sm">{isEnglish ? 'No cases found.' : 'Geen cases gevonden.'}</p>
              <Button variant="outline" size="sm" onClick={clearFilters}>
                {t('common:cta.clearFilters')}
              </Button>
            </div>
          )}

          <section className="mt-8 md:mt-16 prose prose-neutral dark:prose-invert max-w-none hidden md:block">
            <h2 className="text-2xl font-semibold mb-4">
              {isEnglish ? 'Buy a charging case: the most affordable solution' : 'Losse oplaadcase kopen: de voordeligste oplossing'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEnglish 
                ? "Your charging case is lost or broken, but your AirPods still work fine. Why would you buy a completely new set? At Earbud restore you can order a replacement original Apple charging case for a fraction of the price. Save up to 60% compared to a new set!"
                : "Je oplaadcase is kwijt of kapot, maar je AirPods werken nog prima. Waarom zou je dan een compleet nieuwe set kopen? Bij Earbud restore bestel je een losse originele Apple oplaadcase voor een fractie van de prijs. Bespaar tot 60% ten opzichte van een nieuwe set!"
              }
            </p>
            
            <h3 className="text-xl font-medium mb-3">{isEnglish ? '5 conditions to choose from' : '5 condities om uit te kiezen'}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>{t('common:conditions.new')}</strong> – {isEnglish ? 'Brand new and unused, in original Apple condition' : 'Gloednieuw en ongebruikt, in originele Apple staat'}</li>
              <li><strong>{t('common:conditions.excellent')}</strong> – {isEnglish ? 'Like new, no visible signs of use' : 'Zo goed als nieuw, geen zichtbare gebruikssporen'}</li>
              <li><strong>{t('common:conditions.good')}</strong> – {isEnglish ? 'Light signs of use, works perfectly' : 'Lichte gebruikssporen, werkt perfect'}</li>
              <li><strong>{t('common:conditions.used')}</strong> – {isEnglish ? 'Visible signs of use, fully functional' : 'Duidelijke gebruikssporen, volledig functioneel'}</li>
              <li><strong>{t('common:conditions.limited')}</strong> – {isEnglish ? 'Visible wear, works properly' : 'Zichtbare slijtage, werkt naar behoren'}</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">{isEnglish ? 'All cases are 100% original Apple' : 'Alle cases zijn 100% origineel Apple'}</h3>
            <p className="text-muted-foreground mb-6">
              {isEnglish 
                ? "At Earbud restore we only sell original Apple charging cases. No fakes, no replicas. Every case is carefully tested for battery capacity and charging functionality before shipping."
                : "Bij Earbud restore verkopen we uitsluitend originele Apple oplaadcases. Geen namaak, geen replicas. Elke case wordt zorgvuldig getest op batterijcapaciteit en oplaadfunctionaliteit voordat deze wordt verzonden."
              }
            </p>
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
              to={`${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}`} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'AirPods' : 'AirPods'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'Lost an AirPod? View single earbuds' : 'AirPod kwijt? Bekijk losse oortjes'}</p>
            </Link>
            <Link 
              to={`${prefix}${isEnglish ? '/which-airpods' : '/welke-airpods'}`} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'Which?' : 'Welke?'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'Find out your AirPods generation' : 'Ontdek je AirPods generatie'}</p>
            </Link>
            <Link 
              to={prefix || '/'} 
              className="p-3 md:p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">{isEnglish ? 'All' : 'Alles'}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">{isEnglish ? 'View our complete range' : 'Bekijk ons complete assortiment'}</p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LosseOplaadcases;
