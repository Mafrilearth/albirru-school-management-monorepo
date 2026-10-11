> **Document Purpose:** Chronological registry of strategic software architecture decisions, technical trade-off evaluations, platform rationale, and system evolution protocols.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Architecture Decision Records | Statutory specification title for architectural decisions |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Master repository governance dashboard |
| **Specification Version** | 1.0.0 | Updated security evaluation and cold archive baseline |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/09-architecture-decision-records.md` | File path within repository |
---
## 2. Architecture Decision Records Governance Framework
### 2.1 Standard Decision Criteria
Every architectural decision is evaluated strictly against four primary criteria:
- **Long-Term Maintainability:** Minimizing code maintenance overhead and preventing dependency fragmentation.
- **Zero Infrastructure Cost:** Maximizing cloud computing efficiency and managed quotas (*zero financial software expenditure*).
- **Distribution Simplicity:** Eliminating distributed orchestration complexity (*single deployable unit*).
- **Domain Isolation:** Preventing business logic leakage across internal monolith module boundaries.
### 2.2 Status Lifecycle Matrix
- **Proposed:** Active architectural evaluation and technical peer review stage.
- **Accepted:** Formally ratified as the system engineering baseline standard.
- **Superseded:** Replaced by a newer architectural decision record.
- **Deprecating:** Temporarily preserved for backward compatibility prior to total retirement.
---
## 3. Canonical Architecture Decision Records Index
| Decision Identifier | Architectural Title Context | Evaluation Status | Decision Date | Primary Architectural Domain |
|---|---|---|---|---|
| **ADR-001** | Modular Monolith Deployment Topology | Accepted | 2026-10-08 | System Top-Level Architecture |
| **ADR-002** | Next.js Server Actions Data Mutation | Accepted | 2026-10-08 | Presentation and Application Layer |
| **ADR-003** | Neon Serverless Relational Engine | Accepted | 2026-10-08 | Relational Persistence Layer |
| **ADR-004** | Drizzle ORM Type-Safe Query Interface | Accepted | 2026-10-08 | Data Access and Migration Layer |
| **ADR-005** | Headless shadcn/ui Component Primitives | Accepted | 2026-10-08 | User Interface Design System |
| **ADR-006** | Cloudflare Turnstile & Upstash Rate Limiting | Accepted | 2026-10-09 | Public Ingress and Security Layer |
| **ADR-007** | Cloudflare R2 S3-Compatible Cold Archive | Accepted | 2026-10-09 | Distributed File Storage Layer |
| **ADR-008** | Turborepo Multi-Package Monorepo (next-forge Alignment) | Accepted | 2026-10-11 | System Workspace Topology |
---
## 4. Comprehensive Architecture Decision Records
### 4.1 Architecture Decision Record 001: Modular Monolith Deployment Topology
- **Status:** Accepted (2026-10-08)
- **Context:** Premature adoption of distributed microservice architectures introduces computational overhead, distributed transaction complexities, and costly infrastructure leases.
- **Decision:** Adopt a Modern Modular Monolith pattern packaged as a single deployable release unit running on Vercel. Module boundaries are strictly enforced via in-tree directory isolation.
- **Consequences:** Zero latency across internal domains, full ACID transactional guarantees, requiring disciplined enforcement of cross-module import boundaries.
### 4.2 Architecture Decision Record 002: Next.js Server Actions Data Mutation
- **Status:** Accepted (2026-10-08)
- **Context:** Maintaining a detached REST API layer duplicates TypeScript type schemas and increases network error handling boilerplate.
- **Decision:** Standardize authenticated transactional mutations using Next.js Server Actions.
- **Consequences:** Guarantees end-to-end type safety, eliminates serialization boilerplate, while coupling mutation mechanisms to the Next.js ecosystem.
### 4.3 Architecture Decision Record 003: Neon Serverless Relational Engine
- **Status:** Accepted (2026-10-08)
- **Context:** Requires pure serverless PostgreSQL relational engine with physical foreign key integrity and auto-scaling without physical server maintenance costs.
- **Decision:** Select Neon Serverless PostgreSQL with the postgres driver (porsager/postgres) and built-in connection pooling.
- **Consequences:** Serverless PostgreSQL 16+ engine with ultra-low latency, efficient auto-suspend, and full Drizzle ORM compatibility.
### 4.4 Architecture Decision Record 004: Drizzle ORM Type-Safe Query Interface
- **Status:** Accepted (2026-10-08)
- **Context:** Heavyweight traditional ORMs incur significant runtime overhead and serverless cold-start penalties.
- **Decision:** Adopt Drizzle ORM as the declarative SQL query builder and schema migration framework.
- **Consequences:** Zero runtime overhead and transparent SQL migrations, requiring strong command of relational SQL query construction.
### 4.5 Architecture Decision Record 005: Headless shadcn/ui Component Primitives
- **Status:** Accepted (2026-10-08)
- **Context:** Proprietary pre-styled UI libraries bundle bloated runtime CSS and constrain visual customizations.
- **Decision:** Utilize shadcn/ui components based on Radix UI and Tailwind CSS copied directly in-tree into the repository.
- **Consequences:** Full source code ownership and built-in WCAG 2.1 AA compliance, with component updates managed directly by the engineering team.
### 4.6 Architecture Decision Record 006: Cloudflare Turnstile & Upstash Rate Limiting
- **Status:** Accepted (2026-10-09)
- **Context:** Public admissions intake forms (`/admissions`) are susceptible to automated bot floods and denial-of-service spam that exhaust database connections and serverless execution quotas.
- **Decision:** Integrate Cloudflare Turnstile on client forms and Upstash Redis for rate limiting enforcement at 5 submissions per 15 minutes per client IP.
- **Consequences:**
	- **Positive:** Frictionless bot verification without frustrating visual captchas for applicants; protects database memory from request spikes.
	- **Negative:** Introduces external environment variable dependencies for Turnstile token verification and Redis REST credentials.
### 4.7 Architecture Decision Record 007: Cloudflare R2 S3-Compatible Cold Archive
- **Status:** Accepted (2026-10-09)
- **Context:** Student verification attachments (Birth Certificates, Family Cards) can rapidly exhaust primary document storage quotas if retained indefinitely.
- **Decision:** Adopt Cloudflare R2 as the cold storage archive for historical student documents using AWS S3-compatible APIs.
- **Consequences:**
	- **Positive:** Zero egress data transfer fees and elastic, indefinitely scalable archival document storage.
	- **Negative:** Requires an independent S3 client adapter in `src/lib/` to handle historical archive data transfers.
### 4.8 Architecture Decision Record 008: Turborepo Multi-Package Monorepo Topology (next-forge Alignment)
- **Status:** Accepted (2026-10-11)
- **Context:** As the SIS platform expands with public marketing websites (`apps/web`), authenticated administrative portals (`apps/app`), API/webhook microservices (`apps/api`), transactional emails (`apps/email`), documentation portals (`apps/docs`), database studios (`apps/studio`), and component workshops (`apps/storybook`), managing all workloads in a single monolithic directory leads to dependency conflicts and bloated build times.
- **Decision:** Standardize the workspace into a Turborepo Multi-Package Monorepo following the **next-forge** enterprise architecture with 7 distinct applications in `apps/*` and 4 shared packages in `packages/*` (`database`, `design-system`, `eslint-config`, `typescript-config`).
- **Consequences:**
	- **Positive:** Strict dependency isolation, deterministic compilation caching via Turborepo, canonical local port assignments (3000-3005, 6006), and seamless feature expansion without cross-application regression risk.
	- **Negative:** Requires disciplined `pnpm-workspace.yaml` governance and synchronized cross-workspace dependency management.
---
## 5. Architectural Evolution and Modification Protocol
Any proposed feature or technological shift conflicting with the approved decisions in this registry must follow this governance protocol prior to code integration:
1. **Non-ADR Deviation Rejection:** Any pull request introducing architectural deviations without an accompanying *Accepted* ADR will be automatically blocked by CI quality gates.
2. **Replacement Proposal Submission:** Author a new *Proposed* ADR detailing context, trade-off evaluations, and technical justification, explicitly referencing the superseded ADR identifier.
3. **Ratification and Transition (Supersession):** Upon formal review and approval, transition the preceding ADR status to *Superseded* with bidirectional links to the newly ratified standard.