import CTAButton from "@/components/ui/CTAButton";
import GradientMesh from "@/components/effects/GradientMesh";
import { Reveal } from "@/components/effects/Reveal";
import { site } from "@/config/site";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-40" aria-labelledby="ctafinal-titulo">
      <GradientMesh />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="ctafinal-titulo"
            className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-tight"
          >
            Daqui a um ano, você vai continuar decidindo tudo sozinho?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#8DA2BF] sm:text-lg">
            Ou vai olhar pra trás e ver um negócio mais organizado, mais lucrativo e
            uma Chave na parede, conquistada junto com quem caminhou do seu lado?
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <CTAButton>Quero fazer parte da Turma Fundadora</CTAButton>
          <p className="mt-4 text-base text-[#8DA2BF]">
            {site.parcelas} · Garantia de {site.garantiaDias} dias · Refriclube incluso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
