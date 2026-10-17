import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Al-Birru Primary School Sukabumi - Partner in Islamic Education";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px",
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 40%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        border: "12px solid #0f172a",
      }}
    >
      {/* Top Header Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 20px",
            borderRadius: "12px",
            backgroundColor: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            color: "#fbbf24",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>SDIT TAHFIDZUL QUR&apos;AN // SUKABUMI</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#94a3b8",
            fontSize: "15px",
          }}
        >
          <span>Admissions 2026/2027 NOW OPEN</span>
        </div>
      </div>

      {/* Center Main Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "900px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg
            viewBox="6 4.5 88 116"
            width="56"
            height="56"
            style={{ width: "56px", height: "56px" }}
          >
            <path
              d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
            />
            <path
              d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
              fill="#f59e0b"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 50 43 A 28 28 0 0 1 70 63 A 28 28 0 0 1 50 83 A 28 28 0 0 1 30 63 A 28 28 0 0 1 50 43 Z M 50 40.5 L 51.1 57.6 L 54.0 53.3 L 53.1 58.4 L 61.0 52.0 L 54.6 59.9 L 59.7 59.0 L 55.4 61.9 L 72.5 63 L 55.4 64.1 L 59.7 67.0 L 54.6 66.1 L 61.0 74.0 L 53.1 67.6 L 54.0 72.7 L 51.1 68.4 L 50 85.5 L 48.9 68.4 L 46.0 72.7 L 46.9 67.6 L 39.0 74.0 L 45.4 66.1 L 40.3 67.0 L 44.6 64.1 L 27.5 63 L 44.6 61.9 L 40.3 59.0 L 45.4 59.9 L 39.0 52.0 L 46.9 58.4 L 46.0 53.3 L 48.9 57.6 Z"
              fill="#020617"
            />
          </svg>
          <span
            style={{
              fontSize: "36px",
              fontWeight: "900",
              color: "#f8fafc",
              letterSpacing: "-1px",
            }}
          >
            AL-BIRRU PRIMARY SCHOOL
          </span>
        </div>

        <h1
          style={{
            fontSize: "62px",
            fontWeight: "900",
            lineHeight: 1.15,
            color: "#ffffff",
            letterSpacing: "-2px",
            margin: 0,
          }}
        >
          Partner in Islamic Education
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.45,
            color: "#cbd5e1",
            margin: 0,
            maxWidth: "850px",
          }}
        >
          Nurturing a Qur&apos;anic Generation of Noble Character, 3 Mutqin Juz
          Memorization with Sanad &amp; Global Horizons
        </p>
      </div>

      {/* Bottom Feature Badges */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#e2e8f0",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#f59e0b", fontWeight: "bold" }}>[+]</span>{" "}
          Minimum 3 Mutqin Juz
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#e2e8f0",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#10b981", fontWeight: "bold" }}>[+]</span>{" "}
          Integrated Merdeka Curriculum
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#e2e8f0",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#38bdf8", fontWeight: "bold" }}>[+]</span>{" "}
          Archery &amp; Sunnah Sports
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#e2e8f0",
            fontSize: "15px",
            fontWeight: 600,
            marginLeft: "auto",
          }}
        >
          sdalbirru.sch.id
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
