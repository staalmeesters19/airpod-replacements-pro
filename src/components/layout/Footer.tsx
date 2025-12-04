import { Link, useLocation } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation(['common', 'nav']);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Re<span className="text-primary">Pair</span>Pods
            </h3>
            <p className="text-sm text-muted-foreground mb-1">{t('common:brand.tagline')}</p>
            <p className="text-sm text-muted-foreground">
              {t('common:brand.location')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium mb-4">{t('common:footer.products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={isEnglish ? '/en/single-airpods' : '/losse-airpods'} className="text-muted-foreground hover:text-primary transition-colors">
                  {isEnglish ? 'Single AirPods' : 'Losse AirPods'}
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? '/en/charging-cases' : '/losse-oplaadcases'} className="text-muted-foreground hover:text-primary transition-colors">
                  {isEnglish ? 'Charging Cases' : 'Losse oplaadcases'}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/accessoires`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav:menu.accessories')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium mb-4">{t('common:footer.help')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={isEnglish ? '/en/which-airpods' : '/welke-airpods'} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav:menu.whichAirpods')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/faq`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav:menu.faq')}
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? '/en/help' : '/hulp'} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav:menu.help')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/reviews`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav:menu.reviews')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">{t('common:footer.visitStore')}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Amsterdam Centrum<br />
              {t('common:footer.openingHours')}<br />
              {t('common:footer.sundayClosed')}
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/airpodshandel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Trust info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-muted-foreground">
            <span>🇳🇱 {t('common:footer.netherlands')}</span>
            <span>📍 Amsterdam</span>
            <span>KvK: 94891494</span>
            <span>⭐ {t('common:footer.trustpilot')}</span>
            <span>🏆 {t('common:footer.topStore')}</span>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 RePairPods. {t('common:footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to={`${prefix}/privacybeleid`} className="text-muted-foreground hover:text-primary transition-colors">
                {t('common:footer.privacy')}
              </Link>
              <Link to={`${prefix}/algemene-voorwaarden`} className="text-muted-foreground hover:text-primary transition-colors">
                {t('common:footer.terms')}
              </Link>
              <Link to={`${prefix}/cookiebeleid`} className="text-muted-foreground hover:text-primary transition-colors">
                {t('common:footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
