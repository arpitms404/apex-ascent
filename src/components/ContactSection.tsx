import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { RadialSocialMenu } from "@/components/ui/radial-social-menu";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal(0.1);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards" : "none" }}>
              Get In Touch
            </span>
            <h2 className="font-display text-display font-bold text-foreground mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 100ms forwards" : "none" }}>
              Let's Build Something <span className="text-gradient-brand">Extraordinary</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 200ms forwards" : "none" }}>
              Ready to transform your business? Tell us about your project.
            </p>
          </div>

          {/* Radial Social Menu */}
          <div className="mb-16 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 250ms forwards" : "none" }}>
            <RadialSocialMenu />
          </div>

          <div
            className="glass rounded-3xl p-8 md:p-12 shadow-luxury-brand opacity-0"
            style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 300ms forwards" : "none" }}
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "company", label: "Company Name", type: "text" },
                { name: "phone", label: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.name} className="relative">
                  <input
                    type={f.type}
                    id={f.name}
                    className="peer w-full bg-card border border-border rounded-xl px-4 pt-6 pb-2 font-body text-sm text-foreground outline-none focus:border-primary focus:shadow-glow-brand transition-all duration-300"
                    placeholder=" "
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                  />
                  <label
                    htmlFor={f.name}
                    className={`absolute left-4 top-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                      focused === f.name
                        ? "text-primary text-[11px] -translate-y-2.5 scale-90 origin-left"
                        : "text-muted-foreground peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:origin-left peer-[:not(:placeholder-shown)]:text-primary"
                    }`}
                  >
                    {f.label}
                  </label>
                </div>
              ))}

              <div className="md:col-span-2 relative">
                <select
                  id="service"
                  className="w-full bg-card border border-border rounded-xl px-4 py-4 font-body text-sm text-muted-foreground outline-none focus:border-primary focus:shadow-glow-brand transition-all duration-300 appearance-none"
                >
                  <option value="">Select Service</option>
                  <option>Website Development</option>
                  <option>Mobile Application</option>
                  <option>Hospital ERP</option>
                  <option>School ERP</option>
                  <option>Banking Software</option>
                  <option>Custom ERP Solution</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              <div className="md:col-span-2 relative">
                <textarea
                  id="message"
                  rows={4}
                  className="peer w-full bg-card border border-border rounded-xl px-4 pt-6 pb-2 font-body text-sm text-foreground outline-none focus:border-primary focus:shadow-glow-brand transition-all duration-300 resize-none"
                  placeholder=" "
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 top-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                    focused === "message"
                      ? "text-primary text-[11px] -translate-y-2.5 scale-90 origin-left"
                      : "text-muted-foreground peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:origin-left peer-[:not(:placeholder-shown)]:text-primary"
                  }`}
                >
                  Tell us about your project
                </label>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-[15px] py-4 rounded-full shadow-card-brand shimmer-btn hover:shadow-hover-brand hover:scale-[1.01] transition-all duration-300 active:scale-[0.99] group"
                >
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  Submit Your Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
