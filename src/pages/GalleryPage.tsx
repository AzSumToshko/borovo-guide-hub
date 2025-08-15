import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Download, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Всички" },
    { id: "events", name: "Събития" },
    { id: "nature", name: "Природа" },
    { id: "architecture", name: "Архитектура" },
    { id: "culture", name: "Култура" }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Централен площад на Борово",
      category: "architecture",
      image: "/lovable-uploads/37d18aff-611b-4870-8afe-79f9ca532baa.png",
      description: "Красивата архитектура на централния площад"
    },
    {
      id: 2,
      title: "Културно събитие",
      category: "events",
      image: "/lovable-uploads/627bea0f-1f17-4c4b-a0b3-339fbe6e6fc7.png",
      description: "Традиционен фестивал в града"
    },
    {
      id: 3,
      title: "Природни красоти",
      category: "nature",
      image: "/lovable-uploads/e0ddcfe3-4a8f-4931-a3bd-3208e8d74529.png",
      description: "Околностите на Борово"
    },
    {
      id: 4,
      title: "Исторически паметник",
      category: "architecture",
      image: "/src/assets/borovo-hero.jpg",
      description: "Архитектурно наследство"
    },
    {
      id: 5,
      title: "Градска градина",
      category: "nature",
      image: "/src/assets/gallery-showcase.jpg",
      description: "Зелените пространства в града"
    },
    {
      id: 6,
      title: "Общински сбор",
      category: "events",
      image: "/src/assets/borovo-hero.jpg",
      description: "Важни обществени събития"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Галерия - Община Борово</title>
        <meta name="description" content="Галерия със снимки от събития, природа и архитектура в Община Борово" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <main id="main">
        <div 
          className="bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground py-20 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/gallery-showcase.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">ГАЛЕРИЯ</h1>
            <p className="text-xl opacity-90">Открийте красотата на Борово през нашите снимки</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </div>

        {/* Gallery Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/src/assets/borovo-hero.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                          <div className="text-white">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="secondary" className="opacity-90 hover:opacity-100">
                                  <ZoomIn className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <img
                                  src={image.image}
                                  alt={image.title}
                                  className="w-full h-auto max-h-[70vh] object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src = '/src/assets/borovo-hero.jpg';
                                  }}
                                />
                                <div className="text-center pt-4">
                                  <h3 className="font-semibold text-lg">{image.title}</h3>
                                  <p className="text-muted-foreground">{image.description}</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="opacity-90 hover:opacity-100"
                              onClick={() => {
                                const link = document.createElement('a');
                                link.href = image.image;
                                link.download = `${image.title}.jpg`;
                                link.click();
                              }}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  Няма снимки в тази категория
                </h3>
                <p className="text-muted-foreground">
                  Изберете друга категория или вижте всички снимки.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;