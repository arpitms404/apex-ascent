import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { RadialSocialMenu } from "@/components/ui/radial-social-menu";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    {/* Radial Social Menu */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-heading font-bold text-foreground mb-4">Connect With Us</h3>
        <p className="font-body text-muted-foreground mb-10">Follow us across platforms</p>
        <RadialSocialMenu />
      </div>
    </section>
    <AboutSection />
    <ProcessSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
