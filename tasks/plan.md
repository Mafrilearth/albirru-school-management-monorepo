# Implementation Plan: [Modul 4.4.1] Master Individual Identity Provisioning

## Overview
Membangun fitur manajemen identitas master (Identity Provisioning) untuk menginput data Guru, Siswa, dan Administrator baru secara aman melalui halaman portal konsol admin (`/admin/identity`). Fitur ini akan membuat baris di tabel `users` dan `profiles`. 

## Architecture Decisions
- **Form Handling:** `react-hook-form` terintegrasi dengan validasi Zod.
- **Data Persistence:** Menggunakan Server Actions `provisionMasterIdentityAction` dengan tipe `ActionResponse<T>`.
- **Database Table:** Tabel `users` dan `profiles` (sudah tersedia di skema). 
- **Security:** Validasi role, pengecekan duplikasi NIK/Email di database (Conflict 409).

## Task List

### Phase 1: Validations & Server Actions
- [ ] Task 1: Buat `IdentityProvisioningSchema` menggunakan Zod di `src/lib/validations/identity.ts` dengan properti (role, email, full_legal_name, national_identity_number, gender, birth_date).
- [ ] Task 2: Implementasikan `provisionMasterIdentityAction` di `src/modules/identity/actions.ts` yang memasukkan data ke tabel `users` kemudian `profiles` secara atomik, menangani duplikasi constraint.

### Checkpoint: Foundation
- [ ] TypeScript kompilasi hijau untuk backend.

### Phase 2: Form & UI Components
- [ ] Task 3: Modifikasi `/admin/identity/page.tsx` atau buat `IdentityProvisioningForm.tsx` di `src/components/forms/`. 
- [ ] Task 4: Pastikan form mematuhi desain Fine-Line Boxy Brutalism (tanpa bayangan, border jelas).

### Checkpoint: Core Features
- [ ] Form bisa diisi dan menampilkan pesan sukses/gagal.
- [ ] Data tersimpan di Neon PostgreSQL.

### Phase 3: Polish
- [ ] Task 5: Linting dan pengujian akhir kompilasi TypeScript.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| NIK duplikat memicu error 500 | High | Tangani exception Drizzle dan kembalikan 409 Conflict. |
