"use client";

import { useEffect, useRef } from "react";
import { useMotionTier } from "@/lib/useMotionTier";

const MAX_MOBILE = 25; // lite: enxuto, sem reação ao toque
const MAX_DESKTOP = 140;

type Flake = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
};

/**
 * Canvas de partículas de gelo.
 * - full: até 140 partículas + leve reação ao mouse (desktop)
 * - lite: até 25 partículas, sem mouse, DPR ≤ 1.5
 * - off: não renderiza nada
 * Pausa fora da tela (IntersectionObserver) e com aba oculta (visibilitychange).
 */
export default function FrostParticles({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const tier = useMotionTier();

  useEffect(() => {
    if (tier === "off") return;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isLite = tier === "lite";
    let flakes: Flake[] = [];
    let w = 0;
    let h = 0;
    let running = true;
    let raf = 0;
    let mouseX = 0.5;
    const dpr = isLite
      ? Math.min(window.devicePixelRatio || 1, 1.5)
      : Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = isLite ? MAX_MOBILE : MAX_DESKTOP;
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.4,
        speed: 0.15 + Math.random() * 0.55,
        drift: 0.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.15 + Math.random() * 0.55,
      }));
    };

    const tick = () => {
      if (!running || document.hidden) {
        raf = requestAnimationFrame(tick);
        return;
      }
      ctx.clearRect(0, 0, w, h);
      const pull = isLite ? 0 : (mouseX - 0.5) * 12;
      for (const f of flakes) {
        f.y += f.speed;
        f.phase += 0.008;
        f.x += Math.sin(f.phase) * 0.25 * f.drift + pull * 0.01 * f.r;
        if (f.y > h + 4) {
          f.y = -4;
          f.x = Math.random() * w;
        }
        if (f.x > w + 4) f.x = -4;
        if (f.x < -4) f.x = w + 4;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(189, 235, 255, ${f.opacity.toFixed(2)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMouse = (e: MouseEvent) => {
      if (isLite) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / Math.max(rect.width, 1);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    const onVis = () => {
      // o loop continua mas pula o desenho com aba oculta (ver tick)
    };

    resize();
    raf = requestAnimationFrame(tick);
    io.observe(canvas);
    window.addEventListener("resize", resize);
    if (!isLite) window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVis);
      cancelAnimationFrame(raf);
      running = false;
    };
  }, [tier]);

  if (tier === "off") return null;

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
