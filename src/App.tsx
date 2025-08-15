import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nProvider } from "@/i18n";
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
import TenderDetailPage from "./pages/TenderDetailPage";
import PublicRegistersPage from "./pages/PublicRegistersPage";
import BuyerProfilePage from "./pages/BuyerProfilePage";
import ProcurementDetailPage from "./pages/ProcurementDetailPage";
import DeclarationsPage from "./pages/DeclarationsPage";
import AccessToInformationPage from "./pages/AccessToInformationPage";
import ContactsPage from "./pages/ContactsPage";
import AccessibilityStatementPage from "./pages/AccessibilityStatementPage";
import SitemapPage from "./pages/SitemapPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectAnnouncementsPage from "./pages/ProjectAnnouncementsPage";
import ProjectsInProgressPage from "./pages/ProjectsInProgressPage";
import ProjectsCompletedPage from "./pages/ProjectsCompletedPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ElectronicServicesPage from "./pages/ElectronicServicesPage";
import PaymentCodesPage from "./pages/PaymentCodesPage";
import ElectronicDeclarationPage from "./pages/ElectronicDeclarationPage";
import DeclarationFormsPage from "./pages/DeclarationFormsPage";
import MarketFeesPage from "./pages/MarketFeesPage";
const queryClient = new QueryClient();

const App = () => (
  <I18nProvider>
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
            <Route path="/news/tenders/:id" element={<TenderDetailPage />} />
            <Route path="/registers" element={<PublicRegistersPage />} />
            <Route path="/buyer-profile" element={<BuyerProfilePage />} />
            <Route path="/buyer-profile/:id" element={<ProcurementDetailPage />} />
            <Route path="/declarations" element={<DeclarationsPage />} />
            <Route path="/access-to-information" element={<AccessToInformationPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/accessibility" element={<AccessibilityStatementPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/council" element={<CouncilPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/announcements" element={<ProjectAnnouncementsPage />} />
            <Route path="/projects/in-progress" element={<ProjectsInProgressPage />} />
            <Route path="/projects/completed" element={<ProjectsCompletedPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/electronic-services" element={<ElectronicServicesPage />} />
            <Route path="/local-taxes" element={<LocalTaxesPage />} />
            <Route path="/local-taxes/payment-codes" element={<PaymentCodesPage />} />
            <Route path="/local-taxes/electronic-declaration" element={<ElectronicDeclarationPage />} />
            <Route path="/local-taxes/declaration-forms" element={<DeclarationFormsPage />} />
            <Route path="/local-taxes/market-fees" element={<MarketFeesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
</I18nProvider>
);

export default App;
