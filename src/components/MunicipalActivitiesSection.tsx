import { Card } from "@/components/ui/card";

const MunicipalActivitiesSection = () => {
  const activities = [
    {
      title: "КУЛТУРА",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
      items: [
        "СОЦИАЛНИ УСЛУГИ",
        "ПРОГРАМИ И ПРОЕКТИ",
        "НАЦИОНАЛНА КАРТА НА СОЦИАЛНИТЕ УСЛУГИ"
      ]
    },
    {
      title: "ЕКОЛОГИЯ",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
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
      color: "bg-emerald-700",
      items: [
        "ЗАБЕЛЕЖИТЕЛНОСТИ",
        "МАНАСТИРИ",
        "МЕСТНИ ПРАЗНИЦИ",
        "ПРОГРАМА ЗА РАЗВИТИЕ НА ТУРИЗМА"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ОБЩИНСКИ ДЕЙНОСТИ
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`${activity.color} text-white px-4 py-3`}>
                <h3 className="font-bold text-sm text-center">
                  {activity.title}
                </h3>
              </div>
              
              <div className="bg-slate-600 text-white p-4">
                <ul className="space-y-2">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs flex items-start">
                      <span className="text-yellow-400 mr-2">▶</span>
                      <span className="hover:text-yellow-400 cursor-pointer transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MunicipalActivitiesSection;