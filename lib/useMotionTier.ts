"use client";

import { useEffect, useState } from "react";

export type MotionTier = "full" | "lite" | "off";

function computeTier(): MotionTier {
  if (typeof window === "undefined" || typeof navigator === "undefined") return "full";
  try {
    // off: preferência de movimento reduzido ou economia de dados
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
    const conn = (navigator as unknown as {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return "off";

    // lite: celular, hardware modesto ou rede lenta
    if (window.innerWidth < 768) return "lite";
    const nav = navigator as unknown as {
      hardwareConcurrency?: number;
      deviceMemory?: number;
    };
    if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4)
      return "lite";
    if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return "lite";
    if (conn?.effectiveType === "2g" || conn?.effectiveType === "3g" || conn?.effectiveType === "slow-2g")
      return "lite";
  } catch {
    /* noop */
  }
  return "full";
}

/**
 * Retorna o tier de efeitos: "full" (desktop bom), "lite" (celular /
 * hardware modesto / rede lenta) ou "off" (reduced-motion / save-data).
 * SSR/hidratação: começa em "lite" (mobile-first) e recalcula no mount,
 * evitando divergência visual — todos os tiers renderizam o mesmo conteúdo.
 */
export function useMotionTier(): MotionTier {
  const [tier, setTier] = useState<MotionTier>("lite");
  useEffect(() => {
    setTier(computeTier());
    const onResize = () => setTier(computeTier());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return tier;
}
