import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'een-oortje-werkt-niet',
    title: 'Eén oortje werkt niet? Oorzaken & oplossingen',
    excerpt: 'Linker of rechter oortje werkt niet meer? Ontdek de meest voorkomende oorzaken en oplossingen. Van reset tot vervanging.',
    date: '2025-02-05',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'oplaadcase-laadt-niet',
    title: 'Oplaadcase laadt niet op? Dit kun je doen',
    excerpt: 'Oplaadcase laadt niet meer op? Ontdek de oorzaken en oplossingen. Van schoonmaken tot vervanging.',
    date: '2025-02-04',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'oortjes-waterschade',
    title: 'Waterschade aan je oortjes: wat te doen als ze nat zijn',
    excerpt: 'Oortjes in water gevallen of door de was gegaan? Ontdek wat je direct moet doen om ze te redden.',
    date: '2025-02-03',
    readTime: '8 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'siliconen-oortips-kiezen',
    title: 'Siliconen oortips: welke maat past bij jou?',
    excerpt: 'De siliconen oortips bepalen comfort en geluidskwaliteit. Leer hoe je de perfecte maat vindt.',
    date: '2025-02-02',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'reparatie-kosten-vergelijken',
    title: 'Reparatiekosten vergelijken: fabrikant vs alternatieven',
    excerpt: 'Wat kost reparatie bij de fabrikant? Vergelijk prijzen en ontdek goedkopere alternatieven.',
    date: '2025-02-01',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'oortjes-schoonmaken',
    title: 'Oortjes schoonmaken: complete gids voor onderhoud',
    excerpt: 'Leer hoe je je oortjes correct schoonmaakt. Stap-voor-stap instructies, do\'s en don\'ts, en tips voor hygiëne en geluidskwaliteit.',
    date: '2025-01-31',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'standaard-vs-pro-vergelijking',
    title: 'Standaard vs Pro oortjes: wat is het verschil en welke kies je?',
    excerpt: 'Uitgebreide vergelijking tussen standaard en Pro oortjes. Ontdek de verschillen in geluidskwaliteit, noise cancelling, pasvorm en prijs.',
    date: '2025-01-30',
    readTime: '11 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'batterij-vervangen-opties',
    title: 'Batterij vervangen: alle opties en kosten vergeleken',
    excerpt: 'Batterij leeg? Ontdek alle opties: fabrikant batterijservice, los onderdeel kopen of vervangende set. We vergelijken prijzen en vinden de goedkoopste oplossing.',
    date: '2025-01-28',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'vervangend-oortje-koppelen',
    title: 'Vervangend oortje koppelen: zo pair je een los onderdeel',
    excerpt: 'Leer hoe je oortjes opnieuw koppelt na het vervangen van een oortje of case. Stap-voor-stap uitleg voor resetten en pairen.',
    date: '2025-01-25',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'oortjes-combineren-per-generatie',
    title: 'Werkt een vervangend oortje met mijn oude set? Zo werkt combineren per generatie',
    excerpt: 'Ontdek of een vervangend oortje werkt met je oude set. Alles over combineren per generatie, compatibiliteit en het koppelen van vervangende onderdelen.',
    date: '2025-01-22',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'oortje-kwijt-vervangen',
    title: 'Eén oortje kwijt? Zo vervang je alleen wat je mist',
    excerpt: 'Eén oortje kwijt? Ontdek alle opties om je losse oortje te vervangen: van vervanging tot origineel onderdeel. We vergelijken prijzen en kwaliteit.',
    date: '2025-01-20',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'modelnummer-herkennen',
    title: 'Welk model heb ik? De complete gids voor modelnummers en generaties',
    excerpt: 'Ontdek precies welk model je hebt aan de hand van modelnummers. Handig als je een los oortje of oplaadcase wilt vervangen.',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/placeholder.svg'
  }
];

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Earbud restore - Tips & Handleidingen</title>
        <meta name="description" content="Lees onze blogs over oortjes: modelnummers herkennen, generaties vergelijken, en tips voor het vervangen van losse onderdelen en oplaadcases." />
        <link rel="canonical" href="https://earbudrestore.nl/blog" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="py-6 md:py-24">
          <div className="container max-w-4xl mx-auto px-3 md:px-4">
            <h1 className="text-xl md:text-4xl font-semibold text-foreground mb-2 md:mb-4">
              Blog
            </h1>
            <p className="text-xs md:text-lg text-muted-foreground mb-6 md:mb-12">
              Tips, handleidingen en nieuws over draadloze oortjes.
            </p>

            <div className="space-y-4 md:space-y-8">
              {blogs.map((blog) => (
                <article key={blog.slug} className="group">
                  <Link to={`/blog/${blog.slug}`} className="block">
                    <div className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                      <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-2 md:mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {new Date(blog.date).toLocaleDateString('nl-NL', { 
                            day: 'numeric', 
                            month: 'short'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          {blog.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-sm md:text-2xl font-semibold text-foreground mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      
                      <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4 line-clamp-2 hidden md:block">
                        {blog.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-base text-primary font-medium group-hover:gap-2 md:group-hover:gap-3 transition-all">
                        Lees verder
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogIndex;
