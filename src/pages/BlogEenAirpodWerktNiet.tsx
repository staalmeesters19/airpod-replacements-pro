import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Check, Lightbulb, AlertCircle } from 'lucide-react';

const BlogEenAirpodWerktNiet = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "Eén oortje werkt niet? Oorzaken en oplossingen",
      metaTitle: "Eén oortje werkt niet? Oorzaken en oplossingen | Earbud restore",
      metaDescription: "Linker of rechter oortje geeft geen geluid? Ontdek de oorzaken en oplossingen. Van schoonmaken tot vervanging – complete handleiding.",
      intro: "Je doet je oortjes in en slechts één kant geeft geluid. Frustrerend, maar vaak eenvoudig op te lossen. Dit komt regelmatig voor bij draadloze oortjes zoals Apple AirPods. In dit artikel ontdek je de oorzaken en hoe je dit zelf kunt verhelpen.",
      
      whatIsTheProblem: "Wat is het probleem?",
      whatIsTheProblemText: "Wanneer één oortje geen geluid geeft, kan dit verschillende oorzaken hebben. Het kan gaan om de linker of rechter kant. Soms is het probleem tijdelijk, soms wijst het op een defect onderdeel.",
      
      commonCauses: "Meest voorkomende oorzaken",
      causes: [
        {
          title: "Vervuilde speaker of microfoon",
          description: "Oorsmeer en stof kunnen de geluidsopening blokkeren. Regelmatig schoonmaken voorkomt dit probleem.",
        },
        {
          title: "Lege batterij in één oortje",
          description: "De batterij van één oortje kan sneller leeg zijn. Check de batterijstatus in je telefooninstellingen.",
        },
        {
          title: "Bluetooth-verbindingsprobleem",
          description: "Soms raakt één oortje de verbinding kwijt. Een reset lost dit meestal op.",
        },
        {
          title: "Defecte speaker of batterij",
          description: "Na jarenlang gebruik kan de interne hardware slijten.",
          linkText: "Een vervangend linker oortje",
          linkUrl: "/losse-airpods?side=left",
          linkSuffix: " of ",
          linkText2: "rechter oortje",
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
        "Controleer of beide oortjes volledig opgeladen zijn.",
        "Maak de speaker-opening voorzichtig schoon met een droge, zachte borstel.",
        "Reset je oortjes via de knop op de achterkant van de case.",
        "Vergeet de oortjes in je Bluetooth-instellingen en koppel opnieuw.",
        "Controleer de audiobalans in Instellingen > Toegankelijkheid > Audio/Visueel.",
        "Update je telefoon naar de nieuwste softwareversie."
      ],
      solutionNote: "Werkt dit niet? Dan is een ",
      solutionLink: "vervangend oortje",
      solutionLinkUrl: "/losse-airpods",
      solutionNoteSuffix: " vaak de beste oplossing.",

      whenToReplace: "Wanneer vervangen slimmer is",
      whenToReplaceText1: "Als je oortjes ouder zijn dan twee jaar, kan de batterij significant zijn afgenomen. Na ongeveer 500 laadcycli is de capaciteit nog zo'n 80%.",
      whenToReplaceText2: "Bij een defecte speaker of interne schade is reparatie vaak niet mogelijk. In dat geval is een vervangend onderdeel voordeliger dan een complete set.",
      whenToReplaceText3: "Bekijk onze selectie ",
      whenToReplaceLink1: "linker oortjes",
      whenToReplaceLink1Url: "/losse-airpods?side=left",
      whenToReplaceText4: " en ",
      whenToReplaceLink2: "rechter oortjes",
      whenToReplaceLink2Url: "/losse-airpods?side=right",
      whenToReplaceText5: " voor alle generaties.",

      compatibility: "Welke onderdelen zijn compatibel?",
      compatibilityText: "Het is belangrijk dat je de juiste generatie kiest. Een 2e generatie oortje past niet in een Pro case en andersom. Controleer altijd je modelnummer voordat je bestelt.",
      compatibilityLinks: [
        { text: "2e generatie onderdelen", url: "/model/airpods-2" },
        { text: "3e generatie onderdelen", url: "/model/airpods-3" },
        { text: "Pro onderdelen", url: "/model/airpods-pro" },
        { text: "Pro 2 onderdelen", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Niet zeker welk model je hebt? Bekijk onze ",
      compatibilityNoteLink: "handleiding om je model te herkennen",
      compatibilityNoteLinkUrl: "/welke-airpods",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Kan ik één los oortje kopen?",
          answer: "Ja, je kunt bij ons losse linker of rechter oortjes kopen voor alle generaties. Dit is veel voordeliger dan een complete set."
        },
        {
          question: "Werkt een vervangend oortje met mijn bestaande case?",
          answer: "Ja, mits je dezelfde generatie kiest. Een los 3e generatie oortje werkt perfect met je bestaande 3e generatie case."
        },
        {
          question: "Moet de firmware hetzelfde zijn?",
          answer: "Nee, de oortjes synchroniseren automatisch naar dezelfde firmware wanneer ze gekoppeld zijn met je telefoon."
        },
        {
          question: "Hoe weet ik of mijn oortje echt kapot is?",
          answer: "Probeer eerst alle bovenstaande oplossingen. Als geen enkele stap werkt en het oortje niet oplaadt, is vervanging nodig."
        },
        {
          question: "Hoelang gaat een oortje-batterij mee?",
          answer: "Gemiddeld 2-3 jaar bij normaal gebruik. Daarna neemt de capaciteit merkbaar af en duurt een volle lading korter."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "Oortjes schoonmaken: complete handleiding", url: "/blog/oortjes-schoonmaken" },
        { title: "Vervangend oortje opnieuw koppelen", url: "/blog/vervangend-oortje-koppelen" },
        { title: "Bekijk alle losse oortjes", url: "/losse-airpods" }
      ],
      readAlso: "Lees ook:",
      disclaimer: "Earbuds Restore is een onafhankelijke aanbieder en niet gelieerd aan Apple Inc."
    },
    en: {
      title: "One earbud not working? Causes and solutions",
      metaTitle: "One earbud not working? Causes and solutions | Earbud restore",
      metaDescription: "Left or right earbud not producing sound? Discover the causes and solutions. From cleaning to replacement – complete guide.",
      intro: "You put in your earbuds and only one side produces sound. Frustrating, but often easy to fix. This commonly occurs with wireless earbuds like Apple AirPods. In this article, you'll discover the causes and how to solve it yourself.",
      
      whatIsTheProblem: "What is the problem?",
      whatIsTheProblemText: "When one earbud produces no sound, there can be various causes. It can affect the left or right side. Sometimes the problem is temporary, sometimes it indicates a defective component.",
      
      commonCauses: "Most common causes",
      causes: [
        {
          title: "Dirty speaker or microphone",
          description: "Earwax and dust can block the sound opening. Regular cleaning prevents this problem.",
        },
        {
          title: "Dead battery in one earbud",
          description: "One earbud's battery may drain faster. Check the battery status in your phone settings.",
        },
        {
          title: "Bluetooth connection issue",
          description: "Sometimes one earbud loses its connection. A reset usually fixes this.",
        },
        {
          title: "Defective speaker or battery",
          description: "After years of use, internal hardware can wear out.",
          linkText: "A replacement left earbud",
          linkUrl: "/en/single-airpods?side=left",
          linkSuffix: " or ",
          linkText2: "right earbud",
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
        "Check if both earbuds are fully charged.",
        "Gently clean the speaker opening with a dry, soft brush.",
        "Reset your earbuds using the button on the back of the case.",
        "Forget the earbuds in your Bluetooth settings and pair again.",
        "Check the audio balance in Settings > Accessibility > Audio/Visual.",
        "Update your phone to the latest software version."
      ],
      solutionNote: "Doesn't work? Then a ",
      solutionLink: "replacement earbud",
      solutionLinkUrl: "/en/single-airpods",
      solutionNoteSuffix: " is often the best solution.",

      whenToReplace: "When replacement is smarter",
      whenToReplaceText1: "If your earbuds are older than two years, the battery may have significantly degraded. After about 500 charge cycles, capacity is still around 80%.",
      whenToReplaceText2: "With a defective speaker or internal damage, repair is often not possible. In that case, a replacement part is more affordable than a complete set.",
      whenToReplaceText3: "Browse our selection of ",
      whenToReplaceLink1: "left earbuds",
      whenToReplaceLink1Url: "/en/single-airpods?side=left",
      whenToReplaceText4: " and ",
      whenToReplaceLink2: "right earbuds",
      whenToReplaceLink2Url: "/en/single-airpods?side=right",
      whenToReplaceText5: " for all generations.",

      compatibility: "Which parts are compatible?",
      compatibilityText: "It's important to choose the right generation. A 2nd generation earbud doesn't fit in a Pro case and vice versa. Always check your model number before ordering.",
      compatibilityLinks: [
        { text: "2nd generation parts", url: "/en/model/airpods-2" },
        { text: "3rd generation parts", url: "/en/model/airpods-3" },
        { text: "Pro parts", url: "/en/model/airpods-pro" },
        { text: "Pro 2 parts", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Not sure which model you have? Check our ",
      compatibilityNoteLink: "guide to identify your model",
      compatibilityNoteLinkUrl: "/en/which-airpods",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Can I buy a single earbud?",
          answer: "Yes, you can buy individual left or right earbuds from us for all generations. This is much more affordable than a complete set."
        },
        {
          question: "Will a replacement earbud work with my existing case?",
          answer: "Yes, as long as you choose the same generation. A single 3rd generation earbud works perfectly with your existing 3rd generation case."
        },
        {
          question: "Does the firmware need to be the same?",
          answer: "No, the earbuds automatically sync to the same firmware when paired with your phone."
        },
        {
          question: "How do I know if my earbud is really broken?",
          answer: "First try all the solutions above. If nothing works and the earbud won't charge, replacement is needed."
        },
        {
          question: "How long does an earbud battery last?",
          answer: "Average 2-3 years with normal use. After that, capacity noticeably decreases and a full charge lasts shorter."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "How to clean earbuds: complete guide", url: "/en/blog/how-to-clean-earbuds" },
        { title: "How to pair a replacement earbud", url: "/en/blog/pair-replacement-earbud" },
        { title: "View all single earbuds", url: "/en/single-airpods" }
      ],
      readAlso: "Read also:",
      disclaimer: "Earbuds Restore is an independent provider and not affiliated with Apple Inc."
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
        <link rel="canonical" href={`https://earbudrestore.nl${isNL ? '/blog/een-oortje-werkt-niet' : '/en/blog/one-earbud-not-working'}`} />
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
            <Card className="p-6 bg-secondary/30">
              <ol className="space-y-3 list-decimal list-inside">
                {t.solutionSteps.map((step, index) => (
                  <li key={index} className="text-foreground/80">{step}</li>
                ))}
              </ol>
            </Card>
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.faq}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {t.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Articles */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.relatedArticles}
            </h2>
            <ul className="space-y-2">
              {t.related.map((article, index) => (
                <li key={index}>
                  <Link to={article.url} className="text-primary hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {t.disclaimer}
            </p>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogEenAirpodWerktNiet;
