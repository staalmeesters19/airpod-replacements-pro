import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, AlertCircle, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const faqItems = [
  {
    question: 'Hoe koppel ik een losse AirPod aan mijn bestaande set?',
    answer: 'Plaats beide AirPods (je bestaande en de nieuwe) in de oplaadcase. Sluit de case 15 seconden, open hem daarna bij je iPhone en houd de setup-knop ingedrukt tot het lampje wit knippert. Volg de instructies op je scherm om te verbinden. Zorg dat de nieuwe AirPod dezelfde generatie is als je bestaande.',
  },
  {
    question: 'Moet ik altijd beide AirPods tegelijk resetten?',
    answer: 'Ja, voor het beste resultaat reset je altijd beide AirPods tegelijk via de oplaadcase. De reset-knop op de case reset beide oortjes als set, zodat ze daarna weer correct samenwerken als paar.',
  },
  {
    question: 'Werkt een vervangende case direct met mijn AirPods?',
    answer: 'In de meeste gevallen wel, mits de case dezelfde generatie is als je oortjes. Plaats je AirPods in de nieuwe case, sluit hem even, en open hem bij je iPhone. Meestal verschijnt er een pop-up om te verbinden. Zo niet, gebruik dan de reset-procedure.',
  },
  {
    question: 'Waarom zie ik mijn AirPods niet bij Bluetooth?',
    answer: 'Dit kan verschillende oorzaken hebben: de case is leeg, Bluetooth staat uit, of de AirPods moeten gereset worden. Laad je case op, controleer of Bluetooth aanstaat, en voer eventueel een volledige reset uit door de knop 15 seconden ingedrukt te houden.',
  },
  {
    question: 'Kan ik mijn AirPods koppelen met meerdere apparaten?',
    answer: 'Ja, AirPods met een H1 of H2 chip kunnen automatisch wisselen tussen Apple-apparaten die zijn ingelogd met dezelfde Apple ID. Voor niet-Apple apparaten moet je ze handmatig koppelen via Bluetooth met de setup-knop.',
  },
  {
    question: 'Wat doe ik als één AirPod na het koppelen geen geluid geeft?',
    answer: 'Controleer eerst of beide oortjes dezelfde generatie zijn. Maak de contactpunten in de case en op de AirPod schoon met een droge doek. Voer daarna een volledige reset uit en koppel opnieuw. Als het probleem aanhoudt, kan het oortje defect zijn.',
  },
];

const BlogAirpodsOpnieuwPairen = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AirPods opnieuw pairen: zo koppel je een vervangend oortje of oplaadcase | RePairPods</title>
        <meta
          name="description"
          content="Leer hoe je AirPods opnieuw koppelt na het vervangen van een oortje of case. Stap-voor-stap uitleg voor resetten en pairen van alle AirPods generaties."
        />
        <meta name="keywords" content="airpods opnieuw pairen, airpods opnieuw koppelen, losse airpod koppelen, airpods resetten en verbinden, airpods verbinden met iphone" />
        <link rel="canonical" href="https://repairpods.nl/blog/airpods-opnieuw-pairen" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-6 lg:px-10 py-8 max-w-4xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Terug naar blog
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AirPods opnieuw pairen: zo koppel je een vervangend oortje of oplaadcase
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Januari 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                10 min leestijd
              </span>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            
            {/* Inleiding */}
            <p className="text-lg leading-relaxed">
              Er zijn verschillende situaties waarin je je <strong>AirPods opnieuw moet pairen</strong>. 
              Misschien heb je een losse AirPod vervangen omdat je er één kwijt was. Of je hebt een 
              nieuwe oplaadcase gekocht omdat de oude kapot ging. Het kan ook zijn dat je AirPods 
              ineens niet meer goed worden herkend door je iPhone, of dat je ze wilt koppelen met 
              een nieuw toestel.
            </p>

            <p>
              Goed nieuws: <strong>AirPods opnieuw koppelen</strong> is vaak een stuk simpeler dan 
              mensen denken. Met de juiste stappen heb je binnen een paar minuten weer een werkende 
              set. In dit artikel leggen we precies uit hoe je dit doet – of je nu een vervangend 
              oortje hebt, een nieuwe case, of gewoon verbindingsproblemen ervaart.
            </p>

            <p>
              Bij <strong>RePairPods</strong> zijn we gespecialiseerd in{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPods</Link> en{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcases</Link>. 
              We weten dus precies welke stappen je moet volgen om alles weer soepel te laten werken.
            </p>

            {/* Sectie 1 */}
            <h2>Wanneer moet je je AirPods opnieuw pairen?</h2>

            <p>
              Voordat we in de stappen duiken, is het handig om te weten in welke situaties je je 
              AirPods opnieuw moet koppelen. Hier zijn de meest voorkomende scenario's:
            </p>

            <ul>
              <li>
                <strong>Je hebt een nieuwe linker of rechter AirPod gekocht</strong> – Een losse 
                vervangende AirPod moet gekoppeld worden met je bestaande oortje om als set te werken.
              </li>
              <li>
                <strong>Je hebt een vervangende oplaadcase</strong> – Een nieuwe case moet "kennismaken" 
                met je bestaande AirPods.
              </li>
              <li>
                <strong>Eén AirPod geeft geen geluid meer of wordt niet herkend</strong> – Vaak is 
                opnieuw koppelen de oplossing voor dit probleem.
              </li>
              <li>
                <strong>Je AirPods verbinden niet meer automatisch met je iPhone</strong> – Een reset 
                en opnieuw pairen lost dit meestal op.
              </li>
              <li>
                <strong>Je wilt je AirPods koppelen met een nieuw apparaat</strong> – Bij een nieuwe 
                iPhone of ander toestel moet je de verbinding opnieuw instellen.
              </li>
            </ul>

            <p>
              In al deze gevallen is <strong>resetten en opnieuw koppelen</strong> vaak de oplossing. 
              Het klinkt misschien technisch, maar het is eigenlijk heel eenvoudig.
            </p>

            {/* Sectie 2 */}
            <h2>Belangrijk vóór je begint: controleer model en generatie</h2>

            <p>
              Als je een vervangende AirPod hebt gekocht, is er één cruciaal punt: de nieuwe AirPod 
              moet <strong>exact dezelfde generatie</strong> zijn als je bestaande oortje. Een AirPod 
              2e generatie werkt niet samen met een AirPod 3e generatie, ook al lijken ze op elkaar.
            </p>

            <p>
              Controleer daarom altijd het volgende voordat je begint met koppelen:
            </p>

            <ul>
              <li>
                <strong>Check de generatie</strong> – AirPods 2, 3, 4, Pro 1 of Pro 2? Dit moet 
                overeenkomen met je bestaande AirPod.
              </li>
              <li>
                <strong>Zorg dat links/rechts klopt</strong> – Heb je de linker of rechter AirPod 
                verloren? Bestel dan exact die kant.
              </li>
            </ul>

            <p>
              Weet je niet precies welke generatie je hebt? Bekijk dan onze uitgebreide gids{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                "Welke AirPods heb ik?"
              </Link>{' '}
              waarin we je helpen om je exacte model te identificeren aan de hand van modelnummers.
            </p>

            {/* Sectie 3 */}
            <h2>AirPods opnieuw koppelen met een vervangend oortje (algemene stappen)</h2>

            <p>
              Heb je een losse AirPod gekocht en wil je deze koppelen met je bestaande oortje? 
              Volg dan dit stappenplan. Deze stappen werken voor alle generaties:
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: losse AirPod koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Doe beide AirPods in de case</strong> – Plaats je bestaande AirPod én de nieuwe vervangende AirPod samen in de oplaadcase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Sluit de case</strong> – Laat de case gesloten en wacht minimaal 15 seconden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case bij je iPhone</strong> – Houd de geopende case dicht bij je iPhone (binnen 5 cm).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Houd de setup-knop ingedrukt</strong> – Druk op de knop aan de achterkant van de case en houd deze ingedrukt totdat het statuslampje wit knippert.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                  <span><strong>Volg de instructies op het scherm</strong> – Er verschijnt een animatie op je iPhone. Tik op "Verbind" en volg de stappen.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">6</span>
                  <span><strong>Test beide oortjes</strong> – Speel wat muziek af en controleer of zowel links als rechts geluid geeft.</span>
                </li>
              </ol>
            </Card>

            <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Tips voor succesvol koppelen:</p>
                <ul className="text-sm mb-0">
                  <li>Zorg dat Bluetooth aanstaat op je iPhone.</li>
                  <li>Zorg dat beide AirPods en de case voldoende zijn opgeladen.</li>
                  <li>Houd je iPhone ontgrendeld tijdens het koppelproces.</li>
                </ul>
              </div>
            </div>

            {/* Sectie 4 */}
            <h2>Stappen per generatie</h2>

            <p>
              De bovenstaande stappen werken voor alle AirPods-generaties. Er zijn echter enkele 
              kleine verschillen per model waar je rekening mee kunt houden:
            </p>

            <h3>AirPods 2e, 3e en 4e generatie</h3>

            <p>
              De procedure voor de standaard AirPods is bij alle generaties hetzelfde. Het 
              belangrijkste is dat je ervoor zorgt dat de losse vervangende AirPod <strong>exact 
              dezelfde generatie</strong> is als je bestaande oortje. Een AirPod 2e generatie kan 
              niet samenwerken met een 3e of 4e generatie.
            </p>

            <p>
              Bij de AirPods 4 zijn er twee varianten: met en zonder Active Noise Cancellation. 
              Let op: ook deze zijn <strong>onderling niet compatibel</strong>.
            </p>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                losse AirPods 2e generatie
              </Link>,{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                3e generatie
              </Link> of{' '}
              <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                4e generatie
              </Link>.
            </p>

            <h3>AirPods Pro 1e en 2e generatie</h3>

            <p>
              Bij de AirPods Pro geldt hetzelfde principe: de vervangende AirPod moet dezelfde 
              Pro-generatie zijn. Een AirPod Pro 1 kan niet samenwerken met een AirPod Pro 2.
            </p>

            <p>
              Een klein verschil: bij sommige AirPods Pro-modellen zit het statuslampje aan de 
              <strong> voorkant</strong> van de case (tussen de oortjes) in plaats van aan de 
              buitenkant. Dit maakt voor de procedure zelf niet uit – je kijkt gewoon naar het 
              lampje dat wit moet knipperen.
            </p>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                losse AirPods Pro 1e generatie
              </Link> of{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                Pro 2e generatie
              </Link>.
            </p>

            {/* Sectie 5 */}
            <h2>Vervangende oplaadcase koppelen aan bestaande AirPods</h2>

            <p>
              Heb je je oplaadcase verloren of is deze kapot? Met een vervangende case kun je 
              gewoon verder met je bestaande AirPods. Zo koppel je een nieuwe case:
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: nieuwe oplaadcase koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Plaats je AirPods in de nieuwe case</strong> – Doe beide oortjes in de vervangende oplaadcase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Sluit de case</strong> – Wacht een paar seconden zodat de AirPods contact maken met de case.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case bij je iPhone</strong> – Meestal verschijnt er automatisch een pop-up om te verbinden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Geen pop-up? Gebruik de reset-knop</strong> – Houd de knop achterop de case 15 seconden ingedrukt tot het lampje wit knippert, en volg dan de instructies.</span>
                </li>
              </ol>
            </Card>

            <p>
              <strong>Belangrijk:</strong> ook bij cases geldt dat de generatie moet overeenkomen. 
              Een AirPods 3e generatie case werkt alleen met AirPods 3e generatie oortjes. Bij de 
              AirPods Pro 2 zijn er twee case-varianten (Lightning en USB-C), maar de oortjes 
              werken met beide.
            </p>

            <p>
              Bekijk ons complete aanbod{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                losse oplaadcases
              </Link>.
            </p>

            {/* Sectie 6 */}
            <h2>AirPods resetten als ze niet goed koppelen</h2>

            <p>
              Soms werkt het standaard koppelproces niet meteen. In dat geval kan een volledige 
              reset helpen. Dit is vooral handig als:
            </p>

            <ul>
              <li>Je AirPods niet stabiel verbinden</li>
              <li>Eén AirPod "los" gedrag blijft vertonen</li>
              <li>De AirPods niet verschijnen in je Bluetooth-lijst</li>
              <li>Je ze wilt koppelen met een compleet nieuw Apple-account</li>
            </ul>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Stappenplan: AirPods volledig resetten
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Verwijder de AirPods uit je Bluetooth-lijst</strong> – Ga naar Instellingen → Bluetooth → tik op het (i)-icoon bij je AirPods → kies "Vergeet dit apparaat".</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Plaats beide AirPods in de case</strong> – Sluit de case en wacht 30 seconden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case</strong> – Laat de AirPods in de case zitten.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Houd de knop 15 seconden ingedrukt</strong> – Het lampje knippert eerst oranje, daarna wit. Laat dan los.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                  <span><strong>Verbind opnieuw</strong> – Houd de geopende case bij je iPhone. Er verschijnt een setup-animatie. Tik op "Verbind".</span>
                </li>
              </ol>
            </Card>

            <p>
              Na deze reset zijn je AirPods als nieuw en kun je ze opnieuw instellen. Dit lost de 
              meeste verbindingsproblemen op, ook na het plaatsen van een vervangende AirPod.
            </p>

            {/* Sectie 7 */}
            <h2>Veelvoorkomende problemen bij het opnieuw pairen (en de oplossingen)</h2>

            <p>
              Loopt het koppelen niet helemaal soepel? Hier zijn de meest voorkomende problemen 
              en hoe je ze oplost:
            </p>

            <div className="space-y-4 my-6">
              <Card className="p-4">
                <h4 className="font-semibold mb-2">Probleem: Eén AirPod speelt geen geluid af</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mogelijke oorzaken:</strong> Niet goed gekoppeld, vuile contactpunten, 
                  of verkeerde generatie.
                </p>
                <p className="text-sm">
                  <strong>Oplossing:</strong> Voer een volledige reset uit en koppel opnieuw. 
                  Maak de contactpunten in de case en op de AirPod schoon met een droge, pluisvrije 
                  doek. Controleer of beide oortjes dezelfde generatie zijn.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-2">Probleem: AirPods worden niet herkend door iPhone</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mogelijke oorzaken:</strong> Bluetooth staat uit, case is leeg, of 
                  reset is nodig.
                </p>
                <p className="text-sm">
                  <strong>Oplossing:</strong> Controleer of Bluetooth aanstaat. Laad de case 
                  minimaal 15 minuten op. Voer daarna de reset-procedure uit.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-2">Probleem: Nieuwe losse AirPod wordt niet gesynchroniseerd</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mogelijke oorzaken:</strong> Verkeerde generatie of namaakproduct.
                </p>
                <p className="text-sm">
                  <strong>Oplossing:</strong> Controleer het modelnummer via{' '}
                  <Link to="/welke-airpods" className="text-primary hover:underline">
                    onze modelnummer-gids
                  </Link>. Zorg dat je een origineel Apple-onderdeel hebt van dezelfde generatie.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-2">Probleem: Setup-animatie verschijnt niet op iPhone</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mogelijke oorzaken:</strong> AirPods niet in pairing-modus, te ver van 
                  iPhone, of iPhone is vergrendeld.
                </p>
                <p className="text-sm">
                  <strong>Oplossing:</strong> Ontgrendel je iPhone, houd de case binnen 5 cm, 
                  en houd de setup-knop ingedrukt tot het lampje wit knippert.
                </p>
              </Card>
            </div>

            {/* Sectie 8 */}
            <h2>Waarom een originele losse AirPod belangrijk is voor goed koppelen</h2>

            <p>
              Een veelgestelde vraag is: maakt het uit of mijn vervangende AirPod origineel is? 
              Het korte antwoord: <strong>ja, absoluut</strong>.
            </p>

            <p>
              Originele Apple AirPods hebben specifieke chips (W1, H1 of H2, afhankelijk van de 
              generatie) en officiële firmware die naadloos communiceert met je andere oortje en 
              je Apple-apparaten. Dit zorgt voor:
            </p>

            <ul>
              <li>Stabiele en snelle Bluetooth-koppeling</li>
              <li>Correcte batterijweergave voor beide oortjes</li>
              <li>Automatisch wisselen tussen Apple-apparaten</li>
              <li>Goede geluidskwaliteit en noise cancellation (bij Pro)</li>
              <li>Firmware-updates via je iPhone</li>
            </ul>

            <p>
              <strong>Namaak of "lookalike" AirPods</strong> kunnen soms wel koppelen, maar vaak 
              met problemen:
            </p>

            <ul>
              <li>Instabiele verbinding of regelmatige dropouts</li>
              <li>Geen correcte batterij-indicatie</li>
              <li>Slechte geluidskwaliteit</li>
              <li>Noise cancellation werkt niet of slecht</li>
              <li>Kunnen niet als "paar" samenwerken met een originele AirPod</li>
            </ul>

            <p>
              Bij <strong>RePairPods</strong> verkopen we uitsluitend 100% originele Apple-onderdelen. 
              Elk product wordt getest op geluid, batterijcapaciteit en Bluetooth-connectiviteit 
              voordat het naar jou wordt verzonden. Zo weet je zeker dat je vervangende AirPod 
              probleemloos koppelt met je bestaande set.
            </p>

            {/* Sectie 9 */}
            <h2>Stappenplan: zo bestel je een vervangend oortje of oplaadcase bij RePairPods</h2>

            <p>
              Heb je een vervangende AirPod of oplaadcase nodig? Zo bestel je het juiste onderdeel:
            </p>

            <ol>
              <li>
                <strong>Bepaal je generatie</strong> – Gebruik onze{' '}
                <Link to="/welke-airpods" className="text-primary hover:underline">
                  modelnummer-checker
                </Link>{' '}
                om te achterhalen welke AirPods je hebt.
              </li>
              <li>
                <strong>Check wat je nodig hebt</strong> – Mis je de linker AirPod, de rechter, 
                of heb je een nieuwe oplaadcase nodig?
              </li>
              <li>
                <strong>Ga naar de juiste categorie</strong> – Bezoek{' '}
                <Link to="/losse-airpods" className="text-primary hover:underline">
                  losse AirPods
                </Link>{' '}
                of{' '}
                <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                  losse oplaadcases
                </Link>.
              </li>
              <li>
                <strong>Selecteer je generatie</strong> – Kies AirPods 2, 3, 4, Pro 1 of Pro 2.
              </li>
              <li>
                <strong>Kies "enkel links", "enkel rechts" of de juiste case</strong> – Selecteer 
                precies wat je nodig hebt.
              </li>
              <li>
                <strong>Kies je conditie en bestel</strong> – Van nieuw tot gebruikt, afhankelijk 
                van je budget. Vandaag besteld, morgen in huis!
              </li>
              <li>
                <strong>Volg de koppelinstructies</strong> – Gebruik de stappen uit dit artikel 
                om je nieuwe onderdeel te koppelen.
              </li>
            </ol>

            <p>
              Direct naar je generatie:
            </p>
            <ul>
              <li>
                <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                  Losse AirPods 2e generatie
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                  Losse AirPods 3e generatie
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                  Losse AirPods 4e generatie
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                  Losse AirPods Pro 1e generatie
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                  Losse AirPods Pro 2e generatie
                </Link>
              </li>
            </ul>

            {/* Conclusie */}
            <h2>Conclusie</h2>

            <p>
              Een vervangende AirPod of oplaadcase koppelen is eenvoudiger dan je misschien dacht. 
              De sleutel tot succes:
            </p>

            <ul>
              <li>
                <strong>Kies de juiste generatie</strong> – Je vervangende onderdeel moet exact 
                dezelfde generatie zijn als je bestaande AirPods.
              </li>
              <li>
                <strong>Volg de reset- en pairing-stappen</strong> – Met de stappen in dit artikel 
                heb je binnen een paar minuten een werkende set.
              </li>
              <li>
                <strong>Gebruik originele onderdelen</strong> – Alleen originele Apple AirPods 
                garanderen een stabiele koppeling en goede werking.
              </li>
            </ul>

            <p>
              Het belangrijkste om te onthouden: <strong>je hoeft geen nieuwe complete set te 
              kopen</strong> als één onderdeel kapot of kwijt is. Met de juiste vervangende AirPod 
              of case én de juiste stappen, luisteren je AirPods weer als nieuw.
            </p>

            {/* FAQ Section */}
            <h2>Veelgestelde vragen over AirPods opnieuw pairen</h2>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-8 mb-12">
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
          <div className="bg-secondary/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Vervangend oortje of nieuwe case nodig?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Heb je na het opnieuw koppelen toch een vervangend oortje of een nieuwe oplaadcase 
              nodig? Bekijk onze losse AirPods en oplaadcases per generatie en bestel precies wat je mist.
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
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                Bekijk oplaadcases
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogAirpodsOpnieuwPairen;



