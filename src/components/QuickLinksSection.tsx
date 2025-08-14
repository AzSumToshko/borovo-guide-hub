import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const QuickLinksSection = () => {

  const quickLinks = [
    {
      title: "Електронно правителство",
      description: "gov.bg",
      icon: ExternalLink,
      url: "https://www.gov.bg",
      type: "external"
    },
    {
      title: "Документи за изтегляне",
      description: "Заявления и формуляри",
      icon: Download,
      url: "/documents",
      type: "internal"
    },
    {
      title: "Календар събития",
      description: "Предстоящи мероприятия",
      icon: Calendar,
      url: "/events",
      type: "internal"
    },
    {
      title: "Интерактивна карта",
      description: "Карта на общината",
      icon: MapPin,
      url: "#",
      type: "feature"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+359 84 XXX XXX"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@borovo.bg"
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "гр. Борово, ул. Централна 1"
    }
  ];

  return (
    <section className="py-12 bg-municipal-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              БЪРЗИ ВРЪЗКИ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-municipal-green rounded-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white group-hover:text-municipal-green transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-sm text-white/70">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              КОНТАКТ ИНФОРМАЦИЯ
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <div className="p-2 bg-municipal-green rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">{info.label}</p>
                      <p className="font-semibold text-white">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-municipal-green">
                РАБОТНО ВРЕМЕ
              </h4>
              <div className="text-sm text-white/80 space-y-1">
                <p>Понеделник - Петък: 08:30 - 17:30</p>
                <p>Събота - Неделя: Почивни дни</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;