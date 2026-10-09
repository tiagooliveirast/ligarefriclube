"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { m } from "@/components/effects/motion-lazy";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.16, 1] }}
    >
      {children}
    </m.div>
  );
}

/** Palavra por palavra com blur → nítido (tier full). No lite/off use FadeBlock. */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      {words.map((w, i) => (
        <m.span
          key={`${w}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: "easeOut" }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </m.span>
      ))}
    </span>
  );
}

/** Fade simples do bloco inteiro — versão leve do Hero para o celular. */
export function FadeBlock({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <m.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {text}
    </m.span>
  );
}
