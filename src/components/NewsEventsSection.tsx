import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsEventsSection = () => {
  const newsItems = [
    {
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      date: "сряда, 13 август 2025",
      location: "",
      title: "ГОТОВО Е СЪОРЪЖЕНИЕТО, КОЕТО ЩЕ ОСИГУРИ ВОДА ЗА С. ЧЕРВЕН...",
      description: "Остават 72-часовите проби.",
      category: "Инфраструктура"
    },
    {
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png", 
      date: "вторник, 12 август 2025",
      location: "",
      title: "НОВА АКЦИЯ В АСЕНОВГРАД ЗА ИЗДАВАНЕ НА ЕЛЕКТРОННО ЗДРАВНО ДОСИЕ",
      description: "Услугата е безплатна и ще се осъществи от екип на РЗИ – Пловдив, със съдействието...",
      category: "Здравеопазване"
    },
    {
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      date: "петък, 08 август 2025", 
      location: "",
      title: "ФИНАЛИЗИРА СЕ ПРОЕКТЪТ ЗА ПОДМЯНА НА УЛИЧНОТО ОСВЕТЛЕНИЕ В АСЕНОВГРАД",
      description: "Постигнати са добри резултати и досега покај за жителите на общината.",
      category: "Инфраструктура"
    },
    {
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      date: "четвъртък, 07 август 2025",
      location: "",
      title: "МЕРКИТЕ СРЕЩУ ШАРКАТА ПО ОВЦЕ И КОЗИ В АСЕНОВГРАДСКО –...",
      description: "Целта е да не се допусне разпространението на заболяването.",
      category: "Животновъдство"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-municipal-navy mb-4">
            НОВИНИ И СЪБИТИЯ
          </h2>
          <div className="w-24 h-1 bg-municipal-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <span className="text-xs text-municipal-green font-medium uppercase tracking-wide">
                  {item.category}
                </span>
                <CardTitle className="text-sm font-bold leading-tight group-hover:text-municipal-green transition-colors duration-300 line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            className="border-municipal-green text-municipal-green hover:bg-municipal-green hover:text-white"
          >
            <Link to="/news" className="flex items-center gap-2">
              Всички новини
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;