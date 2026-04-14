import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProcessSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
