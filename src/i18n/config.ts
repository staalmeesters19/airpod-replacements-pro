import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nlCommon from './locales/nl/common.json';
import nlNav from './locales/nl/nav.json';
import nlHome from './locales/nl/home.json';
import nlProducts from './locales/nl/products.json';
import nlPages from './locales/nl/pages.json';

import enCommon from './locales/en/common.json';
import enNav from './locales/en/nav.json';
import enHome from './locales/en/home.json';
import enProducts from './locales/en/products.json';
import enPages from './locales/en/pages.json';

export const defaultNS = 'common';
export const resources = {
  nl: {
    common: nlCommon,
    nav: nlNav,
    home: nlHome,
    products: nlProducts,
    pages: nlPages,
  },
  en: {
    common: enCommon,
    nav: enNav,
    home: enHome,
    products: enProducts,
    pages: enPages,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl', // default language
    fallbackLng: 'nl',
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
