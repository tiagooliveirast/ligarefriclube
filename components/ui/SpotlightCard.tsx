"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/** Card com spotlight que segue o cursor (desktop). */
export function SpotlightCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      style={style}
      className={`spotlight-card card-border rounded-2xl bg-[#0D1420]/90 ${className}`}
    >
      {children}
    </div>
  );
}
