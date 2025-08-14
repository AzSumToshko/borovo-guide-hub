import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const EventsCalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock events data
  const events = [
    {
      id: 1,
      title: "СЪОБЩЕНИЕ ПОДНОВЯВАНЕ НА ПРИЕМА НА ЗАЯВЛЕНИЯ",
      date: "2025-01-15",
      validUntil: "2025-01-31",
      category: "съобщения",
      type: "Съобщение",
      description: "От 14.04.2025 г. се подновява се приемът на заявления по проект Подобряване качеството на атмосферата...",
      location: "Община Асеновград"
    },
    {
      id: 2,
      title: "СПИСЪК НА РЕГИСТРИРАНИТЕ КЪМ НАСТОЯЩИЯ МОМЕНТ ОБЕКТИ",
      date: "2025-01-16",
      validUntil: "2025-02-15",
      category: "обяви",
      type: "Обява",
      description: "Списък на регистрираните към настоящия момент обекти по чл. 206 от Закона за горите на територията на...",
      location: "Община Асеновград"
    },
    {
      id: 3,
      title: "ГОДИШЕН ПЛАН ЗА ПОЛЗВАНЕ НА ДЪРВЕСИНА",
      date: "2025-01-17",
      validUntil: "2025-12-31",
      category: "заповеди",
      type: "Заповед",
      description: "ОБЯСНИТЕЛНА ЗАПИСКА към Годишния план за ползване на дървесина на община Асеновград за 2025 г.",
      location: "Община Асеновград"
    },
    {
      id: 4,
      title: "СЪОБЩЕНИЕ ЗА ПУБЛИЧНО ОБЯВЯВАНЕ",
      date: "2025-01-18",
      validUntil: "2025-02-28",
      category: "търгове",
      type: "Търг",
      description: "Съобщение за публично обявяване за откриване на процедура за издаване на разрешително за водоземане...",
      location: "Община Асеновград"
    }
  ];

  const categories = [
    { id: "all", label: "Всички", count: events.length },
    { id: "съобщения", label: "Съобщения", count: events.filter(e => e.category === "съобщения").length },
    { id: "обяви", label: "Обяви, търгове и конкурси", count: events.filter(e => e.category === "обяви" || e.category === "търгове").length },
    { id: "заповеди", label: "Заповеди", count: events.filter(e => e.category === "заповеди").length }
  ];

  const getFilteredEvents = (category: string) => {
    if (category === "all") return events;
    if (category === "обяви") return events.filter(e => e.category === "обяви" || e.category === "търгове");
    return events.filter(e => e.category === category);
  };

  // Get events for selected date
  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const validUntilDate = new Date(event.validUntil);
      const selectedDateTime = date.getTime();
      return selectedDateTime >= eventDate.getTime() && selectedDateTime <= validUntilDate.getTime();
    });
  };

  // Check if date has events
  const hasEventsOnDate = (date: Date) => {
    return getEventsForDate(date).length > 0;
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : events;

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Предстоящи събития</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разгледайте предстоящите събития, съобщения и обяви. Изберете дата от календара за да видите актуалната информация.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List - Left Side */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-xs sm:text-sm relative"
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-4">
                  {getFilteredEvents(category.id).filter(event => 
                    selectedDate ? getEventsForDate(selectedDate).includes(event) : true
                  ).map((event) => (
                    <Card key={event.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-primary">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {event.type}
                            </Badge>
                            <CardTitle className="text-lg leading-tight text-foreground hover:text-primary transition-colors cursor-pointer">
                              {event.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" />
                            <span>Валидно до: {new Date(event.validUntil).toLocaleDateString('bg-BG')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {getFilteredEvents(category.id).filter(event => 
                    selectedDate ? getEventsForDate(selectedDate).includes(event) : true
                  ).length === 0 && (
                    <Card className="border-dashed">
                      <CardContent className="flex items-center justify-center py-12">
                        <div className="text-center">
                          <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">
                            {selectedDate 
                              ? `Няма събития за ${selectedDate.toLocaleDateString('bg-BG')} в тази категория`
                              : "Няма събития в тази категория"
                            }
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Calendar - Right Side */}
          <div className="order-1 lg:order-2">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-center justify-center">
                  <CalendarDays className="h-5 w-5" />
                  Избери дата
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-0 w-full"
                  modifiers={{
                    hasEvents: (date) => hasEventsOnDate(date)
                  }}
                  modifiersStyles={{
                    hasEvents: {
                      backgroundColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary-foreground))',
                      fontWeight: 'bold'
                    }
                  }}
                />
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Избрана дата
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDate 
                      ? `${selectedDate.toLocaleDateString('bg-BG')} - ${selectedDateEvents.length} събития`
                      : "Изберете дата от календара"
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendarSection;