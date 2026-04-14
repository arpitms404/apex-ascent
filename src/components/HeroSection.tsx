import ParticleField from "@/components/ParticleField";
import DashboardVisual from "@/components/DashboardVisual";

const capabilityTags = [
  "Website Development", "Mobile Apps", "Hospital ERP",
  "School ERP", "Banking Software", "Custom ERP",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 40%, hsl(204 64% 50% / 0.04) 0%, hsl(var(--background)) 60%)",
      }}
    >
      <ParticleField />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-xl">
            {/* Prestige badge */}
            <div className="inline-flex items-center gap-2 glass-subtle rounded-pill px-4 py-2 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: "pulse-dot 2s infinite" }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gradient-brand font-medium">
                ◈ Engineering Digital Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-luxury-hero leading-[1.1] tracking-tight mb-6">
              <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>Build Powerful Software</span>
              <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>That Drives Real</span>
              <span className="block text-gradient-brand opacity-0 animate-fade-up" style={{ animationDelay: "500ms", backgroundSize: "200% 200%", animation: "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 500ms forwards, gradient-shift 10s ease infinite" }}>
                Business Growth.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-[520px] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
              Transform ambitious ideas into high-performance digital products. Enterprise-grade solutions built to scale, built to dominate.
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2.5 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "700ms" }}>
              {capabilityTags.map((tag) => (
                <span
                  key={tag}
                  className="glass-subtle rounded-pill px-4 py-2 font-body text-xs font-medium text-muted-foreground cursor-pointer hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:scale-105 hover:shadow-float-brand transition-all duration-300 active:scale-95"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <a
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-[15px] px-8 py-4 rounded-pill shadow-card-brand shimmer-btn hover:shadow-hover-brand hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
              >
                🚀 Start Your Project
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 glass-subtle font-body font-semibold text-[15px] px-8 py-4 rounded-pill hover:bg-brand-light hover:border-primary/30 transition-all duration-300"
              >
                📞 Book Consultation
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "900ms" }}>
              {[
                "Trusted by 100+ businesses",
                "Enterprise-grade infrastructure",
                "99.9% uptime SLA",
              ].map((t, i) => (
                <div key={t} className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent-emerald shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: `draw-check 0.6s ease-out ${i * 200 + 1000}ms forwards` }}
                    />
                  </svg>
                  <span className="font-body text-xs font-medium text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1100ms" }}>
              <div className="flex -space-x-2.5">
                {["#2B8FD4", "#10B981", "#F59E0B", "#7C3AED", "#F43F5E"].map((c, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-card flex items-center justify-center font-display text-xs font-semibold text-primary-foreground shadow-card-brand hover:scale-110 hover:z-10 transition-transform duration-200"
                    style={{ background: c, zIndex: 5 - i }}
                  >
                    {["A", "R", "S", "K", "P"][i]}
                  </div>
                ))}
              </div>
              <div className="glass-subtle rounded-lg px-4 py-2.5">
                <div className="font-display text-sm font-bold text-foreground">100+ Projects</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" className="text-accent-gold" style={{ animation: `star-fill 0.3s ease-out ${i * 100 + 1200}ms forwards`, opacity: 0 }}>
                      <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="font-mono text-[10px] text-muted-foreground ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Dashboard */}
          <div className="relative lg:pl-8">
            <DashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
