import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const whatsappNumber = "5511999999999";
  const address = "Rua Leodio João Martins, 500 - Sala 101 - Kobrasol, São José - Florianópolis, SC";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Leodio+João+Martins,+500+-+Kobrasol,+São+José+-+Florianópolis,+SC";

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Localização & Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nosso espaço exclusivo e agende seu horário
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4789!2d-48.6369!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738c6e0b7f9a5%3A0x6c1b7c0b7c0b7c0b!2sRua%20Leodio%20João%20Martins%2C%20500%20-%20Kobrasol%2C%20São%20José%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Studio - Kobrasol, São José, Florianópolis"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Address */}
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">{address}</p>
                  <Button
                    variant="link"
                    className="px-0 mt-2"
                    asChild
                  >
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Como chegar →
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 9h às 19h</p>
                    <p>Sábado: 9h às 15h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">Contato</h3>
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
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
    </section>
  );
};

export default Location;
