import React, { useEffect, useState, useRef } from 'react';

type CursorState = 'default' | 'interactive' | 'text';

export const CustomCursor: React.FC = () => {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Accessibility & Device Checks
    const pointerFineQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const shouldEnable = pointerFineQuery.matches && !reducedMotionQuery.matches;
    setIsPointerFine(shouldEnable);

    if (!shouldEnable) return;

    // Inject class to hide default cursor on desktop
    document.body.classList.add('custom-cursor-active');

    // 2. Mouse Position & Hover Target Listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    // Event delegation for contextual hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], label, .card-glow, .group'
      );
      if (interactive) {
        setCursorState('interactive');
        return;
      }

      const textElement = target.closest(
        'h1, h2, h3, h4, h5, h6, p, blockquote, input[type="text"], input[type="email"], textarea'
      );
      if (textElement) {
        setCursorState('text');
        return;
      }

      setCursorState('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 3. Smooth Lerp Animation Loop (requestAnimationFrame)
    const render = () => {
      // Lerp ring position towards target mouse position (~100ms lag for fluid feel)
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!isPointerFine || !isVisible) return null;

  // Determine dynamic ring scale & style based on state
  let ringClasses = 'w-9 h-9 border border-cyan-400/50 bg-cyan-500/5 backdrop-blur-[1px]';
  let dotClasses = 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]';

  if (cursorState === 'interactive') {
    ringClasses = 'w-12 h-12 border-2 border-pink-400/80 bg-pink-500/10 scale-125 shadow-[0_0_15px_rgba(236,72,153,0.3)]';
    dotClasses = 'w-1 h-1 bg-pink-300 opacity-30';
  } else if (cursorState === 'text') {
    ringClasses = 'w-3 h-8 border-l-2 border-r-0 border-y-0 border-cyan-300/80 bg-transparent rounded-none';
    dotClasses = 'w-1 h-1 bg-cyan-300 opacity-60';
  }

  if (isPressed) {
    ringClasses += ' scale-90 opacity-80';
  }

  return (
    <>
      {/* Custom Cursor Overlay */}

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-200 ease-out ${ringClasses}`}
      />

      {/* Immediate Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out ${dotClasses}`}
      />
    </>
  );
};
