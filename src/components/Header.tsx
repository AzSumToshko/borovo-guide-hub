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
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">А</span>
            <span className="text-muted-foreground">А+</span>
            <span className="font-bold">А</span>
          </div>
          <div className="flex items-center gap-6">
            <button aria-label="Смяна на език" className="text-sm underline underline-offset-4" onClick={() => setLocale(locale === "bg" ? "en" : "bg")}>
              {locale === "bg" ? "EN" : "BG"}
            </button>
            <a href="/accessibility" className="text-muted-foreground hover:underline">{t("footer.accessibility")}</a>
            <a href="/sitemap" className="text-muted-foreground hover:underline">{t("footer.sitemap")}</a>
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

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground" role="navigation" aria-label="Главна навигация">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-0">
                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/about">{t("nav.about")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    {t("nav.admin")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">{t("nav.services")}</div>
                            <p className="text-sm text-muted-foreground">Онлайн услуги и описания</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services/documents" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Документи и формуляри</div>
                            <p className="text-sm text-muted-foreground">Образци и заявления</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services/local-taxes" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Местни данъци и такси</div>
                            <p className="text-sm text-muted-foreground">Информация и плащания</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services/technical" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Технически услуги</div>
                            <p className="text-sm text-muted-foreground">Инфраструктура и строителство</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services/social" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Социални услуги</div>
                            <p className="text-sm text-muted-foreground">Подкрепа и грижа</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    {t("nav.news")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Всички новини</div>
                            <p className="text-sm text-muted-foreground">Последни публикации</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news/events" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Събития</div>
                            <p className="text-sm text-muted-foreground">Календар и покани</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news/announcements" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Обяви и съобщения</div>
                            <p className="text-sm text-muted-foreground">Официални съобщения</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news/tenders" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Търгове и конкурси</div>
                            <p className="text-sm text-muted-foreground">Документи и условия</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/registers">{t("nav.registers")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/buyer-profile">{t("nav.buyer")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/declarations">{t("nav.declarations")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/access-to-information">{t("nav.access")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/contacts">{t("nav.contacts")}</a>
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" asChild>
                    <a href="/council">{t("nav.council")}</a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
      {/* Breadcrumbs */}
      <div className="bg-muted/60" role="region" aria-label="Иерархична навигация">
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;