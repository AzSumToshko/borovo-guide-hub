import { User, Megaphone, FileText, Settings, DollarSign, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceBar = () => {
  const services = [
    {
      icon: User,
      title: "ПРОФИЛ НА",
      subtitle: "КУПУВАЧА",
      href: "#"
    },
    {
      icon: Megaphone,
      title: "ОБЯВИ, ТЪРГОВЕ",
      subtitle: "И КОНКУРСИ",
      href: "#"
    },
    {
      icon: FileText,
      title: "ПРОЕКТИ",
      subtitle: "",
      href: "#"
    },
    {
      icon: Settings,
      title: "ЕЛЕКТРОННИ",
      subtitle: "УСЛУГИ",
      href: "#"
    },
    {
      icon: DollarSign,
      title: "МЕСТНИ ДАНЪЦИ",
      subtitle: "И ТАКСИ",
      href: "#"
    },
    {
      icon: Database,
      title: "ПУБЛИЧНИ",
      subtitle: "РЕГИСТРИ",
      href: "#"
    }
  ];

  return (
    <div className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex gap-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-center gap-3 px-6 py-8 text-primary-foreground hover:bg-primary-light group transition-all duration-300"
                  asChild
                >
                  <a href={service.href}>
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-sm font-semibold leading-tight">{service.title}</div>
                      {service.subtitle && (
                        <div className="text-sm font-semibold leading-tight">{service.subtitle}</div>
                      )}
                    </div>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;