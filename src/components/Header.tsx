import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "/faveicon1/modelo 2_page-0001-Photoroom.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = "5551994698093";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de mais informações. Poderia me ajudar?");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Início",
    href: "#hero"
  }, {
    label: "Benefícios",
    href: "#benefits"
  }, {
    label: "Galeria",
    href: "#gallery"
  }, {
    label: "Serviços",
    href: "#services"
  }, {
    label: "Sobre",
    href: "#about"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="#hero" 
              onClick={e => {
                e.preventDefault();
                scrollToSection("#hero");
              }} 
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src={logo} 
                alt="Studio Full Beauty" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }} 
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button 
              variant="whatsapp"
              size="default" 
              asChild
            >
              <a 
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 animate-fade-in border-t border-border pt-3 sm:pt-4">
            <nav className="flex flex-col gap-2 sm:gap-3">
              {navItems.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }} 
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1.5 sm:py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="whatsapp"
                size="default" 
                className="mt-2 w-full text-sm" 
                asChild
              >
                <a 
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;