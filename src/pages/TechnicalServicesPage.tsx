import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ТЕХНИЧЕСКИ УСЛУГИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Инфраструктура, строителство и обществени проекти</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Обща информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Техническата дирекция на Община Борово отговаря за планирането, изграждането и поддръжката на
              инфраструктурата – пътища, улична мрежа, канализация, осветление и обществени сгради.
            </p>
            <p>
              Екипът реализира инвестиционни намерения, координира строителни дейности и гарантира спазване на стандартите
              за безопасност и качество. Съвместно с други отдели се работи по енергийна ефективност и устойчиво развитие.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Приоритетни дейности</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Рехабилитация на уличната мрежа и подобряване на пътната безопасност</li>
              <li>Модернизация на водопроводна и канализационна мрежа</li>
              <li>Енергийна ефективност в обществени сгради</li>
              <li>Изграждане и поддръжка на детски и спортни площадки</li>
              <li>Разширяване на зелените площи и благоустрояване</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Процедури и разрешителни</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>За издаване на разрешение за строеж подайте заявление в Центъра за административно обслужване.</p>
            <p>Необходими документи: документ за собственост, инвестиционни проекти, становища от експлоатационни дружества.</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default TechnicalServicesPage;