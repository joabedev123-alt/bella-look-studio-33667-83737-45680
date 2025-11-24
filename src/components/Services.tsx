import { Sparkles, Eye, Footprints, Scissors, Hand } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Alongamento de Unhas",
    description: "Transforme suas mãos com alongamentos resistentes, naturais e elegantes. Trabalhamos com técnicas modernas que valorizam o formato natural das unhas, mantendo durabilidade, conforto e acabamento impecável. Ideal para clientes que buscam praticidade e beleza todos os dias.",
  },
  {
    icon: Eye,
    title: "Extensão de Cílios",
    description: "Realce o olhar com naturalidade e sofisticação. Oferecemos técnicas como fio a fio, híbrido e volume russo, sempre respeitando o formato ocular e a saúde dos seus cílios naturais. Resultado: um olhar marcante, leve e irresistível.",
  },
  {
    icon: Footprints,
    title: "Podologia",
    description: "Cuidado especializado para a saúde e bem-estar dos seus pés. Tratamento de calos, fissuras, unhas encravadas, micoses, hidratação profunda e prevenção de desconfortos. Nosso atendimento une técnica e sensibilidade, proporcionando alívio imediato e conforto prolongado.",
  },
  {
    icon: Scissors,
    title: "Cabeleireira",
    description: "Beleza, saúde e brilho para seus cabelos. Realizamos escovas, cortes, colorações, hidratações, nutrições, cronograma capilar e tratamentos profissionais que devolvem vida aos fios. Trabalhamos com produtos de alta performance e técnicas atualizadas para resultados surpreendentes.",
  },
  {
    icon: Hand,
    title: "Manicure e Pedicure",
    description: "Cuidado impecável para suas mãos e pés. Esmaltação perfeita, cutilagem delicada e acabamento profissional. Oferecemos esmaltação tradicional, gel, blindagem e spa dos pés. Suas unhas bonitas, bem cuidadas e saudáveis todos os dias.",
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            💅 Serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Cuidados completos com unhas, cílios, cabelos e estética
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-xs sm:text-sm">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
