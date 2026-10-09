"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Provider de animação enxuto: carrega só o `domAnimation`
 * (sem layout/drag) em vez do pacote completo do Framer Motion.
 * Use `m` no lugar de `motion` em todos os componentes.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export { m };
