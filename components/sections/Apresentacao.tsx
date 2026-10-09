import { Reveal } from "@/components/effects/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { site } from "@/config/site";

function TextoApresentacao({ centralizado = false }: { centralizado?: boolean }) {
  return (
    <>
      <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.22em] text-[#5BC8FF]">
        Apresentando
      </p>
      <h2
        id="apresentacao-titulo"
        className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] font-bold leading-[1.08]"
      >
        <span className="text-[#5BC8FF]">Liga Refriclube.</span> Um ecossistema de
        técnicos que crescem juntos.
      </h2>
      <p
        className={`mt-6 text-[17px] leading-relaxed text-[#8DA2BF] sm:text-lg ${
          centralizado ? "mx-auto max-w-[65ch]" : ""
        }`}
      >
        Não é só um curso, nem só mais um grupo de WhatsApp. É um lugar pra você
        decidir com mais segurança, organizar o seu negócio com um sistema feito
        para técnico e ter sua evolução acompanhada, mês após mês.
      </p>
    </>
  );
}

export default function Apresentacao() {
  // Sem print do app: texto centralizado, sem placeholder.
  if (!site.mostrarPrintApp) {
    return (
      <section className="px-5 py-24 sm:py-40" aria-labelledby="apresentacao-titulo">
        <Reveal className="mx-auto max-w-3xl text-center">
          <TextoApresentacao centralizado />
        </Reveal>
      </section>
    );
  }

  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="apresentacao-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <TextoApresentacao />
        </Reveal>
        <Reveal delay={0.15}>
          <SmartImage
            src="/images/refriclube-app.png"
            alt="Sistema Refriclube no celular"
            width={640}
            height={760}
            sizes="(max-width: 768px) 100vw, 480px"
            label="Refriclube no celular"
            icon="📱"
            className="h-auto w-full rounded-2xl border border-[rgba(148,197,255,0.14)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
