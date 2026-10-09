"use client";

import { goToCheckout } from "@/lib/checkout";
import MagneticButton from "@/components/effects/MagneticButton";

export default function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  label = "Quero entrar na Liga",
  magnetic = true,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  label?: string;
  magnetic?: boolean;
}) {
  const sizes =
    size === "lg"
      ? "px-8 py-4 text-lg min-h-[56px]"
      : "px-6 py-3 text-base min-h-[48px]";
  const styles =
    variant === "primary"
      ? "bg-[#5BC8FF] text-[#06121F] font-bold hover:bg-[#BDEBFF] active:bg-[#BDEBFF] shadow-[0_8px_40px_-8px_rgba(91,200,255,0.6)]"
      : "bg-transparent text-[#EAF2FF] border border-[rgba(148,197,255,0.25)] hover:border-[#5BC8FF] hover:text-[#5BC8FF] active:border-[#5BC8FF] active:text-[#5BC8FF]";
  const btn = (
    <button
      type="button"
      aria-label={typeof children === "string" ? children : label}
      onClick={goToCheckout}
      className={`relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-[14px] font-sans transition-colors duration-200 ${sizes} ${styles} ${className}`}
    >
      <span className="cta-shine" aria-hidden="true" />
      <span className="relative">{children ?? label}</span>
    </button>
  );
  if (magnetic && variant === "primary") {
    return <MagneticButton className="inline-block">{btn}</MagneticButton>;
  }
  return btn;
}
