import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, FolderOpen, Calendar, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import borovoHero from "@/assets/borovo-hero.jpg";

const ProjectsPage = () => {
  const projectLinks = [
    {
      title: "Съобщения",
      description: "Важни съобщения и документи",
      href: "/projects/announcements",
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      title: "Проекти в процес на изпълнение",
      description: "Текущо изпълнявани проекти",
      href: "/projects/in-progress",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Изпълнени проекти",
      description: "Завършени проекти",
      href: "/projects/completed",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Проект №: BG16FFPR002-5.001-0003 'Подобряване качеството на атмосферния въздух в община Асеновград'",
      description: "По приоритет 5 'Въздух' на Програма 'Околна среда' 2021-2027 г.",
      href: "/projects/bg16ffpr002-5-001-0003",
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      title: "Топъл обяд в община Асеновград, Операция, BG055FPR003-1.001 'Топъл обяд'",
      description: "Договор № BG055FPR003-1.001-0009-C05",
      href: "/projects/bg055fpr003-1-001",
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      title: "Проект: 'Внедряване на екомобилност в община Асеновград и изграждане на велоалеи на територията на община Садово'",
      description: "Проект за устойчива мобилност",
      href: "/projects/ecomobility",
      icon: <FolderOpen className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Проекти - Община Борово</title>
        <meta name="description" content="Проекти на община Борово - текущи, завършени и планирани проекти за развитие на общината." />
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                ПРОЕКТИ
              </h1>
              <p className="text-lg opacity-90">
                Проекти и инициативи на Община Борово за развитие и модернизация
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            {projectLinks.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-municipal-navy/10">
                <CardContent className="p-6">
                  <Link to={project.href} className="flex items-start gap-4 group-hover:text-municipal-navy transition-colors">
                    <div className="text-municipal-green mt-1 flex-shrink-0">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-municipal-navy group-hover:text-municipal-green transition-colors mb-2 leading-relaxed">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-municipal-green group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                  </Link>
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

export default ProjectsPage;