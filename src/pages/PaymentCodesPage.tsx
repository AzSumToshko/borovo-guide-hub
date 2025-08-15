import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const PaymentCodesPage = () => {
  const title = "Сметка и кодове за внасяне на такси, наеми и др. | Община Борово";
  const desc = "Генериране на сметки и кодове за плащане на такси, наеми и други задължения.";

  const paymentCodes = [
    { service: "Други данъци", code: "44 34 00" },
    { service: "Нетни приходи от продажби на услуги, стоки и продукция", code: "44 40 00" },
    { service: "Приходи от наеми на имущество", code: "44 41 00" },
    { service: "Приходи от наеми на земи", code: "44 42 00" },
    { service: "Приходи от лихви по текущи банкови сметки", code: "44 43 00" },
    { service: "Приходи от лихви по срочни депозити", code: "44 44 00" },
    { service: "Приходи от дивиденти", code: "44 48 00" },
    { service: "Конфискувани средства и приходи от продажби на конфискувани вещи", code: "44 49 00" },
    { service: "Дарения, помощи и др. безвъзмездно получени суми от страната", code: "44 51 00" },
    { service: "Дарения, помощи и др. безвъзмездно получени суми от чужбина", code: "44 52 00" },
    { service: "Постъпления от продажба на ДМА", code: "44 55 00" },
    { service: "Постъпления от продажба на земя", code: "44 56 00" },
    { service: "Приходи от концесии", code: "44 57 00" },
    { service: "Приходи от ликвидиране на общински предприятия", code: "44 58 00" },
    { service: "Постъпления от продажба на НМА", code: "44 59 00" },
    { service: "Глоби, санкции, неустойки, наказателни лихви, обезщетения и начети", code: "44 65 00" },
    { service: "Други неданочни приходи", code: "44 70 00" },
    { service: "Такси за технически услуги", code: "44 80 01" },
    { service: "Такси за ползване на детски градини", code: "44 80 02" },
    { service: "Такси ползване на хосписи и други по здравеопазването", code: "44 80 03" },
    { service: "Такси ползване на лагери и други по социалния отдих", code: "44 80 04" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/local-taxes/payment-codes" />
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
          <h1 className="text-4xl font-bold mb-4">СМЕТКА И КОДОВЕ ЗА ВНАСЯНЕ НА ТАКСИ, НАЕМИ И ДР.</h1>
          <p className="text-xl opacity-90">{desc}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Сметка за внасяне на такси, наеми и др.</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <strong>IBAN:</strong> BG50IORT73784040200000
              </div>
              <div>
                <strong>BIC:</strong> IORTBGSF на "Инвестбанк" АД
              </div>
              <div>
                и съответните кодове за вид плащане, изброени по-долу
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Сметка за внасяне на глоба с фиш - Аеавност "Инспекторат паркиране и гаражи"</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <strong>IBAN:</strong> BG79IORT75731040000200
              </div>
              <div>
                <strong>BIC:</strong> IORTBGSF на "Инвестбанк" АД.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">НАИМЕНОВАНИЕ НА КОДОВЕТЕ ЗА ВИД ПЛАЩАНЕ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Наименование</th>
                    <th className="text-right py-2">Код за вид плащане</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentCodes.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{item.service}</td>
                      <td className="text-right py-3 font-mono">{item.code}</td>
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

export default PaymentCodesPage;