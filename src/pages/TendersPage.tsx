import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const TendersPage = () => {
  const tenders = [
    { title: "Открита процедура: Ремонт на улична мрежа", deadline: "30.08.2025", doc: "Тръжна документация", type: "ZIP" },
    { title: "Поръчка: Доставка на офис консумативи", deadline: "15.08.2025", doc: "Условия и образци", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ТЪРГОВЕ И КОНКУРСИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Актуални обществени поръчки и конкурси</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Активни процедури</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tenders.map((t, i) => (
              <div key={i} className="p-4 border rounded-md">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-sm text-muted-foreground">Краен срок: {t.deadline}</div>
                  </div>
                  <a href="/placeholder.svg" download className="inline-flex items-center gap-2 text-primary hover:text-primary-dark">
                    <Download className="w-4 h-4" /> {t.doc} ({t.type})
                  </a>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default TendersPage;