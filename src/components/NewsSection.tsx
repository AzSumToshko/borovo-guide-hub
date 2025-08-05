import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Започва реконструкция на централния площад в Борово",
      date: "понеделник, 04 август 2025",
      excerpt: "Предстои мащабна реконструкция на централния градски площад с цел подобряване на инфраструктурата.",
      image: "/placeholder-news-1.jpg"
    },
    {
      id: 2,
      title: "Нови възможности за младежи в Община Борово",
      date: "събота, 02 август 2025",
      excerpt: "Стартира програма за професионално развитие на младите хора в общината.",
      image: "/placeholder-news-2.jpg"
    },
    {
      id: 3,
      title: "Модернизация на училищната инфраструктура",
      date: "петък, 01 август 2025",
      excerpt: "Община Борово инвестира в подобряване на образователната среда.",
      image: "/placeholder-news-3.jpg"
    },
    {
      id: 4,
      title: "Екологични инициативи за чиста околна среда",
      date: "четвъртък, 31 юли 2025",
      excerpt: "Започва кампания за опазване на околната среда и устойчиво развитие.",
      image: "/placeholder-news-4.jpg"
    }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">НОВИНИ И СЪБИТИЯ</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow cursor-pointer">
              <div className="h-48 bg-secondary"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight line-clamp-2 text-primary">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;