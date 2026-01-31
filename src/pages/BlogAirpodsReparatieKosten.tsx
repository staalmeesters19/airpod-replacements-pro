import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogAirpodsReparatieKosten = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "Reparatiekosten vergelijken: fabrikant vs alternatieven",
      metaTitle: "Reparatiekosten vergelijken: fabrikant vs alternatieven",
      metaDescription: "Wat kost reparatie bij de fabrikant? Vergelijk prijzen en ontdek goedkopere alternatieven. EU garantierecht uitgelegd.",
      intro: "Een kapot oortje of lege batterij? Reparatie bij de fabrikant kan duur zijn. Gelukkig zijn er betaalbare alternatieven. In dit artikel vergelijken we alle opties en kosten voor reparatie.",
      
      whatIsTheProblem: "Waarom is AirPods reparatie zo duur?",
      whatIsTheProblemText: "Apple biedt geen traditionele reparaties voor AirPods. In plaats daarvan vervangen ze het defecte onderdeel volledig. Dit betekent dat je bij Apple betaalt voor een volledig nieuwe AirPod of case, niet voor een reparatie.",
      
      appleCosts: "Apple reparatie kosten",
      appleCostsText: "Dit zijn de officiële Apple prijzen voor AirPods vervanging buiten garantie:",
      applePrices: [
        { model: "AirPods 2", left: "€ 75", right: "€ 75", case: "€ 75" },
        { model: "AirPods 3", left: "€ 85", right: "€ 85", case: "€ 85" },
        { model: "AirPods Pro", left: "€ 99", right: "€ 99", case: "€ 99" },
        { model: "AirPods Pro 2", left: "€ 99", right: "€ 99", case: "€ 99" }
      ],
      appleCostsNote: "Prijzen zijn indicatief en kunnen wijzigen. Check apple.com voor actuele prijzen.",

      alternative: "Het alternatief: losse onderdelen kopen",
      alternativeText: "Bij ons kun je losse AirPods en oplaadcases kopen tegen een fractie van de Apple prijs. Je krijgt een werkend onderdeel dat direct compatible is met je bestaande set.",
      ourPrices: [
        { model: "AirPods 2", left: "€ 39", right: "€ 39", case: "€ 45" },
        { model: "AirPods 3", left: "€ 49", right: "€ 49", case: "€ 55" },
        { model: "AirPods Pro", left: "€ 59", right: "€ 59", case: "€ 65" },
        { model: "AirPods Pro 2", left: "€ 69", right: "€ 69", case: "€ 75" }
      ],
      ourPricesNote: "Prijzen zijn indicatief. Bekijk onze shop voor actuele prijzen.",
      ourPricesLinks: [
        { text: "Bekijk losse AirPods", url: "/losse-airpods" },
        { text: "Bekijk oplaadcases", url: "/losse-oplaadcases" }
      ],

      warranty: "EU garantie en consumentenrecht",
      warrantyText1: "In de Europese Unie heb je recht op minimaal 2 jaar wettelijke garantie op consumentenproducten. Dit geldt ook voor AirPods.",
      warrantyText2: "Binnen deze 2 jaar moet Apple defecten kosteloos repareren of vervangen. Let op: waterschade, fysieke schade en batterijslijtage vallen hier vaak niet onder.",
      warrantyText3: "Na de garantieperiode ben je vrij om te kiezen waar je onderdelen koopt.",

      whenApple: "Wanneer naar Apple gaan?",
      whenAppleReasons: [
        "Je AirPods zijn nog binnen de 2 jaar garantie",
        "Je hebt AppleCare+ met accidentele dekking",
        "Het defect is een fabricagefout (geen slijtage)",
        "Je wilt zekerheid van originele Apple onderdelen"
      ],
      
      whenAlternative: "Wanneer kiezen voor een alternatief?",
      whenAlternativeReasons: [
        "Je AirPods zijn buiten garantie",
        "Je hebt geen AppleCare+",
        "Je wilt geld besparen",
        "Je wilt een snelle oplossing zonder afspraak"
      ],

      howItWorks: "Hoe werkt vervanging met losse onderdelen?",
      howItWorksSteps: [
        "Bestel het juiste onderdeel voor jouw AirPods generatie.",
        "Ontvang het onderdeel binnen 1-2 werkdagen.",
        "Koppel het nieuwe onderdeel aan je bestaande set via Bluetooth.",
        "Je AirPods werken weer als vanouds."
      ],
      howItWorksNote: "Het koppelen gaat automatisch. Stop de nieuwe AirPod of je bestaande AirPods in de case, open de case bij je iPhone, en volg de instructies.",

      batteryInfo: "Over batterij vervanging",
      batteryInfoText1: "Apple biedt geen losse batterij vervanging voor AirPods. De batterij zit permanent in het oortje verwerkt. Bij een lege batterij vervang je dus altijd het complete oortje.",
      batteryInfoText2: "Dit geldt ook voor de oplaadcase. Een versleten case-batterij betekent een nieuwe case kopen.",
      batteryInfoLink: "Lees meer over ",
      batteryInfoLinkText: "AirPods batterij vervangen",
      batteryInfoLinkUrl: "/blog/airpods-batterij-vervangen",

      compatibility: "Het juiste onderdeel kiezen",
      compatibilityText: "Zorg dat je de juiste generatie bestelt. Een AirPod 2 past niet in een AirPods Pro case. Check altijd je modelnummer:",
      compatibilityLinks: [
        { text: "AirPods 2 onderdelen", url: "/model/airpods-2" },
        { text: "AirPods 3 onderdelen", url: "/model/airpods-3" },
        { text: "AirPods Pro onderdelen", url: "/model/airpods-pro" },
        { text: "AirPods Pro 2 onderdelen", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Niet zeker welke AirPods je hebt? Gebruik onze ",
      compatibilityNoteLink: "modelnummer checker",
      compatibilityNoteLinkUrl: "/welke-airpods-heb-ik",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Zijn jullie onderdelen origineel Apple?",
          answer: "Wij leveren hoogwaardige compatibele onderdelen die identiek functioneren aan originele Apple onderdelen. Ze zijn volledig compatibel met je bestaande set."
        },
        {
          question: "Hoelang duurt de verzending?",
          answer: "Bestellingen voor 17:00 worden dezelfde dag verzonden. Levering is meestal binnen 1-2 werkdagen in Nederland en België."
        },
        {
          question: "Wat als het onderdeel niet werkt?",
          answer: "Al onze onderdelen zijn getest voor verzending. Werkt iets niet? Neem contact op en we lossen het op - 30 dagen retourrecht."
        },
        {
          question: "Verlies ik mijn Apple garantie?",
          answer: "Het gebruik van onderdelen van derden kan invloed hebben op je Apple garantie. Als je AirPods al buiten garantie zijn, maakt dit geen verschil."
        },
        {
          question: "Kan Apple zien dat ik een ander onderdeel gebruik?",
          answer: "Onze onderdelen koppelen normaal via Bluetooth. Apple kan mogelijk zien dat een onderdeel vervangen is, maar dit heeft geen invloed op het gebruik."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "AirPods batterij vervangen: alles wat je moet weten", url: "/blog/airpods-batterij-vervangen" },
        { title: "Eén AirPod werkt niet? Oorzaken en oplossingen", url: "/blog/een-airpod-werkt-niet" },
        { title: "AirPods case laadt niet op? Dit kun je doen", url: "/blog/airpods-case-laadt-niet" },
        { title: "Bekijk alle losse AirPods", url: "/losse-airpods" }
      ],
      readAlso: "Lees ook:"
    },
    en: {
      title: "Repair Costs: Manufacturer vs Alternatives",
      metaTitle: "Repair Costs: Manufacturer vs Alternatives",
      metaDescription: "What does repair cost at the manufacturer? Compare prices and discover cheaper alternatives. EU warranty rights explained.",
      intro: "A broken earbud or dead battery? Repair at the manufacturer can be expensive. Fortunately, there are affordable alternatives. In this article, we compare all options and costs for repair.",
      
      whatIsTheProblem: "Why is AirPods repair so expensive?",
      whatIsTheProblemText: "Apple doesn't offer traditional repairs for AirPods. Instead, they completely replace the defective component. This means that at Apple, you pay for a completely new AirPod or case, not for a repair.",
      
      appleCosts: "Apple repair costs",
      appleCostsText: "These are the official Apple prices for AirPods replacement out of warranty:",
      applePrices: [
        { model: "AirPods 2", left: "€ 75", right: "€ 75", case: "€ 75" },
        { model: "AirPods 3", left: "€ 85", right: "€ 85", case: "€ 85" },
        { model: "AirPods Pro", left: "€ 99", right: "€ 99", case: "€ 99" },
        { model: "AirPods Pro 2", left: "€ 99", right: "€ 99", case: "€ 99" }
      ],
      appleCostsNote: "Prices are indicative and subject to change. Check apple.com for current prices.",

      alternative: "The alternative: buying individual parts",
      alternativeText: "With us, you can buy individual AirPods and charging cases at a fraction of the Apple price. You get a working component that's immediately compatible with your existing set.",
      ourPrices: [
        { model: "AirPods 2", left: "€ 39", right: "€ 39", case: "€ 45" },
        { model: "AirPods 3", left: "€ 49", right: "€ 49", case: "€ 55" },
        { model: "AirPods Pro", left: "€ 59", right: "€ 59", case: "€ 65" },
        { model: "AirPods Pro 2", left: "€ 69", right: "€ 69", case: "€ 75" }
      ],
      ourPricesNote: "Prices are indicative. Check our shop for current prices.",
      ourPricesLinks: [
        { text: "View single AirPods", url: "/en/single-airpods" },
        { text: "View charging cases", url: "/en/charging-cases" }
      ],

      warranty: "EU warranty and consumer rights",
      warrantyText1: "In the European Union, you're entitled to at least 2 years of legal warranty on consumer products. This also applies to AirPods.",
      warrantyText2: "Within these 2 years, Apple must repair or replace defects free of charge. Note: water damage, physical damage, and battery wear often fall outside this.",
      warrantyText3: "After the warranty period, you're free to choose where you buy parts.",

      whenApple: "When to go to Apple?",
      whenAppleReasons: [
        "Your AirPods are still within 2-year warranty",
        "You have AppleCare+ with accidental coverage",
        "The defect is a manufacturing fault (not wear)",
        "You want assurance of original Apple parts"
      ],
      
      whenAlternative: "When to choose an alternative?",
      whenAlternativeReasons: [
        "Your AirPods are out of warranty",
        "You don't have AppleCare+",
        "You want to save money",
        "You want a quick solution without an appointment"
      ],

      howItWorks: "How does replacement with individual parts work?",
      howItWorksSteps: [
        "Order the right part for your AirPods generation.",
        "Receive the part within 1-2 business days.",
        "Pair the new part with your existing set via Bluetooth.",
        "Your AirPods work again as before."
      ],
      howItWorksNote: "Pairing happens automatically. Put the new AirPod or your existing AirPods in the case, open the case near your iPhone, and follow the instructions.",

      batteryInfo: "About battery replacement",
      batteryInfoText1: "Apple doesn't offer separate battery replacement for AirPods. The battery is permanently integrated into the earbud. With a dead battery, you always replace the complete earbud.",
      batteryInfoText2: "This also applies to the charging case. A worn case battery means buying a new case.",
      batteryInfoLink: "Read more about ",
      batteryInfoLinkText: "AirPods battery replacement",
      batteryInfoLinkUrl: "/en/blog/airpods-battery-replacement",

      compatibility: "Choosing the right part",
      compatibilityText: "Make sure you order the right generation. An AirPod 2 doesn't fit in an AirPods Pro case. Always check your model number:",
      compatibilityLinks: [
        { text: "AirPods 2 parts", url: "/en/model/airpods-2" },
        { text: "AirPods 3 parts", url: "/en/model/airpods-3" },
        { text: "AirPods Pro parts", url: "/en/model/airpods-pro" },
        { text: "AirPods Pro 2 parts", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Not sure which AirPods you have? Use our ",
      compatibilityNoteLink: "model number checker",
      compatibilityNoteLinkUrl: "/en/which-airpods-do-i-have",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Are your parts original Apple?",
          answer: "We supply high-quality compatible parts that function identically to original Apple parts. They are fully compatible with your existing set."
        },
        {
          question: "How long does shipping take?",
          answer: "Orders before 5 PM are shipped the same day. Delivery is usually within 1-2 business days in the Netherlands and Belgium."
        },
        {
          question: "What if the part doesn't work?",
          answer: "All our parts are tested before shipping. Something not working? Contact us and we'll solve it - 30 day return policy."
        },
        {
          question: "Will I lose my Apple warranty?",
          answer: "Using third-party parts may affect your Apple warranty. If your AirPods are already out of warranty, this makes no difference."
        },
        {
          question: "Can Apple see that I'm using a different part?",
          answer: "Our parts pair normally via Bluetooth. Apple may be able to see that a part has been replaced, but this doesn't affect usage."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "AirPods battery replacement: everything you need to know", url: "/en/blog/airpods-battery-replacement" },
        { title: "One AirPod not working? Causes and solutions", url: "/en/blog/one-airpod-not-working" },
        { title: "AirPods case not charging? Here's what to do", url: "/en/blog/airpods-case-not-charging" },
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
        <link rel="canonical" href={`https://earbudrestore.nl${isNL ? '/blog/reparatie-kosten-vergelijken' : '/en/blog/repair-costs-comparison'}`} />
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

          {/* Why expensive */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whatIsTheProblem}
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {t.whatIsTheProblemText}
            </p>
          </section>

          {/* Apple costs */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.appleCosts}
            </h2>
            <p className="text-foreground/80 mb-4">{t.appleCostsText}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-medium">Model</th>
                    <th className="text-left p-3 font-medium">{isNL ? "Links" : "Left"}</th>
                    <th className="text-left p-3 font-medium">{isNL ? "Rechts" : "Right"}</th>
                    <th className="text-left p-3 font-medium">Case</th>
                  </tr>
                </thead>
                <tbody>
                  {t.applePrices.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-3 font-medium">{row.model}</td>
                      <td className="p-3 text-foreground/70">{row.left}</td>
                      <td className="p-3 text-foreground/70">{row.right}</td>
                      <td className="p-3 text-foreground/70">{row.case}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{t.appleCostsNote}</p>
          </section>

          {/* Alternative */}
          <section className="mb-10 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.alternative}
            </h2>
            <p className="text-foreground/80 mb-4">{t.alternativeText}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden bg-background">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-medium">Model</th>
                    <th className="text-left p-3 font-medium">{isNL ? "Links" : "Left"}</th>
                    <th className="text-left p-3 font-medium">{isNL ? "Rechts" : "Right"}</th>
                    <th className="text-left p-3 font-medium">Case</th>
                  </tr>
                </thead>
                <tbody>
                  {t.ourPrices.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-3 font-medium">{row.model}</td>
                      <td className="p-3 text-primary font-medium">{row.left}</td>
                      <td className="p-3 text-primary font-medium">{row.right}</td>
                      <td className="p-3 text-primary font-medium">{row.case}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{t.ourPricesNote}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {t.ourPricesLinks.map((link, index) => (
                <Link key={index} to={link.url} className="text-primary hover:underline font-medium">
                  {link.text}
                </Link>
              ))}
            </div>
          </section>

          {/* EU Warranty */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.warranty}
            </h2>
            <p className="text-foreground/80 mb-3">{t.warrantyText1}</p>
            <p className="text-foreground/80 mb-3">{t.warrantyText2}</p>
            <p className="text-foreground/80">{t.warrantyText3}</p>
          </section>

          {/* When Apple */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whenApple}
            </h2>
            <ul className="space-y-2">
              {t.whenAppleReasons.map((reason, index) => (
                <li key={index} className="text-foreground/70 flex items-center">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-3"></span>
                  {reason}
                </li>
              ))}
            </ul>
          </section>

          {/* When alternative */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whenAlternative}
            </h2>
            <ul className="space-y-2">
              {t.whenAlternativeReasons.map((reason, index) => (
                <li key={index} className="text-foreground/70 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  {reason}
                </li>
              ))}
            </ul>
          </section>

          {/* How it works */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.howItWorks}
            </h2>
            <ol className="space-y-3 list-decimal list-inside mb-4">
              {t.howItWorksSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
            <p className="text-foreground/70">{t.howItWorksNote}</p>
          </section>

          {/* Battery info */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.batteryInfo}
            </h2>
            <p className="text-foreground/80 mb-3">{t.batteryInfoText1}</p>
            <p className="text-foreground/80 mb-3">{t.batteryInfoText2}</p>
            <p className="text-foreground/80">
              {t.batteryInfoLink}
              <Link to={t.batteryInfoLinkUrl} className="text-primary hover:underline">{t.batteryInfoLinkText}</Link>.
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

export default BlogAirpodsReparatieKosten;
