import borovoHero from "@/assets/borovo-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${borovoHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">ОБЩИНА БОРОВО</h1>
          <p className="text-xl opacity-90">Добре дошли в официалния сайт на Община Борово</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;