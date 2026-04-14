import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const DashboardVisual = () => {
  const { ref, visible } = useScrollReveal(0.1);

  const revenue = useCountUp(246, visible);
  const projects = useCountUp(1284, visible);
  const uptime = useCountUp(984, visible);

  const bars = [40, 85, 60, 120, 95, 140, 75];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div ref={ref} className="relative" style={{ perspective: "1200px" }}>
      {/* Ambient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px]" style={{ animation: "orb-float-1 12s ease-in-out infinite" }} />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent-teal/10 blur-[60px]" style={{ animation: "orb-float-2 15s ease-in-out infinite" }} />
      <div className="absolute top-1/2 right-0 w-40 h-40 rounded-full bg-accent-purple/8 blur-[70px]" style={{ animation: "orb-float-3 18s ease-in-out infinite" }} />

      {/* Main dashboard card */}
      <div
        className={`relative glass rounded-3xl shadow-luxury-brand p-6 md:p-7 w-full max-w-[440px] mx-auto transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        style={{ transform: visible ? "rotateY(-4deg) rotateX(3deg)" : "rotateY(-8deg) rotateX(5deg)", transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
          </div>
          <span className="font-mono text-xs text-muted-foreground ml-2">Dashboard — Live Analytics</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-accent-emerald" style={{ animation: "pulse-dot 2s infinite" }} />
            <span className="font-mono text-[10px] text-accent-emerald">LIVE</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Revenue", value: `₹${(revenue / 10).toFixed(1)}L`, change: "▲ 12%", color: "text-accent-emerald" },
            { label: "Projects", value: projects.toLocaleString(), change: "▲ 8%", color: "text-accent-emerald" },
            { label: "Uptime", value: `${(uptime / 10).toFixed(1)}%`, change: "—", color: "text-muted-foreground" },
          ].map((m) => (
            <div key={m.label} className="bg-card/80 border border-primary/10 rounded-xl p-3 hover:bg-card hover:shadow-card-brand transition-all duration-300">
              <div className="font-display text-lg font-bold text-foreground">{m.value}</div>
              <div className="font-body text-[11px] text-muted-foreground">{m.label}</div>
              <div className={`font-mono text-[10px] ${m.color} mt-1`}>{m.change}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-card/50 rounded-xl p-4 border border-primary/5">
          <div className="flex items-end gap-2 h-28">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-primary/80 hover:bg-primary transition-colors duration-200"
                  style={{
                    height: visible ? `${(h / 140) * 100}%` : "0%",
                    transition: `height 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 100}ms`,
                    transformOrigin: "bottom",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            {days.map((d) => (
              <div key={d} className="flex-1 text-center font-mono text-[9px] text-muted-foreground">{d}</div>
            ))}
          </div>
        </div>

        {/* Status row */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {[
            { label: "Web Dev", color: "bg-accent-emerald" },
            { label: "Mobile", color: "bg-accent-gold" },
            { label: "ERP", color: "bg-primary" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${s.color}`} style={{ animation: `pulse-dot 2s infinite ${i * 300}ms` }} />
              <span className="font-mono text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Module Card */}
      <div
        className={`absolute -top-4 -right-4 md:top-[-20px] md:right-[-40px] w-52 glass rounded-2xl shadow-float-brand p-4 hidden lg:block ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ animation: visible ? "luxuryFloat 5s ease-in-out infinite" : "none", transition: "opacity 0.6s 0.4s" }}
      >
        <div className="font-display text-sm font-semibold text-foreground mb-3">Module Status</div>
        {[
          { name: "Hospital ERP", pct: 82 },
          { name: "School ERP", pct: 97 },
          { name: "Banking Suite", pct: 63 },
          { name: "Custom CRM", pct: 78 },
        ].map((m, i) => (
          <div key={m.name} className="mb-2.5">
            <div className="flex justify-between mb-1">
              <span className="font-body text-[11px] text-muted-foreground">{m.name}</span>
              <span className="font-mono text-[10px] font-semibold text-primary">{m.pct}%</span>
            </div>
            <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent-teal"
                style={{
                  width: visible ? `${m.pct}%` : "0%",
                  transition: `width 1s ease-out ${i * 200 + 600}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Alerts Card */}
      <div
        className={`absolute -bottom-6 -left-6 md:bottom-[-30px] md:left-[-50px] w-56 glass rounded-2xl shadow-float-brand p-4 hidden lg:block border-l-[3px] border-l-accent-emerald ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ animation: visible ? "luxuryFloatReverse 6s ease-in-out 1.5s infinite" : "none", transition: "opacity 0.6s 0.6s" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-display text-sm font-semibold">Live Feed</span>
        </div>
        {[
          { color: "bg-accent-emerald", msg: "Deployment successful", time: "2m ago" },
          { color: "bg-accent-gold", msg: "High traffic: 2.4K", time: "5m ago" },
          { color: "bg-primary", msg: "Backup completed", time: "12m ago" },
          { color: "bg-accent-purple", msg: "Feature deployed", time: "18m ago" },
        ].map((a) => (
          <div key={a.msg} className="flex items-start gap-2 mb-2 p-2 bg-card/60 rounded-lg hover:bg-card transition-colors">
            <div className={`w-2 h-2 rounded-full ${a.color} mt-1.5 shrink-0`} style={{ animation: "pulse-dot 2s infinite" }} />
            <div className="min-w-0">
              <div className="font-body text-[11px] text-foreground truncate">{a.msg}</div>
              <div className="font-mono text-[9px] text-muted-foreground">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardVisual;
