import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'how-to-clean-airpods',
    title: 'How to Clean AirPods: Complete Maintenance Guide (2024)',
    excerpt: 'Learn how to properly clean your AirPods. Step-by-step instructions, do\'s and don\'ts, and tips for hygiene and sound quality.',
    date: '2025-01-31',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'airpods-vs-airpods-pro',
    title: 'AirPods vs AirPods Pro: What\'s the Difference and Which Should You Choose?',
    excerpt: 'Complete comparison between AirPods and AirPods Pro. Discover differences in sound quality, noise cancelling, fit, and price.',
    date: '2025-01-30',
    readTime: '11 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'airpods-battery-replacement',
    title: 'AirPods Battery Replacement: All Options and Costs Compared',
    excerpt: 'AirPods battery dead? Discover all options: Apple battery service, buying a single AirPod, or a new set. We compare prices and find the cheapest solution.',
    date: '2025-01-28',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
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
        <section className="py-6 md:py-24">
          <div className="container max-w-4xl mx-auto px-3 md:px-4">
            <h1 className="text-xl md:text-4xl font-semibold text-foreground mb-2 md:mb-4">
              Blog
            </h1>
            <p className="text-xs md:text-lg text-muted-foreground mb-6 md:mb-12">
              Tips, guides, and news about AirPods.
            </p>

            <div className="space-y-4 md:space-y-8">
              {blogs.map((blog) => (
                <article key={blog.slug} className="group">
                  <Link to={`/en/blog/${blog.slug}`} className="block">
                    <div className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                      <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-2 md:mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {new Date(blog.date).toLocaleDateString('en-GB', { 
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
                        Read more
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

export default BlogIndexEN;