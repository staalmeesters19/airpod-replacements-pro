import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SEOContentBlock = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const productLinks = [
    {
      name: 'AirPods 2',
      path: `${prefix}/losse-airpods`,
      descKey: 'seoContent.products.airpods2',
    },
    {
      name: 'AirPods 3',
      path: `${prefix}/losse-airpods`,
      descKey: 'seoContent.products.airpods3',
    },
    {
      name: 'AirPods Pro 1',
      path: `${prefix}/losse-airpods`,
      descKey: 'seoContent.products.airpodsPro1',
    },
    {
      name: 'AirPods Pro 2',
      path: `${prefix}/losse-airpods`,
      descKey: 'seoContent.products.airpodsPro2',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Main SEO Content */}
        <article className="prose prose-lg max-w-none">
          {/* First Section: Losse AirPods kopen */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t('seoContent.title')}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('seoContent.intro')}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {t('seoContent.solution')}
          </p>

          {/* Product Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {productLinks.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className="group flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-muted transition-all duration-200 no-underline"
              >
                <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </span>
                  <span className="text-muted-foreground text-sm block mt-1">
                    {t(product.descKey)}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-10">
            {t('seoContent.quality')}
          </p>

          {/* Second Section: Why buy a single AirPod */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-12">
            {t('seoContent.whyBuy.title')}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('seoContent.whyBuy.savings')}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('seoContent.whyBuy.sustainability')}
          </p>

          {/* Third Section: About RePairPods */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-12">
            {t('seoContent.about.title')}
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {t('seoContent.about.description')}
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOContentBlock;
