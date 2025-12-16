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

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Veelgestelde vragen over bestellen, verzending en garantie | RePairPods</title>
        <meta
          name="description"
          content="Antwoorden op al je vragen over losse AirPods kopen bij RePairPods. Informatie over betalen, verzending, garantie, retourneren en onze productcondities."
        />
        <meta name="keywords" content="losse airpods kopen, airpods garantie, airpods verzending, refurbished airpods, airpod vervangen" />
        <link rel="canonical" href="https://repairpods.nl/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Hoe kan ik betalen bij RePairPods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Je kunt betalen met iDEAL, Bancontact, creditcard (Visa, Mastercard), PayPal, Apple Pay en Google Pay. Alle betalingen gaan direct en veilig bij het afrekenen."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe lang heb ik garantie op mijn AirPods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nieuwe producten hebben 12 maanden garantie. Refurbished producten (Uitstekend, Goed, Gebruikt, Beperkt) hebben 6 maanden garantie."
                }
              },
              {
                "@type": "Question",
                "name": "Zijn jullie AirPods echt origineel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, 100%. Wij verkopen uitsluitend originele Apple AirPods en oplaadcases. Elk product wordt gecontroleerd op serienummer, geluidskwaliteit, microfoon en batterij."
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
          <div className="bg-gradient-to-b from-secondary/30 to-background py-8 md:py-16">
            <div className="container mx-auto px-3 md:px-4 max-w-3xl">
              <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-center">
                Veelgestelde vragen
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-4 md:mb-8">
                Alles over bestellen, verzending en garantie.
              </p>
              
              {/* Quick nav - hidden on mobile */}
              <div className="bg-background rounded-2xl border border-border p-4 md:p-6 hidden md:block">
                <p className="font-medium mb-3">In deze FAQ vind je:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#bestellen" className="hover:text-primary transition-colors">→ Bestellen & betalen</a></li>
                  <li><a href="#verzending" className="hover:text-primary transition-colors">→ Verzending & levering</a></li>
                  <li><a href="#retourneren" className="hover:text-primary transition-colors">→ Retourneren & omruilen</a></li>
                  <li><a href="#garantie" className="hover:text-primary transition-colors">→ Garantie & zekerheid</a></li>
                  <li><a href="#product" className="hover:text-primary transition-colors">→ Product & condities</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">→ Over RePairPods</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="container mx-auto px-3 md:px-4 max-w-3xl py-6 md:py-12">
            
            {/* Bestellen & betalen */}
            <section id="bestellen" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Bestellen & betalen</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="betalen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe kan ik betalen bij RePairPods?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Je kunt betalen met alle gangbare betaalmethoden. Alle betalingen gaan direct en veilig bij het afrekenen via een beveiligde verbinding.
                    </p>
                    <p className="font-medium text-foreground mb-2">Beschikbare betaalmethoden:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>iDEAL</li>
                      <li>Bancontact</li>
                      <li>Creditcard (Visa, Mastercard)</li>
                      <li>PayPal</li>
                      <li>Apple Pay</li>
                      <li>Google Pay</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="achteraf" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Kan ik achteraf betalen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Nee, achteraf betalen is niet mogelijk bij RePairPods. Alle betalingen gaan direct bij het afrekenen.
                    </p>
                    <p className="mb-4">
                      We hebben hier bewust voor gekozen. Door direct af te rekenen houden we onze prijzen laag en het proces simpel. Geen gedoe met facturen of incasso's achteraf.
                    </p>
                    <InfoBox title="Twijfel je?" variant="tip">
                      Neem gerust contact op via WhatsApp. We denken graag met je mee over welk product het beste bij je past.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wijzigen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Kan ik mijn bestelling nog wijzigen of annuleren?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, zolang je bestelling nog niet is verwerkt of verzonden, kunnen we meestal nog wijzigen of annuleren. Wees er wel snel bij – we verzenden namelijk binnen 24 uur.
                    </p>
                    <p className="font-medium text-foreground mb-2">Zo werkt het:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Neem zo snel mogelijk contact op via WhatsApp of e-mail</li>
                      <li>Geef je bestelnummer en de gewenste wijziging door</li>
                      <li>We laten je weten of het nog lukt</li>
                    </ol>
                    <p>
                      Is je pakket al verzonden? Dan kun je gebruikmaken van de normale retourprocedure met 14 dagen bedenktijd.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Verzending & levering */}
            <section id="verzending" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Verzending & levering</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="snelheid" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe snel wordt mijn bestelling verzonden?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Bestellingen die op werkdagen binnenkomen, worden binnen 24 uur verzonden. 
                      We verzenden waar mogelijk als brievenbuspakketje – fijn, want dan hoef je niet thuis te blijven.
                    </p>
                    <InfoBox title="Let op" variant="info">
                      De levertijd hangt ook af van de pakketdienst. Bij drukte (feestdagen, acties) kan het soms een dag langer duren. 
                      We doen er alles aan om je bestelling zo snel mogelijk bij je te krijgen.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="landen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Naar welke landen verzenden jullie?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      We verzenden naar alle landen binnen Europa. Van Nederland tot Portugal, van Finland tot Griekenland – we leveren overal.
                    </p>
                    <p className="font-medium text-foreground mb-2">Indicatieve levertijden:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li><strong>Nederland:</strong> 1–2 werkdagen</li>
                      <li><strong>België & Duitsland:</strong> 2–4 werkdagen</li>
                      <li><strong>Overige EU-landen:</strong> 3–7 werkdagen</li>
                    </ul>
                    <p className="text-sm">
                      Dit zijn richtlijnen. De exacte levertijd hangt af van de pakketdienst in jouw regio.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kosten" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Wat zijn de verzendkosten?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      De verzendkosten zijn afhankelijk van je locatie. In de checkout zie je altijd precies wat de verzendkosten voor jouw bestelling zijn.
                    </p>
                    <p className="font-medium text-foreground mb-2">Tarieven vanaf:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li><strong>Nederland:</strong> vanaf €3,95</li>
                      <li><strong>België & Duitsland:</strong> vanaf €6,95</li>
                      <li><strong>Overige EU-landen:</strong> vanaf €9,95</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracking" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Krijg ik een Track & Trace-code?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, zodra je bestelling is verzonden ontvang je automatisch een e-mail met de Track & Trace-code. 
                      Daarmee kun je precies volgen waar je pakket is.
                    </p>
                    <InfoBox title="Geen e-mail ontvangen?" variant="tip">
                      Check eerst je spam-map. Nog steeds niets? Neem contact met ons op met je bestelnummer, 
                      dan sturen we de tracking-info opnieuw.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Retourneren & omruilen */}
            <section id="retourneren" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Retourneren & omruilen</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="bedenktijd" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe werkt retourneren en hoeveel dagen bedenktijd heb ik?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Je hebt 14 dagen bedenktijd vanaf het moment dat je je bestelling ontvangt. 
                      Binnen die periode mag je zonder opgaaf van reden retourneren.
                    </p>
                    <p className="font-medium text-foreground mb-2">Zo werkt het:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Neem contact met ons op via WhatsApp of e-mail</li>
                      <li>Je ontvangt instructies voor de retourzending</li>
                      <li>Stuur het product terug in originele staat</li>
                      <li>Na ontvangst en controle storten we het bedrag terug</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="retourkosten" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Wie betaalt de retourkosten?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Dat hangt af van de reden voor de retour. We vinden het belangrijk om hier eerlijk en duidelijk over te zijn.
                    </p>
                    
                    <p className="font-medium text-foreground mb-2">RePairPods betaalt bij:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Verkeerd product geleverd</li>
                      <li>Defect product bij ontvangst</li>
                      <li>Product niet zoals beschreven</li>
                    </ul>

                    <p className="font-medium text-foreground mb-2">Jij betaalt bij:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Verkeerde generatie besteld</li>
                      <li>Spijt van aankoop</li>
                      <li>Product toch niet nodig</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="verkeerde-generatie" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Ik heb per ongeluk de verkeerde generatie besteld. Wat nu?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Geen stress, dit gebeurt vaker. Binnen de bedenktijd van 14 dagen kun je eenvoudig omruilen naar de juiste generatie.
                    </p>
                    <p className="font-medium text-foreground mb-2">Zo werkt omruilen:</p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li>Neem contact met ons op</li>
                      <li>Je betaalt de retourkosten</li>
                      <li>Is de juiste generatie duurder? Dan betaal je alleen het prijsverschil</li>
                      <li>We sturen de juiste AirPod of case zo snel mogelijk op</li>
                    </ol>
                    <InfoBox title="Weet je niet zeker welke generatie je hebt?" variant="tip">
                      Check onze pagina "Welke AirPods heb ik?" of stuur ons een foto van je modelnummer via WhatsApp. We helpen je graag.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Garantie & zekerheid */}
            <section id="garantie" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Garantie & zekerheid</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="garantieduur" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe lang heb ik garantie op mijn AirPods en oplaadcase?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      De garantieduur hangt af van de conditie van je product. Bij alle producten kun je rekenen op degelijke garantie.
                    </p>
                    
                    <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                      <p className="font-medium text-foreground mb-3">Garantietermijnen:</p>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Nieuwe producten (staat: Nieuw)</span>
                          <span className="font-medium text-primary">12 maanden</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Refurbished (Uitstekend, Goed, Gebruikt, Beperkt)</span>
                          <span className="font-medium text-primary">6 maanden</span>
                        </li>
                      </ul>
                    </div>

                    <p className="font-medium text-foreground mb-2">De garantie dekt bijvoorbeeld:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Een oortje dat ineens niet meer werkt</li>
                      <li>Een case die niet meer oplaadt</li>
                      <li>Geluidsproblemen bij normaal gebruik</li>
                    </ul>
                    
                    <InfoBox title="Let op" variant="warning">
                      Schade door vallen, stoten of water valt niet onder de garantie.
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wettelijk" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Wat is het verschil tussen jullie garantie en de wettelijke garantie?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      De wettelijke garantie is je recht als consument op een product dat doet wat je mag verwachten. 
                      Daar zit geen vaste termijn aan – het hangt af van het product en hoe lang je redelijkerwijs mag verwachten dat het meegaat.
                    </p>
                    <p className="mb-4">
                      Onze garantie van 6 of 12 maanden is daar <strong>bovenop</strong>: een extra, duidelijke belofte van ons aan jou. 
                      Binnen die periode helpen we je sowieso als er iets mis is.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="batterij-garantie" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Valt de batterij ook onder de garantie?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, maar met een nuance. Bij aankoop heeft elk product minimaal 80% batterijcapaciteit. 
                      Normale batterijslijtage door gebruik is normaal – dat hoort bij hoe lithium-ion batterijen werken.
                    </p>
                    <p className="mb-4">
                      Gaat de batterij binnen de garantieperiode echter extreem snel achteruit bij normaal gebruik? 
                      Dan valt dat onder de garantie en zoeken we samen een oplossing.
                    </p>
                    
                    <InfoBox title="Tips voor langere batterijduur" variant="tip">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Bewaar je AirPods in de case als je ze niet gebruikt</li>
                        <li>Vermijd extreme temperaturen (kou én hitte)</li>
                        <li>Laad niet altijd tot 100% – tussen 20-80% is optimaal</li>
                        <li>Gebruik bij voorkeur een 5W-adapter voor langzaam laden</li>
                      </ul>
                    </InfoBox>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Product, kwaliteit & condities */}
            <section id="product" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Product, kwaliteit & condities</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="origineel" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Zijn jullie AirPods echt origineel?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, 100%. Wij verkopen uitsluitend originele Apple AirPods en oplaadcases. Geen namaak, geen alternatieven.
                    </p>
                    <p className="font-medium text-foreground mb-2">Elk product wordt gecontroleerd op:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Serie- en modelnummer</li>
                      <li>Geluidskwaliteit links én rechts</li>
                      <li>Microfoon en ruisonderdrukking</li>
                      <li>Bluetooth-verbinding en koppeling</li>
                      <li>Batterijcapaciteit (minimaal 80%)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="condities" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Wat is het verschil tussen nieuw, uitstekend, goed, gebruikt en beperkt?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Wij bieden vijf condities aan. Elke conditie is volledig getest en functioneel – het verschil zit vooral in het uiterlijk en de prijs.
                    </p>
                    
                    {/* Conditions Table */}
                    <div className="overflow-x-auto -mx-2">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-2 font-medium">Staat</th>
                            <th className="text-left py-3 px-2 font-medium">Uiterlijk</th>
                            <th className="text-left py-3 px-2 font-medium">Technisch</th>
                            <th className="text-left py-3 px-2 font-medium">Batterij</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Nieuw</td>
                            <td className="py-3 px-2">Ongebruikt, geen sporen</td>
                            <td className="py-3 px-2">Als nieuw</td>
                            <td className="py-3 px-2">Fabrieksniveau</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Uitstekend</td>
                            <td className="py-3 px-2">Nauwelijks zichtbare sporen</td>
                            <td className="py-3 px-2">100% in orde</td>
                            <td className="py-3 px-2">90-100%</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Goed</td>
                            <td className="py-3 px-2">Lichte gebruikssporen</td>
                            <td className="py-3 px-2">100% in orde</td>
                            <td className="py-3 px-2">Min. 80%</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 px-2 font-medium text-primary">Gebruikt</td>
                            <td className="py-3 px-2">Zichtbare sporen (krasjes)</td>
                            <td className="py-3 px-2">Functioneel goed</td>
                            <td className="py-3 px-2">Min. 80%</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-2 font-medium text-primary">Beperkt</td>
                            <td className="py-3 px-2">Duidelijk gebruikt</td>
                            <td className="py-3 px-2">Functioneel in orde</td>
                            <td className="py-3 px-2">Min. 80%*</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Bij "Beperkt" kun je een kortere gebruiksduur per oplaadbeurt verwachten – dit is de voordeligste optie.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hygiene" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Zijn refurbished AirPods wel hygiënisch?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Absoluut. Elke AirPod en case wordt professioneel gereinigd voordat we hem verzenden. 
                      Bij in-ear modellen (zoals de AirPods Pro) worden de siliconen oordopjes waar nodig vervangen.
                    </p>
                    <p>
                      Je ontvangt een product dat schoon, fris en klaar voor gebruik is. Daar hoef je je geen zorgen over te maken.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="duurzaam" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Waarom is een losse AirPod kopen duurzamer dan een nieuwe set?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Door alleen te vervangen wat je mist, voorkom je onnodig afval. Dat is beter voor het milieu én voor je portemonnee.
                    </p>
                    <p className="font-medium text-foreground mb-2">Waarom dit duurzamer is:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Je gooit geen werkende AirPod of case weg</li>
                      <li>Minder e-waste in de wereld</li>
                      <li>Minder nieuwe grondstoffen nodig</li>
                      <li>Minder productie en transport</li>
                    </ul>
                    <p className="mt-4">
                      Een klein gebaar met grote impact. En je bespaart al snel €100+ vergeleken met een hele nieuwe set.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Over RePairPods & contact */}
            <section id="contact" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6">Over RePairPods & contact</h2>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="sets" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Verkopen jullie ook complete AirPods-sets?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Nee, wij verkopen geen complete sets (links + rechts + case samen). 
                      Dat is bewust: wij zijn gespecialiseerd in losse vervangende oortjes en losse cases.
                    </p>
                    <p>
                      Zo voorkom je verspilling. Je vervangt alleen wat je kwijt bent of kapot is, niet meer. 
                      Dat is waar RePairPods om draait.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-opnemen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Hoe kan ik contact met jullie opnemen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Je kunt ons op verschillende manieren bereiken. We reageren doorgaans binnen enkele uren op werkdagen.
                    </p>
                    <ul className="space-y-2">
                      <li><strong>WhatsApp:</strong> +31 6 12345678 (snelste reactie)</li>
                      <li><strong>E-mail:</strong> info@repairpods.nl</li>
                      <li><strong>Instagram:</strong> @airpodshandel</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ophalen" className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/30">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Kan ik mijn bestelling ook ophalen?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-4">
                      Ja, ophalen is mogelijk op afspraak in Amsterdam. Neem contact met ons op om een moment te plannen.
                    </p>
                    <p>
                      Zo kun je je AirPod of case direct meenemen en eventueel ter plekke testen.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Vraag niet beantwoord?</h2>
              <p className="text-muted-foreground mb-4">
                Stuur ons een bericht via WhatsApp. We helpen je graag verder.
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

export default FAQ;
