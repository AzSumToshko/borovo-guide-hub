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
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    За Общината
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background border rounded-md shadow-lg z-50">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">История</div>
                            <p className="text-sm text-muted-foreground">История на общината</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about/geography" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">География</div>
                            <p className="text-sm text-muted-foreground">Местоположение и природа</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about/symbols" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Символи</div>
                            <p className="text-sm text-muted-foreground">Герб и знаме</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about/tourism" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Туризъм</div>
                            <p className="text-sm text-muted-foreground">Забележителности</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Администрация
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background border rounded-md shadow-lg z-50">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/administration" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Структура</div>
                            <p className="text-sm text-muted-foreground">Организационна структура</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/administration/mayor" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Кмет</div>
                            <p className="text-sm text-muted-foreground">Кмет на общината</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/administration/deputy-mayors" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Заместник-кметове</div>
                            <p className="text-sm text-muted-foreground">Заместник-кметове</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/administration/departments" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Отдели</div>
                            <p className="text-sm text-muted-foreground">Административни отдели</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Дейности и услуги
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background border rounded-md shadow-lg z-50">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/services" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Електронни услуги</div>
                            <p className="text-sm text-muted-foreground">Онлайн услуги</p>
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
                    Актуално
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background border rounded-md shadow-lg z-50">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Новини</div>
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
                            <div className="font-semibold">Обяви</div>
                            <p className="text-sm text-muted-foreground">Официални съобщения</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/news/tenders" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Търгове и конкурси</div>
                            <p className="text-sm text-muted-foreground">Обществени поръчки</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Общински съвет
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background border rounded-md shadow-lg z-50">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/council" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Състав</div>
                            <p className="text-sm text-muted-foreground">Членове на съвета</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/council/sessions" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Сесии</div>
                            <p className="text-sm text-muted-foreground">Заседания и решения</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/council/decisions" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Решения</div>
                            <p className="text-sm text-muted-foreground">Архив на решенията</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/council/regulations" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                            <div className="font-semibold">Нормативни актове</div>
                            <p className="text-sm text-muted-foreground">Правилници и наредби</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
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