import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import backgroundImage from "../assets/404-background.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="text-center max-w-md mx-auto px-6 relative z-10">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Страницата не е намерена
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Съжаляваме, но страницата която търсите не съществува или е била преместена.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-municipal"
        >
          Връщане към началната страница
        </a>
      </div>
    </div>
  );
};

export default NotFound;
