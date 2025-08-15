import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import borovoHero from "@/assets/borovo-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, FileText, Calculator, Building2, Archive, ClipboardList } from "lucide-react";

const electronicServices = [
  {
    title: "ПОРТАЛ ЗА ЕЛЕКТРОННИ АДМИНИСТРАТИВНИ УСЛУГИ НА ОБЩИНА БОРОВО",
    description: "Достъп до всички електронни административни услуги",
    icon: Globe,
    url: "https://e-services.bg/municipality/borovo"
  },
  {
    title: "ДЕЛОВОДНА СПРАВКА",
    description: "Проверка на статуса на вашите документи",
    icon: FileText,
    url: "https://e-services.bg/registry/borovo"
  },
  {
    title: "ЗАЯВЛЕНИЯ КЪМ МЕСТНИ ДАНЪЦИ",
    description: "Подаване на заявления за местни данъци и такси",
    icon: Calculator,
    url: "https://taxes.borovo.bg"
  },
  {
    title: "НЕДВИЖИМИ ЗАЯВЛЕНИЯ",
    description: "Заявления свързани с недвижимо имущество",
    icon: Building2,
    url: "https://property.borovo.bg"
  },
  {
    title: "РЕГИСТЪР НА АКТОВЕ ЗА ОБЩИНСКА СОБСТВЕНОСТ",
    description: "Регистър на документи за общинска собственост",
    icon: Archive,
    url: "https://registry.borovo.bg"
  },
  {
    title: "ЕДИНЕН МОДЕЛ ЗА ЗАЯВЯВАНЕ",
    description: "Универсална форма за различни заявления",
    icon: ClipboardList,
    url: "https://unified-form.borovo.bg"
  }
];

const ElectronicServicesPage = () => {
  const { t } = useI18n();
  const title = `Електронни услуги | ${t("site.name")}`;
  const desc = "Електронни услуги на Община Борово - достъп до всички онлайн административни услуги.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/electronic-services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div 
          className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground py-20 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${borovoHero}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">ЕЛЕКТРОННИ УСЛУГИ НА ОБЩИНА БОРОВО</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero image section */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/627bea0f-1f17-4c4b-a0b3-339fbe6e6fc7.png"
              alt="Електронни услуги - ръце на таблет с свързани икони"
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electronicServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-l-primary"
                  onClick={() => window.open(service.url, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg text-primary leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        ЕЛЕКТРОННА УСЛУГА
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional info section */}
          <div className="mt-12 bg-card rounded-lg p-8 shadow-sm border-l-4 border-l-accent">
            <h2 className="text-2xl font-bold text-primary mb-4">Как да използвате електронните услуги</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Електронните услуги на Община Борово ви предоставят бърз и удобен достъп до административни процедури 24/7.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Регистрирайте се в съответната система с КЕП или електронна поща</li>
                <li>Попълнете необходимите данни в онлайн формите</li>
                <li>Прикачете изискваните документи в електронен вид</li>
                <li>Следете статуса на заявлението си в реално време</li>
                <li>Получете готовия документ електронно или го вземете на място</li>
              </ul>
              <p className="text-primary font-medium">
                За повече информация относно електронните услуги, моля свържете се с нас на телефон 070010502.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ElectronicServicesPage;