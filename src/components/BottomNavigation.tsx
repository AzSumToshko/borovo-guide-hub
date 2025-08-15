import { ShoppingCart, Megaphone, FolderOpen, Smartphone, Receipt, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNavigation = () => {
  return (
    <nav className="hidden lg:block bg-primary/90 text-primary-foreground border-t border-primary-light/20" role="navigation" aria-label="Бърза навигация">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-0">
            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/buyer-profile">
                <ShoppingCart className="w-4 h-4" />
                Профил на купувач
              </a>
            </Button>

            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/news/tenders">
                <Megaphone className="w-4 h-4" />
                Обяви търгове и конкурси
              </a>
            </Button>

            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/projects">
                <FolderOpen className="w-4 h-4" />
                Проекти
              </a>
            </Button>

            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/services">
                <Smartphone className="w-4 h-4" />
                Електронни услуги
              </a>
            </Button>

            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/services/local-taxes">
                <Receipt className="w-4 h-4" />
                Местни данъци и такси
              </a>
            </Button>

            <Button variant="ghost" className="bg-transparent text-primary-foreground hover:bg-primary-light py-6 px-8 rounded-none text-sm flex items-center gap-2" asChild>
              <a href="/registers">
                <FileText className="w-4 h-4" />
                Публични регистри
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;