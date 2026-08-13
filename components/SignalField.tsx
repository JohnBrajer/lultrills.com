"use client";

import { useEffect, useRef } from "react";

type SignalNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  depth: number;
  kind: "signal" | "gold" | "breach";
};

const TAU = Math.PI * 2;

function nodeCount(width: number, height: number) {
  return Math.max(24, Math.min(58, Math.round((width * height) / 26000)));
}

function makeNodes(width: number, height: number): SignalNode[] {
  return Array.from({ length: nodeCount(width, height) }, (_, index) => {
    const accent = index % 13 === 0 ? "breach" : index % 5 === 0 ? "gold" : "signal";

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.055,
      vy: (Math.random() - 0.5) * 0.045,
      phase: Math.random() * TAU,
      depth: 0.35 + Math.random() * 0.65,
      kind: accent,
    };
  });
}

/**
 * Sparse, living machine-signal lattice for the public node hero.
 * Canvas keeps the DOM light; motion stops offscreen and honors reduced motion.
 */
export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0 };
    let width = 0;
    let height = 0;
    let nodes: SignalNode[] = [];
    let frame = 0;
    let previousTime = 0;
    let intersecting = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = makeNodes(width, height);
      draw(performance.now(), false);
    };

    const draw = (time: number, advance = true) => {
      const delta = Math.min(32, time - previousTime || 16.67);
      previousTime = time;
      context.clearRect(0, 0, width, height);

      const linkDistance = width < 700 ? 108 : 148;
      const parallaxX = pointer.x * 12;
      const parallaxY = pointer.y * 9;

      if (advance && !reducedMotion.matches) {
        for (const node of nodes) {
          node.x += node.vx * delta;
          node.y += node.vy * delta;
          node.phase += delta * 0.00042;

          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        const ax = a.x + parallaxX * a.depth;
        const ay = a.y + parallaxY * a.depth;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const bx = b.x + parallaxX * b.depth;
          const by = b.y + parallaxY * b.depth;
          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.hypot(dx, dy);

          if (distance < linkDistance) {
            const strength = (1 - distance / linkDistance) * 0.14;
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(197, 162, 111, ${strength})`;
            context.lineWidth = 0.55;
            context.stroke();
          }
        }
      }

      context.globalCompositeOperation = "lighter";
      for (const node of nodes) {
        const x = node.x + parallaxX * node.depth;
        const y = node.y + parallaxY * node.depth;
        const modulation = 0.72 + Math.sin(node.phase) * 0.2;
        const radius = node.kind === "breach" ? 1.75 : node.kind === "gold" ? 1.45 : 0.85;
        const color =
          node.kind === "breach"
            ? `rgba(255, 45, 74, ${modulation})`
            : node.kind === "gold"
              ? `rgba(224, 196, 138, ${modulation})`
              : `rgba(212, 212, 216, ${modulation * 0.55})`;

        context.beginPath();
        context.arc(x, y, radius, 0, TAU);
        context.fillStyle = color;
        context.fill();

        if (node.kind !== "signal") {
          context.beginPath();
          context.arc(x, y, radius * 4, 0, TAU);
          context.fillStyle = color.replace(/, [\d.]+\)$/, ", 0.055)");
          context.fill();
        }
      }
      context.globalCompositeOperation = "source-over";
    };

    const tick = (time: number) => {
      draw(time);
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const start = () => {
      stop();
      if (!intersecting || document.hidden || reducedMotion.matches) {
        draw(performance.now(), false);
        return;
      }
      previousTime = performance.now();
      frame = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (event.clientY < rect.top || event.clientY > rect.bottom) return;
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };

    const onPointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        start();
      },
      { rootMargin: "120px 0px" },
    );
    const resizeObserver = new ResizeObserver(resize);

    observer.observe(canvas);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);
    resize();
    start();

    return () => {
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", start);
      reducedMotion.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
