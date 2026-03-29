'use client';

import { useEffect, useRef } from 'react';
import { Zap, Droplets, CreditCard, TrendingUp, Shield, PoundSterling, BarChart2, Building2, Award, Briefcase } from 'lucide-react';
import styles from './FloatingIcons.module.css';

const ICONS = [Zap, Droplets, CreditCard, TrendingUp, Shield, PoundSterling, BarChart2, Building2, Award, Briefcase];

interface Particle {
  icon: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotSpeed: number;
  pulsePhase: number;
}

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    const count = 18;
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      icon: i % ICONS.length,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 12 + Math.random() * 14,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: 0.06 + Math.random() * 0.1,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Use SVG path strings for icons (simplified shapes)
    const iconPaths: ((ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => void)[] = [
      // Zap
      (c, x, y, s) => { c.beginPath(); c.moveTo(x + s * 0.2, y - s); c.lineTo(x - s * 0.15, y + 0.1); c.lineTo(x + s * 0.1, y + 0.1); c.lineTo(x - s * 0.2, y + s); c.lineTo(x + s * 0.15, y - 0.1); c.lineTo(x - s * 0.1, y - 0.1); c.closePath(); },
      // Droplet
      (c, x, y, s) => { c.beginPath(); c.moveTo(x, y - s); c.bezierCurveTo(x + s * 0.8, y, x + s * 0.7, y + s * 0.8, x, y + s); c.bezierCurveTo(x - s * 0.7, y + s * 0.8, x - s * 0.8, y, x, y - s); c.closePath(); },
      // Credit card (rect)
      (c, x, y, s) => { c.beginPath(); c.roundRect(x - s, y - s * 0.65, s * 2, s * 1.3, s * 0.15); c.closePath(); },
      // Trending (line up)
      (c, x, y, s) => { c.beginPath(); c.moveTo(x - s, y + s * 0.4); c.lineTo(x - s * 0.3, y - s * 0.2); c.lineTo(x + s * 0.25, y + s * 0.15); c.lineTo(x + s, y - s * 0.6); c.stroke(); c.beginPath(); c.moveTo(x + s * 0.5, y - s * 0.6); c.lineTo(x + s, y - s * 0.6); c.lineTo(x + s, y - s * 0.1); c.stroke(); },
      // Shield
      (c, x, y, s) => { c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s * 0.8, y - s * 0.5); c.lineTo(x + s * 0.8, y + s * 0.2); c.bezierCurveTo(x + s * 0.8, y + s * 0.7, x, y + s, x, y + s); c.bezierCurveTo(x, y + s, x - s * 0.8, y + s * 0.7, x - s * 0.8, y + s * 0.2); c.lineTo(x - s * 0.8, y - s * 0.5); c.closePath(); },
      // £ sign
      (c, x, y, s) => { c.beginPath(); c.arc(x + s * 0.2, y - s * 0.25, s * 0.5, Math.PI * 0.25, Math.PI * 1.05); c.stroke(); c.beginPath(); c.moveTo(x - s * 0.5, y); c.lineTo(x + s * 0.5, y); c.stroke(); c.beginPath(); c.moveTo(x - s * 0.4, y - s * 0.65); c.lineTo(x - s * 0.4, y + s * 0.65); c.stroke(); c.beginPath(); c.moveTo(x - s * 0.5, y + s * 0.65); c.lineTo(x + s * 0.5, y + s * 0.65); c.stroke(); },
      // Bar chart
      (c, x, y, s) => { [[x - s * 0.6, s * 0.4], [x, s * 0.9], [x + s * 0.6, s * 0.6]].forEach(([bx, bh]) => { c.beginPath(); c.rect(bx - s * 0.18, y + s - bh, s * 0.36, bh); c.fill(); }); c.beginPath(); c.moveTo(x - s, y + s * 0.95); c.lineTo(x + s, y + s * 0.95); c.stroke(); },
      // Building
      (c, x, y, s) => { c.beginPath(); c.rect(x - s * 0.6, y - s * 0.6, s * 1.2, s * 1.6); c.fill(); [[x - s * 0.35, y - s * 0.35], [x + s * 0.1, y - s * 0.35], [x - s * 0.35, y + 0.1], [x + s * 0.1, y + 0.1]].forEach(([wx, wy]) => { c.beginPath(); c.rect(wx, wy, s * 0.25, s * 0.25); }); },
      // Circle (star/award)
      (c, x, y, s) => { c.beginPath(); c.arc(x, y, s * 0.7, 0, Math.PI * 2); c.stroke(); c.beginPath(); for (let i = 0; i < 5; i++) { const a = (i * 4 * Math.PI) / 5 - Math.PI / 2; const b = ((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2; c.lineTo(x + Math.cos(a) * s * 0.5, y + Math.sin(a) * s * 0.5); c.lineTo(x + Math.cos(b) * s * 0.25, y + Math.sin(b) * s * 0.25); } c.closePath(); },
      // Briefcase
      (c, x, y, s) => { c.beginPath(); c.roundRect(x - s * 0.8, y - s * 0.5, s * 1.6, s * 1.4, s * 0.1); c.stroke(); c.beginPath(); c.moveTo(x - s * 0.3, y - s * 0.5); c.lineTo(x - s * 0.3, y - s * 0.9); c.lineTo(x + s * 0.3, y - s * 0.9); c.lineTo(x + s * 0.3, y - s * 0.5); c.stroke(); c.beginPath(); c.moveTo(x - s * 0.8, y + s * 0.2); c.lineTo(x + s * 0.8, y + s * 0.2); c.stroke(); },
    ];

    const GOLD = 'rgba(201, 168, 76, ';

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;

      particlesRef.current.forEach((p) => {
        // Move
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        // Bounce off edges
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Pulse opacity
        const pulse = Math.sin(t * 0.6 + p.pulsePhase) * 0.03;
        const alpha = Math.max(0.02, p.opacity + pulse);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = GOLD + '1)';
        ctx.fillStyle = GOLD + '0.15)';
        ctx.lineWidth = 1.2;

        const drawFn = iconPaths[p.icon % iconPaths.length];
        if (drawFn) drawFn(ctx, 0, 0, p.size);
        try {
          if (![3, 5, 6, 7, 9].includes(p.icon)) {
            ctx.fill();
          }
          ctx.stroke();
        } catch {}

        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
