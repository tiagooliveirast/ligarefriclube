import { Reveal } from "@/components/effects/Reveal";

const PARA = [
  "Você é técnico de refrigeração ou linha branca e já atende seus próprios clientes",
  "Você quer crescer com organização, e não só “pegar mais serviço”",
  "Você quer ter com quem trocar ideia antes de tomar decisões importantes",
  "Você valoriza o seu trabalho e não quer competir no menor preço",
];

const NAO_PARA = [
  "Você procura uma fórmula mágica para ficar rico rápido",
  "Você não pretende participar, perguntar nem aplicar nada",
  "Você acha que o problema do seu negócio é só falta de cliente",
];

export default function ParaQuem() {
  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="paraquem-titulo">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2
            id="paraquem-titulo"
            className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] font-bold"
          >
            Para quem é — e para quem não é
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-border h-full rounded-2xl bg-[#0D1420]/90 p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#5BC8FF]">
                <span aria-hidden="true">✅</span> A Liga é para você se:
              </h3>
              <ul className="mt-5 space-y-4">
                {PARA.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 text-[#5BC8FF]">
                      ✓
                    </span>
                    <span className="text-[#EAF2FF]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-border h-full rounded-2xl bg-[#0D1420]/60 p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#8DA2BF]">
                <span aria-hidden="true">🚫</span> A Liga NÃO é para você se:
              </h3>
              <ul className="mt-5 space-y-4">
                {NAO_PARA.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 text-[#FF6B6B]">
                      ✕
                    </span>
                    <span className="text-[#8DA2BF]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
