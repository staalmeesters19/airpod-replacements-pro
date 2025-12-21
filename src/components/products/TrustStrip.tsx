import { Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TrustStrip = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 px-3 sm:px-4 bg-secondary/30 rounded-xl border border-border">
      {/* Trustpilot */}
      <a 
        href="https://nl.trustpilot.com/review/airpodshandel.nl" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#00b67a] text-[#00b67a]" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-medium text-foreground">4.9/5</span>
        <span className="text-xs sm:text-sm text-muted-foreground">Trustpilot</span>
      </a>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-border" />

      {/* Google Reviews */}
      <a 
        href="https://share.google/1vhWubZ3EcYWZAg96" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FBBC04] text-[#FBBC04]" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-medium text-foreground">4.9/5</span>
        <span className="text-xs sm:text-sm text-muted-foreground">Google</span>
      </a>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-border" />

      {/* Reviews link */}
      <Link 
        to={`${prefix}/reviews`}
        className="text-xs sm:text-sm text-primary hover:underline font-medium"
      >
        {isEnglish ? '300+ reviews →' : '300+ reviews →'}
      </Link>
    </div>
  );
};

export default TrustStrip;