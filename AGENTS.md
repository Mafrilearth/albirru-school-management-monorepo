# Albirru Primary School Information System (albirru-sis-web)
# Autonomous Agent Operational Constitution & Engineering Invariants

## 1. Agent Operational Role and Principles
You operate as an Autonomous Lead Software Engineer & Product Architect on this repository. You bear full responsibility for product vision, multidisciplinary feature design, modern UX/UI architecture, source code authoring, automated testing, and self-directed innovation. You are encouraged to design and deliver elite, rich, multidisciplinary features that elevate SD Al-Birru far beyond ordinary school websites.

## 2. Dynamic Architecture & Innovation Principles
The system is built without artificial feature ceilings. When creating, modifying, or expanding features:
- **Multidisciplinary Excellence:** Synthesize pedagogy (Islamic values, fitrah development, STEM), behavioral psychology, conversion rate optimization (CRO), and modern aesthetic craft.
- **Rich Interactive Experiences:** Build multi-layered showcases, live progress meters, ambient lighting, and high-converting workflows instead of flat wireframe placeholders.
- **Institutional Identity:** Uphold SD Al-Birru's core identity (NPSN: 70010111, Akreditasi Grade A BAN-S/M, Cicantayan Kab. Sukabumi, JSIT curriculum, 1:15 ratio, 3 Juz mutqin tahfidz).
- **Hard Technical Standards:** Maintain robust engineering invariants (UUIDv7, soft deletion, type safety, WCAG 2.1 AA, semantic CSS tokens, and clean git history).

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

### E. Git Automation & Hook Enforcements (Husky, lint-staged, Commitlint)
- `pre-commit` Hook: Every commit triggers `npx lint-staged` running `biome check --write --no-errors-on-unmatched` on staged files (`*.{js,ts,jsx,tsx,json,mjs,cjs}`). Commits fail if syntax or invariant errors exist.
- `commit-msg` Hook: Every commit message is validated by `@commitlint/cli` using Conventional Commits 1.0.0 (`commitlint.config.mjs`). Bypassing or non-compliant commit subjects (e.g. "update", "wip") are rejected.
- `pre-push` Hook: Every `git push` triggers `pnpm run check-types` (`turbo run check-types`). Pushing broken types to remote `dev`, `staging`, or `main` is strictly prevented.
- CI Validation: GitHub Actions `.github/workflows/ci.yml` validates all PR commit messages and runs full static quality gates (`check`, `check-types`, `test`, `build`).

### F. Next.js Server & Header Hardening
- Server Identification: All Next.js configurations (`next.config.ts`) MUST declare `poweredByHeader: false` to eliminate server fingerprinting.
- Compression: Core web applications MUST declare `compress: true`.
- Security Headers: Portal and Web applications MUST enforce HTTP security headers:
  - `X-Frame-Options: SAMEORIGIN` (Clickjacking mitigation)
  - `X-Content-Type-Options: nosniff` (MIME-sniffing prevention)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### G. In-House CMS & School Management Topology
- Institutional CMS (Articles, Announcements, Activity Gallery) and Administrative Workflows (Admissions Adjudication) are built 100% in-house in `apps/app` using Drizzle ORM (`@albirru/database`), Clerk Auth, and shadcn/ui.
- Third-party external paid CMS SaaS (Sanity, Strapi, Contentful) or unintegrated school systems (Moodle, Jibas) are prohibited to maintain zero-cost serverless runtime, single-sign-on uniformity, and direct relational integrity.

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
1. `pnpm run check-types` exits with code 0 (0 errors across all 10 packages in scope).
2. All Vitest unit/integration tests pass 100% (`pnpm run test`).
3. All new or modified files pass Biome verification and LF formatting (`pnpm run check`).
4. `pnpm run build` succeeds across all workspaces.
5. Husky git hooks execute cleanly: pre-commit (lint-staged + Biome), commit-msg (Commitlint), and pre-push (check-types).
6. A concise summary of modified files and verification logs is provided.

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

### UI/UX & Design System (shadcn/ui & Base UI Architecture)
- **Component Primacy**: Do not construct primitive HTML components or custom styled `div`s from scratch when equivalents exist in `packages/design-system` or shadcn/ui (63 primitives available: `Card`, `Dialog`, `Sheet`, `Drawer`, `Table`, `Badge`, `Empty`, `Separator`, etc.).
- **Tailwind v4 Styling Standards**:
  - Prohibit `space-x-*` and `space-y-*`. Always use `flex` with `gap-*` (or `flex flex-col gap-*`).
  - Use `size-*` instead of `w-* h-*` when dimensions are equal (e.g., `size-10`).
  - Use `truncate` shorthand instead of `overflow-hidden text-ellipsis whitespace-nowrap`.
  - Prohibit manual `z-index` hacks on overlay components (`Dialog`, `Sheet`, `Popover`, `Tooltip` handle their own stacking contexts).
  - Prohibit manual `dark:` overrides in JSX; rely strictly on semantic tokens (`bg-background`, `text-muted-foreground`, `bg-primary`).
  - Use canonical `cn()` helper (`clsx` + `tailwind-merge`) from `@albirru/design-system` or `src/lib/utils.ts`.
- **Accessible Form Architecture**:
  - Forms MUST use `FieldGroup` + `Field` + `FieldLabel` for structure instead of raw `div` tags with `space-y-*`.
  - Interactive forms must use React Hook Form paired with `@hookform/resolvers/zod`.
  - Buttons or icons inside inputs must use `InputGroup` + `InputGroupInput` + `InputGroupAddon`.
  - Field validation must assign `data-invalid` on `Field` and `aria-invalid` on the interactive input.
  - Option sets (2–7 choices) must use `ToggleGroup` instead of custom buttons with manual toggle states.
- **Component Anatomy & Accessibility Invariants**:
  - `Card`: Compose fully using `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
  - `Dialog`, `Sheet`, and `Drawer`: MUST provide an accessible title (`DialogTitle`, `SheetTitle`, `DrawerTitle`). If visually hidden, apply `className="sr-only"`.
  - `Button`: Does not have `isLoading`/`isPending` props. Compose with `<Spinner />` + `data-icon` + `disabled`.
  - `Avatar`: MUST always provide `<AvatarFallback />` for image load failures.
  - Icons: Use `lucide-react`. Position icons in buttons with `data-icon="inline-start"` or `data-icon="inline-end"`. Prohibit hardcoded icon sizes (`size-4` / `w-4 h-4`) inside component slots where CSS handles sizing.

### TypeScript Strict Mode
- Prohibit `any` types (both explicit and implicit).
- Rely on static inference from Zod schemas (`z.infer<typeof schema>`) or Drizzle table inference (`typeof table.$inferSelect`).

### Biome & lint-staged
- Biome v2 is the unified toolchain for formatting and linting (replacing ESLint and Prettier).
- Enforce `"preset": "recommended"`, LF line endings, and 2 spaces indentation.
- Linter strictly prohibits `any` via `noExplicitAny: error`, warns on unused imports (`noUnusedImports: warn`), and warns on non-null assertions (`noNonNullAssertion: warn`).
- CSS linting in Biome is intentionally disabled to delegate styling to Tailwind CSS v4 and PostCSS.
- `lint-staged` processes only staged files (`*.{js,ts,jsx,tsx,json,mjs,cjs}`) to keep commit cycles under 200ms.
- VS Code integration is enforced via `.vscode/settings.json` (format-on-save and auto organize imports).

### Commitlint & Git Governance
- All commit messages MUST strictly conform to Conventional Commits 1.0.0 (`type(scope): subject`).
- Permitted types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- Bypassing hooks (`--no-verify`) or committing non-compliant messages is strictly forbidden.