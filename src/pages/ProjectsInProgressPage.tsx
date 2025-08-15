import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Euro } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import borovoHero from "@/assets/borovo-hero.jpg";

const ProjectsInProgressPage = () => {
  const projectsInProgress = [
    {
      id: 1,
      title: "Проект: 'Внедряване на мерки за енергийна ефективност в системата за външно улично осветление в гр. Асеновград'",
      code: "BG-RRP-4.025-0003",
      description: "Проектът предвижда замяна на осветителни тела и система за управление на уличното осветление с цел повишаване на енергийната ефективност и въвеждане на интелигентни системи за управление и мониториране.",
      status: "В изпълнение",
      progress: 65,
      startDate: "01.03.2023",
      endDate: "31.12.2024",
      budget: "1,547 лева",
      beneficiary: "Община Асеновград",
      location: "гр. Асеновград",
      phase: "Фаза 2: Изпълнение на дейностите"
    },
    {
      id: 2,
      title: "Проект: обновяване на културната инфраструктура в сгградите на НЧ 'Христо Ботев'",
      code: "BG-RRP-6.043-0003",
      description: "Целта на проекта е подобряване на културната инфраструктура чрез ремонт и модернизация на сградите на читалищата в общината.",
      status: "В изпълнение", 
      progress: 40,
      startDate: "15.06.2023",
      endDate: "30.06.2025",
      budget: "276,559 лв",
      beneficiary: "НЧ 'Христо Ботев'",
      location: "Община Асеновград",
      phase: "Фаза 1: Проектиране"
    },
    {
      id: 3,
      title: "Проект: 'Обновяване на културната инфраструктура в сгградите на НЧ Христо Ботев – 1945 г.'",
      code: "BG-RRP-6.043-0002",
      description: "Модернизация на читалищната инфраструктура за подобряване на културните услуги за жителите.",
      status: "В изпълнение",
      progress: 75,
      startDate: "10.01.2023", 
      endDate: "31.03.2024",
      budget: "344,388.52 лв",
      beneficiary: "НЧ 'Христо Ботев'",
      location: "гр. Асеновград",
      phase: "Фаза 3: Финализиране"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Проекти в процес на изпълнение - Община Борово</title>
        <meta name="description" content="Текущо изпълнявани проекти на община Борово." />
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
                ПРОЕКТИ В ПРОЦЕС НА ИЗПЪЛНЕНИЕ
              </h1>
              <p className="text-lg opacity-90">
                Текущо изпълнявани проекти за развитие на общината
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            {projectsInProgress.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-municipal-navy mb-2 leading-relaxed">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-municipal-green border-municipal-green">
                          {project.code}
                        </Badge>
                        <Badge variant="default" className="bg-municipal-green text-white">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Прогрес на изпълнение</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{project.phase}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-municipal-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-medium">Начало</p>
                          <p className="text-muted-foreground">{project.startDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-municipal-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-medium">Приключване</p>
                          <p className="text-muted-foreground">{project.endDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4 text-municipal-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-medium">Бюджет</p>
                          <p className="text-muted-foreground">{project.budget}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-municipal-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-medium">Локация</p>
                          <p className="text-muted-foreground">{project.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <Users className="w-4 h-4 text-municipal-green flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-medium">Бенефициент: </span>
                        <span className="text-muted-foreground">{project.beneficiary}</span>
                      </div>
                    </div>
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

export default ProjectsInProgressPage;