# Task List: [Module 4.4.1] Master Individual Identity Provisioning

- [x] Task 1: Create `IdentityProvisioningSchema` using Zod in `src/lib/validations/identity.ts`.
  - Acceptance: Schema includes role, email, fullLegalName, nationalIdentityNumber, gender, birthDate matching DDL contracts.
  - Verify: File compiles successfully.
  
- [x] Task 2: Implement `provisionMasterIdentityAction` in `src/modules/identity/actions.ts`.
  - Acceptance: Checks for duplicate national ID, performs atomic inserts into `users` and `profiles` with `userId` constraint. Returns standard `ActionResponse`.
  - Verify: Function executes without TypeScript errors.

## Checkpoint: Foundation
- [x] TypeScript compilation green for backend.

- [x] Task 3: Modify UI `IdentityProvisioningForm.tsx` (rendered on `/admin/identity/page.tsx`).
  - Acceptance: Form uses `useForm` from react-hook-form, using shadcn/ui.
  - Verify: File renders successfully.
  
- [x] Task 4: Ensure form adheres to Fine-Line Boxy Brutalism design system (shadowless, crisp borders).
  - Acceptance: All borders utilize `rounded-none`, `shadow-none` classes, buttons with sharp high-contrast styling.
  - Verify: Tailwind CSS utility inspection.

## Checkpoint: Core Features
- [x] Form accepts inputs and displays success/error states.
- [x] Data persists cleanly to Neon PostgreSQL.

- [x] Task 5: Linting and final test suite verification.
  - Acceptance: `npx tsc --noEmit` passes 100%.
  - Verify: Zero errors.
