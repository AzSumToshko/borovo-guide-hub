import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Info } from "lucide-react";

const LocalTaxesPage = () => {
  const tariffs = [
    { name: "Данък сгради", value: "1.2‰ от данъчната оценка" },
    { name: "Такса битови отпадъци", value: "Според тарифата на общината" },
    { name: "Данък МПС", value: "Според мощност и екостандарт" },
  ];

  const docs = [
    { title: "Декларация по чл.14 ЗМДТ", type: "PDF" },
    { title: "Заявление за издаване на удостоверение за данъчни задължения", type: "DOCX" },
    { title: "Образец за плащане по банков път", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">МЕСТНИ ДАНЪЦИ И ТАКСИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Информация, размери и документи</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Размери на данъци и такси</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {tariffs.map((t, i) => (
              <div key={i} className="flex justify-between border-b py-3">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.value}</div>
              </div>
            ))}
            <div className="flex items-start gap-2 text-sm text-muted-foreground mt-4">
              <Info className="w-4 h-4 mt-0.5" />
              Плащания могат да се извършват на каса в общината или по банков път.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText className="w-5 h-5" /> Необходими документи
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {docs.map((d, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                <div>{d.title}</div>
                <div className="text-xs bg-secondary px-2 py-1 rounded">{d.type}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default LocalTaxesPage;