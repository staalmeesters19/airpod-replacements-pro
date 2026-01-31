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
    question: 'Hoe koppel ik een vervangend oortje aan mijn bestaande set?',
    answer: 'Plaats beide oortjes (je bestaande en de vervanging) in de oplaadcase. Sluit de case 15 seconden, open hem daarna bij je telefoon en houd de setup-knop ingedrukt tot het lampje wit knippert. Volg de instructies op je scherm om te verbinden. Zorg dat het vervangende oortje dezelfde generatie is als je bestaande.',
  },
  {
    question: 'Moet ik altijd beide oortjes tegelijk resetten?',
    answer: 'Ja, voor het beste resultaat reset je altijd beide oortjes tegelijk via de oplaadcase. De reset-knop op de case reset beide oortjes als set, zodat ze daarna weer correct samenwerken als paar.',
  },
  {
    question: 'Werkt een vervangende case direct met mijn oortjes?',
    answer: 'In de meeste gevallen wel, mits de case dezelfde generatie is als je oortjes. Plaats je oortjes in de vervangende case, sluit hem even, en open hem bij je telefoon. Meestal verschijnt er een pop-up om te verbinden. Zo niet, gebruik dan de reset-procedure.',
  },
  {
    question: 'Waarom zie ik mijn oortjes niet bij Bluetooth?',
    answer: 'Dit kan verschillende oorzaken hebben: de case is leeg, Bluetooth staat uit, of de oortjes moeten gereset worden. Laad je case op, controleer of Bluetooth aanstaat, en voer eventueel een volledige reset uit door de knop 15 seconden ingedrukt te houden.',
  },
  {
    question: 'Kan ik mijn oortjes koppelen met meerdere apparaten?',
    answer: 'Ja, oortjes met een H1 of H2 chip kunnen automatisch wisselen tussen apparaten die zijn ingelogd met hetzelfde account. Voor andere apparaten moet je ze handmatig koppelen via Bluetooth met de setup-knop.',
  },
  {
    question: 'Wat doe ik als één oortje na het koppelen geen geluid geeft?',
    answer: 'Controleer eerst of beide oortjes dezelfde generatie zijn. Maak de contactpunten in de case en op het oortje schoon met een droge doek. Voer daarna een volledige reset uit en koppel opnieuw. Als het probleem aanhoudt, kan het oortje defect zijn.',
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
        <title>Vervangend oortje koppelen: zo pair je een nieuw onderdeel | Earbud restore</title>
        <meta
          name="description"
          content="Leer hoe je een vervangend oortje of oplaadcase koppelt. Stap-voor-stap uitleg voor resetten en pairen na vervanging van een los onderdeel."
        />
        <meta name="keywords" content="oortje koppelen, vervangend oortje pairen, oplaadcase koppelen, resetten verbinden, onderdeel vervangen" />
        <link rel="canonical" href="https://earbudrestore.nl/blog/vervangend-oortje-koppelen" />
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
              Vervangend oortje koppelen: zo pair je een los onderdeel
            </h1>
            <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                Januari 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                10 min
              </span>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            
            {/* Inleiding - USER FIRST */}
            <p className="text-lg leading-relaxed">
              Je hebt een <strong>vervangend oortje</strong> gekocht – misschien omdat je er één kwijt was, 
              of omdat de batterij het begaf. Nu heb je het onderdeel in handen, maar hoe zorg je ervoor dat 
              het goed samenwerkt met je bestaande set? Of misschien heb je een nieuwe oplaadcase aangeschaft 
              omdat de oude kapot ging. In beide gevallen moet je het onderdeel opnieuw koppelen.
            </p>

            <p>
              Goed nieuws: <strong>een vervangend onderdeel koppelen</strong> is vaak een stuk simpeler dan 
              mensen denken. Dit geldt voor draadloze oortjes zoals Apple AirPods en vergelijkbare modellen. 
              Met de juiste stappen heb je binnen een paar minuten weer een werkende set.
            </p>

            <p>
              Bij <strong>Earbud restore</strong> zijn we gespecialiseerd in{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">losse oortjes</Link> en{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcases</Link>. 
              We weten dus precies welke stappen je moet volgen om alles weer soepel te laten werken.
            </p>

            {/* Sectie 1 */}
            <h2>Wanneer moet je een onderdeel opnieuw pairen?</h2>

            <p>
              Voordat we in de stappen duiken, is het handig om te weten in welke situaties je een 
              onderdeel opnieuw moet koppelen. Hier zijn de meest voorkomende scenario's:
            </p>

            <ul>
              <li>
                <strong>Je hebt een vervangend linker of rechter oortje gekocht</strong> – Een los 
                vervangend oortje moet gekoppeld worden met je bestaande oortje om als set te werken.
              </li>
              <li>
                <strong>Je hebt een vervangende oplaadcase</strong> – Een nieuwe case moet "kennismaken" 
                met je bestaande oortjes.
              </li>
              <li>
                <strong>Eén oortje geeft geen geluid meer of wordt niet herkend</strong> – Vaak is 
                opnieuw koppelen de oplossing voor dit probleem.
              </li>
              <li>
                <strong>Je oortjes verbinden niet meer automatisch met je telefoon</strong> – Een reset 
                en opnieuw pairen lost dit meestal op.
              </li>
              <li>
                <strong>Je wilt je oortjes koppelen met een nieuw apparaat</strong> – Bij een nieuwe 
                telefoon of ander toestel moet je de verbinding opnieuw instellen.
              </li>
            </ul>

            <p>
              In al deze gevallen is <strong>resetten en opnieuw koppelen</strong> vaak de oplossing. 
              Het klinkt misschien technisch, maar het is eigenlijk heel eenvoudig.
            </p>

            {/* Sectie 2 */}
            <h2>Belangrijk vóór je begint: controleer model en generatie</h2>

            <p>
              Als je een vervangend oortje hebt gekocht, is er één cruciaal punt: het vervangende oortje 
              moet <strong>exact dezelfde generatie</strong> zijn als je bestaande oortje. Een 2e generatie 
              oortje werkt niet samen met een 3e generatie, ook al lijken ze op elkaar.
            </p>

            <p>
              Controleer daarom altijd het volgende voordat je begint met koppelen:
            </p>

            <ul>
              <li>
                <strong>Check de generatie</strong> – 2e, 3e, 4e, Pro 1 of Pro 2? Dit moet 
                overeenkomen met je bestaande oortje.
              </li>
              <li>
                <strong>Zorg dat links/rechts klopt</strong> – Heb je de linker of rechter 
                verloren? Bestel dan exact die kant.
              </li>
            </ul>

            <p>
              Weet je niet precies welke generatie je hebt? Bekijk dan onze uitgebreide gids{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                "Welk model heb ik?"
              </Link>{' '}
              waarin we je helpen om je exacte model te identificeren aan de hand van modelnummers.
            </p>

            {/* Sectie 3 */}
            <h2>Vervangend oortje koppelen (algemene stappen)</h2>

            <p>
              Heb je een los oortje gekocht en wil je deze koppelen met je bestaande oortje? 
              Volg dan dit stappenplan. Deze stappen werken voor alle generaties:
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: vervangend oortje koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Doe beide oortjes in de case</strong> – Plaats je bestaande oortje én het vervangende oortje samen in de oplaadcase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Sluit de case</strong> – Laat de case gesloten en wacht minimaal 15 seconden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case bij je telefoon</strong> – Houd de geopende case dicht bij je telefoon (binnen 5 cm).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Houd de setup-knop ingedrukt</strong> – Druk op de knop aan de achterkant van de case en houd deze ingedrukt totdat het statuslampje wit knippert.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                  <span><strong>Volg de instructies op het scherm</strong> – Er verschijnt een animatie op je scherm. Tik op "Verbind" en volg de stappen.</span>
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
                  <li>Zorg dat Bluetooth aanstaat op je telefoon.</li>
                  <li>Zorg dat beide oortjes en de case voldoende zijn opgeladen.</li>
                  <li>Houd je telefoon ontgrendeld tijdens het koppelproces.</li>
                </ul>
              </div>
            </div>

            {/* Sectie 4 */}
            <h2>Stappen per generatie</h2>

            <p>
              De bovenstaande stappen werken voor alle generaties. Er zijn echter enkele 
              kleine verschillen per model waar je rekening mee kunt houden:
            </p>

            <h3>Standaard oortjes (2e, 3e en 4e generatie)</h3>

            <p>
              De procedure voor de standaard oortjes is bij alle generaties hetzelfde. Het 
              belangrijkste is dat je ervoor zorgt dat het vervangende oortje <strong>exact 
              dezelfde generatie</strong> is als je bestaande oortje. Een 2e generatie kan 
              niet samenwerken met een 3e of 4e generatie.
            </p>

            <p>
              Bij de 4e generatie zijn er twee varianten: met en zonder Active Noise Cancellation. 
              Let op: ook deze zijn <strong>onderling niet compatibel</strong>.
            </p>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                losse 2e generatie
              </Link>,{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                3e generatie
              </Link> of{' '}
              <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                4e generatie
              </Link>.
            </p>

            <h3>Pro-oortjes (1e en 2e generatie)</h3>

            <p>
              Bij de Pro-oortjes geldt hetzelfde principe: het vervangende oortje moet dezelfde 
              Pro-generatie zijn. Een Pro 1 kan niet samenwerken met een Pro 2.
            </p>

            <p>
              Een klein verschil: bij sommige Pro-modellen zit het statuslampje aan de 
              <strong> voorkant</strong> van de case (tussen de oortjes) in plaats van aan de 
              buitenkant. Dit maakt voor de procedure zelf niet uit – je kijkt gewoon naar het 
              lampje dat wit moet knipperen.
            </p>

            <p>
              Bekijk onze{' '}
              <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                losse Pro 1e generatie
              </Link> of{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                Pro 2e generatie
              </Link>.
            </p>

            {/* Sectie 5 */}
            <h2>Vervangende oplaadcase koppelen aan bestaande oortjes</h2>

            <p>
              Heb je je oplaadcase verloren of is deze kapot? Met een vervangende case kun je 
              gewoon verder met je bestaande oortjes. Zo koppel je een vervangende case:
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: vervangende oplaadcase koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span><strong>Plaats je oortjes in de vervangende case</strong> – Doe beide oortjes in de vervangende oplaadcase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span><strong>Sluit de case</strong> – Wacht een paar seconden zodat de oortjes contact maken met de case.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span><strong>Open de case bij je telefoon</strong> – Meestal verschijnt er automatisch een pop-up om te verbinden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span><strong>Geen pop-up? Gebruik de reset-knop</strong> – Houd de knop achterop de case 15 seconden ingedrukt tot het lampje wit knippert, en volg dan de instructies.</span>
                </li>
              </ol>
            </Card>

            <p>
              <strong>Belangrijk:</strong> ook bij cases geldt dat de generatie moet overeenkomen. 
              Een 3e generatie case werkt alleen met 3e generatie oortjes. Bij de Pro 2 zijn er 
              twee case-varianten (Lightning en USB-C), maar de oortjes werken met beide.
            </p>

            <p>
              Bekijk ons complete aanbod{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                losse oplaadcases
              </Link>.
            </p>

            {/* Sectie 6 */}
            <h2>Problemen oplossen bij het koppelen</h2>

            <p>
              Lukt het koppelen niet meteen? Geen zorgen – vaak is er een eenvoudige oplossing. 
              Hier zijn de meest voorkomende problemen en hoe je ze oplost:
            </p>

            <h3>Probleem: De oortjes worden niet herkend</h3>
            <ul>
              <li>Controleer of de case voldoende is opgeladen (minimaal 10%)</li>
              <li>Zorg dat beide oortjes correct in de case zitten en contact maken</li>
              <li>Probeer de reset-knop 15 seconden ingedrukt te houden</li>
            </ul>

            <h3>Probleem: Slechts één oortje werkt na het koppelen</h3>
            <ul>
              <li>Controleer of beide oortjes dezelfde generatie zijn</li>
              <li>Maak de contactpunten schoon met een droge, zachte doek</li>
              <li>Reset beide oortjes opnieuw en probeer nogmaals</li>
            </ul>

            <h3>Probleem: Het lampje knippert oranje in plaats van wit</h3>
            <ul>
              <li>Oranje betekent vaak dat de batterij bijna leeg is – laad eerst op</li>
              <li>Het kan ook duiden op een fout – probeer een volledige reset</li>
            </ul>

            <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Nog steeds problemen?</p>
                <p className="text-sm mb-0">
                  Neem contact op met <strong>Earbud restore</strong> – we helpen je graag verder. 
                  Onze klantenservice is bereikbaar via WhatsApp of e-mail.
                </p>
              </div>
            </div>

            {/* Sectie 7 */}
            <h2>Wanneer vervangen slimmer is dan repareren</h2>

            <p>
              Soms zijn verbindingsproblemen een symptoom van een groter probleem. In deze 
              gevallen is een los onderdeel vervangen vaak de verstandigste keuze:
            </p>

            <ul>
              <li>
                <strong>De batterij is sterk afgenomen</strong> – Na 2-3 jaar intensief gebruik 
                kan de batterijcapaciteit merkbaar zijn gedaald.
              </li>
              <li>
                <strong>Eén oortje geeft geen geluid meer</strong> – Dit kan duiden op een 
                defecte speaker die niet te repareren is.
              </li>
              <li>
                <strong>Je case laadt niet meer goed op</strong> – De batterij of laadpoort 
                kan defect zijn.
              </li>
            </ul>

            <p>
              In al deze gevallen is een{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">
                los vervangend oortje
              </Link>{' '}
              of een{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">
                vervangende oplaadcase
              </Link>{' '}
              veel voordeliger dan een complete set aanschaffen.
            </p>

            {/* FAQ Sectie */}
            <h2>Veelgestelde vragen</h2>

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
            <h2>Gerelateerde artikelen</h2>

            <ul>
              <li>
                <Link to="/blog/oortje-kwijt-vervangen" className="text-primary hover:underline">
                  Oortje kwijt? Zo vervang je alleen wat je mist
                </Link>
              </li>
              <li>
                <Link to="/blog/oortjes-combineren-per-generatie" className="text-primary hover:underline">
                  Werkt een vervangend oortje met mijn bestaande set?
                </Link>
              </li>
              <li>
                <Link to="/welke-airpods" className="text-primary hover:underline">
                  Welk model heb ik? Modelnummer checker
                </Link>
              </li>
              <li>
                <Link to="/losse-airpods" className="text-primary hover:underline">
                  Bekijk alle losse oortjes per generatie
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

export default BlogAirpodsOpnieuwPairen;
