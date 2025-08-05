import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceBar from "@/components/ServiceBar";
import ProjectsBanner from "@/components/ProjectsBanner";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceBar />
      <ProjectsBanner />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
