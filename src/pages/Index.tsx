import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsBanner from "@/components/ProjectsBanner";
import NewsEventsSection from "@/components/NewsEventsSection";
import StatsSection from "@/components/StatsSection";
import EventsCalendarSection from "@/components/EventsCalendarSection";
import NewsletterSection from "@/components/NewsletterSection";
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
      <EventsCalendarSection />
      <NewsletterSection />
      {/* <AnnouncementsGrid />
      <QuickLinksSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
