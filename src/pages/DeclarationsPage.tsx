import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const DeclarationsPage = () => {
  const { t } = useI18n();
  const title = `${t("nav.declarations")} | ${t("site.name")}`;
  const desc = "Декларации по ЗПКОНПИ – публикувани декларации на длъжностни лица в Община Борово.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/declarations" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.declarations")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-4">
          <p className="text-muted-foreground">Публикуване на декларации за имущество и интереси съгласно ЗПКОНПИ.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeclarationsPage;
