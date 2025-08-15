import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building2 } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "15,240",
      label: "Жители",
      description: "в община Борово"
    },
    {
      icon: Building2,
      value: "42",
      label: "Населени места",
      description: "в общината"
    },
    {
      icon: TrendingUp,
      value: "127",
      label: "Активни проекти",
      description: "в изпълнение"
    },
    {
      icon: ArrowRight,
      value: "98%",
      label: "Дигитализация",
      description: "на услугите"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-municipal-blue/5 to-municipal-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-municipal-navy mb-4">
            ОБЩИНА БОРОВО В ЦИФРИ
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-municipal-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-scale-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="pb-2 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br from-municipal-blue to-municipal-green flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-municipal-navy mb-2 group-hover:text-municipal-green transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-municipal-blue mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;