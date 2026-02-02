import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, X, Lightbulb, DollarSign } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const faqItems = [
  {
    question: 'Kan ik een los oortje kopen zonder nieuwe oplaadcase?',
    answer: 'Ja, bij Earbuds Restore kun je een los linker of rechter oortje kopen zonder dat je een nieuwe oplaadcase nodig hebt. Je bestaande case werkt gewoon met het vervangende oortje, mits deze van dezelfde generatie is.',
  },
  {
    question: 'Zijn de onderdelen bij Earbuds Restore origineel?',
    answer: 'Absoluut. Alle oortjes die wij verkopen zijn 100% originele onderdelen. We testen elk product op geluidskwaliteit, batterijcapaciteit en Bluetooth-connectiviteit voordat we het versturen.',
  },
  {
    question: 'Werkt een los oortje altijd met mijn bestaande set?',
    answer: 'Ja, een origineel los oortje koppelt automatisch met je bestaande oplaadcase en andere oortje. Het enige wat belangrijk is, is dat je de juiste generatie kiest. Een 3e generatie oortje werkt bijvoorbeeld alleen met een 3e generatie case.',
  },
  {
    question: 'Wat als mijn oortjes al oud zijn?',
    answer: 'Als je oortjes ouder zijn dan 3-4 jaar en de batterij van je overgebleven oortje ook al minder wordt, kan het voordeliger zijn om een volledig nieuw setje te overwegen. Bij relatief nieuwe oortjes (1-2 jaar oud) is een losse vervanging vrijwel altijd de slimste keuze.',
  },
  {
    question: 'Hoe snel ontvang ik mijn vervangende oortje?',
    answer: 'Bij Earbuds Restore geldt: vandaag besteld, morgen in huis. Je kunt ook kiezen voor afhalen in onze winkel in Amsterdam, waar we je direct kunnen helpen met koppelen.',
  },
  {
    question: 'Krijg ik garantie op een los oortje?',
    answer: 'Ja, al onze producten worden geleverd met garantie. Mocht er onverhoopt iets mis zijn, dan lossen we dat snel en netjes voor je op.',
  },
];

const BlogLosseAirpodKwijt = () => {
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
    "headline": "Eén oortje kwijt of kapot? Zo vervang je alleen wat je mist",
    "description": "Je hebt één oortje verloren – de ander en je case werken nog prima. Ontdek de goedkoopste manier om alleen te vervangen wat je nodig hebt.",
    "author": {
      "@type": "Organization",
      "name": "Earbuds Restore"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Earbuds Restore"
    },
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-31"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Eén oortje kwijt? De goedkoopste manier om te vervangen | Earbuds Restore</title>
        <meta
          name="description"
          content="Je hebt één oortje verloren – de ander en je case werken nog prima. Ontdek hoe je alleen vervangt wat je mist en bespaar tot 60% ten opzichte van een nieuwe set."
        />
        <meta name="keywords" content="oortje kwijt, los oortje vervangen, vervanging draadloos oortje, oortje verloren, goedkoop vervangen, set completeren" />
        <link rel="canonical" href="https://earbudrestore.nl/blog/oortje-kwijt-vervangen" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
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
              Eén oortje kwijt? Zo vervang je alleen wat je mist
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
          <div className="prose prose-lg max-w-none text-foreground/90">
            
            {/* Inleiding - USER FIRST */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Je haalt je oortjes uit je zak en er zit er nog maar één in de case. 
              De andere is verdwenen – misschien gevallen tijdens het sporten, achtergebleven bij vrienden, 
              of simpelweg spoorloos. Je andere oortje en de oplaadcase werken nog perfect – en nu?
            </p>

            <p className="mb-8">
              Dit komt veel voor bij draadloze oordopjes, waaronder de populaire modellen van bekende merken. 
              Veel mensen denken dat ze gedwongen zijn om een volledig nieuw setje te kopen. 
              Dat is begrijpelijk, maar niet noodzakelijk. In dit artikel vergelijken we alle mogelijkheden, 
              van een nieuw setje tot een <strong>los vervangend oortje</strong> via Earbuds Restore, 
              zodat jij de beste keuze kunt maken voor jouw situatie.
            </p>

            {/* Sectie 1 - Wat is het probleem */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Wat is het probleem?
            </h2>
            
            <p>
              Wanneer je één draadloos oortje verliest, heb je een dilemma. Je overgebleven oortje 
              en oplaadcase functioneren nog prima, maar je kunt niet in stereo luisteren. 
              Dit is frustrerend, want het voelt alsof je gedwongen wordt om veel geld uit te geven 
              terwijl je eigenlijk maar één onderdeel mist.
            </p>

            {/* Sectie 2 - Opties */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Welke opties heb je?
            </h2>

            <p>
              Wanneer je een oortje kwijtraakt, heb je grofweg vier opties. Elk heeft zijn eigen voor- en nadelen:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="p-4 border-l-4 border-l-muted-foreground">
                <h4 className="font-semibold mb-2">Optie 1: Volledig nieuw setje</h4>
                <p className="text-sm text-muted-foreground mb-0">
                  Je krijgt alles nieuw, maar het is veruit de duurste oplossing. Zonde als je nog een werkend oortje en case hebt.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-muted-foreground">
                <h4 className="font-semibold mb-2">Optie 2: Via de fabrikant</h4>
                <p className="text-sm text-muted-foreground mb-0">
                  Origineel onderdeel, maar vaak prijzig en je moet naar een servicepunt of lang wachten.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Optie 3: Via Earbud restore
                </h4>
                <p className="text-sm text-muted-foreground mb-0">
                  100% origineel onderdeel, vaak voordeliger dan de fabrikant en snel geleverd.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-destructive">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <X className="h-4 w-4 text-destructive" />
                  Optie 4: Namaak/Marktplaats
                </h4>
                <p className="text-sm text-muted-foreground mb-0">
                  Lijkt goedkoop, maar brengt risico's met zich mee qua kwaliteit en compatibiliteit.
                </p>
              </Card>
            </div>

            <p>
              Laten we elke optie in detail bekijken, zodat je precies weet wat je kunt verwachten.
            </p>

            {/* Sectie 3 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Optie 1 – een compleet nieuw setje kopen
            </h2>

            <p className="mb-4">
              De meest voor de hand liggende, maar ook duurste oplossing: gewoon een compleet nieuw setje kopen. 
              Dit betekent dat je een linker oortje, rechter oortje én oplaadcase krijgt.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Voordelen:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Alles is vers met optimale batterijcapaciteit</li>
              <li>Geen gedoe met koppelen of compatibiliteit</li>
              <li>Volledige fabrieksgarantie</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Nadelen:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Veruit de duurste optie</li>
              <li>Zonde als je nog een perfect werkend oortje en case hebt</li>
              <li>Niet duurzaam – je gooit werkende onderdelen weg</li>
            </ul>

            <p className="mb-8">
              <strong>Wanneer is dit logisch?</strong> Een nieuw setje kan zinvol zijn als je oortjes al 3-4 jaar oud zijn 
              en de batterij van beide oortjes merkbaar achteruitgaat. Ook als je wilt upgraden naar een nieuwere 
              generatie is een complete set logisch.
            </p>

            {/* Sectie 4 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Optie 2 – vervanging via de fabrikant
            </h2>

            <p className="mb-4">
              Wat veel mensen niet weten: fabrikanten bieden de mogelijkheid om een los oortje te laten vervangen. 
              Dit kun je doen via een officiële winkel, een Authorized Service Provider, of online via de supportwebsite.
            </p>

            <p className="mb-6">
              Het gaat hierbij om een origineel onderdeel, wat natuurlijk een groot pluspunt is. 
              Het nadeel? De kosten voor vervanging zijn vaak relatief hoog – soms bijna de helft van de prijs 
              van een nieuw setje. Daarnaast moet je vaak wachten op een afspraak of op verzending.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Voordelen:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>100% origineel onderdeel</li>
              <li>Officiële service met fabrieksgarantie</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Nadelen:</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Relatief duur, vaak bijna de helft van een nieuw setje</li>
              <li>Niet altijd direct beschikbaar</li>
              <li>Vereist een winkelbezoek of verzending naar de fabrikant</li>
            </ul>

            {/* Sectie 5 */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Optie 3 – los oortje via Earbud restore (origineel, maar vaak voordeliger)
            </h2>

            <p className="mb-4">
              Dit is waar Earbud restore in beeld komt. Wij zijn gespecialiseerd in precies dit probleem: 
              mensen die één <Link to="/losse-airpods" className="text-primary hover:underline">los oortje</Link> kwijt 
              zijn en niet een hele set willen kopen.
            </p>

            <p className="mb-6">
              Bij Earbud restore vind je <strong>100% originele onderdelen</strong> – geen namaak, geen replica's. 
              We bieden losse linker en rechter oortjes aan voor alle gangbare generaties: van{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">2e generatie</Link> tot{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">Pro 2e generatie</Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Waarom kiezen klanten voor Earbud restore?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Je betaalt alleen voor wat je mist</strong> – Heb je alleen je rechter oortje verloren? 
                Dan koop je alleen een rechter oortje. Simpel.
              </li>
              <li>
                <strong>Vaak voordeliger dan de fabrikant</strong> – Doordat wij ons specifiek richten op losse onderdelen, 
                kunnen we scherpe prijzen bieden.
              </li>
              <li>
                <strong>Duurzamer</strong> – Je gooit geen werkende onderdelen weg en vermindert e-waste.
              </li>
              <li>
                <strong>Snelle levering</strong> – Vandaag besteld, morgen in huis.
              </li>
              <li>
                <strong>Afhalen in Amsterdam</strong> – Liever direct ophalen? Dat kan in onze winkel, waar we je 
                ook kunnen helpen met koppelen.
              </li>
            </ul>

            <p className="mb-8">
              Bekijk ons complete aanbod van{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">losse oortjes</Link> of{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcases</Link> en 
              vind precies wat je nodig hebt.
            </p>

            {/* Sectie 6 - Risico's namaak */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Optie 4 – Namaak of tweedehands losse oortjes
            </h2>

            <p className="mb-4">
              Het is verleidelijk: op Marktplaats of bij obscure webshops vind je oortjes voor een fractie 
              van de normale prijs. Maar hier schuilt een groot risico.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Risico's van namaak oortjes:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Slechte geluidskwaliteit</strong> – Namaak oortjes klinken zelden zoals het origineel.</li>
              <li><strong>Koppelproblemen</strong> – Vaak werken ze niet goed met je telefoon of koppelen ze niet met je bestaande oortje.</li>
              <li><strong>Batterijproblemen</strong> – De batterij gaat vaak veel sneller leeg en kan zelfs veiligheidsrisico's opleveren.</li>
              <li><strong>Geen garantie</strong> – Als er iets misgaat, heb je geen verhaal.</li>
              <li><strong>Privacyrisico's</strong> – Onbetrouwbare apparaten kunnen potentieel een veiligheidsrisico vormen.</li>
            </ul>

            <p className="mb-4">
              <strong>Tweedehands via Marktplaats</strong> kan in theorie een origineel product opleveren, maar 
              je weet nooit zeker wat je krijgt. Is de batterij nog goed? Werkt het oortje echt? Is het überhaupt origineel?
            </p>

            <p className="mb-8">
              Kortom: wat op korte termijn goedkoop lijkt, is vaak duurkoop. Je betaalt uiteindelijk meer als je 
              alsnog een fatsoenlijke vervanging moet kopen.
            </p>

            {/* Sectie 7 - Wanneer vervangen slimmer is */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Wanneer vervangen slimmer is dan een nieuw setje
            </h2>

            <p className="mb-4">
              Niet zeker welke optie het beste bij jouw situatie past? Gebruik deze simpele beslislogica:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Je oortjes zijn nog relatief jong (1-2 jaar oud)</strong>, de batterij van je overgebleven 
                oortje is nog prima, en je case werkt goed → <em>Kies voor een los oortje via Earbud restore</em>.
              </li>
              <li>
                <strong>Je oortjes zijn 3-4 jaar oud</strong> en de batterij gaat merkbaar achteruit → 
                <em>Overweeg een nieuw setje, eventueel een upgrade naar een nieuwere generatie</em>.
              </li>
              <li>
                <strong>Je wilt zeker zijn van originele kwaliteit en garantie</strong> → 
                <em>Kies de fabrikant of Earbud restore, nooit namaak</em>.
              </li>
            </ul>

            {/* Sectie 8 - Compatibiliteit */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Welke onderdelen zijn compatibel met mijn set?
            </h2>

            <p className="mb-4">
              Het is cruciaal om de juiste generatie te kiezen. Een oortje van de 2e generatie werkt niet 
              samen met een 3e generatie, ook al lijken ze op elkaar. Dit komt door verschillende chips en firmware.
            </p>

            <p className="mb-4">
              Bekijk per generatie wat bij jou past:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">
                  2e generatie onderdelen
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                  3e generatie onderdelen
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">
                  4e generatie onderdelen
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">
                  Pro 1e generatie onderdelen
                </Link>
              </li>
              <li>
                <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">
                  Pro 2e generatie onderdelen
                </Link>
              </li>
            </ul>

            <p>
              Weet je niet precies welke generatie je hebt? Gebruik onze{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                modelnummer-checker
              </Link>{' '}
              om je exacte model te identificeren.
            </p>

            {/* Sectie 9 - Koppelen */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Hoe koppel je een vervangend oortje met je bestaande set?
            </h2>

            <p className="mb-4">
              Een veelgestelde vraag: werkt een los vervangend oortje gewoon met mijn bestaande set en case? 
              Het antwoord is ja – mits het een origineel onderdeel is van de juiste generatie.
            </p>

            <Card className="p-6 my-6 bg-secondary/30">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Stappenplan: vervangend oortje koppelen
              </h3>
              <ol className="space-y-3 mb-0">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                  <span>Zorg dat je telefoon is bijgewerkt naar de laatste software-versie.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                  <span>Plaats je bestaande oortje en het vervangende oortje samen in de oplaadcase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                  <span>Sluit het deksel en wacht 30 seconden.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">4</span>
                  <span>Open het deksel en houd de case dicht bij je telefoon.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">5</span>
                  <span>Houd de setup-knop ingedrukt tot het statuslampje wit knippert.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">6</span>
                  <span>Op je telefoon verschijnt een setup-scherm – volg de instructies.</span>
                </li>
              </ol>
            </Card>

            <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Tip:</p>
                <p className="text-sm mb-0">Het hele proces duurt meestal minder dan twee minuten. Heb je moeite met koppelen? In onze winkel in Amsterdam helpen we je graag persoonlijk.</p>
              </div>
            </div>

            {/* Sectie 10 - Duurzaamheid */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Duurzaamheid: waarom losse vervanging beter is
            </h2>

            <p className="mb-4">
              Laten we eerlijk zijn: het is zonde om een complete set weg te gooien omdat je één 
              oortje kwijt bent. Je goede oortje werkt nog prima. Je oplaadcase doet het nog perfect. 
              Waarom zou je dan alles weggooien?
            </p>

            <p className="mb-4">
              Door te kiezen voor een los vervangend oortje:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Bespaar je geld</strong> – Je betaalt alleen voor wat je daadwerkelijk nodig hebt.
              </li>
              <li>
                <strong>Verminder je e-waste</strong> – Elektronica-afval is een groeiend probleem. Door 
                werkende onderdelen te behouden, draag je bij aan een duurzamere wereld.
              </li>
              <li>
                <strong>Verleng de levensduur van je set</strong> – Goed onderhoud en gerichte vervanging 
                betekent dat je set langer meegaat.
              </li>
            </ul>

            {/* Conclusie */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Conclusie
            </h2>

            <p className="mb-4">
              Een los oortje kwijtraken is vervelend, maar het hoeft geen dure aangelegenheid te zijn. 
              Je hebt meerdere opties, van een volledig nieuw setje tot een losse originele vervanging. 
              Voor de meeste mensen – zeker als je oortjes nog relatief jong zijn – is een los origineel 
              oortje veruit de goedkoopste en meest logische oplossing.
            </p>

            <p className="mb-4">
              Bij Earbud restore maken we het je gemakkelijk: kies je generatie, selecteer links of rechts, 
              kies de conditie die bij je budget past, en bestel. Simpel, snel, en zonder gedoe.
            </p>

            <p className="mb-4">
              <strong>Klaar om je verloren oortje te vervangen?</strong>
            </p>

            <p className="mb-2">
              <Link to="/welke-airpods" className="text-primary hover:underline font-medium">
                Check eerst welke generatie je hebt →
              </Link>
            </p>

            <p className="mb-8">
              <Link to="/losse-airpods" className="text-primary hover:underline font-medium">
                Bekijk ons aanbod losse oortjes →
              </Link>
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
              Veelgestelde vragen over losse vervanging
            </h2>
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

          {/* Gerelateerde artikelen */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Gerelateerde artikelen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/blog/airpods-opnieuw-pairen" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Vervangend oortje koppelen</h3>
                <p className="text-sm text-muted-foreground">Stap-voor-stap handleiding</p>
              </Link>
              <Link to="/blog/airpods-combineren-per-generatie" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Compatibiliteit per generatie</h3>
                <p className="text-sm text-muted-foreground">Welke onderdelen werken samen?</p>
              </Link>
              <Link to="/welke-airpods" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Welke generatie heb ik?</h3>
                <p className="text-sm text-muted-foreground">Modelnummer checker</p>
              </Link>
              <Link to="/losse-airpods" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-medium text-foreground mb-1">Bekijk losse oortjes</h3>
                <p className="text-sm text-muted-foreground">Alle generaties beschikbaar</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ben je een oortje kwijt?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nu je weet welke opties je hebt, is het tijd om actie te ondernemen. Bekijk onze losse 
              oortjes per generatie en bestel precies het onderdeel dat je nodig hebt – snel, voordelig, 
              en 100% origineel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/losse-airpods"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Bekijk losse oortjes
              </Link>
              <Link
                to="/welke-airpods"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                Welke generatie heb ik?
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Earbud restore is een onafhankelijke aanbieder en niet gelieerd aan Apple Inc.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogLosseAirpodKwijt;
