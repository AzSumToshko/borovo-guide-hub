import { Search, Phone, Bell, Menu, X, ShoppingCart, Megaphone, FolderOpen, Smartphone, Receipt, FileText, Theater, GraduationCap, Heart, Users, Activity, Leaf, Building, Car, Calendar, Mail, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import borovoCoatOfArms from "@/assets/borovo-coat-of-arms.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useI18n } from "@/i18n";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Header = () => {
  const { locale, setLocale, t } = useI18n();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  // Update navigation position
  useEffect(() => {
    const updateNavPosition = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavPosition(rect.bottom);
      }
    };

    const handleResize = () => {
      updateNavPosition();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial position calculation
    updateNavPosition();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update position when dropdown opens
  useEffect(() => {
    if (openDropdown && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setNavPosition(rect.bottom);
    }
  }, [openDropdown]);

  // Close dropdowns on scroll (immediate close to prevent visual artifacts)
  useEffect(() => {
    if (!openDropdown) return;

    let isInitializing = true;
    
    // Small delay to prevent immediate closing during dropdown opening
    const initTimeout = setTimeout(() => {
      isInitializing = false;
    }, 50);

    const handleScroll = () => {
      if (!isInitializing) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initTimeout);
    };
  }, [openDropdown]);

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
                    {/* Main Navigation */}
                                          <div className="p-6 border-b border-gray-100">
                        <h3 className="font-bold text-lg text-primary mb-4 tracking-wide">Основни секции</h3>
                        <Accordion type="single" collapsible className="w-full space-y-1" style={{width: '100%'}}>
                          {/* За Общината */}
                          <AccordionItem value="about" className="border-none w-full" style={{width: '100%'}}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors group w-full">
                              <a href="/about" className="flex-1 text-slate-700 group-hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                За Общината
                              </a>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 w-full">
                              <div className="space-y-4 ml-2 w-full">
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Община Борово</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/about" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Представяне</a>
                                    <a href="/about/history" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">История на града</a>
                                    <a href="/about/geography" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Географска характеристика</a>
                                    <a href="/about/demographics" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Демографска характеристика</a>
                                    <a href="/about/villages" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Селища в общината</a>
                                    <a href="/about/infrastructure" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Техническа инфраструктура</a>
                                    <a href="/about/vision" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Визия на община Борово</a>
                                    <a href="/about/citizens" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Почетни граждани</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Култура и туризъм</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/culture/calendar" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Културен календар</a>
                                    <a href="/culture/events" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Местни празници</a>
                                    <a href="/culture/library" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Библиотеки</a>
                                    <a href="/culture/reading-room" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Читалища</a>
                                    <a href="/culture/museums" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Музей</a>
                                    <a href="/culture/monasteries" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Манастири</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Благодарствени писма</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/tourism/info" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Туристически информационен център</a>
                                    <a href="/tourism/guide" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Електронен гид</a>
                                    <a href="/awards/letters" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Благодарствени писма и позадравителни адреси</a>
                                    <a href="/awards/citizens" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Побратимени градове</a>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          {/* Администрация */}
                          <AccordionItem value="administration" className="border-none w-full" style={{width: '100%'}}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors group w-full">
                              <a href="/administration" className="flex-1 text-slate-700 group-hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                Администрация
                              </a>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 w-full">
                              <div className="space-y-4 ml-2 w-full">
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Общинска администрация</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/administration/deputy-mayors" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Заместник кметове</a>
                                    <a href="/administration/secretary" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Секретар</a>
                                    <a href="/administration/architect" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Главен архитект</a>
                                    <a href="/administration/structure" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Структура и контакти</a>
                                    <a href="/administration/departments" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекции и отдели</a>
                                    <a href="/administration/rules" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Кодекс за поведение на служителите</a>
                                    <a href="/administration/internal-rules" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Вътрешни правила</a>
                                    <a href="/administration/mayor-chart" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Карта на кмета</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Още информация</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/administration/management" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Програма за управление</a>
                                    <a href="/administration/strategy" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Стратегии за развитие</a>
                                    <a href="/administration/access" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Достъп до обществена информация</a>
                                    <a href="/administration/declarations" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Декларации и регистър на декларациите по ЗПКОНПИ</a>
                                    <a href="/administration/iso" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Европейски стандарти ISO</a>
                                    <a href="/administration/notifications" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Уведомления по чл.66 от АПК</a>
                                    <a href="/administration/public-info" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Публична информация, съгласно ЗЗКИ</a>
                                    <a href="/administration/regulation" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Устройствен правилник</a>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          {/* Дейности и услуги */}
                          <AccordionItem value="services" className="border-none w-full" style={{width: '100%'}}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors group w-full">
                              <a href="/services" className="flex-1 text-slate-700 group-hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                Дейности и услуги
                              </a>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 w-full">
                              <div className="space-y-4 ml-2 w-full">
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Административни услуги</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/services/electronic" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Електронни услуги</a>
                                    <a href="/services/administrative" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция административно и информационно обслужване</a>
                                    <a href="/services/local-revenue" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция местни приходи и бюджет</a>
                                    <a href="/services/accounting" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция счетоводство, финансово управление и контрол</a>
                                    <a href="/services/investment" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция инвестиционна политика и екология</a>
                                    <a href="/services/cadastre" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция кадастър и общинска собственост</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Други услуги</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/services/education" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция образование, култура, спорт и връзки с обществеността</a>
                                    <a href="/services/social" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дирекция социални дейности, здравеопазване и транспорт</a>
                                    <a href="/services/tourism" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">ОП "Туризъм"</a>
                                    <a href="/services/covid" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Коронавирус COVID-19</a>
                                    <a href="/services/surveys" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Анализи и анкети</a>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          {/* Актуално */}
                          <AccordionItem value="news" className="border-none w-full" style={{width: '100%'}}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors group w-full">
                              <a href="/news" className="flex-1 text-slate-700 group-hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                Актуално
                              </a>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 w-full">
                              <div className="space-y-4 ml-2 w-full">
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Календар</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/calendar/cultural" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Културен календар</a>
                                    <a href="/calendar/sports" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Спортен календар</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Полезни връзки</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/links/corruption" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Сигнали за корупция</a>
                                    <a href="/links/ministry-economy" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Министерство на икономиката</a>
                                    <a href="/links/ministry-labor" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Министерство на труда и социалната политика</a>
                                    <a href="/links/eu-funds" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Структурни фондове на ЕС</a>
                                    <a href="/links/association" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Сдружение "МИГ-Кърлен-Асеновград"</a>
                                    <a href="/links/questions" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Вашите въпроси</a>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          {/* Общински съвет */}
                          <AccordionItem value="council" className="border-none w-full" style={{width: '100%'}}>
                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors group w-full">
                              <a href="/council" className="flex-1 text-slate-700 group-hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                Общински съвет
                              </a>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 w-full">
                              <div className="space-y-4 ml-2 w-full">
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Структура и състав</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/council/chairman" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Председател</a>
                                    <a href="/council/vice-chairmen" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Заместник председатели</a>
                                    <a href="/council/councilors" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Общински съветници</a>
                                    <a href="/council/groups" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Политически групи</a>
                                    <a href="/council/commissions" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Комисии</a>
                                    <a href="/council/declarations" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Декларации</a>
                                    <a href="/council/contacts" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Контакти</a>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-3 text-primary uppercase tracking-wider">Нормативна база</h4>
                                  <div className="space-y-1 pl-2">
                                    <a href="/council/decisions" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Решения</a>
                                    <a href="/council/regulations" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Наредби</a>
                                    <a href="/council/bylaws" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Правилници</a>
                                    <a href="/council/acts-discussion" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Нормативни актове за обсъждане</a>
                                    <a href="/council/announcements" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Обявления</a>
                                    <a href="/council/programs" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Програми</a>
                                    <a href="/council/reports" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Отчети общински съвет</a>
                                    <a href="/council/protocols" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Протоколи на заседания на общински съвет</a>
                                    <a href="/council/protocols-permanent" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Протоколи от заседания на постоянните комисии</a>
                                    <a href="/council/daily-order" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Дневен ред и график</a>
                                    <a href="/council/public-register" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Публичен регистър на питанията и отговорите към тях</a>
                                    <a href="/council/video" className="text-sm text-gray-600 hover:text-primary hover:bg-gray-50 block py-2 px-3 rounded-md transition-all">Видео</a>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                    {/* Quick Services */}
                    <div className="p-4">
                      <h3 className="font-semibold text-primary mb-3">Бързи услуги</h3>
                      <div className="space-y-1">
                        <a href="/buyer-profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <ShoppingCart className="w-4 h-4 text-primary" />
                          Профил на купувач
                        </a>
                        <a href="/news/tenders" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <Megaphone className="w-4 h-4 text-primary" />
                          Обяви търгове и конкурси
                        </a>
                        <a href="/projects" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <FolderOpen className="w-4 h-4 text-primary" />
                          Проекти
                        </a>
                        <a href="/services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <Smartphone className="w-4 h-4 text-primary" />
                          Електронни услуги
                        </a>
                        <a href="/services/local-taxes" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <Receipt className="w-4 h-4 text-primary" />
                          Местни данъци и такси
                        </a>
                        <a href="/registers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <FileText className="w-4 h-4 text-primary" />
                          Публични регистри
                        </a>
                      </div>
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
      <nav ref={navRef} className="hidden lg:block bg-primary text-primary-foreground relative overflow-visible" role="navigation" aria-label="Главна навигация" id="main-navigation">
        <div className="container mx-auto px-4 relative overflow-visible">
          <div className="flex items-center overflow-visible">
            <NavigationMenu className="static w-full overflow-visible" value={openDropdown} onValueChange={setOpenDropdown}>
              <NavigationMenuList className="flex items-center space-x-0 overflow-visible">
                <NavigationMenuItem className="relative overflow-visible" value="about">
                  <NavigationMenuTrigger 
                    className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" 
                    onSelect={(e) => e.preventDefault()}
                  >
                    За Общината
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: `${navPosition}px`}}>
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

                <NavigationMenuItem className="relative" value="administration">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" onSelect={(e) => e.preventDefault()}>
                    Администрация
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: `${navPosition}px`}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Mayor section with image */}
                          <div className="col-span-4">
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 h-full flex flex-col">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                  <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <h4 className="text-primary font-semibold text-lg">Д-р Христо Грудев</h4>
                                  <p className="text-sm text-gray-600">Кмет на община Борово</p>
                                </div>
                              </div>
                              
                              <div className="flex-1 space-y-4">
                                <div className="flex items-start gap-3">
                                  <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <div className="text-sm text-gray-600">
                                    <p className="font-medium">Приемни дни</p>
                                    <p className="text-xs">За записване за приемен ден, позвънете на:</p>
                                  </div>
                                </div>
                                
                                <div className="space-y-2 ml-7">
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-gray-700 font-medium">(0331) 6-20-50</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-gray-700 font-medium">(0331) 20-245</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-gray-700 font-medium">obshtina@asenovgrad.bg</span>
                                  </div>
                                </div>
                              </div>
                              
                              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors w-full">
                                Повече информация
                              </button>
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

                <NavigationMenuItem className="relative" value="services">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" onSelect={(e) => e.preventDefault()}>
                    Дейности и услуги
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: `${navPosition}px`}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Service category cards */}
                          <div className="col-span-5 grid grid-cols-3 gap-3">
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Theater className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">КУЛТУРА</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <GraduationCap className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">ОБРАЗОВАНИЕ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">ЗДРАВЕОПАЗВАНЕ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">СОЦИАЛНИ ДЕЙНОСТИ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Activity className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">СПОРТНИ ДЕЙНОСТИ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Leaf className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">ЕКОЛОГИЯ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Building className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">ИНФРАСТРУКТУРА</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Car className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className="text-primary font-semibold text-xs">ТРАНСПОРТ</div>
                            </div>
                            <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors cursor-pointer">
                              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
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

                <NavigationMenuItem className="relative" value="news">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" onSelect={(e) => e.preventDefault()}>
                    Актуално
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: `${navPosition}px`}}>
                      <div className="container mx-auto px-8 py-8">
                        <div className="grid grid-cols-12 gap-8">
                           {/* News cards with professional icons */}
                           <div className="col-span-4 space-y-4">
                             <a href="/news" className="block bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors">
                               <div className="flex items-center space-x-3">
                                 <FileText className="w-6 h-6" />
                                 <div className="font-semibold text-sm">НОВИНИ</div>
                               </div>
                             </a>
                             <a href="/events" className="block bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors">
                               <div className="flex items-center space-x-3">
                                 <Bell className="w-6 h-6" />
                                 <div className="font-semibold text-sm">СЪБИТИЯ</div>
                               </div>
                             </a>
                             <a href="/announcements" className="block bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors">
                               <div className="flex items-center space-x-3">
                                 <Megaphone className="w-6 h-6" />
                                 <div className="font-semibold text-sm">СЪОБЩЕНИЯ</div>
                               </div>
                             </a>
                             <a href="/tenders" className="block bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors">
                               <div className="flex items-center space-x-3">
                                 <FolderOpen className="w-6 h-6" />
                                 <div className="font-semibold text-sm">ОБЯВИ, ТЪРГОВЕ И КОНКУРСИ</div>
                               </div>
                             </a>
                             <a href="/elections" className="block bg-primary rounded-lg p-4 text-white hover:bg-primary/90 transition-colors">
                               <div className="flex items-center space-x-3">
                                 <Receipt className="w-6 h-6" />
                                 <div className="font-semibold text-sm">ИЗБОРИ</div>
                               </div>
                             </a>
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

                <NavigationMenuItem className="relative" value="council">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-4 rounded-none text-sm" onSelect={(e) => e.preventDefault()}>
                    Общински съвет
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="fixed bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 shadow-2xl z-50" style={{left: 0, right: 0, top: `${navPosition}px`}}>
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
      <div className="hidden bg-primary text-primary-foreground">
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