import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const procedureDocuments = [
  { name: "ДОГОВОР", date: "2020-08-07 10:55:00", link: "#" },
  { name: "ОБЯВЛЕНИЕ ЗА ВЪЗЛОЖЕНА ПОРЪЧКА", date: "2020-08-07 10:45:00", link: "#" },
  { name: "ПРОТОКОЛ №2", date: "2020-07-31 14:25:00", link: "#" },
  { name: "ДОКЛАД", date: "2020-07-31 14:25:00", link: "#" },
  { name: "РЕШЕНИЕ", date: "2020-07-31 14:25:00", link: "#" },
  { name: "ПРОТОКОЛ №1", date: "2020-07-31 14:20:00", link: "#" },
  { name: "СЪОБЩЕНИЕ ЗА ОТВАРЯНЕ НА ЦЕНИ", date: "2020-07-27 16:15:00", link: "#" }
];

const ProcurementDetailPage = () => {
  const { t } = useI18n();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const title = `Процедура ${id} | ${t("nav.buyer")} | ${t("site.name")}`;
  const desc = "Детайли на процедура за обществена поръчка";

  const procedureData = {
    title: "УПРАЖНЯВАНЕ НА НЕЗАВИСИМ СТРОИТЕЛЕН НАДЗОР НА ОБЕКТ: АВАРИЙНО УКРЕПВАНЕ НА АКТИВИЗИРАЛИ СЕ СВЛАЧИЩНИ ПРОЦЕСИ ПО ПЪТ PDV 3016 /II-86, АСЕНОВГРАД – БАЧКОВО/-ЛЯСКОВО-ЯВРОВО-ДОБРАЛЪК-/III-8064/ ПРИ КМ. 2+070, ОБЩИНА АСЕНОВГРАД",
    type: "ОТКРИТА ПРОЦЕДУРА",
    date: "2020-06-15 15:01:59",
    number: id || "20200610hPkR2129801",
    aopNumber: "00022-2020-0020",
    description: "Упражняване на независим строителен надзор на обект: АВАРИЙНО УКРЕПВАНЕ НА АКТИВИЗИРАЛИ СЕ СВЛАЧИЩНИ ПРОЦЕСИ ПО ПЪТ PDV 3016 /II-86, АСЕНОВГРАД – БАЧКОВО/-ЛЯСКОВО-ЯВРОВО-ДОБРАЛЪК-/III-8064/ ПРИ КМ. 2+070, ОБЩИНА АСЕНОВГРАД"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://borovo.bg/buyer-profile/${id}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/buyer-profile')}
              className="text-primary-foreground hover:bg-primary-foreground/10 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Обратно към поръчки
            </Button>
            <h1 className="text-3xl font-bold">Процедура {procedureData.number}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar - Same as main page */}
            <div className="lg:col-span-1">
              <Card className="bg-[#8FB85B] text-white">
                <CardHeader>
                  <CardTitle className="text-white text-center">ФИЛТРИРАЙ ПО:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип на поръчката:</label>
                    <select className="w-full p-2 rounded bg-white text-black">
                      <option value="">Избери тип</option>
                    </select>
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

              {/* Procedure Details */}
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">{procedureData.title}</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><span className="font-semibold">ТИП ПОРЪЧКА:</span> {procedureData.type}</p>
                        <p><span className="font-semibold">ДАТА:</span> {procedureData.date}</p>
                      </div>
                      <div>
                        <p className="text-red-600 font-bold">№ {procedureData.number}</p>
                        <p><span className="font-semibold">АОП НОМЕР:</span> {procedureData.aopNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Описание:</h3>
                    <p className="text-gray-700">{procedureData.description}</p>
                  </div>

                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      ЛИНК КЪМ АОП ОБЯВЛЕНИЕ: HTTP://WWW.AOP.BG/NG/FORM.PHP?CLASS=F02_2014&ID=983610&MODE=VIEW
                    </a>
                  </div>
                  <div className="text-sm mt-2">
                    <a href="#" className="text-blue-600 hover:underline">
                      ЛИНК КЪМ АОП РЕШЕНИЕ: HTTP://WWW.AOP.BG/CAS62.PHP?MODE=SHOW_DOC&DOC_ID=983602&NEWVER=2
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Documents Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Документи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">061720201151506_Надзор-свлачище.rar</p>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Публикация</TableHead>
                        <TableHead>Дата</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {procedureDocuments.map((doc, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <a href={doc.link} className="text-blue-600 hover:underline">
                              {doc.name}
                            </a>
                          </TableCell>
                          <TableCell>{doc.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button 
                      variant="ghost" 
                      onClick={() => navigate('/buyer-profile')}
                      className="text-blue-600"
                    >
                      ← Обратно към поръчки
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProcurementDetailPage;