import { Search, Phone, Bell, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import borovoCoatOfArms from "@/assets/borovo-coat-of-arms.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useI18n } from "@/i18n";
import Breadcrumbs from "@/components/Breadcrumbs";

const Header = () => {
  const { locale, setLocale, t } = useI18n();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="bg-background shadow-[var(--shadow-header)]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-1 rounded">Прескочи към съдържанието</a>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-2 lg:gap-4">
            <a href="/" className="flex items-center gap-2 lg:gap-4">
              <img 
                src={borovoCoatOfArms} 
                alt="Герб на Община Борово" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                loading="eager"
              />
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">Община</h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">БОРОВО</h2>
              </div>
            </a>
          </div>

          {/* Desktop Contact info and search */}
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Търсене"
            >
              <Search className="w-4 h-4" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Меню">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-4 border-b">
                    <SheetTitle className="text-left">Навигация</SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex-1 overflow-y-auto">
                    {/* Main Navigation Accordions */}
                    <div className="p-4">
                      <h3 className="font-semibold text-primary mb-3">Основни секции</h3>
                      <Accordion type="single" collapsible className="w-full space-y-1">
                        <AccordionItem value="about" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            За Общината
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/about" className="block py-2 px-2 text-sm hover:bg-muted rounded">Представяне</a>
                              <a href="/about/history" className="block py-2 px-2 text-sm hover:bg-muted rounded">История на града</a>
                              <a href="/about/geography" className="block py-2 px-2 text-sm hover:bg-muted rounded">Географска характеристика</a>
                              <a href="/about/demographics" className="block py-2 px-2 text-sm hover:bg-muted rounded">Демографска характеристика</a>
                              <a href="/about/villages" className="block py-2 px-2 text-sm hover:bg-muted rounded">Селища в общината</a>
                              <a href="/about/infrastructure" className="block py-2 px-2 text-sm hover:bg-muted rounded">Техническа инфраструктура</a>
                              <a href="/about/vision" className="block py-2 px-2 text-sm hover:bg-muted rounded">Визия на община Борово</a>
                              <a href="/about/citizens" className="block py-2 px-2 text-sm hover:bg-muted rounded">Почетни граждани</a>
                              <a href="/culture/calendar" className="block py-2 px-2 text-sm hover:bg-muted rounded">Културен календар</a>
                              <a href="/culture/events" className="block py-2 px-2 text-sm hover:bg-muted rounded">Местни празници</a>
                              <a href="/culture/library" className="block py-2 px-2 text-sm hover:bg-muted rounded">Библиотеки</a>
                              <a href="/culture/reading-room" className="block py-2 px-2 text-sm hover:bg-muted rounded">Читалища</a>
                              <a href="/culture/museums" className="block py-2 px-2 text-sm hover:bg-muted rounded">Музей</a>
                              <a href="/culture/monasteries" className="block py-2 px-2 text-sm hover:bg-muted rounded">Манастири</a>
                              <a href="/tourism/info" className="block py-2 px-2 text-sm hover:bg-muted rounded">Туристически информационен център</a>
                              <a href="/tourism/guide" className="block py-2 px-2 text-sm hover:bg-muted rounded">Електронен гид</a>
                              <a href="/awards/letters" className="block py-2 px-2 text-sm hover:bg-muted rounded">Благодарствени писма и позадравителни адреси</a>
                              <a href="/awards/citizens" className="block py-2 px-2 text-sm hover:bg-muted rounded">Побратимени градове</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="administration" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Администрация
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/administration" className="block py-2 px-2 text-sm hover:bg-muted rounded">Кмет</a>
                              <a href="/administration/deputy-mayors" className="block py-2 px-2 text-sm hover:bg-muted rounded">Заместник-кметове</a>
                              <a href="/administration/structure" className="block py-2 px-2 text-sm hover:bg-muted rounded">Организационна структура</a>
                              <a href="/administration/employees" className="block py-2 px-2 text-sm hover:bg-muted rounded">Служители</a>
                              <a href="/administration/jobs" className="block py-2 px-2 text-sm hover:bg-muted rounded">Работни места</a>
                              <a href="/administration/register" className="block py-2 px-2 text-sm hover:bg-muted rounded">Публичен регистър</a>
                              <a href="/administration/budget" className="block py-2 px-2 text-sm hover:bg-muted rounded">Общински бюджет</a>
                              <a href="/administration/reports" className="block py-2 px-2 text-sm hover:bg-muted rounded">Отчети</a>
                              <a href="/administration/tenders" className="block py-2 px-2 text-sm hover:bg-muted rounded">Обществени поръчки</a>
                              <a href="/administration/declarations" className="block py-2 px-2 text-sm hover:bg-muted rounded">Декларации за имоти</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="council" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Общински съвет
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/council" className="block py-2 px-2 text-sm hover:bg-muted rounded">Председател</a>
                              <a href="/council/members" className="block py-2 px-2 text-sm hover:bg-muted rounded">Общински съветници</a>
                              <a href="/council/commissions" className="block py-2 px-2 text-sm hover:bg-muted rounded">Комисии</a>
                              <a href="/council/sessions" className="block py-2 px-2 text-sm hover:bg-muted rounded">Сесии</a>
                              <a href="/council/decisions" className="block py-2 px-2 text-sm hover:bg-muted rounded">Решения</a>
                              <a href="/council/statutes" className="block py-2 px-2 text-sm hover:bg-muted rounded">Правилници и наредби</a>
                              <a href="/council/calendar" className="block py-2 px-2 text-sm hover:bg-muted rounded">Календар на заседанията</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="documents" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Документи и решения
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/documents" className="block py-2 px-2 text-sm hover:bg-muted rounded">Решения на ОбС</a>
                              <a href="/documents/mayor-orders" className="block py-2 px-2 text-sm hover:bg-muted rounded">Заповеди на кмета</a>
                              <a href="/documents/statutes" className="block py-2 px-2 text-sm hover:bg-muted rounded">Наредби</a>
                              <a href="/documents/plans" className="block py-2 px-2 text-sm hover:bg-muted rounded">Планове и програми</a>
                              <a href="/documents/strategies" className="block py-2 px-2 text-sm hover:bg-muted rounded">Стратегии</a>
                              <a href="/documents/budget" className="block py-2 px-2 text-sm hover:bg-muted rounded">Бюджетни документи</a>
                              <a href="/documents/reports" className="block py-2 px-2 text-sm hover:bg-muted rounded">Отчети</a>
                              <a href="/documents/forms" className="block py-2 px-2 text-sm hover:bg-muted rounded">Формуляри</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="services" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Услуги
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/services" className="block py-2 px-2 text-sm hover:bg-muted rounded">Електронни услуги</a>
                              <a href="/services/social" className="block py-2 px-2 text-sm hover:bg-muted rounded">Социални услуги</a>
                              <a href="/services/technical" className="block py-2 px-2 text-sm hover:bg-muted rounded">Технически услуги</a>
                              <a href="/services/local-taxes" className="block py-2 px-2 text-sm hover:bg-muted rounded">Местни данъци и такси</a>
                              <a href="/services/certificates" className="block py-2 px-2 text-sm hover:bg-muted rounded">Справки и удостоверения</a>
                              <a href="/services/permits" className="block py-2 px-2 text-sm hover:bg-muted rounded">Разрешителни</a>
                              <a href="/services/applications" className="block py-2 px-2 text-sm hover:bg-muted rounded">Заявления</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="news" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Новини
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/news" className="block py-2 px-2 text-sm hover:bg-muted rounded">Всички новини</a>
                              <a href="/news/municipal" className="block py-2 px-2 text-sm hover:bg-muted rounded">Общински новини</a>
                              <a href="/news/projects" className="block py-2 px-2 text-sm hover:bg-muted rounded">Проекти</a>
                              <a href="/news/tenders" className="block py-2 px-2 text-sm hover:bg-muted rounded">Обяви за търгове</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="events" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Събития
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/events" className="block py-2 px-2 text-sm hover:bg-muted rounded">Предстоящи събития</a>
                              <a href="/events/calendar" className="block py-2 px-2 text-sm hover:bg-muted rounded">Календар на събитията</a>
                              <a href="/events/culture" className="block py-2 px-2 text-sm hover:bg-muted rounded">Културни събития</a>
                              <a href="/events/sport" className="block py-2 px-2 text-sm hover:bg-muted rounded">Спортни събития</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="announcements" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Обяви
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/announcements" className="block py-2 px-2 text-sm hover:bg-muted rounded">Всички обяви</a>
                              <a href="/announcements/tenders" className="block py-2 px-2 text-sm hover:bg-muted rounded">Търгове и конкурси</a>
                              <a href="/announcements/jobs" className="block py-2 px-2 text-sm hover:bg-muted rounded">Работни места</a>
                              <a href="/announcements/public" className="block py-2 px-2 text-sm hover:bg-muted rounded">Публични консултации</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="contacts" className="border rounded-lg">
                          <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-muted/50">
                            Контакти
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-2">
                            <div className="space-y-1">
                              <a href="/contacts" className="block py-2 px-2 text-sm hover:bg-muted rounded">Общи контакти</a>
                              <a href="/contacts/departments" className="block py-2 px-2 text-sm hover:bg-muted rounded">Отдели и служби</a>
                              <a href="/contacts/office-hours" className="block py-2 px-2 text-sm hover:bg-muted rounded">Работно време</a>
                              <a href="/contacts/access" className="block py-2 px-2 text-sm hover:bg-muted rounded">Достъп до информация</a>
                              <a href="/contacts/accessibility" className="block py-2 px-2 text-sm hover:bg-muted rounded">Декларация за достъпност</a>
                              <a href="/sitemap" className="block py-2 px-2 text-sm hover:bg-muted rounded">Карта на сайта</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile search bar */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t">
            <div className="flex items-center gap-2" role="search">
              <Input 
                placeholder={t("search.placeholder")}
                className="flex-1"
                aria-label={t("search.placeholder")}
              />
              <Button size="icon" variant="outline" aria-label="Търсене">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile contact info */}
        <div className="lg:hidden mt-4 pt-4 border-t flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 text-primary text-sm">
            <Phone className="w-4 h-4" />
            <div>
              <span className="text-muted-foreground">Телефон: </span>
              <span className="font-semibold">070010502</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-primary text-sm">
            <Bell className="w-4 h-4" />
            <div>
              <span className="text-muted-foreground">Портал за </span>
              <span className="font-semibold">СИГНАЛИ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-primary text-primary-foreground relative overflow-visible" role="navigation" aria-label="Главна навигация" id="main-navigation">
        <div className="container mx-auto px-4 relative overflow-visible">
          <div className="flex items-center overflow-visible">
            <NavigationMenu className="static w-full overflow-visible">
              <NavigationMenuList className="flex items-center space-x-0 overflow-visible">
                <NavigationMenuItem className="relative overflow-visible">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm">
                    За Общината
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: 'var(--header-height)'}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Left section with cards */}
                          <div className="col-span-4 grid grid-cols-2 gap-4">
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
                          <div className="col-span-8 grid grid-cols-3 gap-8">
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Община Борово</h4>
                              <ul className="space-y-3">
                                <li><a href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Представяне</a></li>
                                <li><a href="/about/history" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› История на града</a></li>
                                <li><a href="/about/geography" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Географска характеристика</a></li>
                                <li><a href="/about/demographics" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Демографска характеристика</a></li>
                                <li><a href="/about/villages" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Селища в общината</a></li>
                                <li><a href="/about/infrastructure" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Техническа инфраструктура</a></li>
                                <li><a href="/about/vision" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Визия на община Борово</a></li>
                                <li><a href="/about/citizens" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Почетни граждани</a></li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Култура и туризъм</h4>
                              <ul className="space-y-3">
                                <li><a href="/culture/calendar" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Културен календар</a></li>
                                <li><a href="/culture/events" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Местни празници</a></li>
                                <li><a href="/culture/library" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Библиотеки</a></li>
                                <li><a href="/culture/reading-room" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Читалища</a></li>
                                <li><a href="/culture/museums" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Музей</a></li>
                                <li><a href="/culture/monasteries" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Манастири</a></li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Благодарствени писма</h4>
                              <ul className="space-y-3">
                                <li><a href="/tourism/info" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Туристически информационен център</a></li>
                                <li><a href="/tourism/guide" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Електронен гид</a></li>
                                <li><a href="/awards/letters" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Благодарствени писма и позадравителни адреси</a></li>
                                <li><a href="/awards/citizens" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Побратимени градове</a></li>
                              </ul>
                            </div>
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
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: 'var(--header-height)'}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Mayor section with image */}
                          <div className="col-span-4">
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4">
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Д-р Христо Грудев</h4>
                              <p className="text-sm text-gray-600 mb-4">Кмет на община Борово</p>
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
                          <div className="col-span-8 grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Общинска администрация</h4>
                              <ul className="space-y-3">
                                <li><a href="/administration/deputy-mayors" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Заместник кметове</a></li>
                                <li><a href="/administration/secretary" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Секретар</a></li>
                                <li><a href="/administration/architect" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Главен архитект</a></li>
                                <li><a href="/administration/structure" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Структура и контакти</a></li>
                                <li><a href="/administration/departments" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекции и отдели</a></li>
                                <li><a href="/administration/rules" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Кодекс за поведение на служителите</a></li>
                                <li><a href="/administration/internal-rules" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Вътрешни правила</a></li>
                                <li><a href="/administration/mayor-chart" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Карта на кмета</a></li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Още информация</h4>
                              <ul className="space-y-3">
                                <li><a href="/administration/management" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Програма за управление</a></li>
                                <li><a href="/administration/strategy" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Стратегии за развитие</a></li>
                                <li><a href="/administration/access" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Достъп до обществена информация</a></li>
                                <li><a href="/administration/declarations" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Декларации и регистър на декларациите по ЗПКОНПИ</a></li>
                                <li><a href="/administration/iso" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Европейски стандарти ISO</a></li>
                                <li><a href="/administration/notifications" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Уведомления по чл.66 от АПК</a></li>
                                <li><a href="/administration/public-info" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Публична информация, съгласно ЗЗКИ</a></li>
                                <li><a href="/administration/regulation" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Устройствен правилник</a></li>
                              </ul>
                            </div>
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
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: 'var(--header-height)'}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
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
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <div className="text-3xl mb-2">🏗️</div>
                              <div className="text-primary font-semibold text-xs">ИНФРАСТРУКТУРА</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <div className="text-3xl mb-2">🚗</div>
                              <div className="text-primary font-semibold text-xs">ТРАНСПОРТ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <div className="text-3xl mb-2">🎉</div>
                              <div className="text-primary font-semibold text-xs">ПРАЗНИЦИ</div>
                            </div>
                          </div>
                          
                          {/* Service links */}
                          <div className="col-span-7 grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Административни услуги</h4>
                              <ul className="space-y-3">
                                <li><a href="/services/electronic" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Електронни услуги</a></li>
                                <li><a href="/services/administrative" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция административно и информационно обслужване</a></li>
                                <li><a href="/services/local-revenue" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция местни приходи и бюджет</a></li>
                                <li><a href="/services/accounting" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция счетоводство, финансово управление и контрол</a></li>
                                <li><a href="/services/investment" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция инвестиционна политика и екология</a></li>
                                <li><a href="/services/cadastre" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция кадастър и общинска собственост</a></li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Други услуги</h4>
                              <ul className="space-y-3">
                                <li><a href="/services/education" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция образование, култура, спорт и връзки с обществеността</a></li>
                                <li><a href="/services/social" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дирекция социални дейности, здравеопазване и транспорт</a></li>
                                <li><a href="/services/tourism" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› ОП "Туризъм"</a></li>
                                <li><a href="/services/covid" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Коронавирус COVID-19</a></li>
                                <li><a href="/services/surveys" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Анализи и анкети</a></li>
                              </ul>
                            </div>
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
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: 'var(--header-height)'}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* News cards with icons */}
                          <div className="col-span-4 space-y-4">
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
                            <div className="bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors cursor-pointer">
                              <div className="flex items-center space-x-3">
                                <div className="text-2xl">🗳️</div>
                                <div className="font-semibold text-sm">ИЗБОРИ</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Calendar and useful links */}
                          <div className="col-span-8 grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Календар</h4>
                              <div className="space-y-4">
                                <div className="bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors cursor-pointer">
                                  <div className="text-primary font-semibold text-sm">КУЛТУРЕН КАЛЕНДАР</div>
                                </div>
                                <div className="bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors cursor-pointer">
                                  <div className="text-primary font-semibold text-sm">СПОРТЕН КАЛЕНДАР</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Полезни връзки</h4>
                              <ul className="space-y-3">
                                <li><a href="/links/corruption" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Сигнали за корупция</a></li>
                                <li><a href="/links/ministry-economy" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Министерство на икономиката</a></li>
                                <li><a href="/links/ministry-labor" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Министерство на труда и социалната политика</a></li>
                                <li><a href="/links/eu-funds" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Структурни фондове на ЕС</a></li>
                                <li><a href="/links/association" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Сдружение "МИГ-Кърлен-Асеновград"</a></li>
                                <li><a href="/links/questions" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Вашите въпроси</a></li>
                              </ul>
                            </div>
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
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: 'var(--header-height)'}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Council cards with images */}
                          <div className="col-span-4 space-y-4">
                            <div className="relative overflow-hidden rounded-lg">
                              <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                                <div className="text-primary font-semibold text-sm">РЕШЕНИЯ</div>
                              </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg">
                              <div className="w-full h-24 bg-primary/20 flex items-center justify-center">
                                <div className="text-primary font-semibold text-sm text-center">НОРМАТИВНИ АКТОВЕ ЗА ОБСЪЖДАНЕ</div>
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
                          <div className="col-span-8 grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Структура и състав</h4>
                              <ul className="space-y-3">
                                <li><a href="/council/chairman" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Председател</a></li>
                                <li><a href="/council/vice-chairmen" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Заместник председатели</a></li>
                                <li><a href="/council/councilors" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Общински съветници</a></li>
                                <li><a href="/council/groups" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Политически групи</a></li>
                                <li><a href="/council/commissions" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Комисии</a></li>
                                <li><a href="/council/declarations" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Декларации</a></li>
                                <li><a href="/council/contacts" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Контакти</a></li>
                              </ul>
                              <div className="mt-4 p-3 bg-gray-50 rounded">
                                <p className="text-xs text-gray-600">📞 (0331) 6-39-84</p>
                                <p className="text-xs text-gray-600">✉️ obs@asenovgrad.bg</p>
                                <p className="text-xs text-gray-600 mt-1">гр. АСЕНОВГРАД, пл. "АКАД. Н. ХАЙТОВ" 9, ЛЦ 4230</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-primary font-semibold text-base mb-4 uppercase">Нормативна база</h4>
                              <ul className="space-y-3">
                                <li><a href="/council/decisions" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Решения</a></li>
                                <li><a href="/council/regulations" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Наредби</a></li>
                                <li><a href="/council/bylaws" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Правилници</a></li>
                                <li><a href="/council/acts-discussion" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Нормативни актове за обсъждане</a></li>
                                <li><a href="/council/announcements" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Обявления</a></li>
                                <li><a href="/council/programs" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Програми</a></li>
                                <li><a href="/council/reports" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Отчети общински съвет</a></li>
                                <li><a href="/council/protocols" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Протоколи на заседания на общински съвет</a></li>
                                <li><a href="/council/protocols-permanent" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Протоколи от заседания на постоянните комисии</a></li>
                                <li><a href="/council/daily-order" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Дневен ред и график</a></li>
                                <li><a href="/council/public-register" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Публичен регистър на питанията и отговорите към тях</a></li>
                                <li><a href="/council/video" className="text-sm text-gray-600 hover:text-primary transition-colors block py-1">› Видео</a></li>
                              </ul>
                            </div>
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

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-between text-primary-foreground hover:bg-primary-light py-3"
              >
                <span>Навигация</span>
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-80 p-0 bg-background">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="text-left">Навигация</SheetTitle>
              </SheetHeader>
              <div className="overflow-y-auto h-full">
                <div className="p-4 space-y-4">
                  {/* Mobile menu items */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">За Общината</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary">Представяне</a></li>
                        <li><a href="/about/history" className="text-sm text-muted-foreground hover:text-primary">История на града</a></li>
                        <li><a href="/about/geography" className="text-sm text-muted-foreground hover:text-primary">Географска характеристика</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Администрация</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="/administration/deputy-mayors" className="text-sm text-muted-foreground hover:text-primary">Заместник кметове</a></li>
                        <li><a href="/administration/secretary" className="text-sm text-muted-foreground hover:text-primary">Секретар</a></li>
                        <li><a href="/administration/architect" className="text-sm text-muted-foreground hover:text-primary">Главен архитект</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Дейности и услуги</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="/services/social" className="text-sm text-muted-foreground hover:text-primary">Социални услуги</a></li>
                        <li><a href="/services/technical" className="text-sm text-muted-foreground hover:text-primary">Технически услуги</a></li>
                        <li><a href="/services/taxes" className="text-sm text-muted-foreground hover:text-primary">Местни данъци и такси</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Актуално</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="/news" className="text-sm text-muted-foreground hover:text-primary">Новини</a></li>
                        <li><a href="/events" className="text-sm text-muted-foreground hover:text-primary">Събития</a></li>
                        <li><a href="/announcements" className="text-sm text-muted-foreground hover:text-primary">Съобщения</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Общински съвет</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="/council/chairman" className="text-sm text-muted-foreground hover:text-primary">Председател</a></li>
                        <li><a href="/council/councilors" className="text-sm text-muted-foreground hover:text-primary">Общински съветници</a></li>
                        <li><a href="/council/decisions" className="text-sm text-muted-foreground hover:text-primary">Решения</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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