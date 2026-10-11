# Albirru Primary School Information System (albirru-sis-web)
# Autonomous Agent Operational Constitution & Engineering Invariants

## 1. Agent Operational Role and Principles
You operate as an Autonomous Senior Software Engineer on this repository. You bear full responsibility for task planning, source code authoring, automated testing, and self-directed error recovery. You are strictly prohibited from assuming or fabricating business rules outside the authoritative in-tree specification documentation.

## 2. In-Tree Specification Document Map (Single Source of Truth)
Before writing, modifying, or removing code, you MUST read the relevant reference documents under the `/docs/` directory:
- `/docs/01-product-requirements-specification.md`: Institutional domain, Role-Based Access Control (RBAC) matrix, and functional bounds.
- `/docs/02-software-architecture-and-technical-design.md`: Modern Modular Monolith architecture, folder structure, runtime constraints, and Server Action conventions.
- `/docs/03-relational-database-specification.md`: Complete DDL schemas, referential relationships, composite unique constraints, and database enums.
- `/docs/04-application-route-and-mutation-contract.md`: Route contracts (SSR/Static), mutation envelopes, Zod validation schemas, and Upstash Redis limits.
- `/docs/05-visual-design-system-specification.md`: 8px spatial scale, Major Third typography ratio (1.250), and WCAG 2.1 AA semantic color tokens.
- `/docs/06-application-layout-and-navigation-architecture.md`: Three viewport shells (Public, Auth, Portal) and navigation spatial layout dimensions.
- `/docs/07-user-interface-component-anatomy-specification.md`: Modular UI component anatomy, statutory microcopy, and state machines.
- `/docs/08-landing-page-view-architecture.md`: 6-section public landing page deconstruction and NPSN/BAN-S/M statutory credentials.
- `/docs/09-architecture-decision-records.md`: Chronology of architecture decisions (ADR-001 through ADR-008) and tradeoff evaluations.
- `/docs/10-quality-assurance-and-verification-plan.md`: Testing pyramid, boundary test scenarios, and p95 latency budgets.
- `/docs/11-operational-runbook-and-incident-procedures.md`: Autonomous agent governance, git workflow conventions, and incident mitigation runbooks.

## 3. Complete 24 Agent Skills Lifecycle Matrix
The repository hosts 24 agent skills from addyosmani/agent-skills in `.agents/skills/`. Invoke relevant skills based on the task lifecycle phase:

### Meta / Router
- `using-agent-skills`: Determines proper skill routing and enforces shared operational rules.

### 1. Define Phase
- `interview-me`: Extracts requirements and ambiguous specs through structured, one-by-one inquiries.
- `idea-refine`: Sharpens abstract initial concepts before entering design.
- `spec-driven-development`: Drafts PRDs and locks down functional bounds before code authoring begins.

### 2. Plan Phase
- `planning-and-task-breakdown`: Decomposes specifications into ordered, atomic tasks with clear acceptance criteria.

### 3. Build Phase
- `incremental-implementation`: Implements code in thin, verifiable vertical slices that are safe to roll back.
- `test-driven-development`: Enforces Red-Green-Refactor cycles, testing pyramids, and DAMP over DRY principles.
- `context-engineering`: Manages file context, environment rules, and MCP tooling for efficient context window usage.
- `source-driven-development`: Aligns code implementations with official technical documentation and in-tree specifications.
- `doubt-driven-development`: Subject high-stakes architectural decisions to critical adversarial examination.
- `frontend-ui-engineering`: Constructs visual component architecture, layout hierarchies, state machines, and WCAG 2.1 AA accessibility.
- `api-and-interface-design`: Designs Server Action contracts, public module boundaries, and structured error-handling semantics.

### 4. Verify Phase
- `browser-testing-with-devtools`: Runtime verification of user interfaces, DOM, console, and network via DevTools.
- `debugging-and-error-recovery`: 5-step systematic error mitigation: Reproduce -> Localize -> Reduce -> Fix -> Guard.

### 5. Review Phase
- `code-review-and-quality`: Conducts 5-axis code reviews (quality, performance, maintainability, convention, security) prior to merging.
- `code-simplification`: Reduces unnecessary code complexity without altering functional behavior.
- `security-and-hardening`: OWASP Top 10 prevention, input validation, data sanitization, and dependency auditing.
- `performance-optimization`: Performance budget auditing, N+1 query mitigation, and bundle optimization.

### 6. Ship Phase
- `git-workflow-and-versioning`: Formal branch governance (`dev`, `staging`, `main`), Conventional Commits 1.0.0, standardized atomic commits, linear rebase reconciliation, and ephemeral branch cleanup.
- `ci-cd-and-automation`: CI/CD quality gate standardization and automated regression verification.
- `deprecation-and-migration`: Database schema migration management, dead-code cleanup, and backward compatibility.
- `documentation-and-adrs`: Maintenance of Architecture Decision Records (ADRs) and in-tree documentation.
- `observability-and-instrumentation`: Structured logging implementation and operational metric monitoring.
- `shipping-and-launch`: Pre-release checklists, database migration verification, and production rollout governance.

## 4. Non-Negotiable Architectural Invariants (Hard Invariants)
Any violation of the following invariants constitutes an automatic task failure:

### A. Database Layer (Drizzle ORM & PostgreSQL)
- Primary Key Type: Primary keys (`id`) on all tables MUST use UUIDv7 (`uuidv7()`). Auto-increment integers or random UUIDv4 are strictly prohibited.
- Mandatory Audit Columns: All operational tables must maintain `created_at` (`timestamptz`, default `now()`), `updated_at` (`timestamptz`, default `now()`), and `created_by` (`uuid`, references `users.id`, nullable only for public admissions registration).
- Zero Physical Deletion: Executing SQL `DELETE` is strictly forbidden. Record deactivation must use logical column `is_active` (`boolean`, default `true`, `not null`).
- Supporting Indexes: Every foreign key column (`*_id`) must have a supporting B-tree index.

### B. Domain Isolation (Modular Monolith)
- All domain business logic must be encapsulated under `src/modules/{domain}/`.
- Prohibition of Direct Cross-Module Imports: Internal files in `src/modules/attendance/` MUST NOT import internal files from `src/modules/grading/`.
- Cross-domain communication MUST traverse the module's public interface exported at `src/modules/{domain}/service.ts`.

### C. Data Mutation Contract (Server Actions)
- All authenticated data mutations must use Server Actions validated by Zod runtime parsers.
- Every Server Action must import and use the `ActionResponse` type from `src/types/action.ts` (requiring fields `is_success`, `status_code`, `response_payload`, and `error_descriptor` per Document 04).
- Public mutations on admissions forms (`/admissions`) must validate Cloudflare Turnstile tokens and be protected by Upstash Redis rate limiting (5 submissions / 15 minutes).

### D. User Interface & Accessibility
- All visual interfaces are composed from shadcn/ui primitives under `packages/design-system` and Tailwind CSS utilities.
- Raw hexadecimal colors (e.g. `#0f172a`) in JSX/TSX component files are strictly forbidden. Use semantic CSS Variables tokens.
- W3C WCAG 2.1 AA accessibility compliance (text contrast ratio >= 4.5:1). Status indicators for attendance or grading must include explicit text labels alongside color representations.

## 5. Self-Healing Autonomous Loop
When executing tasks autonomously:
1. Decompose the task into small, isolated vertical slices.
2. Write automated tests first until they fail (Red).
3. Write minimal implementation code until tests pass (Green).
4. Run the static verification suite: `pnpm run check-types`, `pnpm run check`, and `pnpm run test`.
5. Uninterrupted Error Recovery: If compilation errors or test failures occur:
   - Do not stop to prompt the user for manual intervention.
   - Analyze error messages and line numbers directly from the output.
   - Use `debugging-and-error-recovery` to resolve code issues systematically.
   - Repeat verification until the entire pipeline is green (0 errors).

## 6. Anti-Rationalization Guard (Zero Shortcuts)
- Disabling type checking via `@ts-ignore` or `@ts-nocheck` comments is prohibited.
- Using implicit or explicit `any` types is prohibited.
- Creating empty mock tests that pass unconditionally without inspecting actual assertions is prohibited.
- Deferring unit test authoring or database migrations is prohibited.

## 7. Definition of Done
A task is formally complete when:
1. `pnpm run check-types` exits with code 0 (0 errors).
2. All Vitest unit/integration tests pass 100% (`pnpm run test`).
3. All new or modified files pass Biome verification (`pnpm run check`).
4. `pnpm run build` succeeds across all workspaces.
5. A concise summary of modified files and verification logs is provided.

## 8. Full Autonomous SDLC Protocol
When given high-level directives, the agent executes all 6 lifecycle phases sequentially and continuously:

Phase 1: Ideation & Clarification (Skills: `idea-refine`, `interview-me`)
- Refine requirements and technical scope. Validate against modern conventions using web search when necessary.

Phase 2: Specification & Scheduling (MCP: Notion & Linear)
- Record architectural specifications and update Linear tracking issues to "In Progress".
- Use `spec-driven-development` and `planning-and-task-breakdown` before writing code.

Phase 3: Database Updates & Backend Mutations (Neon PostgreSQL & Drizzle ORM)
- Update Drizzle schemas in `packages/database/src/schema/`.
- Run `pnpm run db:generate` to produce static SQL migrations. Never execute raw unmanaged SQL.

Phase 4: Code Implementation & Iterative Verification (Skills: `test-driven-development`)
- Implement frontend components using shadcn/ui and design system primitives.
- Author backend logic using Next.js Server Actions and Zod.
- Execute static checks (`pnpm run check-types`, `pnpm run check`, `pnpm run test`).
- Enter the Self-Healing Loop if any failure occurs until 0 errors remain.

Phase 5: Accessibility, Security, & E2E Testing (Skill: `security-and-hardening`, MCP: Playwright)
- Security: Enforce Upstash Redis rate limiting and Cloudflare Turnstile bot protection on public endpoints.
- Accessibility: Audit W3C WCAG 2.1 AA compliance.
- E2E Testing: Run automated Playwright tests to validate DOM workflows in real browser runtimes.

Phase 6: Shipping, Deployment, & Reporting (MCP: GitHub, Vercel, Linear, Slack)
- Git workflow: Synchronize `dev`, record atomic commits, rebase cleanly, and open Pull Requests.
- Vercel: Track deployment status using Vercel MCP until status reaches `READY`.
- Linear: Mark resolved tickets as "Done".
- Slack: Post release notifications to `#albirru-project-stream`.
- Final Review: Present concise summary with ticket numbers, CI status, and preview URLs to user.

## 9. Unified Tech Stack Agent Rules

### Next.js App Router & React Server Components
- Use React Server Components (RSC) by default for files under `app/`. Add `"use client"` ONLY when state interactivity (`useState`, `useReducer`), event listeners, or browser APIs are required.
- Data mutations MUST use Server Actions (`"use server"`). Do not expose generic REST mutation API routes except for statutory external webhooks.
- Do not use `useEffect` for data fetching; fetch data directly inside RSCs asynchronously (`async/await`).
- Use Next.js `<Image />` for visual asset optimization with descriptive `alt` attributes.
- Use `next/navigation` (not `next/router`) for client-side navigation.

### Authentication & Accounts (Clerk)
- Verify and parse server sessions using the official `@clerk/nextjs` SDK (`auth()` from `@clerk/nextjs/server`).
- Protect portal and administrative routes with Clerk Middleware and integrate RBAC role checks centrally.

### Drizzle ORM
- Define referential relationships explicitly using Drizzle `relations()` to prevent N+1 query anomalies.
- All schema changes MUST use `pnpm run db:generate` to generate static SQL migration files. Never execute raw SQL DDL directly against production databases.

### UI/UX & Design System
- Do not construct primitive HTML components from scratch when equivalents exist in `packages/design-system` or shadcn/ui.
- Interactive forms must use React Hook Form paired with `@hookform/resolvers/zod`.

### TypeScript Strict Mode
- Prohibit `any` types (both explicit and implicit).
- Rely on static inference from Zod schemas (`z.infer<typeof schema>`) or Drizzle table inference (`typeof table.$inferSelect`).