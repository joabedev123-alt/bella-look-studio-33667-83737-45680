import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const whatsappNumber = "5554981125389";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de mais informações. Poderia me ajudar?");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content - Centralized */}
      <div className="container relative z-10 px-4 py-20 md:py-32 flex items-center justify-center">
        <div className="max-w-3xl text-center animate-fade-in-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-white text-sm font-medium">Mais de 500 clientes satisfeitas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Realce sua beleza natural e renove sua confiança!
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Cuide de você com o carinho e a atenção que merece. Revitalize seu corpo, desperte sua auto estima e sinta-se ainda mais confiante todos os dias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="lg"
              asChild
              className="group"
            >
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
                Agendar no WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver resultados
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
