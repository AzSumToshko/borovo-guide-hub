import { Search, Phone, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import borovoCoatOfArms from "@/assets/borovo-coat-of-arms.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

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

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none">
                      ДЕЙНОСТИ И УСЛУГИ
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/services" className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                              <div className="font-semibold">Всички услуги</div>
                              <p className="text-sm text-muted-foreground">Преглед на всички услуги</p>
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
                    <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary-light py-6 px-6 rounded-none">
                      АКТУАЛНО
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[320px] sm:w-[500px] md:w-[600px] sm:grid-cols-2">
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
                </NavigationMenuList>
              </NavigationMenu>

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