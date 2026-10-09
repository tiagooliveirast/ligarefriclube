"use client";

import { useEffect, useState } from "react";
import { goToCheckout } from "@/lib/checkout";
import { site } from "@/config/site";

/**
 * Barra de CTA fixa no mobile: aparece depois do Hero,
 * some quando a Oferta está visível. Respeita a safe-area do iPhone.
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-end");
    const oferta = document.getElementById("oferta");
    if (!hero || !oferta) return;
    let pastHero = false;
    let ofertaVisible = false;
    const update = () => setVisible(pastHero && !ofertaVisible);
    const ioHero = new IntersectionObserver(
      ([e]) => {
        pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        update();
      },
      { threshold: 0 }
    );
    const ioOferta = new IntersectionObserver(
      ([e]) => {
        ofertaVisible = e.isIntersecting;
        update();
      },
      { threshold: 0.15 }
    );
    ioHero.observe(hero);
    ioOferta.observe(oferta);
    return () => {
      ioHero.disconnect();
      ioOferta.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom)" }}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(148,197,255,0.16)] bg-[#070B12] px-5 pt-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="tnum truncate text-[15px] font-bold">{site.parcelas}</p>
          <p className="truncate text-[13px] text-[#8DA2BF]">Turma Fundadora · 🧢 boné</p>
        </div>
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={goToCheckout}
          className="min-h-[48px] shrink-0 rounded-[14px] bg-[#5BC8FF] px-6 font-bold text-[#06121F] transition-colors hover:bg-[#BDEBFF] active:bg-[#BDEBFF]"
        >
          Entrar na Liga
        </button>
      </div>
    </div>
  );
}
