import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Check, 
  Shield, 
  TruckIcon, 
  MessageCircle, 
  Leaf,
  Search,
  TestTube,
  Sparkles
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const OverOns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Over RepairPods – Specialist in Losse AirPods en Oplaadcases</title>
        <meta 
          name="description" 
          content="RepairPods: dé specialist in losse AirPods en oplaadcases. Twee broers helpen je AirPods-set weer compleet te maken. 100% origineel Apple, garantie inbegrepen." 
        />
        <link rel="canonical" href="https://repairpods.nl/over-ons" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-3 md:px-6 lg:px-10 py-4 md:py-8">
          <Breadcrumb className="mb-4 md:mb-6 text-xs md:text-sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Over ons</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <header className="mb-8 md:mb-16">
            <span className="text-xs md:text-sm text-primary bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-3 md:mb-4 inline-block">
              Voorheen Airpods-handel
            </span>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
              Over RepairPods
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl">
              Dé specialist in losse AirPods en oplaadcases.
            </p>
          </header>

          {/* Ons Verhaal */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ons verhaal</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                RepairPods is begonnen als Airpods-handel, ongeveer drie jaar geleden. Twee broers zagen 
                een probleem dat iedereen herkent: je verliest één AirPod, of je oplaadcase gaat kapot. 
                Bij Apple en de meeste winkels moet je dan een compleet nieuwe set kopen. Zonde van je 
                geld, en zonde van de AirPod die nog prima werkt.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Op Marktplaats en vage webshops vond je wel losse AirPods, maar hoe wist je of ze echt 
                waren? En wie gaf er garantie op? Die frustratie was het startpunt. De broers begonnen 
                aan de keukentafel: {"'"}s avonds AirPods testen, schoonmaken en verzenden. Overdag alles 
                leren over generaties, modelnummers en firmware.
              </p>
              <p className="text-lg text-muted-foreground">
                In drie jaar tijd is Airpods-handel uitgegroeid tot RepairPods: een gespecialiseerde 
                webshop die duizenden AirPods-sets weer compleet heeft gemaakt voor klanten in Nederland 
                en heel Europa. De nieuwe naam past beter bij de missie: AirPods repareren in plaats van 
                weggooien en opnieuw kopen.
              </p>
            </div>
          </section>

          {/* Waarom losse AirPods */}
          <section className="mb-16 bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Waarom losse AirPods en losse oplaadcases?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Het probleem</h3>
                <p className="text-muted-foreground mb-4">
                  Eén AirPod kwijtraken gebeurt vaker dan je denkt. Of je oplaadcase valt en de scharnier 
                  breekt. Het frustrerende: Apple en reguliere winkels verkopen vrijwel alleen complete 
                  sets. Voor één verloren oortje betaal je dan €150 of meer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">De oplossing</h3>
                <p className="text-muted-foreground mb-4">
                  Bij RepairPods koop je precies wat je nodig hebt. Een losse linker AirPod. Een losse 
                  rechter AirPod. Of alleen een oplaadcase. Goedkoper, sneller, en een stuk duurzamer 
                  dan een hele nieuwe set aanschaffen.
                </p>
              </div>
            </div>
          </section>

          {/* Zo werken wij */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Zo werken wij</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Selectie & inkoop</h3>
                <p className="text-muted-foreground">
                  We kopen uitsluitend originele Apple-partijen via betrouwbare leveranciers: retouren, 
                  overschotten en voorraadpartijen van winkels en distributeurs. Geen inkoop van 
                  particulieren. Producten worden gesorteerd op generatie en onderdeel (links, rechts, case).
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TestTube className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Testen & controleren</h3>
                <p className="text-muted-foreground">
                  Elke AirPod wordt getest op geluid, microfoon, verbinding en batterijduur. Bij Pro-modellen 
                  controleren we ook de noise cancelling en sensoren. Oplaadcases testen we op laadpoort, 
                  batterij en LED-indicatie. Pas als alles werkt, gaat het product online.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Reinigen & hygiëne</h3>
                <p className="text-muted-foreground">
                  Alle onderdelen worden professioneel gereinigd. In-ear modellen krijgen waar nodig nieuwe 
                  siliconen tips. Geen enkel product verlaat ons magazijn zonder visuele en hygiënische 
                  controle. Daarna krijgt elk product een eerlijke conditie-indeling.
                </p>
              </Card>
            </div>
          </section>

          {/* Onze beloftes */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Onze beloftes aan jou</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">100% origineel Apple</h3>
                  <p className="text-sm text-muted-foreground">
                    Geen namaak of kloons. Alle producten zijn echte Apple-onderdelen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Garantie inbegrepen</h3>
                  <p className="text-sm text-muted-foreground">
                    12 maanden op nieuwe producten, 6 maanden op refurbished. Bovenop de wettelijke garantie.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Minimaal 80% batterij</h3>
                  <p className="text-sm text-muted-foreground">
                    Elke AirPod en case wordt getest. Batterijcapaciteit is minimaal 80% bij verkoop.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Binnen 24 uur verzonden</h3>
                  <p className="text-sm text-muted-foreground">
                    Bestellingen op werkdagen worden dezelfde of volgende dag verstuurd. Heel Europa.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">14 dagen bedenktijd</h3>
                  <p className="text-sm text-muted-foreground">
                    Niet tevreden? Bij fouten onzerzijds betalen wij het retourlabel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Persoonlijke support</h3>
                  <p className="text-sm text-muted-foreground">
                    Bereikbaar via WhatsApp en e-mail. Echte mensen, geen chatbots.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link to="/faq">Bekijk veelgestelde vragen</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/hulp">Contact opnemen</Link>
              </Button>
            </div>
          </section>

          {/* Duurzaamheid */}
          <section className="mb-16 bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  Duurzamer met losse AirPods
                </h2>
                <p className="text-muted-foreground">
                  Minder e-waste, meer hergebruik
                </p>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Elk jaar belanden miljoenen elektronica-producten op de afvalberg, terwijl ze nog prima 
                werken. AirPods zijn daar geen uitzondering op. Bij RepairPods geven we zoveel mogelijk 
                onderdelen een tweede leven. Dat is niet alleen goed voor je portemonnee, maar ook voor 
                het milieu.
              </p>
              <p className="text-muted-foreground">
                De broers achter RepairPods zijn tech-liefhebbers, maar haten verspilling. Door losse 
                vervanging mogelijk te maken, hoef jij niet een complete set weg te gooien omdat er 
                één onderdeel mist of kapot is. Dat is circulariteit in de praktijk: repareren in plaats 
                van vervangen.
              </p>
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Wat klanten over ons zeggen
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In drie jaar tijd hebben we duizenden klanten geholpen hun AirPods-set weer compleet te 
              maken. Van mensen die één oortje kwijtraakten in de sportschool, tot ondernemers die hun 
              hele team van vervangende AirPods voorzagen. De reviews spreken voor zich: betrouwbaar, 
              snel en precies wat je nodig hebt.
            </p>
            <Button asChild>
              <Link to="/reviews">Bekijk alle reviews</Link>
            </Button>
          </section>

          {/* CTA */}
          <section className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Maak je AirPods-set weer compleet
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Of je nu een losse linker AirPod zoekt, een rechter AirPod, of alleen een oplaadcase nodig 
              hebt – bij RepairPods vind je precies wat je mist. 100% origineel Apple, met garantie, en 
              morgen in huis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/losse-airpods">Bekijk losse AirPods</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/losse-oplaadcases">Bekijk oplaadcases</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OverOns;
