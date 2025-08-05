import { Search, Phone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import borovoCoatOfArms from "@/assets/borovo-coat-of-arms.png";

const Header = () => {
  return (
    <header className="bg-background shadow-[var(--shadow-header)]">
      {/* Top utility bar */}
      <div className="bg-muted py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">А</span>
            <span className="text-muted-foreground">А+</span>
            <span className="font-bold">А</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground">Обратна връзка</span>
            <span className="text-muted-foreground">Контакти</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-4">
              <img 
                src={borovoCoatOfArms} 
                alt="Герб на Борово" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">ОБЩИНА</h1>
                <h1 className="text-2xl font-bold text-primary">БОРОВО</h1>
              </div>
            </a>
          </div>

          {/* Contact info and search */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <div>
                <div className="text-sm text-muted-foreground">Телефон</div>
                <div className="font-semibold">070010502</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-primary">
              <Bell className="w-5 h-5" />
              <div>
                <div className="text-sm text-muted-foreground">Портал за</div>
                <div className="font-semibold">СИГНАЛИ</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Input 
                placeholder="Търсене в сайта..." 
                className="w-64"
              />
              <Button size="icon" variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none" asChild>
                <a href="/about">ЗА ОБЩИНАТА</a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none" asChild>
                <a href="/administration">АДМИНИСТРАЦИЯ</a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none" asChild>
                <a href="/services">ДЕЙНОСТИ И УСЛУГИ</a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none" asChild>
                <a href="/news">АКТУАЛНО</a>
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none" asChild>
                <a href="/council">ОБЩИНСКИ СЪВЕТ</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;