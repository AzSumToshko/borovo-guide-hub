import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SocialServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">СОЦИАЛНИ УСЛУГИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Подкрепа за уязвими групи и грижа за общността</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Домашен патронаж</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            Услугата предоставя топъл обяд и грижи за възрастни хора и лица с увреждания. Заявления се подават в общината.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Детски градини и социални програми</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed space-y-2">
            <p>Община Борово поддържа мрежа от детски градини и реализира програми за ранно детско развитие.</p>
            <p>Осигуряват се стипендии и подкрепа за семейства в нужда по утвърдени критерии.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Контакти</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Email: social@borovo.bg, Телефон: 070010506, Работно време: Пон-Пет 08:30-17:00
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SocialServicesPage;