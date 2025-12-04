import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import USPStrip from './USPStrip';
import LanguageSwitcher from './LanguageSwitcher';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const { totalItems } = useCart();
  const { t } = useTranslation(['nav', 'common']);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const prefix = isEnglish ? '/en' : '';

  const categoryDropdowns = [
    {
      label: t('nav:menu.leftAirpods'),
      allLabel: t('nav:menu.allLeftAirpods'),
      allUrl: `${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}?kant=links`,
      items: [
        { label: t('nav:generations.gen2'), url: `${prefix}/product/airpods-2e-generatie-links` },
        { label: t('nav:generations.gen3'), url: `${prefix}/product/airpods-3e-generatie-links` },
        { label: t('nav:generations.gen4'), url: `${prefix}/product/airpods-4e-generatie-links` },
        { label: t('nav:generations.pro1'), url: `${prefix}/product/airpods-pro-1e-generatie-links` },
        { label: t('nav:generations.pro2'), url: `${prefix}/product/airpods-pro-2e-generatie-lightning-links` },
        { label: t('nav:generations.pro3'), url: `${prefix}/product/airpods-pro-3e-generatie-links` },
      ],
    },
    {
      label: t('nav:menu.rightAirpods'),
      allLabel: t('nav:menu.allRightAirpods'),
      allUrl: `${prefix}${isEnglish ? '/single-airpods' : '/losse-airpods'}?kant=rechts`,
      items: [
        { label: t('nav:generations.gen2'), url: `${prefix}/product/airpods-2e-generatie-rechts` },
        { label: t('nav:generations.gen3'), url: `${prefix}/product/airpods-3e-generatie-rechts` },
        { label: t('nav:generations.gen4'), url: `${prefix}/product/airpods-4e-generatie-rechts` },
        { label: t('nav:generations.pro1'), url: `${prefix}/product/airpods-pro-1e-generatie-rechts` },
        { label: t('nav:generations.pro2'), url: `${prefix}/product/airpods-pro-2e-generatie-lightning-rechts` },
        { label: t('nav:generations.pro3'), url: `${prefix}/product/airpods-pro-3e-generatie-rechts` },
      ],
    },
    {
      label: t('nav:menu.chargingCases'),
      allLabel: t('nav:menu.allCases'),
      allUrl: `${prefix}${isEnglish ? '/charging-cases' : '/losse-oplaadcases'}`,
      items: [
        { label: t('nav:generations.gen2'), url: `${prefix}/product/airpods-2e-generatie-oplaadcase` },
        { label: t('nav:generations.gen3'), url: `${prefix}/product/airpods-3e-generatie-oplaadcase-magsafe` },
        { label: t('nav:generations.gen4'), url: `${prefix}/product/airpods-4e-generatie-oplaadcase` },
        { label: t('nav:generations.pro1'), url: `${prefix}/product/airpods-pro-1e-generatie-oplaadcase-magsafe` },
        { label: t('nav:generations.pro2Lightning'), url: `${prefix}/product/airpods-pro-2e-generatie-oplaadcase-lightning` },
        { label: t('nav:generations.pro2USBC'), url: `${prefix}/product/airpods-pro-2e-generatie-oplaadcase-usbc` },
        { label: t('nav:generations.pro3'), url: `${prefix}/product/airpods-pro-3e-generatie-oplaadcase` },
      ],
    },
  ];

  const navLinks = [
    { label: t('nav:menu.whichAirpods'), href: isEnglish ? '/en/which-airpods' : '/welke-airpods' },
    { label: t('nav:menu.blog'), href: `${prefix}/blog` },
    { label: t('nav:menu.reviews'), href: `${prefix}/reviews` },
    { label: t('nav:menu.aboutUs'), href: isEnglish ? '/en/about-us' : '/over-ons' },
  ];

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label);
  };

  return (
    <>
      <USPStrip />
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to={prefix || '/'} className="flex items-center">
              <span className="text-xl font-semibold text-foreground tracking-tight">
                Re<span className="text-primary">Pair</span>Pods
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Category Dropdowns */}
              {categoryDropdowns.map((category) => (
                <DropdownMenu key={category.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
                      {category.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-background border border-border shadow-lg z-50">
                    <DropdownMenuItem asChild>
                      <Link 
                        to={category.allUrl} 
                        className="w-full cursor-pointer font-medium"
                      >
                        {category.allLabel}
                      </Link>
                    </DropdownMenuItem>
                    <div className="my-1 h-px bg-border" />
                    {category.items.map((item) => (
                      <DropdownMenuItem key={item.url} asChild>
                        <Link 
                          to={item.url} 
                          className="w-full cursor-pointer"
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Search, Language & Cart */}
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex items-center relative">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t('common:search.placeholder')}
                  className="pl-10 w-64 bg-secondary border-transparent focus:border-primary/30 focus:bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <LanguageSwitcher />
              
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center animate-in zoom-in duration-200">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t('common:search.placeholder')}
                className="pl-10 bg-secondary border-transparent focus:border-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Category Dropdowns for Mobile */}
              {categoryDropdowns.map((category) => (
                <div key={category.label}>
                  <button
                    onClick={() => toggleMobileSubmenu(category.label)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary rounded-lg"
                  >
                    {category.label}
                    {expandedMobileMenu === category.label ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {expandedMobileMenu === category.label && (
                    <div className="pl-4 space-y-1 mt-1 mb-2">
                      <Link
                        to={category.allUrl}
                        className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary/50 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.allLabel}
                      </Link>
                      <div className="my-1 mx-3 h-px bg-border" />
                      {category.items.map((item) => (
                        <Link
                          key={item.url}
                          to={item.url}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-border my-2" />
              
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
