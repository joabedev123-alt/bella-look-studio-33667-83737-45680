// import professionalPhoto from "@/assets/professional-juci.jpg"; // Adicione o caminho da sua nova imagem aqui
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image - Adicione sua nova imagem aqui */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] border-2 border-dashed border-border bg-muted/30">
              {/* 
              <img
                src={professionalPhoto}
                alt="Studio Full Beauty"
                className="w-full h-full object-cover object-center"
              />
              */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground text-xs sm:text-sm text-center px-4">Espaço para nova imagem</span>
              </div>
            
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-foreground">500+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Clientes felizes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Sobre Nós – Studio Full Beauty
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              O Studio Full Beauty nasceu com a missão de entregar beleza com excelência, oferecendo um atendimento humano, cuidadoso e totalmente personalizado. Aqui, cada cliente é tratada com carinho e respeito, e cada detalhe importa — do atendimento ao acabamento final.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Nosso propósito é proporcionar uma experiência única, unindo profissionalismo, ambiente acolhedor, técnicas atualizadas e produtos de alta qualidade. Cuidamos de você com capricho, delicadeza e dedicação, para que cada visita seja um momento especial.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-semibold">
              No Full Beauty, você não é apenas atendida — você é valorizada.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Excelência e Profissionalismo</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Técnicas atualizadas e produtos de alta qualidade para resultados excepcionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Cada cliente é tratada com carinho, respeito e atenção aos detalhes.
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
