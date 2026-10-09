"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";
import { useMotionTier } from "@/lib/useMotionTier";
import TiltCard from "@/components/effects/TiltCard";
import { Badge, SectionHeading } from "@/components/ui/Badge";
import { Reveal } from "@/components/effects/Reveal";

const NIVEIS = [
  { chave: "Bronze", faixa: "R$ 5 mil", gradient: "linear-gradient(135deg,#8C5A2B,#D79A5E)", text: "#FFF7EA" },
  { chave: "Prata", faixa: "R$ 10 mil", gradient: "linear-gradient(135deg,#8E9AAB,#E6EDF5)", text: "#0A1420" },
  { chave: "Ouro", faixa: "R$ 20 mil", gradient: "linear-gradient(135deg,#B8862F,#F5D27A)", text: "#241A05" },
  { chave: "Diamante", faixa: "R$ 30 mil", gradient: "linear-gradient(135deg,#7FD8FF,#E9FBFF)", text: "#06202E" },
  { chave: "Black", faixa: "R$ 50 mil", gradient: "linear-gradient(135deg,#0A0A0A,#3A3A3A)", text: "#E8C26A", border: "1px solid rgba(232,194,106,0.6)" },
  { chave: "Legacy", faixa: "R$ 100 mil", gradient: "linear-gradient(135deg,#B8862F,#F5D27A,#5BC8FF,#F5D27A,#B8862F)", text: "#0A0A0A", legacy: true },
];

const COMO = [
  {
    t: "Comprovado pelo Refriclube:",
    d: "seu faturamento é registrado no próprio sistema. Sem burocracia.",
  },
  {
    t: "Placa e cerimônia:",
    d: "você recebe uma placa da sua Chave, entregue ao vivo num encontro mensal. (O custo de fabricação da placa é por conta do membro, informado desde o início.)",
  },
  {
    t: "Vitalícia:",
    d: "conquistou, é sua. Mesmo que um mês seja mais fraco.",
  },
];

export default function Chaves() {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const tier = useMotionTier();
  const scrollLinked = tier === "full" && !reduce;
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 55%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative px-5 py-24 sm:py-40"
      aria-labelledby="chaves-titulo"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Badge tone="gold">Chaves de Reconhecimento</Badge>
          <div className="mt-4">
            <SectionHeading
              title={
                <span id="chaves-titulo">
                  Aqui seu crescimento{" "}
                  <span className="bg-gradient-to-r from-[#E8C26A] to-[#F5D27A] bg-clip-text text-transparent">
                    não passa despercebido.
                  </span>
                </span>
              }
              intro="Conforme o seu faturamento mensal cresce, você conquista uma nova Chave. E ela é sua para sempre."
            />
          </div>
        </Reveal>

        {/* Linha do tempo vertical (desktop) + cards */}
        <div ref={lineRef} className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[27px] top-4 hidden w-[3px] rounded-full bg-white/[0.07] md:block"
          />
          {scrollLinked ? (
            <m.div
              aria-hidden="true"
              style={{ height: fill }}
              className="absolute left-[27px] top-4 hidden w-[3px] rounded-full bg-gradient-to-b from-[#8C5A2B] via-[#E8C26A] to-[#5BC8FF] md:block"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[27px] top-4 hidden w-[3px] rounded-full bg-gradient-to-b from-[#8C5A2B] via-[#E8C26A] to-[#5BC8FF] opacity-70 md:block"
            />
          )}
          {/* Carrossel mobile com peek do próximo card; grid no desktop */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 md:gap-6">
            {NIVEIS.map((n, i) => (
              <m.article
                key={n.chave}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="w-[248px] shrink-0 snap-center md:w-auto"
              >
                <TiltCard
                  className="rounded-2xl p-[1px]"
                >
                  <div
                    className={`rounded-2xl p-6 text-center ${n.legacy ? "legacy-shimmer" : ""}`}
                    style={{
                      background: n.gradient,
                      color: n.text,
                      border: n.border ?? "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-black/25 text-3xl"
                    >
                      🔑
                    </div>
                    <h3 className="font-display mt-4 text-2xl font-extrabold uppercase tracking-wide">
                      {n.chave}
                    </h3>
                    <p className="tnum mt-1 text-lg font-bold">
                      {n.faixa}
                      <span className="text-sm font-medium opacity-80"> /mês</span>
                    </p>
                  </div>
                </TiltCard>
              </m.article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {COMO.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="card-border h-full rounded-2xl bg-[#0D1420]/80 p-5 text-base leading-relaxed text-[#8DA2BF]">
                <strong className="text-[#EAF2FF]">{c.t}</strong> {c.d}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
