export interface AdmissionConfirmationEmailProps {
  studentName?: string;
  trackingCode?: string;
  guardianName?: string;
  registrationDate?: string;
}

export function AdmissionConfirmationEmail({
  studentName = "Fulan bin Fulan",
  trackingCode = "ADM-20261011-0001",
  guardianName = "Orang Tua / Wali",
  registrationDate = "11 Oktober 2026",
}: AdmissionConfirmationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          padding: "32px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#0f172a",
              margin: 0,
            }}
          >
            SD Al-Birru Tahfidzul Qur&apos;an
          </h1>
          <p style={{ fontSize: "14px", color: "#64748b", margin: "4px 0 0" }}>
            NPSN: 70010111 | Akreditasi BAN-S/M
          </p>
        </div>

        <h2
          style={{
            fontSize: "18px",
            color: "#0284c7",
            marginTop: 0,
            marginBottom: "16px",
          }}
        >
          Konfirmasi Pendaftaran PPDB 2026/2027
        </h2>

        <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.6 }}>
          Yth. Bapak/Ibu <strong>{guardianName}</strong>,
        </p>

        <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.6 }}>
          Pendaftaran calon peserta didik baru atas nama{" "}
          <strong>{studentName}</strong> telah berhasil kami terima. Berikut
          adalah rincian pendaftaran:
        </p>

        <div
          style={{
            backgroundColor: "#f1f5f9",
            borderRadius: "6px",
            padding: "16px",
            margin: "20px 0",
          }}
        >
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>
            <strong>Kode Pelacakan:</strong> {trackingCode}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>
            <strong>Tanggal Registrasi:</strong> {registrationDate}
          </p>
          <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>
            <strong>Status:</strong> Menunggu Verifikasi Berkas
          </p>
        </div>

        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}>
          Simpan kode pelacakan di atas untuk memeriksa status penerimaan
          melalui portal resmi kami di{" "}
          <a
            href="https://albirru.mafrilearth.com/admissions"
            style={{ color: "#0284c7" }}
          >
            albirru.mafrilearth.com
          </a>
          .
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e2e8f0",
            margin: "24px 0",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            color: "#94a3b8",
            textAlign: "center",
            margin: 0,
          }}
        >
          Yayasan Pendidikan Al-Birru &copy; 2026. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  );
}

export default AdmissionConfirmationEmail;
