import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Calendar, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ЗА ОБЩИНАТА</h1>
          <p className="text-xl text-center mt-4 opacity-90">Запознайте се с историята и развитието на Община Борово</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">История на Борово</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Община Борово е разположена в източната част на България и е част от област Русе. 
                  Градът има богата история, която започва от древни времена. През вековете Борово 
                  се е развивало като важен земеделски и търговски център в региона.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Днес общината обхваща площ от 217 кв. км и включва град Борово и няколко села. 
                  Тя се отличава с плодородни земи, развито селско стопанство и растяща индустрия.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Община Борово се гордее със своето културно наследство, красивата природа и 
                  гостоприемните хора, които живеят тук.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Икономическо развитие</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Икономиката на Община Борово се базира основно на земеделието, животновъдството 
                  и преработващата промишленост. Регионът е известен със своите качествени земеделски 
                  продукти и развиващия се туристически сектор.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  В последните години общината активно работи за привличане на инвестиции и 
                  създаване на нови работни места за местното население.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Основни данни
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Област:</div>
                  <div className="text-muted-foreground">Русе</div>
                </div>
                <div>
                  <div className="font-semibold">Площ:</div>
                  <div className="text-muted-foreground">217 кв. км</div>
                </div>
                <div>
                  <div className="font-semibold">Население:</div>
                  <div className="text-muted-foreground">~3,500 жители</div>
                </div>
                <div>
                  <div className="font-semibold">Кмет:</div>
                  <div className="text-muted-foreground">Иван Петров</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  Демография
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold">Възрастова структура:</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <div>0-18 години: 18%</div>
                    <div>19-65 години: 62%</div>
                    <div>65+ години: 20%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  Постижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Еко община 2023</li>
                  <li>• Най-добра малка община в област Русе</li>
                  <li>• Успешно реализирани ЕС проекти</li>
                  <li>• Развитие на туризма</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;