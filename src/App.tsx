import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Reviews from "./pages/Reviews";
import WelkeAirPods from "./pages/WelkeAirPods";
import LosseAirpods from "./pages/LosseAirpods";
import LosseOplaadcases from "./pages/LosseOplaadcases";
import ModelPage from "./pages/ModelPage";
import BlogIndex from "./pages/BlogIndex";
import BlogWelkeAirpods from "./pages/BlogWelkeAirpods";
import BlogLosseAirpodKwijt from "./pages/BlogLosseAirpodKwijt";
import BlogAirpodsCombineren from "./pages/BlogAirpodsCombineren";
import BlogAirpodsOpnieuwPairen from "./pages/BlogAirpodsOpnieuwPairen";
import FAQ from "./pages/FAQ";
import Hulp from "./pages/Hulp";
import OverOns from "./pages/OverOns";
import NotFound from "./pages/NotFound";
import WhatsAppWidget from "./components/layout/WhatsAppWidget";

const queryClient = new QueryClient();

// Component to handle language based on route
const LanguageHandler = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const isEnglish = window.location.pathname.startsWith('/en');
    const newLang = isEnglish ? 'en' : 'nl';
    if (i18n.language !== newLang) {
      i18n.changeLanguage(newLang);
    }
    // Update html lang attribute
    document.documentElement.lang = newLang;
  }, [i18n]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageHandler>
            <Routes>
              {/* Dutch routes (default) */}
              <Route path="/" element={<Index />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/welke-airpods" element={<WelkeAirPods />} />
              <Route path="/losse-airpods" element={<LosseAirpods />} />
              <Route path="/losse-oplaadcases" element={<LosseOplaadcases />} />
              <Route path="/model/:slug" element={<ModelPage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/welke-airpods-heb-ik" element={<BlogWelkeAirpods />} />
              <Route path="/blog/losse-airpod-kwijt-vervangen" element={<BlogLosseAirpodKwijt />} />
              <Route path="/blog/airpods-combineren-per-generatie" element={<BlogAirpodsCombineren />} />
              <Route path="/blog/airpods-opnieuw-pairen" element={<BlogAirpodsOpnieuwPairen />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/hulp" element={<Hulp />} />
              <Route path="/over-ons" element={<OverOns />} />

              {/* English routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/product/:slug" element={<ProductDetail />} />
              <Route path="/en/reviews" element={<Reviews />} />
              <Route path="/en/which-airpods" element={<WelkeAirPods />} />
              <Route path="/en/single-airpods" element={<LosseAirpods />} />
              <Route path="/en/charging-cases" element={<LosseOplaadcases />} />
              <Route path="/en/model/:slug" element={<ModelPage />} />
              <Route path="/en/blog" element={<BlogIndex />} />
              <Route path="/en/blog/which-airpods-do-i-have" element={<BlogWelkeAirpods />} />
              <Route path="/en/blog/single-airpod-lost-replacement" element={<BlogLosseAirpodKwijt />} />
              <Route path="/en/blog/airpods-mixing-generations" element={<BlogAirpodsCombineren />} />
              <Route path="/en/blog/airpods-re-pairing" element={<BlogAirpodsOpnieuwPairen />} />
              <Route path="/en/faq" element={<FAQ />} />
              <Route path="/en/help" element={<Hulp />} />
              <Route path="/en/about-us" element={<OverOns />} />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppWidget />
          </LanguageHandler>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
