import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'one-earbud-not-working',
    title: 'One Earbud Not Working? Causes & Solutions',
    excerpt: 'Left or right earbud not working? Discover the most common causes and solutions. From reset to replacement.',
    date: '2025-02-05',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'charging-case-not-charging',
    title: 'Charging Case Not Charging? Here\'s What to Do',
    excerpt: 'Charging case not charging anymore? Discover the causes and solutions. From cleaning to replacement.',
    date: '2025-02-04',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'earbuds-water-damage',
    title: 'Water Damage: What To Do When Your Earbuds Get Wet',
    excerpt: 'Earbuds fell in water or went through the wash? Discover what to do immediately to save them.',
    date: '2025-02-03',
    readTime: '8 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'silicone-ear-tips-guide',
    title: 'Silicone Ear Tips: Which Size Fits You?',
    excerpt: 'The silicone ear tips determine comfort and sound quality. Learn how to find the perfect size.',
    date: '2025-02-02',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'repair-costs-comparison',
    title: 'Repair Costs: Manufacturer vs Alternatives',
    excerpt: 'What does repair cost at the manufacturer? Compare prices and discover cheaper alternatives.',
    date: '2025-02-01',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'how-to-clean-earbuds',
    title: 'How to Clean Earbuds: Complete Maintenance Guide',
    excerpt: 'Learn how to properly clean your earbuds. Step-by-step instructions, do\'s and don\'ts, and tips for hygiene and sound quality.',
    date: '2025-01-31',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'standard-vs-pro-comparison',
    title: 'Standard vs Pro Earbuds: What\'s the Difference and Which Should You Choose?',
    excerpt: 'Complete comparison between standard and Pro earbuds. Discover differences in sound quality, noise cancelling, fit, and price.',
    date: '2025-01-30',
    readTime: '11 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'battery-replacement-options',
    title: 'Battery Replacement: All Options and Costs Compared',
    excerpt: 'Battery dead? Discover all options: manufacturer battery service, buying a single unit, or a new set. We compare prices and find the cheapest solution.',
    date: '2025-01-28',
    readTime: '12 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'how-to-pair-replacement-earbud',
    title: 'How to Pair a Replacement Earbud: Pairing a Single Unit',
    excerpt: 'Learn how to pair earbuds after replacing a unit or case. Step-by-step guide for resetting and pairing.',
    date: '2025-01-25',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'combine-earbuds-by-generation',
    title: 'Can I Use a Replacement Earbud with My Old One? How Combining Works by Generation',
    excerpt: 'Find out if a replacement earbud works with your old one. Everything about combining by generation, compatibility, and pairing replacements.',
    date: '2025-01-22',
    readTime: '9 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'lost-single-earbud-replacement',
    title: 'Lost a Single Earbud? The Cheapest Way to Replace It',
    excerpt: 'Lost one earbud? Discover all options to replace it: from a new set to an original single unit. We compare prices and quality.',
    date: '2025-01-20',
    readTime: '10 min',
    image: '/placeholder.svg'
  },
  {
    slug: 'identify-your-model',
    title: 'Which Model Do I Have? The Complete Guide to Model Numbers and Generations',
    excerpt: 'Find out exactly which model you have using model numbers. Useful when you want to replace a single earbud or charging case.',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/placeholder.svg'
  }
];

const BlogIndexEN = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Earbuds Restore - Tips & Guides</title>
        <meta name="description" content="Read our blogs about earbuds: identifying model numbers, comparing generations, and tips for replacing single units and charging cases." />
        <link rel="canonical" href="https://earbudrestore.nl/en/blog" />
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
              Tips, guides, and news about wireless earbuds.
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
