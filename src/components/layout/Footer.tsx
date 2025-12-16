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
    <footer className="bg-secondary/50 border-t border-border mt-12 md:mt-20">
      <div className="container mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              Re<span className="text-primary">Pair</span>Pods
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">{t('common:brand.tagline')}</p>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t('common:brand.location')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-sm md:text-base mb-2 md:mb-4">{t('common:footer.products')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link to={isEnglish ? '/en/single-airpods' : '/losse-airpods'} className="text-muted-foreground hover:text-primary transition-colors">
                  {isEnglish ? 'AirPods' : 'AirPods'}
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? '/en/charging-cases' : '/losse-oplaadcases'} className="text-muted-foreground hover:text-primary transition-colors">
                  {isEnglish ? 'Cases' : 'Cases'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium text-sm md:text-base mb-2 md:mb-4">{t('common:footer.help')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link to={`${prefix}/faq`} className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? '/en/help' : '/hulp'} className="text-muted-foreground hover:text-primary transition-colors">
                  {isEnglish ? 'Contact' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - hidden on mobile */}
          <div className="hidden lg:block">
            <h4 className="font-medium mb-4">{t('common:footer.visitStore')}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Amsterdam Centrum<br />
              {t('common:footer.openingHours')}
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

        {/* Trust info - simplified on mobile */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground">
            <span>Amsterdam</span>
            <span className="hidden md:inline">KvK: 94891494</span>
            <span>{t('common:footer.trustpilot')}</span>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-4 md:pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2025 RePairPods
            </p>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <Link to={`${prefix}/privacybeleid`} className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to={`${prefix}/algemene-voorwaarden`} className="text-muted-foreground hover:text-primary transition-colors">
                {isEnglish ? 'Terms' : 'Voorwaarden'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
