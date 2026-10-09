import { site } from "@/config/site";

export default function TopBar() {
  return (
    <div className="relative z-50 border-b border-[rgba(148,197,255,0.12)] bg-[#0D1420] px-5 py-2.5 text-center text-[15px] leading-snug">
      <p>
        <span aria-hidden="true">🧢 </span>
        <strong className="font-semibold text-[#EAF2FF]">Turma Fundadora:</strong>{" "}
        <span className="text-[#8DA2BF]">
          os primeiros {site.boneVagas} membros ganham o boné oficial do Refriclube.
        </span>
      </p>
    </div>
  );
}
