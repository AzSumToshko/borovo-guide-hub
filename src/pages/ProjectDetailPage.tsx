import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, MapPin, Users, Euro, Download, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import borovoHero from "@/assets/borovo-hero.jpg";

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  // Mock project data - in a real app this would come from an API
  const projectData = {
    "bg16ffpr002-5-001-0003": {
      title: "Проект №: BG16FFPR002-5.001-0003 'Подобряване качеството на атмосферния въздух в община Асеновград'",
      code: "BG16FFPR002-5.001-0003",
      description: "Проектът цели подобряване на качеството на атмосферния въздух чрез внедряване на мерки за намаляване на замърсяването и модернизация на системите за мониториране.",
      fullDescription: `Проектът 'Внедряване на мерки за енергийна ефективност в системата за външно улично осветление в гр. Асеновград' се изпълнява по приоритет 5 'Въздух' на Програма 'Околна среда' 2021-2027 г. По Националния план за възстановяване и устойчивост.

Улично осветление е един от големите консуматори на енергия в общините, оказвайки влияние и върху разходите на местните власти за внедряване на енергийна ефективност чрез технологично обновяване и модернизиране на системите за външно улично осветление, що се отнася на лампите и управлението на системата за управление и мониториране.

Проектът предвижда изграждане на 767 броя нови светлотехнически тела с нови LED осветители и подмяна на 128 броя електрически табла за улично осветление с нови за осветени части за управление и мониториране.

Проектното предложение включва внедряването на интелигентна система за управление на уличното осветление на община Асеновград с изграждане на местен център за управление и мониториране.`,
      status: "В изпълнение",
      startDate: "01.03.2023",
      endDate: "31.12.2024",
      budget: "1 249 267,48 лв",
      beneficiary: "Община Асеновград",
      location: "гр. Асеновград",
      fundingSource: "Програма 'Околна среда' 2021-2027",
      coordinator: "Инж. Мария Иванова",
      documents: [
        {
          name: "Техническо задание",
          type: "PDF",
          size: "2.1 MB",
          date: "15.02.2023"
        },
        {
          name: "Договор за финансиране",
          type: "PDF", 
          size: "1.8 MB",
          date: "28.02.2023"
        },
        {
          name: "Междинен отчет",
          type: "PDF",
          size: "3.2 MB",
          date: "30.06.2024"
        }
      ],
      objectives: [
        "Подобряване на енергийната ефективност на уличното осветление",
        "Намаляване на разходите за електроенергия",
        "Внедряване на интелигентни системи за управление",
        "Подобряване на качеството на осветление"
      ],
      activities: [
        "Изготвяне на техническа документация",
        "Доставка и монтаж на LED осветители",
        "Изграждане на система за управление",
        "Обучение на персонала"
      ]
    },
    "ecomobility": {
      title: "Проект: 'Внедряване на екомобилност в община Асеновград и изграждане на велоалеи на територията на община Садово'",
      code: "BG-ECO-2023-001",
      description: "Проект за устойчива мобилност и развитие на велосипедна инфраструктура.",
      fullDescription: "Проектът има за цел да насърчи устойчивата мобилност чрез изграждане на велосипедни алеи и внедряване на екологични транспортни решения.",
      status: "В изпълнение",
      startDate: "15.01.2024",
      endDate: "30.12.2025", 
      budget: "2,150,000 лв",
      beneficiary: "Община Асеновград",
      location: "Община Асеновград и Садово",
      fundingSource: "NextGenerationEU",
      coordinator: "Инж. Петър Георгиев",
      documents: [
        {
          name: "Проектно предложение",
          type: "PDF",
          size: "4.5 MB",
          date: "10.12.2023"
        }
      ],
      objectives: [
        "Развитие на велосипедна инфраструктура",
        "Намаляване на вредните емисии",
        "Насърчаване на устойчивата мобилност"
      ],
      activities: [
        "Изграждане на велосипедни алеи",
        "Монтаж на велостоянки",
        "Информационни кампании"
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Проектът не е намерен</h1>
          <Link to="/projects" className="text-municipal-green hover:underline">
            Назад към проекти
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Община Борово</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${borovoHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-municipal-navy/90 via-municipal-navy/70 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl text-white">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Назад към проекти
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="text-white border-white">
                  {project.code}
                </Badge>
                <Badge variant="default" className="bg-municipal-green text-white">
                  {project.status}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-municipal-navy">Описание на проекта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-municipal-navy">Цели на проекта</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-municipal-green rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-municipal-navy">Основни дейности</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-municipal-green rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-municipal-navy">Основна информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-municipal-green flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium">Бенефициент</p>
                      <p className="text-muted-foreground">{project.beneficiary}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium mb-1">Координатор</p>
                    <p className="text-sm text-muted-foreground">{project.coordinator}</p>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium mb-1">Източник на финансиране</p>
                    <p className="text-sm text-muted-foreground">{project.fundingSource}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-municipal-navy">Документи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.documents.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FileText className="w-5 h-5 text-municipal-green flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-municipal-navy">{doc.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                          </div>
                        </div>
                        <button className="text-municipal-green hover:text-municipal-navy transition-colors p-1">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetailPage;