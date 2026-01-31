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

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us – Specialist in Single AirPods & Charging Cases | Earbud restore</title>
        <meta 
          name="description" 
          content="Earbud restore: the specialist in single AirPods and charging cases. Two brothers help you complete your AirPods set. 100% original Apple, warranty included." 
        />
        <link rel="canonical" href="https://earbudrestore.nl/en/about-us" />
        <html lang="en" />
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/en">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <header className="mb-16">
            <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
              Formerly Airpods-handel
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Earbud restore
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The specialist in single AirPods and charging cases. We help you complete your AirPods set – without buying a whole new set.
            </p>
          </header>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our story</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Earbud restore started as Airpods-handel about three years ago. Two brothers saw a 
                problem everyone recognizes: you lose one AirPod, or your charging case breaks. 
                At Apple and most stores, you have to buy a complete new set. A waste of money 
                and of the AirPod that still works perfectly.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                On marketplaces and sketchy webshops you could find single AirPods, but how did 
                you know they were real? And who gave warranty on them? That frustration was the 
                starting point. The brothers started at the kitchen table: testing, cleaning, 
                and shipping AirPods in the evenings. Learning everything about generations, 
                model numbers, and firmware during the day.
              </p>
              <p className="text-lg text-muted-foreground">
                In three years, Airpods-handel has grown into Earbud restore: a specialized webshop 
                that has completed thousands of AirPods sets for customers in the Netherlands 
                and across Europe. The new name better fits the mission: repairing AirPods 
                instead of throwing them away and buying new.
              </p>
            </div>
          </section>

          {/* Why single AirPods */}
          <section className="mb-16 bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why single AirPods and charging cases?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">The problem</h3>
                <p className="text-muted-foreground mb-4">
                  Losing one AirPod happens more often than you think. Or your charging case 
                  falls and the hinge breaks. The frustrating part: Apple and regular stores 
                  almost only sell complete sets. For one lost earbud, you pay €150 or more.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">The solution</h3>
                <p className="text-muted-foreground mb-4">
                  At Earbud restore, you buy exactly what you need. A single left AirPod. A single 
                  right AirPod. Or just a charging case. Cheaper, faster, and much more 
                  sustainable than buying a whole new set.
                </p>
              </div>
            </div>
          </section>

          {/* How we work */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">How we work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Selection & sourcing</h3>
                <p className="text-muted-foreground">
                  We only buy original Apple products via trusted suppliers: returns, overstock, 
                  and inventory from stores and distributors. No purchasing from individuals. 
                  Products are sorted by generation and part (left, right, case).
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TestTube className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Testing & inspection</h3>
                <p className="text-muted-foreground">
                  Each AirPod is tested for sound, microphone, connection, and battery life. 
                  For Pro models, we also check noise cancellation and sensors. Charging cases 
                  are tested for charging port, battery, and LED indication. Only when 
                  everything works does it go online.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Cleaning & hygiene</h3>
                <p className="text-muted-foreground">
                  All parts are professionally cleaned. In-ear models get new silicone tips 
                  where needed. No product leaves our warehouse without visual and hygienic 
                  inspection. After that, each product gets a fair condition rating.
                </p>
              </Card>
            </div>
          </section>

          {/* Our promises */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our promises to you</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">100% original Apple</h3>
                  <p className="text-sm text-muted-foreground">
                    No fakes or clones. All products are genuine Apple parts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Warranty included</h3>
                  <p className="text-sm text-muted-foreground">
                    12 months on new products, 6 months on refurbished. On top of legal warranty.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Minimum 80% battery</h3>
                  <p className="text-sm text-muted-foreground">
                    Every AirPod and case is tested. Battery capacity is at least 80% at sale.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Shipped within 24 hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Orders on business days are shipped the same or next day. All of Europe.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">14-day return policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Not satisfied? For errors on our side, we pay the return label.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Personal support</h3>
                  <p className="text-sm text-muted-foreground">
                    Available via WhatsApp and email. Real people, no chatbots.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link to="/en/faq">View FAQ</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/en/help">Contact us</Link>
              </Button>
            </div>
          </section>

          {/* Sustainability */}
          <section className="mb-16 bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  More sustainable with single AirPods
                </h2>
                <p className="text-muted-foreground">
                  Less e-waste, more reuse
                </p>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Every year millions of electronics end up in landfills while they still work 
                perfectly. AirPods are no exception. At Earbud restore, we give as many parts as 
                possible a second life. That's not only good for your wallet, but also for 
                the environment.
              </p>
              <p className="text-muted-foreground">
                The brothers behind Earbud restore are tech lovers, but hate waste. By making 
                single replacement possible, you don't have to throw away a complete set 
                because one part is missing or broken. That's circularity in practice: 
                repair instead of replace.
              </p>
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What customers say about us
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In three years, we've helped thousands of customers complete their AirPods set. 
              From people who lost one earbud at the gym, to businesses equipping their entire 
              team with replacement AirPods. The reviews speak for themselves: reliable, fast, 
              and exactly what you need.
            </p>
            <Button asChild>
              <Link to="/en/reviews">View all reviews</Link>
            </Button>
          </section>

          {/* CTA */}
          <section className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Complete your AirPods set
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for a single left AirPod, a right AirPod, or just a 
              charging case – at Earbud restore you'll find exactly what you're missing. 100% 
              original Apple, with warranty, and delivered tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/en/single-airpods">View single AirPods</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/en/charging-cases">View charging cases</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;