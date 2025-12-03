import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'welke-airpods-heb-ik',
    title: 'Welke AirPods heb ik? De complete gids voor modelnummers en generaties',
    excerpt: 'Ontdek precies welk AirPods-model je hebt aan de hand van modelnummers. Handig als je een losse AirPod of oplaadcase wilt vervangen.',
    date: '2024-01-15',
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
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Tips, gidsen en nieuws over AirPods van de specialisten van RePairPods.
            </p>

            <div className="space-y-8">
              {blogs.map((blog) => (
                <article key={blog.slug} className="group">
                  <Link to={`/blog/${blog.slug}`} className="block">
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.date).toLocaleDateString('nl-NL', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {blog.readTime} leestijd
                        </span>
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">
                        {blog.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Lees verder
                        <ArrowRight className="w-4 h-4" />
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
