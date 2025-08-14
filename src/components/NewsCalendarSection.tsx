import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, FileText, Megaphone, Building, Gavel } from "lucide-react";
import { format } from "date-fns";
import { bg } from "date-fns/locale";

const NewsCalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Sample events data
  const events = [
    {
      id: 1,
      date: new Date(2025, 7, 31), // August 31, 2025
      category: "СЪОБЩЕНИЯ",
      title: "СЪОБЩЕНИЕ ПОДНОВЯВАНЕ НА ПРИЕМА НА ЗАЯВЛЕНИЯ",
      description: "От 14.04.2025 г. се подновява се приемът на заявления по проект „Подобряване качеството на атмосферня...",
      validUntil: new Date(2025, 11, 31),
      icon: Megaphone
    },
    {
      id: 2,
      date: new Date(2025, 7, 31),
      category: "ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ", 
      title: "СПИСЪК НА РЕГИСТРИРАНИТЕ КЪМ НАСТОЯЩИЯ МОМЕНТ ОБЕКТИ ПО ЧЛ. 206 ОТ ЗАКОНА ЗА ГОРИТЕ НА ТЕРИТОРИЯТА НА ОБЩИНА АСЕНОВГРАД",
      description: "Списък на регистрираните към настоящия момент обекти по чл. 206 от Закона за горите на...",
      validUntil: new Date(2025, 11, 31),
      icon: FileText
    },
    {
      id: 3,
      date: new Date(2025, 7, 31),
      category: "ОБЯВЛЕНИЯ",
      title: "ГОДИШЕН ПЛАН ЗА ПОЛЗВАНЕ НА ДЪРВЕСИНА НА ОБЩИНА АСЕНОВГРАД ЗА 2025 Г.",
      description: "ОБЯСНИТЕЛНА ЗАПИСКА към Годишния план за ползване на дървесина на община Асеновград за 2025 г. Образец...",
      validUntil: new Date(2025, 11, 31),
      icon: Building
    },
    {
      id: 4,
      date: new Date(2025, 7, 24),
      category: "ЗАПОВЕДИ",
      title: "СЪОБЩЕНИЕ ЗА ПУБЛИЧНО ОБЯВЯВАНЕ ЗА ОТКРИВАНЕ НА ПРОЦЕДУРА ЗА ИЗДАВАНЕ НА РАЗРЕШИТЕЛНО ЗА ВОДОВЗЕМАНЕ",
      description: "Съобщение за публично обявяване за откриване на процедура за издаване на разрешително за водовземане от...",
      validUntil: new Date(2025, 11, 31),
      icon: Gavel
    }
  ];

  const categories = [
    { key: "all", label: "ВСИЧКИ", icon: CalendarIcon },
    { key: "СЪОБЩЕНИЯ", label: "СЪОБЩЕНИЯ", icon: Megaphone },
    { key: "ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ", label: "ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ", icon: FileText },
    { key: "ОБЯВЛЕНИЯ", label: "ОБЯВЛЕНИЯ", icon: Building },
    { key: "ЗАПОВЕДИ", label: "ЗАПОВЕДИ", icon: Gavel }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = events.filter(event => {
    const dateMatch = selectedDate ? 
      event.date.toDateString() === selectedDate.toDateString() || 
      (event.validUntil >= selectedDate && event.date <= selectedDate)
      : true;
    const categoryMatch = activeCategory === "all" || event.category === activeCategory;
    return dateMatch && categoryMatch;
  });

  // Get dates that have events for calendar highlighting
  const eventDates = events.map(event => event.date);

  return (
    <section className="py-16 bg-gradient-to-br from-municipal-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-municipal-navy mb-4">
            ПРЕДСТОЯЩИ СЪБИТИЯ
          </h2>
          <div className="w-24 h-1 bg-municipal-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader className="bg-municipal-navy text-white">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  КАЛЕНДАР СЪБИТИЯ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={bg}
                  className="w-full pointer-events-auto"
                  modifiers={{
                    hasEvent: eventDates
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      backgroundColor: 'hsl(var(--municipal-green))',
                      color: 'white',
                      borderRadius: '50%'
                    }
                  }}
                />
                {selectedDate && (
                  <div className="mt-4 p-3 bg-municipal-light/20 rounded-lg">
                    <p className="text-sm font-medium text-municipal-navy">
                      Избрана дата:
                    </p>
                    <p className="text-lg font-bold text-municipal-green">
                      {format(selectedDate, "dd MMMM yyyy", { locale: bg })}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Events Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                  <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-1 bg-municipal-light/20">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <TabsTrigger 
                          key={category.key}
                          value={category.key}
                          className="text-xs px-2 py-1 data-[state=active]:bg-municipal-green data-[state=active]:text-white"
                        >
                          <IconComponent className="w-3 h-3 mr-1" />
                          {category.label}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                <div className="space-y-4">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => {
                      const IconComponent = event.icon;
                      return (
                        <div 
                          key={event.id}
                          className="border-l-4 border-municipal-green pl-4 py-3 hover:bg-municipal-light/10 transition-colors rounded-r-lg"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-municipal-green/10 rounded-lg">
                              <IconComponent className="w-4 h-4 text-municipal-green" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-xs">
                                  {event.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  Валидно до: {format(event.date, "dd.MM.yyyy")}
                                </span>
                              </div>
                              <h4 className="font-bold text-municipal-navy mb-2 text-sm leading-tight">
                                {event.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Няма събития за избраната дата и категория</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCalendarSection;