# Architecture Overview

This document serves as a critical, living template designed to equip agents with a rapid and comprehensive understanding of the codebase's architecture, enabling efficient navigation and effective contribution from day one. Update this document as the codebase evolves.

## 1. Project Structure

This section provides a high-level overview of the project's directory and file structure, categorised by architectural layer or major functional area. It is essential for quickly navigating the codebase, locating relevant files, and understanding the overall organization and separation of concerns.

```plain text
[Project Root]/
├── apps/
│   ├── app/                          # Main authenticated SaaS/SIS application (@albirru/app) - Port 3000
│   │   ├── src/                      # Admin & Portal routes (/admin, /admin/identity, /attendance, /grading)
│   │   └── package.json              # Next.js 16 + Clerk + shadcn/ui + Tailwind CSS v4
│   │
│   ├── web/                          # Public-facing web application (@albirru/web) - Port 3001
│   │   ├── src/                      # Public routes (/admissions, /news, /about, /gallery), PPDB Form
│   │   └── package.json              # Next.js 16 + Turnstile + Upstash Rate Limiting + SEO
│   │
│   ├── api/                          # Cross-platform API & webhook service (@albirru/api) - Port 3002
│   │   ├── src/                      # Endpoints (/health, /webhooks/clerk, /webhooks/resend)
│   │   └── package.json              # Next.js 16 Serverless API microservice
│   │
│   ├── email/                        # React-based email templates & preview workshop (@albirru/email) - Port 3003
│   │   ├── src/emails/               # Transactional email components (AdmissionConfirmation.tsx)
│   │   └── package.json              # React Email + Resend SDK
│   │
│   ├── docs/                         # Technical documentation website (@albirru/docs) - Port 3004
│   │   ├── src/                      # Automated statutory specs reader and architecture explorer
│   │   └── package.json              # Next.js 16 + Design System
│   │
│   ├── studio/                       # Visual database editor (@albirru/studio) - Port 3005
│   │   ├── src/                      # Visual schema inspector and data browser
│   │   └── package.json              # Drizzle Studio (drizzle-kit studio)
│   │
│   └── storybook/                    # Frontend UI component workshop (@albirru/storybook) - Port 6006
│       ├── src/                      # Isolated component testing and documentation workbench
│       └── package.json              # Storybook 10 + Vite + Design System
│
├── packages/
│   ├── database/                     # Central database library (@albirru/database)
│   │   ├── src/
│   │   │   ├── schema/               # Drizzle ORM declarative schemas (users, admissions, attendance, etc.)
│   │   │   ├── client.ts             # PostgreSQL client and Neon connection pooling setup
│   │   │   └── index.ts              # Public exports for database instance, operators, and schemas
│   │   ├── drizzle/                  # Generated SQL static migration files
│   │   ├── drizzle.config.ts         # Drizzle Kit CLI configuration
│   │   └── package.json              # Database package dependencies and scripts
│   │
│   ├── design-system/                # Standardized UI Design System (@albirru/design-system)
│   │   ├── src/
│   │   │   ├── components/ui/        # shadcn/ui & Radix UI primitives (Button, Dialog, Sidebar, etc.)
│   │   │   ├── lib/                  # Styling utilities (cn, clsx, tailwind-merge)
│   │   │   ├── hooks/                # Reusable UI hooks
│   │   │   └── index.ts              # Public exports for components, primitives, and utilities
│   │   └── package.json              # Design system dependencies and peerDependencies
│   │
│   ├── eslint-config/                # Centralized ESLint configurations (@albirru/eslint-config)
│   │   ├── base.js                   # Universal JavaScript/TypeScript linting rules
│   │   ├── nextjs.js                 # Next.js App Router specific linting rules
│   │   └── package.json
│   │
│   └── typescript-config/            # Modular TypeScript configurations (@albirru/typescript-config)
│       ├── base.json                 # Core TypeScript compiler options
│       ├── nextjs.json               # Next.js compiler options
│       ├── react-library.json        # Shared React library compiler options
│       └── package.json
│
├── docs/                             # Statutory in-tree system specifications (01 to 11)
│   ├── 01-product-requirements-specification.md
│   ├── 02-software-architecture-and-technical-design.md
│   ├── 03-relational-database-specification.md
│   ├── 04-application-route-and-mutation-contract.md
│   ├── 05-visual-design-system-specification.md
│   ├── 06-application-layout-and-navigation-architecture.md
│   ├── 07-user-interface-component-anatomy-specification.md
│   ├── 08-landing-page-view-architecture.md
│   ├── 09-architecture-decision-records.md
│   ├── 10-quality-assurance-and-verification-plan.md
│   └── 11-operational-runbook-and-incident-procedures.md
│
├── tasks/                            # Active development planning, tasks, and tracking
├── .agents/skills/                   # 24 lifecycle agent skills (define, plan, build, verify, review, ship)
├── .github/                          # GitHub Actions CI/CD workflows and automated quality gates
├── .gitignore                        # Standard monorepo ignore rules
├── AGENTS.md                         # Autonomous agent operational constitution & hard invariants
├── biome.json                        # Biome linter and formatter configuration
├── pnpm-workspace.yaml               # pnpm workspaces package definition
├── pnpm-lock.yaml                    # Deterministic pnpm lockfile
├── turbo.json                        # Turborepo task pipeline configuration
├── README.md                         # Project overview, environments, and quick start guide
└── ARCHITECTURE.md                   # This document
```

## 2. High-Level System Diagram

Provide a simple block diagram or a clear text-based description of the major components and their interactions. Focus on how data flows, services communicate, and key architectural boundaries.

```plain text
[Public Visitor / Student / Parent / Admin]
                      │
                      ▼ HTTPS / DNS / Bot Shield
      [Cloudflare (Turnstile Challenge & WAF)]
                      │
                      ▼ Edge Network Ingress
          [Vercel Serverless Hosting]
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
  [apps/web (Public Portal)]   [apps/app (Internal SIS)]
  - Next.js 16 App Router      - Next.js 16 App Router
  - RSC & SSR Landing Pages    - Authenticated Portals
  - Online PPDB Form Island    - Academic / Attendance Views
        │                           │
        └─────────────┬─────────────┘
                      │
                      ▼
         [Next.js Server Actions]
         - ZSA (Zero-overhead Server Actions Wrapper)
         - Runtime Schema Validation (Zod)
         - Standardized Envelope (ActionResponse)
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
  [Clerk Auth]   [Upstash Redis]  [Cloudflare R2]
  - Session      - Rate Limiting  - Student File
    Verification   (5 req / 15m)    Cold Storage
        │             │             │
        └─────────────┼─────────────┘
                      │
                      ▼
        [@albirru/database Client]
        - Drizzle ORM Type-Safe Query Builder
        - postgres (porsager/postgres) Driver
        - Connection Pooling (Transaction Mode)
                      │
                      ▼
     [Neon Serverless PostgreSQL Database]
     - PostgreSQL 16+ Engine
     - Primary Keys: UUIDv7
     - Zero Physical Deletion (is_active)
     - Audit Columns: created_at, updated_at, created_by
```

## 3. Core Components

(List and briefly describe the main components of the system. For each, include its primary responsibility and key technologies used.)

### 3.1. Next-Forge Applications (`apps/*`)

Adhering to the standardized **next-forge** monorepo architecture, user-facing applications and developer tools are organized under `apps/` with dedicated responsibilities and port allocations:

#### 3.1.1. Main Authenticated SaaS & SIS Application (`apps/app`) — Port 3000

- **Name:** SD Al-Birru Authenticated SIS Application (`@albirru/app`)
- **Description:** Protected web application for school administration, academic instructors, guardians, and students. Manages Master Identity provisioning (RBAC), daily sequential attendance sessions with immutability locking, academic grading calculation with report card freezing, and student performance monitoring for guardians.
- **Technologies:** Next.js 16 (App Router, RSC), React 19, TypeScript, Clerk (`@clerk/nextjs`), Tailwind CSS v4, shadcn/ui, Radix UI, Recharts, React Hook Form, Zod, ZSA.
- **Deployment:** Vercel (Production Edge Serverless Compute).

#### 3.1.2. Public Web Application (`apps/web`) — Port 3001

- **Name:** SD Al-Birru Public Web Application (`@albirru/web`)
- **Description:** The primary public-facing portal for SD Al-Birru Tahfidzul Qur'an. Serves the high-performance institutional profile, statutory accreditation badges (NPSN `70010111` & BAN-S/M), school programs, news and gallery archives, and the online student registration (PPDB) form. Interacts directly with Cloudflare Turnstile for bot deterrence and Upstash Redis for submission throttling.
- **Technologies:** Next.js 16 (App Router, React Server Components), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Radix UI, Motion, Lucide React, React Hook Form, Zod, ZSA.
- **Deployment:** Vercel (Edge & Serverless Compute) mapped across canonical domains:
  - Production: `https://albirru.mafrilearth.com`
  - Staging: `https://staging.albirru.mafrilearth.com`
  - Development: `https://dev.albirru.mafrilearth.com`

#### 3.1.3. Cross-Platform API & Webhook Service (`apps/api`) — Port 3002

- **Name:** SD Al-Birru API Microservice (`@albirru/api`)
- **Description:** Dedicated edge API microservice handling system health monitoring (`/health`), public API routes, and incoming external statutory webhooks (Clerk identity events, Resend delivery status notifications).
- **Technologies:** Next.js 16 Route Handlers, TypeScript, Drizzle ORM, Zod, Svix.
- **Deployment:** Vercel Serverless Functions.

#### 3.1.4. React Email Templates & Preview Workshop (`apps/email`) — Port 3003

- **Name:** SD Al-Birru Transactional Email Studio (`@albirru/email`)
- **Description:** React-based email template development and preview workbench. Hosts standardized transactional email components (e.g., `AdmissionConfirmation.tsx`) rendered with `@react-email/components` and dispatched via the Resend API.
- **Technologies:** React Email (`@react-email/components`), Resend (`resend`), TypeScript, Tailwind CSS.
- **Deployment:** Vercel Serverless / Local Preview Studio.

#### 3.1.5. In-Tree Documentation Explorer (`apps/docs`) — Port 3004

- **Name:** SD Al-Birru In-Tree Documentation Portal (`@albirru/docs`)
- **Description:** Technical documentation website rendering all 11 statutory specifications, architecture decision records (ADRs), and operational runbooks directly from in-tree markdown sources.
- **Technologies:** Next.js 16 (App Router, RSC), TypeScript, Tailwind CSS v4, shadcn/ui.
- **Deployment:** Vercel Edge Serverless.

#### 3.1.6. Visual Database Editor (`apps/studio`) — Port 3005

- **Name:** SD Al-Birru Database Studio (`@albirru/studio`)
- **Description:** Local visual database administration console utilizing Drizzle Studio (`drizzle-kit studio`) to inspect tables, relations, indexes, and execute schema queries directly against Neon PostgreSQL.
- **Technologies:** Drizzle Studio (`drizzle-kit`), Drizzle ORM, TypeScript.
- **Deployment:** Local Developer Environment (`pnpm --filter @albirru/studio dev`).

#### 3.1.7. Frontend UI Component Workshop (`apps/storybook`) — Port 6006

- **Name:** SD Al-Birru Component Workbench (`@albirru/storybook`)
- **Description:** Isolated UI component workshop for developing, previewing, and testing design system primitives, widgets, and layout components in isolation before integration.
- **Technologies:** Storybook 10, Vite, React 19, TypeScript, Tailwind CSS v4, Radix UI.
- **Deployment:** Chromatic / Local Workbench.

### 3.2. Backend Services & Domain Modules

The backend follows a **Modern Modular Monolith** pattern where domain services and mutations execute as Next.js Server Actions ("use server") and isolated domain modules within `@albirru/app`, `@albirru/web`, and `@albirru/api`, backed by the shared `@albirru/database` package.

#### 3.2.1. Master Identity & RBAC Service (`src/modules/identity/`)

- **Name:** Master Identity & RBAC Provisioning Service
- **Description:** Central authority for authenticating civitas academica and provisioning structured user accounts across four statutory roles: Administrator, Instruktur/Guru, Wali Murid, and Siswa. Handles unique identity attributes (NIK, NISN, NIP), user profiles, and session security verification.
- **Technologies:** TypeScript, Clerk SDK (`@clerk/nextjs/server`), Drizzle ORM, UUIDv7 (`uuidv7`), Zod.
- **Deployment:** Vercel Serverless Functions.

#### 3.2.2. PPDB & Public Admission Ingress Service (`src/modules/admissions/`)

- **Name:** Admissions & Registration Ingress Service
- **Description:** Ingress service managing online student registrations. Validates Cloudflare Turnstile tokens, enforces IP-based rate limiting via Upstash Redis (5 submissions per 15 minutes), parses student candidate payloads with Zod, generates sequential tracking codes (`ADM-YYYYMMDD-XXXX`), and persists records with referential audit integrity.
- **Technologies:** ZSA (`zsa`, `zsa-react`), Zod, Upstash Redis (`@upstash/ratelimit`, `@upstash/redis`), Drizzle ORM.
- **Deployment:** Vercel Serverless Functions.

#### 3.2.3. Daily Attendance Tracking Service (`src/modules/attendance/`)

- **Name:** Attendance Tracking & Roster Verification Service
- **Description:** Manages daily classroom attendance sessions. Initializes baseline attendance rosters, records individual student attendance status (`Present`, `Sick`, `Excused`, `Absent`), calculates daily attendance statistics, and enforces post-finalization immutability locking.
- **Technologies:** TypeScript, Drizzle ORM, ZSA, Zod.
- **Deployment:** Vercel Serverless Functions.

#### 3.2.4. Academic Grading & Report Card Service (`src/modules/grading/`)

- **Name:** Academic Grading & Report Card Service
- **Description:** Executes deterministic weighted grading computations (100% decimal precision), manages formative and summative assessment components, aggregates semester evaluations, and freezes final report cards for guardian retrieval.
- **Technologies:** TypeScript, Drizzle ORM, ZSA, Zod.
- **Deployment:** Vercel Serverless Functions.

## 4. Data Stores

(List and describe the databases and other persistent storage solutions used.)

### 4.1. Primary Relational Database

- **Name:** Neon Serverless PostgreSQL
- **Type:** Serverless PostgreSQL 16+
- **Purpose:** Primary system of record for all business-critical transactional and relational entities. Enforces ACID transactional integrity, foreign key relational constraints with B-tree indexes, UUIDv7 primary keys, and statutory audit columns (`created_at`, `updated_at`, `created_by`, `is_active`).
- **Key Schemas/Collections:** `users`, `profiles`, `roles`, `user_roles`, `academic_years`, `classrooms`, `students`, `admission_applications`, `attendance_sessions`, `attendance_records`, `grade_components`, `student_grades`, `report_cards`.

### 4.2. Ingress Throttling & Rate Limiting Cache

- **Name:** Upstash Redis
- **Type:** Serverless Redis (REST API)
- **Purpose:** Low-latency in-memory data store utilized for sliding window rate limiting on public mutation endpoints (e.g., 5 submissions / 15 minutes on `/admission`) and temporary cache storage to prevent database denial-of-service.

### 4.3. Document Attachment Storage (Cold Archive)

- **Name:** Cloudflare R2
- **Type:** S3-Compatible Object Storage
- **Purpose:** Stores uploaded student admissions documents (Akta Kelahiran, Kartu Keluarga, pasfoto) and historical semester report card PDFs with zero egress data transfer fees.

## 5. External Integrations / APIs

(List any third-party services or external APIs the system interacts with.)

- **Clerk (`@clerk/nextjs`)**:
  - **Purpose:** Authentication, session token issuance, passwordless/OAuth login, and user identity management.
  - **Integration Method:** Official Next.js SDK (`@clerk/nextjs`), Server Components helper `auth()`, and Clerk Middleware.

- **Upstash Redis (`@upstash/ratelimit`, `@upstash/redis`)**:
  - **Purpose:** Rate limiting and DDoS protection on public submission routes.
  - **Integration Method:** Serverless REST API via `@upstash/ratelimit` and `@upstash/redis` SDKs.

- **Cloudflare Turnstile**:
  - **Purpose:** CAPTCHA-free bot deterrence and human verification for public admissions forms.
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
  - **Integration Method:** CLI integration and Vercel environment synchronization.

## 6. Deployment & Infrastructure

- **Cloud Provider:** Vercel (Edge & Serverless Compute) + Neon (Serverless Database) + Cloudflare (DNS, WAF, Object Storage)
- **Key Services Used:**
  - Vercel Serverless Functions & Edge Network CDN
  - Neon Serverless PostgreSQL with built-in Connection Pooling (Transaction Mode)
  - Cloudflare DNS, WAF, and Turnstile Bot Shield
  - Cloudflare R2 Object Storage
- **CI/CD Pipeline:** GitHub Actions + Vercel Git Integration:
  - Branching Governance: `dev` (Development), `staging` (Pre-production), `main` (Production)
  - Automated Quality Gates: Biome format/check, TypeScript `tsc --noEmit`, Vitest unit tests, Turborepo build verification
  - Automatic Vercel deployment upon merge with instant preview and zero-downtime atomic promotion
- **Monitoring & Logging:**
  - Sentry (`@sentry/nextjs`) for runtime exception capture
  - PostHog (`posthog-js`) for operational event tracking
  - Vercel Speed Insights (`@vercel/speed-insights`) and Analytics (`@vercel/analytics`) for Core Web Vitals
  - Slack Webhook notifications to `#albirru-project-stream`

## 7. Security Considerations

(Highlight any critical security aspects, authentication mechanisms, or data encryption practices.)

- **Authentication:** Managed by Clerk with secure HTTP-only session cookies, cryptographically signed JWT tokens, and automated session rotation.
- **Authorization:** Granular Role-Based Access Control (RBAC) supporting Administrator, Instruktur/Guru, Wali Murid, and Siswa. Enforced at both Next.js Server Action boundaries and Clerk Middleware.
- **Data Encryption:**
  - Data in Transit: Enforced TLS 1.3 across all client-to-server and server-to-database connections (`sslmode=require`).
  - Data at Rest: AES-256 encryption at rest on Neon PostgreSQL and Cloudflare R2 object storage.
- **Key Security Tools & Invariants:**
  - **Zero Physical Deletion:** Hard invariant prohibiting SQL `DELETE`. Records are deactivated logically via `is_active = false` to guarantee auditable statutory integrity.
  - **UUIDv7 Primary Keys:** All database tables enforce monotonically ordered UUIDv7 (`uuidv7()`) to eliminate enumeration attacks while maintaining optimal B-tree indexing.
  - **Strict Runtime Validation:** Every Server Action mutation parses inputs through Zod schemas before database interaction.
  - **Anti-Bot & Rate Limiting Guard:** Cloudflare Turnstile token validation and Upstash Redis rate limiting (5 submissions / 15 minutes) protect public forms against automated spam attacks.
  - **Zero Raw SQL Execution:** All queries are structured through Drizzle ORM type-safe abstractions to eliminate SQL injection vectors.

## 8. Development & Testing Environment

- **Local Setup Instructions:**
  1. Clone the repository: `git clone https://github.com/Mafrilearth/albirru-school-management-monorepo.git`
  2. Switch to the development branch: `git checkout dev`
  3. Install dependencies: `pnpm install`
  4. Prepare local environment variables: copy `.env.example` to `.env.local` and populate Neon, Clerk, and Upstash credentials
  5. Start development servers: `pnpm run dev` (spins up Turborepo pipelines across applications: `app`, `web`, `api`, `email`, `docs`, `studio`, `storybook`)
- **Testing Frameworks:**
  - Unit & Integration Testing: Vitest (`vitest`) with `@vitest/browser-playwright`
  - End-to-End Testing: Playwright (`playwright`)
  - UI Component Isolation & Documentation: Storybook (`storybook`) with Chromatic
- **Code Quality Tools:**
  - Linter & Formatter: Biome (`@biomejs/biome`)
  - Git Pre-commit Hooks: Husky (`husky`) + Lint-Staged (`lint-staged`)
  - Strict Static Type Checking: TypeScript 5 (`tsc --noEmit`)

## 9. Future Considerations / Roadmap

(Briefly note any known architectural debts, planned major changes, or significant future features that might impact the architecture.)

- **Offline-First PWA Synchronization:** Implement progressive web app service workers with background sync capabilities to allow teachers to record daily attendance in rural areas with unstable internet connectivity.
- **Statutory Dapodik / EMIS Integration:** Build automated synchronization adapters with the Indonesian Ministry of Education (Kemendikbudristek) Dapodik and Ministry of Religious Affairs (Kemenag) EMIS APIs.
- **Multi-Branch Multi-Tenant Isolation:** Extend current schema abstractions to support prospective regional branch campuses under Yayasan Pendidikan Al-Birru without database fragmentation.

## 10. Project Identification

- **Project Name:** SD Al-Birru School Information System (`albirru-sis-web`)
- **Repository URL:** `https://github.com/Mafrilearth/albirru-school-management-monorepo`
- **Primary Contact/Team:** SD Al-Birru Senior Software Engineering Team
- **Date of Last Update:** 2026-10-11

## 11. Glossary / Acronyms

(Define any project-specific terms or acronyms.)

- **NPSN:** Nomor Pokok Sekolah Nasional (Statutory National School Identification Number: `70010111`)
- **BAN-S/M:** Badan Akreditasi Nasional Sekolah/Madrasah (Official national accreditation board for primary and secondary schools)
- **PPDB:** Penerimaan Peserta Didik Baru (Indonesian statutory term for student admissions and enrollment)
- **RBAC:** Role-Based Access Control (Sistem kontrol akses berbasis peran)
- **RSC:** React Server Components (Komponen React sisi server bawaan Next.js App Router)
- **SIS:** School Information System (Sistem Informasi Sekolah terpadu)
- **UUIDv7:** Universally Unique Identifier Version 7 (Pengenal unik 128-bit terurut waktu)
- **ZSA:** Zero-overhead Server Actions Wrapper (Pustaka pembungkus Server Action dengan validasi Zod dan penanganan galat terstandar)
