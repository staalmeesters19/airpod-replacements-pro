import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ChevronLeft, Check, Lightbulb, AlertCircle, Euro, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItemsNL = [
  {
    question: "Kan ik zelf de batterij van mijn draadloze oortjes vervangen?",
    answer: "Nee, de batterij van draadloze oortjes is niet zelf te vervangen. De oortjes zijn verlijmd en bevatten geen vervangbare onderdelen. Pogingen om de batterij te vervangen leiden vrijwel altijd tot onherstelbare schade."
  },
  {
    question: "Hoe lang gaat de batterij van draadloze oortjes mee?",
    answer: "De batterij van draadloze oortjes gaat gemiddeld 2-3 jaar mee bij normaal gebruik. Na ongeveer 500 laadcycli houdt een lithium-ion batterij nog maar 80% van de originele capaciteit over. Intensief gebruik kan de levensduur verkorten."
  },
  {
    question: "Wat kost batterijvervanging bij de fabrikant?",
    answer: "De fabrikant rekent €89 per oortje of oplaadcase voor batterijvervanging. In de praktijk vervangen ze niet de batterij, maar geven ze een vervangend (refurbished) exemplaar. Voor een complete set ben je dus €178 kwijt, exclusief de case."
  },
  {
    question: "Is een los oortje kopen goedkoper dan batterijvervanging?",
    answer: "Ja, bij Earbud restore koop je een los oortje vanaf €44,95, wat aanzienlijk goedkoper is dan de €89 die de fabrikant rekent voor batterijservice. Bovendien krijg je een oortje met verse batterij."
  },
  {
    question: "Hoe weet ik of mijn oortjes-batterij slecht is?",
    answer: "Tekenen van een slechte batterij: de oortjes gaan nog maar 1-2 uur mee in plaats van 4-6 uur, één oortje is sneller leeg dan de ander, of de case laadt de oortjes niet meer volledig op. Je kunt de batterijstatus checken via je telefoon bij verbonden oortjes."
  },
  {
    question: "Kan ik een nieuwe oplaadcase kopen als alleen de case-batterij slecht is?",
    answer: "Ja, bij Earbud restore verkopen we losse oplaadcases voor alle generaties. Dit is vaak de beste oplossing als je oortjes nog goed werken maar de case niet meer oplaadt. Een losse case kost tussen de €49,95 en €79,95."
  }
];

const faqItemsEN = [
  {
    question: "Can I replace the battery in my wireless earbuds myself?",
    answer: "No, the battery in wireless earbuds cannot be replaced by yourself. The earbuds are glued together and contain no replaceable parts. Attempts to replace the battery almost always result in irreparable damage."
  },
  {
    question: "How long does the battery of wireless earbuds last?",
    answer: "The battery of wireless earbuds lasts an average of 2-3 years with normal use. After about 500 charging cycles, a lithium-ion battery retains only 80% of its original capacity. Intensive use can shorten the lifespan."
  },
  {
    question: "How much does battery replacement cost at the manufacturer?",
    answer: "The manufacturer charges €89 per earbud or charging case for battery service. In practice, they don't replace the battery but give you a replacement (refurbished) unit. For a complete set, you'll pay €178, excluding the case."
  },
  {
    question: "Is buying a single earbud cheaper than battery replacement?",
    answer: "Yes, at Earbud restore you can buy a single earbud from €44.95, which is significantly cheaper than the €89 the manufacturer charges for battery service. Plus, you get an earbud with a fresh battery."
  },
  {
    question: "How do I know if my earbuds battery is bad?",
    answer: "Signs of a bad battery: the earbuds only last 1-2 hours instead of 4-6 hours, one earbud drains faster than the other, or the case no longer fully charges the earbuds. You can check battery status via your phone when earbuds are connected."
  },
  {
    question: "Can I buy a new charging case if only the case battery is bad?",
    answer: "Yes, at Earbud restore we sell loose charging cases for all generations. This is often the best solution if your earbuds still work well but the case no longer charges. A loose case costs between €49.95 and €79.95."
  }
];

const BlogAirpodsBatterijVervangen = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const faqItems = isEnglish ? faqItemsEN : faqItemsNL;
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isEnglish 
      ? "Earbud battery replacement: all options and costs compared" 
      : "Oortje-batterij vervangen: alle opties en kosten vergeleken",
    "description": isEnglish
      ? "Complete guide to earbud battery replacement. Compare prices and find the cheapest solution for your wireless earbuds."
      : "Complete gids voor batterij vervangen van draadloze oortjes. Vergelijk prijzen en vind de goedkoopste oplossing.",
    "author": {
      "@type": "Organization",
      "name": "Earbud restore"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Earbud restore"
    },
    "datePublished": "2025-01-28",
    "dateModified": "2025-01-28"
  };

  // Internal links based on language
  const links = {
    losseAirpods: isEnglish ? '/en/single-airpods' : '/losse-airpods',
    losseOplaadcases: isEnglish ? '/en/charging-cases' : '/losse-oplaadcases',
    welkeAirpods: isEnglish ? '/en/which-airpods' : '/welke-airpods',
    blog: isEnglish ? '/en/blog' : '/blog',
    blogWelkeAirpods: isEnglish ? '/en/blog/which-airpods-do-i-have' : '/blog/welke-airpods-heb-ik',
    blogOpnieuwPairen: isEnglish ? '/en/blog/airpods-re-pairing' : '/blog/airpods-opnieuw-pairen',
    blogCombineren: isEnglish ? '/en/blog/airpods-mixing-generations' : '/blog/airpods-combineren-per-generatie',
    blogKwijt: isEnglish ? '/en/blog/single-airpod-lost-replacement' : '/blog/losse-airpod-kwijt-vervangen',
    airpods2: isEnglish ? '/en/model/airpods-2' : '/model/airpods-2',
    airpods3: isEnglish ? '/en/model/airpods-3' : '/model/airpods-3',
    airpods4: isEnglish ? '/en/model/airpods-4' : '/model/airpods-4',
    airpodsPro1: isEnglish ? '/en/model/airpods-pro-1' : '/model/airpods-pro-1',
    airpodsPro2: isEnglish ? '/en/model/airpods-pro-2' : '/model/airpods-pro-2',
    faq: isEnglish ? '/en/faq' : '/faq',
    reviews: isEnglish ? '/en/reviews' : '/reviews',
  };

  if (isEnglish) {
    return (
      <>
        <Helmet>
          <title>Earbud Battery Replacement: All Options and Costs Compared | Earbud restore</title>
          <meta name="description" content="Earbud battery dead? Discover all options: manufacturer battery service, buying a single earbud, or a new set. We compare prices and find the cheapest solution." />
          <link rel="canonical" href="https://earbudrestore.nl/en/blog/battery-replacement-options" />
          <meta name="keywords" content="earbud battery replacement, earbud battery dead, replace earbud battery, wireless earbud battery life" />
          <html lang="en" />
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        </Helmet>

        <Header />

        <main className="min-h-screen bg-background">
          <article className="py-6 md:py-20">
            <div className="container max-w-3xl mx-auto px-3 md:px-4">
              
              <Link to={links.blog} className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-base text-muted-foreground hover:text-primary mb-4 md:mb-8 transition-colors">
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                Back to blog
              </Link>

              <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  January 28, 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  12 min
                </span>
              </div>

              <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-8 leading-tight">
                Earbud Battery Replacement: All Options and Costs Compared
              </h1>

              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Is your wireless earbud battery draining faster and faster? You're not alone. After 2-3 years of use, 
                  you'll notice your <Link to={links.losseAirpods} className="text-primary hover:underline">earbuds</Link> lasting 
                  shorter and shorter. In this comprehensive guide, we compare all options for dealing with 
                  a depleted earbud battery – from manufacturer service to smarter alternatives.
                </p>

                <p className="mb-8">
                  Spoiler: replacing your earbud battery at the manufacturer is often not the cheapest option. A{' '}
                  <Link to={links.losseAirpods} className="text-primary hover:underline">single replacement earbud</Link>{' '}
                  with a fresh battery can be up to 50% cheaper. We'll explain exactly how it works and which 
                  option suits your situation best.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Why Earbud Batteries Wear Out
                </h2>

                <p className="mb-4">
                  Wireless earbuds use lithium-ion batteries – the same technology as your smartphone. These batteries 
                  have a limited lifespan, measured in charge cycles. One charge cycle means using 100% 
                  of the battery capacity (whether in one go or spread across multiple sessions).
                </p>

                <p className="mb-4">
                  After about 500 charge cycles, a lithium-ion battery retains only 80% of its original 
                  capacity. With daily use, you'll reach this point within 2-3 years. After that, 
                  degradation accelerates.
                </p>

                <Card className="p-6 my-8 bg-secondary/30">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Signs of a Worn Earbud Battery
                  </h3>
                  <ul className="space-y-3 mb-0">
                    <li className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Earbuds last only 1-2 hours instead of 4-6 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>One earbud drains much faster than the other</span>
                    </li>
                    <li className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Case no longer fully charges the earbuds</span>
                    </li>
                    <li className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Earbuds suddenly turn off despite remaining battery</span>
                    </li>
                    <li className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Case drains quickly even when not in use</span>
                    </li>
                  </ul>
                </Card>

                <p className="mb-8">
                  Do you recognize these symptoms? Then it's time to look at your options. First, check{' '}
                  <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">which model you have</Link>{' '}
                  – this is important for determining the right solution.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Option 1: Battery Service at the Manufacturer
                </h2>

                <p className="mb-4">
                  The manufacturer offers official "battery service" for earbuds. However, it's important to know 
                  that they don't actually replace the battery. They swap your earbud for a refurbished 
                  replacement unit. This costs:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Component</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Manufacturer Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Single earbud (left or right)</td>
                        <td className="py-3 px-4">€89</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Charging case</td>
                        <td className="py-3 px-4">€89</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Both earbuds</td>
                        <td className="py-3 px-4">€178</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Complete set (2 earbuds + case)</td>
                        <td className="py-3 px-4">€267</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Good to know:</p>
                    <p className="text-sm mb-0">At €267 for a complete battery refresh at the manufacturer, you're paying almost the same as a brand new set. Often not the smartest choice.</p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Option 2: Buy a Single Earbud at Earbud restore
                </h2>

                <p className="mb-4">
                  The smarter alternative: buy a <Link to={links.losseAirpods} className="text-primary hover:underline">single original earbud</Link>{' '}
                  with a fresh battery. At Earbud restore, we offer 100% original parts, thoroughly 
                  tested for sound, battery, and connectivity.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Model</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Price at Earbud restore</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Savings vs Apple</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><Link to={links.airpods2} className="text-primary hover:underline">AirPods 2</Link></td>
                        <td className="py-3 px-4">from €44.95</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400">Save €44</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><Link to={links.airpods3} className="text-primary hover:underline">AirPods 3</Link></td>
                        <td className="py-3 px-4">from €54.95</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400">Save €34</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><Link to={links.airpodsPro1} className="text-primary hover:underline">AirPods Pro 1</Link></td>
                        <td className="py-3 px-4">from €54.95</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400">Save €34</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><Link to={links.airpodsPro2} className="text-primary hover:underline">AirPods Pro 2</Link></td>
                        <td className="py-3 px-4">from €64.95</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400">Save €24</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Card className="p-6 my-8 bg-primary/5 border-primary/20">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Why Choose Earbud restore?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">100% original parts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">Fresh battery in every earbud</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">Tested for sound, battery & connectivity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">30-day return policy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">Free shipping</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">Excellent <Link to={links.reviews} className="text-primary hover:underline">customer reviews</Link></span>
                    </div>
                  </div>
                </Card>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Option 3: Replace Only the Charging Case
                </h2>

                <p className="mb-4">
                  Is your case battery dead but your earbuds still working fine? Then you don't need 
                  new earbuds – just a new <Link to={links.losseOplaadcases} className="text-primary hover:underline">charging case</Link>. 
                  At Earbud restore, we sell original cases for all generations:
                </p>

                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>2nd generation case: from €49.95</li>
                  <li>3rd generation case: from €59.95</li>
                  <li>Pro 1 case: from €59.95</li>
                  <li>Pro 2 case: from €79.95</li>
                </ul>

                <p className="mb-8">
                  Make sure to order the right case for your generation.{' '}
                  <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">Check here which model you have</Link>{' '}
                  if you're unsure.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Option 4: Buy a Complete New Set
                </h2>

                <p className="mb-4">
                  Sometimes it makes sense to buy a complete new set, especially if:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Both earbuds AND the case have poor batteries</li>
                  <li>You have very old earbuds (1st generation)</li>
                  <li>You want to upgrade to a newer generation</li>
                </ul>

                <p className="mb-8">
                  Calculate what's cheapest: two single earbuds + a case, or a new set. Our{' '}
                  <Link to={links.faq} className="text-primary hover:underline">FAQ</Link> can help you make the right choice.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Cost Comparison Overview
                </h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Scenario</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Manufacturer</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Earbud restore</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">1 dead earbud</td>
                        <td className="py-3 px-4">€89</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">from €44.95</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Dead case</td>
                        <td className="py-3 px-4">€89</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">from €49.95</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">2 dead earbuds</td>
                        <td className="py-3 px-4">€178</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">from €89.90</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">1 earbud + case</td>
                        <td className="py-3 px-4">€178</td>
                        <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">from €94.90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  How to Pair a Replacement Earbud
                </h2>

                <p className="mb-4">
                  Bought a single earbud to replace your battery-worn one? Pairing is easy. 
                  Read our complete guide:{' '}
                  <Link to={links.blogOpnieuwPairen} className="text-primary hover:underline">How to pair: connecting a replacement earbud</Link>.
                </p>

                <p className="mb-8">
                  Also useful:{' '}
                  <Link to={links.blogCombineren} className="text-primary hover:underline">Does a new single earbud work with my old one?</Link>
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Tips to Extend Battery Life
                </h2>

                <p className="mb-4">
                  Want to extend the life of your (new) earbud battery? Keep these tips in mind:
                </p>

                <Card className="p-6 my-6 bg-secondary/30">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Battery Tips
                  </h3>
                  <ul className="space-y-3 mb-0">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Don't leave earbuds completely discharged for long periods</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Avoid extreme temperatures (too cold or too hot)</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Use "Optimized Battery Charging" on your phone</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Put earbuds in the case when not in use</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Disable noise cancellation when not needed (Pro models)</span>
                    </li>
                  </ul>
                </Card>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Conclusion: What's the Best Option?
                </h2>

                <p className="mb-4">
                  The best option depends on your situation:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>1 earbud with poor battery:</strong> Buy a <Link to={links.losseAirpods} className="text-primary hover:underline">single earbud</Link> at Earbud restore – saves up to €44</li>
                  <li><strong>Case battery dead:</strong> Buy a <Link to={links.losseOplaadcases} className="text-primary hover:underline">single charging case</Link> – saves up to €39</li>
                  <li><strong>Both earbuds worn:</strong> Buy 2 single earbuds – still cheaper than the manufacturer</li>
                  <li><strong>Everything worn + want to upgrade:</strong> Consider a new set of the latest generation</li>
                </ul>

                <p className="mb-8">
                  Before you order, check{' '}
                  <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">which model you have</Link>{' '}
                  so you order the right model. Questions? Check our{' '}
                  <Link to={links.faq} className="text-primary hover:underline">FAQ</Link> or read our{' '}
                  <Link to={links.reviews} className="text-primary hover:underline">customer reviews</Link>.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full mb-8">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Related Articles */}
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                  Related Articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Link to={links.blogWelkeAirpods} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-medium text-foreground mb-1">Which Model Do I Have?</h3>
                    <p className="text-sm text-muted-foreground">Complete guide to model numbers</p>
                  </Link>
                  <Link to={links.blogKwijt} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-medium text-foreground mb-1">Lost a Single Earbud?</h3>
                    <p className="text-sm text-muted-foreground">The cheapest way to replace it</p>
                  </Link>
                  <Link to={links.blogOpnieuwPairen} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-medium text-foreground mb-1">How to Pair Your Earbuds</h3>
                    <p className="text-sm text-muted-foreground">Step-by-step pairing guide</p>
                  </Link>
                  <Link to={links.blogCombineren} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-medium text-foreground mb-1">Combining Generations</h3>
                    <p className="text-sm text-muted-foreground">What works and what doesn't</p>
                  </Link>
                </div>

              </div>
            </div>
          </article>
        </main>

        <Footer />
      </>
    );
  }

  // Dutch version
  return (
    <>
      <Helmet>
        <title>Oortje-batterij vervangen: alle opties en kosten vergeleken | Earbud restore</title>
        <meta name="description" content="Batterij van je draadloze oortjes leeg? Ontdek alle opties: fabrikant-service, los oortje kopen of nieuwe set. We vergelijken prijzen en vinden de goedkoopste oplossing." />
        <link rel="canonical" href="https://earbudrestore.nl/blog/batterij-vervangen-opties" />
        <meta name="keywords" content="oortje batterij vervangen, draadloze oortjes batterij leeg, accu vervangen, batterijduur, batterij kosten" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <article className="py-6 md:py-20">
          <div className="container max-w-3xl mx-auto px-3 md:px-4">
            
            <Link to={links.blog} className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-base text-muted-foreground hover:text-primary mb-4 md:mb-8 transition-colors">
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
              Terug naar blog
            </Link>

            <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                28 januari 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                12 min
              </span>
            </div>

            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-8 leading-tight">
              Oortje-batterij vervangen: alle opties en kosten vergeleken
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Gaat de batterij van je draadloze oortjes steeds sneller leeg? Je bent niet de enige. Na 2-3 jaar gebruik 
                merk je dat je <Link to={links.losseAirpods} className="text-primary hover:underline">oortjes</Link> steeds 
                korter meegaan. In deze uitgebreide gids vergelijken we alle opties om met een lege oortje-batterij 
                om te gaan – van officiële fabrikant-service tot slimmere alternatieven.
              </p>

              <p className="mb-8">
                Spoiler: je oortje-batterij laten vervangen bij de fabrikant is vaak niet de goedkoopste optie. Een{' '}
                <Link to={links.losseAirpods} className="text-primary hover:underline">los vervangend oortje</Link>{' '}
                met verse batterij kan tot 50% goedkoper zijn. We leggen precies uit hoe het werkt en welke 
                optie het beste bij jouw situatie past.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Waarom oortje-batterijen slijten
              </h2>

              <p className="mb-4">
                Draadloze oortjes gebruiken lithium-ion batterijen – dezelfde technologie als je smartphone. Deze batterijen 
                hebben een beperkte levensduur, gemeten in laadcycli. Eén laadcyclus betekent 100% van de 
                batterijcapaciteit gebruiken (of dat nu in één keer is of verspreid over meerdere sessies).
              </p>

              <p className="mb-4">
                Na ongeveer 500 laadcycli houdt een lithium-ion batterij nog maar 80% van de originele 
                capaciteit over. Bij dagelijks gebruik bereik je dit punt binnen 2-3 jaar. Daarna 
                versnelt de degradatie.
              </p>

              <Card className="p-6 my-8 bg-secondary/30">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Signalen van een versleten oortje-batterij
                </h3>
                <ul className="space-y-3 mb-0">
                  <li className="flex gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Oortjes gaan nog maar 1-2 uur mee in plaats van 4-6 uur</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Eén oortje is veel sneller leeg dan de ander</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Case laadt de oortjes niet meer volledig op</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Oortjes gaan plotseling uit ondanks resterende batterij</span>
                  </li>
                  <li className="flex gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Case loopt snel leeg, zelfs wanneer niet in gebruik</span>
                  </li>
                </ul>
              </Card>

              <p className="mb-8">
                Herken je deze symptomen? Dan is het tijd om naar je opties te kijken. Check eerst{' '}
                <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">welk model je hebt</Link>{' '}
                – dit is belangrijk voor het bepalen van de juiste oplossing.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Optie 1: Batterijservice bij de fabrikant
              </h2>

              <p className="mb-4">
                De fabrikant biedt officiële "batterijservice" voor oortjes. Het is echter belangrijk om te weten 
                dat ze niet echt de batterij vervangen. Ze ruilen je oortje om voor een refurbished 
                vervangend exemplaar. Dit kost:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Onderdeel</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Prijs bij fabrikant</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Los oortje (links of rechts)</td>
                      <td className="py-3 px-4">€89</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Oplaadcase</td>
                      <td className="py-3 px-4">€89</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Beide oortjes</td>
                      <td className="py-3 px-4">€178</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Complete set (2 oortjes + case)</td>
                      <td className="py-3 px-4">€267</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-accent/50 rounded-xl p-4 my-6 flex gap-3">
                <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Goed om te weten:</p>
                  <p className="text-sm mb-0">Voor €267 voor een complete batterij-refresh bij de fabrikant betaal je bijna hetzelfde als een gloednieuwe set. Vaak niet de slimste keuze.</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Optie 2: Los vervangend oortje kopen
              </h2>

              <p className="mb-4">
                Het slimmere alternatief: koop een <Link to={links.losseAirpods} className="text-primary hover:underline">los origineel oortje</Link>{' '}
                met verse batterij. Bij Earbud restore bieden we 100% originele onderdelen, grondig 
                getest op geluid, batterij en connectiviteit.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Model</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Prijs bij Earbud restore</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Besparing vs fabrikant</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><Link to={links.airpods2} className="text-primary hover:underline">AirPods 2</Link></td>
                      <td className="py-3 px-4">vanaf €44,95</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Bespaar €44</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><Link to={links.airpods3} className="text-primary hover:underline">AirPods 3</Link></td>
                      <td className="py-3 px-4">vanaf €54,95</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Bespaar €34</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><Link to={links.airpodsPro1} className="text-primary hover:underline">AirPods Pro 1</Link></td>
                      <td className="py-3 px-4">vanaf €54,95</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Bespaar €34</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><Link to={links.airpodsPro2} className="text-primary hover:underline">AirPods Pro 2</Link></td>
                      <td className="py-3 px-4">vanaf €64,95</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400">Bespaar €24</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-6 my-8 bg-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Waarom kiezen voor Earbud restore?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">100% origineel – Elk product is een origineel onderdeel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Zorgvuldig getest – Getest op geluid, batterij en Bluetooth</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Specialist – Precies het onderdeel dat je nodig hebt</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Snel geleverd – Bestel voor 17:00, dezelfde dag verzonden</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Afhalen in Amsterdam – Uitproberen voor je koopt</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">14 dagen retour – Niet tevreden? Geld terug</span>
                  </div>
                </div>
              </Card>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Optie 3: Alleen de oplaadcase vervangen
              </h2>

              <p className="mb-4">
                Is je case-batterij leeg maar werken je oortjes nog prima? Dan heb je geen nieuwe 
                oortjes nodig – alleen een nieuwe <Link to={links.losseOplaadcases} className="text-primary hover:underline">oplaadcase</Link>. 
                Bij Earbud restore verkopen we originele cases voor alle generaties:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>2e generatie case: vanaf €49,95</li>
                <li>3e generatie case: vanaf €59,95</li>
                <li>Pro 1 case: vanaf €59,95</li>
                <li>Pro 2 case: vanaf €79,95</li>
              </ul>

              <p className="mb-8">
                Zorg dat je de juiste case voor jouw generatie bestelt.{' '}
                <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">Check hier welk model je hebt</Link>{' '}
                als je het niet zeker weet.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Optie 4: Complete nieuwe set kopen
              </h2>

              <p className="mb-4">
                Soms is het logisch om een complete nieuwe set te kopen, vooral als:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Zowel beide oortjes EN de case slechte batterijen hebben</li>
                <li>Je zeer oude oortjes hebt (1e generatie)</li>
                <li>Je wilt upgraden naar een nieuwere generatie</li>
              </ul>

              <p className="mb-8">
                Reken uit wat goedkoper is: twee losse oortjes + een case, of een nieuwe set. Onze{' '}
                <Link to={links.faq} className="text-primary hover:underline">FAQ</Link> kan je helpen de juiste keuze te maken.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Kostenvergelijking overzicht
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Scenario</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Fabrikant</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Earbud restore</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">1 leeg oortje</td>
                      <td className="py-3 px-4">€89</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">vanaf €44,95</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Lege case</td>
                      <td className="py-3 px-4">€89</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">vanaf €49,95</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">2 lege oortjes</td>
                      <td className="py-3 px-4">€178</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">vanaf €89,90</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">1 oortje + case</td>
                      <td className="py-3 px-4">€178</td>
                      <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">vanaf €94,90</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Hoe koppel je een vervangend oortje?
              </h2>

              <p className="mb-4">
                Heb je een los oortje gekocht om je batterij-versleten exemplaar te vervangen? Koppelen is eenvoudig. 
                Lees onze complete gids:{' '}
                <Link to={links.blogOpnieuwPairen} className="text-primary hover:underline">Zo koppel je een vervangend oortje</Link>.
              </p>

              <p className="mb-8">
                Ook handig:{' '}
                <Link to={links.blogCombineren} className="text-primary hover:underline">Werkt een nieuw los oortje met mijn oude oortje?</Link>
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Tips om batterijduur te verlengen
              </h2>

              <p className="mb-4">
                Wil je de levensduur van je (nieuwe) oortje-batterij verlengen? Houd deze tips in gedachten:
              </p>

              <Card className="p-6 my-6 bg-secondary/30">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Batterij tips
                </h3>
                <ul className="space-y-3 mb-0">
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Laat oortjes niet langdurig volledig ontladen liggen</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vermijd extreme temperaturen (te koud of te warm)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gebruik "Geoptimaliseerd opladen" op je telefoon</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Doe oortjes in de case wanneer je ze niet gebruikt</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Schakel ruisonderdrukking uit als het niet nodig is (Pro modellen)</span>
                  </li>
                </ul>
              </Card>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Conclusie: wat is de beste optie?
              </h2>

              <p className="mb-4">
                De beste optie hangt af van jouw situatie:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>1 oortje met slechte batterij:</strong> Koop een <Link to={links.losseAirpods} className="text-primary hover:underline">los vervangend oortje</Link> bij Earbud restore – bespaar tot €44</li>
                <li><strong>Case-batterij leeg:</strong> Koop een <Link to={links.losseOplaadcases} className="text-primary hover:underline">losse oplaadcase</Link> – bespaar tot €39</li>
                <li><strong>Beide oortjes versleten:</strong> Koop 2 losse oortjes – nog steeds goedkoper dan de fabrikant</li>
                <li><strong>Alles versleten + wil upgraden:</strong> Overweeg een nieuwe set van de nieuwste generatie</li>
              </ul>

              <p className="mb-8">
                Voordat je bestelt, check{' '}
                <Link to={links.blogWelkeAirpods} className="text-primary hover:underline">welk model je hebt</Link>{' '}
                zodat je het juiste model bestelt. Vragen? Bekijk onze{' '}
                <Link to={links.faq} className="text-primary hover:underline">FAQ</Link> of lees onze{' '}
                <Link to={links.reviews} className="text-primary hover:underline">klantbeoordelingen</Link>.
              </p>

              {/* FAQ Section */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Veelgestelde vragen
              </h2>

              <Accordion type="single" collapsible className="w-full mb-8">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Related Articles */}
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                Gerelateerde artikelen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Link to={links.blogWelkeAirpods} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-foreground mb-1">Welk model heb ik?</h3>
                  <p className="text-sm text-muted-foreground">Complete gids voor modelnummers</p>
                </Link>
                <Link to={links.blogKwijt} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-foreground mb-1">Los oortje kwijt?</h3>
                  <p className="text-sm text-muted-foreground">De goedkoopste manier om te vervangen</p>
                </Link>
                <Link to={links.blogOpnieuwPairen} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-foreground mb-1">Vervangend oortje koppelen</h3>
                  <p className="text-sm text-muted-foreground">Stap-voor-stap koppelgids</p>
                </Link>
                <Link to={links.blogCombineren} className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-foreground mb-1">Generaties combineren</h3>
                  <p className="text-sm text-muted-foreground">Wat werkt en wat niet</p>
                </Link>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogAirpodsBatterijVervangen;
