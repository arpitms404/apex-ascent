import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal(0.15);

  const stats = [
    { label: "Projects Delivered", target: 100, suffix: "+" },
    { label: "Happy Clients", target: 85, suffix: "+" },
    { label: "Team Members", target: 40, suffix: "+" },
    { label: "Years Experience", target: 8, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards" : "none" }}>
              About SkillLogic
            </span>
            <h2
              className="font-display text-display font-bold text-foreground mb-6 opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 100ms forwards" : "none" }}
            >
              Engineering Digital Solutions That <span className="text-gradient-brand">Drive Real Growth</span>
            </h2>
            <p
              className="font-body text-muted-foreground text-lg leading-relaxed mb-6 opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 200ms forwards" : "none" }}
            >
              We are a premium software development company that transforms businesses through technology. Our team of expert engineers, designers, and strategists work together to build solutions that don't just work — they dominate.
            </p>
            <p
              className="font-body text-muted-foreground leading-relaxed mb-8 opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 300ms forwards" : "none" }}
            >
              From healthcare to fintech, education to enterprise — we've delivered mission-critical software that processes millions of transactions and serves thousands of users daily.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} visible={visible} delay={i * 100 + 400} />
              ))}
            </div>
          </div>

          {/* Right - visual */}
          <div className="relative opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 300ms forwards" : "none" }}>
            <div className="glass rounded-3xl p-8 shadow-luxury-brand">
              <div className="space-y-4">
                {[
                  { label: "Custom Software", value: 95 },
                  { label: "Client Satisfaction", value: 98 },
                  { label: "On-Time Delivery", value: 92 },
                  { label: "Code Quality", value: 96 },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
                      <span className="font-mono text-sm font-semibold text-primary">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-teal"
                        style={{
                          width: visible ? `${item.value}%` : "0%",
                          transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 200 + 500}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, target, suffix, visible, delay }: { label: string; target: number; suffix: string; visible: boolean; delay: number }) => {
  const value = useCountUp(target, visible);
  return (
    <div
      className="glass rounded-xl p-5 text-center hover:shadow-float-brand transition-all duration-300 opacity-0"
      style={{ animation: visible ? `fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms forwards` : "none" }}
    >
      <div className="font-display text-2xl font-bold text-foreground">{value}{suffix}</div>
      <div className="font-body text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default AboutSection;
