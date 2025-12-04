import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Kan ik een losse AirPod kopen zonder nieuwe case?',
    answer: 'Ja, bij RePairPods kun je een losse linker of rechter AirPod kopen zonder dat je een nieuwe oplaadcase nodig hebt. Je bestaande case werkt gewoon met de vervangende AirPod, mits deze van dezelfde generatie is.',
  },
  {
    question: 'Is een losse AirPod van RePairPods origineel?',
    answer: 'Absoluut. Alle AirPods die wij verkopen zijn 100% originele Apple-onderdelen. We testen elk product op geluidskwaliteit, batterijcapaciteit en Bluetooth-connectiviteit voordat we het versturen.',
  },
  {
    question: 'Werkt een losse AirPod altijd met mijn bestaande set?',
    answer: 'Ja, een originele losse AirPod koppelt automatisch met je bestaande oplaadcase en andere AirPod. Het enige wat belangrijk is, is dat je de juiste generatie kiest. Een AirPod 3e generatie werkt bijvoorbeeld alleen met een AirPods 3e generatie case.',
  },
  {
    question: 'Wat als mijn AirPods al oud zijn?',
    answer: 'Als je AirPods ouder zijn dan 3-4 jaar en de batterij van je overgebleven oortje ook al minder wordt, kan het voordeliger zijn om een volledig nieuwe set te overwegen. Bij relatief nieuwe AirPods (1-2 jaar oud) is een losse vervanging vrijwel altijd de slimste keuze.',
  },
  {
    question: 'Hoe snel ontvang ik mijn losse AirPod?',
    answer: 'Bij RePairPods geldt: vandaag besteld, morgen in huis. Je kunt ook kiezen voor afhalen in onze winkel in Amsterdam, waar we je direct kunnen helpen met koppelen.',
  },
  {
    question: 'Krijg ik garantie op een losse AirPod?',
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Losse AirPod kwijt? Dit is de goedkoopste manier om hem te vervangen | RePairPods</title>
        <meta
          name="description"
          content="Eén AirPod kwijt? Ontdek de goedkoopste manier om je losse AirPod te vervangen. Vergelijk Apple, RePairPods en andere opties. 100% origineel, snel geleverd."
        />
        <meta name="keywords" content="losse airpod kwijt, airpod kwijt wat nu, losse airpod vervangen, goedkoop airpod vervangen, airpod verloren, airpods vervangen" />
        <link rel="canonical" href="https://repairpods.nl/blog/losse-airpod-kwijt-vervangen" />
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
              Losse AirPod kwijt? Dit is de goedkoopste manier om hem te vervangen (Apple vs. RePairPods)
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
              Je kent het scenario: je haalt je AirPods uit je zak en er zit er nog maar één in de case. 
              De andere is verdwenen. Misschien gevallen tijdens het sporten, achtergebleven op de bank bij vrienden, 
              of simpelweg spoorloos verdwenen. Het frustrerende? Je andere AirPod en de oplaadcase werken nog perfect.
            </p>

            <p>
              Veel mensen denken in deze situatie dat ze gedwongen zijn om een volledig nieuwe set AirPods te kopen. 
              Dat is begrijpelijk – Apple verkoopt immers vooral complete sets. Maar hier is het goede nieuws: 
              je hebt meerdere opties om een <strong>losse AirPod te vervangen</strong>, en sommige zijn veel voordeliger 
              dan je denkt. In dit artikel vergelijken we alle mogelijkheden, van een nieuwe set tot een losse 
              originele AirPod via RePairPods, zodat jij de beste keuze kunt maken voor jouw situatie.
            </p>

            {/* Sectie 1 */}
            <h2>Eén AirPod kwijt – wat zijn je opties?</h2>
            
            <p>
              Wanneer je een AirPod kwijtraakt, heb je grofweg vier opties. Elk heeft zijn eigen voor- en nadelen:
            </p>

            <ul>
              <li>
                <strong>Optie 1: Nieuwe volledige set AirPods kopen</strong> – Je krijgt alles nieuw, maar het is 
                veruit de duurste oplossing. Zonde als je nog een werkend oortje en case hebt.
              </li>
              <li>
                <strong>Optie 2: Losse AirPod via Apple laten vervangen</strong> – Origineel onderdeel, maar 
                vaak prijzig en je moet naar een Apple Store of servicepunt.
              </li>
              <li>
                <strong>Optie 3: Originele losse AirPod via RePairPods</strong> – 100% origineel Apple-onderdeel, 
                vaak voordeliger dan Apple en snel geleverd.
              </li>
              <li>
                <strong>Optie 4: Goedkope namaak of tweedehands via Marktplaats</strong> – Lijkt goedkoop, maar 
                brengt risico's met zich mee qua kwaliteit en compatibiliteit.
              </li>
            </ul>

            <p>
              Laten we elke optie in detail bekijken, zodat je precies weet wat je kunt verwachten.
            </p>

            {/* Sectie 2 */}
            <h2>Optie 1 – een compleet nieuwe set AirPods kopen</h2>

            <p>
              De meest voor de hand liggende, maar ook duurste oplossing: gewoon een gloednieuwe set AirPods kopen. 
              Dit betekent dat je een nieuwe linker AirPod, rechter AirPod én oplaadcase krijgt.
            </p>

            <p><strong>Voordelen:</strong></p>
            <ul>
              <li>Alles is nieuw met 100% batterijcapaciteit</li>
              <li>Geen gedoe met koppelen of compatibiliteit</li>
              <li>Volledige fabrieksgarantie</li>
            </ul>

            <p><strong>Nadelen:</strong></p>
            <ul>
              <li>Veruit de duurste optie</li>
              <li>Zonde als je nog een perfect werkend oortje en case hebt</li>
              <li>Niet duurzaam – je gooit werkende onderdelen weg</li>
            </ul>

            <p>
              <strong>Wanneer is dit logisch?</strong> Een nieuwe set kan zinvol zijn als je AirPods al 3-4 jaar oud zijn 
              en de batterij van beide oortjes merkbaar achteruitgaat. Ook als je wilt upgraden naar een nieuwere 
              generatie (bijvoorbeeld van AirPods 2 naar AirPods 4) is een complete set logisch.
            </p>

            {/* Sectie 3 */}
            <h2>Optie 2 – losse AirPod via Apple laten vervangen</h2>

            <p>
              Wat veel mensen niet weten: Apple biedt de mogelijkheid om een losse AirPod te laten vervangen. 
              Dit kun je doen via een Apple Store, een Authorized Service Provider, of online via de Apple Support-website.
            </p>

            <p>
              Het gaat hierbij om een origineel Apple-onderdeel, wat natuurlijk een groot pluspunt is. 
              Het nadeel? De kosten voor vervanging zijn vaak relatief hoog – soms bijna de helft van de prijs 
              van een nieuwe set. Daarnaast moet je vaak wachten op een afspraak of op verzending.
            </p>

            <p><strong>Voordelen:</strong></p>
            <ul>
              <li>100% origineel Apple-onderdeel</li>
              <li>Officiële service met Apple-garantie</li>
            </ul>

            <p><strong>Nadelen:</strong></p>
            <ul>
              <li>Relatief duur, vaak bijna de helft van een nieuwe set</li>
              <li>Niet altijd direct beschikbaar</li>
              <li>Vereist een Apple Store-bezoek of verzending naar Apple</li>
            </ul>

            {/* Sectie 4 */}
            <h2>Optie 3 – losse AirPod via RePairPods (origineel, maar vaak voordeliger)</h2>

            <p>
              Dit is waar RePairPods in beeld komt. Wij zijn gespecialiseerd in precies dit probleem: 
              mensen die één <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPod</Link> kwijt 
              zijn en niet een hele set willen kopen.
            </p>

            <p>
              Bij RePairPods vind je <strong>100% originele Apple-onderdelen</strong> – geen namaak, geen replica's. 
              We bieden losse linker en rechter AirPods aan voor alle gangbare generaties: van{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">AirPods 2e generatie</Link> tot{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">AirPods Pro 2e generatie</Link>.
            </p>

            <p><strong>Waarom kiezen klanten voor RePairPods?</strong></p>
            <ul>
              <li>
                <strong>Je betaalt alleen voor wat je mist</strong> – Heb je alleen je rechter AirPod verloren? 
                Dan koop je alleen een rechter AirPod. Simpel.
              </li>
              <li>
                <strong>Vaak voordeliger dan Apple</strong> – Doordat wij ons specifiek richten op losse onderdelen, 
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

            <p>
              Bekijk ons complete aanbod van{' '}
              <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPods</Link> of{' '}
              <Link to="/losse-oplaadcases" className="text-primary hover:underline">losse oplaadcases</Link> en 
              vind precies wat je nodig hebt.
            </p>

            {/* Sectie 5 */}
            <h2>Optie 4 – Namaak of tweedehands losse AirPods (Marktplaats, goedkope webshops)</h2>

            <p>
              Het is verleidelijk: op Marktplaats of bij obscure webshops vind je "AirPods" voor een fractie 
              van de normale prijs. Maar hier schuilt een groot risico.
            </p>

            <p><strong>Risico's van namaak AirPods:</strong></p>
            <ul>
              <li>
                <strong>Slechte geluidskwaliteit</strong> – Namaak AirPods klinken zelden zoals het origineel.
              </li>
              <li>
                <strong>Pairing-problemen</strong> – Vaak werken ze niet goed met je iPhone of koppelen ze 
                niet met je bestaande oortje.
              </li>
              <li>
                <strong>Batterijproblemen</strong> – De batterij gaat vaak veel sneller leeg en kan zelfs 
                veiligheidsrisico's opleveren.
              </li>
              <li>
                <strong>Geen garantie</strong> – Als er iets misgaat, heb je geen verhaal.
              </li>
              <li>
                <strong>Privacyrisico's</strong> – Onbetrouwbare apparaten kunnen potentieel een veiligheidsrisico vormen.
              </li>
            </ul>

            <p>
              <strong>Tweedehands via Marktplaats</strong> kan in theorie een origineel product opleveren, maar 
              je weet nooit zeker wat je krijgt. Is de batterij nog goed? Werkt de AirPod echt? Is het überhaupt origineel?
            </p>

            <p>
              Kortom: wat op korte termijn goedkoop lijkt, is vaak duurkoop. Je betaalt uiteindelijk meer als je 
              alsnog een fatsoenlijke vervanging moet kopen.
            </p>

            {/* Sectie 6 */}
            <h2>Prijsvergelijking: nieuwe set vs. losse AirPod</h2>

            <p>
              Laten we de opties eens naast elkaar zetten op basis van wat je er gemiddeld voor betaalt:
            </p>

            <ul>
              <li>
                <strong>Nieuwe volledige set AirPods</strong> – De hoogste prijs, maar je krijgt alles nieuw. 
                Afhankelijk van de generatie spreek je al snel over €150 tot €280 of meer.
              </li>
              <li>
                <strong>Apple replacement losse AirPod</strong> – Origineel onderdeel, maar de kosten liggen 
                vaak tussen de €80 en €110, afhankelijk van het model. Dat is bijna de helft van een nieuwe set.
              </li>
              <li>
                <strong>RePairPods losse AirPod</strong> – Ook 100% origineel, maar vaak voordeliger dan de 
                officiële Apple-vervanging. Bovendien bieden we verschillende condities aan, waardoor je nog 
                meer kunt besparen als je kiest voor een "uitstekende" of "goede" staat in plaats van nieuw.
              </li>
            </ul>

            <p>
              Bij RePairPods focussen we op de beste prijs-kwaliteitverhouding. Je koopt precies wat je nodig 
              hebt, tegen een eerlijke prijs, met de zekerheid van een origineel Apple-product.
            </p>

            {/* Sectie 7 */}
            <h2>Hoe bepaal je welke oplossing voor jou het voordeligst is?</h2>

            <p>
              Niet zeker welke optie het beste bij jouw situatie past? Gebruik deze simpele beslislogica:
            </p>

            <ul>
              <li>
                <strong>Je AirPods zijn nog relatief nieuw (1-2 jaar oud)</strong>, de batterij van je overgebleven 
                oortje is nog prima, en je case werkt goed → <em>Kies voor een losse AirPod via RePairPods</em>.
              </li>
              <li>
                <strong>Je AirPods zijn 3-4 jaar oud</strong> en de batterij gaat merkbaar achteruit → 
                <em>Overweeg een nieuwe set, eventueel een upgrade naar een nieuwere generatie</em>.
              </li>
              <li>
                <strong>Je wilt zeker zijn van originele kwaliteit en garantie</strong> → 
                <em>Kies Apple of RePairPods, nooit namaak</em>.
              </li>
            </ul>

            <p><strong>Een praktijkvoorbeeld:</strong></p>
            <p>
              Stel: je hebt AirPods 3e generatie van ongeveer een jaar oud en je verliest je rechter AirPod. 
              Je linker AirPod werkt nog prima, de batterij is nog goed, en je MagSafe-case is in perfecte staat. 
              In dit geval is een{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">
                losse rechter AirPod 3e generatie
              </Link>{' '}
              via RePairPods verreweg de slimste en voordeligste keuze. Je bespaart gemakkelijk meer dan de 
              helft ten opzichte van een nieuwe set.
            </p>

            {/* Sectie 8 */}
            <h2>Zo kies je de juiste losse AirPod (model + links/rechts)</h2>

            <p>
              Om de juiste losse AirPod te bestellen, moet je twee dingen weten: welke generatie AirPods je hebt, 
              en welke kant je mist (links of rechts).
            </p>

            <p>
              <strong>Weet je niet welke generatie je hebt?</strong> Geen probleem. Bekijk onze handige gids{' '}
              <Link to="/welke-airpods" className="text-primary hover:underline">
                "Welke AirPods heb ik?"
              </Link>{' '}
              waarin we je stap voor stap helpen om je model te identificeren aan de hand van het modelnummer.
            </p>

            <p><strong>Mini-stappenplan:</strong></p>
            <ol>
              <li>
                <strong>Check je generatie</strong> – Kijk in je iPhone onder Instellingen → Bluetooth → tik 
                op het (i)-icoontje bij je AirPods, of bekijk het modelnummer in je case.
              </li>
              <li>
                <strong>Bepaal welke kant je mist</strong> – Links of rechts? Dit klinkt simpel, maar dubbelcheck 
                even: de L of R staat vaak op de AirPod zelf (of op je oplaadcase bij de holte).
              </li>
              <li>
                <strong>Ga naar de juiste categorie</strong> – Bekijk ons aanbod{' '}
                <Link to="/losse-airpods" className="text-primary hover:underline">losse AirPods</Link> en filter 
                op jouw generatie en kant.
              </li>
            </ol>

            <p>
              We hebben losse AirPods beschikbaar voor alle populaire modellen:{' '}
              <Link to="/model/airpods-2e-generatie" className="text-primary hover:underline">AirPods 2</Link>,{' '}
              <Link to="/model/airpods-3e-generatie" className="text-primary hover:underline">AirPods 3</Link>,{' '}
              <Link to="/model/airpods-4e-generatie" className="text-primary hover:underline">AirPods 4</Link>,{' '}
              <Link to="/model/airpods-pro-1e-generatie" className="text-primary hover:underline">AirPods Pro 1</Link> en{' '}
              <Link to="/model/airpods-pro-2e-generatie" className="text-primary hover:underline">AirPods Pro 2</Link>.
            </p>

            {/* Sectie 9 */}
            <h2>Hoe koppel je een vervangende losse AirPod met je bestaande set?</h2>

            <p>
              Een veelgestelde vraag: werkt een losse vervangende AirPod gewoon met mijn bestaande set en case? 
              Het antwoord is ja – mits het een origineel Apple-onderdeel is van de juiste generatie. Het 
              koppelproces is identiek aan wat je zou doen bij een officiële Apple-vervanging.
            </p>

            <p><strong>Stappenplan om je nieuwe AirPod te koppelen:</strong></p>
            <ol>
              <li>Zorg dat je iPhone of iPad is bijgewerkt naar de laatste iOS-versie.</li>
              <li>Plaats je bestaande AirPod en de nieuwe vervangende AirPod samen in de oplaadcase.</li>
              <li>Sluit het deksel en wacht 30 seconden.</li>
              <li>Open het deksel en houd de case dicht bij je iPhone.</li>
              <li>Houd de setup-knop aan de achterkant van de case ingedrukt tot het statuslampje wit knippert.</li>
              <li>Op je iPhone verschijnt een setup-scherm – volg de instructies.</li>
              <li>Je AirPods zijn nu gekoppeld en klaar voor gebruik!</li>
            </ol>

            <p>
              Het hele proces duurt meestal minder dan twee minuten. Heb je moeite met koppelen? In onze 
              winkel in Amsterdam helpen we je graag persoonlijk.
            </p>

            {/* Sectie 10 */}
            <h2>Duurzaamheid: waarom losse vervanging beter is voor je portemonnee én het milieu</h2>

            <p>
              Laten we eerlijk zijn: het is zonde om een complete set AirPods weg te gooien omdat je één 
              oortje kwijt bent. Je goede oortje werkt nog prima. Je oplaadcase doet het nog perfect. 
              Waarom zou je dan alles weggooien en nieuw kopen?
            </p>

            <p>
              Door te kiezen voor een losse vervangende AirPod:
            </p>

            <ul>
              <li>
                <strong>Bespaar je geld</strong> – Je betaalt alleen voor wat je daadwerkelijk nodig hebt.
              </li>
              <li>
                <strong>Verminder je e-waste</strong> – Elektronica-afval is een groeiend probleem. Door 
                werkende onderdelen te behouden, draag je bij aan een duurzamere wereld.
              </li>
              <li>
                <strong>Verleng je de levensduur van je set</strong> – Goede onderhoud en gerichte vervanging 
                betekent dat je set langer meegaat.
              </li>
            </ul>

            <p>
              De naam <strong>RePairPods</strong> is niet voor niets gekozen. Het combineert "Re" (opnieuw), 
              "Pair" (koppelen, maar ook paar) en "Repair" (repareren) met "Pods". Onze missie is simpel: 
              help mensen hun AirPods-set compleet te houden zonder onnodige verspilling.
            </p>

            {/* Sectie 11 */}
            <h2>Waarom RePairPods een logische keuze is bij een kwijtgeraakte AirPod</h2>

            <p>
              Even samengevat waarom duizenden klanten voor RePairPods kiezen wanneer ze een losse AirPod nodig hebben:
            </p>

            <ul>
              <li>
                <strong>100% originele Apple-onderdelen</strong> – Geen namaak, geen compromissen op kwaliteit.
              </li>
              <li>
                <strong>Specialisten in losse AirPods en oplaadcases</strong> – Dit is wat we doen. We begrijpen 
                het probleem en bieden de oplossing.
              </li>
              <li>
                <strong>Eerlijke prijzen</strong> – Vaak voordeliger dan Apple's eigen vervangingsservice.
              </li>
              <li>
                <strong>Meerdere condities</strong> – Kies uit nieuw, uitstekend, goed, of gebruikt, afhankelijk 
                van je budget.
              </li>
              <li>
                <strong>Snelle levering</strong> – Vandaag besteld, morgen in huis.
              </li>
              <li>
                <strong>Afhalen in Amsterdam</strong> – Persoonlijk advies en directe hulp bij koppelen.
              </li>
              <li>
                <strong>Grondig getest</strong> – Elk product wordt gecontroleerd op geluid, batterij en connectiviteit.
              </li>
            </ul>

            {/* Conclusie */}
            <h2>Conclusie</h2>

            <p>
              Een losse AirPod kwijtraken is vervelend, maar het hoeft geen dure aangelegenheid te zijn. 
              Je hebt meerdere opties, van een volledig nieuwe set tot een losse originele vervanging. 
              Voor de meeste mensen – zeker als je AirPods nog relatief nieuw zijn – is een losse originele 
              AirPod veruit de goedkoopste en meest logische oplossing.
            </p>

            <p>
              Bij RePairPods maken we het je gemakkelijk: kies je generatie, selecteer links of rechts, 
              kies de conditie die bij je budget past, en bestel. Simpel, snel, en zonder gedoe.
            </p>

            <p>
              <strong>Klaar om je verloren AirPod te vervangen?</strong>
            </p>

            <p>
              <Link to="/welke-airpods" className="text-primary hover:underline font-medium">
                Check eerst welke AirPods je hebt →
              </Link>
            </p>

            <p>
              <Link to="/losse-airpods" className="text-primary hover:underline font-medium">
                Bekijk ons aanbod losse AirPods →
              </Link>
            </p>

            {/* FAQ Section */}
            <h2>Veelgestelde vragen over een losse AirPod vervangen</h2>
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
              Ben je een losse AirPod kwijt?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nu je weet welke opties je hebt, is het tijd om actie te ondernemen. Bekijk onze losse 
              AirPods per generatie en bestel precies het oortje dat je nodig hebt – snel, voordelig, 
              en 100% origineel.
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

export default BlogLosseAirpodKwijt;


