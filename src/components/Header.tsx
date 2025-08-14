import { Search, Phone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import borovoCoatOfArms from "@/assets/borovo-coat-of-arms.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useI18n } from "@/i18n";
import Breadcrumbs from "@/components/Breadcrumbs";
const Header = () => {
  const { locale, setLocale, t } = useI18n();
  return (
    <header className="bg-background shadow-[var(--shadow-header)]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-1 rounded">Прескочи към съдържанието</a>
      {/* Top utility bar */}
      <div className="bg-muted py-2" role="region" aria-label="Помощна лента">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground">ОБЩИНА БОРОВО</span>
            <span className="text-muted-foreground">© 2025 Всички права запазени</span>
            <a href="/information-protection" className="text-muted-foreground hover:underline">Защита на личните данни</a>
            <a href="/accessibility" className="text-muted-foreground hover:underline">Достъпност на съдържанието</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground">Уеб сайт и поддръжка: Antama ЕООД</span>
            <button aria-label="Смяна на език" className="text-sm underline underline-offset-4" onClick={() => setLocale(locale === "bg" ? "en" : "bg")}>
              {locale === "bg" ? "EN" : "BG"}
            </button>
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
                alt="Герб на Община Борово" 
                className="w-16 h-16 object-contain"
                loading="eager"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">Община</h1>
                <h2 className="text-2xl font-bold text-primary">БОРОВО</h2>
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

            <div className="flex items-center gap-2" role="search">
              <Input 
                placeholder={t("search.placeholder")}
                className="w-64"
                aria-label={t("search.placeholder")}
              />
              <Button size="icon" variant="outline" aria-label="Търсене">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-muted/60" role="region" aria-label="Иерархична навигация">
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;