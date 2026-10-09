"use client";

import { useReducedMotion } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";
import { SectionHeading } from "@/components/ui/Badge";
import { Reveal } from "@/components/effects/Reveal";

const PASSOS = [
  {
    n: "1",
    t: "Você entra na Liga",
    d: "e recebe acesso imediato à área de membros e ao grupo.",
  },
  {
    n: "2",
    t: "Seu Refriclube é liberado",
    d: "e você começa a registrar seus serviços e seu faturamento.",
  },
  {
    n: "3",
    t: "Todo mês, você evolui junto:",
    d: "encontro ao vivo, troca no grupo e cada nova Chave conquistada.",
  },
];

export default function ComoFunciona() {
  const reduce = useReducedMotion();
  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="como-titulo">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionHeading title={<span id="como-titulo">Como funciona</span>} />
        </Reveal>
        {/* Linhas conectoras FORA do <ol> (ol só pode conter <li>) */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-12 right-12 top-16 hidden h-[2px] bg-gradient-to-r from-[#1E7BFF] via-[#5BC8FF] to-[#E8C26A] opacity-40 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-11 left-[64px] top-11 w-[2px] bg-gradient-to-b from-[#1E7BFF] via-[#5BC8FF] to-[#E8C26A] opacity-40 md:hidden"
          />
          <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
            {PASSOS.map((p, i) =>
              reduce ? (
                <li
                  key={p.n}
                  className="card-border flex items-center gap-4 rounded-2xl bg-[#0D1420]/90 p-5 text-left sm:p-6 md:flex-col md:p-8 md:text-center"
                >
                  <StepBody p={p} />
                </li>
              ) : (
                <m.li
                  key={p.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="card-border flex items-center gap-4 rounded-2xl bg-[#0D1420]/90 p-5 text-left sm:p-6 md:flex-col md:p-8 md:text-center"
                >
                  <StepBody p={p} />
                </m.li>
              )
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepBody({ p }: { p: { n: string; t: string; d: string } }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#1E7BFF] to-[#5BC8FF] text-xl font-extrabold text-[#06121F] md:mx-auto md:h-16 md:w-16 md:text-2xl"
      >
        {p.n}
      </div>
      <div>
        <h3 className="text-base font-bold md:text-lg">{p.t}</h3>
        <p className="mt-1 text-base leading-relaxed text-[#8DA2BF]">{p.d}</p>
      </div>
    </>
  );
}
