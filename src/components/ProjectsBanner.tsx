const ProjectsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-municipal-blue to-municipal-green py-6 my-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-municipal-blue rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">EU</div>
            </div>
            <div className="text-white">
              <div className="text-sm">Съфинансирано от</div>
              <div className="text-lg font-bold">Европейския съюз</div>
            </div>
          </div>
          <div className="text-white text-right">
            <div className="text-2xl font-bold">ПРОЕКТИ НА ОБЩИНА БОРОВО</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;