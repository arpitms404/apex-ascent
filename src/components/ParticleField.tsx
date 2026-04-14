import { useEffect, useRef } from "react";

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      size: [2, 3, 4][Math.floor(Math.random() * 3)],
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: 0.1 + Math.random() * 0.2,
      pulseSpeed: 0.5 + Math.random() * 1.5,
      depth: Math.random(),
    }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      particles.forEach((p) => {
        // Parallax offset based on mouse
        const parallaxX = (mouseX - 0.5) * p.depth * 20;
        const parallaxY = (mouseY - 0.5) * p.depth * 20;

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const pulse = Math.sin(time * 0.001 * p.pulseSpeed) * 0.5 + 0.5;
        const alpha = p.opacity * (0.5 + pulse * 0.5);

        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(204, 64%, 50%, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleField;
