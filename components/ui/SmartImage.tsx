"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Exibe a foto quando ela existir em /public/images.
 * Enquanto não existir, mostra um placeholder escuro elegante
 * (nunca foto de banco de imagem de pessoa aleatória).
 */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  label,
  icon,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  label: string;
  icon: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} (imagem em breve)`}
        style={{ aspectRatio: `${width} / ${height}` }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-[rgba(148,197,255,0.14)] bg-gradient-to-b from-[#0D1420] to-[#070B12] p-8 text-center ${className}`}
      >
        <span aria-hidden="true" className="text-5xl">
          {icon}
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8DA2BF]">
          {label}
        </span>
        <span className="max-w-[220px] text-[13px] leading-relaxed text-[#8DA2BF]/70">
          Foto em breve — placeholder elegante
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
