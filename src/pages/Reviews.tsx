import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ReviewsSection from '@/components/reviews/ReviewsSection';

const Reviews = () => {
  return (
    <>
      <Helmet>
        <title>Reviews | PairPods</title>
        <meta name="description" content="Lees wat onze klanten zeggen over PairPods. Meer dan 360 vijfsterren reviews." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="bg-gradient-to-b from-secondary/30 to-background py-6 md:py-16">
            <div className="container mx-auto px-3 md:px-4 text-center">
              <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-4">
                Wat onze klanten zeggen
              </h1>
              <p className="text-xs md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Meer dan 360 tevreden klanten gingen je voor
              </p>
            </div>
          </div>

          <ReviewsSection showTitle={false} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
