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
            <h1 className="text-4xl font-bold mb-4">Достъпност на съдържанието</h1>
            <p className="text-xl opacity-90">{desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <a href="/accessibility-declaration" className="block">
                <h2 className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-2">
                  <span className="text-primary">▶</span>
                  Декларация за достъпност
                </h2>
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <a href="/accessibility-policy" className="block">
                <h2 className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-2">
                  <span className="text-primary">▶</span>
                  Политика за достъпност
                </h2>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityStatementPage;
