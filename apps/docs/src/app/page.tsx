import { BookOpen, FileText } from "lucide-react";

interface CanonicalDocument {
  number: string;
  filename: string;
  title: string;
  standard: string;
  description: string;
}

const CANONICAL_DOCUMENTS: CanonicalDocument[] = [
  {
    number: "01",
    filename: "docs/specification.md",
    title: "Product Requirements Specification",
    standard: "ISO/IEC/IEEE 29148",
    description:
      "Institutional functional domains, role-based access control permission matrix, admissions, and guardian self-service bounds.",
  },
  {
    number: "02",
    filename: "docs/architecture.md",
    title: "Software Architecture & Technical Design",
    standard: "IEEE 1016",
    description:
      "Modern Modular Monolith topology, subdomain routing, C4 component diagrams, and strict cross-domain service boundaries.",
  },
  {
    number: "03",
    filename: "docs/database.md",
    title: "Relational Database Specification",
    standard: "RFC 9562",
    description:
      "Neon PostgreSQL declarative schemas, monotonic UUIDv7 primary keys, soft-deletion invariants, and Drizzle migrations.",
  },
  {
    number: "04",
    filename: "docs/design.md",
    title: "Visual Design System Specification",
    standard: "W3C WCAG 2.1 AA",
    description:
      "Swiss Modernist Bento Grid, zero border radius, zero box-shadows, 8px geometric grid, and semantic color variable tokens.",
  },
  {
    number: "05",
    filename: "docs/constraints.md",
    title: "Quantitative Engineering Quality Contract",
    standard: "Constraint-Driven Development",
    description:
      "Quantitative engineering thresholds: zero type suppressions, zero explicit any, p95 latency budget, and static verification gates.",
  },
  {
    number: "06",
    filename: "docs/decisions.md",
    title: "Architecture Decision Records",
    standard: "Michael Nygard Architecture Decision Record Specification",
    description:
      "Historical architectural precedents (ADR-001 through ADR-008), next-forge monorepo pattern, and structural tradeoff evaluations.",
  },
  {
    number: "07",
    filename: "docs/deployment.md",
    title: "Edge Serverless Deployment & Runbook",
    standard: "Site Reliability Engineering Runbook",
    description:
      "Vercel Edge Serverless runbook, Cloudflare WAF and DNS topology, continuous integration quality gates, and automated disaster recovery.",
  },
  {
    number: "08",
    filename: "docs/environment.md",
    title: "Environment Variables Audit Matrix",
    standard: "DevSecOps Standard",
    description:
      "Comprehensive environment variables audit matrix: classification (Public and Secret), format validation, and dashboard origin.",
  },
  {
    number: "09",
    filename: "docs/testing.md",
    title: "Quality Assurance & Verification Plan",
    standard: "ISTQB / Testing Pyramid",
    description:
      "Comprehensive testing pyramid strategy: Vitest unit testing, Playwright cross-browser verification, and Storybook visual workshops.",
  },
  {
    number: "10",
    filename: "docs/glossary.md",
    title: "Ubiquitous Language & Domain Glossary",
    standard: "Domain-Driven Design (DDD)",
    description:
      "Ubiquitous language for Islamic pedagogy, institutional credentials, school legality, and software engineering taxonomy.",
  },
  {
    number: "11",
    filename: "AGENTS.md",
    title: "Autonomous Agent Operational Constitution",
    standard: "AI Software Development Life Cycle",
    description:
      "Autonomous agent operational constitution, 24 agent skills lifecycle matrix, and non-negotiable architectural hard invariants.",
  },
  {
    number: "12",
    filename: ".github/SECURITY.md",
    title: "Security Policy & Threat Modeling",
    standard: "ISO/IEC 29147",
    description:
      "Vulnerability disclosure service-level agreements, threat modeling, Cloudflare Turnstile bot deterrence, and Upstash rate limiting.",
  },
  {
    number: "13",
    filename: "CHANGELOG.md",
    title: "Chronological Release Log",
    standard: "Keep a Changelog 1.1.0",
    description:
      "Chronological release history adhering to Semantic Versioning 2.0.0 and Keep a Changelog documentation standards.",
  },
];

export default function DocsHomePage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "48px 24px",
      }}
    >
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
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-0.025em",
            }}
          >
            SD Al-Birru Technical Documentation (/apps/docs)
          </h1>
        </div>
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          Canonical Technical Specifications, System Architecture, Relational
          Database Schemas, and Software Engineering Invariants
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "16px",
        }}
      >
        {CANONICAL_DOCUMENTS.map((doc) => (
          <article
            key={doc.number}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "0px",
              padding: "24px",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "2px 8px",
                  backgroundColor: "#f1f5f9",
                  color: "#0369a1",
                  borderRadius: "0px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                DOCUMENT {doc.number}
              </span>
              <span
                style={{
                  display: "inline-block",
                  padding: "2px 8px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#64748b",
                  borderRadius: "0px",
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                {doc.standard}
              </span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "4px",
                  color: "#0284c7",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "monospace",
                }}
              >
                <FileText style={{ width: "14px", height: "14px" }} />
                <span>{doc.filename}</span>
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.4,
                }}
              >
                {doc.title}
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#64748b",
                lineHeight: 1.6,
                marginTop: "auto",
              }}
            >
              {doc.description}
            </p>
          </article>
        ))}
      </section>

      <footer
        style={{
          marginTop: "48px",
          paddingTop: "24px",
          borderTop: "1px solid #e2e8f0",
          textAlign: "center",
          fontSize: "13px",
          color: "#94a3b8",
        }}
      >
        Al-Birru Primary School &bull; School Identification Number: 70010111
        &bull; next-forge Enterprise Monorepo Architecture
      </footer>
    </div>
  );
}
