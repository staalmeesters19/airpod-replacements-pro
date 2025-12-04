import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Review {
  name: string;
  initials: string;
  country: string;
  date: string;
  title: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Francy Parada",
    initials: "FP",
    country: "NL",
    date: "24 oktober 2025",
    title: "Ik had hier nog nooit iets besteld",
    text: "Ik had hier nog nooit iets besteld, maar vandaag heb ik mijn oplaadcase voor mijn AirPods ontvangen en ik ben superblij met de eerlijkheid en betrouwbaarheid van de verkoper. Echt een aanrader!",
    rating: 5
  },
  {
    name: "Anja Roos",
    initials: "AR",
    country: "GB",
    date: "8 oktober 2025",
    title: "Snel en goed geholpen",
    text: "Ik heb een linker AirPod besteld, uiteindelijk allemaal via WhatsApp geregeld. Ik kreeg snel antwoord en het product werd vrijwel direct op de post gedaan. Met de instructies makkelijk weer te koppelen! Ik ben tevreden.",
    rating: 5
  },
  {
    name: "Justin",
    initials: "JU",
    country: "NL",
    date: "24 november 2025",
    title: "Goed geholpen 👍",
    text: "Snel geleverd en precies wat ik nodig had. Mijn AirPods set is weer compleet!",
    rating: 5
  },
  {
    name: "Sam de Jong",
    initials: "SD",
    country: "NL",
    date: "20 november 2025",
    title: "Linker AirPod goed vervangen",
    text: "Fijn dat mijn AirPods Pro 2 weer samen zijn. Perfecte match met mijn bestaande set.",
    rating: 5
  },
  {
    name: "Mario",
    initials: "MA",
    country: "NL",
    date: "4 november 2025",
    title: "Snel en goed geregeld",
    text: "Snel en goed geregeld. Binnen 2 dagen in huis en werkt perfect.",
    rating: 5
  },
  {
    name: "Josh",
    initials: "JO",
    country: "NL",
    date: "28 augustus 2025",
    title: "Goeie service en snelle levering",
    text: "Goeie service en snelle levering! Ben super blij met mijn aankoop en een stuk goedkoper dan bij de Apple Store.",
    rating: 5
  },
  {
    name: "Thomas V.",
    initials: "TV",
    country: "NL",
    date: "26 augustus 2025",
    title: "Airpod gen2",
    text: "Ik heb contact gezocht met de eigenaar om te vragen wat de kwaliteit is van de airpods en of deze schoongemaakt worden voor verzending. Hierop kreeg ik direct reactie. Super fijn. De airpods worden getest en schoongemaakt. Worth it.",
    rating: 5
  },
  {
    name: "Lisa B.",
    initials: "LB",
    country: "BE",
    date: "15 november 2025",
    title: "Perfecte oplossing",
    text: "Eindelijk een betrouwbare plek om een losse AirPod te kopen. Mijn rechter AirPod was kapot en nu heb ik voor een fractie van de prijs mijn set weer compleet.",
    rating: 5
  },
  {
    name: "Kevin M.",
    initials: "KM",
    country: "NL",
    date: "12 november 2025",
    title: "Top service via WhatsApp",
    text: "Was even in de war welke generatie ik had, maar via WhatsApp werd ik super snel geholpen. Juiste AirPod besteld en de volgende dag al in huis!",
    rating: 5
  },
  {
    name: "Emma de Vries",
    initials: "EV",
    country: "NL",
    date: "5 november 2025",
    title: "Oplaadcase werkt perfect",
    text: "Mijn oude case was kapot en via RepairPods een nieuwe gekocht. Werkt perfect met mijn bestaande AirPods. Aanrader!",
    rating: 5
  }
];

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-background rounded-2xl p-6 border border-border shadow-sm h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
          {review.initials}
        </div>
        <div>
          <p className="font-medium text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.country}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{review.date}</p>
    </div>
    
    <div className="flex gap-0.5 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
      ))}
    </div>
    
    <h3 className="font-semibold text-foreground mb-2">{review.title}</h3>
    <p className="text-sm text-muted-foreground flex-1">{review.text}</p>
    
    <div className="mt-4 pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground">Via Trustpilot</p>
    </div>
  </div>
);

const TrustpilotWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-[#00b67a]">★ Trustpilot</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Wat klanten zeggen</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Meer dan 300 tevreden klanten gingen je voor. Lees hun ervaringen.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerPage + 2)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-1">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Vorige reviews"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Volgende reviews"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, index) => (
              <div key={index} className="w-[85%] flex-shrink-0 snap-center">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
              ))}
            </div>
            <span>4.8/5 gemiddeld</span>
          </div>
          <div className="text-sm text-muted-foreground">300+ beoordelingen</div>
          <div className="text-sm text-muted-foreground">98% aanraders</div>
        </div>

        {/* CTA to Trustpilot */}
        <div className="text-center mt-8">
          <a
            href="https://nl.trustpilot.com/review/repairpods.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Bekijk alle reviews op Trustpilot →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
