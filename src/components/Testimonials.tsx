import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carla M.",
    location: "São Paulo",
    text: "Minhas sobrancelhas nunca ficaram tão lindas! O atendimento é impecável e o resultado superou todas as minhas expectativas.",
    rating: 5,
  },
  {
    name: "Juliana S.",
    location: "Rio de Janeiro",
    text: "Profissional incrível! Além do trabalho perfeito, o ambiente é super aconchegante. Já indiquei para todas as minhas amigas.",
    rating: 5,
  },
  {
    name: "Beatriz L.",
    location: "Belo Horizonte",
    text: "A micropigmentação fio a fio ficou extremamente natural. Acordar todos os dias com as sobrancelhas perfeitas não tem preço!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            O que nossas clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Histórias reais de transformação e confiança
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
