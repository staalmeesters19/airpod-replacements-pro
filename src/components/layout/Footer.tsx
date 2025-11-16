import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NIEUWE MERKNAAM</h3>
            <p className="text-sm text-muted-foreground mb-2">voorheen Airpods-handel</p>
            <p className="text-sm text-muted-foreground">
              Bekend van onze winkel in Amsterdam
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium mb-4">Producten</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/losse-airpods" className="text-muted-foreground hover:text-foreground transition-colors">
                  Losse AirPods
                </Link>
              </li>
              <li>
                <Link to="/losse-oplaadcases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Losse oplaadcases
                </Link>
              </li>
              <li>
                <Link to="/accessoires" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accessoires
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium mb-4">Hulp</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/welke-airpods" className="text-muted-foreground hover:text-foreground transition-colors">
                  Welke AirPods heb ik?
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-muted-foreground hover:text-foreground transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/klantenservice" className="text-muted-foreground hover:text-foreground transition-colors">
                  Klantenservice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Bezoek onze winkel</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Amsterdam Centrum<br />
              Ma-Za: 10:00 - 18:00<br />
              Zo: Gesloten
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 NIEUWE MERKNAAM. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacybeleid" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacybeleid
              </Link>
              <Link to="/algemene-voorwaarden" className="text-muted-foreground hover:text-foreground transition-colors">
                Algemene voorwaarden
              </Link>
              <Link to="/cookiebeleid" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
