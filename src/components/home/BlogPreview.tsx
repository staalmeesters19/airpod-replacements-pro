import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogsNL = [
  {
    slug: 'airpods-opnieuw-pairen',
    title: 'AirPods opnieuw pairen: zo koppel je een vervangend oortje',
    excerpt: 'Leer hoe je AirPods opnieuw koppelt na het vervangen van een oortje of case.',
    date: '2025-01-25',
    readTime: '10 min',
  },
  {
    slug: 'airpods-combineren-per-generatie',
    title: 'Werkt een nieuwe losse AirPod met mijn oude oortje?',
    excerpt: 'Ontdek of een nieuwe losse AirPod werkt met je oude oortje.',
    date: '2025-01-22',
    readTime: '9 min',
  },
  {
    slug: 'losse-airpod-kwijt-vervangen',
    title: 'Losse AirPod kwijt? De goedkoopste manier om te vervangen',
    excerpt: 'Ontdek alle opties om je losse AirPod te vervangen.',
    date: '2025-01-20',
    readTime: '10 min',
  },
];

const blogsEN = [
  {
    slug: 'how-to-pair-airpods',
    title: 'How to pair AirPods: pairing a replacement AirPod',
    excerpt: 'Learn how to pair AirPods after replacing an earbud or case.',
    date: '2025-01-25',
    readTime: '10 min',
  },
  {
    slug: 'combine-airpods-by-generation',
    title: 'Can I use a new single AirPod with my old one?',
    excerpt: 'Find out if a new single AirPod works with your old earbud.',
    date: '2025-01-22',
    readTime: '9 min',
  },
  {
    slug: 'lost-single-airpod-replacement',
    title: 'Lost a single AirPod? The cheapest way to replace it',
    excerpt: 'Discover all options to replace your single AirPod.',
    date: '2025-01-20',
    readTime: '10 min',
  },
];

const BlogPreview = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';
  const blogs = isEnglish ? blogsEN : blogsNL;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                {t('blogPreview.label')}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              {t('blogPreview.title')}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              {t('blogPreview.subtitle')}
            </p>
          </div>
          
          <Button variant="outline" asChild className="self-start sm:self-auto">
            <Link to={`${prefix}/blog`} className="gap-2">
              {t('blogPreview.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog, index) => (
            <article key={blog.slug} className="group">
              <Link to={`${prefix}/blog/${blog.slug}`} className="block h-full">
                <div className="h-full bg-background rounded-xl border border-border p-4 md:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col">
                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(blog.date).toLocaleDateString(isEnglish ? 'en-GB' : 'nl-NL', { 
                        day: 'numeric', 
                        month: 'short'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                    {blog.title}
                  </h3>
                  
                  {/* Excerpt - hidden on mobile */}
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2 hidden sm:block">
                    {blog.excerpt}
                  </p>
                  
                  {/* Read more link */}
                  <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-primary font-medium group-hover:gap-2.5 transition-all mt-auto">
                    {isEnglish ? 'Read more' : 'Lees verder'}
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
