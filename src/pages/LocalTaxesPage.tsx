import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Download, CreditCard, Receipt } from "lucide-react";
import { Link } from "react-router-dom";

const LocalTaxesPage = () => {
  const services = [
    {
      title: "Сметка и кодове за внасяне на такси, наеми и др.",
      description: "Генериране на сметки и кодове за плащане",
      icon: CreditCard,
      link: "/local-taxes/payment-codes"
    },
    {
      title: "Подаване на данъчна декларация от ЗМДТ по електронен път",
      description: "Електронно подаване на данъчни декларации",
      icon: FileText,
      link: "/local-taxes/electronic-declaration"
    },
    {
      title: "Сметка и кодове за внасяне на наеми за пазарни и накси битови отпадъци",
      description: "Сметки за пазарни наеми и такса битови отпадъци",
      icon: Receipt,
      link: "/local-taxes/market-fees"
    },
    {
      title: "Бланки на декларации по ЗМДТ",
      description: "Свалени бланки за данъчни декларации",
      icon: Download,
      link: "/local-taxes/declaration-forms"
    },
    {
      title: "Калкулатор за изчисляване на данък за леки и товарни автомобили до 3,5 т.",
      description: "Калкулатор за данък върху превозните средства",
      icon: Calculator,
      external: true,
      link: "https://cartax.uslugi.io/#Русе/БОРОВО"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="text-4xl font-bold mb-4">МЕСТНИ ДАНЪЦИ И ТАКСИ</h1>
          <p className="text-xl opacity-90">Информация, размери и документи</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const content = (
              <Card key={index} className="h-full border-primary/20 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button className="mt-4 w-full" variant={service.external ? "outline" : "default"}>
                    {service.external ? "Отвори калкулатор" : "Вижте повече"}
                  </Button>
                </CardContent>
              </Card>
            );

            return service.external ? (
              <a key={index} href={service.link} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link key={index} to={service.link}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocalTaxesPage;