import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogEenAirpodWerktNiet = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "Eén AirPod Werkt Niet? Oorzaken & Oplossingen",
      metaTitle: "Eén AirPod Werkt Niet? Oorzaken & Oplossingen [2024]",
      metaDescription: "Linker of rechter AirPod werkt niet meer? Ontdek de meest voorkomende oorzaken en oplossingen. Van reset tot vervanging - alles wat je moet weten.",
      intro: "Het is een veelvoorkomend probleem: je doet je AirPods in en slechts één oortje geeft geluid. Gelukkig is dit probleem vaak eenvoudig op te lossen. In dit artikel leer je de oorzaken kennen en hoe je dit zelf kunt verhelpen.",
      
      whatIsTheProblem: "Wat is het probleem?",
      whatIsTheProblemText: "Wanneer één AirPod geen geluid geeft, kan dit verschillende oorzaken hebben. Het kan gaan om de linker of rechter AirPod. Soms is het probleem tijdelijk, soms wijst het op een defect onderdeel.",
      
      commonCauses: "Meest voorkomende oorzaken",
      causes: [
        {
          title: "Vervuilde speaker of microfoon",
          description: "Oorsmeer en stof kunnen de geluidsopening blokkeren. Regelmatig schoonmaken voorkomt dit probleem.",
        },
        {
          title: "Lege batterij in één AirPod",
          description: "De batterij van één oortje kan sneller leeg zijn. Check de batterijstatus in je iPhone-instellingen.",
        },
        {
          title: "Bluetooth-verbindingsprobleem",
          description: "Soms raakt één AirPod de verbinding kwijt. Een reset lost dit meestal op.",
        },
        {
          title: "Defecte speaker of batterij",
          description: "Na jarenlang gebruik kan de interne hardware slijten.",
          linkText: "Een losse linker AirPod",
          linkUrl: "/losse-airpods?side=left",
          linkSuffix: " of ",
          linkText2: "rechter AirPod",
          linkUrl2: "/losse-airpods?side=right",
          linkSuffix2: " is dan de oplossing."
        },
        {
          title: "Oplaadcontacten vuil of beschadigd",
          description: "Vuile contactpunten in de case kunnen laden verhinderen. Bekijk ook onze ",
          linkText: "oplaadcases",
          linkUrl: "/losse-oplaadcases",
          linkSuffix: " als de case het probleem is."
        }
      ],

      solutions: "Oplossingen die je zelf kunt proberen",
      solutionSteps: [
        "Controleer of beide AirPods volledig opgeladen zijn.",
        "Maak de speaker-opening voorzichtig schoon met een droge, zachte borstel.",
        "Reset je AirPods via de knop op de achterkant van de case.",
        "Vergeet de AirPods in je Bluetooth-instellingen en koppel opnieuw.",
        "Controleer de audiobalans in Instellingen > Toegankelijkheid > Audio/Visueel.",
        "Update je iPhone naar de nieuwste iOS-versie."
      ],
      solutionNote: "Werkt dit niet? Dan is een ",
      solutionLink: "losse AirPod als vervanging",
      solutionLinkUrl: "/losse-airpods",
      solutionNoteSuffix: " vaak de beste oplossing.",

      whenToReplace: "Wanneer vervangen slimmer is",
      whenToReplaceText1: "Als je AirPods ouder zijn dan twee jaar, kan de batterij significant zijn afgenomen. Apple geeft aan dat de batterijcapaciteit na 500 laadcycli nog 80% is.",
      whenToReplaceText2: "Bij een defecte speaker of interne schade is reparatie vaak niet mogelijk. In dat geval is vervangen voordeliger dan een volledig nieuw setje kopen.",
      whenToReplaceText3: "Bekijk onze selectie ",
      whenToReplaceLink1: "linker AirPods",
      whenToReplaceLink1Url: "/losse-airpods?side=left",
      whenToReplaceText4: " en ",
      whenToReplaceLink2: "rechter AirPods",
      whenToReplaceLink2Url: "/losse-airpods?side=right",
      whenToReplaceText5: " voor alle generaties.",

      compatibility: "Welke AirPods-onderdelen zijn compatibel?",
      compatibilityText: "Het is belangrijk dat je de juiste generatie kiest. Een AirPod 2 past niet in een AirPods Pro case en vice versa. Controleer altijd je modelnummer voordat je bestelt.",
      compatibilityLinks: [
        { text: "AirPods 2 onderdelen", url: "/model/airpods-2" },
        { text: "AirPods 3 onderdelen", url: "/model/airpods-3" },
        { text: "AirPods Pro onderdelen", url: "/model/airpods-pro" },
        { text: "AirPods Pro 2 onderdelen", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Niet zeker welke AirPods je hebt? Bekijk onze ",
      compatibilityNoteLink: "handleiding om je model te herkennen",
      compatibilityNoteLinkUrl: "/welke-airpods-heb-ik",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Kan ik één losse AirPod kopen?",
          answer: "Ja, je kunt bij ons losse linker of rechter AirPods kopen voor alle generaties. Dit is veel voordeliger dan een compleet nieuw setje."
        },
        {
          question: "Werkt een losse AirPod met mijn bestaande case?",
          answer: "Ja, mits je dezelfde generatie kiest. Een losse AirPod 3 werkt perfect met je bestaande AirPods 3 case."
        },
        {
          question: "Moet de firmware hetzelfde zijn?",
          answer: "Nee, de AirPods synchroniseren automatisch naar dezelfde firmware wanneer ze gekoppeld zijn met je iPhone."
        },
        {
          question: "Hoe weet ik of mijn AirPod echt kapot is?",
          answer: "Probeer eerst alle bovenstaande oplossingen. Als geen enkele stap werkt en de AirPod niet oplaadt, is vervanging nodig."
        },
        {
          question: "Hoelang gaat een AirPod batterij mee?",
          answer: "Gemiddeld 2-3 jaar bij normaal gebruik. Daarna neemt de capaciteit merkbaar af en duurt een volle lading korter."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "AirPods schoonmaken: complete handleiding", url: "/blog/airpods-schoonmaken" },
        { title: "AirPods opnieuw verbinden met je iPhone", url: "/blog/airpods-opnieuw-pairen" },
        { title: "AirPods vs AirPods Pro: wat zijn de verschillen?", url: "/blog/airpods-vs-airpods-pro" },
        { title: "Bekijk alle losse AirPods", url: "/losse-airpods" }
      ],
      readAlso: "Lees ook:"
    },
    en: {
      title: "One AirPod Not Working? Causes & Solutions",
      metaTitle: "One AirPod Not Working? Causes & Solutions [2024]",
      metaDescription: "Left or right AirPod not working? Discover the most common causes and solutions. From reset to replacement - everything you need to know.",
      intro: "It's a common problem: you put in your AirPods and only one earbud produces sound. Fortunately, this issue is often easy to fix. In this article, you'll learn the causes and how to solve it yourself.",
      
      whatIsTheProblem: "What is the problem?",
      whatIsTheProblemText: "When one AirPod produces no sound, there can be various causes. It can affect the left or right AirPod. Sometimes the problem is temporary, sometimes it indicates a defective component.",
      
      commonCauses: "Most common causes",
      causes: [
        {
          title: "Dirty speaker or microphone",
          description: "Earwax and dust can block the sound opening. Regular cleaning prevents this problem.",
        },
        {
          title: "Dead battery in one AirPod",
          description: "One earbud's battery may drain faster. Check the battery status in your iPhone settings.",
        },
        {
          title: "Bluetooth connection issue",
          description: "Sometimes one AirPod loses its connection. A reset usually fixes this.",
        },
        {
          title: "Defective speaker or battery",
          description: "After years of use, internal hardware can wear out.",
          linkText: "A replacement left AirPod",
          linkUrl: "/en/single-airpods?side=left",
          linkSuffix: " or ",
          linkText2: "right AirPod",
          linkUrl2: "/en/single-airpods?side=right",
          linkSuffix2: " is the solution."
        },
        {
          title: "Dirty or damaged charging contacts",
          description: "Dirty contact points in the case can prevent charging. Also check our ",
          linkText: "charging cases",
          linkUrl: "/en/charging-cases",
          linkSuffix: " if the case is the problem."
        }
      ],

      solutions: "Solutions you can try yourself",
      solutionSteps: [
        "Check if both AirPods are fully charged.",
        "Gently clean the speaker opening with a dry, soft brush.",
        "Reset your AirPods using the button on the back of the case.",
        "Forget the AirPods in your Bluetooth settings and pair again.",
        "Check the audio balance in Settings > Accessibility > Audio/Visual.",
        "Update your iPhone to the latest iOS version."
      ],
      solutionNote: "Doesn't work? Then a ",
      solutionLink: "replacement AirPod",
      solutionLinkUrl: "/en/single-airpods",
      solutionNoteSuffix: " is often the best solution.",

      whenToReplace: "When replacement is smarter",
      whenToReplaceText1: "If your AirPods are older than two years, the battery may have significantly degraded. Apple states that battery capacity is still 80% after 500 charge cycles.",
      whenToReplaceText2: "With a defective speaker or internal damage, repair is often not possible. In that case, replacement is more affordable than buying a completely new set.",
      whenToReplaceText3: "Browse our selection of ",
      whenToReplaceLink1: "left AirPods",
      whenToReplaceLink1Url: "/en/single-airpods?side=left",
      whenToReplaceText4: " and ",
      whenToReplaceLink2: "right AirPods",
      whenToReplaceLink2Url: "/en/single-airpods?side=right",
      whenToReplaceText5: " for all generations.",

      compatibility: "Which AirPods parts are compatible?",
      compatibilityText: "It's important to choose the right generation. An AirPod 2 doesn't fit in an AirPods Pro case and vice versa. Always check your model number before ordering.",
      compatibilityLinks: [
        { text: "AirPods 2 parts", url: "/en/model/airpods-2" },
        { text: "AirPods 3 parts", url: "/en/model/airpods-3" },
        { text: "AirPods Pro parts", url: "/en/model/airpods-pro" },
        { text: "AirPods Pro 2 parts", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Not sure which AirPods you have? Check our ",
      compatibilityNoteLink: "guide to identify your model",
      compatibilityNoteLinkUrl: "/en/which-airpods-do-i-have",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Can I buy a single AirPod?",
          answer: "Yes, you can buy individual left or right AirPods from us for all generations. This is much more affordable than a complete new set."
        },
        {
          question: "Will a single AirPod work with my existing case?",
          answer: "Yes, as long as you choose the same generation. A single AirPod 3 works perfectly with your existing AirPods 3 case."
        },
        {
          question: "Does the firmware need to be the same?",
          answer: "No, the AirPods automatically sync to the same firmware when paired with your iPhone."
        },
        {
          question: "How do I know if my AirPod is really broken?",
          answer: "First try all the solutions above. If nothing works and the AirPod won't charge, replacement is needed."
        },
        {
          question: "How long does an AirPod battery last?",
          answer: "Average 2-3 years with normal use. After that, capacity noticeably decreases and a full charge lasts shorter."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "How to clean AirPods: complete guide", url: "/en/blog/how-to-clean-airpods" },
        { title: "How to reconnect AirPods to your iPhone", url: "/en/blog/how-to-pair-airpods" },
        { title: "AirPods vs AirPods Pro: what are the differences?", url: "/en/blog/airpods-vs-airpods-pro" },
        { title: "View all single AirPods", url: "/en/single-airpods" }
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
        <link rel="canonical" href={`https://repairpods.nl${isNL ? '/blog/een-airpod-werkt-niet' : '/en/blog/one-airpod-not-working'}`} />
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
                        {cause.linkText2 && (
                          <>
                            <Link to={cause.linkUrl2!} className="text-primary hover:underline">{cause.linkText2}</Link>
                            {cause.linkSuffix2}
                          </>
                        )}
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
              <Link to={t.whenToReplaceLink2Url} className="text-primary hover:underline">{t.whenToReplaceLink2}</Link>
              {t.whenToReplaceText5}
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

export default BlogEenAirpodWerktNiet;
