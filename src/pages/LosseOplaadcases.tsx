import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
import { mockProducts } from '@/data/mockProducts';

const faqItems = [
  {
    question: 'Kan ik een losse oplaadcase kopen zonder AirPods?',
    answer: 'Ja, bij RePairPods verkopen we losse oplaadcases zonder AirPods. Perfect als je case kwijt of kapot is, maar je AirPods nog prima werken.',
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

const LosseOplaadcases = () => {
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');

  const cases = useMemo(() => {
    let filtered = mockProducts.filter((p) => p.type === 'case');

    if (selectedModel !== 'all') {
      filtered = filtered.filter((p) => p.model === selectedModel);
    }
    if (selectedCondition !== 'all') {
      filtered = filtered.filter((p) => p.condition === selectedCondition);
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [selectedModel, selectedCondition, sortBy]);

  const clearFilters = () => {
    setSelectedModel('all');
    setSelectedCondition('all');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Losse Oplaadcase Kopen | AirPods Cases per Generatie | RePairPods</title>
        <meta
          name="description"
          content="Koop een losse AirPods oplaadcase. Case kwijt of kapot? Alle generaties op voorraad: AirPods 2, 3, 4, Pro 1 en Pro 2. 100% origineel Apple, morgen in huis."
        />
        <meta name="keywords" content="losse oplaadcase, airpods case kopen, oplaadcase airpods, airpods case los, airpods hoesje kopen" />
        <link rel="canonical" href="https://repairpods.nl/losse-oplaadcases" />
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
                <BreadcrumbPage>Losse Oplaadcases</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Losse AirPods Oplaadcase Kopen
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Oplaadcase kwijt of kapot? Koop een losse originele Apple oplaadcase voor je AirPods. 
              Wij hebben alle generaties op voorraad, van AirPods 2 tot AirPods Pro 2. 
              Met of zonder MagSafe, Lightning of USB-C.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Filter className="h-4 w-4" />
              Filters:
            </div>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Generatie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle generaties</SelectItem>
                <SelectItem value="airpods-2">AirPods 2e generatie</SelectItem>
                <SelectItem value="airpods-3">AirPods 3e generatie</SelectItem>
                <SelectItem value="airpods-4">AirPods 4e generatie</SelectItem>
                <SelectItem value="airpods-pro-1">AirPods Pro 1</SelectItem>
                <SelectItem value="airpods-pro-2">AirPods Pro 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue placeholder="Staat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle staten</SelectItem>
                <SelectItem value="brand-new">Gloednieuw</SelectItem>
                <SelectItem value="like-new">Zo goed als nieuw</SelectItem>
                <SelectItem value="used">Gebruikt</SelectItem>
                <SelectItem value="heavily-used">Erg gebruikt</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue placeholder="Sorteren" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Prijs laag-hoog</SelectItem>
                <SelectItem value="price-desc">Prijs hoog-laag</SelectItem>
                <SelectItem value="name-asc">Naam A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {cases.length} oplaadcase{cases.length !== 1 ? 's' : ''} gevonden
          </p>

          {cases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {cases.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Geen oplaadcases gevonden met deze filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Filters wissen
              </Button>
            </div>
          )}

          <section className="mt-16 prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">
              Losse oplaadcase kopen: de voordeligste oplossing
            </h2>
            <p className="text-muted-foreground mb-6">
              Je oplaadcase is kwijt of kapot, maar je AirPods werken nog prima. Waarom zou je dan 
              een compleet nieuwe set kopen? Bij RePairPods bestel je een losse originele Apple 
              oplaadcase voor een fractie van de prijs. Bespaar tot 60% ten opzichte van een nieuwe set!
            </p>
            
            <h3 className="text-xl font-medium mb-3">Welke oplaadcase heb ik nodig?</h3>
            <p className="text-muted-foreground mb-4">
              Elke AirPods generatie heeft een specifieke oplaadcase. Het is belangrijk dat je 
              de juiste case kiest:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>AirPods 2e generatie</strong> – Lightning case, optioneel draadloos laden</li>
              <li><strong>AirPods 3e generatie</strong> – MagSafe of Lightning case</li>
              <li><strong>AirPods 4e generatie</strong> – USB-C case met MagSafe</li>
              <li><strong>AirPods Pro 1</strong> – Lightning case met MagSafe</li>
              <li><strong>AirPods Pro 2</strong> – Lightning of USB-C case met MagSafe</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Alle cases zijn 100% origineel Apple</h3>
            <p className="text-muted-foreground mb-6">
              Bij RePairPods verkopen we uitsluitend originele Apple oplaadcases. Geen namaak, 
              geen replicas. Elke case wordt zorgvuldig getest op batterijcapaciteit en 
              oplaadfunctionaliteit voordat deze wordt verzonden.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Veelgestelde vragen over oplaadcases</h2>
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

          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/losse-airpods" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Losse AirPods</h3>
              <p className="text-sm text-muted-foreground">AirPod kwijt? Bekijk losse oortjes</p>
            </Link>
            <Link 
              to="/welke-airpods" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Welke AirPods heb ik?</h3>
              <p className="text-sm text-muted-foreground">Ontdek je AirPods generatie</p>
            </Link>
            <Link 
              to="/" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Alle producten</h3>
              <p className="text-sm text-muted-foreground">Bekijk ons complete assortiment</p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LosseOplaadcases;
