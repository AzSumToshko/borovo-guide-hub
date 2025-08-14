import { Home, Users, FileText, Calendar, Phone, MapPin, Info, Building } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

const BottomNavigation = () => {
  return (
    <nav className="bg-primary/90 text-primary-foreground border-t border-primary-light/20" role="navigation" aria-label="Главна навигация">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  За Борово
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
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
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Администрация
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
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
                        <a href="/services" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Услуги</div>
                          <p className="text-sm text-muted-foreground">Онлайн услуги</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/services/documents" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Документи</div>
                          <p className="text-sm text-muted-foreground">Формуляри и образци</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/services/local-taxes" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Данъци и такси</div>
                          <p className="text-sm text-muted-foreground">Информация и плащания</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Новини
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
                          <div className="font-semibold">Обяви</div>
                          <p className="text-sm text-muted-foreground">Официални съобщения</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/news/tenders" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Търгове</div>
                          <p className="text-sm text-muted-foreground">Обществени поръчки</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Общински съвет
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
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

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Регистри
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/registers" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Публични регистри</div>
                          <p className="text-sm text-muted-foreground">Всички регистри</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/buyer-profile" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Профил на купувача</div>
                          <p className="text-sm text-muted-foreground">Обществени поръчки</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/declarations" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Декларации</div>
                          <p className="text-sm text-muted-foreground">Декларации за интереси</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/access-to-information" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Достъп до информация</div>
                          <p className="text-sm text-muted-foreground">Заявления и отговори</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-light py-4 px-6 rounded-none text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Контакти
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2 bg-background">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/contacts" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Общи контакти</div>
                          <p className="text-sm text-muted-foreground">Телефони и адреси</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/contacts/departments" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Отдели</div>
                          <p className="text-sm text-muted-foreground">Контакти по отдели</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/contacts/working-hours" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Работно време</div>
                          <p className="text-sm text-muted-foreground">График на работа</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/contacts/location" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="font-semibold">Местоположение</div>
                          <p className="text-sm text-muted-foreground">Карта и маршрути</p>
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
  );
};

export default BottomNavigation;