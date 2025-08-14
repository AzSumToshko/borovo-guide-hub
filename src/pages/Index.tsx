import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsBanner from "@/components/ProjectsBanner";
import NewsEventsSection from "@/components/NewsEventsSection";
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
      <NewsEventsSection />
      <StatsSection />
      <AnnouncementsGrid />
      <QuickLinksSection />
      <Footer />
    </div>
  );
};

export default Index;
