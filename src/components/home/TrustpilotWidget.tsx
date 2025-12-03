import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

// Declare Trustpilot on window for TypeScript
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, useAsync?: boolean) => void;
    };
  }
}

const TrustpilotWidget = () => {
  const trustpilotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="trustpilot"]');
    
    if (!existingScript) {
      // Load Trustpilot widget script
      const script = document.createElement("script");
      script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      script.onload = () => {
        // Initialize Trustpilot widget after script loads
        if (window.Trustpilot && trustpilotRef.current) {
          window.Trustpilot.loadFromElement(trustpilotRef.current, true);
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, just initialize the widget
      if (window.Trustpilot && trustpilotRef.current) {
        window.Trustpilot.loadFromElement(trustpilotRef.current, true);
      }
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Wat klanten zeggen</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Meer dan 300 tevreden klanten gingen je voor. Lees hun ervaringen op Trustpilot.
          </p>
        </div>

        {/* Trustpilot Widget Container */}
        <div className="max-w-4xl mx-auto">
          {/* Trustpilot Carousel Widget */}
          <div
            ref={trustpilotRef}
            className="trustpilot-widget"
            data-locale="nl-NL"
            data-template-id="54ad5defc6454f065c28af8b"
            data-businessunit-id="643acb26841f1ac4a867f126"
            data-style-height="240px"
            data-style-width="100%"
            data-theme="light"
            data-stars="4,5"
            data-review-languages="nl"
          >
            <a
              href="https://nl.trustpilot.com/review/repairpods.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              Trustpilot
            </a>
          </div>

          {/* Fallback content if Trustpilot doesn't load */}
          <noscript>
            <div className="text-center p-8 bg-background rounded-2xl border border-border">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">Uitstekend beoordeeld</p>
              <p className="text-muted-foreground">
                Bekijk onze reviews op{" "}
                <a
                  href="https://nl.trustpilot.com/review/repairpods.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Trustpilot
                </a>
              </p>
            </div>
          </noscript>
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
      </div>
    </section>
  );
};

export default TrustpilotWidget;
