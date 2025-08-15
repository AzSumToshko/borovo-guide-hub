import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Euro, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import borovoHero from "@/assets/borovo-hero.jpg";

const ProjectsCompletedPage = () => {
  const completedProjects = [
    {
      id: 1,
      title: "Проект: 'Обновяване на културната инфраструктура в сградите на НЧ Н. Вапцаров – 1945 г.'",
      code: "BG-RRP-6.043-0001",
      description: "Успешно завършен проект за модернизация на читалищната инфраструктура за подобряване на културните услуги.",
      status: "Завършен",
      startDate: "15.01.2022",
      endDate: "30.11.2023",
      budget: "156,780 лв",
      beneficiary: "НЧ 'Н. Вапцаров'",
      location: "гр. Асеновград",
      results: [
        "Ремонт на основната сграда",
        "Модернизация на техническото оборудване",
        "Подобрена достъпност",
        "Енергийна ефективност"
      ]
    },
    {
      id: 2,
      title: "Проект: 'Енергийна ефективност в жилищни сгради'",
      code: "BG-RRP-3.012-0005",
      description: "Проект за саниране и повишаване на енергийната ефективност на жилищни сгради в общината.",
      status: "Завършен",
      startDate: "01.06.2021",
      endDate: "31.08.2023",
      budget: "2,340,500 лв",
      beneficiary: "Община Асеновград",
      location: "Община Асеновград",
      results: [
        "Санирани 15 жилищни сгради",
        "Намаляване на енергопотреблението с 45%",
        "Подобрен комфорт за жителите",
        "Намаляване на CO2 емисиите"
      ]
    },
    {
      id: 3,
      title: "Проект: 'Реконструкция на централен градски парк'",
      code: "BG-RRP-2.008-0003",
      description: "Цялостна реконструкция на централния градски парк с нови детски площадки и зелени зони.",
      status: "Завършен",
      startDate: "10.03.2020",
      endDate: "25.10.2022",
      budget: "890,250 лв",
      beneficiary: "Община Асеновград",
      location: "Централен парк, гр. Асеновград",
      results: [
        "Нови детски площадки",
        "Облагородени алеи и пътеки",
        "Модерно осветление",
        "Подобрена екология"
      ]
    },
    {
      id: 4,
      title: "Проект: 'Дигитализация на общинските услуги'",
      code: "BG-RRP-1.005-0012",
      description: "Внедряване на електронни услуги за граждани и бизнес в общинската администрация.",
      status: "Завършен",
      startDate: "01.09.2021",
      endDate: "30.06.2023",
      budget: "445,800 лв",
      beneficiary: "Община Асеновград",
      location: "Общинска администрация",
      results: [
        "Електронни услуги за граждани",
        "Дигитални документооборот",
        "Онлайн плащания",
        "Подобрено обслужване"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Изпълнени проекти - Община Борово</title>
        <meta name="description" content="Завършени проекти на община Борово." />
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
                ИЗПЪЛНЕНИ ПРОЕКТИ
              </h1>
              <p className="text-lg opacity-90">
                Успешно завършени проекти за развитие на общината
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            {completedProjects.map((project) => (
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
                        <Badge variant="default" className="bg-green-600 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
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
                        <p className="font-medium">Завършване</p>
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
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-municipal-green flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-medium">Бенефициент: </span>
                      <span className="text-muted-foreground">{project.beneficiary}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-municipal-navy mb-3">Постигнати резултати:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
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

export default ProjectsCompletedPage;