import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const procurementProcedures = [
  {
    id: "20200609bYYW2074613",
    title: "УПРАЖНЯВАНЕ НА НЕЗАВИСИМ СТРОИТЕЛЕН НАДЗОР НА ОБЕКТ: „БЛАГОУСТРОЯВАНЕ НА ЧАСТ ОТ ЦЕНТРАЛНАТА ЗОНА И ПЛОЩАД \"АКАД. НИКОЛАЙ ХАЙТОВ\" В ГР. АСЕНОВГРАД - I ЕТАП",
    date: "2020-06-15 15:14:38",
    status: "ОТКРИТА ПРОЦЕДУРА",
    type: "ПРЕДВАРИТЕЛНИ ОБЯВЛЕНИЯ"
  },
  {
    id: "20200610hPkR2129801",
    title: "УПРАЖНЯВАНЕ НА НЕЗАВИСИМ СТРОИТЕЛЕН НАДЗОР НА ОБЕКТ: „АВАРИЙНО УКРЕПВАНЕ НА АКТИВИЗИРАЛИ СЕ СВЛАЧИЩНИ ПРОЦЕСИ ПО ПЪТ PDV 3016 /II-86, АСЕНОВГРАД – БАЧКОВО/-ЛЯСКОВО-ЯВРОВО-ДОБРАЛЪК-/III-8064/ ПРИ КМ. 2+070, ОБЩИНА АСЕНОВГРАД",
    date: "2020-06-15 15:01:59",
    status: "ОТКРИТА ПРОЦЕДУРА",
    type: "ПРЕДВАРИТЕЛНИ ОБЯВЛЕНИЯ"
  },
  {
    id: "20200612ICjN2145340",
    title: "ИЗБОР НА ИЗПЪЛНИТЕЛИ ЗА ОСЪЩЕСТВЯВАНЕ НА КОНСУЛТАНТСКИ УСЛУГИ СЪГЛ. 166, АЛ.1, Т.1 ОТ ЗАКОНА ЗА УСТРОЙСТВО НА ТЕРИТОРИЯТА НА ПРИ ИЗПЪЛНЕНИЕТО НА ОБЕКТИ, СОБСТВЕНОСТ НА ОБЩИНА АСЕНОВГРАД ПО ОБОСОБЕНИ ПОЗИЦИИ",
    date: "2020-06-15 14:28:21",
    status: "ОТКРИТА ПРОЦЕДУРА",
    type: "СТАРИ И ДЕЙСТВАЩИ ПРОЦЕДУРИ"
  }
];

const BuyerProfilePage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const title = `${t("nav.buyer")} | ${t("site.name")}`;
  const desc = "Профил на купувача – обществени поръчки, търгове и документация.";

  const handleOpenProcedure = (id: string) => {
    navigate(`/buyer-profile/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/buyer-profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div 
          className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground py-20 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/borovo-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">{t("nav.buyer")}</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-municipal">
                <CardHeader>
                  <CardTitle className="text-primary-foreground text-center">ФИЛТРИРАЙ ПО:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип на поръчката:</label>
                    <Select>
                      <SelectTrigger className="bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Всички</SelectItem>
                        <SelectItem value="construction">Строителство</SelectItem>
                        <SelectItem value="services">Услуги</SelectItem>
                        <SelectItem value="supplies">Доставки</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full text-center">
                      СТАРИ И ДЕЙСТВАЩИ ПРОЦЕДУРИ
                    </Button>
                    <Button variant="secondary" className="w-full text-center">
                      ПРЕДВАРИТЕЛНИ ОБЯВЛЕНИЯ
                    </Button>
                    <Button variant="secondary" className="w-full text-center">
                      АКТУАЛИЗАЦИИ КЪМ ДОГОВОРИ
                    </Button>
                    <Button variant="secondary" className="w-full text-center">
                      ПУБЛИКАЦИИ ОТ АОП
                    </Button>
                  </div>

                  <div className="bg-accent/20 backdrop-blur-sm p-3 rounded border border-primary-foreground/20">
                    <p className="text-primary-foreground text-center font-medium mb-3">ТЪРСЕНЕ ПО:</p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-primary-foreground mb-1">Заглавие:</label>
                        <Input className="bg-background text-foreground" />
                      </div>
                      <div className="text-center">
                        <span className="text-primary-foreground">ИЛИ</span>
                      </div>
                      <div>
                        <label className="block text-sm text-primary-foreground mb-1">Дата От:</label>
                        <Input type="date" className="bg-background text-foreground" />
                      </div>
                      <div>
                        <label className="block text-sm text-primary-foreground mb-1">Дата До:</label>
                        <Input type="date" className="bg-background text-foreground" />
                      </div>
                      <Button className="w-full bg-primary-dark hover:bg-primary text-primary-foreground">
                        Търси
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground mb-6 shadow-municipal">
                <CardHeader>
                  <CardTitle className="text-primary-foreground text-center text-xl">ОБЩЕСТВЕНИ ПОРЪЧКИ</CardTitle>
                </CardHeader>
              </Card>

              <div className="space-y-4">
                {procurementProcedures.map((procedure) => (
                  <Card key={procedure.id} className="border-l-4 border-l-primary shadow-card hover:shadow-municipal transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">{procedure.title}</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>{procedure.date}</p>
                            <p className="text-destructive font-bold">№ {procedure.id}</p>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleOpenProcedure(procedure.id)}
                          className="ml-4 whitespace-nowrap bg-primary hover:bg-primary-dark"
                        >
                          ОТВОРИ ДОСИЕ
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {procedure.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyerProfilePage;