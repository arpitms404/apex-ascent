import logo from "@/assets/logo-skilllogic.png";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/skilllogic" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/skilllogic" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/skilllogic" },
  { icon: Github, label: "GitHub", href: "https://github.com/skilllogic" },
];

const aboutLinks = [
  { text: "About Us", href: "#about" },
  { text: "Our Process", href: "#process" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Careers", href: "#" },
];

const serviceLinks = [
  { text: "Website Development", href: "#services" },
  { text: "Mobile Apps", href: "#services" },
  { text: "Hospital ERP", href: "#services" },
  { text: "School ERP", href: "#services" },
  { text: "Banking Software", href: "#services" },
];

const helpfulLinks = [
  { text: "FAQs", href: "#" },
  { text: "Support", href: "#" },
  { text: "Live Chat", href: "#", hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: "hello@skilllogic.in" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: MapPin, text: "Hyderabad, India", isAddress: true },
];

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="SkillLogic Technologies" className="h-8" />
          </a>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
            Building beautiful and functional digital experiences with modern technologies. We help businesses create their digital presence and drive real growth.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-glow-brand hover:scale-105"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm mb-5">About Us</h4>
          <ul className="space-y-3">
            {aboutLinks.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm mb-5">Our Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm mb-5">Helpful Links</h4>
          <ul className="space-y-3">
            {helpfulLinks.map(({ text, href, hasIndicator }) => (
              <li key={text}>
                <a
                  href={href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                >
                  {text}
                  {hasIndicator && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm mb-5">Contact Us</h4>
          <ul className="space-y-3">
            {contactInfo.map(({ icon: Icon, text, isAddress }) => (
              <li key={text} className="flex items-start gap-2">
                <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                {isAddress ? (
                  <span className="font-body text-sm text-muted-foreground">{text}</span>
                ) : (
                  <a href={text.includes("@") ? `mailto:${text}` : `tel:${text.replace(/\s/g, "")}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border/40">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} SkillLogic Technologies
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
