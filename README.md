# SD Al-Birru School Information System (`albirru-sis-web`)

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45+-C5F74F?style=flat-square&logo=drizzle)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon-Serverless_PostgreSQL-00E599?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Production_Edge-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **Official Institutional Governance Platform of SD Al-Birru Tahfidzul Qur'an**  
> Built with a **Modern Modular Monolith** architecture, **Fine-Line Boxy Brutalism** design system, end-to-end TypeScript static type enforcement, and high-performance serverless cloud infrastructure.

---

## 🌐 Live Environments & Deployments

The system deploys continuously via the Vercel Edge Network pipeline across dedicated environments:

| Environment | Git Target Branch | Canonical URL | Infrastructure Status |
| :--- | :--- | :--- | :--- |
| **Production** | `main` | [albirru.mafrilearth.com](https://albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |
| **Staging** | `staging` | [staging.albirru.mafrilearth.com](https://staging.albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |
| **Development** | `dev` | [dev.albirru.mafrilearth.com](https://dev.albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |

---

## 🏛️ Institutional Identity & Statutory Credentials

- **Institution Name:** SD Al-Birru Tahfidzul Qur'an
- **National School Identification Number (NPSN):** `70010111`
- **Accreditation Authority:** National Accreditation Board (BAN-S/M)
- **Governing Foundation:** Yayasan Pendidikan Al-Birru
- **Medium of Instruction:** Indonesian & Formal English Immersion

---

## 📦 Core Domain Modules

Business logic is strictly modularized under `src/modules/{domain}/` with enforced public service boundaries:

1. **Master Identity & RBAC Provisioning (`src/modules/identity/`)**  
   Centralized civitas accounts (Administrator, Instructor/Teacher, Guardian, Student) backed by UUIDv7 keys and unique identity validation.
2. **Online Admissions / PPDB (`src/modules/admissions/`)**  
   Public registration portal shielded by Cloudflare Turnstile (bot deterrence) and Upstash Redis rate limiting (5 submissions / 15 minutes).
3. **Daily Attendance Tracking (`src/modules/attendance/`)**  
   Sequential cohort attendance records (Present, Sick, Excused, Absent) with post-verification immutability locking.
4. **Academic Grading & Report Cards (`src/modules/grading/`)**  
   Deterministic decimal weighted calculation (100% precision) and semester report card publication freezing.
5. **Guardian Self-Service Portal (`src/modules/guardian/`)**  
   Isolated access to daily attendance records, academic progress analytics, and downloadable digital report cards.

---

## 📚 In-Tree Statutory Specifications (Single Source of Truth)

The repository maintains authoritative in-tree specifications under the `/docs/` directory:

| Specification Document | Scope & Responsibility | Lifecycle State |
| :--- | :--- | :--- |
| **[01-product-requirements-specification.md](./docs/01-product-requirements-specification.md)** | Product scope, RBAC permission matrix, MVP modules, and latency budgets. | Approved |
| **[02-software-architecture-and-technical-design.md](./docs/02-software-architecture-and-technical-design.md)** | Modular Monolith architecture, technology stack, and Server Action bounds. | Approved |
| **[03-relational-database-specification.md](./docs/03-relational-database-specification.md)** | Drizzle ORM DDL schemas, UUIDv7 primary keys, foreign key indexes, and audit invariants. | Approved |
| **[04-application-route-and-mutation-contract.md](./docs/04-application-route-and-mutation-contract.md)** | Standard `ActionResponse` envelope, Zod validation schemas, and Upstash limits. | Approved |
| **[05-visual-design-system-specification.md](./docs/05-visual-design-system-specification.md)** | 8px spatial scale, Major Third typography ratio (1.250), and WCAG semantic tokens. | Approved |
| **[06-application-layout-and-navigation-architecture.md](./docs/06-application-layout-and-navigation-architecture.md)** | Three viewport shells (Public, Auth, Portal) and layout navigation architecture. | Approved |
| **[07-user-interface-component-anatomy-specification.md](./docs/07-user-interface-component-anatomy-specification.md)** | UI component anatomy, statutory microcopy, and interactive state machines. | Approved |
| **[08-landing-page-view-architecture.md](./docs/08-landing-page-view-architecture.md)** | 6-section landing page deconstruction and NPSN/BAN-S/M legal microcopy. | Approved |
| **[09-architecture-decision-records.md](./docs/09-architecture-decision-records.md)** | Chronological Architecture Decision Records (ADR-001 through ADR-008). | Approved |
| **[10-quality-assurance-and-verification-plan.md](./docs/10-quality-assurance-and-verification-plan.md)** | Testing pyramid, boundary test scenarios, and automated CI quality gates. | Approved |
| **[11-operational-runbook-and-incident-procedures.md](./docs/11-operational-runbook-and-incident-procedures.md)** | Git branching governance, disaster recovery runbooks, and agent constitution. | Approved |

---

## 🛠️ Technology Stack & Monorepo Architecture

The repository is structured as a **Turborepo Multi-Package Monorepo** (adhering to the enterprise **next-forge** pattern) across 7 applications and 4 shared packages:

### Applications (`apps/*`)
- **`apps/app` (`@albirru/app`):** Authenticated internal School Information System (SIS) for administrative workflows, Master Identity, sequential attendance, and grade computations (Port 3000).
- **`apps/web` (`@albirru/web`):** Public-facing marketing website, accredited school profile, admissions portal with Turnstile/Upstash protection, news, and gallery (Port 3001).
- **`apps/api` (`@albirru/api`):** Cross-platform edge API microservice, health check endpoints, and Clerk/Resend webhook ingress (Port 3002).
- **`apps/email` (`@albirru/email`):** Transactional email development and preview studio powered by React Email and Resend SDK (Port 3003).
- **`apps/docs` (`@albirru/docs`):** In-tree technical documentation explorer rendering all 11 statutory specifications and ADRs (Port 3004).
- **`apps/studio` (`@albirru/studio`):** Visual database editor powered by Drizzle Studio (`drizzle-kit studio`) connected to Neon PostgreSQL (Port 3005).
- **`apps/storybook` (`@albirru/storybook`):** Isolated frontend UI component workshop and visual regression test bench (Port 6006).

### Shared Packages (`packages/*`)
- **`packages/database` (`@albirru/database`):** Central database package containing Drizzle ORM DDL schemas, managed static SQL migrations, and connection pooling.
- **`packages/design-system` (`@albirru/design-system`):** Standardized design system library (Radix UI primitives, Fine-Line Boxy Brutalism tokens, Tailwind CSS utilities, and ThemeProvider).
- **`packages/eslint-config` (`@albirru/eslint-config`):** Centralized ESLint configuration (`base.js` and `nextjs.js`).
- **`packages/typescript-config` (`@albirru/typescript-config`):** Modular TypeScript compiler configurations (`base.json`, `nextjs.json`, `react-library.json`).

### Curated Zero-Redundancy Technology Stack

| Layer / Purpose | Selected Technology |
| :--- | :--- |
| **Programming Language** | TypeScript 5 (Strict Mode) |
| **Package Manager** | [pnpm (Workspaces)](https://pnpm.io/) |
| **Monorepo Engine** | [Turborepo](https://turbo.build/repo) |
| **Primary Framework** | [Next.js 16](https://nextjs.org/) (App Router, RSC) |
| **Core UI Library** | React 19 + React DOM |
| **Hosting & Serverless Platform** | [Vercel](https://vercel.com/) |
| **DNS & Network Shield** | Cloudflare |
| **Relational Database** | Neon (Serverless PostgreSQL) |
| **Database Driver** | `postgres` (porsager/postgres) |
| **ORM & Migrations** | Drizzle ORM + Drizzle Kit |
| **Authentication & Accounts** | Clerk (`@clerk/nextjs`) |
| **Cache & Rate Limiting** | Upstash (`@upstash/ratelimit`, `@upstash/redis`) |
| **Server Actions Wrapper** | ZSA (`zsa`, `zsa-react`) |
| **Schema Validation** | Zod (`zod`) |
| **Form Controller** | React Hook Form + `@hookform/resolvers` |
| **CSS Framework** | Tailwind CSS v4 |
| **Headless UI Primitives** | Radix UI |
| **Component System** | shadcn/ui |
| **Class Merging Utility** | `clsx` + `tailwind-merge` |
| **Variant Authority** | `class-variance-authority` |
| **Animation Engine** | Motion (`motion`) |
| **Iconography** | Lucide React (`lucide-react`) |
| **Layout Panels** | `react-resizable-panels` |
| **Carousel Component** | Embla Carousel (`embla-carousel-react`) |
| **Specialized Input** | `input-otp` |
| **Date Picker** | `react-day-picker` |
| **Command Palette** | cmdk (`cmdk`) |
| **Charts & Visualization** | Recharts (`recharts`) |
| **Dark/Light Theme** | `next-themes` |
| **In-Memory Search** | Orama (`@orama/orama`) |
| **Unique Identifier Generator** | UUIDv7 (`uuidv7`) |
| **Date Manipulation** | date-fns (`date-fns`) |
| **Email Delivery Service** | Resend (`resend`) |
| **Email Design Components** | React Email (`@react-email/components`) |
| **Crash & Error Monitoring** | Sentry (`@sentry/nextjs`) |
| **Product Analytics & Flags** | PostHog (`posthog-js`) |
| **Web Vitals & Performance** | `@vercel/speed-insights` + `@vercel/analytics` |
| **Secrets Management** | Doppler |
| **Linter & Formatter** | Biome (`@biomejs/biome`) |
| **Git Pre-commit Automation** | Husky + Lint-Staged |
| **Unit & Integration Testing** | Vitest (`vitest`) |
| **End-to-End Testing** | Playwright (`playwright`) |
| **UI Workshop** | Storybook (`storybook`) |
| **Visual Regression Platform** | Chromatic |
| **Version Control & CI/CD** | GitHub + GitHub Actions |

---

## 🚀 Getting Started

### 1. System Prerequisites
- **Node.js:** `>= 20.18.0` (Recommended: `v22.x LTS`)
- **Package Manager:** `pnpm` version `12.x`
- **PostgreSQL Database:** Active Neon Serverless PostgreSQL instance

### 2. Repository Setup & Dependencies
```bash
# Clone the repository
git clone https://github.com/Mafrilearth/albirru-school-management-monorepo.git
cd albirru-school-management-monorepo

# Switch to the development branch
git checkout dev

# Install workspace dependencies via pnpm
pnpm install
```

### 3. Environment Variables Configuration
Copy the configuration template and fill in local credentials:
```bash
cp .env.example .env.local
```

Ensure the key variables are provided in `.env.local`:
```ini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://neondb_owner:<password>@ep-...neon.tech/neondb?sslmode=require
```

### 4. Monorepo & Database Operational Commands
```bash
# Start all development servers (Next.js via Turborepo & pnpm)
pnpm run dev

# Run full production build across all workspaces
pnpm run build

# Run Biome linter and format verification
pnpm run check
pnpm run format

# Run TypeScript static type checking across all workspaces
pnpm run check-types

# Run automated unit and integration tests (Vitest)
pnpm run test

# Generate Drizzle SQL migration files
pnpm run db:generate

# Launch Drizzle Studio for visual database inspection
pnpm run db:studio
```
Open [http://localhost:3000](http://localhost:3000) for the internal app or [http://localhost:3001](http://localhost:3001) for the public marketing site.

---

## 🌿 Git Branching Governance

The repository strictly enforces a **Trunk-Based Development** model with automated CI quality gates:

### 1. Permanent Branch Taxonomy
- `main`: Official Production environment (`albirru.mafrilearth.com`).
- `staging`: Pre-production Staging environment (`staging.albirru.mafrilearth.com`).
- `dev`: Internal Development and integration environment (`dev.albirru.mafrilearth.com`).
- `dr`, `uat`, `sandbox`: Disaster recovery, user acceptance testing, and third-party integrations.

### 2. Ephemeral Branch Naming Convention
All ephemeral branches must branch off `dev` using lowercase kebab-case:
```
feat/<scope>/<ticket-id>-<description>     # New domain features
fix/<scope>/<ticket-id>-<description>      # Bug fixes
docs/<ticket-id>-<description>             # Documentation updates
hotfix/<ticket-id>-<description>           # Urgent production fixes (branched off main)
```

### 3. Contributor Workflow Protocol
```bash
# 1. Synchronize upstream
git checkout dev && git pull --ff-only origin dev

# 2. Create ephemeral feature branch
git checkout -b feat/grading/DEV-201-report-card dev

# 3. Record atomic commit (Conventional Commits 1.0.0)
git commit -m "feat(grading): implement report card calculation formula"

# 4. Rebase against latest origin/dev
git fetch origin && git rebase origin/dev

# 5. Push to remote repository
git push origin feat/grading/DEV-201-report-card

# 6. Open Pull Request to dev (Integration: Squash and Merge)
```

---

## 🧪 Quality Gates

Before merging any change, the following quality gates must pass with zero exceptions:

```bash
# TypeScript static type check (0 errors required)
pnpm run check-types

# Biome linter and code formatting check
pnpm run check

# Automated test suite execution
pnpm run test
```

- **Unit & Integration Tests:** 100% Pass
- **Test Coverage:** Minimum threshold of 80%
- **Code Review:** At least 1 approved review
- **Integration Strategy:** Squash and Merge

---

## 🤝 Contribution & Coding Standards

We welcome contributions and architectural enhancements. Please consult [AGENTS.md](./AGENTS.md) and [02-software-architecture-and-technical-design.md](./docs/02-software-architecture-and-technical-design.md) for architectural invariants (UUIDv7 primary keys, physical SQL DELETE prohibition, `ActionResponse` server action envelopes, and WCAG 2.1 AA compliance).

---

## 📜 License & Copyright

Distributed under the official [MIT License](https://opensource.org/licenses/MIT).  
Copyright © 2026 **SD Al-Birru Tahfidzul Qur'an** & **Yayasan Pendidikan Al-Birru**. All rights reserved.
