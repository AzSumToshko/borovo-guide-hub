import { Star, Globe } from "lucide-react";

const ProjectsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-6 sm:py-8 mx-4 sm:mx-6 lg:mx-8 rounded-lg relative overflow-hidden animate-fade-in">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full -mr-8 sm:-mr-16 -mt-8 sm:-mt-16"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-yellow-400/10 rounded-full -ml-6 sm:-ml-12 -mb-6 sm:-mb-12"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-400/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center relative">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-800" />
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <div className="text-xs sm:text-sm font-medium text-blue-100 mb-1">Съфинансирано от</div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Европейския съюз
              </div>
              <div className="text-xs sm:text-sm text-blue-200 mt-1">European Union Co-funded</div>
            </div>
          </div>
          <div className="text-white text-center sm:text-right">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
              ПРОЕКТИ НА ОБЩИНА БОРОВО
            </div>
            <div className="text-xs sm:text-sm text-blue-200 font-medium">
              Инвестиции в бъдещето на нашата община
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;