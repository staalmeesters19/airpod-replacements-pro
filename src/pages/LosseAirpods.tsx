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
import { mockProducts, getLowestPrice } from '@/data/mockProducts';

const faqItems = [
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

const LosseAirpods = () => {
  const [selectedSide, setSelectedSide] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');

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
        <title>Losse AirPods Kopen | Links en Rechts per Stuk | RePairPods</title>
        <meta
          name="description"
          content="Koop losse AirPods per stuk. Linker of rechter AirPod kwijt? Vervang alleen wat je mist. Alle generaties op voorraad, 100% origineel Apple, morgen in huis."
        />
        <meta name="keywords" content="losse airpods, airpod links kopen, airpod rechts kopen, losse airpod, airpod per stuk, airpods vervangen" />
        <link rel="canonical" href="https://repairpods.nl/losse-airpods" />
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
                <BreadcrumbPage>Losse AirPods</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Losse AirPods Kopen
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Eén AirPod kwijt of kapot? Koop een losse linker of rechter AirPod als vervanging. 
              Al onze AirPods zijn 100% origineel Apple en worden de volgende dag geleverd. 
              Kies uit 5 verschillende condities en bespaar tot 70%.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Filter className="h-4 w-4" />
              Filters:
            </div>
            
            <Select value={selectedSide} onValueChange={setSelectedSide}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Kant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle kanten</SelectItem>
                <SelectItem value="left">Links</SelectItem>
                <SelectItem value="right">Rechts</SelectItem>
              </SelectContent>
            </Select>

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
            {earbuds.length} product{earbuds.length !== 1 ? 'en' : ''} gevonden
          </p>

          {earbuds.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {earbuds.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Geen producten gevonden met deze filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Filters wissen
              </Button>
            </div>
          )}

          <section className="mt-16 prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">
              Losse AirPod kopen: vervang alleen wat je kwijt bent
            </h2>
            <p className="text-muted-foreground mb-6">
              Het gebeurt vaker dan je denkt: je verliest één AirPod of de batterij van je linker 
              of rechter oortje gaat achteruit. Bij Apple moet je dan vaak een volledig nieuwe set kopen, 
              maar bij RePairPods kun je een losse AirPod per stuk bestellen. Dat scheelt je tot wel 
              70% van de kosten van een nieuwe set!
            </p>
            
            <h3 className="text-xl font-medium mb-3">5 condities om uit te kiezen</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>Nieuw</strong> – Gloednieuw en ongebruikt, in originele Apple staat</li>
              <li><strong>Uitstekend</strong> – Zo goed als nieuw, geen zichtbare gebruikssporen</li>
              <li><strong>Goed</strong> – Lichte gebruikssporen, werkt perfect</li>
              <li><strong>Gebruikt</strong> – Duidelijke gebruikssporen, volledig functioneel</li>
              <li><strong>Beperkt</strong> – Zichtbare slijtage, werkt naar behoren</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Hoe koppel je een losse AirPod?</h3>
            <p className="text-muted-foreground mb-6">
              Een losse AirPod koppelen is heel eenvoudig. Plaats beide AirPods (je bestaande en de nieuwe) 
              in de oplaadcase, open de case bij je iPhone, en druk op de knop achterop de case. 
              Je iPhone herkent automatisch de nieuwe AirPod en voltooit de koppeling.
            </p>
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

          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/losse-airpods?side=left" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Linker AirPod</h3>
              <p className="text-sm text-muted-foreground">Bekijk alle linker AirPods per generatie</p>
            </Link>
            <Link 
              to="/losse-airpods?side=right" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Rechter AirPod</h3>
              <p className="text-sm text-muted-foreground">Bekijk alle rechter AirPods per generatie</p>
            </Link>
            <Link 
              to="/losse-oplaadcases" 
              className="p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Oplaadcases</h3>
              <p className="text-sm text-muted-foreground">Case kwijt? Bekijk losse oplaadcases</p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LosseAirpods;
