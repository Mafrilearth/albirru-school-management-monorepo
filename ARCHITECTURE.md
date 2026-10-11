# Architecture Overview

This document serves as the authoritative, living architectural specification for the **Al-Birru School Information System (`albirru-sis`)**. It equips engineers and autonomous agents with a clear understanding of the codebase's architecture, directory topology, domain boundaries, network routing, and quality invariants. Update this document as the system evolves.

---

## 1. Project Structure

The repository is structured as a **Modern Modular Monolith** utilizing the standardized **next-forge** monorepo topology powered by Turborepo and pnpm workspaces. The architecture decouples the system into 7 dedicated applications (`apps/*`) and 3 shared foundation packages (`packages/*`).

```plain text
[Project Root]/
├── apps/
│   ├── app/                          # Authenticated SIS & SaaS Portal (@albirru/app) - Port 3000
│   │   ├── src/
│   │   │   ├── app/                  # Authenticated portal routes (/admin, /admin/identity, /attendance, /grading, /guardian)
│   │   │   ├── modules/              # Isolated domain logic:
│   │   │   │   ├── identity/         # Master identity, civitas accounts, and RBAC provisioning
│   │   │   │   ├── attendance/       # Daily attendance sessions and roster locking
│   │   │   │   ├── grading/          # Weighted gradebook calculations and report card freezing
│   │   │   │   ├── guardian/         # Guardian portal and student monitoring
│   │   │   │   └── admissions/       # Internal admission review workflows
│   │   │   ├── lib/                  # Application utilities and session helpers
│   │   │   └── types/                # Domain-specific TypeScript definitions
│   │   └── package.json              # Next.js 16 + Clerk Auth + shadcn/ui + Tailwind CSS v4
│   │
│   ├── web/                          # Public Institutional Web Application (@albirru/web) - Port 3001
│   │   ├── src/
│   │   │   ├── app/                  # Flattened public marketing routes:
│   │   │   │   ├── page.tsx          # Institutional landing page (Hero, Badges, Programs, CTA)
│   │   │   │   ├── about/            # History, vision, mission, and accreditation credentials
│   │   │   │   ├── admissions/       # Public PPDB registration form island
│   │   │   │   ├── programs/         # Tahfidz, bilingual, and extracurricular curriculum
│   │   │   │   ├── news/             # Institutional news and press releases
│   │   │   │   ├── gallery/          # Visual activity photo and video gallery
│   │   │   │   └── contact/          # Physical campus location, Google Maps, and contact form
│   │   │   ├── modules/
│   │   │   │   └── admissions/       # Public PPDB submission Server Action (Turnstile + Rate Limiter)
│   │   │   ├── components/           # Public UI sections (Hero, Credentials, Values, Stats, Navbar, Footer)
│   │   │   └── lib/                  # Client-side analytics and Turnstile helpers
│   │   └── package.json              # Next.js 16 + Turnstile + Upstash Rate Limiter + SEO
│   │
│   ├── api/                          # Cross-Platform API & Webhook Ingress (@albirru/api) - Port 3002
│   │   ├── src/app/
│   │   │   ├── health/route.ts       # Edge health check & uptime probe endpoint
│   │   │   └── webhooks/             # Statutory external webhook receivers (Clerk, Resend)
│   │   └── package.json              # Next.js 16 Edge Route Handlers
│   │
│   ├── email/                        # Transactional Email Studio (@albirru/email) - Port 3003
│   │   ├── src/
│   │   │   ├── app/                  # Web-based email template previewer
│   │   │   └── emails/               # React Email transactional templates (AdmissionConfirmation.tsx)
│   │   └── package.json              # React Email + Resend SDK
│   │
│   ├── docs/                         # Technical & Statutory Docs Portal (@albirru/docs) - Port 3004
│   │   ├── src/app/                  # Markdown specification reader (01-PRD through 11-Runbook)
│   │   └── package.json              # Next.js 16 Documentation Portal
│   │
│   ├── studio/                       # Visual Database Console (@albirru/studio) - Port 3005
│   │   ├── src/index.ts              # Drizzle Studio launcher script
│   │   └── package.json              # Drizzle Kit visual database inspector
│   │
│   └── storybook/                    # Frontend UI Component Workshop (@albirru/storybook) - Port 6006
│       ├── src/index.ts              # Design system component story definitions
│       └── package.json              # Storybook 10 + Vite + Design System Workbench
│
├── packages/
│   ├── database/                     # Core Relational Database Package (@albirru/database)
│   │   ├── src/
│   │   │   ├── schema.ts             # Drizzle ORM declarative schemas (UUIDv7, relations, audit columns)
│   │   │   └── index.ts              # PostgreSQL connection pool, Drizzle db instance, and schema exports
│   │   ├── drizzle/                  # Auto-generated deterministic SQL migrations
│   │   ├── drizzle.config.ts         # Drizzle Kit CLI configuration
│   │   └── package.json              # Database package dependencies and migration scripts
│   │
│   ├── design-system/                # Standardized UI Design System Library (@albirru/design-system)
│   │   ├── src/
│   │   │   ├── components/           # shadcn/ui & Radix UI primitives (Button, Dialog, Sheet, Table, etc.)
│   │   │   ├── lib/                  # Styling utilities (cn, clsx, tailwind-merge)
│   │   │   ├── hooks/                # Reusable UI hooks
│   │   │   ├── providers/            # Theme, tooltip, and dialog providers
│   │   │   └── index.ts              # Public library exports
│   │   └── package.json              # Component primitives dependencies
│   │
│   └── typescript-config/            # Modular TypeScript Configurations (@albirru/typescript-config)
│       ├── base.json                 # Monorepo base compiler options
│       ├── nextjs.json               # Next.js App Router compiler options
│       ├── react-library.json        # Shared React library compiler options
│       └── package.json
│
├── .github/                          # GitHub Actions CI/CD workflows and automated quality gates
├── .gitignore                        # Standard monorepo ignore rules
├── AGENTS.md                         # Autonomous agent operational constitution & hard invariants
├── ARCHITECTURE.md                   # System Architecture Specification (HLD)
├── AUTHORS.md                        # Institutional attribution & intellectual property credits
├── DATABASE.md                       # Relational database architecture & Drizzle invariants
├── DEPLOYMENT.md                     # Vercel & Cloudflare deployment runbook
├── DESIGN.md                         # Technical Design Document & Design System (8px, Major Third)
├── ENVIRONMENT.md                    # Environment variables specification & classification matrix
├── GOVERNANCE.md                     # Institutional & engineering governance framework
├── LICENSE                           # Official MIT License (OSI Approved)
├── README.md                         # Project overview, credentials, and quick-start guide
├── ROADMAP.md                        # Multi-phase strategic development roadmap (2026-2027)
├── SECURITY.md                       # Vulnerability disclosure SLA & threat model
├── SUPPORT.md                        # Official community & institutional support channels
├── TESTING.md                        # Quality assurance & testing strategy (Vitest, Playwright)
├── biome.json                        # Biome linter and formatter configuration (tabs, 100 printWidth, LF)
├── pnpm-workspace.yaml               # pnpm workspaces definition
├── pnpm-lock.yaml                    # Deterministic pnpm lockfile
└── turbo.json                        # Turborepo task pipeline configuration
```

---

## 2. High-Level System Diagram

The architecture implements a **Subdomain Routing Topology** where external traffic is routed to specialized Next.js applications at the edge. A single root apex domain (`sd-albirru.sch.id`) shares cross-subdomain authentication cookies via Clerk single sign-on (SSO).

```plain text
[Public Visitors / Prospective Parents]     [Civitas Academica: Admin / Teachers / Guardians]
                  │                                                 │
                  ▼                                                 ▼
      https://sd-albirru.sch.id                         https://app.sd-albirru.sch.id
      (Marketing & PPDB Portal)                          (Authenticated SIS Platform)
                  │                                                 │
                  └─────────────────────────┬───────────────────────┘
                                            │
                                            ▼ HTTPS / DNS / Bot Shield
                           [Cloudflare (Turnstile & WAF)]
                                            │
                                            ▼ Edge Ingress Routing
                               [Vercel Serverless Hosting]
                                            │
            ┌───────────────────────────────┼───────────────────────────────┐
            ▼                               ▼                               ▼
       [apps/web]                      [apps/app]                       [apps/api]
       Port: 3001                      Port: 3000                       Port: 3002
    - Marketing & News              - Admin Portal (/admin)          - Edge Route Handlers
    - Accreditation Badges          - Identity Management            - /health Probe
    - Public PPDB Forms             - Attendance Sessions            - Webhook Ingress
    - Cloudflare Turnstile          - Grading & Report Cards           (Clerk / Resend)
            │                               │                               │
            └───────────────────────────────┼───────────────────────────────┘
                                            │
                                            ▼
                               [Next.js Server Actions]
                               - ZSA (Zero-overhead Server Actions)
                               - Runtime Schema Validation (Zod)
                               - Envelope Contract (ActionResponse)
                                            │
                      ┌─────────────────────┼─────────────────────┐
                      ▼                     ▼                     ▼
                [Clerk Auth]         [Upstash Redis]        [Cloudflare R2]
                - SSO Wildcard       - Sliding Window       - Student Files
                  Cookies (.domain)    Rate Limiter           Cold Archive
                - RBAC Claim Checks    (5 req / 15 min)     - Zero Egress Fees
                      │                     │                     │
                      └─────────────────────┼─────────────────────┘
                                            │
                                            ▼
                                 [@albirru/database]
                                 - Drizzle ORM Type-Safe Query Builder
                                 - postgres-js Driver (porsager/postgres)
                                 - Built-in Connection Pooling (Transaction Mode)
                                            │
                                            ▼
                           [Neon Serverless PostgreSQL 16+]
                           - Primary Keys: UUIDv7 (Monotonically Ordered)
                           - Logical Soft-Delete: is_active (Zero Hard Delete)
                           - Statutory Audit Columns: created_at, updated_at, created_by
                           - Foreign Key Indexes: Supporting B-trees on all *_id columns
```

---

## 3. Core Components

### 3.1. Next-Forge Applications (`apps/*`)

Each application in `apps/` corresponds to a distinct network endpoint, port allocation, and subdomain in accordance with the **next-forge** pattern:

| Application | Monorepo Package | Canonical Subdomain | Dev Port | Primary Responsibility |
|---|---|---|---|---|
| **Portal / SIS** | `@albirru/app` | `app.sd-albirru.sch.id` | `:3000` | Authenticated school management (Admin, Teachers, Guardians, Students) |
| **Public Web** | `@albirru/web` | `sd-albirru.sch.id` | `:3001` | Public landing page, school profile, accreditation credentials, and PPDB registration |
| **API & Webhooks** | `@albirru/api` | `api.sd-albirru.sch.id` | `:3002` | Health monitoring probes and incoming statutory webhooks (Clerk, Resend) |
| **Email Studio** | `@albirru/email` | `email.sd-albirru.sch.id` | `:3003` | React Email template development and local visual preview workbench |
| **Documentation** | `@albirru/docs` | `docs.sd-albirru.sch.id` | `:3004` | Statutory specifications explorer (PRD 01-11, ADRs, and operational runbooks) |
| **Database Studio** | `@albirru/studio` | Local / Dedicated | `:3005` | Drizzle Studio visual schema inspector and data browser |
| **Storybook** | `@albirru/storybook` | `storybook.sd-albirru.sch.id` | `:6006` | Isolated UI component development and design system documentation workbench |

#### 3.1.1. Authenticated SIS Application (`apps/app`) — Port 3000
- **Name:** SD Al-Birru Authenticated SIS Application (`@albirru/app`)
- **Subdomain:** `app.sd-albirru.sch.id` (Preview: `app.albirru.mafrilearth.com`)
- **Description:** Protected enterprise web application for school administrators, instructors, guardians, and students. Manages Master Identity provisioning (RBAC), daily sequential attendance sessions with immutability locking, academic grading calculation with report card freezing, and student performance monitoring for guardians.
- **Technologies:** Next.js 16 (App Router, RSC), React 19, TypeScript, Clerk SDK (`@clerk/nextjs`), Tailwind CSS v4, shadcn/ui, Radix UI, Recharts, React Hook Form, Zod, ZSA.
- **Deployment:** Vercel (Production Edge Serverless Compute).

#### 3.1.2. Public Web Application (`apps/web`) — Port 3001
- **Name:** SD Al-Birru Public Web Application (`@albirru/web`)
- **Subdomain:** `sd-albirru.sch.id` (Apex root; Preview: `albirru.mafrilearth.com`)
- **Description:** The primary public-facing portal for SD Al-Birru Tahfidzul Qur'an. Houses the high-performance institutional profile, statutory accreditation badges (NPSN `70010111` & BAN-S/M), school curriculum programs, news and gallery archives, and the online student registration (PPDB) form. Interacts with Cloudflare Turnstile for bot deterrence and Upstash Redis for submission throttling.
- **Architectural Boundary:** Strictly contains public web pages (`/`, `/about`, `/admissions`, `/programs`, `/news`, `/gallery`, `/contact`). All authenticated portal features and domain management tools are isolated in `apps/app`. Ad-hoc in-app design-system pages are prohibited; Storybook (`apps/storybook`) serves as the official component workshop.
- **Technologies:** Next.js 16 (App Router, RSC), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Radix UI, Motion, Lucide React, React Hook Form, Zod, ZSA.
- **Deployment:** Vercel (Edge & Serverless Compute).

#### 3.1.3. Cross-Platform API & Webhook Service (`apps/api`) — Port 3002
- **Name:** SD Al-Birru API Microservice (`@albirru/api`)
- **Subdomain:** `api.sd-albirru.sch.id`
- **Description:** Dedicated edge API microservice handling system health monitoring (`/health`), public API routes, and incoming external statutory webhooks (Clerk identity synchronization, Resend delivery status notifications).
- **Technologies:** Next.js 16 Route Handlers, TypeScript, Drizzle ORM, Zod, Svix.
- **Deployment:** Vercel Serverless Functions.

#### 3.1.4. React Email Templates & Preview Workshop (`apps/email`) — Port 3003
- **Name:** SD Al-Birru Transactional Email Studio (`@albirru/email`)
- **Subdomain:** `email.sd-albirru.sch.id` (Local Preview: `localhost:3003`)
- **Description:** React-based email template development and preview workbench. Hosts standardized transactional email components (e.g., `AdmissionConfirmation.tsx`) rendered with `@react-email/components` and dispatched via the Resend API.
- **Technologies:** React Email (`@react-email/components`), Resend (`resend`), TypeScript, Tailwind CSS.
- **Deployment:** Vercel Serverless / Local Preview Studio.

#### 3.1.5. In-Tree Documentation Explorer (`apps/docs`) — Port 3004
- **Name:** SD Al-Birru In-Tree Documentation Portal (`@albirru/docs`)
- **Subdomain:** `docs.sd-albirru.sch.id`
- **Description:** Technical documentation website rendering all 11 statutory specifications, architecture decision records (ADRs), and operational runbooks directly from in-tree markdown sources.
- **Technologies:** Next.js 16 (App Router, RSC), TypeScript, Tailwind CSS v4, shadcn/ui.
- **Deployment:** Vercel Edge Serverless.

#### 3.1.6. Visual Database Editor (`apps/studio`) — Port 3005
- **Name:** SD Al-Birru Database Studio (`@albirru/studio`)
- **Description:** Local visual database administration console utilizing Drizzle Studio (`drizzle-kit studio`) to inspect tables, relations, and indexes, and execute schema queries directly against Neon PostgreSQL.
- **Technologies:** Drizzle Studio (`drizzle-kit`), Drizzle ORM, TypeScript.
- **Command:** `pnpm --filter @albirru/studio dev`.

#### 3.1.7. Frontend UI Component Workshop (`apps/storybook`) — Port 6006
- **Name:** SD Al-Birru Component Workbench (`@albirru/storybook`)
- **Subdomain:** `storybook.sd-albirru.sch.id` (Local Workbench: `localhost:6006`)
- **Description:** Isolated UI component workshop for developing, previewing, and testing design system primitives, widgets, and layout components in isolation before integration. Serves as the central design system catalog for the monorepo.
- **Technologies:** Storybook 10, Vite, React 19, TypeScript, Tailwind CSS v4, Radix UI.
- **Deployment:** Chromatic / Local Workbench.

---

### 3.2. Shared Packages (`packages/*`)

#### 3.2.1. Central Relational Database Library (`packages/database`)
- **Package Name:** `@albirru/database`
- **Location:** `packages/database/src/`
- **Components:**
  - `schema.ts`: Comprehensive Drizzle ORM declarative schemas encompassing all entities: `users`, `profiles`, `roles`, `user_roles`, `academic_years`, `classrooms`, `students`, `admission_applications`, `attendance_sessions`, `attendance_records`, `grade_components`, `student_grades`, and `report_cards`. Enforces UUIDv7 primary keys, referential relationships with Drizzle `relations()`, supporting B-tree indexes, and statutory audit columns.
  - `index.ts`: PostgreSQL connection pool client (`postgres` / `porsager/postgres`), Drizzle instance export (`db = drizzle(client, { schema })`), and full re-exports of `drizzle-orm` operators.
  - `drizzle/`: Deterministic SQL static migration scripts generated via `pnpm run db:generate`.

#### 3.2.2. Standardized Design System (`packages/design-system`)
- **Package Name:** `@albirru/design-system`
- **Location:** `packages/design-system/src/`
- **Components:**
  - `components/`: Headless and styled shadcn/ui primitives built upon `@base-ui/react` and Radix UI (Button, Dialog, Sheet, Dropdown, Table, Input, Card, Badge, etc.).
  - `lib/`: CSS class combining utility (`cn`) powered by `clsx` and `tailwind-merge`.
  - `hooks/`: Accessible UI hooks (toast, media-query, mobile-navigation).
  - `providers/`: Theme provider (`next-themes`), tooltip provider, and root UI context wrappers.

#### 3.2.3. Shared Tooling Packages
- **`@albirru/eslint-config`:** Shared ESLint rules for Node.js, TypeScript, Next.js, and Storybook.
- **`@albirru/typescript-config`:** Standardized `tsconfig.json` bases across web apps, serverless nodes, and React libraries.

---

### 3.3. Backend Services & Domain Modules

The business logic follows a **Modern Modular Monolith** pattern. Domain modules are encapsulated in `apps/app/src/modules/` (plus public PPDB ingress in `apps/web/src/modules/admissions/`), backed by `@albirru/database`:

1. **Master Identity & RBAC Service (`apps/app/src/modules/identity/`):**
   - Central authority for authenticating civitas academica and provisioning user accounts across four statutory roles: Administrator, Instruktur/Guru, Wali Murid, and Siswa.
   - Enforces unique identity attributes (NIK, NISN, NIP), user profiles, and session security verification.

2. **Daily Attendance Tracking Service (`apps/app/src/modules/attendance/`):**
   - Manages classroom attendance sessions. Initializes baseline attendance rosters, records individual student attendance status (`Present`, `Sick`, `Excused`, `Absent`), calculates daily attendance statistics, and enforces post-finalization immutability locking.

3. **Academic Grading & Report Card Service (`apps/app/src/modules/grading/`):**
   - Executes deterministic weighted grading computations (100% decimal precision), manages formative and summative assessment components, aggregates semester evaluations, and freezes final report cards for guardian retrieval.

4. **Guardian Portal Service (`apps/app/src/modules/guardian/`):**
   - Read-only data aggregation service providing guardians with real-time visibility into dependent attendance records, gradebook summaries, and downloadable PDF report card archives.

5. **PPDB Public Admission Ingress Service (`apps/web/src/modules/admissions/`):**
   - Public-facing ingress service managing prospective student applications. Validates Cloudflare Turnstile tokens, enforces IP-based rate limiting via Upstash Redis (5 submissions per 15 minutes), parses payloads with Zod, generates sequential tracking codes (`ADM-YYYYMMDD-XXXX`), and persists records with referential audit integrity.

---

## 4. Data Stores

### 4.1. Primary Relational Database
- **Name:** Neon Serverless PostgreSQL
- **Engine:** PostgreSQL 16+
- **Purpose:** Primary system of record for all business-critical transactional and relational entities. Enforces ACID transactional integrity, foreign key relational constraints with B-tree indexes, UUIDv7 primary keys, and statutory audit columns (`created_at`, `updated_at`, `created_by`, `is_active`).
- **Connection Mode:** Neon Connection Pooling (Transaction Mode) via `@albirru/database`.

### 4.2. Ingress Throttling & Rate Limiting Cache
- **Name:** Upstash Redis
- **Engine:** Serverless Redis (REST API)
- **Purpose:** Low-latency in-memory data store utilized for sliding-window rate limiting on public mutation endpoints (5 submissions per 15 minutes on `/admissions`) to protect database connection pools from denial-of-service.

### 4.3. Document Attachment Storage (Cold Archive)
- **Name:** Cloudflare R2
- **Engine:** S3-Compatible Distributed Object Storage
- **Purpose:** Stores uploaded student admissions documents (Birth Certificates, Family Cards, identification photos) and archived semester report card PDFs with zero egress data transfer fees.

---

## 5. External Integrations / APIs

- **Clerk (`@clerk/nextjs`)**:
  - **Purpose:** User authentication, session issuance, role assignment, and multi-subdomain single sign-on (SSO) via wildcard cookie configuration (`.sd-albirru.sch.id`).
  - **Integration Method:** Official Next.js SDK (`@clerk/nextjs`), Server Components helper `auth()`, and Clerk Middleware.

- **Upstash Redis (`@upstash/ratelimit`, `@upstash/redis`)**:
  - **Purpose:** Sliding-window rate limiting and DDoS protection on public submission routes.
  - **Integration Method:** Serverless REST API SDK.

- **Cloudflare Turnstile**:
  - **Purpose:** Non-intrusive bot deterrence and human verification for public admissions forms.
  - **Integration Method:** Client-side Turnstile Widget and server-side challenge verification via REST API.

- **Resend (`resend`)**:
  - **Purpose:** Transactional email delivery for admissions registration confirmation and emergency announcements.
  - **Integration Method:** Official Node.js SDK (`resend`) paired with `@react-email/components` templates.

- **Sentry (`@sentry/nextjs`)**:
  - **Purpose:** Real-time error tracking, exception monitoring, and runtime crash alerting.
  - **Integration Method:** Native Next.js instrumentation via `@sentry/nextjs`.

- **PostHog (`posthog-js`)**:
  - **Purpose:** Privacy-preserving product analytics, feature flags, and UI interaction telemetry.
  - **Integration Method:** Client-side JavaScript SDK (`posthog-js`).

- **Doppler**:
  - **Purpose:** Centralized secrets and environment variable lifecycle management across dev, staging, and production environments.
  - **Integration Method:** CLI integration and automated Vercel environment synchronization.

---

## 6. Deployment & Infrastructure

### 6.1. Subdomain Routing & Ingress Topology

```plain text
Domain Name                      Application Target   Deployment Type   Root Directory
──────────────────────────────────────────────────────────────────────────────────────────
sd-albirru.sch.id (Apex)         apps/web             Vercel Edge       apps/web
app.sd-albirru.sch.id            apps/app             Vercel Edge       apps/app
api.sd-albirru.sch.id            apps/api             Vercel Edge       apps/api
docs.sd-albirru.sch.id           apps/docs            Vercel Edge       apps/docs
email.sd-albirru.sch.id          apps/email           Vercel Edge       apps/email
storybook.sd-albirru.sch.id      apps/storybook       Chromatic/Vercel  apps/storybook
```

### 6.2. Git Workflow & Branching Governance

Development follows strict branch governance with automated CI quality gates:

- **`dev` (Development):** Primary active development branch. All feature branches branch from and rebase onto `dev`.
- **`staging` (Pre-production):** Acceptance testing and staging environment. Synchronized via fast-forward merge from `dev`.
- **`main` (Production):** Production releases. Deploys to live canonical domains upon merge.
- **Complementary Branches:** `uat` (User Acceptance Testing), `sandbox` (Exploratory Testing), `dr` (Disaster Recovery Mirror).

### 6.3. Continuous Integration Quality Gates

Every pull request and push to protected branches must satisfy the 4-stage automated CI pipeline on standard Ubuntu runners:

1. **Linting & Code Formatting:** Biome format check (`pnpm run check`). Enforces tabs indentation, 100 print width, and strict LF line endings.
2. **Static Type Checking:** TypeScript strict compiler verification (`pnpm run check-types`). Zero `@ts-ignore` or `any` permitted.
3. **Automated Test Suite:** Vitest unit and integration test runner (`pnpm run test`).
4. **Turborepo Monorepo Build:** Full production artifact compilation across all workspaces (`pnpm run build`).

---

## 7. Security Considerations

- **Single Sign-On (SSO) with Wildcard Cookies:** Clerk manages secure HTTP-only session cookies scoped to `.sd-albirru.sch.id`, enabling authenticated transitions between the public marketing site and the portal without re-authentication.
- **Granular Role-Based Access Control (RBAC):** Four statutory roles (Administrator, Instruktur/Guru, Wali Murid, Siswa) enforced at Next.js Server Action boundaries and centralized Clerk Middleware.
- **Zero Physical Deletion:** Hard invariant prohibiting SQL `DELETE`. Records are deactivated logically via `is_active = false` to guarantee statutory audit integrity.
- **UUIDv7 Primary Keys:** All operational database tables utilize monotonically ordered UUIDv7 (`uuidv7()`), preventing sequence enumeration attacks while maintaining optimal B-tree indexing performance.
- **Strict Runtime Validation:** Every Server Action mutation parses inputs through Zod schemas before database interaction.
- **Anti-Bot & Ingress Throttling:** Cloudflare Turnstile token validation and Upstash Redis rate limiting (5 submissions / 15 minutes) protect public forms against automated attacks.
- **Data Encryption:** TLS 1.3 in transit across all endpoints and database connections (`sslmode=require`); AES-256 encryption at rest on Neon PostgreSQL and Cloudflare R2.

---

## 8. Development & Testing Environment

### 8.1. Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Mafrilearth/albirru-school-management-monorepo.git
   cd albirru-school-management-monorepo
   ```
2. Checkout the development branch:
   ```bash
   git checkout dev
   ```
3. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
4. Configure local environment variables:
   ```bash
   cp .env.example .env.local
   # Populate Neon DATABASE_URL, Clerk API keys, and Upstash Redis credentials
   ```
5. Start development servers across all workspaces:
   ```bash
   pnpm run dev
   ```

### 8.2. Individual Application Scripts

| Task | Command | Dev Port |
|---|---|---|
| Run Authenticated SIS App | `pnpm --filter @albirru/app dev` | `:3000` |
| Run Public Web Application | `pnpm --filter @albirru/web dev` | `:3001` |
| Run API Microservice | `pnpm --filter @albirru/api dev` | `:3002` |
| Run Email Preview Studio | `pnpm --filter @albirru/email dev` | `:3003` |
| Run Documentation Portal | `pnpm --filter @albirru/docs dev` | `:3004` |
| Run Drizzle Studio Console | `pnpm --filter @albirru/studio dev` | `:3005` |
| Run Storybook UI Workshop | `pnpm --filter @albirru/storybook dev` | `:6006` |

### 8.3. Quality Gate Commands

| Verification Step | Command | Standard / Tool |
|---|---|---|
| Linter & Format Verification | `pnpm run check` | Biome (`biome check .`) |
| Code Auto-Formatting | `pnpm run format` | Biome (`biome format --write .`) |
| Static Type Verification | `pnpm run check-types` | TypeScript (`tsc --noEmit`) |
| Unit & Integration Tests | `pnpm run test` | Vitest (`vitest --run`) |
| Production Build Verification | `pnpm run build` | Turborepo (`turbo run build`) |
| Generate Database Migrations | `pnpm run db:generate` | Drizzle Kit (`drizzle-kit generate`) |

---

## 9. Future Considerations / Roadmap

- **Offline-First PWA Synchronization:** Progressive web app service workers with background sync capabilities for rural attendance recording under unstable network connectivity.
- **Statutory Dapodik / EMIS Adapters:** Automated synchronization adapters for the Indonesian Ministry of Education (Kemendikbudristek) Dapodik and Ministry of Religious Affairs (Kemenag) EMIS APIs.
- **Multi-Branch Campus Architecture:** Schema extensions to support prospective regional branch campuses under Yayasan Pendidikan Al-Birru without database fragmentation.

---

## 10. Project Identification

- **Project Name:** Al-Birru School Information System (`albirru-sis`)
- **Institution:** SD Al-Birru Tahfidzul Qur'an
- **National School Identification (NPSN):** `70010111`
- **Accreditation Authority:** Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)
- **Repository URL:** `https://github.com/Mafrilearth/albirru-school-management-monorepo`
- **Primary Architecture Standard:** next-forge Monorepo Pattern
- **Date of Last Architectural Update:** 2026-10-11

---

## 11. Glossary / Acronyms

- **BAN-S/M:** Badan Akreditasi Nasional Sekolah/Madrasah (National Accreditation Board for Schools/Madrasahs)
- **Dapodik:** Data Pokok Pendidikan (Ministry of Education Core School Database)
- **EMIS:** Education Management Information System (Ministry of Religious Affairs School Database)
- **NPSN:** Nomor Pokok Sekolah Nasional (Statutory National School Identification Number: `70010111`)
- **PPDB:** Penerimaan Peserta Didik Baru (Statutory Student Admission & Enrollment Portal)
- **RBAC:** Role-Based Access Control
- **RSC:** React Server Components (Next.js App Router native server execution)
- **SIS:** School Information System (Integrated institutional management platform)
- **SSO:** Single Sign-On (Shared authentication sessions across subdomains via wildcard cookies)
- **UUIDv7:** Universally Unique Identifier Version 7 (Monotonically time-ordered 128-bit unique identifier)
- **ZSA:** Zero-overhead Server Actions Wrapper (Type-safe Server Action wrapper with Zod validation)
