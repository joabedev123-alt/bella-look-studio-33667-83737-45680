import { Heart, Sparkles, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Design Personalizado",
    description: "Cada corpo tem sua própria beleza e necessidade. Por isso, desenvolvemos cuidados exclusivos que equilibram tecnologia e sensibilidade para realçar o seu bem-estar e revelar o melhor da sua pele.",
  },
  {
    icon: Sparkles,
    title: "Técnicas Modernas",
    description: "Métodos avançados e indolores que garantem resultados naturais e duradouros.",
  },
  {
    icon: Shield,
    title: "Produtos Premium",
    description: "Utilizamos apenas produtos de alta qualidade, hipoalergênicos e certificados.",
  },
  {
    icon: Users,
    title: "Atendimento Exclusivo",
    description: "Ambiente acolhedor e atendimento individualizado focado no seu bem-estar.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com a excelência em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
