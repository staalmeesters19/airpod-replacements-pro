import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
