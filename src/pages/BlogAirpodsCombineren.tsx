import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Kan ik een AirPod 2e generatie combineren met 3e generatie?',
    answer: 'Nee, dit werkt niet. AirPods van verschillende generaties zijn niet compatibel met elkaar. Een linker AirPod 2e generatie kan niet samenwerken met een rechter AirPod 3e generatie. Je hebt altijd twee oortjes van exact dezelfde generatie nodig.',
  },
  {
    question: 'Moet ik altijd beide AirPods vernieuwen?',
    answer: 'Nee, dat hoeft niet. Als je één AirPod kwijt bent of kapot is, kun je prima alleen dat ene oortje vervangen. De voorwaarde is dat de vervangende AirPod exact dezelfde generatie is als je bestaande oortje. Je kunt dan gewoon verder met je originele set.',
  },
  {
    question: 'Werkt een nieuwe case met mijn oude AirPods?',
    answer: 'Ja, maar alleen als de case van dezelfde generatie is. Een AirPods 3e generatie case werkt alleen met AirPods 3e generatie oortjes. Let ook op het type aansluiting: sommige generaties hebben zowel Lightning als USB-C varianten.',
  },
  {
    question: 'Hoe weet ik zeker dat ik de juiste generatie bestel?',
    answer: 'Check het modelnummer van je huidige AirPods via je iPhone (Instellingen > Bluetooth > tik op het i-icoon bij je AirPods) of kijk naar het modelnummer in je oplaadcase. Op onze pagina "Welke AirPods heb ik?" helpen we je stap voor stap om je exacte model te identificeren.',
  },
  {
    question: 'Waarom werkt mijn nieuwe losse AirPod niet met mijn oude?',
    answer: 'De meest voorkomende oorzaak is een mismatch in generatie. Controleer of beide oortjes exact hetzelfde modelnummer hebben. Andere oorzaken kunnen zijn: de AirPods zijn niet goed gereset, de contactpunten zijn vuil, of je hebt per ongeluk een namaakproduct gekocht.',
  },
  {
    question: 'Kan ik AirPods Pro 1 combineren met AirPods Pro 2?',
    answer: 'Nee, AirPods Pro 1e generatie en AirPods Pro 2e generatie zijn niet compatibel met elkaar. Hoewel ze er vergelijkbaar uitzien, hebben ze verschillende chips en firmware. Je hebt altijd twee oortjes van dezelfde Pro-generatie nodig.',
  },
];

const BlogAirpodsCombineren = () => {
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
        <title>Werkt een nieuwe losse AirPod met mijn oude oortje? | RePairPods</title>
        <meta
          name="description"
          content="Ontdek of een nieuwe losse AirPod werkt met je oude oortje. Alles over AirPods combineren per generatie, compatibiliteit en het koppelen van vervangende AirPods."
        />
        <meta name="keywords" content="werkt losse airpod met oude airpod, losse airpod combineren, nieuwe airpod met oude set, airpods combineren per generatie, airpods compatibiliteit" />
        <link rel="canonical" href="https://repairpods.nl/blog/airpods-combineren-per-generatie" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="flex-1">
        <article className="container mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-8 max-w-4xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-xs md:text-sm text-muted-foreground hover:text-primary mb-4 md:mb-6"
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            Terug naar blog
          </Link>

          {/* Article header */}
          <header className="mb-6 md:mb-10">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight">
              Werkt een nieuwe losse AirPod met mijn oude oortje?
            </h1>
            <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                Januari 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                9 min
              </span>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            
            {/* Inleiding */}
            <p className="text-lg leading-relaxed">
              Je hebt één AirPod verloren of misschien is de batterij van je linker of rechter oortje 
              niet meer wat het was. Je andere AirPod werkt nog prima, dus de logische vraag is: 
              <strong> kan ik gewoon een losse AirPod kopen en die laten samenwerken met mijn oude oortje?</strong>
            </p>

            <p>
              Het korte antwoord: ja, dat kan – maar alleen als je de juiste generatie kiest. 
              AirPods combineren per generatie is cruciaal voor een goede werking. In dit artikel 
              leggen we precies uit welke combinaties wél werken, welke niet, en hoe je ervoor zorgt 
              dat je nieuwe losse AirPod perfect samenwerkt met je bestaande set.
            </p>

            {/* Sectie 1 */}
            <h2>Waarom generatie en model zo belangrijk zijn</h2>
            
            <p>
              Apple brengt regelmatig nieuwe generaties AirPods uit, en hoewel ze er vaak vergelijkbaar 
              uitzien, zitten er onder de motorkap belangrijke verschillen. Elke generatie heeft zijn 
              eigen chip (zoals de H1 of H2), specifieke firmware, en unieke hardware-kenmerken.
            </p>

            <p>
              <strong>De gouden regel:</strong> je losse vervangende AirPod moet exact dezelfde generatie 
              en hetzelfde model zijn als je bestaande oortje. Een AirPod 2e generatie kan niet samenwerken 
              met een AirPod 3e generatie, ook al passen ze fysiek misschien in dezelfde case.
            </p>

            <p>
              Het is belangrijk om het verschil te begrijpen tussen de verschillende AirPods-lijnen:
            </p>

            <ul>
              <li>
                <strong>AirPods (standaard)</strong> – Beschikbaar in 1e, 2e, 3e en 4e generatie. 
                Elk met eigen ontwerp en specificaties.
              </li>
              <li>
                <strong>AirPods Pro</strong> – De premium variant met noise cancelling, beschikbaar 
                in 1e en 2e generatie. Niet compatibel met de standaard AirPods.
              </li>
            </ul>

            <p>
              Weet je niet precies welke generatie je hebt? Bekijk dan onze uitgebreide gids{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                "Welke AirPods heb ik?"
              </Link>{' '}
              waarin we je helpen om je exacte model te identificeren.
            </p>

            {/* Sectie 2 */}
            <h2>Zo check je eerst welke AirPods je hebt</h2>

            <p>
              Voordat je een losse AirPod bestelt, is het essentieel om te weten welke generatie je 
              momenteel hebt. Er zijn twee eenvoudige manieren om dit te achterhalen:
            </p>

            <p><strong>Methode 1: Via je iPhone</strong></p>
            <ol>
              <li>Zorg dat je AirPods verbonden zijn met je iPhone.</li>
              <li>Ga naar Instellingen → Bluetooth.</li>
              <li>Tik op het (i)-icoon naast je AirPods.</li>
              <li>Scroll naar beneden om het modelnummer te zien.</li>
            </ol>

            <p><strong>Methode 2: Via je oplaadcase of oortje</strong></p>
            <ul>
              <li>Open je oplaadcase en kijk aan de binnenkant van het deksel voor het modelnummer.</li>
              <li>Op de AirPod zelf staat het modelnummer in kleine letters onder de "kop" van het oortje.</li>
            </ul>

            <p>
              Met dit modelnummer kun je precies bepalen welke generatie je hebt. Voor een complete 
              lijst van alle modelnummers en wat ze betekenen, bekijk onze{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                modelnummer-gids
              </Link>.
            </p>

            {/* Sectie 3 */}
            <h2>Overzicht per generatie – welke combinaties werken wél en welke niet?</h2>

            <p>
              Laten we per generatie bekijken wat de regels zijn voor het combineren van AirPods. 
              Dit helpt je om precies te begrijpen wat wel en niet werkt.
            </p>

            <h3>AirPods 1e en 2e generatie</h3>

            <p>
              De AirPods 1e en 2e generatie lijken visueel sterk op elkaar, maar zijn <strong>niet 
              onderling te combineren</strong>. De 1e generatie heeft de W1-chip, terwijl de 2e generatie 
              de nieuwere H1-chip heeft. Deze chips communiceren niet met elkaar.
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod 2e gen links + AirPod 2e gen rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPod 1e gen links + AirPod 2e gen rechts = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p>
              Heb je AirPods 2e generatie? Bekijk dan onze{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                losse AirPods 2e generatie
              </Link>.
            </p>

            <h3>AirPods 3e generatie</h3>

            <p>
              De AirPods 3e generatie introduceerde een volledig nieuw ontwerp met kortere stelen 
              en Spatial Audio. Deze zijn <strong>alleen compatibel met andere 3e generatie oortjes</strong>.
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod 3e gen links + AirPod 3e gen rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPod 3e gen + AirPod 2e gen = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p>
              Bekijk ons aanbod{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                losse AirPods 3e generatie
              </Link>.
            </p>

            <h3>AirPods 4e generatie</h3>

            <p>
              De nieuwste standaard AirPods, uitgebracht in 2024, zijn er in twee varianten: 
              met en zonder Active Noise Cancellation. Belangrijk: ook deze twee varianten zijn 
              <strong> onderling niet compatibel</strong>.
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod 4e gen (standaard) + AirPod 4e gen (standaard) = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod 4e gen (ANC) + AirPod 4e gen (ANC) = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPod 4e gen (standaard) + AirPod 4e gen (ANC) = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                losse AirPods 4e generatie
              </Link>.
            </p>

            <h3>AirPods Pro 1e generatie</h3>

            <p>
              De originele AirPods Pro met Active Noise Cancellation en siliconen oortips. 
              Deze werken <strong>alleen samen met andere AirPods Pro 1e generatie oortjes</strong>. 
              Ze zijn niet compatibel met de standaard AirPods of met AirPods Pro 2.
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod Pro 1 links + AirPod Pro 1 rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPod Pro 1 + AirPod Pro 2 = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                losse AirPods Pro 1e generatie
              </Link>.
            </p>

            <h3>AirPods Pro 2e generatie</h3>

            <p>
              De nieuwste Pro-variant met de H2-chip, verbeterde noise cancellation en Adaptive Audio. 
              Let op: er zijn twee versies – met Lightning en met USB-C aansluiting op de case. 
              De <strong>oortjes zelf zijn wel onderling compatibel</strong>, maar de cases niet.
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPod Pro 2 links + AirPod Pro 2 rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPod Pro 2 + AirPod Pro 1 = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                losse AirPods Pro 2e generatie
              </Link>.
            </p>

            <p>
              <strong>Bij RePairPods leveren we altijd de juiste generatie</strong> wanneer je correct 
              kiest op onze website. Twijfel je? Neem dan contact met ons op – we helpen je graag.
            </p>

            {/* Sectie 4 */}
            <h2>Kan ik links en rechts van elkaar mixen (bijv. links 2e gen, rechts 3e gen)?</h2>

            <p>
              Dit is een veelgestelde vraag, en het antwoord is duidelijk: <strong>nee, dit werkt niet</strong>.
            </p>

            <p>
              Beide AirPods in een set vormen samen één geheel. Ze communiceren constant met elkaar 
              en met je oplaadcase via dezelfde chip en firmware. Wanneer je probeert om oortjes van 
              verschillende generaties te combineren, gebeurt het volgende:
            </p>

            <ul>
              <li>De AirPods herkennen elkaar niet als "paar"</li>
              <li>Pairing met je iPhone mislukt of is instabiel</li>
              <li>Audio kan uit sync raken tussen links en rechts</li>
              <li>Functies zoals automatisch wisselen tussen apparaten werken niet</li>
              <li>De batterijstatus wordt niet correct weergegeven</li>
            </ul>

            <p>
              Kortom: het mixen van generaties levert een frustrerende ervaring op. Investeer liever 
              in een losse AirPod van de juiste generatie – dat werkt gegarandeerd.
            </p>

            {/* Sectie 5 */}
            <h2>Hoe werkt het koppelen van een nieuwe losse AirPod aan je bestaande set?</h2>

            <p>
              Heb je de juiste losse AirPod besteld? Dan is het koppelen aan je bestaande set eenvoudig. 
              Volg dit stappenplan om je nieuwe en oude AirPod als één set te laten werken:
            </p>

            <ol>
              <li>
                <strong>Plaats beide oortjes in de case</strong> – Doe je bestaande AirPod en de nieuwe 
                vervangende AirPod samen in je oplaadcase.
              </li>
              <li>
                <strong>Sluit het deksel</strong> – Laat de case gesloten en wacht ongeveer 30 seconden.
              </li>
              <li>
                <strong>Open het deksel bij je iPhone</strong> – Houd de case met geopend deksel dicht 
                bij je iPhone (binnen 5 cm).
              </li>
              <li>
                <strong>Houd de setup-knop ingedrukt</strong> – Druk op de knop aan de achterkant van 
                de case en houd deze ingedrukt tot het statuslampje wit knippert.
              </li>
              <li>
                <strong>Volg de instructies op je iPhone</strong> – Er verschijnt een setup-animatie. 
                Tik op "Verbind" en volg de stappen.
              </li>
              <li>
                <strong>Test beide oortjes</strong> – Speel wat muziek af en controleer of beide 
                AirPods geluid geven.
              </li>
              <li>
                <strong>Klaar!</strong> – Je AirPods werken nu weer als complete set.
              </li>
            </ol>

            <p>
              Dit proces is identiek aan het koppelen van een officiële Apple-vervanging. Zolang je 
              een originele AirPod van de juiste generatie hebt, werkt het probleemloos.
            </p>

            {/* Sectie 6 */}
            <h2>Werkt een nieuwe oplaadcase met mijn oude AirPods?</h2>

            <p>
              Naast losse AirPods is ook de oplaadcase een onderdeel dat kan kapotgaan of kwijtraken. 
              De vraag is dan: kan een nieuwe case samenwerken met je bestaande oortjes?
            </p>

            <p>
              <strong>Het antwoord: ja, maar alleen binnen dezelfde generatie.</strong>
            </p>

            <p>
              Een aantal voorbeelden:
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPods 3e gen oortjes + Case 3e gen = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>AirPods 3e gen oortjes + Case 2e gen = <strong>werkt niet</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AirPods Pro 2 oortjes + MagSafe Case Pro 2 (USB-C) = <strong>werkt</strong></span>
              </li>
            </ul>

            <p>
              Bij de AirPods Pro 2 zijn er twee case-varianten: Lightning en USB-C. De oortjes 
              werken met beide cases, dus je kunt eventueel upgraden naar de USB-C versie als je 
              dat prettiger vindt.
            </p>

            <p>
              Bekijk ons complete aanbod van{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                losse oplaadcases
              </Link>{' '}
              per generatie.
            </p>

            {/* Sectie 7 */}
            <h2>Veelvoorkomende problemen bij het combineren van losse AirPods</h2>

            <p>
              Soms gaat het koppelen niet in één keer goed. Hier zijn de meest voorkomende problemen 
              en hoe je ze oplost:
            </p>

            <h3>Probleem: Eén AirPod geeft geen geluid</h3>
            <p>
              <strong>Mogelijke oorzaak:</strong> De AirPods zijn niet correct gekoppeld, of de 
              contactpunten in de case zijn vuil.
            </p>
            <p>
              <strong>Oplossing:</strong> Reset je AirPods (houd de knop 15 seconden ingedrukt tot 
              het lampje oranje en dan wit knippert). Maak de contactpunten schoon met een droge, 
              pluisvrije doek.
            </p>

            <h3>Probleem: AirPods worden niet als "paar" herkend</h3>
            <p>
              <strong>Mogelijke oorzaak:</strong> Je hebt per ongeluk oortjes van verschillende 
              generaties, of één van de oortjes is namaak.
            </p>
            <p>
              <strong>Oplossing:</strong> Controleer de modelnummers van beide oortjes. Ze moeten 
              exact overeenkomen. Bij twijfel, check via je iPhone-instellingen.
            </p>

            <h3>Probleem: Verschil in volume of balans tussen links en rechts</h3>
            <p>
              <strong>Mogelijke oorzaak:</strong> De speaker of mesh van één oortje is verstopt, 
              of er is een firmware-mismatch.
            </p>
            <p>
              <strong>Oplossing:</strong> Maak de speakers voorzichtig schoon. Update je AirPods 
              naar de laatste firmware door ze in de case te leggen terwijl je iPhone in de buurt is.
            </p>

            <h3>Probleem: Koppeling blijft mislukken</h3>
            <p>
              <strong>Mogelijke oorzaak:</strong> De vervangende AirPod is van een verkeerde generatie, 
              of het is geen origineel Apple-product.
            </p>
            <p>
              <strong>Oplossing:</strong> Controleer nogmaals of de generaties overeenkomen. 
              Bij RePairPods krijg je gegarandeerd originele onderdelen van de juiste generatie.
            </p>

            {/* Sectie 8 */}
            <h2>Waarom een originele losse AirPod wél werkt (en namaak vaak niet)</h2>

            <p>
              Een cruciale factor voor succesvolle AirPods-compatibiliteit is de <strong>originaliteit 
              van het onderdeel</strong>. Alleen originele Apple AirPods hebben:
            </p>

            <ul>
              <li>De juiste Apple-chip (W1, H1, of H2 afhankelijk van generatie)</li>
              <li>Officiële firmware die updates ontvangt</li>
              <li>Correcte Bluetooth-protocollen voor naadloze koppeling</li>
              <li>Betrouwbare batterij-indicatie en oplaadgedrag</li>
            </ul>

            <p>
              <strong>Namaak AirPods</strong> daarentegen hebben vaak:
            </p>

            <ul>
              <li>Goedkope chips die niet compatibel zijn met Apple's ecosysteem</li>
              <li>Pairing-problemen – ze verbinden niet stabiel of helemaal niet</li>
              <li>Geen synchronisatie met originele oortjes</li>
              <li>Onbetrouwbare batterijweergave</li>
              <li>Inferieure geluidskwaliteit</li>
            </ul>

            <p>
              Bij <strong>RePairPods</strong> verkopen we uitsluitend 100% originele Apple-onderdelen. 
              Elk product wordt getest op geluidskwaliteit, batterijcapaciteit en Bluetooth-connectiviteit 
              voordat het naar jou wordt verzonden. Zo weet je zeker dat je vervangende AirPod perfect 
              samenwerkt met je bestaande set.
            </p>

            {/* Sectie 9 */}
            <h2>Stap-voor-stap: zo bestel je een compatibele losse AirPod bij RePairPods</h2>

            <p>
              Klaar om je verloren of defecte AirPod te vervangen? Volg deze eenvoudige stappen:
            </p>

            <ol>
              <li>
                <strong>Bepaal je generatie</strong> – Gebruik onze gids{' '}
                <Link to="/welke-airpods" className="text-primary hover:underline">
                  "Welke AirPods heb ik?"
                </Link>{' '}
                om je exacte model te identificeren.
              </li>
              <li>
                <strong>Check welke kant je mist</strong> – Links of rechts? Kijk eventueel in je 
                case welke holte leeg is.
              </li>
              <li>
                <strong>Ga naar de juiste categorie</strong> – Bezoek onze pagina{' '}
                <Link to="/losse-airpods" className="text-primary hover:underline">
                  losse AirPods
                </Link>{' '}
                en selecteer je generatie.
              </li>
              <li>
                <strong>Kies "links" of "rechts"</strong> – Selecteer het oortje dat je nodig hebt.
              </li>
              <li>
                <strong>Kies je conditie</strong> – Van nieuw tot gebruikt, afhankelijk van je budget.
              </li>
              <li>
                <strong>Plaats je bestelling</strong> – Vandaag besteld, morgen in huis!
              </li>
            </ol>

            <p>
              Direct naar de juiste generatie? Hier zijn de links:
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

            {/* Sectie 10 */}
            <h2>Samenvatting – werkt een nieuwe losse AirPod met jouw oude oortje?</h2>

            <p>
              Laten we het nog één keer helder samenvatten:
            </p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>
                  <strong>Ja, het werkt</strong> – als je een losse AirPod koopt van exact dezelfde 
                  generatie en hetzelfde model als je bestaande oortje.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>
                  <strong>Nee, het werkt niet</strong> – als je probeert om verschillende generaties 
                  te combineren (bijv. 2e gen met 3e gen, of Pro 1 met Pro 2).
                </span>
              </li>
            </ul>

            <p>
              Het draait allemaal om <strong>de juiste modelkeuze</strong> en het gebruiken van een 
              <strong> origineel Apple-onderdeel</strong>. Wanneer je aan beide voorwaarden voldoet, 
              werkt je nieuwe losse AirPod naadloos samen met je bestaande set – alsof er nooit iets 
              is gebeurd.
            </p>

            {/* Conclusie */}
            <h2>Conclusie</h2>

            <p>
              Een kwijtgeraakte of defecte AirPod hoeft niet te betekenen dat je hele set verloren is. 
              Met de juiste generatie en de juiste kant (links of rechts) kun je simpelweg één oortje 
              vervangen en weer verder luisteren zoals je gewend was.
            </p>

            <p>
              Het belangrijkste is om <strong>eerst je model te identificeren</strong> voordat je 
              bestelt. Gebruik onze{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                modelnummer-checker
              </Link>{' '}
              als je twijfelt, en kies altijd voor originele onderdelen om compatibiliteitsproblemen 
              te voorkomen.
            </p>

            <p>
              Bij RePairPods maken we het je gemakkelijk: selecteer je generatie, kies links of rechts, 
              en ontvang morgen je vervangende AirPod. 100% origineel, getest, en klaar om te koppelen 
              met je bestaande set.
            </p>

            {/* FAQ Section */}
            <h2>Veelgestelde vragen over losse AirPods combineren</h2>
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
              Klaar om je AirPod te vervangen?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wil je een losse AirPod bestellen die gegarandeerd samenwerkt met jouw huidige set? 
              Bekijk onze losse AirPods per generatie en kies precies het oortje dat bij jouw model past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/losse-airpods"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Bekijk losse AirPods
              </Link>
              <Link
                to="/welke-airpods"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                Welke AirPods heb ik?
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogAirpodsCombineren;



