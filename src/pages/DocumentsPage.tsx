import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const DocumentsPage = () => {
  const docs = [
    { title: "Заявление за адресна регистрация", date: "04.08.2025", size: "125 KB", type: "PDF" },
    { title: "Образец за данъчна декларация", date: "01.08.2025", size: "210 KB", type: "DOCX" },
    { title: "Заявление за детска градина", date: "29.07.2025", size: "98 KB", type: "PDF" },
    { title: "Разрешение за строеж - образец", date: "25.07.2025", size: "156 KB", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ДОКУМЕНТИ И ФОРМУЛЯРИ</h1>
          <p className="text-xl text-center mt-4 opacity-90">Образци, заявления и бланки за услуги</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText className="w-5 h-5" /> Списък с документи
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground">
                    <th className="py-3">Документ</th>
                    <th className="py-3">Дата</th>
                    <th className="py-3">Размер</th>
                    <th className="py-3">Формат</th>
                    <th className="py-3">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {docs.map((d, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-3 font-medium">{d.title}</td>
                      <td className="py-3 text-muted-foreground">{d.date}</td>
                      <td className="py-3 text-muted-foreground">{d.size}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 rounded bg-secondary text-xs">{d.type}</span>
                      </td>
                      <td className="py-3">
                        <a href="/placeholder.svg" download className="inline-flex items-center gap-2 text-primary hover:text-primary-dark">
                          <Download className="w-4 h-4" /> Изтегли
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex gap-2">
              <Button variant="outline">Търси в документи</Button>
              <Button variant="outline">Архив</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentsPage;