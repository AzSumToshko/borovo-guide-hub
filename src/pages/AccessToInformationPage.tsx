import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const AccessToInformationPage = () => {
  const { t } = useI18n();
  const title = `${t("nav.access")} | ${t("site.name")}`;
  const desc = "Достъп до обществена информация – ред, формуляри и контактни точки.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/access-to-information" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.access")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-4">
          <p className="text-muted-foreground">Ръководство за заявяване на достъп, формуляри и срокове за отговор.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessToInformationPage;
