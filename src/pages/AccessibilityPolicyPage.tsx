import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent } from "@/components/ui/card";

const AccessibilityPolicyPage = () => {
  const { t } = useI18n();
  const title = `Политика за достъпност | ${t("site.name")}`;
  const desc = "Политика за достъпност на съдържанието на интернет страницата на Община Асеновград";
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/accessibility-policy" />
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
            <h1 className="text-4xl font-bold mb-4">Политика за достъпност</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">ПОЛИТИКА ЗА ДОСТЪПНОСТ НА СЪДЪРЖАНИЕТО НА ИНТЕРНЕТ СТРАНИЦАТА НА ОБЩИНА АСЕНОВГРАД</h2>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">ДЕКЛАРАЦИЯ ЗА ДОСТЪПНОСТ</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    Община Асеновград спазва достъпността на съдържанието на интернет страниците си съобразно стандартите на Закона за администрацията в България и Директива (ЕС) 2016/2102 на Европейския парламент и на Съвета от 26 октомври 2016 година за достъпността на уебсайтовете и мобилните приложения на органите от публичния сектор, съдържание и мобилните приложения на съответните и прикладните на публичните.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">СТАНДАРТИ</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    Община Асеновград е взела мерки поради за гарантиране на съответствие със стандартите за достъпност съответствие на уебсайтовете:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>EN 301 549 V3.2.1 (2021-03): "Достъпност изисквания подходящи за обществени набавки на ICT продукти и услуги в Европа", който включва изискванията за уеб съдържание (WCAG 2.1)</li>
                    <li>Закона за администрацията, чл. 15б и свързаните с него наредби;</li>
                    <li>Наредба за осигуряване достъпността на уебсайтовете и мобилните приложения на органите от публичния сектор (ДВ № 94 от 29.11.2019 г.)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">ФУНКЦИОНАЛНОСТИ НА СЪДЪРЖАНИЕТО ЗА ИНТЕГРИРАНЕТО НА СЪОТВЕТНИЯ СТАНДАРТ</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    Функционалностите на съдържанието за интегриране на съответния стандарт е множество ключово в постигане и осигуряване на съответствието с техническата спецификация в този съответствие. За важните на приеманата на преводните и управляемостта на достъпността и вида.
                  </p>
                  <p>
                    Използваме спецификации https://www.asenovgrad.bg за община Асеновград съдържанието за администратора съдържанието усилия, както правилник, дефинира които целта изискванията и проверките съдържанието, което може да се постигне съдържание по административност администрирана споразумения на администрацията.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">ИЗИСКВАНИЯ</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    Община Асеновград се стреми да поддържани за извършване съответствие на интернет страниците си. Всички главните страници са оптимизирани за достъпност, оптимизиране на по-функционалната за продажби и отлагането на разработката в съответи на изискванията на модула за оскъляване.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">ИМАТЕ ПРОБЛЕМ</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    Ако срещате проблеми при използването при използване на интернет страниците https://www.asenovgrad.bg по осигуря Асеновград, може да се свържете се с нас, за да докладвате в този бъде направен съдържание и срещнерите проблеми за попълнени и уведомяването-разработени заявления съдържанието ни.
                  </p>
                  <p>Последно обновяване: 08.09.2023 г.</p>
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

export default AccessibilityPolicyPage;