import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, MessageSquare } from "lucide-react";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Започва реконструкция на централния площад в Борово",
      date: "понеделник, 04 август 2025",
      category: "Инфраструктура",
      views: 245,
      comments: 12,
      content: "Община Борово официално обяви началото на мащабната реконструкция на централния градски площад. Проектът включва модернизация на пешеходните зони, нова осветителна система и създаване на зелени площи за отдих на гражданите.",
      featured: true
    },
    {
      id: 2,
      title: "Нови възможности за младежи в Община Борово",
      date: "събота, 02 август 2025",
      category: "Образование",
      views: 189,
      comments: 8,
      content: "Стартира нова програма за професионално развитие на младите хора в общината. Програмата включва безплатни курсове по дигитални технологии, предприемачество и устойчиво развитие.",
      featured: false
    },
    {
      id: 3,
      title: "Модернизация на училищната инфраструктура",
      date: "петък, 01 август 2025",
      category: "Образование",
      views: 312,
      comments: 15,
      content: "Община Борово инвестира в подобряване на образователната среда чрез ремонт и модернизация на училищните сгради. Проектът е финансиран със средства от Европейския съюз.",
      featured: false
    },
    {
      id: 4,
      title: "Екологични инициативи за чиста околна среда",
      date: "четвъртък, 31 юли 2025",
      category: "Екология",
      views: 156,
      comments: 6,
      content: "Започва нова кампания за опазване на околната среда и устойчиво развитие. Инициативата включва разширяване на рециклирането и създаване на нови зелени зони.",
      featured: false
    },
    {
      id: 5,
      title: "Културен фестивал ще се проведе през септември",
      date: "сряда, 30 юли 2025",
      category: "Култура",
      views: 278,
      comments: 22,
      content: "Традиционният културен фестивал на Борово ще се проведе на 15-17 септември. Програмата включва концерти, изложби и демонстрации на народни занаяти.",
      featured: false
    },
    {
      id: 6,
      title: "Нова спортна площадка за децата",
      date: "вторник, 29 юли 2025",
      category: "Спорт",
      views: 134,
      comments: 9,
      content: "Откриха нова многофункционална спортна площадка в центъра на града. Съоръжението е предназначено за деца и младежи и включва баскетболно и волейболно игрище.",
      featured: false
    }
  ];

  const categories = ["Всички", "Инфраструктура", "Образование", "Екология", "Култура", "Спорт"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">АКТУАЛНО</h1>
          <p className="text-xl text-center mt-4 opacity-90">Последни новини и събития от Община Борово</p>
        </div>
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

        {/* Featured News */}
        {newsItems.filter(item => item.featured).map((item) => (
          <Card key={item.id} className="mb-8 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">Важно</Badge>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              <CardTitle className="text-2xl text-primary hover:text-primary-dark cursor-pointer transition-colors">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
              <p className="text-muted-foreground leading-relaxed">{item.content}</p>
            </CardContent>
          </Card>
        ))}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.filter(item => !item.featured).map((item) => (
            <Card key={item.id} className="hover:shadow-[var(--shadow-card)] transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2 text-primary hover:text-primary-dark transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {item.views}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Archive Link */}
        <div className="text-center mt-12">
          <Card className="inline-block">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Архив на новините</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Разгледайте всички новини от предишни месеци
              </p>
              <div className="flex gap-2 justify-center">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Юли 2025
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Юни 2025
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Май 2025
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;