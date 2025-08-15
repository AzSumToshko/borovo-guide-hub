import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";

const SurveysPage = () => {
  const surveyResults = [
    { name: "Анастас Димитров, Васил Прашов-каяк", percentage: 1.86, color: "bg-municipal-navy" },
    { name: "Марчо Панайотов -възгане на телескопи", percentage: 0.52, color: "bg-municipal-green" },
    { name: "Таняна КаВаржикова-възгане на телескопи", percentage: 0.8, color: "bg-municipal-navy" },
    { name: "Александра Иванова-кюючушкай карате", percentage: 2.73, color: "bg-municipal-green" },
    { name: "Мариян Балабанов- кюючушкай карате", percentage: 1.97, color: "bg-municipal-navy" },
    { name: "Моника Стоянова- кюючушкай карате", percentage: 0.82, color: "bg-municipal-green" },
    { name: "Никола Божкира- таекуон-до", percentage: 35.3, color: "bg-municipal-navy" },
    { name: "Калемнра Бендева-таекуон-до", percentage: 4.42, color: "bg-municipal-green" },
    { name: "Мария Йорданова-ендюрънс /конен спорт/", percentage: 0.53, color: "bg-municipal-navy" },
    { name: "Борис Борисов-тенис", percentage: 22.26, color: "bg-green-500" },
    { name: "Елена Христева -ски бягане", percentage: 29.26, color: "bg-green-400" },
    { name: "Йордан Демерджиков-възгане на телескопи", percentage: 0.52, color: "bg-municipal-navy" },
    { name: "Иван Лолов- спортна стрелба", percentage: 1.13, color: "bg-municipal-green" },
    { name: "Димитър Георгиев и Леа Цветанова-стандартни танци", percentage: 0.11, color: "bg-municipal-navy" },
    { name: "Васил Прашов, Джаи Халил-каяк", percentage: 6.67, color: "bg-municipal-green" },
    { name: "Джаи Халил-каяк", percentage: 0.22, color: "bg-municipal-navy" },
    { name: "Андрей Крайгор-пъвдова средна въска (парчище)", percentage: 0.91, color: "bg-municipal-green" },
    { name: "Никола Атанасов и Георги Атанасов-кану", percentage: 0.06, color: "bg-municipal-navy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Анкети - Община Борово</title>
        <meta name="description" content="Резултати от анкети на Община Борово" />
      </Helmet>

      <Header />
      
      {/* Hero Section - Same as buyer-profile */}
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
            <h1 className="text-4xl font-bold mb-4">АНКЕТИ</h1>
            <p className="text-xl opacity-90">Резултати от проведени анкети в Община Борово</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>

      {/* Survey Results Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-municipal-navy mb-2">
                ВСИЧКИ АНКЕТИ
              </h2>
              <p className="text-municipal-green font-medium mb-8 uppercase text-sm tracking-wide">
                ТОП-ТЕ НАЙ- ДОБРИ СПОРТИСТИ НА ОБЩИНА АСЕНОВГРАД ЗА 2024 Г.
              </p>
              
              <div className="space-y-4">
                {surveyResults.map((result, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 leading-tight">
                          {result.name}
                        </span>
                        <span className="text-sm font-bold text-municipal-navy bg-municipal-green/10 px-2 py-1 rounded">
                          {result.percentage}%
                        </span>
                      </div>
                      <Progress 
                        value={result.percentage} 
                        className="h-6 bg-gray-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default SurveysPage;