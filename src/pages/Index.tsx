import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BottomNavigation from "@/components/BottomNavigation";
import ProjectsBanner from "@/components/ProjectsBanner";
import NewsEventsSection from "@/components/NewsEventsSection";
import StatsSection from "@/components/StatsSection";
import EventsCalendarSection from "@/components/EventsCalendarSection";
import NewsletterSection from "@/components/NewsletterSection";
import MunicipalActivitiesSection from "@/components/MunicipalActivitiesSection";
import LearnMoreSection from "@/components/LearnMoreSection";
import AnnouncementsGrid from "@/components/AnnouncementsGrid";
import QuickLinksSection from "@/components/QuickLinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Mobile-optimized spacing and layout */}
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <BottomNavigation />
        <ProjectsBanner />
        <NewsEventsSection />
        <StatsSection />
        <EventsCalendarSection />
        <NewsletterSection />
        <MunicipalActivitiesSection />
        <LearnMoreSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
