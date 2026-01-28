import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const faqItems = [
  {
    question: "Waar vind ik het modelnummer van mijn AirPods?",
    answer: "Je vindt het modelnummer op drie plekken: via je iPhone (Instellingen > Bluetooth > tik op het i-icoontje naast je AirPods), in de binnenkant van het deksel van de oplaadcase, of op het oortje zelf (zeer kleine tekst). De makkelijkste methode is via je iPhone wanneer je AirPods verbonden zijn."
  },
  {
    question: "Kun je een AirPod van een andere generatie gebruiken?",
    answer: "Nee, je kunt alleen een losse AirPod combineren met een AirPod van exact dezelfde generatie. Een AirPod 2e generatie werkt niet samen met een 3e generatie, en AirPods Pro 1 werken niet met AirPods Pro 2. Controleer daarom altijd eerst je modelnummer voordat je bestelt."
  },
  {
    question: "Werkt een losse AirPod altijd met mijn bestaande AirPods?",
    answer: "Ja, mits het dezelfde generatie is. RePairPods levert uitsluitend originele Apple-onderdelen, waardoor de pairing probleemloos verloopt. Je koppelt de nieuwe losse AirPod eenvoudig via je iPhone, en hij werkt direct samen met je bestaande AirPod."
  },
  {
    question: "Hoe weet ik of ik AirPods Pro 1 of 2 heb?",
    answer: "De AirPods Pro 1e generatie hebben modelnummer A2084 (links) en A2083 (rechts). De AirPods Pro 2e generatie hebben A2931 (links) en A2699 (rechts). Je kunt dit checken via Instellingen > Bluetooth op je iPhone, of door in de oplaadcase te kijken."
  },
  {
    question: "Kan ik een oplaadcase van een andere generatie gebruiken?",
    answer: "Nee, oplaadcases zijn generatie-specifiek. Een case voor AirPods 2 past niet bij AirPods 3, en een AirPods Pro 1 case werkt niet met AirPods Pro 2 oortjes. Zorg dat je altijd de juiste case voor jouw specifieke generatie bestelt."
  },
  {
    question: "Wat is het verschil tussen AirPods 4 en AirPods 4 met ANC?",
    answer: "Apple biedt de AirPods 4 in twee versies: een standaardversie en een versie met Active Noise Cancellation (ANC). Beide hebben hetzelfde uiterlijk, maar de ANC-versie biedt actieve ruisonderdrukking. Check je modelnummer om te weten welke versie je hebt."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Welke AirPods heb ik? De complete gids voor modelnummers en generaties",
  "description": "Ontdek welk AirPods-model je hebt aan de hand van modelnummers. Complete gids voor alle generaties AirPods en AirPods Pro.",
  "author": {
    "@type": "Organization",
    "name": "Earbud restore"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Earbud restore"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15"
};

const BlogWelkeAirpods = () => {
  return (
    <>
      <Helmet>
        <title>Welke AirPods heb ik? De complete gids voor modelnummers en generaties | Earbud restore</title>
        <meta name="description" content="Ontdek welk AirPods-model je hebt aan de hand van modelnummers. Complete gids voor AirPods 1, 2, 3, 4, Pro 1 en Pro 2. Vind je generatie en bestel het juiste onderdeel." />
        <link rel="canonical" href="https://earbudrestore.nl/blog/welke-airpods-heb-ik" />
        <meta name="keywords" content="welke airpods heb ik, airpods model bepalen, welke generatie airpods, modelnummer airpods, airpods generatie herkennen" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <article className="py-6 md:py-20">
          <div className="container max-w-3xl mx-auto px-3 md:px-4">
            
            {/* Breadcrumb */}
            <Link to="/blog" className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-base text-muted-foreground hover:text-primary mb-4 md:mb-8 transition-colors">
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
              Terug naar blog
            </Link>

            {/* Meta info */}
            <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                15 januari 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                8 min
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-8 leading-tight">
              Welke AirPods heb ik? De complete gids voor modelnummers
            </h1>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Heb je een AirPod verloren of is je oplaadcase kapot? Dan wil je precies weten welk AirPods-model je hebt. 
                Want als je een <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPod</Link> of 
                {' '}<Link to="/losse-oplaadcases" className="text-primary hover:underline">oplaadcase</Link> wilt vervangen, 
                moet deze exact overeenkomen met je huidige generatie. Een AirPod van de 2e generatie werkt namelijk niet 
                samen met een 3e generatie – en andersom ook niet.
              </p>

              <p className="mb-8">
                Bij Earbud restore zijn we gespecialiseerd in losse AirPods en oplaadcases. We leveren uitsluitend 100% originele 
                Apple-onderdelen, zorgvuldig getest op geluid, batterij en connectie. In deze uitgebreide gids leggen we stap 
                voor stap uit hoe je achterhaalt welke AirPods je hebt, wat de verschillen zijn tussen de generaties, en hoe 
                je het juiste vervangende onderdeel kiest.
              </p>

              {/* Section: Waarom belangrijk */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Waarom het belangrijk is om je AirPods-model te kennen
              </h2>

              <p className="mb-4">
                Apple heeft inmiddels meerdere generaties AirPods uitgebracht: de standaard AirPods (1e, 2e, 3e en 4e generatie) 
                en de AirPods Pro (1e en 2e generatie). Hoewel ze er op het eerste gezicht vergelijkbaar uitzien, zijn ze technisch 
                niet uitwisselbaar. Elke generatie heeft zijn eigen chip, drivers en firmware.
              </p>

              <p className="mb-4">
                Dit betekent concreet:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Een losse AirPod van de 2e generatie kan niet gekoppeld worden aan een AirPod van de 3e generatie</li>
                <li>AirPods Pro 1 oortjes passen niet in een AirPods Pro 2 oplaadcase (en vice versa)</li>
                <li>De oplaadcase van AirPods 3 werkt niet met AirPods 2 oortjes</li>
                <li>Zelfs binnen de Pro-lijn zijn generatie 1 en 2 niet compatibel</li>
              </ul>

              <p className="mb-8">
                Voordat je een <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPod</Link> of 
                {' '}<Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcase</Link> bestelt, 
                is het dus essentieel om eerst je exacte model te achterhalen. Gelukkig is dat eenvoudiger dan je denkt.
              </p>

              {/* Section: Via iPhone */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Zo vind je jouw AirPods-model via je iPhone
              </h2>

              <p className="mb-4">
                De snelste manier om te ontdekken welke AirPods je hebt, is via je iPhone of iPad. Volg deze stappen:
              </p>

              <Card className="p-6 my-6 bg-secondary/30">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Stappenplan: modelnummer vinden via iPhone
                </h3>
                <ol className="space-y-3 mb-0">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                    <span>Zorg dat je AirPods verbonden zijn met je iPhone (doe ze in je oren of open de case naast je telefoon)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                    <span>Open de app <strong>Instellingen</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                    <span>Tik op <strong>Bluetooth</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                    <span>Zoek je AirPods in de lijst en tik op het <strong>(i)</strong>-icoontje</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                    <span>Scroll naar beneden – hier zie je het <strong>modelnummer</strong></span>
                  </li>
                </ol>
              </Card>

              <p className="mb-4">
                Het modelnummer begint altijd met de letter "A" gevolgd door vier cijfers, bijvoorbeeld A2032 of A2931. 
                Met dit nummer kun je in de onderstaande tabel precies opzoeken welke generatie je hebt.
              </p>

              <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
                <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Tip:</p>
                  <p className="text-sm mb-0">Zijn je AirPods niet verbonden of heb je ze niet bij de hand? Dan kun je het modelnummer ook fysiek aflezen van de oplaadcase of het oortje zelf.</p>
                </div>
              </div>

              {/* Section: Modelnummer fysiek */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Modelnummer op de oplaadcase of op het oortje zelf
              </h2>

              <p className="mb-4">
                Naast de digitale methode via je iPhone, kun je het modelnummer ook fysiek terugvinden:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Op de oplaadcase</h3>
              <p className="mb-4">
                Open het deksel van je oplaadcase en kijk aan de binnenkant van het deksel. Daar staat in kleine letters het 
                modelnummer van de case. Bij sommige modellen staat het op de onderkant van de case, dicht bij de Lightning- 
                of USB-C-poort.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Op het oortje</h3>
              <p className="mb-4">
                Elk AirPods-oortje heeft ook een eigen modelnummer. Dit staat in zeer kleine letters op de steel van de AirPod, 
                aan de binnenkant (de kant die naar je gezicht wijst wanneer je de AirPod draagt). Je hebt mogelijk een vergrootglas 
                of de camera van je telefoon nodig om het te kunnen lezen.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Praktische tip:</strong> Gebruik de camera van je iPhone en zoom in op de tekst. In goed licht is het 
                  modelnummer dan duidelijk leesbaar. Het nummer op de linker en rechter AirPod verschilt – de linker heeft een 
                  ander modelnummer dan de rechter.
                </p>
              </div>

              {/* Section: Overzichtstabel */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Overzichtstabel: modelnummer → officiële naam → generatie
              </h2>

              <p className="mb-6">
                Hieronder vind je een compleet overzicht van alle AirPods-modelnummers, zodat je precies kunt bepalen welke 
                generatie je hebt:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Modelnummer</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Generatie</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Opmerkingen</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A1523 / A1722</td>
                      <td className="py-3 px-4">AirPods</td>
                      <td className="py-3 px-4">1e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">Originele AirPods (2016)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2031 / A2032</td>
                      <td className="py-3 px-4">AirPods</td>
                      <td className="py-3 px-4">2e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">Met H1-chip, "Hey Siri"</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2564 / A2565</td>
                      <td className="py-3 px-4">AirPods</td>
                      <td className="py-3 px-4">3e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">Nieuw design, ruimtelijke audio</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A3058 / A3059</td>
                      <td className="py-3 px-4">AirPods</td>
                      <td className="py-3 px-4">4e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">Standaard of met ANC</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2084 / A2083</td>
                      <td className="py-3 px-4">AirPods Pro</td>
                      <td className="py-3 px-4">1e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">Met rubberen oortips</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2931 / A2699</td>
                      <td className="py-3 px-4">AirPods Pro</td>
                      <td className="py-3 px-4">2e generatie</td>
                      <td className="py-3 px-4 text-muted-foreground">H2-chip, verbeterde ANC, USB-C</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Oplaadcases</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Modelnummer</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Case voor</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A1602</td>
                      <td className="py-3 px-4">AirPods 1/2</td>
                      <td className="py-3 px-4 text-muted-foreground">Lightning, geen draadloos laden</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A1938</td>
                      <td className="py-3 px-4">AirPods 1/2</td>
                      <td className="py-3 px-4 text-muted-foreground">Met draadloos laden</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2566</td>
                      <td className="py-3 px-4">AirPods 3</td>
                      <td className="py-3 px-4 text-muted-foreground">Lightning, MagSafe compatibel</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2897</td>
                      <td className="py-3 px-4">AirPods Pro 1</td>
                      <td className="py-3 px-4 text-muted-foreground">MagSafe, Lightning</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">A2700</td>
                      <td className="py-3 px-4">AirPods Pro 2</td>
                      <td className="py-3 px-4 text-muted-foreground">MagSafe, USB-C, speaker</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section: Wat heb je nodig */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Hoe weet ik of ik een losse AirPod, oplaadcase of complete set nodig heb?
              </h2>

              <p className="mb-4">
                Niet iedereen heeft hetzelfde nodig. Afhankelijk van je situatie is het slim om alleen een onderdeel te vervangen 
                in plaats van een volledige set te kopen:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Wanneer koop je een losse linker of rechter AirPod?</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Je bent één AirPod kwijtgeraakt (de andere werkt nog prima)</li>
                <li>Eén AirPod is kapot of de batterij gaat veel sneller leeg dan de andere</li>
                <li>Het geluid in één oortje is merkbaar slechter geworden</li>
              </ul>

              <p className="mb-6">
                In deze gevallen bestel je eenvoudig een <Link to="/losse-airpods" className="text-primary hover:underline">losse linker of rechter AirPod</Link> van 
                dezelfde generatie.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Wanneer is een nieuwe oplaadcase logischer?</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Je case is kwijtgeraakt maar je oortjes werken nog</li>
                <li>De case laadt niet meer op (kapotte poort of batterij)</li>
                <li>Het deksel sluit niet meer goed</li>
                <li>Je wilt upgraden naar een case met draadloos laden</li>
              </ul>

              <p className="mb-6">
                Bekijk dan onze <Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcases</Link> en 
                kies de juiste voor jouw generatie.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Wanneer is een complete set beter?</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Beide AirPods hebben een slechte batterij (na 2-3 jaar intensief gebruik normaal)</li>
                <li>Meerdere onderdelen zijn kapot of kwijt</li>
                <li>Je wilt upgraden naar een nieuwere generatie</li>
              </ul>

              {/* Section: Compatibiliteit */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Compatibiliteit per generatie (losse AirPod combineren)
              </h2>

              <p className="mb-6">
                Een veelgestelde vraag is: "Kan ik een nieuwe losse AirPod combineren met mijn bestaande AirPod?" Het antwoord 
                is ja, mits het dezelfde generatie is. Hier een overzicht:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods 1e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met andere AirPods 1e generatie. Niet compatibel met 2e, 3e of 4e generatie.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods 2e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met AirPods 2e generatie. De case van generatie 1 en 2 is wel uitwisselbaar.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods 3e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met AirPods 3e generatie. Compleet nieuw design, niet compatibel met oudere generaties.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods 4e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met AirPods 4e generatie (let op: standaard en ANC-versie zijn onderling wel compatibel).</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods Pro 1e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met AirPods Pro 1e generatie. Niet compatibel met Pro 2.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">AirPods Pro 2e generatie</h4>
                  <p className="text-sm text-muted-foreground">Alleen te combineren met AirPods Pro 2e generatie. Nieuwe H2-chip en USB-C case.</p>
                </div>
              </div>

              <p className="mb-8">
                RePairPods levert uitsluitend originele Apple-onderdelen. Hierdoor verloopt de pairing net zo soepel als bij 
                een nieuwe set van Apple. Je nieuwe losse AirPod wordt automatisch herkend en werkt direct samen met je bestaande oortje.
              </p>

              {/* Section: Koppelen */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Hoe koppel je een nieuwe losse AirPod of oplaadcase?
              </h2>

              <p className="mb-4">
                Heb je een vervangende AirPod of oplaadcase ontvangen? Het koppelen is eenvoudig. Volg deze stappen:
              </p>

              <ol className="list-decimal pl-6 mb-8 space-y-3">
                <li>Plaats je nieuwe AirPod (of beide AirPods) in de oplaadcase</li>
                <li>Sluit het deksel en wacht 30 seconden</li>
                <li>Open het deksel en houd de case dicht bij je iPhone</li>
                <li>Op je iPhone verschijnt een animatie – tik op <strong>Verbind</strong></li>
                <li>Volg de instructies op het scherm om de configuratie te voltooien</li>
                <li>Klaar! Je AirPods zijn nu gekoppeld en klaar voor gebruik</li>
              </ol>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Werkt het niet?</strong> Houd de setup-knop op de achterkant van de case 15 seconden ingedrukt totdat 
                  het lampje oranje en dan wit knippert. Probeer daarna opnieuw te verbinden.
                </p>
              </div>

              {/* Section: Wanneer vervangen */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Wanneer is het slim om je AirPods te vervangen?
              </h2>

              <p className="mb-4">
                AirPods zijn niet eeuwig. Na ongeveer 2-3 jaar intensief gebruik merk je dat de batterij minder lang meegaat. 
                Dit is normaal voor lithium-ion batterijen. Maar wanneer is vervanging echt nodig?
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Korte batterijduur:</strong> Als je AirPods nog maar 1-2 uur meegaan in plaats van 4-5 uur</li>
                <li><strong>Eén kant kwijt:</strong> Een losse vervanging is dan veel goedkoper dan een nieuwe set</li>
                <li><strong>Geluidsproblemen:</strong> Krakend geluid, volume-verschillen, of problemen met ruisonderdrukking</li>
                <li><strong>Verbindingsproblemen:</strong> AirPods die steeds de verbinding verliezen of niet meer koppelen</li>
                <li><strong>Fysieke schade:</strong> Kapotte case, gebroken oortje, of niet-werkende sensoren</li>
              </ul>

              <p className="mb-8">
                In veel gevallen hoef je niet een complete set te kopen. Een <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPod</Link> of 
                {' '}<Link to="/losse-oplaadcases" className="text-primary hover:underline">oplaadcase</Link> is vaak de slimmere 
                en duurzamere keuze. Je bespaart geld én voorkomt onnodig elektronisch afval.
              </p>

              {/* Section: Waarom RePairPods */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Waarom kiezen voor RePairPods?
              </h2>

              <p className="mb-4">
                RePairPods is dé specialist in losse AirPods en oplaadcases in Nederland. Dit is waarom klanten voor ons kiezen:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>100% origineel</strong> – Elk product is een origineel Apple-onderdeel.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Zorgvuldig getest</strong> – Getest op geluid, batterij en Bluetooth.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Specialist</strong> – Precies het onderdeel dat je nodig hebt.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Snel geleverd</strong> – Bestel voor 17:00, dezelfde dag verzonden.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Afhalen in Amsterdam</strong> – Uitproberen voor je koopt.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>14 dagen retour</strong> – Niet tevreden? Geld terug.</span>
                </div>
              </div>

              {/* Section: Conclusie */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Conclusie
              </h2>

              <p className="mb-4">
                Als je weet welke AirPods je hebt, kun je precies het juiste onderdeel bestellen. Of je nu een losse linker 
                AirPod nodig hebt, een rechter oortje, of een nieuwe oplaadcase – met de juiste informatie voorkom je 
                miskopen en compatibiliteitsproblemen.
              </p>

              <p className="mb-8">
                Gebruik de methodes in deze gids om je modelnummer te achterhalen: via je iPhone-instellingen, in de 
                oplaadcase, of op het oortje zelf. Vergelijk vervolgens het nummer met de tabel hierboven, en je weet 
                precies welke generatie je hebt.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Veelgestelde vragen over "Welke AirPods heb ik?"
              </h2>

              <div className="mb-12">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Weet je welk model je hebt?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Bekijk dan onze losse AirPods en oplaadcases, en bestel precies het onderdeel dat je nodig hebt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/losse-airpods" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Bekijk losse AirPods
                  </Link>
                  <Link 
                    to="/losse-oplaadcases" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Bekijk oplaadcases
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogWelkeAirpods;
