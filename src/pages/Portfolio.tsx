import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Monitor, Smartphone, Building2, GraduationCap, Landmark, Blocks } from "lucide-react";

const projects = [
  {
    title: "MediCare Pro — Hospital ERP",
    description: "Complete hospital management system handling 500+ daily patients across 12 departments. Real-time bed management, pharmacy, lab integration, and billing.",
    image: "linear-gradient(135deg, hsl(var(--accent-emerald)) 0%, hsl(var(--accent-teal)) 100%)",
    icon: Building2,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    category: "Healthcare",
    stats: { users: "2,400+", uptime: "99.97%", transactions: "1.2M+" },
  },
  {
    title: "EduFlow — School Management",
    description: "Multi-branch school ERP serving 15,000+ students. Online admissions, attendance tracking, grade management, parent portal, and fee collection.",
    image: "linear-gradient(135deg, hsl(var(--accent-gold)) 0%, hsl(var(--accent-rose)) 100%)",
    icon: GraduationCap,
    tags: ["Next.js", "Supabase", "Flutter", "AWS"],
    category: "Education",
    stats: { users: "15K+", branches: "8", satisfaction: "98%" },
  },
  {
    title: "SecurePay — Banking Platform",
    description: "PCI-DSS compliant digital banking solution with real-time payments, KYC verification, loan management, and fraud detection powered by ML.",
    image: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--brand-deep)) 100%)",
    icon: Landmark,
    tags: ["Java", "Spring Boot", "Kafka", "Redis"],
    category: "Fintech",
    stats: { transactions: "₹50Cr+", latency: "<200ms", compliance: "PCI-DSS" },
  },
  {
    title: "ShopSphere — E-Commerce Platform",
    description: "High-performance e-commerce platform handling 100K+ products with AI-powered recommendations, multi-vendor support, and real-time inventory sync.",
    image: "linear-gradient(135deg, hsl(var(--accent-purple)) 0%, hsl(var(--primary)) 100%)",
    icon: Monitor,
    tags: ["React", "GraphQL", "Elasticsearch", "Stripe"],
    category: "E-Commerce",
    stats: { products: "100K+", orders: "5K/day", conversion: "+34%" },
  },
  {
    title: "FleetTrack — Logistics App",
    description: "Real-time fleet management mobile app with GPS tracking, route optimization, driver management, and automated dispatch for a logistics company.",
    image: "linear-gradient(135deg, hsl(var(--accent-teal)) 0%, hsl(var(--accent-emerald)) 100%)",
    icon: Smartphone,
    tags: ["Flutter", "Firebase", "Google Maps", "Node.js"],
    category: "Logistics",
    stats: { vehicles: "500+", deliveries: "2K/day", savings: "28%" },
  },
  {
    title: "ManufacturePro — Custom ERP",
    description: "Tailored ERP for a manufacturing company integrating inventory, procurement, production planning, quality control, and financial reporting.",
    image: "linear-gradient(135deg, hsl(var(--accent-rose)) 0%, hsl(var(--accent-purple)) 100%)",
    icon: Blocks,
    tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
    category: "Manufacturing",
    stats: { modules: "12", efficiency: "+45%", ROI: "3.2x" },
  },
];

const Portfolio = () => {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <section className="pt-32 pb-24 md:pb-32" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span
              className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary font-medium mb-4 opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards" : "none" }}
            >
              Our Portfolio
            </span>
            <h1
              className="font-display text-hero font-bold text-foreground mb-6 opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 100ms forwards" : "none" }}
            >
              Projects That <span className="text-gradient-brand">Speak Results</span>
            </h1>
            <p
              className="font-body text-lg text-muted-foreground leading-relaxed opacity-0"
              style={{ animation: visible ? "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 200ms forwards" : "none" }}
            >
              A curated selection of our finest work — enterprise-grade software that drives measurable business impact across industries.
            </p>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:-translate-y-2 hover:shadow-hover-brand hover:border-primary/20 transition-all duration-500 opacity-0"
                style={{ animation: visible ? `fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 100 + 300}ms forwards` : "none" }}
              >
                {/* Project visual */}
                <div className="relative h-48 overflow-hidden" style={{ background: project.image }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={48} className="text-primary-foreground/30" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3">
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <ExternalLink size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <Github size={16} />
                    </button>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass-subtle rounded-pill px-3 py-1 font-mono text-[10px] uppercase tracking-wider font-medium text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 py-3 border-t border-b border-border/50">
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key} className="flex-1 text-center">
                        <div className="font-display text-sm font-bold text-foreground">{val}</div>
                        <div className="font-body text-[10px] text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-primary bg-brand-light px-2.5 py-1 rounded-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
