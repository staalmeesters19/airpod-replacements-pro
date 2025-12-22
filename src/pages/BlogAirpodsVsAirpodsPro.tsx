import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Check, 
  X, 
  ArrowRight, 
  Headphones, 
  Volume2, 
  Battery, 
  Droplets,
  Ear,
  Music,
  Phone,
  Lightbulb,
  Star
} from "lucide-react";

const BlogAirpodsVsAirpodsPro = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const content = {
    nl: {
      title: "AirPods vs AirPods Pro: Wat is het Verschil en Welke Moet Je Kiezen?",
      metaDescription: "Uitgebreide vergelijking tussen AirPods en AirPods Pro. Ontdek de verschillen in geluidskwaliteit, noise cancelling, pasvorm en prijs. Maak de juiste keuze voor jouw situatie.",
      intro: "Apple biedt verschillende AirPods-modellen aan, maar welke past het beste bij jou? In dit artikel vergelijken we de standaard AirPods met de AirPods Pro, zodat je een weloverwogen keuze kunt maken.",
      
      quickComparisonTitle: "Snelle Vergelijking",
      feature: "Kenmerk",
      airpods: "AirPods (2e/3e/4e gen)",
      airpodsPro: "AirPods Pro",
      
      designTitle: "Design & Pasvorm",
      designIntro: "Een van de grootste verschillen tussen de AirPods en AirPods Pro zit in het design en de pasvorm.",
      
      airpodsDesignTitle: "AirPods Design",
      airpodsDesignText: "De standaard AirPods hebben een universele pasvorm zonder siliconen oortips. Ze zitten los in je oor en zijn ideaal voor mensen die geen druk op hun gehoorgang willen. Het nadeel is dat ze bij sommige oorvormen minder goed blijven zitten.",
      
      airpodsProDesignTitle: "AirPods Pro Design",
      airpodsProDesignText: "De AirPods Pro worden geleverd met verwisselbare siliconen oortips in verschillende maten (XS, S, M, L). Dit zorgt voor een betere afdichting, wat essentieel is voor de noise cancelling functie. De Pro-versie zit ook steviger in je oor tijdens beweging.",
      
      soundTitle: "Geluidskwaliteit",
      soundIntro: "Beide modellen leveren uitstekend geluid, maar er zijn belangrijke verschillen.",
      
      airpodsSoundTitle: "AirPods Geluid",
      airpodsSoundFeatures: [
        "Helder en gebalanceerd geluid",
        "Adaptieve EQ (vanaf 3e generatie)",
        "Ruimtelijke audio met dynamische headtracking (4e gen)",
        "Geen actieve ruisonderdrukking"
      ],
      
      airpodsProSoundTitle: "AirPods Pro Geluid",
      airpodsProSoundFeatures: [
        "Superieure geluidskwaliteit met aangepaste drivers",
        "Actieve Noise Cancelling (ANC)",
        "Transparantiemodus om omgeving te horen",
        "Adaptieve audio en gespreksbewustzijn",
        "Ruimtelijke audio met dynamische headtracking"
      ],
      
      noiseCancellingTitle: "Noise Cancelling: Het Grote Verschil",
      noiseCancellingIntro: "Dit is het belangrijkste verschil tussen beide modellen.",
      noiseCancellingText: "De AirPods Pro beschikken over Actieve Noise Cancelling (ANC) die omgevingsgeluid actief blokkeert. Dit is ideaal voor drukke kantoren, openbaar vervoer of vliegreizen. De standaard AirPods hebben geen noise cancelling en laten meer omgevingsgeluid door.",
      transparencyTitle: "Transparantiemodus",
      transparencyText: "De AirPods Pro hebben ook een transparantiemodus waarmee je je omgeving kunt horen zonder de oordopjes uit te doen. Perfect voor korte gesprekken of als je in het verkeer loopt.",
      
      batteryTitle: "Batterijduur",
      batteryIntro: "Beide modellen bieden vergelijkbare batterijprestaties.",
      listeningTime: "Luistertijd",
      talkTime: "Beltijd",
      withCase: "Met case",
      hours: "uur",
      
      waterResistanceTitle: "Water- en Zweetbestendigheid",
      waterResistanceText: "Zowel de AirPods (3e/4e gen) als de AirPods Pro hebben een IPX4-rating, wat betekent dat ze bestand zijn tegen zweet en lichte regen. De AirPods 2e generatie hebben geen officiële waterbestendigheid.",
      
      priceTitle: "Prijsvergelijking",
      priceIntro: "De prijs verschilt aanzienlijk tussen beide modellen.",
      newPrice: "Nieuw bij Apple",
      singlePodPrice: "Losse AirPod",
      
      whenChooseTitle: "Wanneer Kies Je Welke?",
      chooseAirpodsTitle: "Kies AirPods als je:",
      chooseAirpodsList: [
        "Een budgetvriendelijkere optie zoekt",
        "Geen siliconen oortips in je oren wilt",
        "Noise cancelling niet nodig hebt",
        "Vooral thuis of op rustige plekken luistert"
      ],
      chooseAirpodsProTitle: "Kies AirPods Pro als je:",
      chooseAirpodsProList: [
        "Noise cancelling belangrijk vindt",
        "De beste geluidskwaliteit wilt",
        "In drukke omgevingen werkt of reist",
        "Sport en een stevige pasvorm nodig hebt",
        "Bereid bent meer te investeren"
      ],
      
      lostPodTitle: "AirPod Kwijt of Kapot?",
      lostPodText: "Heb je een AirPod verloren of is er eentje kapot? Bij RePairPods kun je losse AirPods en oplaadcases bestellen. Dit is vaak veel voordeliger dan een compleet nieuw setje kopen.",
      
      checkModelTitle: "Weet je niet welk model je hebt?",
      checkModelText: "Gebruik onze handige tool om te ontdekken welk AirPods-model je bezit.",
      checkModelButton: "Ontdek je model",
      
      ctaTitle: "Losse AirPod Nodig?",
      ctaText: "Bij RePairPods vind je losse AirPods en oplaadcases voor alle generaties. Origineel Apple, scherpe prijzen en snelle levering.",
      ctaButton: "Bekijk ons assortiment",
      
      faqTitle: "Veelgestelde Vragen",
      faqs: [
        {
          question: "Kan ik een AirPod Pro combineren met een gewone AirPod?",
          answer: "Nee, AirPods en AirPods Pro zijn niet onderling uitwisselbaar. Ze gebruiken verschillende technologie en zijn niet compatibel met elkaar."
        },
        {
          question: "Zijn AirPods Pro de meerprijs waard?",
          answer: "Als je noise cancelling belangrijk vindt of in drukke omgevingen werkt, zijn de AirPods Pro zeker de meerprijs waard. Voor casual gebruik thuis volstaan de standaard AirPods prima."
        },
        {
          question: "Welke AirPods zijn het beste voor sport?",
          answer: "De AirPods Pro zitten door de siliconen oortips steviger in je oor en zijn daarom beter geschikt voor sport. De standaard AirPods kunnen tijdens intensieve beweging losraken."
        },
        {
          question: "Kan ik de oortips van AirPods Pro vervangen?",
          answer: "Ja, de siliconen oortips van de AirPods Pro zijn vervangbaar. Je kunt ze los kopen in verschillende maten (XS, S, M, L)."
        }
      ],
      
      relatedArticles: "Gerelateerde Artikelen",
      readMore: "Lees meer"
    },
    en: {
      title: "AirPods vs AirPods Pro: What's the Difference and Which Should You Choose?",
      metaDescription: "Complete comparison between AirPods and AirPods Pro. Discover differences in sound quality, noise cancelling, fit, and price. Make the right choice for your situation.",
      intro: "Apple offers several AirPods models, but which one suits you best? In this article, we compare the standard AirPods with the AirPods Pro, so you can make an informed decision.",
      
      quickComparisonTitle: "Quick Comparison",
      feature: "Feature",
      airpods: "AirPods (2nd/3rd/4th gen)",
      airpodsPro: "AirPods Pro",
      
      designTitle: "Design & Fit",
      designIntro: "One of the biggest differences between AirPods and AirPods Pro is in the design and fit.",
      
      airpodsDesignTitle: "AirPods Design",
      airpodsDesignText: "The standard AirPods have a universal fit without silicone ear tips. They sit loosely in your ear and are ideal for people who don't want pressure on their ear canal. The downside is that they may not stay in place well with some ear shapes.",
      
      airpodsProDesignTitle: "AirPods Pro Design",
      airpodsProDesignText: "The AirPods Pro come with interchangeable silicone ear tips in different sizes (XS, S, M, L). This ensures a better seal, which is essential for the noise cancelling function. The Pro version also stays more securely in your ear during movement.",
      
      soundTitle: "Sound Quality",
      soundIntro: "Both models deliver excellent sound, but there are important differences.",
      
      airpodsSoundTitle: "AirPods Sound",
      airpodsSoundFeatures: [
        "Clear and balanced sound",
        "Adaptive EQ (from 3rd generation)",
        "Spatial audio with dynamic head tracking (4th gen)",
        "No active noise cancellation"
      ],
      
      airpodsProSoundTitle: "AirPods Pro Sound",
      airpodsProSoundFeatures: [
        "Superior sound quality with custom drivers",
        "Active Noise Cancelling (ANC)",
        "Transparency mode to hear surroundings",
        "Adaptive audio and conversation awareness",
        "Spatial audio with dynamic head tracking"
      ],
      
      noiseCancellingTitle: "Noise Cancelling: The Big Difference",
      noiseCancellingIntro: "This is the most important difference between both models.",
      noiseCancellingText: "The AirPods Pro feature Active Noise Cancelling (ANC) that actively blocks ambient noise. This is ideal for busy offices, public transport, or flights. The standard AirPods don't have noise cancelling and let more ambient sound through.",
      transparencyTitle: "Transparency Mode",
      transparencyText: "The AirPods Pro also have a transparency mode that allows you to hear your surroundings without removing the earbuds. Perfect for brief conversations or when walking in traffic.",
      
      batteryTitle: "Battery Life",
      batteryIntro: "Both models offer comparable battery performance.",
      listeningTime: "Listening time",
      talkTime: "Talk time",
      withCase: "With case",
      hours: "hours",
      
      waterResistanceTitle: "Water & Sweat Resistance",
      waterResistanceText: "Both the AirPods (3rd/4th gen) and AirPods Pro have an IPX4 rating, meaning they're resistant to sweat and light rain. The AirPods 2nd generation don't have official water resistance.",
      
      priceTitle: "Price Comparison",
      priceIntro: "The price differs significantly between both models.",
      newPrice: "New at Apple",
      singlePodPrice: "Single AirPod",
      
      whenChooseTitle: "When to Choose Which?",
      chooseAirpodsTitle: "Choose AirPods if you:",
      chooseAirpodsList: [
        "Want a more budget-friendly option",
        "Don't want silicone ear tips in your ears",
        "Don't need noise cancelling",
        "Mainly listen at home or in quiet places"
      ],
      chooseAirpodsProTitle: "Choose AirPods Pro if you:",
      chooseAirpodsProList: [
        "Find noise cancelling important",
        "Want the best sound quality",
        "Work or travel in busy environments",
        "Do sports and need a secure fit",
        "Are willing to invest more"
      ],
      
      lostPodTitle: "Lost or Broken AirPod?",
      lostPodText: "Lost an AirPod or is one broken? At RePairPods you can order single AirPods and charging cases. This is often much more affordable than buying a complete new set.",
      
      checkModelTitle: "Not sure which model you have?",
      checkModelText: "Use our handy tool to discover which AirPods model you own.",
      checkModelButton: "Discover your model",
      
      ctaTitle: "Need a Single AirPod?",
      ctaText: "At RePairPods you'll find single AirPods and charging cases for all generations. Original Apple, competitive prices, and fast delivery.",
      ctaButton: "View our products",
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can I combine an AirPod Pro with a regular AirPod?",
          answer: "No, AirPods and AirPods Pro are not interchangeable. They use different technology and are not compatible with each other."
        },
        {
          question: "Are AirPods Pro worth the extra cost?",
          answer: "If noise cancelling is important to you or you work in busy environments, the AirPods Pro are definitely worth the extra cost. For casual home use, the standard AirPods work just fine."
        },
        {
          question: "Which AirPods are best for sports?",
          answer: "The AirPods Pro fit more securely due to the silicone ear tips and are therefore better suited for sports. The standard AirPods may come loose during intense movement."
        },
        {
          question: "Can I replace the ear tips on AirPods Pro?",
          answer: "Yes, the silicone ear tips on the AirPods Pro are replaceable. You can buy them separately in different sizes (XS, S, M, L)."
        }
      ],
      
      relatedArticles: "Related Articles",
      readMore: "Read more"
    }
  };

  const t = isEnglish ? content.en : content.nl;
  const langPrefix = isEnglish ? '/en' : '';

  const comparisonData = [
    { 
      feature: isEnglish ? "Noise Cancelling" : "Noise Cancelling", 
      airpods: false, 
      airpodsPro: true 
    },
    { 
      feature: isEnglish ? "Transparency Mode" : "Transparantiemodus", 
      airpods: false, 
      airpodsPro: true 
    },
    { 
      feature: isEnglish ? "Silicone Ear Tips" : "Siliconen Oortips", 
      airpods: false, 
      airpodsPro: true 
    },
    { 
      feature: isEnglish ? "Spatial Audio" : "Ruimtelijke Audio", 
      airpods: "3e/4e gen", 
      airpodsPro: true 
    },
    { 
      feature: isEnglish ? "Water Resistant (IPX4)" : "Waterbestendig (IPX4)", 
      airpods: "3e/4e gen", 
      airpodsPro: true 
    },
    { 
      feature: isEnglish ? "Wireless Charging" : "Draadloos Opladen", 
      airpods: isEnglish ? "Optional" : "Optioneel", 
      airpodsPro: true 
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "RePairPods"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RePairPods",
      "url": "https://repairpods.nl"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <Helmet>
        <html lang={isEnglish ? "en" : "nl"} />
        <title>{t.title} | RePairPods</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={isEnglish 
          ? "airpods vs airpods pro, airpods comparison, airpods pro difference, noise cancelling airpods, which airpods to buy"
          : "airpods vs airpods pro, airpods vergelijking, airpods pro verschil, noise cancelling airpods, welke airpods kopen"
        } />
        <link rel="canonical" href={`https://repairpods.nl${isEnglish ? '/en/blog/airpods-vs-airpods-pro' : '/blog/airpods-vs-airpods-pro'}`} />
        <link rel="alternate" hrefLang="nl" href="https://repairpods.nl/blog/airpods-vs-airpods-pro" />
        <link rel="alternate" hrefLang="en" href="https://repairpods.nl/en/blog/airpods-vs-airpods-pro" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                {isEnglish ? "Comparison Guide" : "Vergelijkingsgids"}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.intro}
              </p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Comparison Table */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t.quickComparisonTitle}
              </h2>
              
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-accent/50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-foreground">{t.feature}</th>
                        <th className="text-center p-4 font-semibold text-foreground">{t.airpods}</th>
                        <th className="text-center p-4 font-semibold text-primary">{t.airpodsPro}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-accent/20'}>
                          <td className="p-4 font-medium text-foreground">{row.feature}</td>
                          <td className="p-4 text-center">
                            {row.airpods === true ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : row.airpods === false ? (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground text-sm">{row.airpods}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {row.airpodsPro === true ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : row.airpodsPro === false ? (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground text-sm">{row.airpodsPro}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* Design & Fit */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <Ear className="inline-block mr-3 h-8 w-8 text-primary" />
                {t.designTitle}
              </h2>
              
              <p className="text-muted-foreground mb-8 text-lg">
                {t.designIntro}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent rounded-lg">
                        <Headphones className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{t.airpodsDesignTitle}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.airpodsDesignText}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Headphones className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{t.airpodsProDesignTitle}</h3>
                      <Badge variant="secondary" className="ml-auto">Pro</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.airpodsProDesignText}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sound Quality */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <Music className="inline-block mr-3 h-8 w-8 text-primary" />
                {t.soundTitle}
              </h2>
              
              <p className="text-muted-foreground mb-8 text-lg">
                {t.soundIntro}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{t.airpodsSoundTitle}</h3>
                    <ul className="space-y-3">
                      {t.airpodsSoundFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{t.airpodsProSoundTitle}</h3>
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <ul className="space-y-3">
                      {t.airpodsProSoundFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Noise Cancelling */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <Volume2 className="inline-block mr-3 h-8 w-8 text-primary" />
                {t.noiseCancellingTitle}
              </h2>
              
              <Card className="bg-accent/30 border-0 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground mb-4">
                    {t.noiseCancellingIntro}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t.noiseCancellingText}
                  </p>
                  
                  <div className="bg-background rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">{t.transparencyTitle}</h4>
                    <p className="text-muted-foreground">
                      {t.transparencyText}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Battery Life */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <Battery className="inline-block mr-3 h-8 w-8 text-primary" />
                {t.batteryTitle}
              </h2>
              
              <p className="text-muted-foreground mb-8 text-lg">
                {t.batteryIntro}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">AirPods</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t.listeningTime}</span>
                        <span className="font-semibold text-foreground">6 {t.hours}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t.talkTime}</span>
                        <span className="font-semibold text-foreground">4 {t.hours}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-muted-foreground">{t.withCase}</span>
                        <span className="font-semibold text-foreground">30 {t.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">AirPods Pro</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t.listeningTime}</span>
                        <span className="font-semibold text-foreground">6 {t.hours}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t.talkTime}</span>
                        <span className="font-semibold text-foreground">4.5 {t.hours}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-muted-foreground">{t.withCase}</span>
                        <span className="font-semibold text-foreground">30 {t.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Water Resistance */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <Droplets className="inline-block mr-3 h-8 w-8 text-primary" />
                {t.waterResistanceTitle}
              </h2>
              
              <Card className="bg-accent/30 border-0">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.waterResistanceText}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* When to Choose */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t.whenChooseTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{t.chooseAirpodsTitle}</h3>
                    <ul className="space-y-3">
                      {t.chooseAirpodsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t">
                      <Link to={`${langPrefix}/losse-airpods`}>
                        <Button variant="outline" className="w-full">
                          {isEnglish ? "View AirPods" : "Bekijk AirPods"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{t.chooseAirpodsProTitle}</h3>
                      <Badge className="bg-primary text-primary-foreground">
                        {isEnglish ? "Recommended" : "Aanbevolen"}
                      </Badge>
                    </div>
                    <ul className="space-y-3">
                      {t.chooseAirpodsProList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t">
                      <Link to={`${langPrefix}/model/airpods-pro-2`}>
                        <Button className="w-full">
                          {isEnglish ? "View AirPods Pro" : "Bekijk AirPods Pro"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Model Check CTA */}
            <section className="mb-16">
              <Card className="bg-accent/50 border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{t.checkModelTitle}</h3>
                      <p className="text-muted-foreground mb-4">{t.checkModelText}</p>
                      <Link to={`${langPrefix}/welke-airpods-heb-ik`}>
                        <Button variant="outline">
                          {t.checkModelButton}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Lost Pod Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/30 border-0">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.lostPodTitle}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{t.lostPodText}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Link to={`${langPrefix}/losse-airpods`}>
                      <Button>
                        {isEnglish ? "Single AirPods" : "Losse AirPods"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`${langPrefix}/losse-oplaadcases`}>
                      <Button variant="outline">
                        {isEnglish ? "Charging Cases" : "Oplaadcases"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t.faqTitle}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {t.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t.relatedArticles}</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link to={`${langPrefix}/blog/welke-airpods-heb-ik`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {isEnglish ? "Which AirPods Do I Have?" : "Welke AirPods Heb Ik?"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isEnglish ? "Identify your AirPods model" : "Identificeer je AirPods model"}
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link to={`${langPrefix}/blog/airpods-combineren`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {isEnglish ? "Combining Different AirPods" : "AirPods Combineren"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isEnglish ? "Can you mix different models?" : "Kun je verschillende modellen mixen?"}
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link to={`${langPrefix}/blog/airpods-batterij-vervangen`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {isEnglish ? "AirPods Battery Replacement" : "AirPods Batterij Vervangen"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isEnglish ? "Options and costs" : "Opties en kosten"}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h2>
                  <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto text-lg">
                    {t.ctaText}
                  </p>
                  <Link to={`${langPrefix}/losse-airpods`}>
                    <Button size="lg" variant="secondary">
                      {t.ctaButton}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>

          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogAirpodsVsAirpodsPro;
