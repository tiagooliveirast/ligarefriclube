import { site } from "@/config/site";

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(148,197,255,0.12)] px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-display text-xl font-bold">
          ❄️ {site.nome}
        </p>
        <p className="text-base text-[#8DA2BF]">
          © {ano} Liga Refriclube · Tiago Oliveira da Silva
        </p>
        <nav aria-label="Links do rodapé" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center px-3 text-[#8DA2BF] transition-colors hover:text-[#5BC8FF]"
          >
            Instagram
          </a>
          <a
            href={site.refriclubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center px-3 text-[#8DA2BF] transition-colors hover:text-[#5BC8FF]"
          >
            Refriclube
          </a>
          {/* TODO: [AJUSTAR] Links de Termos de Uso e Política de Privacidade se existirem. */}
        </nav>
        <p className="max-w-xl text-[15px] leading-relaxed text-[#8DA2BF]/80">
          Este produto é vendido e entregue pela Hotmart. Resultados dependem da
          aplicação de cada membro.
        </p>
      </div>
    </footer>
  );
}
