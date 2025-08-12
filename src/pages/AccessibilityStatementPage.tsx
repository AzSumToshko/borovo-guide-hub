import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n";

const AccessibilityStatementPage = () => {
  const { t } = useI18n();
  const title = `${t("footer.accessibility")} | ${t("site.name")}`;
  const desc = "Декларация за достъпност съгласно EN 301 549 / WCAG 2.1 AA.";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://borovo.bg/accessibility" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Helmet>
      <Header />
      <main id="main">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{t("footer.accessibility")}</h1>
            <p className="opacity-90 mt-2">{desc}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 space-y-4 text-muted-foreground">
          <p>Ние се стремим да осигурим достъпност на нашия сайт за всички потребители. Ако срещнете проблеми, свържете се с нас на info@borovo.bg.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityStatementPage;
