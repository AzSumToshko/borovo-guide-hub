import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const InformationProtectionPage = () => {
  const { t } = useI18n();
  const title = `Защита на личните данни | ${t("site.name")}`;
  const desc = "Защита на личните данни в Община Борово – политика и инструкции.";
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/information-protection" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div 
          className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground py-20 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/borovo-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Защита на личните данни</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary shadow-card hover:shadow-municipal transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Инструкция за мерките за защита на личните данни в община Асеновград
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Подробни инструкции за защитата на личните данни и мерките, които предприема община Асеновград за осигуряване на сигурността на информацията.
                    </p>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                    >
                      Изтегли документ
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-card hover:shadow-municipal transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-3">
                      Регламент (ЕС) 2016/679 на Европейския парламент и на съвета от 27 април 2016 година относно защитата на физическите лица във връзка с обработването на лични данни и относно свободното движение на такива данни и за отмяна на Директива 95/46/ЕО (Общ регламент относно защитата на данните)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Пълният текст на Европейския регламент за защита на личните данни (GDPR), който урежда защитата на физическите лица при обработване на лични данни.
                    </p>
                    <a 
                      href="#" 
                      className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                    >
                      Изтегли документ
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformationProtectionPage;