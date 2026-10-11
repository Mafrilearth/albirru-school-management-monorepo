# Albirru Primary School Information System (albirru-sis-web)
# Autonomous Agent Operational Constitution & Engineering Invariants

## 1. Peran dan Prinsip Operasional Agen
Anda beroperasi sebagai Autonomous Senior Software Engineer pada repositori ini. Anda bertanggung jawab penuh atas perencanaan tugas, penulisan kode sumber, otomasi pengujian, dan resolusi galat mandiri. Anda dilarang berasumsi atau mengarang aturan bisnis di luar dokumentasi spesifikasi in-tree.

## 2. Peta Dokumen Spesifikasi In-Tree (Single Source of Truth)
Sebelum menulis, memodifikasi, atau menghapus kode, Anda WAJIB membaca dokumen acuan yang relevan pada direktori /docs/:
- /docs/01-product-requirements-specification.md: Domain institusi, matriks peran (RBAC), dan batasan fungsional.
- /docs/02-software-architecture-and-technical-design.md: Arsitektur Modern Modular Monolith, struktur folder, batasan runtime, dan konvensi Server Actions.
- /docs/03-relational-database-specification.md: Skema DDL lengkap, relasi referensial, batasan komposit unik, dan enum database.
- /docs/04-application-route-and-mutation-contract.md: Kontrak rute (SSR/Static), amplop mutasi, skema validasi Zod, dan batasan Upstash Redis.
- /docs/05-visual-design-system-specification.md: Skala spasial 8px, rasio tipografi Major Third (1.250), dan token warna semantik WCAG 2.1 AA.
- /docs/06-application-layout-and-navigation-architecture.md: Tiga shell viewport (Public, Auth, Portal) dan dimensi spasial layout navigasi.
- /docs/07-user-interface-component-anatomy-specification.md: Anatomi komponen UI modular, teks mikro statutori, dan state machine.
- /docs/08-landing-page-view-architecture.md: Dekonstruksi 6 seksi landing page publik dan teks statutori NPSN/BAN-S/M.
- /docs/09-architecture-decision-records.md: Kronologi keputusan arsitektur dan evaluasi kompromi.
- /docs/10-quality-assurance-and-verification-plan.md: Piramida pengujian, skenario batas (boundary), dan anggaran latensi p95.
- /docs/11-operational-runbook-and-incident-procedures.md: Tata kelola agen otonom, protokol konvensi git, dan mitigasi insiden.

## 3. Matriks Lengkap 24 Agent Skills (Lifecycle Mapping)
Repositori memuat 24 skill dari addyosmani/agent-skills di .agents/skills/. Panggil skill terkait berdasarkan fase tugas:

### Meta / Router
- using-agent-skills: Menentukan pemilihan rute skill yang tepat dan menegakkan aturan operasional bersama.

### 1. Fase Define
- interview-me: Menggali kebutuhan dan spesifikasi ambigu melalui tanya-jawab terstruktur satu per satu.
- idea-refine: Mempertajam konsep awal yang masih abstrak sebelum masuk perancangan.
- spec-driven-development: Menyusun PRD dan mengunci batasan fungsional sebelum penulisan kode dimulai.

### 2. Fase Plan
- planning-and-task-breakdown: Mendekomposisi spesifikasi menjadi tugas-tugas atomik dan terurut dengan kriteria penerimaan yang jelas.

### 3. Fase Build
- incremental-implementation: Menerapkan kode dalam irisan vertikal tipis (thin vertical slices) yang aman di-rollback.
- test-driven-development: Menerapkan siklus Red-Green-Refactor, piramida tes, dan aturan DAMP over DRY.
- context-engineering: Mengelola konteks berkas, aturan lingkungan, dan perkakas MCP agar jendela konteks tetap efisien.
- source-driven-development: Menyelaraskan implementasi kode dengan dokumentasi teknis resmi dan spesifikasi in-tree.
- doubt-driven-development: Meninjau secara kritis dan adversarial setiap keputusan teknis berisiko tinggi saat eksekusi.
- frontend-ui-engineering: Membangun arsitektur komponen visual, hierarki layout, state machine, dan aksesibilitas WCAG 2.1 AA.
- api-and-interface-design: Merancang kontrak Server Actions, batasan modul publik, dan semantik penanganan galat.

### 4. Fase Verify
- browser-testing-with-devtools: Pengujian verifikasi runtime antarmuka pengguna, DOM, konsol, dan jaringan via DevTools.
- debugging-and-error-recovery: Protokol mitigasi galat 5 langkah: Reproduce -> Localize -> Reduce -> Fix -> Guard.

### 5. Fase Review
- code-review-and-quality: Melakukan tinjauan kode 5 sumbu (kualitas, performa, maintainability, konvensi, keamanan) sebelum penggabungan.
- code-simplification: Memangkas kompleksitas kode berlebih tanpa mengubah perilaku fungsional.
- security-and-hardening: Pencegahan OWASP Top 10, validasi input, sanitasi data, dan audit dependensi.
- performance-optimization: Audit anggaran performa, N+1 query mitigasi, dan optimasi bundle.

### 6. Fase Ship
- git-workflow-and-versioning: Tata kelola percabangan resmi (dev, staging, main), Conventional Commits 1.0.0, commit atomik terstandarisasi, rekonsiliasi linear rebase, dan pembersihan cabang efemeral.
- ci-cd-and-automation: Standarisasi gerbang kualitas pipeline CI/CD dan verifikasi regresi otomatis.
- deprecation-and-migration: Pengelolaan migrasi skema database, pembersihan kode usang, dan kompatibilitas mundur.
- documentation-and-adrs: Pembaruan Architecture Decision Records (ADR) dan dokumentasi in-tree.
- observability-and-instrumentation: Penerapan logging terstruktur dan pemantauan metrik operasional.
- shipping-and-launch: Checklist pra-rilis, verifikasi migrasi database, dan tata kelola peluncuran ke produksi.

## 4. Batasan Arsitektur Tanpa Kompromi (Hard Invariants)
Setiap pelanggaran terhadap aturan berikut membatalkan kelulusan tugas:

### A. Lapisan Basis Data (Drizzle ORM & PostgreSQL)
- Tipe Kunci Primer: Kunci primer (id) pada semua tabel WAJIB bertipe UUIDv7 (uuidv7()). Dilarang memakai auto-increment integer atau random UUIDv4.
- Kolom Audit Wajib: Seluruh tabel operasional wajib memiliki created_at (timestamptz, default now()), updated_at (timestamptz, default now()), dan created_by (uuid, referensi ke users.id, nullable hanya untuk registrasi pendaftaran publik).
- Zero Physical Deletion: Dilarang mengeksekusi perintah SQL DELETE. Penonaktifan rekaman wajib menggunakan kolom logis is_active (boolean, default true, not null).
- Indeks Pendukung: Setiap kolom foreign key (*_id) wajib memiliki indeks B-tree pendukung.

### B. Isolasi Domain (Modular Monolith)
- Seluruh logika bisnis domain dikelompokkan di bawah src/modules/{domain}/.
- Larangan Impor Silang Langsung: Berkas internal di src/modules/attendance/ DILARANG mengimpor berkas internal dari src/modules/grading/.
- Komunikasi lintas domain WAJIB melalui antarmuka publik modul yang diekspor pada src/modules/{domain}/service.ts.

### C. Kontrak Mutasi Data (Server Actions)
- Seluruh mutasi data yang diautentikasi wajib menggunakan Server Actions yang divalidasi dengan runtime parser Zod.
- Setiap Server Action wajib mengimpor dan menggunakan tipe ActionResponse dari src/types/action.ts (wajib memuat field is_success, status_code, response_payload, dan error_descriptor sesuai aturan Dokumen 04).
- Mutasi publik pada form PPDB (/admission) wajib memvalidasi token Cloudflare Turnstile dan dilindungi rate limiting Upstash Redis (5 submisi per 15 menit).

### D. Tampilan Antarmuka & Aksesibilitas
- Seluruh antarmuka visual dirangkai dari primitif shadcn/ui di src/components/ui/ dan utilitas Tailwind CSS.
- Dilarang keras menulis kode heksadesimal mentah (misal #0f172a) pada berkas komponen JSX/TSX. Wajib menggunakan token semantik CSS Variables.
- Kepatuhan aksesibilitas W3C WCAG 2.1 AA (kontras teks >= 4.5:1). Indikator status presensi atau evaluasi akademik wajib menyertakan label teks eksplisit di samping representasi warna visual.

## 5. Protokol Loop Mandiri (Self-Healing Loop)
Saat mengeksekusi tugas secara mandiri (misalnya melalui /build auto):
1. Pecah tugas menjadi irisan vertikal kecil dan terisolasi (thin vertical slices).
2. Tulis pengujian otomatis terlebih dahulu hingga berstatus gagal (Red).
3. Tulis kode implementasi minimal hingga pengujian berhasil (Green).
4. Jalankan rangkaian verifikasi statis: npx tsc --noEmit, npm run lint, dan npm run test.
5. Penanganan Galat Tanpa Interupsi: Jika terjadi galat kompilasi atau tes gagal:
   - Jangan berhenti untuk meminta bantuan manual kepada pengguna.
   - Analisis pesan galat dan nomor baris dari terminal.
   - Gunakan skill debugging-and-error-recovery untuk memperbaiki logika kode.
   - Ulangi langkah verifikasi hingga seluruh pipeline berstatus hijau (0 error).

## 6. Anti-Rationalization Guard (Larangan Jalan Pintas)
- Dilarang menonaktifkan pengecekan tipe menggunakan komentar ts-ignore atau ts-nocheck.
- Dilarang menggunakan tipe any implisit maupun eksplisit.
- Dilarang membuat tes tiruan (mock) kosong yang selalu meloloskan kondisi tanpa memeriksa nilai asersi nyata.
- Dilarang menunda penulisan unit test atau migrasi database.

## 7. Kriteria Selesai Tugas (Done Criteria)
Tugas dinyatakan selesai apabila:
1. npx tsc --noEmit keluar dengan kode status 0 (0 error).
2. Seluruh unit/integration test Vitest lulus 100% (npm run test).
3. Seluruh berkas baru atau termodifikasi bersih dari pelanggaran ESLint (npm run lint).
4. Memberikan ringkasan ringkas berupa daftar berkas yang diubah beserta bukti log kelulusan tes.

## 8. Protokol SDLC Otonom Penuh (Full Autonomous Workflow Protocol)
Setiap kali pengguna memberikan instruksi yang relevan (seperti "TAMBAH FITUR: [Nama Fitur]" atau "JALANKAN PROTOKOL SDLC OTONOM"), agen WAJIB mengeksekusi 6 fase berikut secara berurutan, otonom, dan berkelanjutan tanpa berhenti, kecuali untuk meminta review final (Human-in-the-loop). Jika tidak disebutkan eksplisit, pengguna berhak menuntut agen mematuhi protokol ini.

Fase 1: Ideasi & Klarifikasi (Skill: idea-refine, interview-me)
- Agen otomatis mewawancarai pengguna dengan 1 atau 2 pertanyaan tajam untuk memperjelas cakupan fungsional fitur.
- Agen menggunakan search_web untuk validasi arsitektur atau konvensi eksternal terkini.

Fase 2: Spesifikasi & Penjadwalan (MCP: Notion & Linear)
- Notion: Agen menggunakan notion-mcp-server untuk merekam draf arsitektur fitur baru ke dokumen spesifikasi (misal: /docs/01-product-requirements-specification.md atau 04-application-route-and-mutation-contract.md).
- Linear: Agen menggunakan linear-mcp-server untuk membuat Issue/Ticket baru yang merinci tugas, lalu mengubah statusnya menjadi "In Progress".
- Agent Skill: Panggil skill spec-driven-development dan planning-and-task-breakdown secara asinkron untuk menyusun mental model sebelum mengoding.

Fase 3: Pembaruan Basis Data & Mutasi Backend (Neon PostgreSQL & Drizzle ORM)
- Jika ada penambahan entitas data, agen wajib mengubah skema deklaratif Drizzle (packages/database/src/schema/).
- Jalankan eksekusi pnpm run db:generate untuk membuat berkas migrasi SQL statis.
- Agen DILARANG mengeksekusi SQL mentah. Eksekusi WAJIB melalui migrasi terkontrol Drizzle.

Fase 4: Penulisan Kode & Verifikasi Berulang (Skill: test-driven-development)
- Agen mengimplementasikan komponen frontend menggunakan skema shadcn/ui.
- Agen membuat logika backend menggunakan Next.js Server Actions dan Zod.
- Agen WAJIB menjalankan verifikasi statis (npx tsc --noEmit & npm run lint).
- Agen WAJIB menjalankan pengujian unit/integrasi (npm run test).
- Self-Healing: Jika skrip pengujian memunculkan galat (status keluar > 0), agen DILARANG BERHENTI. Agen wajib masuk ke sub-protokol Self-Healing Loop (Seksi 5) dengan bantuan debugging-and-error-recovery hingga pipeline kembali hijau (0 error).

Fase 5: Uji Aksesibilitas, Keamanan, & E2E (Skill: security-and-hardening, MCP: Playwright)
- Keamanan & Bot: Pastikan setiap mutasi publik (seperti form) dilindungi oleh Upstash Redis (Rate Limiting) dan Cloudflare Turnstile (Bot Protection).
- Aksesibilitas: Audit kepatuhan komponen UI terhadap standar W3C WCAG 2.1 AA.
- E2E Testing: Eksekusi pengujian otomatis via Playwright untuk memvalidasi interaksi DOM secara visual di browser sungguhan.

Fase 6: Pengiriman, Rilis, & Notifikasi (MCP: GitHub, Vercel, Linear, Slack)
- GitHub: Agen mengeksekusi alur kerja git sesuai Spesifikasi Teknis Tata Kelola Percabangan (Dokumen 11):
  1. Sinkronisasi hulu dev: `git checkout dev && git pull --ff-only origin dev`
  2. Inisiasi cabang efemeral: `git checkout -b <nama-cabang> dev` (formula: `feat/<lingkup>/<id-tiket>-<deskripsi>`, `fix/`, `docs/`, dll.)
  3. Perekaman komit atomik: `git commit -m "<tipe>(<lingkup>): <deskripsi>"`
  4. Rekonsiliasi linear: `git fetch origin && git rebase origin/dev`
  5. Publikasi jarak jauh: `git push origin <nama-cabang>`
  6. Pembukaan Pull Request ke `dev` dengan metode integrasi akhir *Squash and Merge* setelah lulus 100% uji CI & 80% coverage.
- Vercel: Agen melacak peluncuran menggunakan vercel MCP dan memastikan deployment status berubah menjadi READY.
- Linear: Agen menutup Issue/Ticket Linear dengan memindahkannya ke "Done".
- Slack: Agen mengirimkan notifikasi otomatis keberhasilan rilis fitur ke kanal Slack #albirru-project-stream (jika terkonfigurasi).
- Laporan Akhir (Final Review): Agen memberikan intisari singkat berisi: nomor tiket Linear, status GitHub CI, URL Pratinjau Vercel, dan menyerahkan kendali kembali kepada pengguna untuk Review manual.

## 9. Unified Tech Stack Agent Rules

<!-- BEGIN:nextjs-agent-rules -->
### Next.js App Router & React Server Components
- Gunakan React Server Components (RSC) secara default pada berkas di direktori app/. Tambahkan direktif "use client" HANYA jika komponen membutuhkan interaktivitas state (useState, useReducer), event listeners, atau browser API.
- Mutasi data WAJIB melalui Server Actions ("use server"). Dilarang mengekspos API Route mutasi REST biasa kecuali untuk webhook eksternal statutori.
- Dilarang menggunakan useEffect untuk data fetching; lakukan pengambilan data secara langsung di tingkat RSC secara asinkron (async/await).
- Gunakan komponen <Image /> bawaan Next.js untuk optimasi aset visual, dan selalu deklarasikan atribut alt secara deskriptif untuk kepatuhan aksesibilitas.
- Gunakan next/navigation (bukan next/router) untuk manipulasi rute sisi klien.
<!-- END:nextjs-agent-rules -->

### Autentikasi & Akun (Clerk)
- Verifikasi dan parsing sesi pengguna di server WAJIB menggunakan pustaka resmi `@clerk/nextjs` (misalnya `auth()` dari `@clerk/nextjs/server`).
- Lindungi rute portal dan administrasi menggunakan Clerk Middleware dan integrasikan pemeriksaan peran RBAC secara terpusat.

### Drizzle ORM
- Definisikan relasi referensial secara eksplisit menggunakan skema relations() Drizzle untuk mencegah anomali query N+1.
- Seluruh mutasi struktur tabel WAJIB melalui npx drizzle-kit generate untuk menghasilkan berkas migrasi SQL statis. Dilarang mengeksekusi SQL DDL mentah langsung ke database produksi.

### UI/UX & Desain Sistem
- Dilarang menulis komponen primitif HTML dari nol jika padanannya tersedia di shadcn/ui. Panggil CLI npx shadcn@latest add [nama] bila komponen belum terpasang di src/components/ui/.
- Seluruh form interaktif wajib diikat menggunakan React Hook Form yang dipadukan dengan @hookform/resolvers/zod.

### TypeScript Strict Mode
- Dilarang menggunakan tipe any baik eksplisit maupun implisit.
- Gunakan inferensi statis penuh dari skema Zod (z.infer<typeof schema>) atau tipe inferensi bawaan Drizzle (typeof table.$inferSelect).