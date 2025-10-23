import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WhatsAppButton = () => {
  const whatsappNumber = "5554981125389";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de mais informações. Poderia me ajudar?");

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-10 h-10 group-hover:rotate-12 transition-transform"
      />
    </a>
  );
};

export default WhatsAppButton;
