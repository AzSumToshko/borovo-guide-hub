import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent } from "@/components/ui/card";

const AccessibilityDeclarationPage = () => {
  const { t } = useI18n();
  const title = `Декларация за достъпност | ${t("site.name")}`;
  const desc = "Декларация за достъпност на интернет страницата на Община Асеновград";
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/accessibility-declaration" />
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
            <h1 className="text-4xl font-bold mb-4">Декларация за достъпност</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">ДЕКЛАРАЦИЯ ЗА ДОСТЪПНОСТ НА СЪДЪРЖАНИЕТО НА ИНТЕРНЕТ СТРАНИЦАТА НА ОБЩИНА АСЕНОВГРАД</h2>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">РАЗДЕЛ 1</h3>
                <h4 className="font-semibold mb-2">ЗАДЪЛЖИТЕЛНО СЪДЪРЖАНИЕ</h4>
                
                <div className="space-y-4 text-sm">
                  <p>
                    Община Асеновград се ангажира да спазва достъпа до уебсайта си в съответствие с Чл. 15б от Закона за администрацията, приет с ДВ № 130 от 05.11.2018 г. и въведен в сила от 23.09.2020 г.
                  </p>
                  
                  <p>
                    Настоящата декларация за достъпността се отнася до: <br />
                    Уеб сайт на адрес: <a href="https://www.asenovgrad.bg" className="text-primary hover:underline">https://www.asenovgrad.bg</a>
                  </p>
                  
                  <p>
                    Съответствие. Колко е степента на съответствие на достъпното съдържание: <br />
                    На сайта (или на 15.01.2021-та)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">I. СТАТУС НА СЪОТВЕТСТВИЕ</h3>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <p>Съдържанието, споменаваното частично на несъответствията на основните стандарти поради установени и неустановени трудности съответствия.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">II. НЕСЪОТВЕТНО СЪДЪРЖАНИЕ (АКО Е НАЛИЧНО ВЪЗМОЖНОСТ 3 ВИД 1 ОТ 1)</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Описание и подредица на несъответствията</h4>
                    <p className="text-sm">Само тази, с което налични (преобразувани заявления)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Възможности за обход</h4>
                    <div className="text-sm space-y-2">
                      <p>PageRank 91.1.2 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                      <p>PageRank 91.1.3 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                      <p>PageRank 91.1.3 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Незрително (преобразувано заявление)</h3>
                <div className="text-sm space-y-2">
                  <p>PageRank 91.1.2 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                  <p>PageRank 91.1.3 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Незрително (преобразувано заявление)</h3>
                <div className="text-sm">
                  <p>PageRank 91.1.2 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Незрително на видео</h3>
                <div className="text-sm">
                  <p>PageRank 91.2.4 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Аудио описание (преобразувано заявление)</h3>
                <div className="text-sm">
                  <p>PageRank 91.2.3 сл EN 301 549<br />V2.1.1 (2021-03)<br />Неприложимо</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Незначителни отклонения</h3>
                <div className="text-sm space-y-2">
                  <p>PageRank 91.1.4 сл EN 301 549<br />V2.1.1 (2021-03)<br />Частично съответствие</p>
                  <p>Частично отклонение с накопяване на въздуха проверяване, разположено от притока нези с незаконните в подредения условия, които от частичното.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityDeclarationPage;