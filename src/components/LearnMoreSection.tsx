import { Card } from "@/components/ui/card";
import { Camera, MapPin, Building, BookOpen } from "lucide-react";
import galleryShowcase from "@/assets/gallery-showcase.jpg";

const LearnMoreSection = () => {
  const learnMoreItems = [
    {
      title: "ГАЛЕРИЯ",
      subtitle: "Разгледайте снимки от Борово",
      image: galleryShowcase,
      icon: Camera,
      type: "large",
      link: "/gallery"
    },
    {
      title: "ЕЛЕКТРОНЕН ГИД", 
      subtitle: "Вашият пътеводител из града",
      icon: MapPin,
      type: "small",
      link: "/electronic-guide"
    },
    {
      title: "ТУРИСТИЧЕСКИ ЦЕНТЪР",
      subtitle: "Информация за посетители", 
      icon: Building,
      type: "small",
      link: "/tourist-center"
    },
    {
      title: "ИСТОРИЧЕСКИ МУЗЕЙ БОРОВО",
      subtitle: "Открийте историята на града",
      icon: BookOpen,
      type: "small", 
      link: "/historical-museum"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            НАУЧЕТЕ ПОВЕЧЕ ЗА БОРОВО
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Large Gallery Card */}
          <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 row-span-2">
            <div className="relative h-80 lg:h-full overflow-hidden">
              <img 
                src={learnMoreItems[0].image}
                alt={learnMoreItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <Camera className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">{learnMoreItems[0].title}</h3>
                </div>
                <p className="text-white/90 text-sm">{learnMoreItems[0].subtitle}</p>
              </div>
            </div>
          </Card>

          {/* Right Column - 3 smaller cards */}
          <div className="grid grid-cols-1 gap-6">
            {learnMoreItems.slice(1).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index + 1}
                  className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white h-24"
                >
                  <div className="flex items-center h-full p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;