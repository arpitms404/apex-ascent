import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Website Development",
    desc: "Stunning, responsive websites that convert visitors into customers. Built with modern frameworks for blazing speed.",
    tags: ["React", "Next.js", "Laravel"],
    color: "from-primary to-accent-teal",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps with pixel-perfect UI. iOS and Android, one codebase, zero compromise.",
    tags: ["Flutter", "React Native", "Swift"],
    color: "from-accent-purple to-accent-rose",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18M3 15h18M8 3v18M16 3v18" />
      </svg>
    ),
    title: "Hospital ERP",
    desc: "End-to-end hospital management. Patient records, billing, pharmacy, lab, and appointments — all unified.",
    tags: ["HIPAA", "HL7", "Cloud"],
    color: "from-accent-emerald to-accent-teal",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "School ERP",
    desc: "Complete school management — admissions, attendance, grading, timetable, and parent communication.",
    tags: ["Multi-branch", "Analytics", "SaaS"],
    color: "from-accent-gold to-accent-rose",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
      </svg>
    ),
    title: "Banking Software",
    desc: "Secure, compliant banking solutions. Core banking, payments, KYC, and real-time transaction processing.",
    tags: ["PCI-DSS", "AML", "Real-time"],
    color: "from-primary to-brand-deep",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Custom ERP Solutions",
    desc: "Tailored enterprise resource planning that fits your exact workflow. Inventory, HR, finance — fully integrated.",
    tags: ["Scalable", "API-first", "Modular"],
    color: "from-accent-teal to-accent-purple",
  },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 opacity-0" style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards" : "none" }}>
            Our Services
          </span>
          <h2
            className="font-display text-display font-bold text-foreground mb-4 opacity-0"
            style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 100ms forwards" : "none" }}
          >
            Solutions That <span className="text-gradient-brand">Scale</span>
          </h2>
          <p
            className="font-body text-muted-foreground text-lg opacity-0"
            style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 200ms forwards" : "none" }}
          >
            From startups to enterprises, we build software that drives measurable business outcomes.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl border border-border/50 p-7 hover:-translate-y-2 hover:shadow-hover-brand hover:border-primary/20 transition-all duration-500 cursor-pointer opacity-0"
              style={{ animation: visible ? `fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 100 + 300}ms forwards` : "none" }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] text-primary bg-brand-light px-2.5 py-1 rounded-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
