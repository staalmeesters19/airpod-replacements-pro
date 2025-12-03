import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, Lightbulb, AlertCircle } from 'lucide-react';

const InfoBox = ({ title, children, variant = 'info' }: { title: string; children: React.ReactNode; variant?: 'info' | 'tip' | 'warning' }) => {
  const icons = {
    info: <Info className="h-5 w-5" />,
    tip: <Lightbulb className="h-5 w-5" />,
    warning: <AlertCircle className="h-5 w-5" />
  };
  
  const styles = {
    info: 'bg-secondary/50 border-border',
    tip: 'bg-primary/5 border-primary/20',
    warning: 'bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800'
  };

  return (
    <div className={`rounded-xl border p-4 my-4 ${styles[variant]}`}>
      <div className="flex items-start gap-3">
        <span className="text-primary mt-0.5">{icons[variant]}</span>
        <div>
          <p className="font-medium text-sm mb-1">{title}</p>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Hulp = () => {
  return (
    <>
      <Helmet>
        <title>Hulp bij koppelen & problemen met je AirPods | RePairPods</title>
        <meta
          name="description"
          content="Hulp nodig met je AirPods? Leer hoe je een losse AirPod koppelt, problemen oplost en je oplaadcase instelt. Stap-voor-stap uitleg van RePairPods."
        />
        <meta name="keywords" content="airpods koppelen lukt niet, airpods doen het niet, airpods werken niet, losse airpod koppelen, airpods reset" />
        <link rel="canonical" href="https://repairpods.nl/hulp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Hoe koppel ik een nieuwe losse AirPod?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Doe beide AirPods in de case, laad op, houd het knopje op de case ingedrukt tot het lampje wit knippert, en koppel via je iPhone of iPad."
                }
              },
              {
                "@type": "Question",
                "name": "Mijn nieuwe losse AirPod wordt niet herkend, wat nu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Controleer of de generatie klopt, reset je Bluetooth, gebruik 'Vergeet dit apparaat' en reset de case. Koppel daarna opnieuw."
                }
              },
              {
                "@type": "Question",
                "name": "Werken AirPods ook met Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, AirPods werken als gewone Bluetooth-oortjes met Android, Windows en andere apparaten. Sommige Apple-specifieke functies zijn dan beperkt."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <div className="bg-gradient-to-b from-secondary/30 to-background py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Hulp & ondersteuning
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Nieuwe AirPod of case ontvangen? Hier vind je alle stappen om hem te koppelen en werkend te krijgen. 
                Loopt iets niet zoals verwacht? We helpen je op weg.
              </p>
              
              {/* Quick nav */}
              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-medium mb-3">In deze gids vind je:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#koppelen" className="hover:text-primary transition-colors">→ Koppelen van een losse AirPod</a></li>
                  <li><a href="#case" className="hover:text-primary transition-colors">→ Nieuwe oplaadcase koppelen</a></li>
                  <li><a href="#problemen" className="hover:text-primary transition-colors">→ Veelvoorkomende problemen</a></li>
                  <li><a href="#icloud" className="hover:text-primary transition-colors">→ iCloud, 'Zoek mijn' & Apple ID</a></li>
                  <li><a href="#compatibiliteit" className="hover:text-primary transition-colors">→ Compatibiliteit (Android, Windows)</a></li>
                  <li><a href="#welke" className="hover:text-primary transition-colors">→ Welke AirPods heb ik?</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Content */}
          <div className="container mx-auto px-4 max-w-3xl py-12">
            
            {/* Koppelen van een losse AirPod */}
            <section id="koppelen" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Koppelen van een losse AirPod</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="kan-koppelen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Kan ik één losse AirPod koppelen aan mijn bestaande set?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, dat kan! Zolang de losse AirPod dezelfde generatie en hetzelfde model is als je bestaande AirPod, 
                      kun je ze samen gebruiken in één case.
                    </p>
                    <p className="mb-4">
                      Dit is precies waar RePairPods in gespecialiseerd is: losse vervangende AirPods die naadloos aansluiten 
                      bij je huidige set.
                    </p>
                    <InfoBox title="Belangrijk" variant="warning">
                      Je kunt geen AirPods van verschillende generaties combineren. Een AirPod 2 werkt niet samen met een AirPod 3.
                      Twijfel je welke generatie je hebt? Check je modelnummer of stuur ons een foto via WhatsApp.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hoe-koppelen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe koppel ik een nieuwe losse AirPod?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Het koppelen van een nieuwe losse AirPod is eenvoudig. In een paar stappen werken beide AirPods weer samen.
                    </p>
                    <p className="font-medium text-foreground mb-2">Stap voor stap:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Doe beide AirPods in de case</strong><br />
                        <span className="text-sm">Leg je bestaande én je nieuwe AirPod in de oplaadcase.</span>
                      </li>
                      <li>
                        <strong>Laad de case op</strong><br />
                        <span className="text-sm">Sluit de case aan op een oplader en wacht minimaal 5 minuten.</span>
                      </li>
                      <li>
                        <strong>Open de case bij je iPhone/iPad</strong><br />
                        <span className="text-sm">Houd de case dicht bij je apparaat en open het deksel.</span>
                      </li>
                      <li>
                        <strong>Houd het knopje op de case ingedrukt</strong><br />
                        <span className="text-sm">Houd het knopje aan de achterkant van de case ingedrukt tot het lampje wit knippert.</span>
                      </li>
                      <li>
                        <strong>Koppel via het pop-up scherm</strong><br />
                        <span className="text-sm">Er verschijnt een animatie op je scherm. Tik op "Verbind" en volg de instructies.</span>
                      </li>
                    </ol>
                    <InfoBox title="Geen pop-up?" variant="tip">
                      Ga naar Instellingen → Bluetooth en zoek je AirPods daar. Tik erop om te verbinden. 
                      Lukt het niet? Probeer "Vergeet dit apparaat" en begin opnieuw.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Nieuwe oplaadcase koppelen */}
            <section id="case" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Nieuwe oplaadcase koppelen</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="case-koppelen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe koppel ik mijn AirPods aan een nieuwe oplaadcase?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Een nieuwe case koppelen aan je bestaande AirPods? Dat kan, maar je moet de AirPods wel opnieuw instellen. 
                      Geen zorgen, het is zo gedaan.
                    </p>
                    <p className="font-medium text-foreground mb-2">Stap voor stap:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Laad de nieuwe case op</strong><br />
                        <span className="text-sm">Sluit de case minimaal 15 minuten aan voordat je begint.</span>
                      </li>
                      <li>
                        <strong>Leg beide AirPods in de nieuwe case</strong><br />
                        <span className="text-sm">Zorg dat ze goed "klikken" en contact maken.</span>
                      </li>
                      <li>
                        <strong>Sluit de case en wacht 30 seconden</strong><br />
                        <span className="text-sm">De AirPods moeten de nieuwe case herkennen.</span>
                      </li>
                      <li>
                        <strong>Reset de case</strong><br />
                        <span className="text-sm">Open de case, houd het knopje 15 seconden ingedrukt tot het lampje oranje en dan wit knippert.</span>
                      </li>
                      <li>
                        <strong>Koppel opnieuw met je apparaat</strong><br />
                        <span className="text-sm">Houd de case bij je iPhone/iPad en volg de koppel-instructies op het scherm.</span>
                      </li>
                    </ol>
                    <InfoBox title="Let op" variant="info">
                      Zorg dat de case dezelfde generatie is als je AirPods. Een AirPods Pro 2 case werkt niet met AirPods Pro 1.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Veelvoorkomende problemen */}
            <section id="problemen" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Veelvoorkomende problemen</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="niet-herkend" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Mijn nieuwe losse AirPod wordt niet herkend, wat nu?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Geen paniek – dit is meestal op te lossen met een paar stappen. Vaak is het een kwestie van opnieuw koppelen.
                    </p>
                    <p className="font-medium text-foreground mb-2">Probeer dit:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Controleer of de generatie klopt</strong><br />
                        <span className="text-sm">Je kunt geen AirPods van verschillende generaties combineren.</span>
                      </li>
                      <li>
                        <strong>Zet Bluetooth uit en weer aan</strong><br />
                        <span className="text-sm">Op je iPhone/iPad én andere gekoppelde apparaten.</span>
                      </li>
                      <li>
                        <strong>Gebruik "Vergeet dit apparaat"</strong><br />
                        <span className="text-sm">Ga naar Instellingen → Bluetooth → tik op het (i)-icoontje naast je AirPods → "Vergeet dit apparaat".</span>
                      </li>
                      <li>
                        <strong>Reset de case</strong><br />
                        <span className="text-sm">Met beide AirPods erin: houd het knopje 15 seconden ingedrukt tot het lampje oranje en wit knippert.</span>
                      </li>
                      <li>
                        <strong>Koppel opnieuw</strong><br />
                        <span className="text-sm">Open de case bij je apparaat en volg de instructies op het scherm.</span>
                      </li>
                    </ol>
                    <InfoBox title="Nog steeds problemen?" variant="tip">
                      Neem contact met ons op via WhatsApp. Stuur een foto van het modelnummer, dan kijken we mee.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="laden-niet" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Mijn AirPods laden niet (goed) op, wat kan ik doen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Laadproblemen zijn vaak simpel op te lossen. Meestal zit er vuil op de contactpuntjes of is er iets met de oplader.
                    </p>
                    <p className="font-medium text-foreground mb-2">Check deze dingen:</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Maak de contactpuntjes schoon</strong><br />
                        <span className="text-sm">Gebruik een droog, pluisvrij doekje voor de onderkant van de AirPods én de binnenkant van de case.</span>
                      </li>
                      <li>
                        <strong>Probeer een andere kabel en adapter</strong><br />
                        <span className="text-sm">Soms is de kabel het probleem, niet de case.</span>
                      </li>
                      <li>
                        <strong>Check of de AirPod goed "klikt"</strong><br />
                        <span className="text-sm">De AirPod moet stevig in de case zitten. Hoor je een klikje?</span>
                      </li>
                      <li>
                        <strong>Probeer een ander stopcontact</strong><br />
                        <span className="text-sm">Of een andere USB-poort als je via de computer laadt.</span>
                      </li>
                    </ol>
                    <InfoBox title="Nog steeds geen oplossing?" variant="warning">
                      Als de case of AirPod na deze stappen nog steeds niet laadt, neem dan contact met ons op. 
                      Binnen de garantieperiode zoeken we samen een oplossing.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="piepend" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Mijn oplaadcase maakt een piepend of tikkend geluid, is dat normaal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Een zacht geluid tijdens het laden kan normaal zijn. De elektronica in de case kan soms een licht geluid produceren.
                    </p>
                    <p className="font-medium text-foreground mb-2">Wanneer is het normaal?</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Zacht zoem- of tikgeluid alleen tijdens het laden</li>
                      <li>Stopt wanneer de case vol is</li>
                    </ul>
                    <p className="font-medium text-foreground mb-2">Wanneer contact opnemen?</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Hard, aanhoudend geluid</li>
                      <li>Case wordt extreem warm of heet</li>
                      <li>Geluid ook wanneer niet aan de lader</li>
                      <li>Case werkt niet meer goed</li>
                    </ul>
                    <p>
                      Twijfel je? Stuur ons een berichtje of een filmpje via WhatsApp. We beoordelen het graag.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* iCloud, 'Zoek mijn' & Apple ID */}
            <section id="icloud" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">iCloud, 'Zoek mijn' & Apple ID</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="zoek-mijn" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Mijn AirPods staan nog in 'Zoek mijn'. Wat moet ik doen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Als je AirPods nog gekoppeld zijn aan een oud Apple ID, moet je ze daar eerst verwijderen voordat je ze aan een nieuw account kunt koppelen.
                    </p>
                    <p className="font-medium text-foreground mb-2">Zo verwijder je AirPods uit 'Zoek mijn':</p>
                    <ol className="list-decimal list-inside space-y-3 mb-4">
                      <li>
                        <strong>Open Instellingen op je iPhone/iPad</strong><br />
                        <span className="text-sm">Tik bovenaan op je naam (Apple ID).</span>
                      </li>
                      <li>
                        <strong>Ga naar 'Zoek mijn'</strong><br />
                        <span className="text-sm">Tik op "Zoek mijn" of "Zoek mijn iPhone".</span>
                      </li>
                      <li>
                        <strong>Vind je AirPods in de lijst</strong><br />
                        <span className="text-sm">Scroll naar beneden naar "Mijn apparaten".</span>
                      </li>
                      <li>
                        <strong>Verwijder het apparaat</strong><br />
                        <span className="text-sm">Tik op de AirPods en kies "Verwijder dit apparaat" of "Wis AirPods".</span>
                      </li>
                    </ol>
                    <InfoBox title="Tweedehands AirPods gekocht?" variant="info">
                      Als je AirPods van iemand anders hebt overgenomen, vraag dan de vorige eigenaar om ze uit hun Apple ID te verwijderen. 
                      Zonder die stap kun je sommige functies niet gebruiken.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Compatibiliteit */}
            <section id="compatibiliteit" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Compatibiliteit</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="android" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Werken jullie AirPods ook met Android, Windows en andere apparaten?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja! AirPods werken als gewone Bluetooth-oortjes met vrijwel elk apparaat. Android-telefoons, Windows-laptops, 
                      tablets – allemaal geen probleem.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">Koppelen met Android:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Open de AirPods-case en houd het knopje ingedrukt tot het lampje wit knippert</li>
                      <li>Ga op je Android naar Instellingen → Bluetooth</li>
                      <li>Zoek "AirPods" in de lijst en tik erop om te verbinden</li>
                    </ol>

                    <p className="font-medium text-foreground mb-2">Koppelen met Windows:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Open de AirPods-case en houd het knopje ingedrukt tot het lampje wit knippert</li>
                      <li>Ga naar Instellingen → Bluetooth & apparaten</li>
                      <li>Klik op "Apparaat toevoegen" en selecteer je AirPods</li>
                    </ol>

                    <InfoBox title="Goed om te weten" variant="info">
                      Sommige Apple-specifieke functies werken alleen met Apple-apparaten, zoals automatisch wisselen tussen 
                      je iPhone en Mac, Siri-activering, en ruimtelijke audio. De basisfuncties (luisteren, bellen) werken overal.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Welke AirPods heb ik? */}
            <section id="welke" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Welke AirPods heb ik?</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="generatie" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe weet ik welke generatie AirPods ik heb?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Om de juiste vervangende AirPod of case te kopen, moet je weten welke generatie je hebt. 
                      Dat kun je checken via het modelnummer.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">Waar vind je het modelnummer?</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><strong>Op de case:</strong> Kijk op de binnenkant van het deksel (bij het scharnier) of op de onderkant van de case.</li>
                      <li><strong>In Bluetooth-instellingen:</strong> Ga naar Instellingen → Bluetooth → tik op het (i)-icoontje naast je AirPods.</li>
                      <li><strong>Op de originele verpakking:</strong> Als je die nog hebt.</li>
                    </ul>

                    <p className="font-medium text-foreground mb-2">Voorbeelden van modelnummers:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                      <li>A2031, A2032 → AirPods 2e generatie</li>
                      <li>A2564, A2565 → AirPods 3e generatie</li>
                      <li>A3046, A3047 → AirPods 4</li>
                      <li>A2083, A2084 → AirPods Pro 1e generatie</li>
                      <li>A2698, A2699 → AirPods Pro 2e generatie</li>
                    </ul>

                    <InfoBox title="Twijfel je nog?" variant="tip">
                      Stuur ons een foto van je modelnummer via WhatsApp of e-mail. We vertellen je binnen een paar uur 
                      welke generatie je hebt en welke vervangende AirPod of case je nodig hebt.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Kom je er niet uit?</h2>
              <p className="text-muted-foreground mb-4">
                Geen probleem. Stuur ons een berichtje via WhatsApp en we helpen je verder.
              </p>
              <a 
                href="https://wa.me/31612345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Hulp;
