import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Calendar, Eye, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { useState } from "react";

const TendersPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  
  const title = `Търгове и конкурси | ${t("site.name")}`;
  const desc = "Актуални обществени поръчки, търгове и конкурси от Община Борово";

  const tenders = [
    { 
      id: "a-201-04-02-2025", 
      title: "ЗАПОВЕД № А-201/04.02.2025 Г. НА КМЕТА НА ОБЩИНА АСЕНОВГРАД ЗА ЗАБРАНА НА ПАШАТА В ГОРСКИТЕ ТЕРИТОРИИ.",
      publishDate: "31 декември 2025",
      views: 145,
      type: "ЗАПОВЕД"
    },
    { 
      id: "director-appointment-2025", 
      title: "ЗАПОВЕДТА НА ДИРЕКТОРА НА ОДЗ - ГР. ПЛОВДИВ ИЗДАДЕНИ ПО РЕДА НА ЧЛ. 37Б, АЛ. 1 ОТ ЗСП35 ЗА СТОПАНСКАТА 2025-2026 Г. И ГРАФИК ЗА ЗАСЕДАНИЯТА НА КОМИСИИТЕ ОПРЕДЕЛЕНИ В ЗАПОВЕДИТЕ",
      publishDate: "11 септември 2025",
      views: 89,
      type: "ЗАПОВЕД"
    },
    { 
      id: "architect-competition", 
      title: "СЪОБЩЕНИЕ ДО ДОПУСНАТИТЕ КАНДИДАТИ ДО КОНКУРСА ЗА ДЛЪЖНОСТТА \"ГЛАВЕН АРХИТЕКТ\" В ОБЩИНА АСЕНОВГРАД",
      publishDate: "22 август 2025",
      views: 67,
      type: "СЪОБЩЕНИЕ"
    },
    { 
      id: "architect-candidates", 
      title: "ОБЯВЯВАНЕ НА ДОПУСНАТИТЕ КАНДИДАТИ ЗА ДЛЪЖНОСТТА \"ГЛАВЕН АРХИТЕКТ\" В ОБЩИНА АСЕНОВГРАД",
      publishDate: "22 август 2025",
      views: 89,
      type: "ОБЯВЛЕНИЕ"
    },
    { 
      id: "dopk-32", 
      title: "СЪОБЩЕНИЯ ПО ЧЛ. 32 ОТ ДОПК",
      publishDate: "13 август 2025",
      views: 112,
      type: "СЪОБЩЕНИЕ"
    },
    { 
      id: "architect-competition-2", 
      title: "ОБЯВЛЕНИЕ ЗА ПРОВЕЖДАНЕ НА КОНКУРС ЗА ДЛЪЖНОСТТА \"ГЛАВЕН АРХИТЕКТ\" В ОБЩИНА АСЕНОВГРАД",
      publishDate: "04 август 2025",
      views: 203,
      type: "ОБЯВЛЕНИЕ"
    },
    { 
      id: "property-disposal", 
      title: "ОБЯВЛЕНИЕ ЗА ОТКРИВАНЕ НА ПРОЦЕДУРА ПО ПРИНУДИТЕЛНО ОТЧУЖДАВАНЕ НА ИМОТ 00702.508.446 ПО КК НА АСЕНОВГРАД ЗА УЛИЦА КЪМ КВАРТАЛ ЗАПАД.",
      publishDate: "26 юни 2025",
      views: 156,
      type: "ОБЯВЛЕНИЕ"
    },
    { 
      id: "dopk-32-2", 
      title: "СЪОБЩЕНИЯ ПО ЧЛ. 32 ОТ ДОПК",
      publishDate: "17 юни 2025",
      views: 98,
      type: "СЪОБЩЕНИЕ"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(tenders.length / itemsPerPage);
  
  const currentTenders = tenders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTenderClick = (tenderId: string) => {
    navigate(`/news/tenders/${tenderId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/news/tenders" />
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
            <h1 className="text-4xl font-bold text-center">ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ</h1>
            <p className="text-xl text-center mt-4 opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="space-y-4">
            {currentTenders.map((tender) => (
              <Card 
                key={tender.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary"
                onClick={() => handleTenderClick(tender.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                          {tender.type}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {tender.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Валидно до: {tender.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{tender.views}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TendersPage;