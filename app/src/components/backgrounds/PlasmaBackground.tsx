import { useEffect, useRef } from 'react';

export function PlasmaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const noise = (x: number, y: number, t: number) => {
      const scale = 0.003;
      return (
        Math.sin(x * scale + t) * Math.cos(y * scale + t) +
        Math.sin((x + y) * scale * 0.5 + t * 1.5) * 0.5 +
        Math.cos(x * scale * 2 - t * 0.5) * Math.sin(y * scale * 2) * 0.3
      );
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      time += 0.008;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const n1 = noise(x, y, time);
          const n2 = noise(x + 100, y + 100, time * 0.7);
          const n3 = noise(x - 50, y - 50, time * 1.3);

          const r = Math.floor(128 + n1 * 80 + n2 * 40);
          const g = Math.floor(50 + n2 * 60 + n3 * 40);
          const b = Math.floor(150 + n3 * 80 + n1 * 30);

          const idx = (y * width + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;

          if (x + 1 < width) {
            const idx2 = idx + 4;
            data[idx2] = r;
            data[idx2 + 1] = g;
            data[idx2 + 2] = b;
            data[idx2 + 3] = 255;
          }
          if (y + 1 < height) {
            const idx3 = ((y + 1) * width + x) * 4;
            data[idx3] = r;
            data[idx3 + 1] = g;
            data[idx3 + 2] = b;
            data[idx3 + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)',
        filter: 'blur(0.5px)'
      }}
    />
  );
}
