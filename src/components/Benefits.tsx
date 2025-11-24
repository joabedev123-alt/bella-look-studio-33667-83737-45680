import { Heart, Sparkles, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "✨ Cuidado Sob Medida",
    description: "Cada pessoa possui características únicas. Por isso, desenvolvemos protocolos personalizados que unem técnica, sensibilidade e precisão para valorizar o melhor da sua beleza natural.",
  },
  {
    icon: Sparkles,
    title: "✨ Tecnologia Avançada",
    description: "Trabalhamos com métodos modernos e equipamentos atualizados, garantindo procedimentos confortáveis, seguros e com resultados visíveis desde as primeiras sessões.",
  },
  {
    icon: Shield,
    title: "✨ Produtos de Alta Performance",
    description: "Utilizamos somente produtos selecionados, dermatologicamente testados e aprovados, que potencializam os resultados e cuidam da saúde da pele.",
  },
  {
    icon: Users,
    title: "✨ Atendimento Premium",
    description: "Aqui, você recebe atenção total. Oferecemos um ambiente acolhedor e um atendimento individualizado, pensado para proporcionar bem-estar, confiança e uma experiência memorável.",
  },
];

const Benefits = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Compromisso com a excelência em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
