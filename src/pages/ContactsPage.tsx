import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const ContactsPage = () => {
  const { t } = useI18n();
  const title = `${t("nav.contacts")} | ${t("site.name")}`;
  const desc = "Контакти на Община Борово – адрес, телефони, електронна поща и приемно време.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/contacts" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("nav.contacts")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-4">
          <p className="text-muted-foreground">Адрес: ул. "Централна" №1, 7970 Борово</p>
          <p className="text-muted-foreground">Телефон: 070010502, Email: info@borovo.bg</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
