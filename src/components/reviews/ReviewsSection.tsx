import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { mockReviews, reviewStats } from '@/data/mockReviews';

interface ReviewsSectionProps {
  limit?: number;
  showTitle?: boolean;
}

const ReviewsSection = ({ limit, showTitle = true }: ReviewsSectionProps) => {
  const displayedReviews = limit ? mockReviews.slice(0, limit) : mockReviews;

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wat klanten zeggen
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold">{reviewStats.averageRating}</span>
            </div>
            <p className="text-muted-foreground">
              Gebaseerd op {reviewStats.totalReviews}+ reviews
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.source}</span>
              </div>
              
              <p className="text-sm mb-4 text-foreground">{review.text}</p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">{review.name}</span>
                <span>{new Date(review.date).toLocaleDateString('nl-NL')}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
