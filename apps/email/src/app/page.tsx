import { AdmissionConfirmationEmail } from "../emails/AdmissionConfirmation";

export default function EmailPreviewPage() {
  return (
    <div style={{ padding: "24px" }}>
      <header style={{ marginBottom: "24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", color: "#0f172a" }}>
          SD Al-Birru React Email Workshop (/apps/email)
        </h1>
        <p style={{ color: "#64748b", fontSize: "14px" }}>
          Preview template email transaksional resmi berbasis React Email &
          Resend
        </p>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#f1f5f9",
              borderBottom: "1px solid #cbd5e1",
              fontWeight: 600,
              fontSize: "14px",
              color: "#334155",
            }}
          >
            Template: AdmissionConfirmation.tsx (PPDB 2026/2027)
          </div>
          <AdmissionConfirmationEmail
            guardianName="Ahmad Dahlan"
            registrationDate="11 Oktober 2026"
            studentName="Muhammad Zaid"
            trackingCode="ADM-20261011-0042"
          />
        </div>
      </main>
    </div>
  );
}
