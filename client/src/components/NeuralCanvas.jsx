import { useEffect, useRef } from 'react';

// Lightweight animated neural network built with Canvas; no external asset/API required.
export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let width = 0;
    let height = 0;
    let points = [];
    let tick = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      points = Array.from({ length: 54 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.15
      }));
    };

    const draw = () => {
      tick += 0.008;
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.52;
      const cy = height * 0.48;
      const maxDist = Math.min(width, height) * 0.24;

      // Orb glow
      const glow = ctx.createRadialGradient(cx, cy, 2, cx, cy, maxDist * 2.1);
      glow.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      glow.addColorStop(0.48, 'rgba(0, 150, 199, 0.16)');
      glow.addColorStop(1, 'rgba(0, 150, 199, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const moved = points.map((p) => ({
        ...p,
        x: p.x + Math.sin(tick * p.speed + p.phase) * 1.2,
        y: p.y + Math.cos(tick * p.speed + p.phase) * 1.2
      }));

      moved.forEach((p, i) => {
        for (let j = i + 1; j < moved.length; j++) {
          const q = moved[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 78) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - d / 78) * 0.55})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      });

      moved.forEach((p, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(tick * 2.4 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + pulse * 1.0, 0, Math.PI * 2);
        ctx.fillStyle = i % 5 === 0 ? '#fbbf24' : i % 2 === 0 ? '#38bdf8' : '#e0f2fe';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central abstract AI nucleus
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tick * 0.18);
      [0, 1, 2].forEach((i) => {
        ctx.beginPath();
        ctx.ellipse(0, 0, maxDist * (0.72 + i * 0.14), maxDist * (0.28 + i * 0.1), i * 0.9, 0, Math.PI * 2);
        ctx.strokeStyle = i === 1 ? 'rgba(251, 191, 36, 0.9)' : 'rgba(56, 189, 248, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.shadowColor = i === 1 ? '#fbbf24' : '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
      ctx.restore();

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" aria-label="Animated neural network visualization" role="img" />;
}
