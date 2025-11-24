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

// Array vazio para adicionar novas imagens
const galleryItems: Array<{
  image?: string;
  title?: string;
  description?: string;
}> = [
  // Adicione suas imagens aqui
  // Exemplo:
  // {
  //   image: "caminho/para/imagem1.jpg",
  //   title: "Título da imagem",
  //   description: "Descrição da imagem",
  // },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Mudanças que Inspiram
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Veja como nossos cuidados transformam autoestima e beleza.
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
          className="w-full max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <CarouselContent>
            {galleryItems.length > 0 ? (
              galleryItems.map((item, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden bg-muted/50">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title || "Imagem da galeria"}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted/30">
                            <span className="text-muted-foreground text-xs sm:text-sm">Adicione uma imagem</span>
                          </div>
                        )}
                      </div>
                      {(item.title || item.description) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                          {item.title && <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>}
                          {item.description && <p className="text-white/90 text-xs sm:text-sm">{item.description}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))
            ) : (
              // Espaços vazios para novas imagens
              <>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-dashed border-border">
                      <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs sm:text-sm text-center px-4">Espaço para nova imagem</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-dashed border-border">
                      <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs sm:text-sm text-center px-4">Espaço para nova imagem</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-dashed border-border">
                      <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs sm:text-sm text-center px-4">Espaço para nova imagem</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </>
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group w-full sm:w-auto"
          >
            <a
              href="https://www.instagram.com/studiofullbeauty?igsh=Y21pMGJwc2NkeHgx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
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
