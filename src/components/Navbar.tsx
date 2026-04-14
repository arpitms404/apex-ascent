import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-skilllogic.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-card-brand py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="SkillLogic Technologies" className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative overflow-hidden inline-flex items-center gap-2 font-body text-sm font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-pill shadow-card-brand shimmer-btn transition-all duration-300 hover:shadow-float-brand hover:scale-[1.02] group"
            >
              Get Demo
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-foreground" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[10000]">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass animate-slide-in-right">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col px-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-lg font-semibold py-5 border-b border-border/50 text-foreground hover:text-primary transition-colors"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 text-center font-body font-semibold bg-primary text-primary-foreground px-6 py-4 rounded-pill shadow-card-brand"
              >
                Get Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
