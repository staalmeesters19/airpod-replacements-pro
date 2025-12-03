import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import USPStrip from '@/components/home/USPStrip';
import PodFinder from '@/components/home/PodFinder';
import ModelFinder from '@/components/home/ModelFinder';
import ProductCard from '@/components/products/ProductCard';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import { mockProducts } from '@/data/mockProducts';

const Index = () => {
  const earbuds = mockProducts.filter(p => p.type === 'earbud').slice(0, 6);
  const cases = mockProducts.filter(p => p.type === 'case').slice(0, 3);
  const accessories = mockProducts.filter(p => p.type === 'accessory');

  return (
    <>
      <Helmet>
        <title>Losse AirPods en Oplaadcases Kopen | PairPods</title>
        <meta
          name="description"
          content="Vervang je verloren AirPod of oplaadcase zonder een hele nieuwe set te kopen. 100% originele Apple producten, morgen in huis. Voorheen Airpods-handel."
        />
        <meta name="keywords" content="losse airpods, airpod links, airpod rechts, oplaadcase, airpods vervangen" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Hero />
          <PodFinder />
          <USPStrip />
          <ModelFinder />

          {/* Losse AirPods Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Losse AirPods</h2>
                <p className="text-lg text-muted-foreground">
                  Vervang je linker of rechter AirPod per stuk
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {earbuds.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Losse Oplaadcases Section */}
          <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Losse oplaadcases</h2>
                <p className="text-lg text-muted-foreground">
                  Originele Apple oplaadcases voor elk model
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Accessoires Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Accessoires</h2>
                <p className="text-lg text-muted-foreground">
                  Houd je AirPods in topconditie
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {accessories.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          <ReviewsSection limit={6} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
