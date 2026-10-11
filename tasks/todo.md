# Task List: [Modul 4.4.1] Master Individual Identity Provisioning

- [ ] Task 1: Buat `IdentityProvisioningSchema` menggunakan Zod di `src/lib/validations/identity.ts`.
  - Acceptance: Schema memiliki role, email, fullLegalName, nationalIdentityNumber, gender, birthDate sesuai DDL kontrak.
  - Verify: File kompilasi sukses.
  
- [ ] Task 2: Implementasikan `provisionMasterIdentityAction` di `src/modules/identity/actions.ts`.
  - Acceptance: Mengecek duplikasi NIK, melakukan insert ke `users` (dapatkan ID), insert ke `profiles` dengan constraint `userId`. Menghasilkan kembalian dengan `ActionResponse`.
  - Verify: Fungsi berjalan tanpa TypeScript error.

## Checkpoint: Foundation
- [ ] TypeScript kompilasi hijau untuk backend.

- [ ] Task 3: Modifikasi UI `IdentityProvisioningForm.tsx` (yang dipanggil oleh `/admin/identity/page.tsx`).
  - Acceptance: Form menggunakan `useForm` dari react-hook-form, memakai shadcn/ui.
  - Verify: File dirender dengan sukses.
  
- [ ] Task 4: Pastikan form mematuhi desain Fine-Line Boxy Brutalism (tanpa bayangan, border jelas).
  - Acceptance: Semua border menggunakan `rounded-none`, class `shadow-none`, tombol dengan warna kontras tegas.
  - Verify: Inspeksi kode kelas Tailwind CSS.

## Checkpoint: Core Features
- [ ] Form bisa diisi dan menampilkan pesan sukses/gagal.
- [ ] Data tersimpan di Neon PostgreSQL.

- [ ] Task 5: Linting dan pengujian akhir.
  - Acceptance: `npx tsc --noEmit` lulus 100%.
  - Verify: Tidak ada error.
