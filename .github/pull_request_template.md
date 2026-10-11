## 📌 Pull Request Overview

### 1. Summary of Changes
<!-- Provide a concise description of what this PR achieves and why it was introduced. -->

### 2. Issue / Tracking Reference
- Closes #<!-- issue number -->
- Linear: `ALB-`<!-- ticket id if applicable -->

### 3. Type of Change
- [ ] `feat`: New user-facing feature or domain capability
- [ ] `fix`: Bug fix for existing functionality
- [ ] `refactor`: Code reorganization with no behavior change
- [ ] `perf`: Performance enhancement or bundle size reduction
- [ ] `docs`: Documentation addition or correction
- [ ] `test`: Unit, integration, or E2E test suite additions
- [ ] `build` / `ci`: Changes to build tooling or CI quality gates
- [ ] `chore`: Housekeeping, dependency updates, or internal tooling

### 4. Workspaces & Packages Affected
- [ ] `apps/web` (Public Institutional Website)
- [ ] `apps/app` (Authenticated SIS & SaaS Portal)
- [ ] `apps/api` (Edge API & Webhook Ingress)
- [ ] `apps/email` (Transactional Email Studio)
- [ ] `apps/docs` (Technical & Statutory Docs)
- [ ] `packages/database` (Drizzle ORM & Relational Schema)
- [ ] `packages/design-system` (Base UI & shadcn Primitives)
- [ ] `packages/typescript-config` (Compiler Configurations)

---

## 🧪 Verification & Quality Gate Checklist

Please ensure all mandatory checks pass before requesting review:

- [ ] **Linter & Formatter**: `pnpm run check` exits with code 0 (0 Biome errors).
- [ ] **Static Type Check**: `pnpm run check-types` passes across all workspaces (0 errors).
- [ ] **Automated Tests**: `pnpm run test` passes 100% of Vitest assertions.
- [ ] **Production Build**: `pnpm run build` succeeds without build-time errors.
- [ ] **Conventional Commits**: Commit messages conform to `type(scope): subject` (under 100 chars).
- [ ] **Hard Invariants Respected**:
  - [ ] Primary keys use UUIDv7 (`uuidv7()`).
  - [ ] Zero physical `DELETE` queries (soft deletion via `is_active = false`).
  - [ ] Zero raw hexadecimal color codes in JSX/TSX (uses semantic CSS variables).
  - [ ] Server Action mutations return typed `ActionResponse<T>` envelopes.

---

## 📸 Visual Verification (If UI Modified)
<!-- Attach screenshots, screen recordings, or Chrome DevTools evidence if UI was modified. -->
