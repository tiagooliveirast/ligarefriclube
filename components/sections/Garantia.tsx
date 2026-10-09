import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/config/site";

export default function Garantia() {
  return (
    <section className="px-5 py-24 sm:py-32" aria-labelledby="garantia-titulo">
      <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-[rgba(148,197,255,0.16)] bg-[#0D1420]/90 p-8 sm:grid-cols-[200px_1fr] sm:p-12">
        <Reveal className="flex justify-center">
          <div
            aria-hidden="true"
            className="grid h-44 w-44 place-items-center rounded-full border-4 border-[#5BC8FF]/60 bg-[radial-gradient(circle_at_35%_30%,#1E7BFF,#070B12_70%)] shadow-[0_0_60px_-10px_rgba(91,200,255,0.7)]"
          >
            <div className="text-center">
              <div className="font-display text-5xl font-extrabold text-[#BDEBFF]">
                {site.garantiaDias}
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#BDEBFF]">
                dias
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="garantia-titulo" className="font-display text-3xl font-bold sm:text-4xl">
            Risco zero pra você
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#8DA2BF]">
            Entre, participe do grupo, acesse a área de membros e use o Refriclube. Se
            em até {site.garantiaDias} dias você sentir que a Liga não é pra você, é só
            pedir o reembolso pela própria Hotmart e devolvemos 100% do valor. Sem
            pergunta, sem burocracia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
