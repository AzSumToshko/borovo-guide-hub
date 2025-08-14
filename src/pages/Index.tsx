import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsBanner from "@/components/ProjectsBanner";
import ServicesGrid from "@/components/ServicesGrid";
import AnnouncementsGrid from "@/components/AnnouncementsGrid";
import QuickLinksSection from "@/components/QuickLinksSection";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      <Hero />
      <ProjectsBanner />
      <ServicesGrid />
      <AnnouncementsGrid />
      <QuickLinksSection />
      <Footer />
    </div>
  );
};

export default Index;
