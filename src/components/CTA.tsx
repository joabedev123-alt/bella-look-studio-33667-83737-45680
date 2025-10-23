import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const CTA = () => {
  const whatsappNumber = "5511999999999"; // Atualizar com número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Vagas limitadas esta semana</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Reserve seu momento de cuidado e sinta a transformação que começa de dentro para fora.
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Entre em contato agora e descubra como podemos realçar sua beleza natural
          </p>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="lg"
            asChild
            className="text-base md:text-lg group w-full sm:w-auto px-6 md:px-8"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="truncate">Fale conosco no WhatsApp agora</span>
            </a>
          </Button>

          {/* Social Proof */}
          <p className="text-sm text-muted-foreground mt-6">
            ⭐ Mais de 500 clientes satisfeitas • Resposta em até 1 hora
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
