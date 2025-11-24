import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
// import ctaVideo from "@/assets/cta-video.mp4"; // Adicione o caminho do seu novo vídeo aqui

const CTA = () => {
  const whatsappNumber = "5551994698093";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de mais informações. Poderia me ajudar?");

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Video with Overlay - Adicione seu novo vídeo aqui */}
      <div className="absolute inset-0">
        {/* 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={ctaVideo} type="video/mp4" />
        </video>
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-primary/20">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-medium">Vagas limitadas esta semana</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white px-2">
            Reserve seu momento de cuidado e sinta a transformação que começa de dentro para fora.
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e descubra como podemos realçar sua beleza natural
          </p>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="lg"
            asChild
            className="text-sm sm:text-base md:text-lg group w-full sm:w-auto px-4 sm:px-6 md:px-8"
          >
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="truncate">Fale conosco no WhatsApp agora</span>
            </a>
          </Button>

          {/* Social Proof */}
          <p className="text-xs sm:text-sm text-white/70 mt-4 sm:mt-6 px-2">
            ⭐ Mais de 500 clientes satisfeitas • Resposta em até 1 hora
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
