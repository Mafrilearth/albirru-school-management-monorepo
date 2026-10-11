# Implementation Plan: [Module 4.4.1] Master Individual Identity Provisioning

## Overview
Build master identity provisioning management features to securely provision new Teachers, Students, and Administrators through the admin console portal (`/admin/identity`). This feature creates corresponding rows in `users` and `profiles` tables.

## Architecture Decisions
- **Form Handling:** `react-hook-form` integrated with Zod validation.
- **Data Persistence:** Uses Server Actions `provisionMasterIdentityAction` typed with `ActionResponse<T>`.
- **Database Tables:** `users` and `profiles` tables (already provisioned in schema).
- **Security:** Role validation, database duplicate checks on NIK / national identity number and Email (Conflict 409).

## Task List

### Phase 1: Validations & Server Actions
- [x] Task 1: Create `IdentityProvisioningSchema` using Zod in `src/lib/validations/identity.ts` with properties (role, email, fullLegalName, nationalIdentityNumber, gender, birthDate).
- [x] Task 2: Implement `provisionMasterIdentityAction` in `src/modules/identity/actions.ts` atomically inserting into `users` then `profiles`, handling duplicate key constraints.

### Checkpoint: Foundation
- [x] TypeScript compilation green for backend.

### Phase 2: Form & UI Components
- [x] Task 3: Modify `/admin/identity/page.tsx` or component in `src/components/forms/`.
- [x] Task 4: Ensure form adheres to Fine-Line Boxy Brutalism design system (shadowless, crisp borders).

### Checkpoint: Core Features
- [x] Form accepts submissions and displays clear success/failure states.
- [x] Data successfully persists to Neon PostgreSQL.

### Phase 3: Polish
- [x] Task 5: Linting and final TypeScript static type-checking.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Duplicate National ID triggers 500 error | High | Handle Drizzle exception and return typed 409 Conflict response. |
