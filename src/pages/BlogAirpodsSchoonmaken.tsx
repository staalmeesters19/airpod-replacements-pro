import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertTriangle, Sparkles, ShieldCheck } from 'lucide-react';

const BlogAirpodsSchoonmaken = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const content = {
    nl: {
      title: "Oortjes schoonmaken: complete gids voor onderhoud",
      metaDescription: "Leer hoe je je draadloze oortjes correct schoonmaakt. Stap-voor-stap instructies, do's en don'ts, en tips om je oordopjes hygiënisch en goed werkend te houden.",
      breadcrumb: "Blog",
      backToBlogs: "Terug naar blogs",
      readTime: "12 min leestijd",
      date: "December 2024",
      intro: `Je draadloze oortjes zijn waarschijnlijk een van de meest gebruikte accessoires die je bezit. Dagelijks stoppen we ze in onze oren - tijdens het sporten, werken, reizen of relaxen. Maar hoe vaak maak je ze eigenlijk schoon? Regelmatig onderhoud is niet alleen belangrijk voor de hygiëne, maar ook voor de geluidskwaliteit en levensduur van je oordopjes.`,
      introSecond: `In deze uitgebreide gids leer je alles over het correct schoonmaken van je oortjes en oplaadcase. Van de juiste materialen tot stap-voor-stap instructies en veelgemaakte fouten die je moet vermijden.`,
      
      whyCleanTitle: "Waarom Is Het Schoonmaken van AirPods Belangrijk?",
      whyCleanIntro: "Er zijn meerdere redenen waarom regelmatig onderhoud van je AirPods essentieel is:",
      whyCleanReasons: [
        { title: "Hygiëne", desc: "Je oren produceren oorsmeer dat zich ophoopt op de speaker mesh. Dit kan bacteriën herbergen." },
        { title: "Geluidskwaliteit", desc: "Vuil op de speakers dempt het geluid. Schone AirPods klinken merkbaar beter en harder." },
        { title: "Oplaadproblemen", desc: "Vuile contactpunten kunnen ervoor zorgen dat je AirPods niet goed opladen in de case." },
        { title: "Levensduur", desc: "Goed onderhoud verlengt de levensduur van je AirPods aanzienlijk." }
      ],
      
      whatYouNeedTitle: "Wat Heb Je Nodig?",
      whatYouNeedIntro: "Voordat je begint, verzamel deze materialen:",
      materials: [
        "Zachte, pluisvrije doek (microvezeldoek)",
        "Wattenstaafjes",
        "Zachte, droge tandenborstel (of speciale reinigingsborstel)",
        "Isopropylalcohol 70% (optioneel)",
        "Blu-Tack of schoonmaakkit (optioneel)"
      ],
      materialsWarning: "Let op: Gebruik NOOIT water, zeep, of agressieve schoonmaakmiddelen direct op je AirPods!",
      
      cleaningStepsTitle: "Stap-voor-Stap: AirPods Schoonmaken",
      
      step1Title: "Stap 1: De Speaker Mesh Reinigen",
      step1Intro: "De speaker mesh is het meest gevoelige onderdeel en vereist extra voorzichtigheid:",
      step1Steps: [
        "Houd de AirPod met de speaker mesh naar beneden gericht",
        "Gebruik een droge, zachte tandenborstel om voorzichtig over de mesh te borstelen",
        "Borstel in één richting, weg van de mesh opening",
        "Herhaal tot al het zichtbare vuil is verwijderd"
      ],
      step1Tip: "Pro tip: Gebruik Blu-Tack om hardnekkig oorsmeer uit de mesh te trekken. Druk zachtjes aan en trek weg.",
      
      step2Title: "Stap 2: De Behuizing Reinigen",
      step2Intro: "De buitenkant van je AirPods verzamelt ook vuil en huidvetten:",
      step2Steps: [
        "Maak een microvezeldoek licht vochtig met water",
        "Veeg de gehele buitenkant van de AirPod af",
        "Droog onmiddellijk met een droge doek",
        "Voor hardnekkige vlekken: gebruik 70% isopropylalcohol op de doek (niet de mesh!)"
      ],
      
      step3Title: "Stap 3: De Sensoren Reinigen",
      step3Intro: "De proximity sensoren zorgen voor functies zoals automatisch pauzeren:",
      step3Steps: [
        "Lokaliseer de zwarte sensoren aan de binnenkant",
        "Veeg voorzichtig met een droog wattenstaafje",
        "Vermijd druk of wrijving"
      ],
      
      airpodsProTitle: "AirPods Pro Specifiek: Siliconen Oortips",
      airpodsProIntro: "De AirPods Pro hebben verwisselbare siliconen oortips die apart gereinigd moeten worden:",
      airpodsProSteps: [
        "Verwijder de oortips door ze voorzichtig los te trekken",
        "Spoel de oortips af onder stromend water (alleen de tips!)",
        "Droog grondig af met een pluisvrije doek",
        "Laat volledig drogen voordat je ze terugplaatst (minimaal 30 minuten)",
        "Klik de oortips terug op de AirPods Pro"
      ],
      airpodsProTip: "Zijn je oortips versleten of kwijt? Bij Earbuds Restore verkopen we losse siliconen oortips voor alle maten.",
      
      caseCleaningTitle: "De Oplaadcase Schoonmaken",
      caseCleaningIntro: "Vergeet de oplaadcase niet! Een vuile case kan oplaadproblemen veroorzaken.",
      
      caseOutsideTitle: "Buitenkant van de Case",
      caseOutsideSteps: [
        "Veeg af met een licht vochtige microvezeldoek",
        "Reinig de Lightning/USB-C poort met een droge, zachte borstel",
        "Droog volledig af"
      ],
      
      caseInsideTitle: "Binnenkant van de Case",
      caseInsideSteps: [
        "Gebruik een droog wattenstaafje om de binnenkant te reinigen",
        "Besteed extra aandacht aan de oplaacontacten (metalen puntjes)",
        "Verwijder vuil uit de hoeken met een zachte borstel",
        "Voor hardnekkig vuil: wattenstaafje licht bevochtigd met isopropylalcohol"
      ],
      caseInsideTip: "Is je oplaadcase kapot of kwijt? Bekijk onze losse oplaadcases - direct leverbaar en 40% goedkoper.",
      
      dosTitle: "Do's: Wat Je Wel Moet Doen",
      dos: [
        "Maak je AirPods minstens 1x per week schoon",
        "Berg ze altijd op in de case wanneer je ze niet gebruikt",
        "Was je handen voordat je je AirPods indoet",
        "Laat ze volledig drogen na het schoonmaken",
        "Gebruik alleen zachte, niet-schurende materialen"
      ],
      
      dontsTitle: "Don'ts: Wat Je NIET Moet Doen",
      donts: [
        "Nooit water of vloeistoffen direct op de AirPods",
        "Geen scherpe objecten in de speaker mesh steken",
        "Geen perslucht gebruiken (kan componenten beschadigen)",
        "Geen agressieve schoonmaakmiddelen zoals bleek of aceton",
        "Niet onderdompelen, ook niet de siliconen tips langdurig"
      ],
      
      frequencyTitle: "Hoe Vaak Moet Je Je AirPods Schoonmaken?",
      frequencyIntro: "De frequentie hangt af van je gebruik:",
      frequencyList: [
        { usage: "Dagelijks intensief gebruik", freq: "2-3 keer per week" },
        { usage: "Regelmatig gebruik", freq: "1 keer per week" },
        { usage: "Af en toe gebruik", freq: "1 keer per 2 weken" },
        { usage: "Sporten met AirPods", freq: "Na elke workout" }
      ],
      
      soundProblemsTitle: "Geluidsproblemen Na Schoonmaken?",
      soundProblemsIntro: "Als je AirPods na het schoonmaken nog steeds niet goed klinken, kunnen er andere problemen zijn:",
      soundProblemsList: [
        "De speaker mesh kan permanent verstopt zijn door jarenlange opbouw",
        "Er kan interne schade zijn aan de drivers",
        "De batterij kan versleten zijn, wat ook geluidskwaliteit beïnvloedt"
      ],
      soundProblemsCta: "In deze gevallen is het vaak voordeliger om een losse AirPod te vervangen dan een volledig nieuwe set te kopen. Bij Earbuds Restore bieden we losse AirPods aan voor alle generaties - van AirPods 2 tot de nieuwste AirPods 4.",
      
      maintenanceTipsTitle: "Extra Onderhoudstips voor Langere Levensduur",
      maintenanceTips: [
        "Bewaar je AirPods op kamertemperatuur (niet in de auto bij extreme temperaturen)",
        "Vermijd contact met make-up, zonnebrand en andere cosmetica",
        "Laad je AirPods niet op tot 100% als je ze lang opbergt - 50% is ideaal",
        "Gebruik een beschermhoesje voor je oplaadcase",
        "Weet je niet welke AirPods je hebt? Check onze gids om je model te identificeren"
      ],
      
      conclusionTitle: "Conclusie",
      conclusionText: "Regelmatig schoonmaken van je AirPods is essentieel voor hygiëne, geluidskwaliteit en levensduur. Met de juiste materialen en technieken kun je je oordopjes jarenlang in topconditie houden. Maak er een wekelijkse gewoonte van en je AirPods zullen je dankbaar zijn!",
      
      ctaTitle: "Hulp Nodig met Je AirPods?",
      ctaText: "Bij Earbuds Restore helpen we je met alles rondom je AirPods. Van losse oordopjes tot oplaadcases en siliconen tips - allemaal tegen scherpe prijzen en met snelle levering.",
      ctaButton: "Bekijk Onze Producten",
      
      faqTitle: "Veelgestelde Vragen over AirPods Schoonmaken",
      faqs: [
        {
          q: "Kan ik mijn AirPods onder water houden?",
          a: "Nee, nooit! Zelfs de AirPods Pro die waterbestendig zijn, mogen niet worden ondergedompeld. Alleen de siliconen oortips mogen onder water worden afgespoeld."
        },
        {
          q: "Mag ik alcohol gebruiken om mijn AirPods schoon te maken?",
          a: "Alleen 70% isopropylalcohol, en alleen op de buitenkant. Gebruik het nooit op de speaker mesh of in de oplaadcase contacten."
        },
        {
          q: "Mijn AirPods klinken zacht na het schoonmaken, wat nu?",
          a: "Controleer of er geen vocht in de speaker mesh zit. Laat ze volledig drogen. Als het probleem aanhoudt, is de mesh mogelijk permanent beschadigd."
        },
        {
          q: "Hoe vaak moet ik de siliconen oortips vervangen?",
          a: "Bij regelmatig gebruik ongeveer elke 6-12 maanden, of eerder als ze beschadigd of versleten zijn. Bekijk onze siliconen oortips."
        },
        {
          q: "Kan ik een wattenstaafje in de oplaadcase gebruiken?",
          a: "Ja, maar alleen droog of zeer licht bevochtigd. Zorg dat er geen wattenresten achterblijven bij de contactpunten."
        }
      ],

      relatedTitle: "Gerelateerde Artikelen",
      relatedArticles: [
        { title: "Welke AirPods heb ik? Zo herken je jouw model", link: "/blog/welke-airpods-heb-ik" },
        { title: "AirPods vs AirPods Pro: Wat is het verschil?", link: "/blog/airpods-vs-airpods-pro" },
        { title: "AirPods batterij vervangen: alle opties en kosten", link: "/blog/airpods-batterij-vervangen" },
        { title: "AirPods opnieuw pairen met je iPhone", link: "/blog/airpods-opnieuw-pairen" }
      ]
    },
    en: {
      title: "How to Clean Earbuds: Complete Maintenance Guide",
      metaDescription: "Learn how to properly clean your wireless earbuds. Step-by-step instructions, do's and don'ts, and tips to keep your earbuds hygienic and working perfectly.",
      breadcrumb: "Blog",
      backToBlogs: "Back to blogs",
      readTime: "12 min read",
      date: "December 2024",
      intro: `Your wireless earbuds are probably one of the most used accessories you own. We put them in our ears daily - while working out, commuting, working, or relaxing. But how often do you actually clean them? Regular maintenance is not only important for hygiene but also for sound quality and the lifespan of your earbuds.`,
      introSecond: `In this comprehensive guide, you'll learn everything about properly cleaning your earbuds and charging case. From the right materials to step-by-step instructions and common mistakes to avoid.`,
      
      whyCleanTitle: "Why Is Cleaning Your AirPods Important?",
      whyCleanIntro: "There are several reasons why regular maintenance of your AirPods is essential:",
      whyCleanReasons: [
        { title: "Hygiene", desc: "Your ears produce earwax that accumulates on the speaker mesh. This can harbor bacteria." },
        { title: "Sound Quality", desc: "Dirt on the speakers muffles the sound. Clean AirPods sound noticeably better and louder." },
        { title: "Charging Issues", desc: "Dirty contact points can prevent your AirPods from charging properly in the case." },
        { title: "Lifespan", desc: "Good maintenance significantly extends the lifespan of your AirPods." }
      ],
      
      whatYouNeedTitle: "What Do You Need?",
      whatYouNeedIntro: "Before you start, gather these materials:",
      materials: [
        "Soft, lint-free cloth (microfiber cloth)",
        "Cotton swabs",
        "Soft, dry toothbrush (or special cleaning brush)",
        "70% isopropyl alcohol (optional)",
        "Blu-Tack or cleaning putty (optional)"
      ],
      materialsWarning: "Warning: NEVER use water, soap, or harsh cleaners directly on your AirPods!",
      
      cleaningStepsTitle: "Step-by-Step: Cleaning Your AirPods",
      
      step1Title: "Step 1: Cleaning the Speaker Mesh",
      step1Intro: "The speaker mesh is the most sensitive part and requires extra care:",
      step1Steps: [
        "Hold the AirPod with the speaker mesh facing down",
        "Use a dry, soft toothbrush to gently brush over the mesh",
        "Brush in one direction, away from the mesh opening",
        "Repeat until all visible dirt is removed"
      ],
      step1Tip: "Pro tip: Use Blu-Tack to pull stubborn earwax out of the mesh. Press gently and pull away.",
      
      step2Title: "Step 2: Cleaning the Housing",
      step2Intro: "The outside of your AirPods also collects dirt and skin oils:",
      step2Steps: [
        "Lightly dampen a microfiber cloth with water",
        "Wipe the entire outside of the AirPod",
        "Dry immediately with a dry cloth",
        "For stubborn stains: use 70% isopropyl alcohol on the cloth (not the mesh!)"
      ],
      
      step3Title: "Step 3: Cleaning the Sensors",
      step3Intro: "The proximity sensors enable features like automatic pausing:",
      step3Steps: [
        "Locate the black sensors on the inside",
        "Wipe gently with a dry cotton swab",
        "Avoid pressure or friction"
      ],
      
      airpodsProTitle: "AirPods Pro Specific: Silicone Ear Tips",
      airpodsProIntro: "The AirPods Pro have replaceable silicone ear tips that need to be cleaned separately:",
      airpodsProSteps: [
        "Remove the ear tips by gently pulling them off",
        "Rinse the ear tips under running water (only the tips!)",
        "Dry thoroughly with a lint-free cloth",
        "Let them dry completely before reattaching (at least 30 minutes)",
        "Click the ear tips back onto the AirPods Pro"
      ],
      airpodsProTip: "Are your ear tips worn or lost? At Earbuds Restore we sell individual silicone ear tips in all sizes.",
      
      caseCleaningTitle: "Cleaning the Charging Case",
      caseCleaningIntro: "Don't forget the charging case! A dirty case can cause charging problems.",
      
      caseOutsideTitle: "Outside of the Case",
      caseOutsideSteps: [
        "Wipe with a slightly damp microfiber cloth",
        "Clean the Lightning/USB-C port with a dry, soft brush",
        "Dry completely"
      ],
      
      caseInsideTitle: "Inside of the Case",
      caseInsideSteps: [
        "Use a dry cotton swab to clean the inside",
        "Pay extra attention to the charging contacts (metal dots)",
        "Remove dirt from corners with a soft brush",
        "For stubborn dirt: cotton swab slightly dampened with isopropyl alcohol"
      ],
      caseInsideTip: "Is your charging case broken or lost? Check out our individual charging cases - available immediately and 40% cheaper.",
      
      dosTitle: "Do's: What You Should Do",
      dos: [
        "Clean your AirPods at least once a week",
        "Always store them in the case when not in use",
        "Wash your hands before putting in your AirPods",
        "Let them dry completely after cleaning",
        "Only use soft, non-abrasive materials"
      ],
      
      dontsTitle: "Don'ts: What You Should NOT Do",
      donts: [
        "Never put water or liquids directly on AirPods",
        "Don't stick sharp objects in the speaker mesh",
        "Don't use compressed air (can damage components)",
        "No harsh cleaners like bleach or acetone",
        "Don't submerge, not even silicone tips for long periods"
      ],
      
      frequencyTitle: "How Often Should You Clean Your AirPods?",
      frequencyIntro: "The frequency depends on your usage:",
      frequencyList: [
        { usage: "Daily intensive use", freq: "2-3 times per week" },
        { usage: "Regular use", freq: "Once a week" },
        { usage: "Occasional use", freq: "Once every 2 weeks" },
        { usage: "Working out with AirPods", freq: "After every workout" }
      ],
      
      soundProblemsTitle: "Sound Problems After Cleaning?",
      soundProblemsIntro: "If your AirPods still don't sound right after cleaning, there may be other issues:",
      soundProblemsList: [
        "The speaker mesh may be permanently clogged from years of buildup",
        "There may be internal damage to the drivers",
        "The battery may be worn, which also affects sound quality"
      ],
      soundProblemsCta: "In these cases, it's often more affordable to replace an individual AirPod than to buy a completely new set. At Earbuds Restore, we offer individual AirPods for all generations - from AirPods 2 to the latest AirPods 4.",
      
      maintenanceTipsTitle: "Extra Maintenance Tips for Longer Lifespan",
      maintenanceTips: [
        "Store your AirPods at room temperature (not in the car at extreme temperatures)",
        "Avoid contact with makeup, sunscreen, and other cosmetics",
        "Don't charge your AirPods to 100% if storing them long-term - 50% is ideal",
        "Use a protective case for your charging case",
        "Don't know which AirPods you have? Check our guide to identify your model"
      ],
      
      conclusionTitle: "Conclusion",
      conclusionText: "Regular cleaning of your AirPods is essential for hygiene, sound quality, and lifespan. With the right materials and techniques, you can keep your earbuds in top condition for years. Make it a weekly habit and your AirPods will thank you!",
      
      ctaTitle: "Need Help with Your AirPods?",
      ctaText: "At Earbuds Restore, we help you with everything related to your AirPods. From individual earbuds to charging cases and silicone tips - all at competitive prices with fast delivery.",
      ctaButton: "View Our Products",
      
      faqTitle: "Frequently Asked Questions About Cleaning AirPods",
      faqs: [
        {
          q: "Can I hold my AirPods under water?",
          a: "No, never! Even the AirPods Pro, which are water-resistant, should not be submerged. Only the silicone ear tips can be rinsed under water."
        },
        {
          q: "Can I use alcohol to clean my AirPods?",
          a: "Only 70% isopropyl alcohol, and only on the outside. Never use it on the speaker mesh or in the charging case contacts."
        },
        {
          q: "My AirPods sound quiet after cleaning, what now?",
          a: "Check if there's no moisture in the speaker mesh. Let them dry completely. If the problem persists, the mesh may be permanently damaged."
        },
        {
          q: "How often should I replace the silicone ear tips?",
          a: "With regular use, about every 6-12 months, or sooner if they're damaged or worn. Check out our silicone ear tips."
        },
        {
          q: "Can I use a cotton swab in the charging case?",
          a: "Yes, but only dry or very lightly dampened. Make sure no cotton residue remains at the contact points."
        }
      ],

      relatedTitle: "Related Articles",
      relatedArticles: [
        { title: "Which AirPods Do I Have? How to Identify Your Model", link: "/en/blog/which-airpods-do-i-have" },
        { title: "AirPods vs AirPods Pro: What's the Difference?", link: "/en/blog/airpods-vs-airpods-pro" },
        { title: "AirPods Battery Replacement: All Options and Costs", link: "/en/blog/airpods-battery-replacement" },
        { title: "How to Re-pair AirPods with Your iPhone", link: "/en/blog/how-to-repair-airpods" }
      ]
    }
  };

  const t = isEnglish ? content.en : content.nl;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
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
      "name": "Earbuds Restore"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Earbuds Restore",
      "url": "https://earbudrestore.nl"
    },
    "datePublished": "2024-12-22",
    "dateModified": "2024-12-22"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": t.title,
    "description": t.metaDescription,
    "step": [
      {
        "@type": "HowToStep",
        "name": isEnglish ? "Clean the Speaker Mesh" : "De Speaker Mesh Reinigen",
        "text": isEnglish ? "Hold the AirPod with the speaker mesh facing down and gently brush with a dry, soft toothbrush in one direction." : "Houd de AirPod met de speaker mesh naar beneden gericht en borstel voorzichtig met een droge, zachte tandenborstel in één richting."
      },
      {
        "@type": "HowToStep",
        "name": isEnglish ? "Clean the Housing" : "De Behuizing Reinigen",
        "text": isEnglish ? "Wipe the entire outside with a lightly dampened microfiber cloth and dry immediately." : "Veeg de gehele buitenkant af met een licht vochtige microvezeldoek en droog onmiddellijk."
      },
      {
        "@type": "HowToStep",
        "name": isEnglish ? "Clean the Sensors" : "De Sensoren Reinigen",
        "text": isEnglish ? "Gently wipe the black proximity sensors with a dry cotton swab." : "Veeg de zwarte sensoren voorzichtig af met een droog wattenstaafje."
      },
      {
        "@type": "HowToStep",
        "name": isEnglish ? "Clean the Charging Case" : "De Oplaadcase Schoonmaken",
        "text": isEnglish ? "Clean inside and outside with cotton swabs and microfiber cloth, paying attention to charging contacts." : "Reinig binnen- en buitenkant met wattenstaafjes en microvezeldoek, met extra aandacht voor de oplaacontacten."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t.title} | Earbuds Restore</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={isEnglish 
          ? "clean airpods, airpods cleaning, how to clean airpods, airpods maintenance, clean airpods pro, airpods speaker mesh, cleaning airpods case"
          : "airpods schoonmaken, airpods reinigen, hoe airpods schoonmaken, airpods onderhoud, airpods pro schoonmaken, speaker mesh reinigen, oplaadcase schoonmaken"
        } />
        <link rel="canonical" href={`https://earbudrestore.nl${isEnglish ? '/en/blog/how-to-clean-airpods' : '/blog/airpods-schoonmaken'}`} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://earbudrestore.nl${isEnglish ? '/en/blog/how-to-clean-airpods' : '/blog/airpods-schoonmaken'}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to={isEnglish ? "/en/blog" : "/blog"} 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToBlogs}
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {t.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {t.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.intro}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.introSecond}
            </p>

            {/* Why Clean */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.whyCleanTitle}</h2>
            <p className="mb-6">{t.whyCleanIntro}</p>
            <div className="grid gap-4 mb-8">
              {t.whyCleanReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{reason.title}:</strong>{' '}
                    <span className="text-muted-foreground">{reason.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* What You Need */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.whatYouNeedTitle}</h2>
            <p className="mb-4">{t.whatYouNeedIntro}</p>
            <ul className="space-y-2 mb-6">
              {t.materials.map((material, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                <p className="text-destructive font-medium m-0">{t.materialsWarning}</p>
              </div>
            </div>

            {/* Cleaning Steps */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.cleaningStepsTitle}</h2>
            
            {/* Step 1 */}
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">{t.step1Title}</h3>
            <p className="mb-4">{t.step1Intro}</p>
            <ol className="space-y-2 mb-4 list-decimal list-inside">
              {t.step1Steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="m-0 text-foreground">{t.step1Tip}</p>
            </div>

            {/* Step 2 */}
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">{t.step2Title}</h3>
            <p className="mb-4">{t.step2Intro}</p>
            <ol className="space-y-2 mb-6 list-decimal list-inside">
              {t.step2Steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            {/* Step 3 */}
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">{t.step3Title}</h3>
            <p className="mb-4">{t.step3Intro}</p>
            <ol className="space-y-2 mb-8 list-decimal list-inside">
              {t.step3Steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            {/* AirPods Pro Section */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.airpodsProTitle}</h2>
            <p className="mb-4">{t.airpodsProIntro}</p>
            <ol className="space-y-2 mb-4 list-decimal list-inside">
              {t.airpodsProSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-8">
              <p className="m-0">{t.airpodsProTip}{' '}
                <Link to={isEnglish ? "/en/airpods-pro-2" : "/airpods-pro-2"} className="text-primary hover:underline font-medium">
                  {isEnglish ? "View silicone tips" : "Bekijk siliconen oortips"}
                </Link>
              </p>
            </div>

            {/* Case Cleaning */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.caseCleaningTitle}</h2>
            <p className="mb-6">{t.caseCleaningIntro}</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">{t.caseOutsideTitle}</h3>
            <ol className="space-y-2 mb-6 list-decimal list-inside">
              {t.caseOutsideSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">{t.caseInsideTitle}</h3>
            <ol className="space-y-2 mb-4 list-decimal list-inside">
              {t.caseInsideSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-8">
              <p className="m-0">{t.caseInsideTip}{' '}
                <Link to={isEnglish ? "/en/charging-cases" : "/losse-oplaadcases"} className="text-primary hover:underline font-medium">
                  {isEnglish ? "View charging cases" : "Bekijk oplaadcases"}
                </Link>
              </p>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 mb-8">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  {t.dosTitle}
                </h3>
                <ul className="space-y-3">
                  {t.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t.dontsTitle}
                </h3>
                <ul className="space-y-3">
                  {t.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Frequency */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.frequencyTitle}</h2>
            <p className="mb-4">{t.frequencyIntro}</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">
                      {isEnglish ? "Usage" : "Gebruik"}
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">
                      {isEnglish ? "Cleaning Frequency" : "Schoonmaakfrequentie"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.frequencyList.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}>
                      <td className="border border-border px-4 py-3">{item.usage}</td>
                      <td className="border border-border px-4 py-3 font-medium text-primary">{item.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sound Problems */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.soundProblemsTitle}</h2>
            <p className="mb-4">{t.soundProblemsIntro}</p>
            <ul className="space-y-2 mb-6">
              {t.soundProblemsList.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">{t.soundProblemsCta}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to={isEnglish ? "/en/individual-airpods" : "/losse-airpods"}>
                <Button variant="outline">{isEnglish ? "View Individual AirPods" : "Bekijk Losse AirPods"}</Button>
              </Link>
            </div>

            {/* Maintenance Tips */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.maintenanceTipsTitle}</h2>
            <ul className="space-y-3 mb-8">
              {t.maintenanceTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-1" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p>
              <Link to={isEnglish ? "/en/blog/which-airpods-do-i-have" : "/blog/welke-airpods-heb-ik"} className="text-primary hover:underline font-medium">
                {isEnglish ? "→ Check our model identification guide" : "→ Check onze model identificatie gids"}
              </Link>
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t.conclusionTitle}</h2>
            <p className="text-lg mb-8">{t.conclusionText}</p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 my-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t.ctaTitle}</h2>
              <p className="text-muted-foreground mb-6">{t.ctaText}</p>
              <div className="flex flex-wrap gap-4">
                <Link to={isEnglish ? "/en/individual-airpods" : "/losse-airpods"}>
                  <Button size="lg" className="font-semibold">
                    {t.ctaButton}
                  </Button>
                </Link>
                <Link to={isEnglish ? "/en/charging-cases" : "/losse-oplaadcases"}>
                  <Button size="lg" variant="outline">
                    {isEnglish ? "View Charging Cases" : "Bekijk Oplaadcases"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t.faqTitle}</h2>
              <div className="space-y-4">
                {t.faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground m-0">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">{t.relatedTitle}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {t.relatedArticles.map((article, index) => (
                  <Link 
                    key={index}
                    to={article.link}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                      {article.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogAirpodsSchoonmaken;
