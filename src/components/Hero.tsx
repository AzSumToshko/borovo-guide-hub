import borovoHero from "@/assets/borovo-hero.jpg";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${borovoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-municipal-navy/90 via-municipal-navy/70 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ОБЩИНА <span className="text-municipal-green">БОРОВО</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Добре дошли в официалния сайт на Община Борово. 
            Вашият дигитален достъп до всички общински услуги.
          </p>
          
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5 text-municipal-green" />
            <span>гр. Борово, Област Русе</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-municipal-green/20 to-transparent"></div>
    </section>
  );
};

export default Hero;