import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsBanner from "@/components/ProjectsBanner";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import AnnouncementsGrid from "@/components/AnnouncementsGrid";
import QuickLinksSection from "@/components/QuickLinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectsBanner />
      <ServicesGrid />
      <StatsSection />
      <AnnouncementsGrid />
      <QuickLinksSection />
      <Footer />
    </div>
  );
};

export default Index;
