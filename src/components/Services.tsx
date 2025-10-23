import { Wind, Sparkles, Droplet, Zap, Radio } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Drenagem Linfática",
    description: "Técnica suave e eficaz que estimula a circulação, elimina toxinas e reduz o inchaço corporal. Ideal para promover bem-estar, leveza e equilíbrio ao seu corpo.",
  },
  {
    icon: Sparkles,
    title: "Tratamento com Jato de Plasma",
    description: "Procedimento estético avançado que estimula a regeneração da pele, reduz rugas, flacidez e manchas. Proporciona um efeito de rejuvenescimento natural e duradouro, sem cortes nem cirurgias.",
  },
  {
    icon: Droplet,
    title: "Limpeza de Pele & Skincare",
    description: "Tratamentos faciais profissionais para uma pele radiante, saudável e rejuvenescida.",
  },
  {
    icon: Zap,
    title: "Tratamento com Ultracavitação",
    description: "Tecnologia estética que auxilia na redução de gordura localizada e remodelagem corporal. As ondas ultrassônicas atuam diretamente nas células de gordura, proporcionando contornos mais definidos e um visual mais harmonioso sem procedimentos invasivos.",
  },
  {
    icon: Radio,
    title: "Tratamento com Radiofrequência",
    description: "Procedimento que utiliza energia térmica para estimular a produção natural de colágeno e elastina. Ideal para melhorar a firmeza da pele, reduzir flacidez e realçar o contorno facial e corporal com resultados progressivos e duradouros.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos exclusivos para realçar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
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
