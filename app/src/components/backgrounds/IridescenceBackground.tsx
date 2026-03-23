import { useEffect, useRef } from 'react';

export function IridescenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const hslToRgb = (h: number, s: number, l: number) => {
      s /= 100;
      l /= 100;
      const k = (n: number) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [
        Math.round(f(0) * 255),
        Math.round(f(8) * 255),
        Math.round(f(4) * 255)
      ];
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      time += 0.005;

      const gradient = ctx.createRadialGradient(
        width * (0.3 + mouseX * 0.4),
        height * (0.3 + mouseY * 0.4),
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );

      const hue1 = (time * 20 + mouseX * 60) % 360;
      const hue2 = (hue1 + 60 + mouseY * 40) % 360;
      const hue3 = (hue2 + 60) % 360;

      const [r1, g1, b1] = hslToRgb(hue1, 70, 20);
      const [r2, g2, b2] = hslToRgb(hue2, 60, 25);
      const [r3, g3, b3] = hslToRgb(hue3, 80, 15);

      gradient.addColorStop(0, `rgb(${r1}, ${g1}, ${b1})`);
      gradient.addColorStop(0.5, `rgb(${r2}, ${g2}, ${b2})`);
      gradient.addColorStop(1, `rgb(${r3}, ${g3}, ${b3})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add shimmer effect
      for (let i = 0; i < 5; i++) {
        const x = width * (0.2 + Math.sin(time + i * 1.2) * 0.3);
        const y = height * (0.2 + Math.cos(time * 0.8 + i * 0.9) * 0.3);
        const radius = 100 + Math.sin(time * 2 + i) * 50;

        const shimmer = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const shimmerHue = (hue1 + i * 30) % 360;
        const [sr, sg, sb] = hslToRgb(shimmerHue, 90, 60);
        shimmer.addColorStop(0, `rgba(${sr}, ${sg}, ${sb}, 0.15)`);
        shimmer.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = shimmer;
        ctx.fillRect(0, 0, width, height);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ filter: 'blur(1px)' }}
    />
  );
}
