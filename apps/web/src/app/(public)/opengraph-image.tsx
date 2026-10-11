import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "SD Al-Birru Tahfidzul Qur'an Sukabumi - Sahabat Pendidikan Anak";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
            <span>Admissions 2026/2027 TELAH DIBUKA</span>
          </div>
        </div>

        {/* Center Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "bold",
                color: "#020617",
              }}
            >
              B
            </div>
            <span style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", letterSpacing: "-1px" }}>
              SD AL-BIRRU
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
            Sahabat Pendidikan Anak
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
            Membina Generasi Qur&apos;ani Berakhlak Mulia, Tahfidz 3 Juz Mutqin Bersanad &amp; Berwawasan Global
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
            <span style={{ color: "#f59e0b", fontWeight: "bold" }}>[+]</span> Minimal 3 Juz Mutqin
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
            <span style={{ color: "#10b981", fontWeight: "bold" }}>[+]</span> Curriculum Merdeka Terpadu
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
            <span style={{ color: "#38bdf8", fontWeight: "bold" }}>[+]</span> Panahan &amp; Olahraga Sunnah
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
      </div>
    ),
    {
      ...size,
    }
  );
}
