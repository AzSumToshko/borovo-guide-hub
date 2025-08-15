import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const ElectronicDeclarationPage = () => {
  const title = "Подаване на данъчна декларация от ЗМДТ по електронен път | Община Борово";
  const desc = "Електронно подаване на данъчни декларации съгласно ЗМДТ.";

  const requirements = [
    "Необходимо е да инсталирате на вашия компютър Квалифициран електронен подпис (КЕП).",
    "Необходимо е да притежавате профил в системата 'Електронно Връзване'.",
    "Уверете се, че имате инсталиран Adobe Reader."
  ];

  const steps = [
    "Изтеглете подходящо заявление от връзката в края на описанието на услугата.",
    "Съхранете електронната форма на вашия компютър.",
    "Отворете формата с Adobe Reader.",
    "Натиснете с мишката върху поле от формата, за да го попълните.",
    "Попълнете полетата във формата.",
    "Натиснете с мишката в полето подпис, за да подпишете електронно формата.",
    "След като подпишете, съхранете формата на вашия компютър."
  ];

  const declarations = [
    {
      title: "Данъчна декларация по чл. 14 от Закона за местните данъци и такси за облагане с данък върху недвижимите имоти",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 54, ал. 4 от Закона за местните данъци и такси за припискван лек или товарен автомобил с технически характеристики максимално допустима обща маса не повече от 3,5 тона",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 54, ал. 4 от Закона за местните данъци и такси за припискано платно превозно средство, с изключение на лекия автомобил с максимална маса не повече от 3,5 тона",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 54, ал. 4 от Закона за местните данъци и такси за припискано въздухоплавателно средство",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 54, ал. 4 от Закона за местните данъци и такси за припискано плавателно средство",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 14, ал. 2 от Закона за местните данъци и такси за необходимите данъци за определяне на данъка върху недвижимите имоти - упълномощени лица",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 27 от Закона за местните данъци и такси за освобождаване от данък върху недвижимите имоти или за ползване на данъчни облекчения",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 49, ал. 3 от закона за местните данъци и такси за облагане с данък при безвъзмездно придобиване на имущество",
      icon: "📄"
    },
    {
      title: "Данъчна декларация по чл. 32, ал. 1 от Закона за местните данъци и такси за облагане с данък върху наследствата",
      icon: "📄"
    },
    {
      title: "Декларация по чл. 71 от ЗМДТ за освобождаване от такса за сметосъбиране и сметоизвозване",
      icon: "📄"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/local-taxes/electronic-declaration" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />

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
          <h1 className="text-4xl font-bold mb-4">ПОДАВАНЕ НА ДАНЪЧНА ДЕКЛАРАЦИЯ ОТ ЗМДТ ПО ЕЛЕКТРОНЕН ПЪТ</h1>
          <p className="text-xl opacity-90">{desc}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Преди да започнете електронно заявяване:</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">За да заявите услугата:</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Създадената, попълнена и подписана форма е необходимо да изпратите чрез системата 'Електронно връзване' 
                към Общинска администрация Асеновград.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Налични декларации:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {declarations.map((declaration, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="text-2xl">{declaration.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm">{declaration.title}</p>
                  </div>
                  <a 
                    href="#" 
                    className="text-primary hover:text-primary-dark underline text-sm whitespace-nowrap"
                  >
                    Към формуляра
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ElectronicDeclarationPage;