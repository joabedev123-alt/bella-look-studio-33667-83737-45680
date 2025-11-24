import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const Location = () => {
  const whatsappNumber = "5551994698093";
  const whatsappMessage = encodeURIComponent("Agende agora sua experiência Full Beauty");
  const address = "Rua João arruda de Oliveira, 421 - Sala 02 - Guaíba / RS";
  const cep = "92700-360";
  const cnpj = "60.197.595/0001-49";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+João+arruda+de+Oliveira,+421+-+Sala+02+-+Guaíba,+RS";
  return <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Localização & Contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Visite nosso espaço exclusivo e agende seu horário
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] md:h-[400px] animate-fade-in">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4789!2d-51.3250!3d-30.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519789a5c0b7f9a5%3A0x6c1b7c0b7c0b7c0b!2sRua%20João%20arruda%20de%20Oliveira%2C%20421%20-%20Sala%2002%20-%20Guaíba%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Studio - Guaíba, RS" />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
            {/* Address */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground mb-1 text-sm sm:text-base">{address}</p>
                  <p className="text-muted-foreground mb-1 text-sm sm:text-base">CEP: {cep}</p>
                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">CNPJ: {cnpj}</p>
                  <Button variant="link" className="px-0 mt-2 text-sm" asChild>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Como chegar →
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-1 text-sm sm:text-base">
                    <p>Segunda a Sexta: 9h às 21h</p>
                    <p>Sábado: 9h às 21h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-3">Contato</h3>
                  <Button variant="whatsapp" className="w-full text-sm sm:text-base" asChild>
                    <a href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <MessageCircle className="mr-2" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;