import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";
import treatment4 from "@/assets/treatment-4.jpg";
import treatment5 from "@/assets/treatment-5.jpg";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryItems = [
  {
    image: treatment1,
    title: "Tratamento com Jato de Plasma",
    description: "Rejuvenescimento facial natural",
  },
  {
    image: treatment2,
    title: "Limpeza de Pele Profunda",
    description: "Pele renovada e saudável",
  },
  {
    image: treatment3,
    title: "Tratamento de Rejuvenescimento",
    description: "Redução de flacidez e rugas",
  },
  {
    image: treatment4,
    title: "Radiofrequência Facial",
    description: "Contorno facial definido",
  },
  {
    image: treatment5,
    title: "Tratamento Anti-idade",
    description: "Resultados visíveis e duradouros",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transformações Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o antes e depois de nossos tratamentos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto mb-12"
        >
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group"
          >
            <a
              href="https://www.instagram.com/estetica_jucicardoso?igsh=dWJ2M29kdm8wbzR3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram className="mr-2 group-hover:scale-110 transition-transform" />
              Ver mais no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
