import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const MarketFeesPage = () => {
  const title = "Сметка, кодове за внасяне и начини за плащане на местни данъци и такса битови отпадъци | Община Борово";
  const desc = "Информация за плащане на местни данъци и такса битови отпадъци.";

  const paymentMethods = [
    "В брой на каса на Община Асеновград - Разходно-касова операция №1"
  ];

  const currentTariffs = [
    "• за възраст до 30.06.2025 г.",
    "• от възраст до 31.12.2025 г."
  ];

  const patentTariffs = [
    "Срок на плащане - до 15-то число на месеца, следващ месеца, който е предмет на облагане."
  ];

  const wasteFeeAmounts = [
    { category: "За лице до 1200 лева", amount: "14 26.00" },
    { category: "Остров: постоянно живеещи детски садини", amount: "14 26.00" },
    { category: "Данък върху недвижимата собственост", amount: "14 22.00" },
    { category: "Данък върху наследствата", amount: "14 22.00" },
    { category: "Такса за битови отпадъци", amount: "14 25.00" },
    { category: "Туристически данък", amount: "14 26.00" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/local-taxes/market-fees" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />

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
          <h1 className="text-4xl font-bold mb-4">СМЕТКА, КОДОВЕ ЗА ВНАСЯНЕ И НАЧИНИ ЗА ПЛАЩАНЕ НА МЕСТНИ ДАНЪЦИ И ТАКСА БИТОВИ ОТПАДЪЦИ</h1>
          <p className="text-xl opacity-90">{desc}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Уважаемо данъчно задължени лица,</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Уведомяваме Ви, че за постъпване на местните данъци в бюджета на Община Асеновград са определени данъчни сметки на общината в съответствие със сътрудничество на МФ, както следва:
            </p>
            <div className="space-y-4">
              <div>
                <strong>ДАНЪЦИ ВЪРХУ НЕДВИЖИМИТЕ ИМОТИ, ТАКСА ЗА БИТОВИ ОТПАДЪЦИ И ДРУГИ ТАКСИ СПОРЕД СПИСЪЦИТЕ ПО ЧЛ. 5 ОТ ЗМДТ:</strong>
              </div>
              <div>
                <strong>Обща сметка за постъпване на данъци от местни данъци и такси</strong>
              </div>
              <div>
                <strong>IBAN:</strong> BG50IORT73784040200000
              </div>
              <div>
                <strong>BIC:</strong> IORTBGSF
              </div>
              <div>
                <strong>Банка:</strong> "Инвестбанк" АД
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">НАЧИНИ НА ПЛАЩАНЕ:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {paymentMethods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">ПАТЕНТНИЯ ДАНЪК:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {patentTariffs.map((tariff, index) => (
                <li key={index}>{tariff}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">ТУРИСТИЧЕСКИ ДАНЪК:</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Срок на плащане - до 15-то число на месеца, следващ месеца, който е предмет на облагане.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">ДАНЪЦИ ВЪРХУ ТАКСОМЕТРОВИ ПРЕВОЗИ НА ПЪТНИЦИ ЗА 2025 Г.:</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Срок на плащане - до 15-то число на месеца, следващ месеца, който е предмет на облагане.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">МАШИНИ НА ПОМЕЩЕНИЯ:</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Плащанията за машини се извършват в съответния офис на община по избор.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">ПО ЗАПЛАЩАНЕ, ЧРЕЗ СИСТЕМАТА ePay.bg</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-yellow-400 text-black p-4 rounded mb-2 font-bold">РАЗПЛАЩАНЕ</div>
                <p className="text-sm">
                  По Вашите в уеб-сайт станции
                  на сайта банки епay.bg;
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded mb-2 font-bold">Разплащане за в-ки</div>
                <p className="text-sm">
                  с платежни банки
                  в цялата страна
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded mb-2 font-bold">Разплащане за в-ки сайта на банката ИАБ</div>
                <p className="text-sm">Чрез "Банкя ДСК" ЕАД</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded mb-2 font-bold">банка.dsek</div>
                <p className="text-sm">Сайт</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Тарифи за местни данъци и такси:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Вид плащане</th>
                    <th className="text-right py-2">Код за вид плащане</th>
                  </tr>
                </thead>
                <tbody>
                  {wasteFeeAmounts.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{item.category}</td>
                      <td className="text-right py-3 font-mono">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default MarketFeesPage;