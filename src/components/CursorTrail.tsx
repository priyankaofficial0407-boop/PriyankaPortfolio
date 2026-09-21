import React, { useEffect, useRef } from 'react';

interface CursorTrailProps {
  enabled?: boolean;
}

interface ConstellationNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxLife: number;
  createdAt: number;
  color: { r: number; g: number; b: number };
}

// Site accent gradient palette (Cyan, Violet/Purple, Pink)
const ACCENT_PALETTE = [
  { r: 6, g: 182, b: 212 },   // Cyan (#06b6d4)
  { r: 139, g: 92, b: 246 },  // Violet (#8b5cf6)
  { r: 236, g: 72, b: 153 },  // Pink (#ec4899)
  { r: 168, g: 85, b: 247 },  // Purple (#a855f7)
];

const MAX_CONNECT_DISTANCE = 85; // Distance in pixels to draw connecting lines
const MAX_NODES = 28;             // Max active nodes
const SPAWN_INTERVAL_MS = 28;     // Throttling for smooth node placement

export const CursorTrail: React.FC<CursorTrailProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion accessibility setting
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches || !enabled) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let nodes: ConstellationNode[] = [];
    let lastSpawnTime = 0;

    // Handle high-DPI canvas resizing
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse movement and spawn constellation nodes
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnTime < SPAWN_INTERVAL_MS) return;
      lastSpawnTime = now;

      const color = ACCENT_PALETTE[Math.floor(Math.random() * ACCENT_PALETTE.length)];

      const newNode: ConstellationNode = {
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.4,  // gentle drift
        vy: (Math.random() - 0.5) * 0.4 - 0.2, // slight upward float
        radius: 2.5 + Math.random() * 2.5, // 2.5px to 5px core
        maxLife: 900 + Math.random() * 300, // ~1s lifespan
        createdAt: now,
        color,
      };

      if (nodes.length >= MAX_NODES) {
        nodes.shift(); // Remove oldest node when max capacity is reached
      }

      nodes.push(newNode);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Filter active nodes
      nodes = nodes.filter((node) => {
        const age = now - node.createdAt;
        return age < node.maxLife;
      });

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
      });

      // 1. Draw connecting constellation lines first (behind node dots)
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const age1 = now - n1.createdAt;
        const progress1 = age1 / n1.maxLife;
        const alpha1 = 1 - progress1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const age2 = now - n2.createdAt;
          const progress2 = age2 / n2.maxLife;
          const alpha2 = 1 - progress2;

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_CONNECT_DISTANCE) {
            const distRatio = 1 - dist / MAX_CONNECT_DISTANCE;
            const combinedAlpha = Math.min(alpha1, alpha2) * distRatio * 0.45;

            // Gradient line connecting the two nodes
            const lineGrad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            lineGrad.addColorStop(
              0,
              `rgba(${n1.color.r}, ${n1.color.g}, ${n1.color.b}, ${combinedAlpha})`
            );
            lineGrad.addColorStop(
              1,
              `rgba(${n2.color.r}, ${n2.color.g}, ${n2.color.b}, ${combinedAlpha})`
            );

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Draw glowing nodes
      nodes.forEach((n) => {
        const age = now - n.createdAt;
        const progress = age / n.maxLife;
        const alpha = (1 - progress) * 0.7;
        const currentRadius = n.radius * (1 - progress * 0.3);

        // Soft outer glow aura
        const glowRadius = currentRadius * 3;
        const glowGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius);
        glowGrad.addColorStop(0, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${alpha * 0.8})`);
        glowGrad.addColorStop(0.5, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${alpha * 0.3})`);
        glowGrad.addColorStop(1, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, 0)`);

        ctx.beginPath();
        ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Intense core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

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
