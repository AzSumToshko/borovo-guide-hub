import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "ТЕЧЕ СГРАДИ ЗА РЕГИСТРАЦИЯ НА КОЛАВНИЦИ",
      date: "сряда, 13 август 2025",
      category: "За гражданите",
      views: 245,
      comments: 6,
      content: "За гражданите и за фирмите.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: true
    },
    {
      id: 2,
      title: "ГОТОВО Е СЪОРЪЖЕНИЕТО, КОЕТО ЩЕ ОСИГУРИ ВОДА ЗА С. ЧЕРВЕН - СВИЛ АСЕНОВГРАД",
      date: "сряда, 13 август 2025",
      category: "Инфраструктура",
      views: 189,
      comments: 8,
      content: "Остават 72-часовите проби.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 3,
      title: "НОВА АКЦИЯ В АСЕНОВГРАД ЗА ИЗДАВАНЕ НА ЕЛЕКТРОННО ЗДРАВНО ДОСИЕ",
      date: "вторник, 12 август 2025",
      category: "Здравеопазване",
      views: 312,
      comments: 15,
      content: "Вторник, 12 август 2025. Услугата е безплатна и ще се осъществи от екип на РЗИ – Пловдив, със съдействието на община Асеновград.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 4,
      title: "ФИНАЛИЗИРА СЕ ПРОЕКТЪТ ЗА ПОДМЯНА НА УЛИЧНОТО ОСВЕТЛЕНИЕ В АСЕНОВГРАД",
      date: "понеделник, 10 август 2025",
      category: "Инфраструктура",
      views: 156,
      comments: 6,
      content: "Понеделник, 05 август 2025. Постигнати са добри резултати и досега покай за жителите на общината.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 5,
      title: "МЕРКИТЕ СРЕЩУ ШАРКАТА ПО ОВЦЕ И КОЗИ В АСЕНОВГРАДСКО – ЗА ОЩЕ 28 ДНИ",
      date: "четвъртък, 07 август 2025",
      category: "Животновъдство",
      views: 278,
      comments: 22,
      content: "четвъртък, 07 август 2025. Целта е да не се допусне разпространението на заболяването.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 6,
      title: "ЧАСТ ОТ СОЦИАЛНИТЕ УСЛУГИ В АСЕНОВГРАД РАБОТЯТ НАД КАПАЦИТЕТА",
      date: "четвъртък, 05 август 2025",
      category: "Социални услуги",
      views: 134,
      comments: 9,
      content: "четвъртък, 05 август 2025. Има справки брой заяви в Асеновград, получаваш специална подкрепа от общинските служби в с Овчарица.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 7,
      title: "ПРАВИЛА ЗА ИЗЛОЖЕНИ ЛОГОТО НА БИОСФЕРЕН ПАРК ЧЕРЕНГАГА СТЕНА",
      date: "четвъртък, 05 август 2025",
      category: "Екология",
      views: 198,
      comments: 11,
      content: "четвъртък, 05 август 2025. Извършене и съответствие на биосферен! Може да се получи всяко време и услуги. Важные всяко за извършване.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    },
    {
      id: 8,
      title: "В АСЕНОВГРАД СТАРТИРА ИНИЦИАТИВЕН КОНКУРС – ПРИКАЗКА СМЕТИ ПРЕЧ!",
      date: "вторник, 05 август 2025",
      category: "Екология",
      views: 165,
      comments: 7,
      content: "вторник, 05 август 2025. Възможностите за всички начинани! кампании се намират отговорност на поведение отпредвид.",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      featured: false
    }
  ];

  const categories = ["Всички", "За гражданите", "Инфраструктура", "Здравеопазване", "Животновъдство", "Социални услуги", "Екология"];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Новини | Община Борово</title>
        <meta name="description" content="Последни новини и събития от Община Борово" />
        <link rel="canonical" href="https://borovo.bg/news" />
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
          <h1 className="text-4xl font-bold mb-4">НОВИНИ</h1>
          <p className="text-xl opacity-90">Последни новини и събития от Община Борово</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-6">
          {newsItems.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`}>
              <Card className="hover:shadow-[var(--shadow-card)] transition-shadow cursor-pointer border-l-4 border-l-primary">
                <div className="flex">
                  <div className="flex-shrink-0 w-48 h-32">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 text-primary hover:text-primary-dark transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views} прегледа
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {item.comments} коментара
                      </div>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">{item.content}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>


        {/* Archive and navigation */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded">1</span>
            <span className="px-3 py-1 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded cursor-pointer transition-colors">2</span>
            <span className="px-3 py-1 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded cursor-pointer transition-colors">3</span>
            <span className="px-3 py-1 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded cursor-pointer transition-colors">...</span>
            <span className="px-3 py-1 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded cursor-pointer transition-colors">следваща</span>
            <span className="px-3 py-1 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded cursor-pointer transition-colors">последна</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;