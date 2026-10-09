"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";
import { useMotionTier } from "@/lib/useMotionTier";
import { Reveal } from "@/components/effects/Reveal";

/**
 * Transição caos → gelo.
 * - full: scroll-linked (useScroll + useTransform)
 * - lite/off: troca simples de classe via IntersectionObserver (CSS puro)
 */
export default function Virada() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const tier = useMotionTier();
  const scrollLinked = tier === "full" && !reduce;
  const [active, setActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bg = useTransform(
    scrollYProgress,
    [0, 1],
    scrollLinked
      ? ["rgba(80,20,28,0.55)", "rgba(15,45,90,0.55)"]
      : ["#070B12", "#070B12"]
  );
  const glow = useTransform(
    scrollYProgress,
    [0, 1],
    scrollLinked
      ? ["rgba(255,107,107,0.12)", "rgba(91,200,255,0.14)"]
      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]
  );

  useEffect(() => {
    if (scrollLinked) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scrollLinked]);

  return (
    <m.section
      ref={ref}
      style={scrollLinked ? { backgroundColor: bg } : undefined}
      className={`relative overflow-x-clip px-5 py-24 transition-colors duration-700 sm:py-40 ${
        scrollLinked ? "" : active ? "bg-[#0E2A52]" : "bg-[#3A1218]"
      }`}
      aria-labelledby="virada-titulo"
    >
      {scrollLinked && (
        <m.div
          aria-hidden="true"
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0"
        />
      )}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          scrollLinked ? "hidden" : active ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "rgba(91,200,255,0.10)" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="virada-titulo"
            className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] font-bold leading-tight"
          >
            O problema nunca foi falta de conhecimento técnico. Foi{" "}
            <span className="bg-gradient-to-r from-[#5BC8FF] to-[#BDEBFF] bg-clip-text text-transparent">
              caminhar sozinho.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[#EAF2FF]/90 sm:text-lg">
            <p>Curso termina. Planilha fica pra trás. Motivação acaba na segunda semana.</p>
            <p>
              O que mantém um negócio crescendo não é mais uma aula. É{" "}
              <strong>ambiente</strong>: gente do mesmo ramo pra trocar ideia, alguém
              que já passou pelo mesmo problema, um compromisso todo mês e a certeza
              de que sua evolução vai ser vista.
            </p>
            <p className="text-xl font-semibold">Foi pra isso que eu criei a Liga.</p>
            <p className="pt-2 text-base uppercase tracking-[0.18em] text-[#8DA2BF]">
              — Tiago Oliveira, técnico e criador do Refriclube
            </p>
          </div>
        </Reveal>
      </div>
    </m.section>
  );
}
