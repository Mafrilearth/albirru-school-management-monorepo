import { BookOpen } from "lucide-react";

const DOCS_LIST = [
  {
    num: "01",
    title: "Product Requirements Specification",
    desc: "Institutional domain, RBAC permissions matrix, and functional bounds.",
  },
  {
    num: "02",
    title: "Software Architecture & Technical Design",
    desc: "Modern Modular Monolith architecture, folder structure, and runtime constraints.",
  },
  {
    num: "03",
    title: "Relational Database Specification",
    desc: "Neon PostgreSQL DDL schemas, UUIDv7 keys, indexes, and audit invariants.",
  },
  {
    num: "04",
    title: "Application Route & Mutation Contract",
    desc: "ActionResponse envelopes, Zod validation schemas, and Upstash rate limits.",
  },
  {
    num: "05",
    title: "Visual Design System Specification",
    desc: "8px spatial scale, Major Third typography ratio, and WCAG 2.1 AA tokens.",
  },
  {
    num: "06",
    title: "Application Layout & Navigation Architecture",
    desc: "Three viewport shells (Public, Auth, Portal) and navigation spatial layout.",
  },
  {
    num: "07",
    title: "UI Component Anatomy Specification",
    desc: "Modular UI component anatomy, statutory microcopy, and state machines.",
  },
  {
    num: "08",
    title: "Landing Page View Architecture",
    desc: "Public landing page section deconstruction and statutory NPSN credentials.",
  },
  {
    num: "09",
    title: "Architecture Decision Records",
    desc: "ADR-001 through ADR-008 chronologies, next-forge monorepo, and tradeoff evaluations.",
  },
  {
    num: "10",
    title: "Quality Assurance & Verification Plan",
    desc: "Testing pyramid, boundary test scenarios, and p95 latency budget.",
  },
  {
    num: "11",
    title: "Operational Runbook & Incident Procedures",
    desc: "Branching governance, automated disaster recovery, and agent constitution.",
  },
];

export default function DocsHomePage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <header
        style={{
          marginBottom: "40px",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <BookOpen
            style={{ width: "32px", height: "32px", color: "#0284c7" }}
          />
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 800 }}>
            SD Al-Birru Documentation (/apps/docs)
          </h1>
        </div>
        <p style={{ margin: 0, color: "#64748b", fontSize: "16px" }}>
          Official Technical Specifications, System Architecture, and Software
          Engineering Guidelines
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {DOCS_LIST.map((doc) => (
          <div
            key={doc.num}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "2px 8px",
                backgroundColor: "#e0f2fe",
                color: "#0369a1",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "8px",
                width: "fit-content",
              }}
            >
              Document {doc.num}
            </span>
            <h3
              style={{
                margin: "4px 0 8px",
                fontSize: "16px",
                color: "#0f172a",
              }}
            >
              {doc.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#64748b",
                lineHeight: 1.5,
                marginTop: "auto",
              }}
            >
              {doc.desc}
            </p>
          </div>
        ))}
      </section>

      <footer
        style={{
          marginTop: "48px",
          textAlign: "center",
          fontSize: "14px",
          color: "#94a3b8",
        }}
      >
        SD Al-Birru Tahfidzul Qur&apos;an &bull; NPSN 70010111 &bull; next-forge
        Enterprise Monorepo Architecture
      </footer>
    </div>
  );
}
