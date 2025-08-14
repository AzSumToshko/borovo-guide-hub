import { Star, Globe } from "lucide-react";

const ProjectsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-8 my-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-full -ml-12 -mb-12"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-400/30">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-blue-800" />
              </div>
            </div>
            <div className="text-white">
              <div className="text-sm font-medium text-blue-100 mb-1">Съфинансирано от</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Европейския съюз
              </div>
              <div className="text-sm text-blue-200 mt-1">European Union Co-funded</div>
            </div>
          </div>
          <div className="text-white text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
              ПРОЕКТИ НА ОБЩИНА БОРОВО
            </div>
            <div className="text-sm text-blue-200 font-medium">
              Инвестиции в бъдещето на нашата община
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;