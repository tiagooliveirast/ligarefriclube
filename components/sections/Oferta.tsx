"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";
import GradientMesh from "@/components/effects/GradientMesh";
import { Reveal } from "@/components/effects/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { BonesBar } from "@/components/ui/BonesBar";
import Countdown from "@/components/ui/Countdown";
import { site } from "@/config/site";

const INCLUSO = [
  "12 meses de Liga Refriclube",
  "Refriclube incluso",
  "Encontros mensais ao vivo + gravações",
  "Grupo de ajuda mútua",
  "Curso bônus de gestão",
  "Acesso às Chaves de Reconhecimento",
];

export default function Oferta() {
  const ref = useRef<HTMLElement>(null);

  // Dispara ViewContent quando a oferta aparece (GA4/Meta), se configurados.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        try {
          const w = window as unknown as {
            fbq?: (...a: unknown[]) => void;
            gtag?: (...a: unknown[]) => void;
          };
          if (site.metaPixelId && typeof w.fbq === "function") {
            w.fbq("track", "ViewContent", {
              content_name: "Liga Refriclube",
            });
          }
          if (site.ga4Id && typeof w.gtag === "function") {
            w.gtag("event", "view_item", {
              currency: "BRL",
              value: 947,
            });
          }
        } catch {
          /* noop */
        }
        io.disconnect();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="oferta" ref={ref} className="relative scroll-mt-20 px-5 py-24 sm:py-40" aria-labelledby="oferta-titulo">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Badge tone="gold">🧢 Bônus Turma Fundadora</Badge>
          <h2
            id="oferta-titulo"
            className="font-display mx-auto mt-4 max-w-2xl text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-tight"
          >
            Entre agora para a Turma Fundadora
          </h2>
        </Reveal>

        <div className="relative mt-12 overflow-x-clip">
          <GradientMesh />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            {/* Card principal */}
            <Reveal>
              <div className="card-border relative overflow-hidden rounded-3xl bg-[#0D1420]/95 p-6 shadow-[0_20px_80px_-20px_rgba(30,123,255,0.5)] sm:p-10">
                <ul className="space-y-3.5">
                  {INCLUSO.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] sm:text-[17px]">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgba(91,200,255,0.15)] text-sm font-bold text-[#5BC8FF]"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-[16px] font-bold text-[#E8C26A] sm:text-[17px]">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgba(232,194,106,0.15)] text-sm"
                    >
                      ✓
                    </span>
                    <span>
                      Boné oficial do Refriclube{" "}
                      <span className="font-medium">(primeiros {site.boneVagas} membros)</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 border-t border-[rgba(148,197,255,0.12)] pt-8 text-center">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#8DA2BF]">
                    Assinatura anual
                  </p>
                  <p className="font-display mt-3 text-[clamp(2rem,7vw,3rem)] font-extrabold leading-none">
                    {site.parcelas}
                  </p>
                  <p className="mt-3 text-lg text-[#8DA2BF]">
                    ou <strong className="text-[#EAF2FF]">{site.precoAvista}</strong> à vista
                  </p>
                  <div className="mx-auto mt-6 max-w-sm">
                    <BonesBar />
                  </div>
                  {site.prazoOferta ? (
                    <div className="mt-6 flex justify-center">
                      <Countdown />
                    </div>
                  ) : null}
                  <div className="mt-7">
                    <CTAButton className="w-full sm:w-auto sm:min-w-[320px]">
                      Quero entrar na Liga agora
                    </CTAButton>
                  </div>
                  <p className="mt-4 text-[15px] text-[#8DA2BF]">
                    🔒 Pagamento seguro pela Hotmart · Cartão, Pix e boleto
                  </p>
                  {/* TODO: [AJUSTAR] confirmar métodos de pagamento habilitados na Hotmart (Cartão, Pix, boleto). */}
                </div>
              </div>
            </Reveal>

            {/* Card do boné */}
            <Reveal delay={0.15}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(232,194,106,0.3)] bg-gradient-to-b from-[rgba(232,194,106,0.08)] to-[#0D1420] p-6 text-center sm:p-8">
                <div className="transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:perspective(800px)_rotateY(-8deg)_rotateX(4deg)]">
                  <SmartImage
                    src="/images/bone.png"
                    alt="Boné oficial do Refriclube"
                    width={560}
                    height={420}
                    sizes="(max-width: 768px) 100vw, 420px"
                    label="Boné oficial"
                    icon="🧢"
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-[#E8C26A]">
                  Boné oficial do Refriclube
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#8DA2BF]">
                  Exclusivo da Turma Fundadora. O boné é enviado após o período de
                  garantia de {site.garantiaDias} dias.
                </p>
                {/* TODO: [AJUSTAR] frete do boné: incluso ou por conta do membro? + prazo de envio. */}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
