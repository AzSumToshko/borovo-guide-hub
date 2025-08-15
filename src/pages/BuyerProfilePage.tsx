import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
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
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.buyer")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-[#8FB85B] text-white">
                <CardHeader>
                  <CardTitle className="text-white text-center">ФИЛТРИРАЙ ПО:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип на поръчката:</label>
                    <Select>
                      <SelectTrigger className="bg-white text-black">
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
                    <Button variant="secondary" className="w-full text-center bg-gray-200 text-black hover:bg-gray-300">
                      СТАРИ И ДЕЙСТВАЩИ ПРОЦЕДУРИ
                    </Button>
                    <Button variant="secondary" className="w-full text-center bg-gray-200 text-black hover:bg-gray-300">
                      ПРЕДВАРИТЕЛНИ ОБЯВЛЕНИЯ
                    </Button>
                    <Button variant="secondary" className="w-full text-center bg-gray-200 text-black hover:bg-gray-300">
                      АКТУАЛИЗАЦИИ КЪМ ДОГОВОРИ
                    </Button>
                    <Button variant="secondary" className="w-full text-center bg-gray-200 text-black hover:bg-gray-300">
                      ПУБЛИКАЦИИ ОТ АОП
                    </Button>
                  </div>

                  <div className="bg-[#7DA54A] p-3 rounded">
                    <p className="text-white text-center font-medium mb-3">ТЪРСЕНЕ ПО:</p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-white mb-1">Заглавие:</label>
                        <Input className="bg-white text-black" />
                      </div>
                      <div className="text-center">
                        <span className="text-white">ИЛИ</span>
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-1">Дата От:</label>
                        <Input type="date" className="bg-white text-black" />
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-1">Дата До:</label>
                        <Input type="date" className="bg-white text-black" />
                      </div>
                      <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                        Търси
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-[#8FB85B] text-white mb-4">
                <CardHeader>
                  <CardTitle className="text-white text-center">ОБЩЕСТВЕНИ ПОРЪЧКИ</CardTitle>
                </CardHeader>
              </Card>

              <div className="bg-gray-100 p-4 mb-4">
                <p className="text-gray-700">
                  Уважаеми гостници и господа,<br/>
                  Уведомяваме Ви, че съгласно последните изискванията на Закона за обществените поръчки (ЗОП), Община Асеновград има
                  нов Профил на Купувача, който е достъпен на следния линк:
                </p>
                <p className="text-red-600 font-bold mt-2">
                  ПРОФИЛ НА КУПУВАЧА ЗА ПОРЪЧКИ СЛЕД 13 ЮНИ 2020 г.
                </p>
              </div>

              <div className="space-y-4">
                {procurementProcedures.map((procedure) => (
                  <Card key={procedure.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{procedure.title}</h3>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>{procedure.date}</p>
                            <p className="text-red-600 font-bold">№ {procedure.id}</p>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleOpenProcedure(procedure.id)}
                          className="ml-4 whitespace-nowrap"
                        >
                          ОТВОРИ ДОСИЕ
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
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
