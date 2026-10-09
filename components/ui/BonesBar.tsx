import { site } from "@/config/site";

/** Barra de progresso dos bonés — só com o número real do config. */
export function BonesBar() {
  const total = site.boneVagas;
  const restantes = site.boneVagasRestantes;
  const pct = total > 0 ? Math.max(0, Math.min(100, (restantes / total) * 100)) : 0;
  return (
    <div className="w-full">
      <p className="tnum text-[15px] font-semibold text-[#E8C26A]">
        Restam {restantes} de {total} bonés
      </p>
      <div
        role="progressbar"
        aria-valuenow={restantes}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Restam ${restantes} de ${total} bonés`}
        className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#B8862F] to-[#F5D27A]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
