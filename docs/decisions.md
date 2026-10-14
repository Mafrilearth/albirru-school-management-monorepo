# Architecture Decision Records

**Document Status:** Approved & Authoritative  
**Standard Compliance:** Michael Nygard Architecture Decision Record (ADR) Standard  
**System Scope:** Monorepo System Architecture, Data Layer, UI, and Toolchain  
**Enforcement Level:** Non-Negotiable Historic Precedents  

---

## ADR-001: Adoption of Modern Modular Monolith via Turborepo

- **Status:** Accepted
- **Context:** The institution requires separate runtime boundaries for public web (`apps/web`), authenticated management (`apps/app`), edge webhooks (`apps/api`), email previewing (`apps/email`), and documentation (`apps/docs`), while sharing common database models, design tokens, and compiler configurations.
- **Decision:** Adopt a Modern Modular Monolith pattern using Turborepo and pnpm workspaces following the next-forge architecture.
- **Consequences:** Eliminates microservice network latency overhead, enables single-repository atomic commits, isolates application deployments on Vercel, and shares common packages (`@albirru/database`, `@albirru/design-system`).

---

## ADR-002: Monotonic UUIDv7 Primary Keys

- **Status:** Accepted
- **Context:** Auto-increment integers expose sequential enumeration vulnerabilities (IDOR). Random UUIDv4 causes severe B-tree index fragmentation on high-write relational tables.
- **Decision:** Mandate RFC 9562 UUIDv7 (`uuidv7()`) across all table primary keys (`id`).
- **Consequences:** Guarantees cryptographic unguessability while embedding a millisecond-precision Unix timestamp in the high bits, ensuring optimal sequential B-tree indexing without page re-sorting.

---

## ADR-003: Neon Serverless PostgreSQL with Drizzle ORM

- **Status:** Accepted
- **Context:** The system requires serverless scale-to-zero compute, instantaneous database branching for testing pull requests, and deterministic compile-time type safety without heavyweight ORM engines.
- **Decision:** Select Neon Serverless PostgreSQL paired with Drizzle ORM (`drizzle-orm`) and Transaction Mode Connection Pooling.
- **Consequences:** Eliminates cold-start connection exhaustion, guarantees type-safe query composition, and ensures version-controlled SQL migrations generated via `pnpm run db:generate`.

---

## ADR-004: Centralized Clerk Authentication & Multi-Subdomain SSO

- **Status:** Accepted
- **Context:** Managing custom session cryptography, password hashing, and token revocation increases attack surfaces and maintenance costs.
- **Decision:** Delegate authentication and identity management to Clerk (`@clerk/nextjs`).
- **Consequences:** Provides turnkey Single Sign-On across public and internal subdomains, offloads credential security compliance, and integrates directly with React Server Components via `auth()`.

---

## ADR-005: Swiss Modernist Bento Grid UI with Base UI and Tailwind CSS v4

- **Status:** Accepted
- **Context:** Conventional web templates rely on heavy rounded corners, drop shadows, and arbitrary gradients that degrade institutional authority and accessibility.
- **Decision:** Implement a Swiss Modernist Bento Grid design system: zero border radius (`--radius: 0`), zero box shadows (`box-shadow: none`), hairline 1px borders, 8px geometric grid, and unstyled headless primitives (`@base-ui/react`, `@shadcn/react`).
- **Consequences:** Guarantees strict W3C WCAG 2.1 AA accessibility, establishes clean visual authority, and reduces CSS payload size.

---

## ADR-006: Server Actions with Zod Validation Envelopes

- **Status:** Accepted
- **Context:** Exposing generic client-side REST mutations increases endpoint vulnerability and duplicate type declarations.
- **Decision:** Enforce Next.js Server Actions (`"use server"`) for all authenticated mutations, wrapped in the standardized `ActionResponse` envelope (`src/types/action.ts`) and validated by Zod.
- **Consequences:** Guarantees end-to-end type safety between client forms and backend execution, eliminating unsecured REST mutation endpoints.

---

## ADR-007: In-House School Management & Zero Paid External CMS

- **Status:** Accepted
- **Context:** Third-party headless Content Management Systems (Sanity, Strapi, Contentful) add operational subscription costs, separate authentication siloes, and cross-origin synchronization latency.
- **Decision:** Construct all school governance workflows (Admissions, Identity, Attendance, Grading) directly in-house in `apps/app` using Drizzle ORM, Clerk, and shadcn/ui.
- **Consequences:** Zero subscription cost overhead, unified single-database relational integrity, and zero third-party vendor lock-in.

---

## ADR-008: Biome v2 Unified Toolchain

- **Status:** Accepted
- **Context:** Traditional ESLint and Prettier configurations require dozens of conflicting plugins, generate slow commit feedback loops (>2000ms), and require fragile workspace configurations.
- **Decision:** Replace ESLint and Prettier with Biome v2 (`@biomejs/biome`) as the unified linter and formatter.
- **Consequences:** Sub-200ms formatting and linting verification, enforced LF line endings, 2-space indentation, and automated pre-commit gating via Husky and lint-staged.
