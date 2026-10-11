> **Document Purpose:** Modular monolith architecture specification, internal module decoupling boundaries, comprehensive production technology stack, repository directory layout, and transactional execution protocols.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Software Architecture and Technical Design | Statutory technical architecture specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Full production technology stack revision |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/02-software-architecture-and-technical-design.md` | File path within the repository |
---
## 2. Architectural Pattern and Monolith Boundary Decoupling
### 2.1 Structural Topology
The system is architected as a **Modern Modular Monolith** packaged into a single deployable release unit. Domain isolation is strictly enforced via internal module directory boundaries, segregated relational schemas, and transaction context isolation to prevent cross-domain business logic leakage.
### 2.2 Monolith Layer Decoupling Matrix
| Architectural Layer | Scope and Boundary Responsibility | Permitted Interaction Direction |
|---|---|---|
| **Presentation and Route Layer** | Server Components interfaces, client form hydration, and route validation | Calls directly and exclusively into Domain Service Layer |
| **Domain Service Layer** | Business rule encapsulation, deterministic calculations, and state mutation workflows | Dispatches data mutation operations to Data Access Layer |
| **Data Access Layer** | Relational transactions, schema mapping, referential integrity guards, and RLS | Isolated database interactions with no upward layer dependencies |
---
## 3. Production Technology Stack
| Layer Classification | Technology Platform | Specification Standard | Technical Scope | Operational Rationale |
|---|---|---|---|---|
| **Server Runtime** | Node.js | Version 22.x LTS | Server execution environment & build pipeline | Long-term operational stability and predictable I/O latency |
| **Language System** | TypeScript | Version 5.7+ | Static compile-time type verification | Eliminates undefined runtime exceptions across domain boundaries |
| **Application Framework** | Next.js (App Router) | Version 16.x | Server Components, Server Actions, Route Handlers | Modern monolith architecture without separate REST gateway overhead |
| **Styling Engine** | Tailwind CSS | Version 4.x | Utility-first responsive visual design | High-performance CSS compilation without client JS runtime bloat |
| **Component Primitives** | shadcn/ui (Radix UI) | Current Stable | Accessible dialogs, sheets, dropdowns, and menu primitives | Headless in-tree primitives compliant with W3C WCAG 2.1 AA |
| **Iconography Engine** | Lucide React | Version 1.x | Navigation icons, status chips, and action triggers | Lightweight SVG iconography with complete tree-shaking support |
| **High-Density Data Grid** | TanStack Table | Version 8.x | Table sorting, cohort filtering, and data pagination | Tabular state management without triggering parent canvas re-renders |
| **Client Form Manager** | React Hook Form | Version 7.x | Uncontrolled inputs form lifecycle management | High memory efficiency during bulk grading and attendance inputs |
| **Schema Validation** | Zod | Version 3.x | Client forms and Server Action boundaries validation | Bidirectional static type inference from runtime schemas |
| **Relational Database** | Neon (Serverless PostgreSQL) | PostgreSQL 16+ | Relational persistence, foreign keys, and ACID integrity | ACID transaction integrity with managed serverless backups |
| **Connection Pooling** | Neon Connection Pooler | Transaction Mode | Serverless database connection queue management | Prevents connection slot exhaustion during concurrent attendance entries |
| **Database ORM** | Drizzle ORM | Version 0.45+ (`drizzle-kit 0.31+`) | Type-safe query builder and declarative SQL migrations | Zero runtime overhead without serverless cold start penalties |
| **Session Authentication** | Clerk (`@clerk/nextjs`) | Managed Auth Engine | Secure cookie sessions and RBAC claim integration | Unified secure identity and session governance |
| **Cold Document Archive** | Cloudflare R2 | S3-Compatible API | Historical admissions attachment file archiving | Distributed object storage with zero egress data transfer fees |
| **Ingress Rate Limiter** | Upstash Redis | REST Redis API | Request throttling for public `/admission` forms | Protects database memory from automated spam submissions |
| **Bot Protection Shield** | Cloudflare Turnstile | Managed Challenge API | Human user verification on admissions forms | Privacy-preserving modern CAPTCHA alternative |
| **Application Cloud Host** | Vercel Platform | Production Edge Serverless | Automated CI build pipeline, global CDN, and edge deployments | High availability without manual physical server maintenance |
| **Unit & Integration Runner** | Vitest | Vite-Native Runner | Grade calculations and database transaction test suites | Fast multi-threaded parallel execution without transpiler drag |
| **Browser Automation Engine** | Playwright | Headless Chromium & WebKit | Browser simulation tests for attendance & admissions workflows | Cross-platform automation with built-in auto-waiting mechanisms |
| **Version Control & CI** | GitHub Actions | Ubuntu Standard Runner | Source control, branch protections, and CI verification | Automated quality gate enforcement prior to releases |
| **Operational Telemetry** | Slack Webhook | Webhook API Specification | Production release logs and emergency incident alerts | Centralized automated telemetry to `#albirru-project-stream` |
---
## 4. Subsystem Domain Architecture and Internal Module Boundaries
| Subsystem Domain | Scope Responsibility | Internal Namespace | Inbound Dependencies | Outbound Exposure |
|---|---|---|---|---|
| **Daily Attendance Tracking** | Cohort attendance sessions, daily tracking, and summaries | `attendance` | Cohorts and student profiles from `identity` | Daily attendance summaries to `guardian` |
| **Grading and Academic Reporting** | Assessment weight config, score entry, and report card locking | `grading` | Active student records from `identity` | Certified report card artifacts to `guardian` |
| **Guardian Portal** | Student profile viewer, attendance logs, and report card downloads | `guardian` | Attendance logs from `attendance` & report cards from `grading` | Guardian-facing user interface (read-only) |
| **Roster and Identity Allocation** | Member profiles, master directory, cohort allocations, and terms | `identity` | Verified prospective student data from `admissions` | Profile data references to `attendance` and `grading` |
| **Public Information and Admission** | Institutional public homepage and new student application intake | `admissions` | No inbound domain dependencies | Verified applicant entities to `identity` |
---
## 5. Canonical Directory Structure and Import Rules
### 5.1 Repository File Tree Layout
```plain text
albirru-sis-web/
├── .github/workflows/ci.yml               # Automated CI test and build pipeline
├── apps/                                  # 7 specialized applications (next-forge pattern)
│   ├── app/                               # Authenticated internal SIS portal - Port 3000 (@albirru/app)
│   │   ├── src/app/                       # Portal routes: /admin, /instructor, /guardian
│   │   └── src/modules/                   # Isolated domain logic: attendance, grading, guardian, identity
│   ├── web/                               # Public website & admissions forms - Port 3001 (@albirru/web)
│   ├── api/                               # Microservice API & webhook ingress - Port 3002 (@albirru/api)
│   ├── email/                             # React Email template preview studio - Port 3003 (@albirru/email)
│   ├── docs/                              # In-tree technical documentation viewer - Port 3004 (@albirru/docs)
│   ├── studio/                            # Visual database manager Drizzle Studio - Port 3005 (@albirru/studio)
│   └── storybook/                         # Frontend UI component isolation workbench - Port 6006 (@albirru/storybook)
├── packages/                              # 4 shared library packages
│   ├── database/                          # Drizzle ORM DDL schemas, postgres driver, UUIDv7 (@albirru/database)
│   ├── design-system/                     # shadcn/ui & Radix UI design primitives (@albirru/design-system)
│   ├── eslint-config/                     # Centralized monorepo linting rules (@albirru/eslint-config)
│   └── typescript-config/                 # Modular TypeScript configurations (@albirru/typescript-config)
├── docs/                                  # 11 statutory in-tree engineering specifications
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
├── .env.example                           # Canonical environment variable template
├── ARCHITECTURE.md                        # Comprehensive monorepo architecture reference
├── README.md                              # Governance dashboard and monorepo manual
├── biome.json                             # Biome linter & formatter configuration
├── pnpm-workspace.yaml                    # pnpm workspaces definition
└── turbo.json                             # Turborepo build pipeline declaration
```
### 5.2 Module Interaction Guardrails
- **Cross-Import Isolation:** Modules in `apps/app/src/modules/attendance/` are strictly prohibited from importing internal implementation files in `apps/app/src/modules/grading/`. Cross-domain integration must strictly traverse public interface contracts exported via each domain's `service.ts`.
- **Shared Package Consumption:** Monorepo applications consume the database via `@albirru/database` and shared UI components via `@albirru/design-system`.
- **Server Actions Gate Validation:** All `actions.ts` files must validate input payloads using Zod schemas before delegating to domain logic in `service.ts` and returning standardized `ActionResponse` envelopes.
## 6. Access Control and Technical Execution Constraints
### 6.1 Role-Based Boundary Enforcement
| **Canonical System Role** | **Session Scope** | **Database Access Policy** | **Permitted Route Scope** |
|---|---|---|---|
| **System Administrator** | Full institutional authority | Full read and write access across all data schemas | Unrestricted internal routes (`/portal/admin/*`) |
| **Instructor** | Assigned cohorts and subject courses | Write access scoped strictly to assigned cohort rows | Instructor routes (`/portal/instructor/*`) |
| **Guardian** | Verified dependent relationship ties | Read access strictly scoped to connected dependents | Guardian self-service routes (`/portal/guardian/*`) |
| **Public Guest** | Unauthenticated anonymous session | Read access to public entities; write access to admissions | Public routes (`/`, `/admission/*`) |
### 6.2 Performance and Latency Budgets
- **Edge Static Delivery:** Public static routes served under the 200 millisecond threshold.
- **Server Action Mutation:** Transactional data mutations (attendance lock, score commit) complete under 800 milliseconds.
- **Interactive Data Grid Hydration:** Tabular registers (attendance, gradebooks) hydrate fully interactive under 1000 milliseconds on standard networks.
### 6.3 Transactional and Retention Integrity
- **Atomic Persistence:** Daily attendance locking and gradebook finalization execute within single atomic transaction blocks.
- **Zero Hard Delete:** Physical row deletion is strictly forbidden for user records, attendance, and grades; deactivations utilize logical boolean flags.
- **Audit Columns:** All table entities must maintain audit metadata: `created_at`, `updated_at`, and the performing actor's user identifier.