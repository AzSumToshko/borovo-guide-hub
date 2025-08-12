import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AdministrationPage from "./pages/AdministrationPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import CouncilPage from "./pages/CouncilPage";
import NotFound from "./pages/NotFound";
import DocumentsPage from "./pages/DocumentsPage";
import LocalTaxesPage from "./pages/LocalTaxesPage";
import TechnicalServicesPage from "./pages/TechnicalServicesPage";
import SocialServicesPage from "./pages/SocialServicesPage";
import EventsPage from "./pages/EventsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import TendersPage from "./pages/TendersPage";
import PublicRegistersPage from "./pages/PublicRegistersPage";
import BuyerProfilePage from "./pages/BuyerProfilePage";
import DeclarationsPage from "./pages/DeclarationsPage";
import AccessToInformationPage from "./pages/AccessToInformationPage";
import ContactsPage from "./pages/ContactsPage";
import AccessibilityStatementPage from "./pages/AccessibilityStatementPage";
import SitemapPage from "./pages/SitemapPage";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/documents" element={<DocumentsPage />} />
            <Route path="/services/local-taxes" element={<LocalTaxesPage />} />
            <Route path="/services/technical" element={<TechnicalServicesPage />} />
            <Route path="/services/social" element={<SocialServicesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/events" element={<EventsPage />} />
            <Route path="/news/announcements" element={<AnnouncementsPage />} />
            <Route path="/news/tenders" element={<TendersPage />} />
            <Route path="/registers" element={<PublicRegistersPage />} />
            <Route path="/buyer-profile" element={<BuyerProfilePage />} />
            <Route path="/declarations" element={<DeclarationsPage />} />
            <Route path="/access-to-information" element={<AccessToInformationPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/accessibility" element={<AccessibilityStatementPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/council" element={<CouncilPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
