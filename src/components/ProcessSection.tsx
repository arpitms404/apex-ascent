import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Palette, Zap, Rocket } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery", desc: "We deep-dive into your business, users, and goals to define a crystal-clear roadmap.", icon: Search },
  { num: "02", title: "Design", desc: "Premium UI/UX design that delights users and aligns with your brand identity.", icon: Palette },
  { num: "03", title: "Development", desc: "Agile engineering with clean code, automated testing, and continuous integration.", icon: Zap },
  { num: "04", title: "Deploy & Scale", desc: "Launch with confidence. We handle infrastructure, monitoring, and continuous optimization.", icon: Rocket },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="process" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards" : "none" }}>
            Our Process
          </span>
          <h2 className="font-display text-display font-bold text-foreground mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 100ms forwards" : "none" }}>
            From <span className="text-gradient-brand">Idea to Impact</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 200ms forwards" : "none" }}>
            A battle-tested process refined over hundreds of successful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative group bg-card rounded-2xl border border-border/50 p-7 hover:-translate-y-2 hover:shadow-hover-brand transition-all duration-500 opacity-0"
              style={{ animation: visible ? `fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 120 + 300}ms forwards` : "none" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={22} />
              </div>
              <div className="font-mono text-xs text-primary/50 mb-2">{s.num}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
