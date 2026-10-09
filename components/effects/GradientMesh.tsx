"use client";

import { useMotionTier } from "@/lib/useMotionTier";

/**
 * Mesh de gradiente: animado no full, ESTÁTICO no lite/off
 * (mesmo visual premium, custo zero de CPU).
 */
export default function GradientMesh({ className = "" }: { className?: string }) {
  const tier = useMotionTier();
  const animated = tier === "full";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute -top-32 left-1/2 h-[420px] w-[620px] max-w-none -translate-x-1/2 rounded-full blur-[110px] ${
          animated ? "blob-a opacity-30" : "opacity-20"
        }`}
        style={{ background: "radial-gradient(closest-side, #1E7BFF, transparent)" }}
      />
      <div
        className={`absolute top-1/3 -left-32 h-[360px] w-[420px] max-w-none rounded-full blur-[80px] ${
          animated ? "blob-b opacity-20" : "opacity-15"
        }`}
        style={{ background: "radial-gradient(closest-side, #5BC8FF, transparent)" }}
      />
      <div
        className={`absolute -right-32 bottom-0 h-[380px] w-[440px] max-w-none rounded-full blur-[80px] ${
          animated ? "blob-a opacity-15" : "opacity-10"
        }`}
        style={{ background: "radial-gradient(closest-side, #1E7BFF, transparent)" }}
      />
    </div>
  );
}
