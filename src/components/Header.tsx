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
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center">
            <NavigationMenu className="relative">
              <NavigationMenuList className="flex items-center space-x-0">
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    За Общината
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/about" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">История</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">История на общината</p>
                          </a>
                        </div>
                        <div>
                          <a href="/about/geography" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">География</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Местоположение и природа</p>
                          </a>
                        </div>
                        <div>
                          <a href="/about/symbols" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Символи</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Герб и знаме</p>
                          </a>
                        </div>
                        <div>
                          <a href="/about/tourism" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Туризъм</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Забележителности</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Администрация
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/administration" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Структура</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Организационна структура</p>
                          </a>
                        </div>
                        <div>
                          <a href="/administration/mayor" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Кмет</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Кмет на общината</p>
                          </a>
                        </div>
                        <div>
                          <a href="/administration/deputy-mayors" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Заместник-кметове</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Заместник-кметове</p>
                          </a>
                        </div>
                        <div>
                          <a href="/administration/departments" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Отдели</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Административни отдели</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Дейности и услуги
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/services" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Електронни услуги</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Онлайн услуги</p>
                          </a>
                        </div>
                        <div>
                          <a href="/services/documents" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Документи и формуляри</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Образци и заявления</p>
                          </a>
                        </div>
                        <div>
                          <a href="/services/local-taxes" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Местни данъци и такси</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Информация и плащания</p>
                          </a>
                        </div>
                        <div>
                          <a href="/services/social" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Социални услуги</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Подкрепа и грижа</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Актуално
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/news" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Новини</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Последни публикации</p>
                          </a>
                        </div>
                        <div>
                          <a href="/news/events" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Събития</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Календар и покани</p>
                          </a>
                        </div>
                        <div>
                          <a href="/news/announcements" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Обяви</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Официални съобщения</p>
                          </a>
                        </div>
                        <div>
                          <a href="/news/tenders" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Търгове и конкурси</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Обществени поръчки</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    Общински съвет
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <a href="/council" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Състав</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Членове на съвета</p>
                          </a>
                        </div>
                        <div>
                          <a href="/council/sessions" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Сесии</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Заседания и решения</p>
                          </a>
                        </div>
                        <div>
                          <a href="/council/decisions" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Решения</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Архив на решенията</p>
                          </a>
                        </div>
                        <div>
                          <a href="/council/regulations" className="group block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Нормативни актове</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Правилници и наредби</p>
                          </a>
                        </div>
                      </div>
                    </div>
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