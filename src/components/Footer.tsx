import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">КОНТАКТИ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <div>ул. "Централна" №1</div>
                  <div>7970 Борово</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>070010502</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@borovo.bg</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">РАБОТНО ВРЕМЕ</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div>
                  <div>Понеделник - Петък</div>
                  <div>08:30 - 17:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">БЪРЗИ ВРЪЗКИ</h3>
            <div className="space-y-2">
              <div><a href="/services" className="hover:text-primary-light transition-colors">Електронни услуги</a></div>
              <div><a href="/services/local-taxes" className="hover:text-primary-light transition-colors">Данъци и такси</a></div>
              <div><a href="/registers" className="hover:text-primary-light transition-colors">Публични регистри</a></div>
              <div><a href="/news/tenders" className="hover:text-primary-light transition-colors">Обяви и търгове</a></div>
              <div><a href="/accessibility" className="hover:text-primary-light transition-colors">Декларация за достъпност</a></div>
              <div><a href="/sitemap" className="hover:text-primary-light transition-colors">Карта на сайта</a></div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ЗА ОБЩИНА БОРОВО</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Община Борово е разположена в красивия български регион, където традициите се съчетават с модерното развитие за благополучието на всички граждани.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; 2025 Община Борово. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;