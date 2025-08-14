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
                    <div className="absolute left-0 top-full w-screen bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
                      <div className="container mx-auto p-8">
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
                    <div className="absolute left-0 top-full w-screen bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
                      <div className="container mx-auto p-8">
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
                    <div className="absolute left-0 top-full w-screen bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
                      <div className="container mx-auto p-8">
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
                    <div className="absolute left-0 top-full w-screen bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
                      <div className="container mx-auto p-8">
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
                    <div className="absolute left-0 top-full w-screen bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
                      <div className="container mx-auto p-8">
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
      {/* Breadcrumbs */}
      <div className="bg-muted/60" role="region" aria-label="Иерархична навигация">
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;