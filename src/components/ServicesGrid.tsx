import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Building, 
  CreditCard, 
  Phone, 
  Search,
  MapPin,
  Calendar
} from "lucide-react";
import { useI18n } from "@/i18n";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const { t } = useI18n();

  const services = [
    {
      icon: FileText,
      title: "Административно обслужване",
      description: "Подаване на документи и заявления онлайн",
      link: "/services",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      title: "Общински съвет", 
      description: "Информация за дейността на Общинския съвет",
      link: "/council",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Building,
      title: "Публични регистри",
      description: "Достъп до публични регистри и документи",
      link: "/public-registers", 
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Местни данъци и такси",
      description: "Информация за местни данъци и такси",
      link: "/local-taxes",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Phone,
      title: "Контакти",
      description: "Контактна информация и работно време",
      link: "/contacts",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Search,
      title: "Достъп до информация",
      description: "Заявки за достъп до обществена информация", 
      link: "/access-to-information",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: MapPin,
      title: "Обществени поръчки",
      description: "Информация за текущи обществени поръчки",
      link: "/tenders",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Calendar,
      title: "События и мероприятия",
      description: "Календар с предстоящи събития",
      link: "/events",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-municipal-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-municipal-navy mb-4">
            {t('services.title') || 'ОНЛАЙН УСЛУГИ'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle') || 'Бърз и удобен достъп до всички услуги на Община Борово'}
          </p>
          <div className="w-24 h-1 bg-municipal-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-municipal-green transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-municipal-green text-municipal-green hover:bg-municipal-green hover:text-white"
                  >
                    <Link to={service.link}>
                      {t('common.learnMore') || 'Научи повече'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;