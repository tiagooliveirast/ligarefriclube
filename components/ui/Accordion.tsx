"use client";

import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { m } from "@/components/effects/motion-lazy";

export type FaqItem = { q: string; a: React.ReactNode };

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-[rgba(148,197,255,0.12)] rounded-2xl border border-[rgba(148,197,255,0.12)] bg-[#0D1420]/80">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[17px] font-semibold text-[#EAF2FF] transition-colors hover:text-[#5BC8FF] sm:px-7"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[rgba(148,197,255,0.25)] text-xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-[#5BC8FF]" : "text-[#8DA2BF]"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.21, 0.65, 0.16, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 text-[16px] leading-relaxed text-[#8DA2BF] sm:px-7">
                    {item.a}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
