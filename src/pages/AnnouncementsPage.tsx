import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const AnnouncementsPage = () => {
  const items = [
    { title: "Съобщение за прекъсване на водоподаването", date: "03.08.2025", type: "PDF" },
    { title: "Обява за прием в детска градина", date: "30.07.2025", type: "PDF" },
    { title: "Съобщение за временна организация на движението", date: "28.07.2025", type: "DOCX" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ОБЯВИ И СЪОБЩЕНИЯ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Официални съобщения на Община Борово</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText className="w-5 h-5" /> Документи
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {items.map((it, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="text-xs text-muted-foreground">{it.date}</div>
                </div>
                <a href="/placeholder.svg" download className="inline-flex items-center gap-2 text-primary hover:text-primary-dark">
                  <Download className="w-4 h-4" /> {it.type}
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AnnouncementsPage;