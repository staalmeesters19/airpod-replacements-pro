import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import CaseCardWithVariants from '@/components/products/CaseCardWithVariants';
import { Button } from '@/components/ui/button';
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
import { mockProducts } from '@/data/mockProducts';

interface ModelData {
  slug: string;
  modelKey: string;
  name: string;
  shortName: string;
  year: string;
  description: string;
  modelNumbers: string[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

const modelPages: ModelData[] = [
  {
    slug: 'airpods-1e-generatie',
    modelKey: 'airpods-1',
    name: 'AirPods 1e generatie',
    shortName: 'AirPods 1',
    year: '2016',
    description: 'De eerste generatie AirPods, uitgebracht in december 2016. Baanbrekend door het volledig draadloze ontwerp.',
    modelNumbers: ['A1523', 'A1722'],
    features: ['W1 chip', 'Lightning oplaadcase', 'Tot 5 uur luistertijd'],
    seoTitle: 'Losse AirPods 1e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod 1e generatie. Linker of rechter AirPod 1 kwijt? 100% origineel Apple, morgen in huis. Bespaar tot 70%.',
  },
  {
    slug: 'airpods-2e-generatie',
    modelKey: 'airpods-2',
    name: 'AirPods 2e generatie',
    shortName: 'AirPods 2',
    year: '2019',
    description: 'De tweede generatie AirPods met verbeterde H1 chip, Hey Siri ondersteuning en optionele draadloze oplaadcase.',
    modelNumbers: ['A2032', 'A2031'],
    features: ['H1 chip', 'Hey Siri', 'Lightning/draadloos opladen', 'Tot 5 uur luistertijd'],
    seoTitle: 'Losse AirPods 2e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod 2e generatie. Linker of rechter AirPod 2 kwijt? 100% origineel Apple, morgen in huis. Bespaar tot 70%.',
  },
  {
    slug: 'airpods-3e-generatie',
    modelKey: 'airpods-3',
    name: 'AirPods 3e generatie',
    shortName: 'AirPods 3',
    year: '2021',
    description: 'AirPods met vernieuwd design geïnspireerd op AirPods Pro, spatial audio en MagSafe oplaadcase.',
    modelNumbers: ['A2565', 'A2564'],
    features: ['H1 chip', 'Spatial Audio', 'MagSafe case', 'Zweet- en waterbestendig', 'Tot 6 uur luistertijd'],
    seoTitle: 'Losse AirPods 3e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod 3e generatie. Linker of rechter AirPod 3 kwijt? 100% origineel Apple, morgen in huis. Bespaar tot 70%.',
  },
  {
    slug: 'airpods-4e-generatie',
    modelKey: 'airpods-4',
    name: 'AirPods 4e generatie',
    shortName: 'AirPods 4',
    year: '2024',
    description: 'De nieuwste AirPods met USB-C oplaadcase, verbeterde geluidskwaliteit en optionele noise cancelling.',
    modelNumbers: ['A3048', 'A3047'],
    features: ['H2 chip', 'USB-C case', 'Spatial Audio', 'Optioneel ANC', 'Tot 6 uur luistertijd'],
    seoTitle: 'Losse AirPods 4e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod 4e generatie. Linker of rechter AirPod 4 kwijt? 100% origineel Apple, morgen in huis. Bespaar tot 70%.',
  },
  {
    slug: 'airpods-pro-1e-generatie',
    modelKey: 'airpods-pro-1',
    name: 'AirPods Pro 1e generatie',
    shortName: 'AirPods Pro 1',
    year: '2019',
    description: 'De eerste AirPods Pro met actieve noise cancelling, transparantiemodus en aanpasbare silicone tips.',
    modelNumbers: ['A2084', 'A2083'],
    features: ['H1 chip', 'Active Noise Cancelling', 'Transparency mode', 'Silicone tips', 'Tot 4.5 uur luistertijd'],
    seoTitle: 'Losse AirPods Pro 1e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod Pro 1e generatie. Linker of rechter AirPod Pro kwijt? 100% origineel Apple, morgen in huis.',
  },
  {
    slug: 'airpods-pro-2e-generatie',
    modelKey: 'airpods-pro-2',
    name: 'AirPods Pro 2e generatie',
    shortName: 'AirPods Pro 2',
    year: '2022',
    description: 'De nieuwste AirPods Pro met H2 chip, verbeterde noise cancelling, Adaptive Audio en USB-C of Lightning case.',
    modelNumbers: ['A2931', 'A2698'],
    features: ['H2 chip', 'Verbeterde ANC', 'Adaptive Audio', 'MagSafe case', 'Tot 6 uur luistertijd'],
    seoTitle: 'Losse AirPods Pro 2e Generatie Kopen | Links & Rechts | RePairPods',
    seoDescription: 'Koop een losse AirPod Pro 2e generatie. Linker of rechter AirPod Pro 2 kwijt? 100% origineel Apple, morgen in huis.',
  },
];

const ModelPage = () => {
  const { slug } = useParams();
  const modelData = modelPages.find((m) => m.slug === slug);

  const products = useMemo(() => {
    if (!modelData) return [];
    return mockProducts.filter((p) => p.model === modelData.modelKey && (p.type === 'earbud' || p.type === 'case'));
  }, [modelData]);

  const leftEarbuds = products.filter((p) => p.type === 'earbud' && p.side === 'left');
  const rightEarbuds = products.filter((p) => p.type === 'earbud' && p.side === 'right');
  const cases = products.filter((p) => p.type === 'case');

  if (!modelData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Model niet gevonden</h1>
            <Button asChild>
              <Link to="/">Terug naar home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const faqItems = [
    {
      question: `Hoe weet ik of ik ${modelData.shortName} heb?`,
      answer: `Controleer het modelnummer op je oplaadcase (binnenkant deksel) of via Instellingen > Bluetooth > AirPods op je iPhone. ${modelData.shortName} heeft modelnummers ${modelData.modelNumbers.join(' of ')}.`,
    },
    {
      question: `Kan ik een losse ${modelData.shortName} koppelen aan mijn bestaande set?`,
      answer: `Ja, een losse ${modelData.shortName} koppelt automatisch met je bestaande oplaadcase. Plaats beide AirPods in de case, druk op de knop achterop, en je iPhone herkent de nieuwe AirPod.`,
    },
    {
      question: `Zijn jullie ${modelData.shortName} producten origineel?`,
      answer: `Ja, al onze ${modelData.shortName} producten zijn 100% originele Apple onderdelen. Wij verkopen geen namaak of replica producten.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{modelData.seoTitle}</title>
        <meta name="description" content={modelData.seoDescription} />
        <link rel="canonical" href={`https://repairpods.nl/model/${modelData.slug}`} />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/losse-airpods">Losse AirPods</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{modelData.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                {modelData.year}
              </span>
              <span className="text-sm text-muted-foreground">
                Model: {modelData.modelNumbers.join(' / ')}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Losse {modelData.name} Kopen
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              {modelData.description} Kies uit 5 verschillende condities.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {modelData.features.map((feature) => (
                <span 
                  key={feature}
                  className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </header>

          {products.length > 0 ? (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">
                Beschikbare producten
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Order: Links, Case(s), Rechts */}
                {leftEarbuds.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {cases.length > 1 ? (
                  <CaseCardWithVariants cases={cases} />
                ) : (
                  cases.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
                {rightEarbuds.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ) : (
            <div className="text-center py-12 bg-secondary/30 rounded-xl">
              <p className="text-muted-foreground mb-4">
                Er zijn momenteel geen producten beschikbaar voor {modelData.name}.
              </p>
              <Button asChild>
                <Link to="/losse-airpods">Bekijk alle losse AirPods</Link>
              </Button>
            </div>
          )}

          <section className="mt-16 prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">
              Alles over {modelData.name}
            </h2>
            <p className="text-muted-foreground mb-6">
              {modelData.description} Bij RePairPods kun je losse {modelData.shortName} oortjes en 
              oplaadcases kopen als vervanging. Alle producten zijn 100% origineel Apple en worden 
              de volgende dag geleverd.
            </p>

            <h3 className="text-xl font-medium mb-3">Kenmerken</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              {modelData.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Veelgestelde vragen</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Andere generaties</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {modelPages.filter((m) => m.slug !== slug).map((model) => (
                <Link 
                  key={model.slug} 
                  to={`/model/${model.slug}`}
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors text-center"
                >
                  <h3 className="font-medium text-sm">{model.shortName}</h3>
                  <p className="text-xs text-muted-foreground">{model.year}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModelPage;
