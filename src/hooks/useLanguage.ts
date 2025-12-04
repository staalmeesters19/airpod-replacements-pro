import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

// Route mappings between Dutch and English
export const routeMappings: Record<string, string> = {
  // Dutch to English
  '/losse-airpods': '/en/single-airpods',
  '/losse-oplaadcases': '/en/charging-cases',
  '/welke-airpods': '/en/which-airpods',
  '/over-ons': '/en/about-us',
  '/faq': '/en/faq',
  '/hulp': '/en/help',
  '/reviews': '/en/reviews',
  '/blog': '/en/blog',
  '/blog/welke-airpods-heb-ik': '/en/blog/which-airpods-do-i-have',
  '/blog/losse-airpod-kwijt-vervangen': '/en/blog/single-airpod-lost-replacement',
  '/blog/airpods-combineren-per-generatie': '/en/blog/airpods-mixing-generations',
  '/blog/airpods-opnieuw-pairen': '/en/blog/airpods-re-pairing',
  // English to Dutch (reverse)
  '/en/single-airpods': '/losse-airpods',
  '/en/charging-cases': '/losse-oplaadcases',
  '/en/which-airpods': '/welke-airpods',
  '/en/about-us': '/over-ons',
  '/en/faq': '/faq',
  '/en/help': '/hulp',
  '/en/reviews': '/reviews',
  '/en/blog': '/blog',
  '/en/blog/which-airpods-do-i-have': '/blog/welke-airpods-heb-ik',
  '/en/blog/single-airpod-lost-replacement': '/blog/losse-airpod-kwijt-vervangen',
  '/en/blog/airpods-mixing-generations': '/blog/airpods-combineren-per-generatie',
  '/en/blog/airpods-re-pairing': '/blog/airpods-opnieuw-pairen',
};

export const useLanguage = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language;
  const isEnglish = location.pathname.startsWith('/en');

  const getAlternateRoute = useCallback((path: string): string => {
    // Handle product routes
    if (path.includes('/product/')) {
      return isEnglish ? path.replace('/en', '') : `/en${path}`;
    }
    
    // Handle model routes
    if (path.includes('/model/')) {
      return isEnglish ? path.replace('/en', '') : `/en${path}`;
    }

    // Check direct mapping
    if (routeMappings[path]) {
      return routeMappings[path];
    }

    // Handle home
    if (path === '/') return '/en';
    if (path === '/en' || path === '/en/') return '/';

    // Fallback: add or remove /en prefix
    if (isEnglish) {
      return path.replace('/en', '') || '/';
    }
    return `/en${path}`;
  }, [isEnglish]);

  const switchLanguage = useCallback((lang: 'nl' | 'en') => {
    if ((lang === 'en' && isEnglish) || (lang === 'nl' && !isEnglish)) {
      return; // Already on correct language
    }

    i18n.changeLanguage(lang);
    const newPath = getAlternateRoute(location.pathname);
    navigate(newPath + location.search);
  }, [i18n, isEnglish, location.pathname, location.search, navigate, getAlternateRoute]);

  const toggleLanguage = useCallback(() => {
    switchLanguage(isEnglish ? 'nl' : 'en');
  }, [isEnglish, switchLanguage]);

  return {
    currentLanguage: isEnglish ? 'en' : 'nl',
    isEnglish,
    switchLanguage,
    toggleLanguage,
    getAlternateRoute,
    t,
  };
};

export default useLanguage;
