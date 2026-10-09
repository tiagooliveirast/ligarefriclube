"use client";

import Accordion from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/Badge";
import { Reveal } from "@/components/effects/Reveal";
import { goToCheckout } from "@/lib/checkout";
import { site } from "@/config/site";

export default function Faq() {
  const items = [
    {
      q: "Eu já preciso usar o Refriclube?",
      a: "Não. O Refriclube já está incluso na Liga. Depois da compra, seu acesso é liberado em até 24h.",
    },
    {
      q: "Como funcionam os encontros ao vivo?",
      a: "Uma vez por mês, todos os membros se reúnem ao vivo com o Tiago. Se você não puder participar, a gravação fica disponível na área de membros.",
    },
    {
      q: "Como é o pagamento?",
      a: `É uma assinatura anual pela Hotmart: ${site.parcelas} no cartão ou ${site.precoAvista} à vista.`,
    },
    {
      q: "A assinatura renova sozinha?",
      a: "Sim, a assinatura é anual e renova automaticamente depois de 12 meses. Você pode cancelar a renovação quando quiser, direto pela Hotmart.",
    },
    {
      q: "E se eu não gostar?",
      a: `Você tem ${site.garantiaDias} dias de garantia. Pediu o reembolso dentro desse prazo, recebe 100% de volta.`,
    },
    {
      q: "Como recebo o boné?",
      a: `Os primeiros ${site.boneVagas} membros recebem o boné oficial do Refriclube, enviado após o prazo de garantia.`,
    },
    {
      q: "Como funcionam as Chaves de Reconhecimento?",
      a: "Seu faturamento mensal é registrado no Refriclube. Quando você atinge uma nova faixa, conquista a Chave correspondente e recebe sua placa ao vivo num encontro mensal. O custo de fabricação da placa é por conta do membro.",
    },
    {
      q: "Sou iniciante. A Liga é pra mim?",
      a: "A Liga foi pensada para quem já atende os próprios clientes e quer organizar e crescer o negócio.",
    },
    {
      q: "Ainda tenho dúvidas. Com quem falo?",
      a: site.whatsappDuvidas ? (
        <span>
          Fale direto com a gente pelo WhatsApp.{" "}
          <a
            href={site.whatsappDuvidas}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#5BC8FF] underline underline-offset-4 hover:text-[#BDEBFF]"
          >
            Chamar no WhatsApp
          </a>
        </span>
      ) : (
        <span>
          Fale direto com a gente pelo WhatsApp.{" "}
          <button
            type="button"
            onClick={goToCheckout}
            className="font-semibold text-[#5BC8FF] underline underline-offset-4 hover:text-[#BDEBFF]"
          >
            Entre na Liga
          </button>{" "}
          e use o grupo de ajuda mútua para tirar suas dúvidas com quem vive a mesma
          rotina.
          {/* TODO: [AJUSTAR] adicionar link de WhatsApp em config/site.ts (whatsappDuvidas). */}
        </span>
      ),
    },
  ];

  return (
    <section className="px-5 py-24 sm:py-40" aria-labelledby="faq-titulo">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <SectionHeading title={<span id="faq-titulo">Perguntas frequentes</span>} />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
