import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Home, Briefcase, Heart, TreePine } from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Административни услуги",
      icon: FileText,
      color: "text-municipal-blue",
      services: [
        "Издаване на удостоверения",
        "Регистрация на автомобили",
        "Лични документи",
        "Бизнес регистрация",
        "Разрешителни за строеж"
      ]
    },
    {
      title: "Социални услуги",
      icon: Heart,
      color: "text-municipal-green",
      services: [
        "Социални помощи",
        "Домашен патронаж",
        "Детски градини",
        "Услуги за възрастни",
        "Здравни услуги"
      ]
    },
    {
      title: "Технически услуги",
      icon: Home,
      color: "text-primary",
      services: [
        "Водоснабдяване",
        "Канализация",
        "Електроснабдяване",
        "Пътна поддръжка",
        "Сметосъбиране"
      ]
    },
    {
      title: "Икономически услуги",
      icon: Briefcase,
      color: "text-municipal-gold",
      services: [
        "Данъци и такси",
        "Концесии",
        "Лицензи",
        "Инвестиционни проекти",
        "Туристически услуги"
      ]
    },
    {
      title: "Култура и спорт",
      icon: Users,
      color: "text-accent",
      services: [
        "Културни събития",
        "Спортни съоръжения",
        "Библиотека",
        "Общински празници",
        "Младежки дейности"
      ]
    },
    {
      title: "Околна среда",
      icon: TreePine,
      color: "text-municipal-green",
      services: [
        "Екологични проекти",
        "Рециклиране",
        "Зелени площи",
        "Природозащита",
        "Енергийна ефективност"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ДЕЙНОСТИ И УСЛУГИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Всички услуги, които предлага Община Борово</p>
        </div>
      </div>

      {/* Quick Services */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">Електронни услуги</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="municipal">Онлайн заявления</Button>
            <Button variant="municipal">Плащане на данъци</Button>
            <Button variant="municipal">Проверка на статус</Button>
            <Button variant="municipal">Записване на час</Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-[var(--shadow-card)] transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Повече информация
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Документи за услуги</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                За повечето услуги са необходими следните документи:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Лична карта или паспорт</li>
                <li>• Документ за собственост (при необходимост)</li>
                <li>• Заявление (образци в сайта)</li>
                <li>• Такса според тарифата</li>
              </ul>
              <Button variant="outline" className="w-full">
                Изтегли образци
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Работно време</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground space-y-2">
                <div>
                  <strong>Гише за граждани:</strong>
                  <div>Понеделник - Петък: 08:30 - 17:00</div>
                  <div>Обедна почивка: 12:00 - 13:00</div>
                </div>
                <div>
                  <strong>Онлайн услуги:</strong>
                  <div>24/7 достъп</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Запиши час
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Services */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-primary text-center">Нужда от помощ?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Свържете се с нас за консултация или помощ при подаване на заявления
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="municipal">
                Телефон: 070010502
              </Button>
              <Button variant="municipal">
                Email: services@borovo.bg
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;