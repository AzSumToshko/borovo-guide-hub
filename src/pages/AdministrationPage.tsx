import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Mail, MapPin } from "lucide-react";

const AdministrationPage = () => {
  const departments = [
    {
      title: "Кметство",
      head: "Иван Петров - Кмет",
      phone: "070010502",
      email: "kmet@borovo.bg",
      responsibilities: ["Общо управление", "Стратегическо планиране", "Връзки с обществеността"]
    },
    {
      title: "Административно обслужване",
      head: "Мария Иванова",
      phone: "070010503",
      email: "admin@borovo.bg",
      responsibilities: ["Административни услуги", "Документооборот", "Регистри"]
    },
    {
      title: "Финанси и бюджет",
      head: "Петър Георгиев",
      phone: "070010504",
      email: "finance@borovo.bg",
      responsibilities: ["Бюджет", "Счетоводство", "Финансово планиране"]
    },
    {
      title: "Техническа дирекция",
      head: "Стефан Димитров",
      phone: "070010505",
      email: "tech@borovo.bg",
      responsibilities: ["Инфраструктура", "Строителство", "Поддръжка"]
    },
    {
      title: "Социални дейности",
      head: "Елена Стоянова",
      phone: "070010506",
      email: "social@borovo.bg",
      responsibilities: ["Социални услуги", "Здравеопазване", "Образование"]
    },
    {
      title: "Икономическо развитие",
      head: "Димитър Николов",
      phone: "070010507",
      email: "development@borovo.bg",
      responsibilities: ["Проекти", "Инвестиции", "Туризъм"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">АДМИНИСТРАЦИЯ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Структура и контакти на общинската администрация</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mayor Section */}
        <Card className="mb-8">
          <CardHeader className="bg-secondary">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <User className="w-6 h-6" />
              Кмет на Община Борово
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Иван Петров</h3>
                <p className="text-muted-foreground mb-4">
                  Кмет на Община Борово от 2019 година. Работи активно за развитието на общината 
                  и подобряването на качеството на живот на гражданите.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>070010502</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>kmet@borovo.bg</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Приемно време:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Понеделник: 14:00 - 17:00</div>
                  <div>Сряда: 09:00 - 12:00</div>
                  <div>Петък: 14:00 - 16:00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <h2 className="text-2xl font-bold text-primary mb-6">Дирекции и отдели</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-card)] transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{dept.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {dept.head}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{dept.email}</span>
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-sm mb-1">Отговорности:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {dept.responsibilities.map((resp, i) => (
                      <li key={i}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Working Hours */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Работно време и местонахождение
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Работно време:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Понеделник - Четвъртък: 08:30 - 17:30</div>
                  <div>Петък: 08:30 - 16:30</div>
                  <div>Обедна почивка: 12:00 - 13:00</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Адрес:</h4>
                <div className="text-sm text-muted-foreground">
                  <div>ул. "Централна" №1</div>
                  <div>7970 Борово</div>
                  <div>област Русе</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdministrationPage;