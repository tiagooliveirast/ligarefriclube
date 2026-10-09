"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { useMotionTier } from "@/lib/useMotionTier";

/** Atração magnética — SOMENTE no tier full (desktop). Nos demais, bloco neutro. */
export default function MagneticButton({
  children,
  strength = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tier = useMotionTier();

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || tier !== "full") return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={tier === "full" ? onMove : undefined}
      onMouseLeave={onLeave}
      className={`inline-block will-change-transform ${tier === "full" ? "transition-transform duration-200 ease-out" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
