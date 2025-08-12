import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const PublicRegistersPage = () => {
  const { t } = useI18n();
  const title = `${t("nav.registers")} | ${t("site.name")}`;
  const descBg = "Публични регистри на Община Борово: достъп до актуални регистри и справки.";
  const descEn = "Public registers of Borovo Municipality: access to current registers and records.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={descBg} />
        <link rel="canonical" href="https://borovo.bg/registers" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descBg} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.registers")}</h1>
            <p className="opacity-90 mt-2">{descBg}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-4">
          <p className="text-muted-foreground">Тук ще бъдат публикувани връзки към публичните регистри (пример: регистър на разрешителни, регистър на общинските имоти и др.).</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicRegistersPage;
