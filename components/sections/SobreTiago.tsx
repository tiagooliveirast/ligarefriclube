import { Reveal } from "@/components/effects/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { site } from "@/config/site";

function TextoSobre({ centralizado = false }: { centralizado?: boolean }) {
  return (
    <>
      <h2
        id="sobre-titulo"
        className="font-display text-[clamp(1.9rem,5.5vw,3rem)] font-bold leading-tight"
      >
        Eu sou técnico. Eu sei como é.
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#8DA2BF]">
        <p>
          Meu nome é Tiago Oliveira. Antes de criar qualquer sistema, eu era o
          técnico que resolvia tudo sozinho: atendia, consertava, cobrava, anotava
          no caderninho e torcia pro mês fechar.
        </p>
        <p>
          Criei o Refriclube porque não encontrei um sistema pensado para a nossa
          realidade. E criei a Liga porque entendi que nenhum sistema resolve o
          maior problema de quem trabalha por conta própria:{" "}
          <strong className="text-[#EAF2FF]">a solidão nas decisões.</strong>
        </p>
        <p>Aqui eu não sou guru. Sou mais um técnico, caminhando junto com você.</p>
      </div>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-[14px] border border-[rgba(148,197,255,0.25)] px-6 py-3.5 font-semibold text-[#EAF2FF] transition-colors hover:border-[#5BC8FF] hover:text-[#5BC8FF] ${
          centralizado ? "mx-auto" : ""
        }`}
      >
        Me acompanhe no Instagram → {site.instagramHandle}
      </a>
      {/* TODO: [AJUSTAR] Revisar este texto com a história real do Tiago e manter só o que for verdade. */}
    </>
  );
}

export default function SobreTiago() {
  // Sem foto: texto centralizado em coluna estreita (boa leitura, ~65ch).
  if (!site.mostrarFotoTiago) {
    return (
      <section className="px-5 py-24 sm:py-40" aria-labelledby="sobre-titulo">
        <Reveal className="mx-auto max-w-[65ch] text-center">
          <TextoSobre centralizado />
        </Reveal>
      </section>
    );
  }

  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[420px_1fr]">
        <Reveal>
          <SmartImage
            src="/images/tiago.jpg"
            alt="Tiago Oliveira, técnico e criador do Refriclube"
            width={640}
            height={800}
            sizes="(max-width: 768px) 100vw, 420px"
            label="Tiago Oliveira"
            icon="🧑‍🔧"
            className="h-auto w-full rounded-2xl border border-[rgba(148,197,255,0.14)] object-cover"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <TextoSobre />
        </Reveal>
      </div>
    </section>
  );
}
