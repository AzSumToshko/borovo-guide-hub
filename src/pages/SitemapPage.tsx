import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";
import { Link } from "react-router-dom";

const SitemapPage = () => {
  const { t } = useI18n();
  const title = `${t("footer.sitemap")} | ${t("site.name")}`;
  const desc = "Карта на сайта – бърз достъп до всички основни раздели.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/sitemap" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("footer.sitemap")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Основни раздели</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/about" className="hover:underline">{t("nav.about")}</Link></li>
              <li><Link to="/administration" className="hover:underline">{t("nav.admin")}</Link></li>
              <li><Link to="/council" className="hover:underline">{t("nav.council")}</Link></li>
              <li><Link to="/services" className="hover:underline">{t("nav.services")}</Link></li>
              <li><Link to="/registers" className="hover:underline">{t("nav.registers")}</Link></li>
              <li><Link to="/projects" className="hover:underline">Проекти</Link></li>
              <li><Link to="/electronic-services" className="hover:underline">Електронни услуги</Link></li>
              <li><Link to="/buyer-profile" className="hover:underline">{t("nav.buyer")}</Link></li>
              <li><Link to="/declarations" className="hover:underline">{t("nav.declarations")}</Link></li>
              <li><Link to="/access-to-information" className="hover:underline">{t("nav.access")}</Link></li>
              <li><Link to="/contacts" className="hover:underline">{t("nav.contacts")}</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Услуги и данъци</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/services/local-taxes" className="hover:underline">Местни данъци и такси</Link></li>
              <li><Link to="/services/local-taxes/payment-codes" className="hover:underline">Сметка и кодове за внасяне</Link></li>
              <li><Link to="/services/local-taxes/electronic-declaration" className="hover:underline">Електронна декларация ЗМДТ</Link></li>
              <li><Link to="/services/local-taxes/declaration-forms" className="hover:underline">Бланки декларации ЗМДТ</Link></li>
              <li><Link to="/services/local-taxes/market-fees" className="hover:underline">Такси битови отпадъци</Link></li>
              <li><Link to="/services/technical" className="hover:underline">Технически услуги</Link></li>
              <li><Link to="/services/social" className="hover:underline">Социални услуги</Link></li>
              <li><Link to="/services/documents" className="hover:underline">Документи и формуляри</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Новини и информация</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/news" className="hover:underline">{t("nav.news")}</Link></li>
              <li><Link to="/news/events" className="hover:underline">Събития</Link></li>
              <li><Link to="/news/announcements" className="hover:underline">Обяви и съобщения</Link></li>
              <li><Link to="/news/tenders" className="hover:underline">Търгове и конкурси</Link></li>
              <li><Link to="/accessibility" className="hover:underline">{t("footer.accessibility")}</Link></li>
              <li><Link to="/information-protection" className="hover:underline">Защита на личните данни</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
