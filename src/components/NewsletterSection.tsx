import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, FileText, ChevronRight, Users } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Моля въведете валиден имейл адрес");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    toast.success("Успешно се записахте за бюлетина!");
    setEmail("");
  };

  const surveys = [
    {
      id: 1,
      title: "Градска среда и инфраструктура",
      description: "Вашето мнение за състоянието на градската среда",
      participants: 234,
      deadline: "2025-02-15",
      isActive: true
    },
    {
      id: 2,
      title: "Социални услуги в общината",
      description: "Анкета за качеството на социалните услуги",
      participants: 156,
      deadline: "2025-01-30",
      isActive: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Newsletter Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95 backdrop-blur-sm h-full flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Бюлетин на общината
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Получавайте актуална информация за събития, проекти и важни съобщения директно в пощенската си кутия.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Въведете вашия имейл адрес"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="sm:w-auto w-full bg-primary hover:bg-primary/90"
                  >
                    {isLoading ? (
                      "Записване..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Записване
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="bg-muted/30 rounded-lg p-4 mt-6">
                <h4 className="font-medium text-sm mb-2 text-foreground">В бюлетина ще намерите:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Актуални новини и събития</li>
                  <li>• Информация за нови проекти</li>
                  <li>• Важни съобщения и обяви</li>
                  <li>• Възможности за участие</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Surveys Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95 backdrop-blur-sm h-full flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <FileText className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Активни анкети
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Участвайте в анкетите на общината и помогнете за подобряване на услугите и градската среда.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <Link to="/surveys">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Виж всички анкети
                  </Button>
                </Link>

                <div className="bg-accent/20 rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2 text-foreground">Защо е важно да участвате?</h4>
                  <p className="text-sm text-muted-foreground">
                    Вашето мнение играе ключова роля за бъдещето на нашия град. Чрез участие в анкетите помагате на общината да разбере реалните нужди и приоритети на жителите, да взема по-информирани и ефективни решения, да планира нови проекти, които наистина ще имат значение за хората, и да подобрява качеството на живот, сигурността, инфраструктурата и услугите.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;