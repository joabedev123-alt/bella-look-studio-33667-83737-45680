import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import heroVideo from "@/assets/video hero/WhatsApp Video 2025-11-24 at 12.05.15.mp4";

const Hero = () => {
  const whatsappNumber = "5551994698093";
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
      <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-32 flex items-center justify-center">
        <div className="max-w-3xl text-center animate-fade-in-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/20">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" />
            <span className="text-white text-xs sm:text-sm font-medium">Mais de 500 clientes satisfeitas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Studio Full Beauty
            <br />
            Onde sua beleza é tratada com excelência.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Cuidados completos com unhas, cílios, cabelos e estética, realizados com capricho, técnica e produtos profissionais de alta performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
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
