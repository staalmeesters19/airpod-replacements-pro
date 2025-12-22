import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductConfigurator from '@/components/home/ProductConfigurator';
import PodFinder from '@/components/home/PodFinder';
import MissingSide from '@/components/home/MissingSide';
import GenerationSelector from '@/components/home/GenerationSelector';
import CaseSelector from '@/components/home/CaseSelector';
import TrustpilotWidget from '@/components/home/TrustpilotWidget';
import TrustBadges from '@/components/home/TrustBadges';
import CustomerQuoteHighlight from '@/components/home/CustomerQuoteHighlight';
import GuaranteesSection from '@/components/home/GuaranteesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import BlogPreview from '@/components/home/BlogPreview';
import SEOContentBlock from '@/components/home/SEOContentBlock';
const Index = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const seoData = {
    nl: {
      title: 'Losse AirPods en Oplaadcases Kopen | RePairPods',
      description: 'Koop losse AirPods links of rechts, en originele oplaadcases. Eén AirPod kwijt? Vervang alleen wat je mist. 100% originele Apple onderdelen, morgen in huis. Voorheen Airpods-handel.',
      keywords: 'losse airpods, airpod links, airpod rechts, oplaadcase, airpods vervangen, losse airpod kopen, airpods case los, repairpods',
      canonical: 'https://repairpods.nl',
      storeDescription: 'Specialist in losse AirPods en oplaadcases. Vervang alleen wat je kwijt bent.',
    },
    en: {
      title: 'Buy Single AirPods & Charging Cases | RePairPods',
      description: 'Buy single AirPods left or right, and original charging cases. Lost an AirPod? Replace only what you need. 100% original Apple parts, fast delivery to Europe.',
      keywords: 'single airpods, airpod left, airpod right, charging case, airpods replacement, buy single airpod, airpods case only, repairpods',
      canonical: 'https://repairpods.nl/en',
      storeDescription: 'Specialist in single AirPods and charging cases. Replace only what you lost.',
    },
  };

  const seo = isEnglish ? seoData.en : seoData.nl;

  return (
    <>
      <Helmet>
        <html lang={isEnglish ? 'en' : 'nl'} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />
        
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="nl" href="https://repairpods.nl" />
        <link rel="alternate" hrefLang="en" href="https://repairpods.nl/en" />
        <link rel="alternate" hrefLang="x-default" href="https://repairpods.nl" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "RePairPods",
            "alternateName": "Airpods-handel",
            "description": seo.storeDescription,
            "url": seo.canonical,
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
          
          {/* Onze beloftes / Garanties */}
          <GuaranteesSection />
          
          {/* Product Configurator - Stel je AirPod samen */}
          <ProductConfigurator />
          
          {/* AirPodFinder Widget */}
          <PodFinder />
          
          {/* Welke kant mis jij? */}
          <MissingSide />
          
          {/* Losse AirPods per generatie */}
          <GenerationSelector />
          
          {/* Losse oplaadcases */}
          <CaseSelector />
          
          {/* Klant Quote Highlight */}
          <CustomerQuoteHighlight />
          
          {/* How It Works - 4 Steps */}
          <HowItWorks />
          
          {/* Why Choose Us - SEO Section */}
          <WhyChooseUs />
          
          {/* Trustpilot Reviews */}
          <TrustpilotWidget />
          
          {/* Blog Preview - Latest Articles */}
          <BlogPreview />
          
          {/* Trust Badges & Payment Methods */}
          <TrustBadges />
          
          {/* SEO Content Block - Long-form content */}
          <SEOContentBlock />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
