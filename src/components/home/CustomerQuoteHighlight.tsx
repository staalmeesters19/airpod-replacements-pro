import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerQuoteHighlight = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Quote card */}
          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              "Mijn linker AirPod was kwijt en ik dacht dat ik een heel nieuw setje moest kopen. Via RepairPods had ik binnen 2 dagen een vervangende AirPod voor een fractie van de prijs. Top service en kwaliteit!"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">Mark V.</p>
                <p className="text-sm text-muted-foreground">AirPods Pro 2 • Geverifieerde aankoop</p>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white-review-star.svg" 
                  alt="Trustpilot" 
                  className="h-5 opacity-70"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-3">
              Meer dan <span className="font-semibold text-foreground">300+</span> tevreden klanten gingen je voor
            </p>
            <Link 
              to="/reviews" 
              className="text-primary hover:underline font-medium"
            >
              Bekijk alle reviews →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerQuoteHighlight;
