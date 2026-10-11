import Link from "next/link";
import { ArrowLeft, BookOpen, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function DesignSystemDocsPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <header style={{ marginBottom: "32px", borderBottom: "1px solid #e2e8f0", paddingBottom: "20px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#0284c7",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          <ArrowLeft style={{ width: "16px", height: "16px" }} /> Back to Documentation Index
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <Layers style={{ width: "32px", height: "32px", color: "#d97706" }} />
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 800 }}>
            Visual Design System Showcase (Document 05)
          </h1>
        </div>
        <p style={{ margin: 0, color: "#64748b", fontSize: "15px" }}>
          Living reference of design tokens, mathematical typography ratios (1.250), and WCAG 2.1 AA semantic colors.
        </p>
      </header>

      {/* 1. Color Palette Tokens */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, borderBottom: "1px solid #e2e8f0", paddingBottom: "8px", marginBottom: "16px" }}>
          1. Color Palette & Semantic Tokens
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
            <div style={{ height: "80px", background: "#d97706", display: "flex", alignItems: "flex-end", padding: "8px" }}>
              <span style={{ color: "#fff", fontFamily: "monospace", fontSize: "12px", fontWeight: 700 }}>Al-Birru Solar Gold</span>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>--brand-primary</p>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "12px" }}>#D97706 / Primary Action & Brand</p>
            </div>
          </div>

          <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
            <div style={{ height: "80px", background: "#065f46", display: "flex", alignItems: "flex-end", padding: "8px" }}>
              <span style={{ color: "#fff", fontFamily: "monospace", fontSize: "12px", fontWeight: 700 }}>Islamic Emerald</span>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>--brand-accent</p>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "12px" }}>#065F46 / Tahfidz Badges & Accents</p>
            </div>
          </div>

          <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
            <div style={{ height: "80px", background: "#0f172a", display: "flex", alignItems: "flex-end", padding: "8px" }}>
              <span style={{ color: "#fff", fontFamily: "monospace", fontSize: "12px", fontWeight: 700 }}>Deep Slate</span>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>--text-heading</p>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "12px" }}>#0F172A / High-contrast Typography</p>
            </div>
          </div>

          <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
            <div style={{ height: "80px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "flex-end", padding: "8px" }}>
              <span style={{ color: "#0f172a", fontFamily: "monospace", fontSize: "12px", fontWeight: 700 }}>Alabaster Canvas</span>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "14px" }}>--surface-base</p>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "12px" }}>#F8FAFC / Default App Background</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Typography Scale */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, borderBottom: "1px solid #e2e8f0", paddingBottom: "8px", marginBottom: "16px" }}>
          2. Modular Typography Scale (Major Third: 1.250)
        </h2>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px" }}>
          <div style={{ padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b" }}>DISPLAY (48px / 600)</span>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>SD Al-Birru Tahfidzul Qur&apos;an</div>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b" }}>HEADING 1 (30px / 700)</span>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#0f172a" }}>Admissions Application Intake</div>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b" }}>HEADING 2 (24px / 600)</span>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#0f172a" }}>National Merdeka Curriculum & Islamic Adab</div>
          </div>
          <div style={{ padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b" }}>BODY REGULAR (16px / 400)</span>
            <div style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
              Nurturing a Qur&apos;anic generation of noble character, critical inquiry, and academic excellence. Standard body copy set at 16px.
            </div>
          </div>
          <div style={{ padding: "12px 0" }}>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#64748b" }}>CAPTION / STATUTORY (12px / 600)</span>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#065f46", textTransform: "uppercase", letterSpacing: "1px" }}>
              NPSN 70010111 &bull; BAN-S/M Grade A Accredited
            </div>
          </div>
        </div>
      </section>

      {/* 3. Component Interaction & Fitts's Law */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, borderBottom: "1px solid #e2e8f0", paddingBottom: "8px", marginBottom: "16px" }}>
          3. Touch Targets &amp; Accessibility (Fitts&apos;s Law)
        </h2>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px" }}>
          <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
            All primary interactive triggers adhere to a minimum 48px height target to guarantee friction-free mobile thumb navigation per WCAG 2.1 AA success criteria.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ height: "48px", padding: "0 24px", background: "#d97706", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>
              Primary Button (Height 48px)
            </div>
            <div style={{ height: "48px", padding: "0 24px", background: "#fff", border: "2px solid #cbd5e1", color: "#0f172a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px" }}>
              Secondary Button (Height 48px)
            </div>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: "48px", textAlign: "center", fontSize: "14px", color: "#94a3b8" }}>
        Design System Architecture &bull; packages/design-system &bull; WCAG 2.1 AA Compliant
      </footer>
    </div>
  );
}
