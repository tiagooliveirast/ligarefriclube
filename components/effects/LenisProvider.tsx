"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Smooth scroll com Lenis — SOMENTE no tier "full" (desktop bom).
 * No celular o scroll nativo é melhor; desligado com reduced-motion/save-data.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;
    try {
      const nav = navigator as unknown as {
        hardwareConcurrency?: number;
        deviceMemory?: number;
        connection?: { saveData?: boolean; effectiveType?: string };
      };
      if (nav.connection?.saveData) return;
      if (
        (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4) ||
        (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4)
      )
        return;
      const et = nav.connection?.effectiveType;
      if (et === "2g" || et === "3g" || et === "slow-2g") return;
    } catch {
      /* noop */
    }
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    (async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();
    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
