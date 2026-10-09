"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

function diffParts(target: string) {
  const ms = new Date(target).getTime() - Date.now();
  if (Number.isNaN(ms) || ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

/**
 * Contador regressivo — renderiza SOMENTE se `prazoOferta`
 * tiver data real. Nunca timer falso.
 */
export default function Countdown() {
  const [parts, setParts] = useState(() =>
    site.prazoOferta ? diffParts(site.prazoOferta) : null
  );

  useEffect(() => {
    if (!site.prazoOferta) return;
    const id = setInterval(() => setParts(diffParts(site.prazoOferta as string)), 1000);
    return () => clearInterval(id);
  }, []);

  if (!site.prazoOferta || !parts) return null;

  const cells = [
    { v: parts.d, l: "dias" },
    { v: parts.h, l: "horas" },
    { v: parts.m, l: "min" },
    { v: parts.s, l: "seg" },
  ];
  return (
    <div className="flex items-center gap-2" role="timer" aria-live="off">
      {cells.map((c) => (
        <div
          key={c.l}
          className="min-w-[64px] rounded-xl border border-[rgba(148,197,255,0.16)] bg-white/[0.04] px-3 py-2 text-center"
        >
          <div className="tnum text-2xl font-bold text-[#EAF2FF]">
            {String(c.v).padStart(2, "0")}
          </div>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#8DA2BF]">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
