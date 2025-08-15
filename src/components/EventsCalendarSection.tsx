import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const EventsCalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isDateChanging, setIsDateChanging] = useState(false);

  // Handle date selection with animation feedback
  const handleDateSelect = (date: Date | undefined) => {
    if (date && date !== selectedDate) {
      setIsDateChanging(true);
      setTimeout(() => setIsDateChanging(false), 300);
    }
    setSelectedDate(date);
  };

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
    <section className="py-12 sm:py-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Предстоящи събития</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Разгледайте предстоящите събития, съобщения и обяви. Изберете дата от календара за да видите актуалната информация.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Calendar - Mobile First */}
          <div className="order-1 lg:order-2">
            <Card className="lg:sticky lg:top-4">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-center justify-center text-lg">
                  <CalendarDays className="h-5 w-5" />
                  Избери дата
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="rounded-md border-0 w-full pointer-events-auto"
                  modifiers={{
                    hasEvents: (date) => hasEventsOnDate(date)
                  }}
                  modifiersClassNames={{
                    hasEvents: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full after:animate-pulse"
                  }}
                  modifiersStyles={{
                    hasEvents: {
                      backgroundColor: 'hsl(var(--primary) / 0.1)',
                      color: 'hsl(var(--primary))',
                      fontWeight: 'bold',
                      border: '1px solid hsl(var(--primary) / 0.3)'
                    }
                  }}
                />
                <div className={`mt-4 p-3 bg-muted/50 rounded-lg transition-all duration-300 ${isDateChanging ? 'bg-primary/10 ring-2 ring-primary/20' : ''}`}>
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Clock className={`h-4 w-4 transition-transform duration-300 ${isDateChanging ? 'rotate-180' : ''}`} />
                    Избрана дата
                  </h4>
                  <p className={`text-sm text-muted-foreground transition-all duration-300 ${isDateChanging ? 'text-primary font-medium' : ''}`}>
                    {selectedDate 
                      ? `${selectedDate.toLocaleDateString('bg-BG')} - ${selectedDateEvents.length} събития`
                      : "Изберете дата от календара"
                    }
                  </p>
                  {isDateChanging && (
                    <div className="mt-2">
                      <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full animate-pulse w-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List - Below Calendar on Mobile */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Tabs defaultValue="all" className="w-full">
              {/* Mobile-optimized tabs - stacked on mobile */}
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-6 h-auto gap-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-xs sm:text-sm relative flex flex-col items-center gap-1 px-2 py-2 h-auto min-h-[60px] sm:min-h-[40px]"
                  >
                    <span className="text-center leading-tight">{category.label}</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
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
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {event.type}
                            </Badge>
                            <CardTitle className="text-base sm:text-lg leading-tight text-foreground hover:text-primary transition-colors cursor-pointer">
                              {event.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 p-4 sm:p-6">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3 flex-shrink-0" />
                            <span>Валидно до: {new Date(event.validUntil).toLocaleDateString('bg-BG')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
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
                      <CardContent className="flex items-center justify-center py-8 sm:py-12">
                        <div className="text-center">
                          <CalendarDays className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground text-sm sm:text-base">
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
        </div>
      </div>
    </section>
  );
};

export default EventsCalendarSection;