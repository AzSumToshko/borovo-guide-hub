import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, FileText, Calendar, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import borovoHero from "@/assets/borovo-hero.jpg";

const ProjectAnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "Финална публикация по проект \"Smart EnCity\"",
      type: "Документ",
      date: "15.12.2024",
      size: "2.5 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Съобщение за заключителна пресконференция на проект 'Градска среда - благоустройване на открити публични пространства в гр. Асеновград, кв. Запад – Зона 5'",
      type: "Съобщение",
      date: "10.12.2024",
      size: "1.8 MB",
      format: "PDF"
    },
    {
      id: 3,
      title: "Съобщение относно заключителна пресконференция по проект 'Градска среда - благоустройване на открити публични пространства в гр. Асеновград'",
      type: "Съобщение",
      date: "05.12.2024",
      size: "1.2 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "Покана за участие в работна среща относно перспективите пред ИППВР - гр. Асеновград",
      type: "Покана",
      date: "28.11.2024",
      size: "950 KB",
      format: "PDF"
    },
    {
      id: 5,
      title: "Покана за свикване на Общо събрание на СНЦ 'МИГ - Кукден - Асеновград'",
      type: "Покана",
      date: "20.11.2024",
      size: "1.1 MB",
      format: "PDF"
    },
    {
      id: 6,
      title: "График за провеждане на публични срещи по проект на община Кукден в партньорство с община Асеновград",
      type: "График",
      date: "15.11.2024",
      size: "750 KB",
      format: "PDF"
    },
    {
      id: 7,
      title: "Покана за участие в учредително събрание на местна инициативна група на територията на община Кукден и община Асеновград по подход 'Водено от общностите местно развитие'",
      type: "Покана",
      date: "08.11.2024",
      size: "1.3 MB",
      format: "PDF"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Съобщения - Проекти - Община Борово</title>
        <meta name="description" content="Съобщения и документи относно проектите на община Борово." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[300px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${borovoHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-municipal-navy/90 via-municipal-navy/70 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Назад към проекти
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                СЪОБЩЕНИЯ
              </h1>
              <p className="text-lg opacity-90">
                Документи и съобщения относно проектите
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-municipal-green mt-1 flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-municipal-navy mb-2 leading-relaxed">
                        {announcement.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {announcement.date}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {announcement.type}
                        </Badge>
                        <span>{announcement.size}</span>
                        <span>{announcement.format}</span>
                      </div>
                    </div>
                    <button className="text-municipal-green hover:text-municipal-navy transition-colors flex-shrink-0 p-2 hover:bg-muted rounded-lg">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectAnnouncementsPage;