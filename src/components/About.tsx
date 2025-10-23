import professionalPhoto from "@/assets/professional-juci.jpg";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src={professionalPhoto}
                alt="Profissional especialista em estética corporal e facial"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Clientes felizes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre a Profissional
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou especialista em estética corporal e facial, com mais de 8 anos de experiência dedicados a promover bem-estar, equilíbrio e autoestima através de tratamentos personalizados e tecnologias avançadas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acredito que cada pessoa possui uma beleza única — por isso, cada atendimento é pensado de forma individual, respeitando as necessidades do corpo e da pele para alcançar resultados naturais, eficazes e transformadores.
            </p>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Certificações Profissionais</h3>
                  <p className="text-muted-foreground text-sm">
                    Formação em Estética Avançada e especializações em procedimentos de rejuvenescimento facial e modelagem corporal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atendimento Humanizado</h3>
                  <p className="text-muted-foreground text-sm">
                    Cuidado individualizado em cada etapa do processo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
