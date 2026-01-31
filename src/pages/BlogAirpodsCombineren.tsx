import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, X, Lightbulb, AlertCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const faqItems = [
  {
    question: 'Kan ik een 2e generatie oortje combineren met 3e generatie?',
    answer: 'Nee, dit werkt niet. Oortjes van verschillende generaties zijn niet compatibel met elkaar. Een linker 2e generatie oortje kan niet samenwerken met een rechter 3e generatie. Je hebt altijd twee oortjes van exact dezelfde generatie nodig.',
  },
  {
    question: 'Moet ik altijd beide oortjes vernieuwen?',
    answer: 'Nee, dat hoeft niet. Als je één oortje kwijt bent of kapot is, kun je prima alleen dat ene oortje vervangen. De voorwaarde is dat het vervangende oortje exact dezelfde generatie is als je bestaande oortje. Je kunt dan gewoon verder met je originele set.',
  },
  {
    question: 'Werkt een vervangende case met mijn oude oortjes?',
    answer: 'Ja, maar alleen als de case van dezelfde generatie is. Een 3e generatie case werkt alleen met 3e generatie oortjes. Let ook op het type aansluiting: sommige generaties hebben zowel Lightning als USB-C varianten.',
  },
  {
    question: 'Hoe weet ik zeker dat ik de juiste generatie bestel?',
    answer: 'Check het modelnummer van je huidige oortjes via je telefoon (Instellingen > Bluetooth > tik op het i-icoon) of kijk naar het modelnummer in je oplaadcase. Op onze pagina "Welk model heb ik?" helpen we je stap voor stap om je exacte model te identificeren.',
  },
  {
    question: 'Waarom werkt mijn vervangende oortje niet met mijn oude?',
    answer: 'De meest voorkomende oorzaak is een mismatch in generatie. Controleer of beide oortjes exact hetzelfde modelnummer hebben. Andere oorzaken kunnen zijn: de oortjes zijn niet goed gereset, de contactpunten zijn vuil, of je hebt per ongeluk een namaakproduct.',
  },
  {
    question: 'Kan ik Pro 1 combineren met Pro 2?',
    answer: 'Nee, Pro 1e generatie en Pro 2e generatie zijn niet compatibel met elkaar. Hoewel ze er vergelijkbaar uitzien, hebben ze verschillende chips en firmware. Je hebt altijd twee oortjes van dezelfde Pro-generatie nodig.',
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
        <title>Werkt een vervangend oortje met mijn oude set? | Earbud restore</title>
        <meta
          name="description"
          content="Ontdek of een vervangend oortje werkt met je bestaande set. Alles over compatibiliteit per generatie en het koppelen van vervangende onderdelen."
        />
        <meta name="keywords" content="vervangend oortje compatibel, oortje combineren, vervanging met oude set, onderdelen per generatie, compatibiliteit oortjes" />
        <link rel="canonical" href="https://earbudrestore.nl/blog/oortjes-combineren-per-generatie" />
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
              Werkt een vervangend oortje met mijn oude set?
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
          <div className="prose prose-lg max-w-none text-foreground/90">
            
            {/* Inleiding - USER FIRST */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Je hebt één oortje verloren of misschien is de batterij van je linker of rechter oortje 
              niet meer wat het was. Je andere oortje werkt nog prima, dus de logische vraag is: 
              <strong> kan ik gewoon een los oortje kopen en die laten samenwerken met mijn oude oortje?</strong>
            </p>

            <p className="mb-8">
              Het korte antwoord: ja, dat kan – maar alleen als je de juiste generatie kiest. 
              Dit geldt voor draadloze oortjes zoals Apple AirPods. Onderdelen combineren per generatie 
              is cruciaal voor een goede werking. In dit artikel leggen we precies uit welke combinaties 
              wél werken, welke niet, en hoe je ervoor zorgt dat je vervangende oortje perfect samenwerkt 
              met je bestaande set.
            </p>

            {/* Sectie 1 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Waarom generatie en model zo belangrijk zijn
            </h2>
            
            <p className="mb-4">
              Fabrikanten brengen regelmatig nieuwe generaties oortjes uit, en hoewel ze er vaak vergelijkbaar 
              uitzien, zitten er onder de motorkap belangrijke verschillen. Elke generatie heeft zijn 
              eigen chip (zoals de H1 of H2), specifieke firmware, en unieke hardware-kenmerken.
            </p>

            <p className="mb-4">
              <strong>De gouden regel:</strong> je vervangende oortje moet exact dezelfde generatie 
              en hetzelfde model zijn als je bestaande oortje. Een 2e generatie oortje kan niet samenwerken 
              met een 3e generatie, ook al passen ze fysiek misschien in dezelfde case.
            </p>

            <p className="mb-4">
              Het is belangrijk om het verschil te begrijpen tussen de verschillende productielijnen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Standaard oortjes</strong> – Beschikbaar in 1e, 2e, 3e en 4e generatie. 
                Elk met eigen ontwerp en specificaties.
              </li>
              <li>
                <strong>Pro-oortjes</strong> – De premium variant met noise cancelling, beschikbaar 
                in 1e en 2e generatie. Niet compatibel met de standaard oortjes.
              </li>
            </ul>

            <p className="mb-8">
              Weet je niet precies welke generatie je hebt? Bekijk dan onze uitgebreide gids{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                "Welk model heb ik?"
              </Link>{' '}
              waarin we je helpen om je exacte model te identificeren.
            </p>

            {/* Sectie 2 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Zo check je eerst welk model je hebt
            </h2>

            <p className="mb-6">
              Voordat je een vervangend oortje bestelt, is het essentieel om te weten welke generatie je 
              momenteel hebt. Er zijn twee eenvoudige manieren om dit te achterhalen:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Methode 1: Via je telefoon</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Zorg dat je oortjes verbonden zijn met je telefoon.</li>
              <li>Ga naar Instellingen → Bluetooth.</li>
              <li>Tik op het (i)-icoon naast je oortjes.</li>
              <li>Scroll naar beneden om het modelnummer te zien.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Methode 2: Via je oplaadcase of oortje</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Open je oplaadcase en kijk aan de binnenkant van het deksel voor het modelnummer.</li>
              <li>Op het oortje zelf staat het modelnummer in kleine letters onder de "kop".</li>
            </ul>

            <p className="mb-8">
              Met dit modelnummer kun je precies bepalen welke generatie je hebt. Voor een complete 
              lijst van alle modelnummers en wat ze betekenen, bekijk onze{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                modelnummer-gids
              </Link>.
            </p>

            {/* Sectie 3 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Overzicht per generatie – welke combinaties werken wél en welke niet?
            </h2>

            <p className="mb-6">
              Laten we per generatie bekijken wat de regels zijn voor het combineren van onderdelen. 
              Dit helpt je om precies te begrijpen wat wel en niet werkt.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">1e en 2e generatie</h3>

            <p className="mb-4">
              De 1e en 2e generatie lijken visueel sterk op elkaar, maar zijn <strong>niet 
              onderling te combineren</strong>. De 1e generatie heeft de W1-chip, terwijl de 2e generatie 
              de nieuwere H1-chip heeft. Deze chips communiceren niet met elkaar.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>2e gen links + 2e gen rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>1e gen links + 2e gen rechts = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p className="mb-8">
              Heb je 2e generatie oortjes? Bekijk dan onze{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                losse 2e generatie onderdelen
              </Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3e generatie</h3>

            <p className="mb-4">
              De 3e generatie introduceerde een volledig nieuw ontwerp met kortere stelen 
              en Spatial Audio. Deze zijn <strong>alleen compatibel met andere 3e generatie oortjes</strong>.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>3e gen links + 3e gen rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>3e gen + 2e gen = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p className="mb-8">
              Bekijk ons aanbod{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                losse 3e generatie onderdelen
              </Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">4e generatie</h3>

            <p className="mb-4">
              De nieuwste standaard oortjes, uitgebracht in 2024, zijn er in twee varianten: 
              met en zonder Active Noise Cancellation. Belangrijk: ook deze twee varianten zijn 
              <strong> onderling niet compatibel</strong>.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>4e gen (standaard) + 4e gen (standaard) = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>4e gen (ANC) + 4e gen (ANC) = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>4e gen (standaard) + 4e gen (ANC) = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p className="mb-8">
              Bekijk onze{' '}
              <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                losse 4e generatie onderdelen
              </Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pro 1e generatie</h3>

            <p className="mb-4">
              De originele Pro-oortjes met Active Noise Cancellation en siliconen oortips. 
              Deze werken <strong>alleen samen met andere Pro 1e generatie oortjes</strong>. 
              Ze zijn niet compatibel met de standaard oortjes of met Pro 2.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Pro 1 links + Pro 1 rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>Pro 1 + Pro 2 = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p className="mb-8">
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                losse Pro 1e generatie onderdelen
              </Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pro 2e generatie</h3>

            <p className="mb-4">
              De nieuwste Pro-variant met de H2-chip, verbeterde noise cancellation en Adaptive Audio. 
              Let op: er zijn twee versies – met Lightning en met USB-C aansluiting op de case. 
              De <strong>oortjes zelf zijn wel onderling compatibel</strong>, maar de cases niet.
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Pro 2 links + Pro 2 rechts = <strong>werkt</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>Pro 2 + Pro 1 = <strong>werkt niet</strong></span>
              </li>
            </ul>

            <p className="mb-8">
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                losse Pro 2e generatie onderdelen
              </Link>.
            </p>

            <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Twijfel je?</p>
                <p className="text-sm mb-0"><strong>Bij Earbud restore leveren we altijd de juiste generatie</strong> wanneer je correct kiest op onze website. Neem contact met ons op – we helpen je graag.</p>
              </div>
            </div>

            {/* Sectie 4 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Kan ik links en rechts van elkaar mixen?
            </h2>

            <p className="mb-4">
              Dit is een veelgestelde vraag, en het antwoord is duidelijk: <strong>nee, dit werkt niet</strong>.
            </p>

            <p className="mb-4">
              Beide oortjes in een set vormen samen één geheel. Ze communiceren constant met elkaar 
              en met je oplaadcase via dezelfde chip en firmware. Wanneer je probeert om oortjes van 
              verschillende generaties te combineren, gebeurt het volgende:
            </p>

            <ul>
              <li>De oortjes herkennen elkaar niet als "paar"</li>
              <li>Pairing met je telefoon mislukt of is instabiel</li>
              <li>Audio kan uit sync raken tussen links en rechts</li>
              <li>Functies zoals automatisch wisselen tussen apparaten werken niet</li>
              <li>De batterijstatus wordt niet correct weergegeven</li>
            </ul>

            <p>
              Kortom: het mixen van generaties levert een frustrerende ervaring op. Investeer liever 
              in een vervangend oortje van de juiste generatie – dat werkt gegarandeerd.
            </p>

            {/* Sectie 5 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Hoe koppel ik een vervangend oortje aan mijn set?
            </h2>

            <p className="mb-4">
              Heb je het juiste vervangende oortje gevonden? Dan is het koppelen eenvoudig:
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: vervangend oortje koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Plaats beide oortjes in de case</strong> – Je bestaande oortje én het vervangende oortje.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Sluit de case</strong> – Wacht 15 seconden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case bij je telefoon</strong> – Houd de case dicht bij je telefoon.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Houd de setup-knop ingedrukt</strong> – Tot het lampje wit knippert.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                  <span><strong>Volg de instructies op het scherm</strong> – Tik op "Verbind".</span>
                </li>
              </ol>
            </Card>

            <p className="mb-8">
              Voor een uitgebreidere handleiding, bekijk onze{' '}
              <Link to="/blog/vervangend-oortje-koppelen" className="text-primary hover:underline">
                complete koppelgids
              </Link>.
            </p>

            {/* Sectie 6 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Waarom is een los onderdeel voordeliger dan een complete set?
            </h2>

            <p className="mb-4">
              Als je één oortje kwijt bent of kapot is, hoef je niet een hele set te kopen. 
              Een vervangend onderdeel biedt meerdere voordelen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Bespaart geld</strong> – Een los onderdeel kost een fractie van een complete set.
              </li>
              <li>
                <strong>Duurzamer</strong> – Waarom weggooien wat nog werkt? Vervang alleen wat kapot is.
              </li>
              <li>
                <strong>Behoud je bestaande set</strong> – Je case en werkende oortje blijven gewoon in gebruik.
              </li>
            </ul>

            <p className="mb-8">
              Bekijk ons aanbod{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">
                losse oortjes per generatie
              </Link>{' '}
              en{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                losse oplaadcases
              </Link>.
            </p>

            {/* FAQ Sectie */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Veelgestelde vragen
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Gerelateerde artikelen */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Gerelateerde artikelen
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <Link to="/blog/oortje-kwijt-vervangen" className="text-primary hover:underline">
                  Oortje kwijt? Zo vervang je alleen wat je mist
                </Link>
              </li>
              <li>
                <Link to="/blog/vervangend-oortje-koppelen" className="text-primary hover:underline">
                  Vervangend oortje koppelen: complete handleiding
                </Link>
              </li>
              <li>
                <Link to="/welke-airpods" className="text-primary hover:underline">
                  Welk model heb ik? Modelnummer checker
                </Link>
              </li>
              <li>
                <Link to="/losse-airpods" className="text-primary hover:underline">
                  Bekijk alle losse oortjes
                </Link>
              </li>
              <li>
                <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                  Bekijk alle losse oplaadcases
                </Link>
              </li>
            </ul>

            {/* Disclaimer */}
            <div className="mt-12 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Earbud restore is een onafhankelijke aanbieder en niet gelieerd aan Apple Inc. 
                Alle genoemde merknamen zijn eigendom van hun respectievelijke eigenaren.
              </p>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogAirpodsCombineren;
