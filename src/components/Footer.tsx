import { Instagram, Facebook, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-b from-foreground/30 via-foreground/35 to-foreground/40 border-t border-border/50 py-8 sm:py-10 md:py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="mb-3 sm:mb-4">
                <img 
                  src="/faveicon1/modelo 2_page-0001-Photoroom.png" 
                  alt="Studio Full Beauty" 
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Cuidados completos com unhas, cílios, cabelos e estética, realizados com capricho, técnica e produtos profissionais de alta performance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Serviços</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><a href="#services" className="hover:text-primary transition-colors">Unhas</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Cílios</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Cabelos</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Estética</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://www.instagram.com/studiofullbeauty?igsh=Y21pMGJwc2NkeHgx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.facebook.com/share/192XE18ZLC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:contato@exemplo.com" className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" aria-label="Email">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Studio Full Beauty. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-2">
              Beleza é confiança — e começa aqui <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;