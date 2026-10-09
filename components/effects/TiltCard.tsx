"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { useMotionTier } from "@/lib/useMotionTier";

/** Tilt 3D + reflexo — SOMENTE no tier full. No lite/off, bloco estático idêntico. */
export default function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tier = useMotionTier();
  const [glare, setGlare] = useState({ x: 50, y: 50, active: false });
  const enabled = tier === "full";

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || !enabled) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max;
    const ry = (px - 0.5) * max;
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
    setGlare({ x: px * 100, y: py * 100, active: true });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    setGlare((g) => ({ ...g, active: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={enabled ? onMove : undefined}
      onMouseLeave={onLeave}
      className={`relative ${enabled ? "transition-transform duration-200 ease-out will-change-transform" : ""} ${className}`}
    >
      {children}
      {enabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glare.active ? 1 : 0,
            background: `radial-gradient(320px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.22), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
