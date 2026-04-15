import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, Code, Fingerprint } from "lucide-react";

export const RadialSocialMenu: React.FC = () => {
  const icons = [
    { icon: <Github />, href: "https://github.com/skilllogic", label: "GitHub" },
    { icon: <Linkedin />, href: "https://linkedin.com/company/skilllogic", label: "LinkedIn" },
    { icon: <Twitter />, href: "https://twitter.com/skilllogic", label: "Twitter" },
    { icon: <Mail />, href: "mailto:hello@skilllogic.in", label: "Email" },
    { icon: <Code />, href: "#services", label: "Services" },
    { icon: <Fingerprint />, href: "#about", label: "About" },
  ];

  const radius = 140;
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setAngleOffset((prev) => prev + 0.002);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-[360px] h-[360px] mx-auto">
      {/* Center circle */}
      <div className="absolute z-10 flex items-center justify-center w-24 h-24 rounded-full bg-primary shadow-card-brand">
        <div className="text-center">
          <span className="font-display text-primary-foreground text-xs font-bold">SKILL</span>
          <span className="block font-display text-primary-foreground text-xs font-bold">LOGIC</span>
        </div>
      </div>

      {/* Orbit ring */}
      <div className="absolute w-[300px] h-[300px] rounded-full border border-border/40" />

      {/* Orbiting icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="absolute flex items-center justify-center w-12 h-12 rounded-full glass border border-border/50 shadow-card-brand hover:shadow-float-brand hover:scale-110 transition-all duration-300"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {React.cloneElement(item.icon, { size: 20, className: "text-foreground" })}
          </a>
        );
      })}
    </div>
  );
};
