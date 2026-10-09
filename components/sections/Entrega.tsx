"use client";

import { useReducedMotion } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";
import { SectionHeading } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/effects/Reveal";

const ITENS = [
  {
    icon: "🧊",
    t: "Refriclube incluso",
    d: "O sistema de gestão feito para técnico: serviços, clientes e faturamento organizados num só lugar, direto do celular. Sem pagar à parte.",
  },
  {
    icon: "📡",
    t: "Encontro mensal ao vivo com o Tiago",
    d: "Todo mês, todos os membros juntos: dúvidas reais, estratégias de gestão e os bastidores de quem vive a mesma rotina. Perdeu? Fica gravado.",
  },
  {
    icon: "🤝",
    t: "Grupo de ajuda mútua",
    d: 'Técnicos que querem crescer, e não brigar por preço. Um lugar pra perguntar "o que você faria?" e ter resposta de quem entende.',
  },
  {
    icon: "📘",
    t: "Curso bônus de gestão",
    d: "Conteúdo prático para colocar ordem no seu negócio, na sua área de membros.",
  },
  {
    icon: "🔑",
    t: "Chaves de Reconhecimento",
    d: "Seu crescimento ganha nome, placa e cerimônia. (detalhes logo abaixo)",
  },
];

export default function Entrega() {
  const reduce = useReducedMotion();
  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="entrega-titulo">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <SectionHeading
            title={<span id="entrega-titulo">Tudo o que você recebe ao entrar</span>}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITENS.map((item, i) => (
            <m.div
              key={item.t}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <SpotlightCard className="h-full p-6 sm:p-7">
                <div aria-hidden="true" className="text-3xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#8DA2BF]">{item.d}</p>
              </SpotlightCard>
            </m.div>
          ))}
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpotlightCard className="flex h-full flex-col justify-center border-[rgba(232,194,106,0.3)] bg-[rgba(232,194,106,0.05)] p-6 sm:p-7">
              <div aria-hidden="true" className="text-3xl">
                🧢
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#E8C26A]">
                Bônus Turma Fundadora
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[#8DA2BF]">
                Os primeiros membros ganham o boné oficial do Refriclube. Detalhes na
                oferta abaixo.
              </p>
            </SpotlightCard>
          </m.div>
        </div>
        {/* TODO: [AJUSTAR] nome e conteúdo do curso bônus de gestão */}
      </div>
    </section>
  );
}
