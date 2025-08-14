import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const MunicipalActivitiesSection = () => {
  const activities = [
    {
      title: "КУЛТУРА",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-purple-600 to-purple-800",
      items: [
        "КУЛТУРЕН КАЛЕНДАР",
        "БИБЛИОТЕКИ",
        "МУЗЕИ",
        "МАНАСТИРИ",
        "МЕСТНИ ПРАЗНИЦИ"
      ]
    },
    {
      title: "ОБРАЗОВАНИЕ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-blue-600 to-blue-800",
      items: [
        "ОБРАЗОВАНИЕ",
        "УЧЕБНИ ЗАВЕДЕНИЯ",
        "ДЕТСКИ ЗАВЕДЕНИЯ",
        "ДЕЛЕГИРАНИ БЮДЖЕТИ",
        "РЕГИСТРИ"
      ]
    },
    {
      title: "ЗДРАВЕОПАЗВАНЕ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-emerald-600 to-emerald-800",
      items: [
        "БОЛНИЧНА И ИЗВЪН БОЛНИЧНА ПОМОЩ",
        "ДЕТСКО И УЧИЛИЩНО ЗДРАВЕОПАЗВАНЕ",
        "ДЕТСКА МЛЕЧНА КУХНЯ",
        "ДЕТСКА ЯСЛА"
      ]
    },
    {
      title: "СОЦИАЛНИ ДЕЙНОСТИ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-orange-600 to-orange-800",
      items: [
        "СОЦИАЛНИ УСЛУГИ",
        "ПРОГРАМИ И ПРОЕКТИ",
        "НАЦИОНАЛНА КАРТА НА СОЦИАЛНИТЕ УСЛУГИ"
      ]
    },
    {
      title: "ЕКОЛОГИЯ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-green-600 to-green-800",
      items: [
        "ПРОГРАМА ЗА УПРАВЛЕНИЕ НА ОТПАДЪЦИТЕ 2021 - 2028 Г.",
        "ПЛОЩАДКИ ЗА ОТПАДЪЦИ",
        "ПРОГРАМА КАВ",
        "СЕВЕЗО",
        "ПОМОЩ ЗА НАРАНЕТО ИЛИ БОЛНО БЕЗСТОПАНСТВЕНО КУЧЕ, КЪДЕ?"
      ]
    },
    {
      title: "СПОРТ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-red-600 to-red-800",
      items: [
        "СПОРТЕН КАЛЕНДАР",
        "СПОРТНИ ОРГАНИЗАЦИИ",
        "СПОРТНИ ОБЕКТИ",
        "ПРОГРАМА ЗА РАЗВИТИЕ НА ФИЗИЧЕСКОТО ВЪЗПИТАНИЕ И СПОРТ"
      ]
    },
    {
      title: "БЮДЖЕТ И ФИНАНСИ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-indigo-600 to-indigo-800",
      items: [
        "БЮДЖЕТ",
        "МЕСЕЧНИ ОТЧЕТИ",
        "ГОДИШНИ ФИНАНСОВИ ОТЧЕТИ",
        "КАПИТАЛОВИ РАЗХОДИ"
      ]
    },
    {
      title: "ТУРИЗЪМ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      gradient: "from-teal-600 to-teal-800",
      items: [
        "ЗАБЕЛЕЖИТЕЛНОСТИ",
        "МАНАСТИРИ",
        "МЕСТНИ ПРАЗНИЦИ",
        "ПРОГРАМА ЗА РАЗВИТИЕ НА ТУРИЗМА"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            ОБЩИНСКИ ДЕЙНОСТИ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className={`bg-gradient-to-r ${activity.gradient} text-white px-6 py-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <h3 className="font-bold text-sm text-center tracking-wide relative z-10">
                  {activity.title}
                </h3>
              </div>
              
              <div className="bg-slate-700 dark:bg-slate-900 text-white p-6 relative flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <ul className="space-y-3 flex-1">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs flex items-start group/item cursor-pointer">
                      <ArrowRight className="text-accent mr-3 mt-0.5 flex-shrink-0 w-3 h-3 transition-transform duration-300 group-hover/item:translate-x-1" />
                      <span className="hover:text-accent transition-colors duration-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <button className="w-full text-xs text-accent hover:text-white font-medium transition-colors duration-300 flex items-center justify-center group/btn">
                    Разгледай всички
                    <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MunicipalActivitiesSection;