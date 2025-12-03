import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import USPStrip from './USPStrip';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const airpodsSubmenu = [
    { label: 'Alle losse AirPods', href: '/losse-airpods' },
    { label: 'Linker AirPods', href: '/losse-airpods?kant=links' },
    { label: 'Rechter AirPods', href: '/losse-airpods?kant=rechts' },
  ];

  const navLinks = [
    { label: 'Losse oplaadcases', href: '/losse-oplaadcases' },
    { label: 'Welke AirPods heb ik?', href: '/welke-airpods' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reviews', href: '/reviews' },
  ];

  return (
    <>
      <USPStrip />
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-foreground tracking-tight">
              Re<span className="text-primary">Pair</span>Pods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* AirPods Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
                  Losse AirPods
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {airpodsSubmenu.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Zoek model, kant of case..."
                className="pl-10 w-64 bg-secondary border-transparent focus:border-primary/30 focus:bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
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
              placeholder="Zoek model, kant of case..."
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
            {/* AirPods section */}
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Losse AirPods
            </div>
            {airpodsSubmenu.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary rounded-lg pl-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
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
