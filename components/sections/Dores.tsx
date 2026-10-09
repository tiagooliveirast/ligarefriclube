"use client";

import { useReducedMotion } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";
import { SectionHeading } from "@/components/ui/Badge";
import { Reveal } from "@/components/effects/Reveal";

const DORES = [
  {
    t: "Toda decisão importante é você contra você.",
    d: 'Aumentar o preço? Contratar ajudante? Comprar aquela ferramenta cara? Recusar o cliente que só pechincha? Não tem ninguém para perguntar "e aí, o que você faria?".',
  },
  {
    t: "Você trabalha a semana inteira e, no fim do mês, não sabe para onde foi o dinheiro.",
    d: "O dinheiro do serviço, da peça e da casa vira tudo uma coisa só.",
  },
  {
    t: "Os grupos de técnico viraram briga de preço.",
    d: "Em vez de ajuda, você encontra gente desvalorizando o serviço e disputando cliente no centavo.",
  },
  {
    t: "Você até começa a se organizar… e volta pro caos.",
    d: "Faz um curso, monta uma planilha, promete que agora vai. Três semanas depois, a correria engole tudo de novo.",
  },
  {
    t: "Ninguém vê o quanto você cresceu.",
    d: "Você saiu do zero, montou sua clientela, aumentou o faturamento… e ninguém nunca reconheceu isso.",
  },
  {
    t: "Você sente que está sozinho num negócio que ninguém em casa entende.",
    d: "Família apoia, mas não sabe o que é pegar um serviço que dá errado, cliente que não paga ou mês fraco.",
  },
];

const MARQUEE_A = [
  "Cobrei barato de novo",
  "Não sei quanto faturei",
  "Será que contrato?",
  "Cliente sumiu sem pagar",
  "Voltei pro caderninho",
];

const MARQUEE_B = [
  "Ninguém pra trocar ideia",
  "Mês fraco de novo",
  "Trabalho muito, sobra pouco",
  "Será que aumento o preço?",
  "Larguei a planilha",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-paused overflow-hidden" aria-hidden="true">
      <div className={`marquee-track gap-3 py-1.5 ${reverse ? "reverse" : ""}`}>
        {doubled.map((f, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-[rgba(148,197,255,0.14)] bg-white/[0.03] px-5 py-2.5 text-base text-[#8DA2BF]"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Dores() {
  const reduce = useReducedMotion();
  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="dores-titulo">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <SectionHeading
            title={
              <span id="dores-titulo">
                Você é bom de serviço. O problema é tudo o que vem{" "}
                <span className="text-[#FF6B6B]">depois</span> dele.
              </span>
            }
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DORES.map((dor, i) => (
            <m.article
              key={dor.t}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="card-border rounded-2xl bg-[#0D1420]/80 p-6"
            >
              <div aria-hidden="true" className="mb-4 text-2xl">
                {["🤔", "💸", "⚔️", "🌀", "🏅", "🌙"][i]}
              </div>
              <h3 className="text-[17px] font-bold leading-snug">{dor.t}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#8DA2BF]">{dor.d}</p>
            </m.article>
          ))}
        </div>
        <div className="mt-12 space-y-3">
          <MarqueeRow items={MARQUEE_A} />
          <MarqueeRow items={MARQUEE_B} reverse />
        </div>
      </div>
    </section>
  );
}
