export function Badge({
  children,
  tone = "ice",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "ice" | "gold";
  className?: string;
}) {
  const tones =
    tone === "gold"
      ? "border-[rgba(232,194,106,0.35)] bg-[rgba(232,194,106,0.08)] text-[#E8C26A]"
      : "border-[rgba(148,197,255,0.25)] bg-[rgba(91,200,255,0.08)] text-[#BDEBFF]";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] ${tones} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow ? (
        <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.22em] text-[#5BC8FF]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(1.9rem,5.5vw,3.25rem)] font-bold leading-[1.08]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[17px] leading-relaxed text-[#8DA2BF]">{intro}</p>
      ) : null}
    </div>
  );
}
