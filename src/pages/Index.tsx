import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="services">
        <Services />
      </section>
      <CTA />
      <section id="about">
        <About />
      </section>
      <section id="location">
        <Location />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
