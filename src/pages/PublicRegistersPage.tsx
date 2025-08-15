import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const PublicRegistersPage = () => {
  const { t } = useI18n();
  const title = `${t("nav.registers")} | ${t("site.name")}`;
  const descBg = "Публични регистри на Община Борово: достъп до актуални регистри и справки.";
  const descEn = "Public registers of Borovo Municipality: access to current registers and records.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={descBg} />
        <link rel="canonical" href="https://borovo.bg/registers" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descBg} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.registers")}</h1>
            <p className="opacity-90 mt-2">{descBg}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-primary">Договори и разрешения по заеми и природни отношения</h2>
            <div className="space-y-4 mb-6">
              <p className="text-sm text-muted-foreground">Съгласно регистри в реално време за:</p>
              <p className="text-sm text-muted-foreground">
                "Договори за помещения, за павилиони, за терени, за концесии, за съоръжения, ДМА и др, за взбивки, за 
                земеделски земи;"
              </p>
              <p className="text-sm text-muted-foreground">
                "Разрешения за РИЕ, за търговска дейност на открито, за поставяне на нека каравала клетка, за 
                максимелрой превоз и др."
              </p>
            </div>
            
            <div className="space-y-3">
              <a 
                href="https://tourism.government.bg/bg/kategorii/turizm/nacionalen-turisticheski-registar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Национален туристически регистър
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Общинска собственост - публична
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Общинска собственост - частна
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър на разпоредителните сделки
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър на гражданските дружества, в които участва общината
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър за юридическите лица с нестопанска цел, в които участва общината
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър на общинските предприятия
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър на търговските дружества с общинско участие
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span className="mr-2">▷</span>
                Регистър на концесиите
              </a>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-primary">Документи и регистри</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на съоръженията от находище на минерална вода "Наречености минерални бани", Община Асеновград
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на сгражденията на собствениците в сгради в режим на етажна собственост
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър за нерегулирано работно време на търговските обекти
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на технически паспорти на сгради 2016-2019 г.
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на обекти, въведени в експлоатация 2016-2017 г.
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на издадените разрешения за строеж 2016-2020 г.
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на фирми-изпълнители на СРД, доставки и услуги на обекти, възложени от общината през 12.2015 - 07.2025 г.
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Списък на блокосредносттелните разпореждения с блокове
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm group"
              >
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xs text-blue-600 font-semibold">PDF</span>
                </div>
                Регистър на издадените карти за паркиране на хора с трайни увреждания
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicRegistersPage;
