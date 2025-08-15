import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Share2, Download, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const TenderDetailPage = () => {
  const { t } = useI18n();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Mock data - in a real app this would come from an API
  const tenderData = {
    id: id || "",
    title: "СЪОБЩЕНИЕ ДО ДОПУСНАТИТЕ КАНДИДАТИ ДО КОНКУРСА ЗА ДЛЪЖНОСТТА \"ГЛАВЕН АРХИТЕКТ\" В ОБЩИНА АСЕНОВГРАД",
    type: "СЪОБЩЕНИЕ",
    publishDate: "22 август 2025",
    lastModified: "11:05:44, 12 август 2025",
    views: 217,
    content: `
Във връзка с провеждане на конкурса за длъжността "Главен архитект" в Община Асеновград информираме допуснатите кандидати до конкурса, че трябва да се явят за решаване на тест на 21.08.2025 г. от 10:00 часа в зала № 305 в сградата на Община Асеновград.
    `,
    documents: [
      { name: "Съобщение", icon: "💬", action: "Съобщение" },
      { name: "Свалене в pdf", icon: "📄", action: "Свалене в pdf" }
    ],
    relatedItems: [
      "ЗАПОВЕД № А-201/04.02.2025 Г. НА КМЕТА НА ОБЩИНА АСЕНОВГРАД ЗА ЗАБРАНА НА ПАШАТА В ГОРСКИТЕ ТЕРИТОРИИ.",
      "ЗАПОВЕДТА НА ДИРЕКТОРА НА ОДЗ - ГР. ПЛОВДИВ ИЗДАДЕНИ ПО РЕДА НА ЧЛ. 37Б, АЛ. 1 ОТ ЗСП35 ЗА СТОПАНСКАТА 2025-2026 Г. И ГРАФИК ЗА ЗАСЕДАНИЯТА НА КОМИСИИТЕ ОПРЕДЕЛЕНИ В ЗАПОВЕДИТЕ",
      "ОБЯВЯВАНЕ НА ДОПУСНАТИТЕ КАНДИДАТИ ЗА ДЛЪЖНОСТТА \"ГЛАВЕН АРХИТЕКТ\" В ОБЩИНА АСЕНОВГРАД"
    ]
  };
  
  const title = `${tenderData.title} | Търгове и конкурси | ${t("site.name")}`;
  const desc = "Детайли за търг/конкурс от Община Борово";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://borovo.bg/news/tenders/${id}`} />
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
            <Button 
              variant="ghost" 
              onClick={() => navigate('/news/tenders')}
              className="text-primary-foreground hover:bg-primary-foreground/10 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Обратно към търгове
            </Button>
            <h1 className="text-4xl font-bold">ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ</h1>
            <p className="text-xl opacity-90 mt-2">Детайли за търг/конкурс</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <Card className="mb-6">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                        {tenderData.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-4">{tenderData.title}</CardTitle>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Валидно до: {tenderData.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{tenderData.views}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Споделяне
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-4">
                  Последна промяна: {tenderData.lastModified}
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="font-semibold mb-2">СЪОБЩЕНИЕ</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tenderData.content.trim()}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-6 pt-4 border-t">
                  {tenderData.documents.map((doc, index) => (
                    <Button key={index} variant="outline" className="flex items-center gap-2">
                      {doc.icon === "💬" ? (
                        <Share2 className="w-4 h-4" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                      {doc.action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Items Section */}
            <Card>
              <CardHeader>
                <CardTitle>ВИЖ ОЩЕ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tenderData.relatedItems.map((item, index) => (
                    <div key={index} className="p-3 border rounded hover:bg-accent/5 transition-colors">
                      <h4 className="font-medium text-primary hover:text-primary-dark cursor-pointer">
                        {item}
                      </h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TenderDetailPage;