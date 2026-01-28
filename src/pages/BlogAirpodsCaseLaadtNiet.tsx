import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogAirpodsCaseLaadtNiet = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "AirPods Case Laadt Niet Op? Dit Kun Je Doen",
      metaTitle: "AirPods Case Laadt Niet Op? Oorzaken & Oplossingen",
      metaDescription: "AirPods oplaadcase laadt niet meer op? Ontdek de oorzaken en oplossingen. Van schoonmaken tot vervanging - complete handleiding.",
      intro: "Je AirPods case die niet meer oplaadt is frustrerend. Zonder werkende case kun je je AirPods niet gebruiken. Het goede nieuws: vaak is dit probleem eenvoudig op te lossen. Hier lees je hoe.",
      
      whatIsTheProblem: "Wat is het probleem?",
      whatIsTheProblemText: "De oplaadcase is essentieel voor je AirPods. Wanneer het lampje niet meer brandt of de case niet reageert op de lader, kunnen je AirPods niet worden opgeladen. Dit kan komen door vuil, een softwareprobleem of een defecte batterij.",
      
      commonCauses: "Meest voorkomende oorzaken",
      causes: [
        {
          title: "Vuile Lightning of USB-C poort",
          description: "Pluisjes en stof verzamelen zich in de oplaadpoort en blokkeren de verbinding.",
        },
        {
          title: "Defecte oplaadkabel of adapter",
          description: "Test met een andere kabel en adapter om dit uit te sluiten.",
        },
        {
          title: "Vuile oplaadcontacten binnenin",
          description: "De metalen contactpunten waar je AirPods op rusten kunnen vuil zijn.",
        },
        {
          title: "Versleten batterij in de case",
          description: "Na 2-3 jaar intensief gebruik kan de interne batterij op zijn. Een ",
          linkText: "vervangende oplaadcase",
          linkUrl: "/losse-oplaadcases",
          linkSuffix: " is dan de oplossing."
        },
        {
          title: "Softwareprobleem",
          description: "Soms raakt de case in een foutieve staat en helpt een reset.",
        }
      ],

      solutions: "Oplossingen die je zelf kunt proberen",
      solutionSteps: [
        "Controleer de oplaadkabel en adapter met een ander apparaat.",
        "Maak de Lightning/USB-C poort schoon met een droog wattenstaafje.",
        "Reinig de oplaadcontacten binnenin de case met een zachte, droge doek.",
        "Probeer draadloos opladen als je case dit ondersteunt.",
        "Laat de case minimaal 1 uur aan de lader liggen.",
        "Reset je AirPods door de knop 15 seconden ingedrukt te houden."
      ],
      solutionNote: "Werkt dit niet? Dan is een ",
      solutionLink: "nieuwe oplaadcase",
      solutionLinkUrl: "/losse-oplaadcases",
      solutionNoteSuffix: " vaak de beste oplossing.",

      whenToReplace: "Wanneer vervangen slimmer is",
      whenToReplaceText1: "Als je case ouder is dan twee jaar en de batterij minder dan een uur meegaat, is de batterij waarschijnlijk versleten. Apple biedt geen losse case-batterij vervanging aan.",
      whenToReplaceText2: "Fysieke schade aan de oplaadpoort of interne componenten is niet zelf te repareren. Een nieuwe case is dan de meest praktische keuze.",
      whenToReplaceText3: "Bij ons vind je ",
      whenToReplaceLink1: "oplaadcases voor alle AirPods generaties",
      whenToReplaceLink1Url: "/losse-oplaadcases",
      whenToReplaceText4: ", inclusief draadloze en MagSafe varianten.",

      compatibility: "Welke oplaadcase past bij mijn AirPods?",
      compatibilityText: "Elke AirPods generatie heeft een specifieke case nodig. AirPods 1 en 2 delen dezelfde case, maar AirPods 3 en Pro modellen hebben elk een unieke case.",
      compatibilityLinks: [
        { text: "AirPods 1 & 2 oplaadcases", url: "/model/airpods-2" },
        { text: "AirPods 3 oplaadcases", url: "/model/airpods-3" },
        { text: "AirPods Pro oplaadcases", url: "/model/airpods-pro" },
        { text: "AirPods Pro 2 oplaadcases", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Twijfel je welk model je hebt? Bekijk onze ",
      compatibilityNoteLink: "AirPods identificatie handleiding",
      compatibilityNoteLinkUrl: "/welke-airpods-heb-ik",

      wirelessCharging: "Draadloos opladen als alternatief",
      wirelessChargingText1: "Als de Lightning-poort defect is maar de case verder werkt, kan draadloos opladen een oplossing zijn. Dit werkt alleen met cases die draadloos opladen ondersteunen.",
      wirelessChargingText2: "AirPods 2 (draadloze case), AirPods 3, AirPods Pro en Pro 2 ondersteunen allemaal draadloos opladen. De standaard AirPods 2 case zonder draadloos opladen kan niet worden geupgrade.",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Kan ik een losse oplaadcase kopen?",
          answer: "Ja, je kunt bij ons een losse oplaadcase kopen voor alle AirPods generaties. Je bestaande AirPods werken direct met een nieuwe case."
        },
        {
          question: "Werkt mijn AirPod in een nieuwe case?",
          answer: "Ja, AirPods koppelen automatisch met een nieuwe case van dezelfde generatie. Je hoeft niets opnieuw in te stellen."
        },
        {
          question: "Hoe weet ik of mijn case draadloos laden ondersteunt?",
          answer: "Cases met draadloos laden hebben een LED-lampje aan de buitenkant. Standaard cases hebben het lampje alleen binnenin."
        },
        {
          question: "Kan ik een AirPods Pro case gebruiken voor AirPods 2?",
          answer: "Nee, elke generatie heeft een specifieke case. AirPods passen alleen in cases van dezelfde generatie."
        },
        {
          question: "Hoelang gaat een oplaadcase batterij mee?",
          answer: "Gemiddeld 2-4 jaar bij dagelijks gebruik. Daarna neemt de capaciteit af en laadt de case minder vaak volledig op."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "AirPods batterij vervangen: mogelijkheden en kosten", url: "/blog/airpods-batterij-vervangen" },
        { title: "AirPods schoonmaken: de complete handleiding", url: "/blog/airpods-schoonmaken" },
        { title: "Eén AirPod werkt niet? Dit kun je doen", url: "/blog/een-airpod-werkt-niet" },
        { title: "Bekijk alle oplaadcases", url: "/losse-oplaadcases" }
      ],
      readAlso: "Lees ook:"
    },
    en: {
      title: "AirPods Case Not Charging? Here's What to Do",
      metaTitle: "AirPods Case Not Charging? Causes & Solutions",
      metaDescription: "AirPods charging case not charging anymore? Discover the causes and solutions. From cleaning to replacement - complete guide.",
      intro: "An AirPods case that won't charge is frustrating. Without a working case, you can't use your AirPods. The good news: this problem is often easy to fix. Here's how.",
      
      whatIsTheProblem: "What is the problem?",
      whatIsTheProblemText: "The charging case is essential for your AirPods. When the light doesn't come on or the case doesn't respond to the charger, your AirPods can't be charged. This can be due to dirt, a software issue, or a defective battery.",
      
      commonCauses: "Most common causes",
      causes: [
        {
          title: "Dirty Lightning or USB-C port",
          description: "Lint and dust collect in the charging port and block the connection.",
        },
        {
          title: "Defective charging cable or adapter",
          description: "Test with another cable and adapter to rule this out.",
        },
        {
          title: "Dirty charging contacts inside",
          description: "The metal contact points where your AirPods rest can be dirty.",
        },
        {
          title: "Worn battery in the case",
          description: "After 2-3 years of intensive use, the internal battery may be depleted. A ",
          linkText: "replacement charging case",
          linkUrl: "/en/charging-cases",
          linkSuffix: " is the solution."
        },
        {
          title: "Software problem",
          description: "Sometimes the case gets into an error state and a reset helps.",
        }
      ],

      solutions: "Solutions you can try yourself",
      solutionSteps: [
        "Check the charging cable and adapter with another device.",
        "Clean the Lightning/USB-C port with a dry cotton swab.",
        "Clean the charging contacts inside the case with a soft, dry cloth.",
        "Try wireless charging if your case supports it.",
        "Leave the case on the charger for at least 1 hour.",
        "Reset your AirPods by holding the button for 15 seconds."
      ],
      solutionNote: "Doesn't work? Then a ",
      solutionLink: "new charging case",
      solutionLinkUrl: "/en/charging-cases",
      solutionNoteSuffix: " is often the best solution.",

      whenToReplace: "When replacement is smarter",
      whenToReplaceText1: "If your case is older than two years and the battery lasts less than an hour, the battery is probably worn. Apple doesn't offer separate case battery replacement.",
      whenToReplaceText2: "Physical damage to the charging port or internal components cannot be repaired yourself. A new case is the most practical choice.",
      whenToReplaceText3: "We offer ",
      whenToReplaceLink1: "charging cases for all AirPods generations",
      whenToReplaceLink1Url: "/en/charging-cases",
      whenToReplaceText4: ", including wireless and MagSafe variants.",

      compatibility: "Which charging case fits my AirPods?",
      compatibilityText: "Each AirPods generation needs a specific case. AirPods 1 and 2 share the same case, but AirPods 3 and Pro models each have a unique case.",
      compatibilityLinks: [
        { text: "AirPods 1 & 2 charging cases", url: "/en/model/airpods-2" },
        { text: "AirPods 3 charging cases", url: "/en/model/airpods-3" },
        { text: "AirPods Pro charging cases", url: "/en/model/airpods-pro" },
        { text: "AirPods Pro 2 charging cases", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Unsure which model you have? Check our ",
      compatibilityNoteLink: "AirPods identification guide",
      compatibilityNoteLinkUrl: "/en/which-airpods-do-i-have",

      wirelessCharging: "Wireless charging as an alternative",
      wirelessChargingText1: "If the Lightning port is defective but the case otherwise works, wireless charging can be a solution. This only works with cases that support wireless charging.",
      wirelessChargingText2: "AirPods 2 (wireless case), AirPods 3, AirPods Pro and Pro 2 all support wireless charging. The standard AirPods 2 case without wireless charging cannot be upgraded.",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Can I buy a separate charging case?",
          answer: "Yes, you can buy a separate charging case from us for all AirPods generations. Your existing AirPods will work directly with a new case."
        },
        {
          question: "Will my AirPod work in a new case?",
          answer: "Yes, AirPods automatically pair with a new case of the same generation. You don't need to set up anything again."
        },
        {
          question: "How do I know if my case supports wireless charging?",
          answer: "Cases with wireless charging have an LED light on the outside. Standard cases have the light only inside."
        },
        {
          question: "Can I use an AirPods Pro case for AirPods 2?",
          answer: "No, each generation has a specific case. AirPods only fit in cases of the same generation."
        },
        {
          question: "How long does a charging case battery last?",
          answer: "Average 2-4 years with daily use. After that, capacity decreases and the case charges less often to full."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "AirPods battery replacement: options and costs", url: "/en/blog/airpods-battery-replacement" },
        { title: "How to clean AirPods: the complete guide", url: "/en/blog/how-to-clean-airpods" },
        { title: "One AirPod not working? Here's what to do", url: "/en/blog/one-airpod-not-working" },
        { title: "View all charging cases", url: "/en/charging-cases" }
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

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://earbudrestore.nl${isNL ? '/blog/airpods-case-laadt-niet' : '/en/blog/airpods-case-not-charging'}`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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

          {/* What is the problem */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whatIsTheProblem}
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {t.whatIsTheProblemText}
            </p>
          </section>

          {/* Common causes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.commonCauses}
            </h2>
            <ul className="space-y-4">
              {t.causes.map((cause, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium text-foreground">{cause.title}</span>
                  <span className="text-foreground/70 mt-1">
                    {cause.description}
                    {cause.linkText && (
                      <>
                        <Link to={cause.linkUrl} className="text-primary hover:underline">{cause.linkText}</Link>
                        {cause.linkSuffix}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Solutions */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.solutions}
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {t.solutionSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-foreground/70">
              {t.solutionNote}
              <Link to={t.solutionLinkUrl} className="text-primary hover:underline">{t.solutionLink}</Link>
              {t.solutionNoteSuffix}
            </p>
          </section>

          {/* When to replace */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whenToReplace}
            </h2>
            <p className="text-foreground/80 mb-3">{t.whenToReplaceText1}</p>
            <p className="text-foreground/80 mb-3">{t.whenToReplaceText2}</p>
            <p className="text-foreground/80">
              {t.whenToReplaceText3}
              <Link to={t.whenToReplaceLink1Url} className="text-primary hover:underline">{t.whenToReplaceLink1}</Link>
              {t.whenToReplaceText4}
            </p>
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

          {/* Wireless charging */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.wirelessCharging}
            </h2>
            <p className="text-foreground/80 mb-3">{t.wirelessChargingText1}</p>
            <p className="text-foreground/80">{t.wirelessChargingText2}</p>
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

export default BlogAirpodsCaseLaadtNiet;
