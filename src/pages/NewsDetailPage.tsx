import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, MessageSquare, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const NewsDetailPage = () => {
  const { id } = useParams();
  
  // This would normally come from an API or database
  const newsItem = {
    id: 1,
    title: "ТЕЧЕ СГРАДИ ЗА РЕГИСТРАЦИЯ НА КОЛАВНИЦИ",
    date: "сряда, 13 август 2025",
    category: "За гражданите",
    views: 245,
    comments: 6,
    image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
    content: `
      Ово је текст новини који описује детаље о регистрацији на колавници. 

      Важно је да знате све информације везане за овај процес. Грађани могу да се информишу о свим потребним документима и поступцима.

      За више информација можете се обратити у општинските служби или посетити наш веб сајт где ће бити објављени сви потребни детаљи.

      Процес регистрације је једноставан и брз, а наше особље је спремно да помогне свим грађанима који имају питања или потребу за додатне информације.

      Радно време служби је од понедељка до петка од 8:00 до 16:00 часова. Субота и недеља су нерадни дани.
    `
  };

  const relatedNews = [
    {
      id: 2,
      title: "ГОТОВО Е СЪОРЪЖЕНИЕТО, КОЕТО ЩЕ ОСИГУРИ ВОДА ЗА С. ЧЕРВЕН",
      date: "сряда, 13 август 2025",
      category: "Инфраструктура",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png"
    },
    {
      id: 3,
      title: "НОВА АКЦИЯ В АСЕНОВГРАД ЗА ИЗДАВАНЕ НА ЕЛЕКТРОННО ЗДРАВНО ДОСИЕ",
      date: "вторник, 12 август 2025", 
      category: "Здравеопазване",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png"
    },
    {
      id: 4,
      title: "ФИНАЛИЗИРА СЕ ПРОЕКТЪТ ЗА ПОДМЯНА НА УЛИЧНОТО ОСВЕТЛЕНИЕ В АСЕНОВГРАД",
      date: "понеделник, 10 август 2025",
      category: "Инфраструктура", 
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{newsItem.title} | Община Борово</title>
        <meta name="description" content={newsItem.content.substring(0, 160)} />
        <link rel="canonical" href={`https://borovo.bg/news/${id}`} />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
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
          <Link to="/news">
            <Button variant="outline" className="mb-4 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад към новините
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">НОВИНИ</h1>
          <p className="text-xl opacity-90">Детайли за новината</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{newsItem.category}</Badge>
                </div>
                <CardTitle className="text-3xl text-primary mb-4">
                  {newsItem.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {newsItem.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {newsItem.views} прегледа
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {newsItem.comments} коментара
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {newsItem.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{paragraph.trim()}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">ПОСЛЕДНИ НОВИНИ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedNews.map((item) => (
                  <Link key={item.id} to={`/news/${item.id}`}>
                    <div className="flex gap-3 hover:bg-muted/50 p-2 rounded transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <Badge variant="outline" className="text-xs mb-1">{item.category}</Badge>
                        <h4 className="text-sm font-medium line-clamp-2 text-primary hover:text-primary-dark transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">ПОПУЛЯРНИ НОВИНИ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedNews.slice(0, 2).map((item) => (
                  <Link key={item.id} to={`/news/${item.id}`}>
                    <div className="hover:bg-muted/50 p-2 rounded transition-colors">
                      <Badge variant="outline" className="text-xs mb-1">{item.category}</Badge>
                      <h4 className="text-sm font-medium line-clamp-2 text-primary hover:text-primary-dark transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;