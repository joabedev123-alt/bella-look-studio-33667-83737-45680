import { Instagram, Facebook, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50 py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Studio de Estética Avançada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Especialista em cuidados corporais e faciais, oferecendo tratamentos personalizados que rejuvenescem, modelam e realçam a sua beleza natural com tecnologia e sensibilidade.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Drenagem Linfática</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Jato de Plasma</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Limpeza de Pele</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Ultracavitação</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Radiofrequência</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/estetica_jucicardoso?igsh=dWJ2M29kdm8wbzR3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/192XE18ZLC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:contato@exemplo.com" className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Studio de Beleza. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Beleza é confiança — e começa aqui <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;