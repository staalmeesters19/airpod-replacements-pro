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
        <title>Over Earbuds Restore – Specialist in Losse AirPods en Oplaadcases</title>
        <meta 
          name="description" 
          content="Earbuds Restore: dé specialist in losse AirPods en oplaadcases. Twee broers helpen je AirPods-set weer compleet te maken. 100% origineel Apple, garantie inbegrepen." 
        />
        <link rel="canonical" href="https://earbudrestore.nl/over-ons" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-3 md:px-6 lg:px-10 py-4 md:py-8">
          <Breadcrumb className="mb-3 md:mb-6 text-xs md:text-sm hidden md:flex">
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
          <header className="mb-6 md:mb-16">
            <span className="text-[10px] md:text-sm text-primary bg-primary/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-2 md:mb-4 inline-block">
              Voorheen Airpods-handel
            </span>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6">
              Over Earbuds Restore
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl">
              Dé specialist in losse AirPods en oplaadcases.
            </p>
          </header>

          {/* Ons Verhaal */}
          <section className="mb-8 md:mb-16">
            <h2 className="text-lg md:text-3xl font-semibold mb-3 md:mb-6">Ons verhaal</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-4">
                Earbuds Restore is begonnen als Airpods-handel, ongeveer drie jaar geleden. Twee broers zagen
                een probleem dat iedereen herkent: je verliest één AirPod, of je oplaadcase gaat kapot. 
                Bij Apple en de meeste winkels moet je dan een compleet nieuwe set kopen.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-4 hidden md:block">
                Op Marktplaats en vage webshops vond je wel losse AirPods, maar hoe wist je of ze echt 
                waren? En wie gaf er garantie op? Die frustratie was het startpunt. De broers begonnen 
                aan de keukentafel: {"'"}s avonds AirPods testen, schoonmaken en verzenden. Overdag alles 
                leren over generaties, modelnummers en firmware.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground">
                In drie jaar tijd is Airpods-handel uitgegroeid tot Earbuds Restore: een gespecialiseerde 
                webshop die duizenden AirPods-sets weer compleet heeft gemaakt.
              </p>
            </div>
          </section>

          {/* Waarom losse AirPods */}
          <section className="mb-8 md:mb-16 bg-secondary/30 rounded-xl md:rounded-2xl p-4 md:p-12">
            <h2 className="text-lg md:text-3xl font-semibold mb-4 md:mb-6">
              Waarom losse AirPods?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-sm md:text-xl font-medium mb-2 md:mb-3">Het probleem</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Eén AirPod kwijtraken gebeurt vaker dan je denkt. Apple verkoopt vrijwel alleen complete 
                  sets. Voor één verloren oortje betaal je dan €150 of meer.
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-xl font-medium mb-2 md:mb-3">De oplossing</h3>
                <p className="text-xs md:text-base text-muted-foreground">
                  Bij Earbuds Restore koop je precies wat je nodig hebt. Goedkoper, sneller, en duurzamer.
                </p>
              </div>
            </div>
          </section>

          {/* Zo werken wij */}
          <section className="mb-8 md:mb-16">
            <h2 className="text-lg md:text-3xl font-semibold mb-4 md:mb-8">Zo werken wij</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
              <Card className="p-3 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                  <Search className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xs md:text-xl font-medium mb-1 md:mb-3">Inkoop</h3>
                <p className="text-[10px] md:text-base text-muted-foreground hidden md:block">
                  We kopen uitsluitend originele Apple-partijen via betrouwbare leveranciers.
                </p>
              </Card>
              
              <Card className="p-3 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                  <TestTube className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xs md:text-xl font-medium mb-1 md:mb-3">Testen</h3>
                <p className="text-[10px] md:text-base text-muted-foreground hidden md:block">
                  Elke AirPod wordt getest op geluid, microfoon, verbinding en batterijduur.
                </p>
              </Card>
              
              <Card className="p-3 md:p-6">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                  <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xs md:text-xl font-medium mb-1 md:mb-3">Reinigen</h3>
                <p className="text-[10px] md:text-base text-muted-foreground hidden md:block">
                  Alle onderdelen worden professioneel gereinigd met nieuwe tips waar nodig.
                </p>
              </Card>
            </div>
          </section>

          {/* Onze beloftes */}
          <section className="mb-8 md:mb-16">
            <h2 className="text-lg md:text-3xl font-semibold mb-4 md:mb-8">Onze beloftes</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">100% origineel</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    Geen namaak of kloons.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">Garantie</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    Tot 12 maanden garantie.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">80% batterij</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    Minimaal 80% bij verkoop.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">Snelle verzending</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    Binnen 24 uur verzonden.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">14 dagen retour</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    Niet tevreden? Retourneren.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-base mb-0.5 md:mb-1">Support</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                    WhatsApp & e-mail.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-8 flex flex-wrap gap-2 md:gap-4">
              <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                <Link to="/faq">Veelgestelde vragen</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                <Link to="/hulp">Contact</Link>
              </Button>
            </div>
          </section>

          {/* Duurzaamheid */}
          <section className="mb-8 md:mb-16 bg-primary/5 rounded-xl md:rounded-2xl p-4 md:p-12">
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg md:text-3xl font-semibold mb-1 md:mb-2">
                  Duurzamer met losse AirPods
                </h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  Minder e-waste, meer hergebruik
                </p>
              </div>
            </div>
            <p className="text-xs md:text-base text-muted-foreground">
              Bij Earbuds Restore geven we onderdelen een tweede leven. Goed voor je portemonnee én het milieu.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-secondary/30 rounded-xl md:rounded-2xl p-4 md:p-12 text-center">
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Maak je set weer compleet
            </h2>
            <p className="text-xs md:text-lg text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto">
              100% origineel Apple, met garantie, morgen in huis.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <Button size="sm" asChild className="text-xs md:text-base">
                <Link to="/losse-airpods">Losse AirPods</Link>
              </Button>
              <Button size="sm" variant="outline" asChild className="text-xs md:text-base">
                <Link to="/losse-oplaadcases">Oplaadcases</Link>
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
