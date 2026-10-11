> **Document Purpose:** Platform operational governance specification, managed cloud service topology, continuous delivery workflows, database schema migration protocols, emergency incident mitigation procedures, autonomous coding agent orchestration guidelines, complimentary tier quota mitigation, and platform contingencies.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Operational Runbook and Incident Procedures | Statutory specification title for system operations |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Master repository governance dashboard |
| **Specification Version** | 1.2.0 | Production operational procedures and extended branch governance baseline |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/11-operational-runbook-and-incident-procedures.md` | File path within repository |
---
## 2. Platform Operational Topology
The system infrastructure operates entirely on managed serverless cloud services designed for high availability, zero physical server maintenance, and execution resilience within institutional complimentary quotas:
| Operational Tier Classification | Dedicated Management Platform | Operational Responsibility Scope | Management Access Location |
|---|---|---|---|
| **Application Hosting Tier** | Vercel Platform | Build compilation pipelines, edge routing, SSL termination, and runtime telemetry | Project Vercel Dashboard |
| **Relational Database Tier** | Neon Serverless PostgreSQL | PostgreSQL 16+ engine, connection pooling, and managed snapshots | Project Neon Console |
| **Source and Continuous Delivery** | GitHub Actions | Source versioning, branch protection, and automated verification gates | Project GitHub Repository |
| **Operational Telemetry** | Slack Integration | Production release notices, build break alerts, and system telemetry | `#albirru-project-stream` Channel |
---
## 3. Branch Governance and Continuous Delivery
This section establishes the official Git branch governance architecture across infrastructure environments, monorepo packages, team initiatives, automated third-party integrations, incident mitigation, and release governance anchored in Trunk-Based Development, GitLab Flow, GitHub Flow, GitVersion, Semantic Versioning 2.0.0, and Conventional Commits 1.0.0.

### 3.1 Repository Branch Taxonomy and Classification Matrix
This taxonomy maps all repository branch categories, originating base branches, integration targets, and branch retention characteristics:

| Branch Category | Identification Key | Branch Origin | Final Integration Target | Retention Characteristic |
| --- | --- | --- | --- | --- |
| Production | `main` | Repository initialization | None | Permanent |
| Disaster Recovery | `dr` | `main` | `main` | Permanent |
| User Acceptance Testing | `uat` | `staging` | `main` | Permanent |
| Pre-Production / Staging | `staging` | `main` | `main` | Permanent |
| Partner Sandbox | `sandbox` | `staging` | None | Permanent |
| Development Integration | `dev` | `staging` | `staging` | Permanent |
| Standard Feature | `feat/` | `dev` | `dev` | Ephemeral |
| Cross-Team Initiative | `epic/` | `dev` | `dev` | Ephemeral |
| Epic Subfeature | `subfeat/` | Associated `epic/` branch | Associated `epic/` branch | Ephemeral |
| Monorepo Package Feature | `feat/<scope>/` | `dev` | `dev` | Ephemeral |
| Feature Flag Experiment | `experiment/` | `dev` | `dev` | Ephemeral |
| Standard Defect Fix | `fix/` | `dev` | `dev` | Ephemeral |
| Monorepo Defect Fix | `fix/<scope>/` | `dev` | `dev` | Ephemeral |
| Critical Production Hotfix | `hotfix/` | `main` | `main`, `staging`, and `dev` | Ephemeral |
| Commit Regression Revert | `revert/` | Branch where regression occurred | Recovery target branch | Ephemeral |
| Scheduled Distribution Release | `release/` | `dev` | `staging` and `main` | Ephemeral |
| Performance Optimization | `perf/` | `dev` | `dev` | Ephemeral |
| Codebase Restructuring | `refactor/` | `dev` | `dev` | Ephemeral |
| Feasibility Spike Research | `spike/` | `dev` | None | Ephemeral |
| Developer Local Draft | `users/<initials>/` | `dev` | `dev` | Ephemeral |
| Documentation Modification | `docs/` | `dev` | `dev` | Ephemeral |
| Test Suite Module | `test/` | `dev` | `dev` | Ephemeral |
| Project Dependency Chore | `chore/` | `dev` | `dev` | Ephemeral |
| CI Pipeline Workflow | `ci/` | `dev` | `dev` | Ephemeral |
| Automated Bot Dependency Update | `deps/` | `dev` | `dev` | Ephemeral |
| AI-Assisted Modification | `ai/` | `dev` | `dev` | Ephemeral |
| Long-Term Support Maintenance | `support/` | Specific release tag | Associated release branch | Permanent |
| External Fork Contribution | `external/` | `upstream/main` | `upstream/dev` | Ephemeral |

**Category Separation Principles:**
1. Permanent branches correspond to physical infrastructure allocations and environment promotion gates.
2. Ephemeral branches isolate units of source modification that must be deleted post-integration.

---

### 3.2 Branch Naming Syntax Formulas
This syntax table specifies the exact naming notations for all software engineering scenarios:

| Engineering Scenario | Standard Syntax Formula | Real-World Application Example |
| --- | --- | --- |
| Production Environment | `main` | `main` |
| Disaster Recovery Environment | `dr` | `dr` |
| User Acceptance Testing Environment | `uat` | `uat` |
| Pre-Production Staging Environment | `staging` | `staging` |
| Partner Integration Sandbox | `sandbox` | `sandbox` |
| Internal Development Integration | `dev` | `dev` |
| Single-Repo Feature | `feat/<ticket-id>-<description>` | `feat/DEV-101-auth-oauth2` |
| Cross-Team Initiative Feature | `epic/<ticket-id>-<description>` | `epic/DEV-200-banking-migration` |
| Epic Subfeature | `subfeat/<ticket-id>-<description>` | `subfeat/DEV-201-ledger-table` |
| Monorepo Package Feature | `feat/<scope>/<ticket-id>-<description>` | `feat/billing/DEV-301-invoice-pdf` |
| Feature Flag Experiment | `experiment/<ticket-id>-<description>` | `experiment/DEV-302-new-checkout-ab` |
| Single-Repo Defect Fix | `fix/<ticket-id>-<description>` | `fix/DEV-102-memory-leak` |
| Monorepo Package Defect Fix | `fix/<scope>/<ticket-id>-<description>` | `fix/auth/DEV-303-session-null` |
| Production Hotfix Incident | `hotfix/<ticket-id>-<description>` | `hotfix/INC-911-sqli-patch` |
| Commit Regression Revert | `revert/<ticket-id>-<description>` | `revert/DEV-103-rollback-migration` |
| Version Release Preparation | `release/v<major>.<minor>.<patch>` | `release/v2.4.0` |
| Code Performance Enhancement | `perf/<ticket-id>-<description>` | `perf/DEV-104-cache-redis` |
| Codebase Restructuring | `refactor/<ticket-id>-<description>` | `refactor/DEV-105-clean-handler` |
| Technical Spike Feasibility | `spike/<ticket-id>-<description>` | `spike/DEV-106-wasm-parser` |
| Developer Sandbox Isolation | `users/<initials>/<description>` | `users/budi/dark-mode-test` |
| Documentation File Updates | `docs/<ticket-id>-<description>` | `docs/DEV-107-swagger-spec` |
| Test Suite Implementation | `test/<ticket-id>-<description>` | `test/DEV-108-payment-e2e` |
| Dependency Maintenance Chore | `chore/<ticket-id>-<description>` | `chore/DEV-109-upgrade-node20` |
| Pipeline Configuration Tuning | `ci/<ticket-id>-<description>` | `ci/DEV-110-matrix-build` |
| Automated Bot Dependency Update | `deps/<pkg-name>-v<version>` | `deps/lodash-v4.17.21` |
| AI-Assisted Modification | `ai/<ticket-id>-<description>` | `ai/DEV-111-gen-unit-test` |
| Legacy Long-Term Support | `support/v<major>.<minor>.x` | `support/v1.2.x` |
| External Repository Fork | `external/<issue-id>-<description>` | `external/GH-504-cors-fix` |

1. **Variable Component Constraints:**
    - The `<ticket-id>` component uses official work-tracking issue identifiers.
    - The `<scope>` component corresponds to autonomous package directory names within monorepo structure.
    - The `<description>` component uses lowercase kebab-case formatting.
2. **Character Notation Restrictions:**
    - Uppercase characters, whitespace, underscores, and non-alphanumeric symbols are prohibited in branch descriptions.

---

### 3.3 Workflow Lifecycle Execution Protocol
This operational protocol outlines the sequential Git commands from creation through post-merge deletion:

| Operational Stage | Standard Git CLI Command | Validation Success Criteria |
| --- | --- | --- |
| Upstream Sync | `git checkout dev && git pull --ff-only origin dev` | Local copy is fully up to date |
| Work Branch Initiation | `git checkout -b <branch-name> dev` | Branch HEAD points to latest synced commit |
| Change Recording | `git commit -m "<type>(<scope>): <description>"` | Commit message adheres to Conventional Commits |
| Linear Reconciliation | `git fetch origin && git rebase origin/dev` | Linear commit history without merge bubbles |
| Remote Publication | `git push origin <branch-name>` | Branch is published on upstream remote |
| Post-Merge Deletion | `git branch -d <branch-name>` | Local branch reference cleanly purged |

1. **Sequential Operational Discipline:**
    - Initiating a working branch must always branch off a freshly synchronized base branch.
    - Resolving integration conflicts must be executed via rebase strategy prior to opening a Pull Request.

---

### 3.4 Integration Quality Gate Parameters
This parameters table specifies mandatory verification thresholds before code merges are authorized:

| Evaluation Parameter | Minimum Threshold | Enforcement Instrument |
| --- | --- | --- |
| Automated Unit & Integration Tests | 100% Pass Rate | Continuous Integration |
| Source Code Test Coverage | 80% Coverage | Code Coverage Analyzer |
| Human Peer Code Review | 1 Valid Approval | Pull Request Review Protection |
| Cryptographic Commit Integrity | Verified GPG Signature | Cryptographic Verification |
| Final Integration Strategy | Squash and merge | Branch Protection Rule |

1. **Mandatory Integration Rules:**
    - Code integration is authorized exclusively when all testing parameters pass.
    - Commit history on ephemeral branches must be squashed into a single atomic commit upon merging to target branches.

---

### 3.5 Environment Promotion and Continuous Delivery Flow
Direct commits to production (`main`) or protected integration branches (`staging`, `dev`) are strictly prohibited by repository protection rules. All changes progress through environment promotion gates:
1. **Ephemeral Branch Initiation:** Create an isolated feature/fix branch branched off synchronized `dev` (`git checkout -b <branch-name> dev`) using standard syntax.
2. **Local Pre-Verification:** Execute static TypeScript compilation (`tsc --noEmit`), ESLint audits, and local unit test suites prior to opening a pull request.
3. **Pull Request Submission to `dev`:** Open a pull request against `dev`. This triggers all GitHub Actions automated verification gates.
4. **Promotion to `staging` (Pre-Production):** Via stable `release/` branches, code integrates into `staging` for comprehensive integration testing and Vercel preview deployment inspections.
5. **User Acceptance Testing (`uat`):** A `uat` branch stemming from `staging` is utilized for operational acceptance testing by school administrators prior to production release authorization.
6. **Production Integration (`main`):** Once all quality gates pass, merge the pull request into `main` using *Squash and Merge*. Vercel edge networks immediately deploy latest assets to the official production URL (`sd-albirru.vercel.app`).
7. **Telemetry Verification:** Verify receipt of automated production release notices broadcast to `#albirru-project-stream`.
---
## 4. Database Migration and Schema Management Protocol
Relational database modifications must follow a backward-compatible progressive migration pattern to guarantee zero-downtime operation:
### 4.1 Zero-Downtime Schema Modification Procedure
- **Phase 1 (Additive Migration Execution):** Apply non-destructive schema changes (such as adding nullable columns or creating new independent tables) before deploying application code that consumes them.
- **Phase 2 (Application Code Deployment):** Deploy application updates writing to both legacy and updated schema structures in parallel when handling active record transitions.
- **Phase 3 (Subtractive Migration Cleanup):** Once the application stabilizes in production, execute cleanup migrations to retire deprecated columns or integrity constraints.
### 4.2 Automated Database Backup and Snapshot Schedule
- **Automated Daily Snapshots:** Daily database snapshots run automatically at midnight through Neon managed infrastructure.
- **Pre-Migration Manual Snapshots:** Prior to executing major structural migrations, create an on-demand manual snapshot via the Neon management console.
---
## 5. Emergency Incident Management and Disaster Recovery
### 5.1 Incident Severity Classification Framework
| Severity Level | Operational Impact Scope | Incident Response Target | Escalation Notification Protocol |
|---|---|---|---|
| **Severity 1 (Critical)** | Complete platform outage, attendance tracking blocked, or database connection severed | Under 30 minutes | Instant emergency alert to `#albirru-project-stream` |
| **Severity 2 (Major)** | Functional module degradation (such as grade calculations blocked) with workarounds available | Under 2 hours | Urgent operational ticket logged in Linear |
| **Severity 3 (Minor)** | Cosmetic visual defects, non-blocking form warnings, or microcopy anomalies | Under 24 hours | Standard task ticket logged in Linear within active sprint |
### 5.2 Application Instant Rollback Procedure
1. **Outage Confirmation:** Confirm system degradation via runtime error logs in Vercel console or incident reports in Slack.
2. **Stable Release Selection:** Inspect project deployment history in Vercel and identify the last verified stable deployment before the failure occurred.
3. **Instant Rollback Promotion:** Execute the instant rollback promotion action. Vercel edge networks immediately re-route global traffic to the stable release within seconds.
4. **Source Remediation:** Revert the breaking pull request on GitHub, investigate root causes locally, and track remedial tasks in Linear.
### 5.3 Database Disaster Recovery Procedure
1. **Backup Console Access:** Access the database snapshot directory within the Neon management console.
2. **Restore Point Selection:** Select the cleanest snapshot recorded prior to mutation anomalies or relational corruption.
3. **Restoration Execution:** Execute the managed point-in-time restore procedure to the primary database.
4. **Data Integrity Verification:** Conduct validation audits across civitas records, classroom cohort links, attendance sheets, and finalized report cards.
---
## 6. Autonomous Coding Agent and Environment Orchestration
All autonomous coding agents operating within this repository must adhere strictly to these operational constraints to prevent codebase degradation:
- **Documentation Precedence Principle:** Agents must read relevant technical specifications (`01-product-requirements-specification.md`, `02-software-architecture-and-technical-design.md`, and `03-relational-database-specification.md`) prior to modifying code or authoring new files.
- **Single-Task Scope Isolation:** Agent scope is strictly confined to the assigned Linear ticket boundary. Agents are prohibited from performing out-of-scope structural refactors without explicit authorization.
- **Mandatory Pre-Commit Validation:** Every code mutation by agents must pass full static TypeScript compilation (`tsc --noEmit`), syntax linting audits, and automated test suites before opening pull requests.
- **Multi-Layer Defense Requirement:** All user input handlers authored by agents must include server-side Zod schema validation and standard system error boundary handling.
---
## 7. Complimentary Quota Exhaustion and Platform Incident Mitigations
### 7.1 Database Storage Quota Thresholds and Escalation
- **Warning Threshold (80% Capacity):** Automated alert is dispatched to Slack channel `#albirru-project-stream` if database storage reaches 400 MB (of the 500 MB quota).
- **Critical Threshold (90% Capacity):** The operations team must execute one of three escalation pathways within 7 business days:
	- **Path 1 (In-Tree Optimization & Archiving — Zero Cost):** Export attendance records past the 3-year statutory retention limit to compressed archives, then execute disk space reclamation (`VACUUM FULL`) via Neon SQL Editor.
	- **Path 2 (Managed Plan Upgrade — Official Scaling):** Scale Neon compute and storage tiers funded through School Operational Assistance (BOS) budgets. Capacity expands instantly with zero downtime and zero code changes.
	- **Path 3 (Self-Hosted Migration — Self-Hosted VPS):** Provision an independent VPS container running PostgreSQL 16+, dump data via `pg_dump`, restore via `pg_restore`, and update `DATABASE_URL` in Vercel environment variables without code rewrites.
### 7.2 Connection Pool Starvation Mitigation
- **Managed Connection Pooling:** All database connection strings in application configuration must use the Neon Connection Pooler to prevent exhausting direct PostgreSQL connection slots.
- **Transaction Timeout Safeguard:** Enforce a maximum transaction timeout of 3000ms in Drizzle ORM so dangling connections terminate automatically and return to the pool queue.
### 7.3 Document Attachment Storage Quota Mitigation
- **Client-Side Document Compression:** Zod validation schemas cap admissions upload sizes at 2 MB per file and enforce compressed formats (PDF/WebP) prior to server submission.
- **Cold Storage Offloading:** Historical admissions document attachments are archived to Cloudflare R2 (10 GB monthly free quota with zero egress fees).
### 7.4 Public Ingress Protection and Rate Limiting
- **Request Rate Limiting:** Apply rate limiting on `/admission` routes capped at 5 form submissions per 15 minutes per client IP to prevent spam attacks and protect database memory.
- **Headless Bot Protection:** Integrate Cloudflare Turnstile widgets on public admission client islands to block automated submission bots without API subscription fees.
### 7.5 Serverless Execution Budget and Batching
- **Database Aggregation Offloading:** Semester GPA calculations and attendance reconciliations execute directly via SQL database aggregation queries rather than in-memory loops on Next.js serverless runtimes, saving monthly execution quotas.
- **Batch Chunk Processing:** Bulk operations such as report card finalization run in phased batches per cohort (maximum 30 students per Server Action execution) to prevent serverless execution timeout limits.
### 7.6 Academic Holiday Inactivity Guard
- **Project Suspension Guard:** To prevent automatic suspension of serverless PostgreSQL instances during extended school holiday intervals, the system runs a scheduled GitHub Actions cron job every 48 hours.
- **System Heartbeat Query:** The workflow requests the `/api/health` endpoint executing a lightweight read query (`SELECT 1`) to keep the database instance active continuously without manual intervention.