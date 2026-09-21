import React, { useEffect, useRef } from 'react';

interface BubbleCursorProps {
  enabled?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  createdAt: number;
  color: { r: number; g: number; b: number };
}

// Curated purple/violet accent palette with cyan & pink highlights
const COLOR_PALETTE = [
  { r: 139, g: 92, b: 246 },  // Violet (#8b5cf6)
  { r: 168, g: 85, b: 247 },  // Purple (#a855f7)
  { r: 6, g: 182, b: 212 },   // Cyan (#06b6d4)
  { r: 236, g: 72, b: 153 },  // Pink (#ec4899)
];

export const BubbleCursor: React.FC<BubbleCursorProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches || !enabled) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let particles: Particle[] = [];
    let lastSpawnTime = 0;
    const SPAWN_INTERVAL_MS = 35; // Throttle bubble creation (~30-50ms)
    const MAX_PARTICLES = 40;

    // Handle canvas resizing for crisp high-DPI rendering
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse movement and spawn bubbles
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnTime < SPAWN_INTERVAL_MS) return;
      lastSpawnTime = now;

      // Pick random accent color
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

      const newParticle: Particle = {
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.8, // slight horizontal drift
        vy: -0.6 - Math.random() * 0.8,  // upward float like a soap bubble
        size: 4 + Math.random() * 8,     // 4px to 12px
        maxLife: 800 + Math.random() * 400, // 800ms - 1200ms
        createdAt: now,
        color,
      };

      if (particles.length >= MAX_PARTICLES) {
        particles.shift(); // Remove oldest bubble if limit reached
      }

      particles.push(newParticle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Main 60fps render loop
    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((p) => {
        const age = now - p.createdAt;
        if (age >= p.maxLife) return false;

        const progress = age / p.maxLife; // 0 to 1
        const alpha = (1 - progress) * 0.6; // soft fade out
        const currentSize = p.size * (1 - progress * 0.3); // gentle shrink

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Draw radial glowing bubble
        const glowRadius = Math.max(currentSize * 2, 1);
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          glowRadius
        );

        gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Soft inner white shine highlight
        ctx.beginPath();
        ctx.arc(
          p.x - currentSize * 0.25,
          p.y - currentSize * 0.25,
          Math.max(currentSize * 0.3, 0.5),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.fill();

        return true;
      });

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    // Clean up event listeners and animation loop
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      style={{ pointerEvents: 'none' }}
    />
  );
};
