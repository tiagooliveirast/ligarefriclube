import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070B12 0%, #0D2137 55%, #0A1A33 100%)",
          color: "#EAF2FF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#5BC8FF",
            fontWeight: 700,
          }}
        >
          LIGA REFRICLUBE · TURMA FUNDADORA
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
          Liga Refriclube
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#BDEBFF", lineHeight: 1.25 }}>
          Você não precisa mais tocar seu negócio sozinho.
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
          {["❄", "🔑", "🧢"].map((e) => (
            <div
              key={e}
              style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                background: "rgba(91,200,255,0.12)",
                border: "1px solid rgba(148,197,255,0.3)",
              }}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
