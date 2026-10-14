# System Constraints & Quality Contract

**Document Status:** Approved & Authoritative  
**Standard Compliance:** Constraint-Driven Development (CDD) Contract  
**System Scope:** Monorepo Source Code, CI Quality Gates, and Autonomous Agent Boundaries  
**Enforcement Level:** Absolute Hard Invariants (Zero Waivers Permitted)  

---

## 1. Type Safety & Compiler Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Zero `@ts-ignore` / `@ts-nocheck`** | Any suppression comment triggers automatic PR failure. | Biome linter + `tsc --noEmit` |
| **Zero `any` Types** | Explicit `any` and implicit `any` are strictly prohibited. Infer types from Zod or Drizzle. | Biome `noExplicitAny: error` |
| **Strict Type Verification** | `pnpm run check-types` must exit with return code `0` across all 10 workspaces. | Pre-push Git hook + GitHub Actions |

---

## 2. Database & Data Model Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **UUIDv7 Primary Keys** | All tables must use RFC 9562 monotonically ordered UUIDv7 (`uuidv7()`). Auto-increment integers and UUIDv4 are prohibited. | Vitest database schema suite |
| **Zero Physical Deletion** | Executing SQL `DELETE` is prohibited. Record retirement must use `is_active: boolean` (default `true`). | Server Action code review gate |
| **Mandatory Audit Columns** | Every operational entity must include `created_at` (timestamptz), `updated_at` (timestamptz), and `created_by` (uuid). | Drizzle schema CI test |
| **Foreign Key B-Tree Indexing** | Every foreign key column (`*_id`) must declare a supporting B-tree index to eliminate sequential scans. | `packages/database/src/schema.ts` |

---

## 3. Visual Design System & Spatial Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Zero Border Radius** | `--radius: 0` is strictly enforced. Sharp rectilinear 90-degree right angles across all containers. | Biome CSS and Tailwind inspection |
| **Zero Box Shadows** | `box-shadow: none` across all surfaces. Depth is defined exclusively by 1px hairline border strokes (`border-border`). | Design system token review |
| **8px Spatial Scale** | All margins, paddings, and gaps must snap to multiples of 8px (4px reserved for micro badge offsets). | Tailwind CSS utility audit |
| **Zero Hardcoded Hex Colors** | Hexadecimal codes (such as `#0f172a`) in TSX components are prohibited. Use semantic CSS variables (`bg-background`, `text-primary`). | Biome static check |
| **W3C WCAG 2.1 AA** | Text contrast must satisfy `>= 4.5:1`. Status indicators must include explicit text labels alongside color dots. | Automated `axe-core` in CI |

---

## 4. Latency Budgets & Security Ingress Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Serverless Mutation Latency** | Authenticated Server Actions must execute within `p95 < 200ms`. | Vercel Speed Insights audit |
| **Edge Config Resolution** | Dynamic feature flags and configuration reads must resolve in `< 15ms`. | Vercel Edge Config runtime probe |
| **Public Admissions Bot Defense** | Cloudflare Turnstile token validation is mandatory on public submissions. | Ingress Server Action middleware |
| **Sliding Window Rate Limit** | Upstash Redis throttles admissions submissions to maximum 5 requests per 15 minutes per IP address. | `@upstash/ratelimit` gate |
| **HTTP Security Headers** | `next.config.ts` must enforce `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and `poweredByHeader: false`. | CI security audit probe |

---

## 5. Git Governance & Verification Gates

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Pre-Commit Code Quality** | `biome check --write --no-errors-on-unmatched` runs on all staged files. Zero syntax or lint warnings. | Husky `pre-commit` hook |
| **Commit Message Format** | Commit subjects must strictly follow Conventional Commits 1.0.0 (`type(scope): subject`). | Commitlint `commit-msg` hook |
| **Zero Hook Bypass** | Using `--no-verify` to bypass pre-commit or pre-push quality gates is strictly prohibited. | CI branch protection rules |

---

## 6. Global Language & International Specification Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Mandatory Global English Technical Registry** | All core technical specifications, architectural decision records, and API contracts must be authored in Global English to eliminate local semantic ambiguity. | CI documentation linting gate |
| **Authoritative International Standards Grounding** | All architectural boundaries must map directly to ISO, IEEE, RFC, or W3C specifications with zero unvetted local adaptations. | Architectural review gate |
| **Zero Informal Abbreviations** | Only standard uppercase international technical acronyms (ISO, IEEE, RFC, W3C, SRE, CNCF, ISTQB, PAT, MCP, API, OAuth, JSON, HTTP) are permitted. Local or clipped abbreviations are strictly prohibited. | Biome and documentation check |
| **Single Canonical Terminology** | Every concept must map to exactly one official term with zero alternative synonyms or conceptual redundancies. | Architecture contract audit |

---

## 7. Model Context Protocol (MCP) & Credential Lifetime Constraints

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Zero Hardcoded Secrets Invariant** | Plaintext secret tokens in Git-tracked files (`.mcp.json`, `.agents/mcp_config.json`) are strictly prohibited. Environment interpolation `${VARIABLE_NAME}` is mandatory. | Pre-commit Biome check + Gitleaks CI |
| **Mandatory 90-Day Lifetime Boundary** | All Personal Access Tokens and API keys must declare a strict `<= 90 days` expiration window. "No Expiration" is strictly prohibited under ISO/IEC 27001 Control A.8.24. | Quarterly credential audit |
| **Dual Quarantine Topology** | Secrets are quarantined exclusively in untracked `.env.local` (workspace) and `HKCU\Environment` (host operating system). | `.gitignore` invariant verification |
| **Single Canonical Auth Option** | Every MCP server must operate under exactly one vetted authentication mechanism (Stdio PAT, Remote OAuth 2.0 RFC 6749, or Bearer RFC 6750) with zero ambiguous fallbacks. | `.mcp.json` specification contract |

---

## 8. Next-Forge Non-Tech-Stack Architecture & Engineering Invariants

| Constraint | Enforcement Rule | Gating Mechanism |
| :--- | :--- | :--- |
| **Type-Safe Environment Variables** | Every deployable application (`apps/web`, `apps/app`, `apps/api`) must declare and validate an `env.ts` Zod schema at startup. Direct access to unvalidated `process.env` in domain logic is prohibited. | `src/env.ts` static validation & Vitest suite |
| **Standardized Healthcheck Endpoint** | Every deployable app must expose `/api/health` returning `{ status: "ok", timestamp, service, checks }` for synthetic uptime monitoring. | Next.js route verification |
| **Distributed Rate Limiting with Fallback** | Public mutations (admissions, contact) must throttle requests via Upstash Redis sliding window with memory fallback. | Server Action rate limiter guard |
| **Presigned Direct-to-Cloud Uploads** | Large binary assets (PDFs, images) must upload directly to cloud storage via presigned URLs. Buffering files in server memory is prohibited. | Storage API design audit |
| **Cryptographic Webhook Ingress Verification** | Inbound webhooks must verify `svix-signature` before parsing or executing mutations. | Webhook route handler guard |
| **URL Query State as Single Source of Truth** | Filter, sort, and pagination state must be synchronized to URL search parameters via `nuqs`. Isolated client-only `useState` for page state is prohibited. | Frontend UI engineering audit |
| **Package Exports Map Invariant** | Internal packages under `packages/*` must strictly restrict imports via `exports` in `package.json`. Direct subpath imports into private `src/*` are prohibited. | TypeScript compiler & packaging audit |
| **Typographic Orphan Prevention** | Primary headings (`h1`, `h2`) must be wrapped in `<Balancer>` to maintain visually balanced text lines across responsive screens. | Visual regression & code review |

