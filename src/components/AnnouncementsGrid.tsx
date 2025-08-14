import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, Users, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";

const AnnouncementsGrid = () => {
  const { t } = useI18n();

  const announcements = [
    {
      icon: Calendar,
      title: "Заседание на Общински съвет",
      date: "15.01.2025",
      excerpt: "Поредно заседание на Общински съвет Борово ще се проведе на 15 януари 2025 г. от 14:00 часа.",
      category: "Обществен живот"
    },
    {
      icon: FileText,
      title: "Нова обществена поръчка",
      date: "12.01.2025", 
      excerpt: "Обявена е обществена поръчка за благоустройство на централния градски парк.",
      category: "Обществени поръчки"
    },
    {
      icon: Users,
      title: "Приемни часове на кмета",
      date: "10.01.2025",
      excerpt: "Кметът на Община Борово ще приема граждани всеки понеделник и сряда от 9:00 до 12:00 часа.",
      category: "Административно обслужване"
    },
    {
      icon: MapPin,
      title: "Ремонт на улична мрежа",
      date: "08.01.2025",
      excerpt: "Започва ремонт на улична мрежа в централната част на града. Очаквайте временни ограничения.",
      category: "Инфраструктура"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-municipal-navy mb-4">
            {t('announcements.title') || 'НОВИНИ И СЪОБЩЕНИЯ'}
          </h2>
          <div className="w-24 h-1 bg-municipal-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-municipal-light">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-municipal-green/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-municipal-green" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <span className="text-xs text-municipal-green font-medium uppercase tracking-wide">
                    {item.category}
                  </span>
                  <CardTitle className="text-lg group-hover:text-municipal-green transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsGrid;