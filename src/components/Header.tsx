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
                    <div className="w-[800px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Left section with cards */}
                        <div className="col-span-6 grid grid-cols-2 gap-4">
                          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <img src="/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png" alt="Забележителности" className="w-full h-32 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-white font-semibold text-sm">ЗАБЕЛЕЖИТЕЛНОСТИ</h3>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <img src="/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png" alt="Галерия" className="w-full h-32 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-white font-semibold text-sm">ГАЛЕРИЯ</h3>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <div className="w-full h-32 bg-primary/20 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-primary font-semibold text-sm">ОБРАЗОВАНИЕ</div>
                              </div>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <div className="w-full h-32 bg-primary/20 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-primary font-semibold text-sm">ЗДРАВЕОПАЗВАНЕ</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right section with links */}
                        <div className="col-span-6 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Община Борово</h4>
                            <ul className="space-y-2">
                              <li><a href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">› Представяне</a></li>
                              <li><a href="/about/history" className="text-sm text-gray-600 hover:text-primary transition-colors">› История на града</a></li>
                              <li><a href="/about/geography" className="text-sm text-gray-600 hover:text-primary transition-colors">› Географска характеристика</a></li>
                              <li><a href="/about/demographics" className="text-sm text-gray-600 hover:text-primary transition-colors">› Демографска характеристика</a></li>
                              <li><a href="/about/villages" className="text-sm text-gray-600 hover:text-primary transition-colors">› Селища в общината</a></li>
                              <li><a href="/about/infrastructure" className="text-sm text-gray-600 hover:text-primary transition-colors">› Техническа инфраструктура</a></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Култура и туризъм</h4>
                            <ul className="space-y-2">
                              <li><a href="/culture/calendar" className="text-sm text-gray-600 hover:text-primary transition-colors">› Културен календар</a></li>
                              <li><a href="/culture/events" className="text-sm text-gray-600 hover:text-primary transition-colors">› Местни празници</a></li>
                              <li><a href="/culture/library" className="text-sm text-gray-600 hover:text-primary transition-colors">› Библиотеки</a></li>
                              <li><a href="/culture/museums" className="text-sm text-gray-600 hover:text-primary transition-colors">› Музей</a></li>
                              <li><a href="/tourism/info" className="text-sm text-gray-600 hover:text-primary transition-colors">› Туристически информационен център</a></li>
                            </ul>
                          </div>
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
                    <div className="w-[800px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Mayor section with image */}
                        <div className="col-span-4">
                          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4">
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Д-р Христо Грудев</h4>
                            <p className="text-xs text-gray-600 mb-3">Кмет на община Борово</p>
                            <div className="text-xs text-gray-600 space-y-1">
                              <p>Приемни дни:</p>
                              <p>за записване за приемен ден, позвънете на:</p>
                              <div className="space-y-1 mt-2">
                                <p>📞 (0331) 6-20-50</p>
                                <p>📞 (0331) 20-245</p>
                                <p>✉️ obshtina@asenovgrad.bg</p>
                              </div>
                            </div>
                            <button className="mt-3 bg-primary text-white px-3 py-1 rounded text-xs">Повече информация</button>
                          </div>
                        </div>
                        
                        {/* Administration links */}
                        <div className="col-span-8 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Общинска администрация</h4>
                            <ul className="space-y-2">
                              <li><a href="/administration/deputy-mayors" className="text-sm text-gray-600 hover:text-primary transition-colors">› Заместник кметове</a></li>
                              <li><a href="/administration/secretary" className="text-sm text-gray-600 hover:text-primary transition-colors">› Секретар</a></li>
                              <li><a href="/administration/architect" className="text-sm text-gray-600 hover:text-primary transition-colors">› Главен архитект</a></li>
                              <li><a href="/administration/structure" className="text-sm text-gray-600 hover:text-primary transition-colors">› Структура и контакти</a></li>
                              <li><a href="/administration/departments" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекции и отдели</a></li>
                              <li><a href="/administration/rules" className="text-sm text-gray-600 hover:text-primary transition-colors">› Кодекс за поведение</a></li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-2 mt-7">
                              <li><a href="/administration/management" className="text-sm text-gray-600 hover:text-primary transition-colors">› Програма за управление</a></li>
                              <li><a href="/administration/strategy" className="text-sm text-gray-600 hover:text-primary transition-colors">› Стратегии за развитие</a></li>
                              <li><a href="/administration/access" className="text-sm text-gray-600 hover:text-primary transition-colors">› Достъп до обществена информация</a></li>
                              <li><a href="/administration/declarations" className="text-sm text-gray-600 hover:text-primary transition-colors">› Декларации по чл.12 от ЗПУКИ</a></li>
                              <li><a href="/administration/iso" className="text-sm text-gray-600 hover:text-primary transition-colors">› Европейски стандарти ISO</a></li>
                              <li><a href="/administration/notifications" className="text-sm text-gray-600 hover:text-primary transition-colors">› Уведомления по чл.66 от АПК</a></li>
                            </ul>
                          </div>
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
                    <div className="w-[900px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Service category cards */}
                        <div className="col-span-5 grid grid-cols-3 gap-3">
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">🎭</div>
                            <div className="text-primary font-semibold text-xs">КУЛТУРА</div>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">🏫</div>
                            <div className="text-primary font-semibold text-xs">ОБРАЗОВАНИЕ</div>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">⚕️</div>
                            <div className="text-primary font-semibold text-xs">ЗДРАВЕОПАЗВАНЕ</div>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">👥</div>
                            <div className="text-primary font-semibold text-xs">СОЦИАЛНИ ДЕЙНОСТИ</div>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">🏃</div>
                            <div className="text-primary font-semibold text-xs">СПОРТНИ ДЕЙНОСТИ</div>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">🌿</div>
                            <div className="text-primary font-semibold text-xs">ЕКОЛОГИЯ</div>
                          </div>
                        </div>
                        
                        {/* Service links */}
                        <div className="col-span-7 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Административни услуги</h4>
                            <ul className="space-y-2">
                              <li><a href="/services/electronic" className="text-sm text-gray-600 hover:text-primary transition-colors">› Електронни услуги</a></li>
                              <li><a href="/services/administrative" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция административно и информационно обслужване</a></li>
                              <li><a href="/services/local-revenue" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция местни приходи и бюджет</a></li>
                              <li><a href="/services/accounting" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция счетоводство, финансово управление и контрол</a></li>
                              <li><a href="/services/investment" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция инвестиционна политика и екология</a></li>
                              <li><a href="/services/cadastre" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция кадастър и общинска собственост</a></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Други</h4>
                            <ul className="space-y-2">
                              <li><a href="/services/education" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция образование, култура, спорт и връзки с обществеността</a></li>
                              <li><a href="/services/social" className="text-sm text-gray-600 hover:text-primary transition-colors">› Дирекция социални дейности, здравеопазване и транспорт</a></li>
                              <li><a href="/services/tourism" className="text-sm text-gray-600 hover:text-primary transition-colors">› ОП "Туризъм"</a></li>
                              <li><a href="/services/covid" className="text-sm text-gray-600 hover:text-primary transition-colors">› Коронавирус COVID-19</a></li>
                              <li><a href="/services/surveys" className="text-sm text-gray-600 hover:text-primary transition-colors">› Анализи и анкети</a></li>
                            </ul>
                          </div>
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
                    <div className="w-[800px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-12 gap-6">
                        {/* News cards with icons */}
                        <div className="col-span-5 space-y-3">
                          <div className="bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">📰</div>
                              <div className="font-semibold text-sm">НОВИНИ</div>
                            </div>
                          </div>
                          <div className="bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">📅</div>
                              <div className="font-semibold text-sm">СЪБИТИЯ</div>
                            </div>
                          </div>
                          <div className="bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">📢</div>
                              <div className="font-semibold text-sm">СЪОБЩЕНИЯ</div>
                            </div>
                          </div>
                          <div className="bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">🏛️</div>
                              <div className="font-semibold text-sm">ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Calendar and useful links */}
                        <div className="col-span-7 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Календар</h4>
                            <div className="space-y-3">
                              <div className="bg-primary/10 rounded-lg p-3 hover:bg-primary/20 transition-colors cursor-pointer">
                                <div className="text-primary font-semibold text-xs">КУЛТУРЕН КАЛЕНДАР</div>
                              </div>
                              <div className="bg-primary/10 rounded-lg p-3 hover:bg-primary/20 transition-colors cursor-pointer">
                                <div className="text-primary font-semibold text-xs">СПОРТЕН КАЛЕНДАР</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Полезни връзки</h4>
                            <ul className="space-y-2">
                              <li><a href="/links/corruption" className="text-sm text-gray-600 hover:text-primary transition-colors">› Сигнали за корупция</a></li>
                              <li><a href="/links/ministry-economy" className="text-sm text-gray-600 hover:text-primary transition-colors">› Министерство на икономиката</a></li>
                              <li><a href="/links/ministry-labor" className="text-sm text-gray-600 hover:text-primary transition-colors">› Министерство на труда и социалната политика</a></li>
                              <li><a href="/links/eu-funds" className="text-sm text-gray-600 hover:text-primary transition-colors">› Структурни фондове на ЕС</a></li>
                              <li><a href="/links/association" className="text-sm text-gray-600 hover:text-primary transition-colors">› Сдружение "МИГ-Кърлен-Асеновград"</a></li>
                            </ul>
                          </div>
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
                    <div className="w-[800px] p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Council cards with images */}
                        <div className="col-span-4 space-y-3">
                          <div className="relative overflow-hidden rounded-lg">
                            <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                              <div className="text-primary font-semibold text-sm">РЕШЕНИЯ</div>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                            <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                              <div className="text-primary font-semibold text-sm">НОРМАТИВНИ АКТОВЕ ЗА ОБСЪЖДАНЕ</div>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                            <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                              <div className="text-primary font-semibold text-sm">НАРЕДБИ</div>
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-lg">
                            <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                              <div className="text-primary font-semibold text-sm">ОБЯВЛЕНИЯ</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Council structure and documents */}
                        <div className="col-span-8 grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Структура и състав</h4>
                            <ul className="space-y-2">
                              <li><a href="/council/chairman" className="text-sm text-gray-600 hover:text-primary transition-colors">› Председател</a></li>
                              <li><a href="/council/vice-chairmen" className="text-sm text-gray-600 hover:text-primary transition-colors">› Заместник председатели</a></li>
                              <li><a href="/council/councilors" className="text-sm text-gray-600 hover:text-primary transition-colors">› Общински съветници</a></li>
                              <li><a href="/council/groups" className="text-sm text-gray-600 hover:text-primary transition-colors">› Политически групи</a></li>
                              <li><a href="/council/commissions" className="text-sm text-gray-600 hover:text-primary transition-colors">› Комисии</a></li>
                              <li><a href="/council/declarations" className="text-sm text-gray-600 hover:text-primary transition-colors">› Декларации</a></li>
                            </ul>
                            <div className="mt-4 p-3 bg-gray-50 rounded">
                              <p className="text-xs text-gray-600">📞 (0331) 6-39-84</p>
                              <p className="text-xs text-gray-600">✉️ obs@asenovgrad.bg</p>
                              <p className="text-xs text-gray-600 mt-1">гр. АСЕНОВГРАД, пл. "АКАД. Н. ХАЙТОВ" 9, ЛЦ 4230</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-primary font-semibold text-sm mb-3 uppercase">Нормативна база</h4>
                            <ul className="space-y-2">
                              <li><a href="/council/decisions" className="text-sm text-gray-600 hover:text-primary transition-colors">› Решения</a></li>
                              <li><a href="/council/regulations" className="text-sm text-gray-600 hover:text-primary transition-colors">› Наредби</a></li>
                              <li><a href="/council/bylaws" className="text-sm text-gray-600 hover:text-primary transition-colors">› Правилници</a></li>
                              <li><a href="/council/acts-discussion" className="text-sm text-gray-600 hover:text-primary transition-colors">› Нормативни актове за обсъждане</a></li>
                              <li><a href="/council/announcements" className="text-sm text-gray-600 hover:text-primary transition-colors">› Обявления</a></li>
                              <li><a href="/council/programs" className="text-sm text-gray-600 hover:text-primary transition-colors">› Програми</a></li>
                              <li><a href="/council/reports" className="text-sm text-gray-600 hover:text-primary transition-colors">› Отчети общински съвет</a></li>
                              <li><a href="/council/protocols" className="text-sm text-gray-600 hover:text-primary transition-colors">› Протоколи на заседания</a></li>
                            </ul>
                          </div>
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