import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import USPStrip from '@/components/home/USPStrip';
import ProductConfigurator from '@/components/home/ProductConfigurator';
import PodFinder from '@/components/home/PodFinder';
import MissingSide from '@/components/home/MissingSide';
import GenerationSelector from '@/components/home/GenerationSelector';
import CaseSelector from '@/components/home/CaseSelector';
import TrustpilotWidget from '@/components/home/TrustpilotWidget';
import TrustBadges from '@/components/home/TrustBadges';

import CustomerQuoteHighlight from '@/components/home/CustomerQuoteHighlight';
import GuaranteesSection from '@/components/home/GuaranteesSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Losse AirPods en Oplaadcases Kopen | RePairPods</title>
        <meta
          name="description"
          content="Koop losse AirPods links of rechts, en originele oplaadcases. Eén AirPod kwijt? Vervang alleen wat je mist. 100% originele Apple onderdelen, morgen in huis. Voorheen Airpods-handel."
        />
        <meta name="keywords" content="losse airpods, airpod links, airpod rechts, oplaadcase, airpods vervangen, losse airpod kopen, airpods case los, repairpods" />
        <link rel="canonical" href="https://repairpods.nl" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "RePairPods",
            "alternateName": "Airpods-handel",
            "description": "Specialist in losse AirPods en oplaadcases. Vervang alleen wat je kwijt bent.",
            "url": "https://repairpods.nl",
            "image": "https://repairpods.nl/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Amsterdam",
              "addressCountry": "NL"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1000"
            },
            "sameAs": [
              "https://nl.trustpilot.com/review/repairpods.nl"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero met achtergrondafbeelding */}
          <Hero />
          
          {/* USP Strip */}
          <USPStrip />
          
          {/* Product Configurator - Stel je AirPod samen */}
          <ProductConfigurator />
          
          {/* AirPodFinder Widget */}
          <PodFinder />
          
          {/* Onze beloftes / Garanties */}
          <GuaranteesSection />
          
          {/* Welke kant mis jij? */}
          <MissingSide />
          
          {/* Losse AirPods per generatie */}
          <GenerationSelector />
          
          {/* Losse oplaadcases */}
          <CaseSelector />
          
          {/* Klant Quote Highlight */}
          <CustomerQuoteHighlight />
          
          {/* Trustpilot Reviews */}
          <TrustpilotWidget />
          
          {/* Trust Badges & Payment Methods */}
          <TrustBadges />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
