import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'how-to-pair-airpods',
    title: 'How to pair AirPods: pairing a replacement AirPod or charging case',
    excerpt: 'Learn how to pair AirPods after replacing an earbud or case. Step-by-step guide for resetting and pairing all AirPods generations.',
    date: '2025-01-25',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'combine-airpods-by-generation',
    title: 'Can I use a new single AirPod with my old one? How combining works by generation',
    excerpt: 'Find out if a new single AirPod works with your old earbud. Everything about combining AirPods by generation, compatibility, and pairing replacement AirPods.',
    date: '2025-01-22',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'lost-single-airpod-replacement',
    title: 'Lost a single AirPod? The cheapest way to replace it (Apple vs. RePairPods)',
    excerpt: 'Lost one AirPod? Discover all options to replace your single AirPod: from a new set to an original single AirPod. We compare prices and quality.',
    date: '2025-01-20',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'which-airpods-do-i-have',
    title: 'Which AirPods do I have? The complete guide to model numbers and generations',
    excerpt: 'Find out exactly which AirPods model you have using model numbers. Useful when you want to replace a single AirPod or charging case.',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/placeholder.svg'
  }
];

const BlogIndexEN = () => {
  return (
    <>
      <Helmet>
        <title>Blog | RePairPods - Tips & Guides for AirPods</title>
        <meta name="description" content="Read our blogs about AirPods: identifying model numbers, comparing generations, and tips for replacing single AirPods and charging cases." />
        <link rel="canonical" href="https://repairpods.nl/en/blog" />
        <html lang="en" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Tips, guides, and news about AirPods from the specialists at RePairPods.
            </p>

            <div className="space-y-8">
              {blogs.map((blog) => (
                <article key={blog.slug} className="group">
                  <Link to={`/en/blog/${blog.slug}`} className="block">
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {blog.readTime} read
                        </span>
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">
                        {blog.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Read more
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

export default BlogIndexEN;