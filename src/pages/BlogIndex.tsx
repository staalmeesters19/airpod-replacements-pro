import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'airpods-vs-airpods-pro',
    title: 'AirPods vs AirPods Pro: Wat is het verschil en welke moet je kiezen?',
    excerpt: 'Uitgebreide vergelijking tussen AirPods en AirPods Pro. Ontdek de verschillen in geluidskwaliteit, noise cancelling, pasvorm en prijs.',
    date: '2025-01-30',
    readTime: '11 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'airpods-batterij-vervangen',
    title: 'AirPods batterij vervangen: alle opties en kosten vergeleken',
    excerpt: 'AirPods batterij leeg? Ontdek alle opties: Apple batterijservice, losse AirPod kopen of nieuwe set. We vergelijken prijzen en vinden de goedkoopste oplossing.',
    date: '2025-01-28',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'airpods-opnieuw-pairen',
    title: 'AirPods opnieuw pairen: zo koppel je een vervangend oortje of oplaadcase',
    excerpt: 'Leer hoe je AirPods opnieuw koppelt na het vervangen van een oortje of case. Stap-voor-stap uitleg voor resetten en pairen van alle AirPods generaties.',
    date: '2025-01-25',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'airpods-combineren-per-generatie',
    title: 'Werkt een nieuwe losse AirPod met mijn oude oortje? Zo werkt combineren per generatie',
    excerpt: 'Ontdek of een nieuwe losse AirPod werkt met je oude oortje. Alles over AirPods combineren per generatie, compatibiliteit en het koppelen van vervangende AirPods.',
    date: '2025-01-22',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'losse-airpod-kwijt-vervangen',
    title: 'Losse AirPod kwijt? Dit is de goedkoopste manier om hem te vervangen (Apple vs. RePairPods)',
    excerpt: 'Eén AirPod kwijt? Ontdek alle opties om je losse AirPod te vervangen: van een nieuwe set tot een originele losse AirPod. We vergelijken prijzen en kwaliteit.',
    date: '2025-01-20',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'welke-airpods-heb-ik',
    title: 'Welke AirPods heb ik? De complete gids voor modelnummers en generaties',
    excerpt: 'Ontdek precies welk AirPods-model je hebt aan de hand van modelnummers. Handig als je een losse AirPod of oplaadcase wilt vervangen.',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/placeholder.svg'
  }
];

const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Blog | RePairPods - Tips & Gidsen voor AirPods</title>
        <meta name="description" content="Lees onze blogs over AirPods: modelnummers herkennen, generaties vergelijken, en tips voor het vervangen van losse AirPods en oplaadcases." />
        <link rel="canonical" href="https://repairpods.nl/blog" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="py-6 md:py-24">
          <div className="container max-w-4xl mx-auto px-3 md:px-4">
            <h1 className="text-xl md:text-4xl font-semibold text-foreground mb-2 md:mb-4">
              Blog
            </h1>
            <p className="text-xs md:text-lg text-muted-foreground mb-6 md:mb-12">
              Tips, gidsen en nieuws over AirPods.
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
