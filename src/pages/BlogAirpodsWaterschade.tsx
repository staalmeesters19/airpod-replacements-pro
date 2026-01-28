import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogAirpodsWaterschade = () => {
  const { currentLanguage } = useLanguage();
  const isNL = currentLanguage === 'nl';

  const content = {
    nl: {
      title: "AirPods Waterschade: Wat Te Doen Als Ze Nat Zijn",
      metaTitle: "AirPods Waterschade? Dit Moet Je Direct Doen [2024]",
      metaDescription: "AirPods in water gevallen of door de was gegaan? Ontdek wat je direct moet doen om ze te redden en wanneer vervanging nodig is.",
      intro: "Je AirPods in het toilet laten vallen of per ongeluk meegewassen? Paniek is begrijpelijk, maar snel en correct handelen kan je AirPods nog redden. Hier lees je precies wat je moet doen.",
      
      whatIsTheProblem: "Wat is het probleem?",
      whatIsTheProblemText: "Water en elektronica gaan niet samen. Wanneer vocht in je AirPods komt, kan dit kortsluiting veroorzaken en interne componenten beschadigen. De schade is vaak niet direct zichtbaar maar kan later problemen geven.",
      
      whatToDo: "Wat je direct moet doen",
      immediateSteps: [
        "Haal de AirPods onmiddellijk uit het water.",
        "Schud ze voorzichtig uit met de speakers naar beneden gericht.",
        "Dep ze droog met een zachte, pluisvrije doek.",
        "Leg ze NIET in de oplaadcase - die kan ook nat zijn.",
        "Plaats ze op een droge plek bij kamertemperatuur.",
        "Wacht minimaal 24-48 uur voordat je ze test."
      ],

      doNot: "Wat je vooral NIET moet doen",
      doNotSteps: [
        "Niet in rijst leggen - dit kan stof en zetmeel in de speakers duwen.",
        "Niet met een föhn drogen - de hitte kan componenten beschadigen.",
        "Niet direct opladen - vocht en stroom samen veroorzaakt kortsluiting.",
        "Niet schudden met speakers omhoog - dit duwt water dieper naar binnen.",
        "Niet in de magnetron of oven leggen - dit vernietigt je AirPods volledig."
      ],

      waterTypes: "Type water maakt uit",
      waterTypesText1: "Schoon leidingwater geeft de beste overlevingskans. Zout water (zee), zeepwater (wasmachine) en toiletwater zijn agressiever en kunnen sneller corrosie veroorzaken.",
      waterTypesText2: "Bij zout of zeepwater: spoel kort af met gedestilleerd water om residu te verwijderen, en droog vervolgens zoals hierboven beschreven.",

      afterDrying: "Na het drogen",
      afterDryingText1: "Test na 48 uur eerst één AirPod in de case. Controleer of deze oplaadt en geluid geeft. Test daarna de andere.",
      afterDryingText2: "Let op deze symptomen van waterschade:",
      afterDryingSymptoms: [
        "Geen geluid of gedempt geluid",
        "Krakend of vervormend geluid",
        "AirPod laadt niet op",
        "Verbindingsproblemen met iPhone",
        "Microfoon werkt niet goed"
      ],

      whenToReplace: "Wanneer vervangen nodig is",
      whenToReplaceText1: "Apple's garantie dekt geen waterschade. De liquid contact indicator binnenin je AirPods verkleurt bij contact met vocht en wordt door Apple gecontroleerd.",
      whenToReplaceText2: "Als je AirPods na 48-72 uur drogen nog steeds problemen vertonen, is de interne schade waarschijnlijk permanent.",
      whenToReplaceText3: "In dat geval kun je een ",
      whenToReplaceLink1: "losse linker AirPod",
      whenToReplaceLink1Url: "/losse-airpods?side=left",
      whenToReplaceText4: ", ",
      whenToReplaceLink2: "rechter AirPod",
      whenToReplaceLink2Url: "/losse-airpods?side=right",
      whenToReplaceText5: " of ",
      whenToReplaceLink3: "oplaadcase",
      whenToReplaceLink3Url: "/losse-oplaadcases",
      whenToReplaceText6: " vervangen - veel voordeliger dan een heel nieuw setje.",

      waterResistance: "Zijn AirPods waterbestendig?",
      waterResistanceText1: "AirPods Pro (1e en 2e generatie) en AirPods 3 hebben IPX4-classificatie. Dit betekent spatwaterbestendig, niet waterdicht. Ze overleven zweet en lichte regen, maar niet onderdompeling.",
      waterResistanceText2: "AirPods 1 en 2 hebben geen officiële waterbestendigheid. Elke vorm van vocht is een risico.",
      waterResistanceText3: "Alle oplaadcases zijn NIET waterbestendig, ongeacht generatie.",

      compatibility: "Vervangende onderdelen per generatie",
      compatibilityText: "Moet je een onderdeel vervangen na waterschade? Kies het juiste model:",
      compatibilityLinks: [
        { text: "AirPods 2 onderdelen", url: "/model/airpods-2" },
        { text: "AirPods 3 onderdelen", url: "/model/airpods-3" },
        { text: "AirPods Pro onderdelen", url: "/model/airpods-pro" },
        { text: "AirPods Pro 2 onderdelen", url: "/model/airpods-pro-2" }
      ],
      compatibilityNote: "Weet je niet welke AirPods je hebt? Bekijk onze ",
      compatibilityNoteLink: "model identificatie handleiding",
      compatibilityNoteLinkUrl: "/welke-airpods-heb-ik",

      faq: "Veelgestelde vragen",
      faqs: [
        {
          question: "Kan ik mijn AirPods nog redden na waterschade?",
          answer: "Dat hangt af van de duur en het type water. Bij snel handelen en goed drogen is er een goede kans. Wacht altijd 48 uur voor je test."
        },
        {
          question: "Dekt Apple garantie waterschade?",
          answer: "Nee, waterschade valt onder 'accidentele schade' en wordt niet gedekt door de standaard garantie. AppleCare+ met accidentele dekking mogelijk wel."
        },
        {
          question: "Hoe weet ik of mijn AirPods waterschade hebben?",
          answer: "Symptomen zijn geen geluid, vervormd geluid, niet opladen of verbindingsproblemen. Apple kan de liquid indicator binnenin controleren."
        },
        {
          question: "Kan ik één beschadigde AirPod vervangen?",
          answer: "Ja, bij ons kun je losse linker of rechter AirPods kopen voor alle generaties. Veel voordeliger dan een compleet nieuw setje."
        },
        {
          question: "Werken AirPods nog na de wasmachine?",
          answer: "Soms wel, maar de kans is klein. De combinatie van water, zeep, temperatuur en mechanische druk is zeer schadelijk. Volg het droogproces en test na 48 uur."
        }
      ],

      relatedArticles: "Gerelateerde artikelen",
      related: [
        { title: "AirPods schoonmaken: de complete handleiding", url: "/blog/airpods-schoonmaken" },
        { title: "Eén AirPod werkt niet? Oorzaken en oplossingen", url: "/blog/een-airpod-werkt-niet" },
        { title: "AirPods case laadt niet op? Dit kun je doen", url: "/blog/airpods-case-laadt-niet" },
        { title: "Bekijk alle losse AirPods", url: "/losse-airpods" }
      ],
      readAlso: "Lees ook:"
    },
    en: {
      title: "AirPods Water Damage: What To Do When They Get Wet",
      metaTitle: "AirPods Water Damage? Do This Immediately [2024]",
      metaDescription: "AirPods fell in water or went through the wash? Discover what to do immediately to save them and when replacement is needed.",
      intro: "Dropped your AirPods in the toilet or accidentally washed them? Panic is understandable, but acting quickly and correctly can still save your AirPods. Here's exactly what to do.",
      
      whatIsTheProblem: "What is the problem?",
      whatIsTheProblemText: "Water and electronics don't mix. When moisture gets into your AirPods, it can cause short circuits and damage internal components. The damage is often not immediately visible but can cause problems later.",
      
      whatToDo: "What to do immediately",
      immediateSteps: [
        "Remove the AirPods from water immediately.",
        "Gently shake them out with the speakers facing down.",
        "Pat them dry with a soft, lint-free cloth.",
        "Do NOT put them in the charging case - it may also be wet.",
        "Place them in a dry spot at room temperature.",
        "Wait at least 24-48 hours before testing them."
      ],

      doNot: "What NOT to do",
      doNotSteps: [
        "Don't put them in rice - this can push dust and starch into the speakers.",
        "Don't use a hair dryer - the heat can damage components.",
        "Don't charge immediately - moisture and electricity together causes short circuit.",
        "Don't shake with speakers facing up - this pushes water deeper inside.",
        "Don't put in microwave or oven - this will completely destroy your AirPods."
      ],

      waterTypes: "Type of water matters",
      waterTypesText1: "Clean tap water gives the best survival chance. Salt water (sea), soapy water (washing machine), and toilet water are more aggressive and can cause corrosion faster.",
      waterTypesText2: "With salt or soapy water: briefly rinse with distilled water to remove residue, then dry as described above.",

      afterDrying: "After drying",
      afterDryingText1: "After 48 hours, first test one AirPod in the case. Check if it charges and produces sound. Then test the other.",
      afterDryingText2: "Watch for these water damage symptoms:",
      afterDryingSymptoms: [
        "No sound or muffled sound",
        "Crackling or distorted sound",
        "AirPod won't charge",
        "Connection problems with iPhone",
        "Microphone not working properly"
      ],

      whenToReplace: "When replacement is needed",
      whenToReplaceText1: "Apple's warranty doesn't cover water damage. The liquid contact indicator inside your AirPods changes color when exposed to moisture and is checked by Apple.",
      whenToReplaceText2: "If your AirPods still have problems after 48-72 hours of drying, the internal damage is probably permanent.",
      whenToReplaceText3: "In that case, you can replace a ",
      whenToReplaceLink1: "single left AirPod",
      whenToReplaceLink1Url: "/en/single-airpods?side=left",
      whenToReplaceText4: ", ",
      whenToReplaceLink2: "right AirPod",
      whenToReplaceLink2Url: "/en/single-airpods?side=right",
      whenToReplaceText5: ", or ",
      whenToReplaceLink3: "charging case",
      whenToReplaceLink3Url: "/en/charging-cases",
      whenToReplaceText6: " - much more affordable than a complete new set.",

      waterResistance: "Are AirPods water resistant?",
      waterResistanceText1: "AirPods Pro (1st and 2nd generation) and AirPods 3 have IPX4 rating. This means splash resistant, not waterproof. They survive sweat and light rain, but not submersion.",
      waterResistanceText2: "AirPods 1 and 2 have no official water resistance. Any form of moisture is a risk.",
      waterResistanceText3: "All charging cases are NOT water resistant, regardless of generation.",

      compatibility: "Replacement parts per generation",
      compatibilityText: "Need to replace a part after water damage? Choose the right model:",
      compatibilityLinks: [
        { text: "AirPods 2 parts", url: "/en/model/airpods-2" },
        { text: "AirPods 3 parts", url: "/en/model/airpods-3" },
        { text: "AirPods Pro parts", url: "/en/model/airpods-pro" },
        { text: "AirPods Pro 2 parts", url: "/en/model/airpods-pro-2" }
      ],
      compatibilityNote: "Not sure which AirPods you have? Check our ",
      compatibilityNoteLink: "model identification guide",
      compatibilityNoteLinkUrl: "/en/which-airpods-do-i-have",

      faq: "Frequently asked questions",
      faqs: [
        {
          question: "Can I still save my AirPods after water damage?",
          answer: "That depends on the duration and type of water. With quick action and proper drying, there's a good chance. Always wait 48 hours before testing."
        },
        {
          question: "Does Apple warranty cover water damage?",
          answer: "No, water damage falls under 'accidental damage' and is not covered by standard warranty. AppleCare+ with accidental coverage might."
        },
        {
          question: "How do I know if my AirPods have water damage?",
          answer: "Symptoms are no sound, distorted sound, not charging, or connection problems. Apple can check the liquid indicator inside."
        },
        {
          question: "Can I replace one damaged AirPod?",
          answer: "Yes, you can buy individual left or right AirPods from us for all generations. Much more affordable than a complete new set."
        },
        {
          question: "Do AirPods still work after the washing machine?",
          answer: "Sometimes, but the chance is small. The combination of water, soap, temperature, and mechanical pressure is very damaging. Follow the drying process and test after 48 hours."
        }
      ],

      relatedArticles: "Related articles",
      related: [
        { title: "How to clean AirPods: the complete guide", url: "/en/blog/how-to-clean-airpods" },
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": t.title,
    "description": t.intro,
    "step": t.immediateSteps.map((step, index) => ({
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
        <link rel="canonical" href={`https://earbudrestore.nl${isNL ? '/blog/airpods-waterschade' : '/en/blog/airpods-water-damage'}`} />
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

          {/* What is the problem */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whatIsTheProblem}
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {t.whatIsTheProblemText}
            </p>
          </section>

          {/* What to do immediately */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.whatToDo}
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {t.immediateSteps.map((step, index) => (
                <li key={index} className="text-foreground/80">{step}</li>
              ))}
            </ol>
          </section>

          {/* What NOT to do */}
          <section className="mb-10 bg-destructive/5 border border-destructive/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.doNot}
            </h2>
            <ul className="space-y-3">
              {t.doNotSteps.map((step, index) => (
                <li key={index} className="text-foreground/80 flex items-start">
                  <span className="text-destructive mr-2">✕</span>
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Water types */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.waterTypes}
            </h2>
            <p className="text-foreground/80 mb-3">{t.waterTypesText1}</p>
            <p className="text-foreground/80">{t.waterTypesText2}</p>
          </section>

          {/* After drying */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.afterDrying}
            </h2>
            <p className="text-foreground/80 mb-3">{t.afterDryingText1}</p>
            <p className="text-foreground/80 mb-3">{t.afterDryingText2}</p>
            <ul className="space-y-2">
              {t.afterDryingSymptoms.map((symptom, index) => (
                <li key={index} className="text-foreground/70 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  {symptom}
                </li>
              ))}
            </ul>
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
              <Link to={t.whenToReplaceLink3Url} className="text-primary hover:underline">{t.whenToReplaceLink3}</Link>
              {t.whenToReplaceText6}
            </p>
          </section>

          {/* Water resistance */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t.waterResistance}
            </h2>
            <p className="text-foreground/80 mb-3">{t.waterResistanceText1}</p>
            <p className="text-foreground/80 mb-3">{t.waterResistanceText2}</p>
            <p className="text-foreground/80 font-medium">{t.waterResistanceText3}</p>
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

export default BlogAirpodsWaterschade;
