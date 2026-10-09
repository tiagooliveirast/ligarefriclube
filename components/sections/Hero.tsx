import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";
import GradientMesh from "@/components/effects/GradientMesh";
import { site } from "@/config/site";

/** Canvas carrega depois do primeiro paint, sem bloquear o LCP. */
const FrostParticles = dynamic(() => import("@/components/effects/FrostParticles"), {
  ssr: false,
});

const KEYS = [
  { name: "Bronze", gradient: "linear-gradient(135deg,#8C5A2B,#D79A5E)", bill: "R$ 5 mil" },
  { name: "Prata", gradient: "linear-gradient(135deg,#8E9AAB,#E6EDF5)", bill: "R$ 10 mil" },
  { name: "Ouro", gradient: "linear-gradient(135deg,#B8862F,#F5D27A)", bill: "R$ 20 mil" },
  { name: "Diamante", gradient: "linear-gradient(135deg,#7FD8FF,#E9FBFF)", bill: "R$ 30 mil" },
];

/**
 * Server Component: entrada via CSS puro (`.hero-enter`), sem depender
 * de JS/hidratação — o LCP pinta no primeiro paint.
 */
export default function Hero() {
  return (
    <header className="relative overflow-x-clip px-5 pb-14 pt-8 sm:pb-20 sm:pt-20">
      <GradientMesh />
      <FrostParticles />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-14">
        <div className="max-w-2xl flex-1 text-center lg:text-left">
          <div>
            <Badge>Liga Refriclube · Turma Fundadora</Badge>
          </div>
          <h1
            className="hero-enter font-display mt-5 text-[clamp(2.1rem,8vw,4.5rem)] font-extrabold leading-[1.08]"
            style={{ animationDelay: "0.05s" }}
          >
            Você não precisa mais tocar seu negócio{" "}
            <span className="bg-gradient-to-r from-[#5BC8FF] to-[#BDEBFF] bg-clip-text text-transparent">
              sozinho.
            </span>
          </h1>
          {/* Subtítulo estático de propósito: é o LCP, pinta imediatamente */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#8DA2BF] sm:text-lg lg:mx-0">
            A Liga Refriclube é o ecossistema de ajuda mútua para técnicos de
            refrigeração e linha branca que querem crescer com direção, ter com
            quem decidir e ser reconhecidos de verdade pelo que constroem.
          </p>
          <div className="hero-enter mt-7" style={{ animationDelay: "0.2s" }}>
            <CTAButton>Quero entrar na Liga</CTAButton>
            <p className="mt-4 text-base text-[#8DA2BF]">
              {site.parcelas} ou {site.precoAvista} à vista · Garantia de{" "}
              {site.garantiaDias} dias · Refriclube incluso
            </p>
          </div>
        </div>

        {/* Composição visual: Chaves flutuando (sem blur pesado) */}
        <div
          className="hero-enter relative grid w-full max-w-md flex-1 grid-cols-2 gap-3 sm:gap-4"
          style={{ animationDelay: "0.3s" }}
          aria-hidden="true"
        >
          {KEYS.map((k, i) => (
            <div
              key={k.name}
              className={`rounded-2xl border border-[rgba(148,197,255,0.18)] bg-[#0D1420] p-4 sm:p-5 ${
                i % 2 === 1 ? "mt-6 sm:mt-8" : ""
              }`}
            >
              <div
                className="mx-auto grid h-12 w-12 place-items-center rounded-full text-xl font-extrabold text-[#06121F] sm:h-16 sm:w-16 sm:text-2xl"
                style={{ background: k.gradient }}
              >
                🔑
              </div>
              <p className="font-display mt-3 text-center text-base font-bold sm:text-lg">{k.name}</p>
              <p className="tnum text-center text-sm text-[#8DA2BF]">
                {k.bill}/mês
              </p>
            </div>
          ))}
          <div className="col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-[rgba(232,194,106,0.3)] bg-[rgba(232,194,106,0.06)] px-4 py-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,194,106,0.35)] bg-[rgba(232,194,106,0.08)] px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E8C26A]">
              🧢 Boné oficial p/ fundadores
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
