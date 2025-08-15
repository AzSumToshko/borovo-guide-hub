import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DeclarationFormsPage = () => {
  const title = "Бланки на декларации по ЗМДТ | Община Борово";
  const desc = "Изтегляне на бланки за данъчни декларации съгласно ЗМДТ.";

  const forms = [
    {
      title: "Декларация по чл. 14, ал. 1, ал. 4, ал. 5 и ал. 6 от Закона за местните данъци и такси за облагане с данък върху недвижимите имоти",
      filename: "declaration_art14.docx"
    },
    {
      title: "Декларация по чл. 4, ал. 2 от Закона за местните данъци и такси, за необходимите данъци за определяне на данъка върху недвижимите имоти на новопостроена сграда, завършена в зруб според на самостоятелните обекти в нея",
      filename: "declaration_art4.docx"
    },
    {
      title: "Декларация по чл. 27 от Закона за местните данъци и такси за освобождаване от данък върху недвижимите имоти или за ползване на данъчни облекчения",
      filename: "declaration_art27.docx"
    },
    {
      title: "Декларация за облагане с данък върху наследствата",
      filename: "inheritance_declaration.docx"
    },
    {
      title: "Декларация за облагане с данък при безвъзмездно придобиване на имущество, с изключение на недвижими имоти, обозначени в члены 13,15 чл. от ЗОК, спрямо физически лица",
      filename: "free_acquisition_declaration.docx"
    },
    {
      title: "Декларация за облагане с данък върху превозни средства",
      filename: "vehicle_tax_declaration.docx"
    },
    {
      title: "Декларация за облагане с данък върху превозно средство, без леки автомобили",
      filename: "heavy_vehicle_declaration.docx"
    },
    {
      title: "Декларация за облагане с данък върху патентен данък",
      filename: "patent_tax_declaration.docx"
    },
    {
      title: "Справка - декларация за брой реализирани месечни единици",
      filename: "monthly_units_declaration.docx"
    },
    {
      title: "Декларация за облагане с данък върху наследството превоз на пътници",
      filename: "passenger_transport_declaration.docx"
    },
    {
      title: "Искане за приобщаване или възстановяване на недвижимо платежно или събрано суми от данъци, такси и наложени от органите по приходите глоби и имуществени санкции",
      filename: "refund_request.docx"
    },
    {
      title: "Декларация за облагане с общински туристически данък",
      filename: "tourist_tax_declaration.docx"
    },
    {
      title: "Декларация за освобождаване от такса за сметосъбиране и сметоизвозване",
      filename: "waste_fee_exemption.docx"
    }
  ];

  const handleDownload = (filename: string, title: string) => {
    // In a real implementation, this would trigger a download
    console.log(`Downloading ${filename}: ${title}`);
    // You would typically have actual file URLs here
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/local-taxes/declaration-forms" />
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
          <h1 className="text-4xl font-bold mb-4">БЛАНКИ НА ДЕКЛАРАЦИИ ПО ЗМДТ</h1>
          <p className="text-xl opacity-90">{desc}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Бланки на декларации</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {forms.map((form, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1 pr-4">
                    <p className="text-sm">{form.title}</p>
                  </div>
                  <Button 
                    onClick={() => handleDownload(form.filename, form.title)}
                    variant="outline"
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Към формуляра
                  </Button>
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

export default DeclarationFormsPage;