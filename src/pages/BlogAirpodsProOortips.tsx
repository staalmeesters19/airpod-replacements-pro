import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogAirpodsProOortips = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "AirPods Pro Oortips: Welke Maat Past Bij Jou?",
      metaTitle: "AirPods Pro Oortips: Welke Maat & Hoe Vervangen [2024]",
      metaDescription: "AirPods Pro oortips kiezen, vervangen en de juiste maat vinden. Complete handleiding met Ear Tip Fit Test uitleg en vervangende tips.",
      intro: "De siliconen oortips van je AirPods Pro bepalen comfort, geluidskwaliteit en noise cancelling. De juiste maat maakt een wereld van verschil. In dit artikel leer je hoe je de perfecte pasvorm vindt.",
      
      whatIsTheProblem: "Waarom zijn de juiste oortips zo belangrijk?",
      whatIsTheProblemText: "AirPods Pro gebruiken actieve ruisonderdrukking die alleen werkt met een goede afsluiting. Te kleine tips geven geluidslekken, te grote tips zijn oncomfortabel. De juiste maat zorgt voor optimale bass, effectieve noise cancelling en langdurig draagcomfort.",
      
      sizes: "Welke maten zijn er?",
      sizesText: "Apple levert AirPods Pro met drie maten siliconen oortips:",
      sizesList: [
        { size: "Small (S)", description: "Voor kleinere gehoorgang. Herkenbaar aan de kleine ring binnenin." },
        { size: "Medium (M)", description: "Standaard maat, voorgemonteerd bij levering. Past bij de meeste mensen." },
        { size: "Large (L)", description: "Voor grotere gehoorgang. Geeft meer afsluiting maar kan bij sommigen drukken." }
      ],
      sizesNote: "AirPods Pro 2 hebben ook een Extra Small (XS) maat toegevoegd voor mensen met een zeer kleine gehoorgang.",

      fitTest: "De Ear Tip Fit Test gebruiken",
      fitTestSteps: [
        "Doe beide AirPods Pro in je oren met de standaard tips.",
        "Open Instellingen op je iPhone.",
        "Ga naar Bluetooth en tik op het (i) naast je AirPods Pro.",
        "Kies 'Ear Tip Fit Test'.",
        "Tik op 'Doorgaan' en blijf stil tijdens de test.",
        "Na enkele seconden toont je iPhone of de pasvorm 'Goed' is."
      ],
      fitTestResult: "Krijg je 'Pas aan' als resultaat? Probeer dan een andere maat. Het is normaal dat links en rechts verschillende maten nodig hebben.",

      howToChange: "Hoe vervang je de oortips?",
      changeSteps: [
        "Pak de siliconen tip stevig vast aan de basis.",
        "Trek de tip recht van de AirPod af (niet draaien).",
        "Lijn de nieuwe tip uit met de ovale opening.",
        "Druk de tip aan tot je een klik hoort of voelt.",
        "Controleer of de tip stevig vastzit door er licht aan te trekken."
      ],
      changeNote: "De tips klikken op hun plaats. Als de tip niet klikt, is deze niet goed bevestigd.",

      whenToReplace: "Wanneer moet je oortips vervangen?",
      whenToReplaceText: "Oortips slijten na verloop van tijd. Vervang ze wanneer je merkt:",
      replaceReasons: [
        "Verminderde noise cancelling effectiviteit",
        "De tips worden los of vallen eruit",
        "Zichtbare scheuren of vervorming in het siliconen",
        "Verkleuring die niet meer schoon te krijgen is",
        "Oncomfortabel draaggevoel na langdurig gebruik"
      ],
      replaceLink: "Bekijk onze ",
      replaceLinkText: "AirPods Pro siliconen oortips",
      replaceLinkUrl: "/model/airpods-pro",
      replaceLinkSuffix: " voor vervanging.",

      thirdParty: "Oortips van derden",
      thirdPartyText1: "Er zijn veel alternatieve oortips verkrijgbaar, waaronder memory foam varianten. Deze kunnen een andere pasvorm en geluidservaring bieden.",
      thirdPartyText2: "Let op: de Ear Tip Fit Test van Apple werkt alleen betrouwbaar met originele Apple oortips. Bij third-party tips moet je zelf beoordelen of de pasvorm goed is.",

      cleaning: "Oortips schoonmaken",
      cleaningSteps: [
        "Verwijder de tips van je AirPods Pro.",
        "Spoel af met schoon water (geen zeep).",
        "Dep droog met een pluisvrije doek.",
        "Laat volledig drogen voordat je ze terugplaatst.",
        "Maak ook de speaker-opening van de AirPods schoon."
      ],
      cleaningNote: "Maak je oortips wekelijks schoon voor optimale hygiene en geluidskwaliteit.",

      compatibility: "Compatibiliteit per model",
      compatibilityText: "Let op: AirPods Pro 1 en AirPods Pro 2 gebruiken verschillende oortips. Ze zijn niet onderling uitwisselbaar.",
      compatibilityLinks: [
        { text: "AirPods Pro (1e generatie) onderdelen", url: "/model/airpods-pro" },
        { text: "AirPods Pro 2 onderdelen", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Weet je niet welke AirPods Pro je hebt? Bekijk onze ",
      compatibilityNoteLink: "model identificatie handleiding",
      compatibilityNoteLinkUrl: "/welke-airpods-heb-ik",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Kan ik links en rechts verschillende maten gebruiken?",
          answer: "Ja, veel mensen hebben een iets andere gehoorgang aan elke kant. Het is volkomen normaal om bijvoorbeeld links Medium en rechts Small te gebruiken."
        },
        {
          question: "Hoe vaak moet ik mijn oortips vervangen?",
          answer: "Bij normaal gebruik gaan oortips 1-2 jaar mee. Vervang ze eerder bij zichtbare slijtage of als de pasvorm vermindert."
        },
        {
          question: "Passen AirPods Pro 1 tips op AirPods Pro 2?",
          answer: "Nee, de oortips zijn niet uitwisselbaar tussen generaties. Ze hebben een andere vorm en bevestiging."
        },
        {
          question: "Waarom vallen mijn oortips er steeds uit?",
          answer: "Dit kan komen door versleten tips, verkeerde maat, of oortips die niet goed vastgeklikt zijn. Probeer een andere maat of nieuwe tips."
        },
        {
          question: "Werkt noise cancelling beter met grotere tips?",
          answer: "Niet per se. De beste noise cancelling krijg je met tips die goed afsluiten. Dit is meestal de maat die het beste past, niet de grootste."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "AirPods schoonmaken: de complete handleiding", url: "/blog/airpods-schoonmaken" },
        { title: "AirPods vs AirPods Pro: wat zijn de verschillen?", url: "/blog/airpods-vs-airpods-pro" },
        { title: "Eén AirPod werkt niet? Oorzaken en oplossingen", url: "/blog/een-airpod-werkt-niet" },
        { title: "Bekijk alle AirPods Pro onderdelen", url: "/model/airpods-pro" }
      ],
      readAlso: "Lees ook:"
    },
    en: {
      title: "AirPods Pro Ear Tips: Which Size Fits You?",
      metaTitle: "AirPods Pro Ear Tips: Which Size & How To Replace [2024]",
      metaDescription: "Choose, replace, and find the right size AirPods Pro ear tips. Complete guide with Ear Tip Fit Test explanation and replacement tips.",
      intro: "The silicone ear tips of your AirPods Pro determine comfort, sound quality, and noise cancelling. The right size makes a world of difference. In this article, you'll learn how to find the perfect fit.",
      
      whatIsTheProblem: "Why are the right ear tips so important?",
      whatIsTheProblemText: "AirPods Pro use active noise cancellation that only works with a good seal. Tips that are too small cause sound leakage, tips that are too large are uncomfortable. The right size ensures optimal bass, effective noise cancelling, and long-lasting comfort.",
      
      sizes: "What sizes are available?",
      sizesText: "Apple includes three sizes of silicone ear tips with AirPods Pro:",
      sizesList: [
        { size: "Small (S)", description: "For smaller ear canals. Recognizable by the small ring inside." },
        { size: "Medium (M)", description: "Standard size, pre-installed upon delivery. Fits most people." },
        { size: "Large (L)", description: "For larger ear canals. Provides more seal but may cause pressure for some." }
      ],
      sizesNote: "AirPods Pro 2 also added an Extra Small (XS) size for people with very small ear canals.",

      fitTest: "Using the Ear Tip Fit Test",
      fitTestSteps: [
        "Put both AirPods Pro in your ears with the standard tips.",
        "Open Settings on your iPhone.",
        "Go to Bluetooth and tap the (i) next to your AirPods Pro.",
        "Choose 'Ear Tip Fit Test'.",
        "Tap 'Continue' and remain still during the test.",
        "After a few seconds, your iPhone shows if the fit is 'Good'."
      ],
      fitTestResult: "Getting 'Adjust' as result? Try a different size. It's normal for left and right to need different sizes.",

      howToChange: "How to replace ear tips?",
      changeSteps: [
        "Firmly grip the silicone tip at the base.",
        "Pull the tip straight off the AirPod (don't twist).",
        "Align the new tip with the oval opening.",
        "Press the tip on until you hear or feel a click.",
        "Check that the tip is secure by gently pulling on it."
      ],
      changeNote: "The tips click into place. If the tip doesn't click, it's not properly attached.",

      whenToReplace: "When should you replace ear tips?",
      whenToReplaceText: "Ear tips wear out over time. Replace them when you notice:",
      replaceReasons: [
        "Reduced noise cancelling effectiveness",
        "Tips becoming loose or falling out",
        "Visible tears or deformation in the silicone",
        "Discoloration that won't clean off",
        "Uncomfortable fit after extended use"
      ],
      replaceLink: "Check out our ",
      replaceLinkText: "AirPods Pro silicone ear tips",
      replaceLinkUrl: "/en/model/airpods-pro",
      replaceLinkSuffix: " for replacement.",

      thirdParty: "Third-party ear tips",
      thirdPartyText1: "Many alternative ear tips are available, including memory foam variants. These can offer a different fit and sound experience.",
      thirdPartyText2: "Note: Apple's Ear Tip Fit Test only works reliably with original Apple ear tips. With third-party tips, you'll need to judge the fit yourself.",

      cleaning: "Cleaning ear tips",
      cleaningSteps: [
        "Remove the tips from your AirPods Pro.",
        "Rinse with clean water (no soap).",
        "Pat dry with a lint-free cloth.",
        "Let them dry completely before reattaching.",
        "Also clean the speaker opening of the AirPods."
      ],
      cleaningNote: "Clean your ear tips weekly for optimal hygiene and sound quality.",

      compatibility: "Compatibility per model",
      compatibilityText: "Note: AirPods Pro 1 and AirPods Pro 2 use different ear tips. They are not interchangeable.",
      compatibilityLinks: [
        { text: "AirPods Pro (1st generation) parts", url: "/en/model/airpods-pro" },
        { text: "AirPods Pro 2 parts", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Not sure which AirPods Pro you have? Check our ",
      compatibilityNoteLink: "model identification guide",
      compatibilityNoteLinkUrl: "/en/which-airpods-do-i-have",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Can I use different sizes for left and right?",
          answer: "Yes, many people have slightly different ear canals on each side. It's perfectly normal to use, for example, Medium on the left and Small on the right."
        },
        {
          question: "How often should I replace my ear tips?",
          answer: "With normal use, ear tips last 1-2 years. Replace them sooner if you see visible wear or if the fit diminishes."
        },
        {
          question: "Do AirPods Pro 1 tips fit AirPods Pro 2?",
          answer: "No, the ear tips are not interchangeable between generations. They have a different shape and attachment."
        },
        {
          question: "Why do my ear tips keep falling out?",
          answer: "This could be due to worn tips, wrong size, or tips that aren't properly clicked in. Try a different size or new tips."
        },
        {
          question: "Does noise cancelling work better with larger tips?",
          answer: "Not necessarily. The best noise cancelling comes from tips that seal well. This is usually the size that fits best, not the largest."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "How to clean AirPods: the complete guide", url: "/en/blog/how-to-clean-airpods" },
        { title: "AirPods vs AirPods Pro: what are the differences?", url: "/en/blog/airpods-vs-airpods-pro" },
        { title: "One AirPod not working? Causes and solutions", url: "/en/blog/one-airpod-not-working" },
        { title: "View all AirPods Pro parts", url: "/en/model/airpods-pro" }
      ],
      readAlso: "Read also:"
    }
  };

  const t = isNL ? content.nl : content.en;

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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": isNL ? "AirPods Pro oortips vervangen" : "How to replace AirPods Pro ear tips",
    "step": t.changeSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://repairpods.nl${isNL ? '/blog/airpods-pro-oortips' : '/en/blog/airpods-pro-ear-tips'}`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to={isNL ? "/" : "/en"} className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to={isNL ? "/blog" : "/en/blog"} className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{t.title}</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {t.title}
          </h1>

          {/* Intro */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t.intro}
          </p>

          {/* Why important */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whatIsTheProblem}
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {t.whatIsTheProblemText}
            </p>
          </section>

          {/* Sizes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.sizes}
            </h2>
            <p className="text-foreground/80 mb-4">{t.sizesText}</p>
            <ul className="space-y-3 mb-4">
              {t.sizesList.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-foreground">{item.size}</span>
                  <span className="text-foreground/70">{item.description}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/70 text-sm">{t.sizesNote}</p>
          </section>

          {/* Fit test */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.fitTest}
            </h2>
            <ol className="space-y-3 list-decimal list-inside mb-4">
              {t.fitTestSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
            <p className="text-foreground/70">{t.fitTestResult}</p>
          </section>

          {/* How to change */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.howToChange}
            </h2>
            <ol className="space-y-3 list-decimal list-inside mb-4">
              {t.changeSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
            <p className="text-foreground/70">{t.changeNote}</p>
          </section>

          {/* When to replace */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whenToReplace}
            </h2>
            <p className="text-foreground/80 mb-4">{t.whenToReplaceText}</p>
            <ul className="space-y-2 mb-4">
              {t.replaceReasons.map((reason, index) => (
                <li key={index} className="text-foreground/70 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  {reason}
                </li>
              ))}
            </ul>
            <p className="text-foreground/80">
              {t.replaceLink}
              <Link to={t.replaceLinkUrl} className="text-primary hover:underline">{t.replaceLinkText}</Link>
              {t.replaceLinkSuffix}
            </p>
          </section>

          {/* Third party */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.thirdParty}
            </h2>
            <p className="text-foreground/80 mb-3">{t.thirdPartyText1}</p>
            <p className="text-foreground/70">{t.thirdPartyText2}</p>
          </section>

          {/* Cleaning */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.cleaning}
            </h2>
            <ol className="space-y-3 list-decimal list-inside mb-4">
              {t.cleaningSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
            <p className="text-foreground/70">{t.cleaningNote}</p>
          </section>

          {/* Compatibility */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.compatibility}
            </h2>
            <p className="text-foreground/80 mb-4">{t.compatibilityText}</p>
            <ul className="space-y-2 mb-4">
              {t.compatibilityLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-primary hover:underline">{link.text}</Link>
                </li>
              ))}
            </ul>
            <p className="text-foreground/70">
              {t.compatibilityNote}
              <Link to={t.compatibilityNoteLinkUrl} className="text-primary hover:underline">{t.compatibilityNoteLink}</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {t.faq}
            </h2>
            <div className="space-y-6">
              {t.faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-4">
                  <h3 className="font-medium text-foreground mb-2">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.relatedArticles}
            </h2>
            <ul className="space-y-2">
              {t.related.map((article, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">{t.readAlso} </span>
                  <Link to={article.url} className="text-primary hover:underline">{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogAirpodsProOortips;
