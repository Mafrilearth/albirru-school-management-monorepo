> **Tujuan Dokumen:** Spesifikasi arsitektur modular monolit, batas pemisahan modul internal, tumpukan teknologi produksi komprehensif, struktur direktori repositori, dan protokol eksekusi transaksi sistem.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Software Architecture and Technical Design | Judul statutori spesifikasi teknis |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi pembaruan tumpukan teknologi produksi lengkap |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/02-software-architecture-and-technical-design.md` | Jalur berkas dalam repositori |
---
## 2. Architectural Pattern and Monolith Boundary Decoupling
### 2.1 Structural Topology
Sistem dirancang sebagai **Modern Modular Monolith** yang dikemas ke dalam satu unit distribusi rilis (*single deployable unit*). Isolasi domain ditegakkan secara ketat melalui batas direktori modul internal, skema relasional terpisah, dan isolasi konteks transaksi untuk mencegah percampuran logika bisnis lintas domain.
### 2.2 Monolith Layer Decoupling Matrix
| Architectural Layer | Scope and Boundary Responsibility | Permitted Interaction Direction |
|---|---|---|
| **Presentation and Route Layer** | Antarmuka Server Components, hidrasi form client, dan validasi rute | Pemanggilan langsung ke Domain Service Layer secara eksklusif |
| **Domain Service Layer** | Enkapsulasi aturan bisnis, kalkulasi deterministik, dan alur mutasi status | Meneruskan operasi mutasi data ke Data Access Layer |
| **Data Access Layer** | Transaksi relasional, pemetaan skema, penjaga integritas referensial, dan RLS | Interaksi basis data terisolasi tanpa dependensi ke lapisan luar |
---
## 3. Production Technology Stack
| Layer Classification | Technology Platform | Specification Standard | Technical Scope | Operational Rationale |
|---|---|---|---|---|
| **Server Runtime** | Node.js | Version 22.x LTS | Lingkungan eksekusi server & build pipeline | Stabilitas jangka panjang dan latensi I/O prediktif |
| **Language System** | TypeScript | Version 5.7+ | Verifikasi tipe data statis waktu kompilasi | Eliminasi *undefined runtime exception* antar-domain |
| **Application Framework** | Next.js (App Router) | Version 16.x | Server Components, Server Actions, Route Handlers | Arsitektur monolit modern tanpa *overhead* gateway REST terpisah |
| **Styling Engine** | Tailwind CSS | Version 4.x | Penataan visual responsif berbasis utilitas | Kompilasi performa tinggi tanpa *runtime JavaScript bundle* |
| **Component Primitives** | shadcn/ui (Radix UI) | Current Stable | Primitif dialog, sheet, dropdown, dan menu aksesibel | Primitif *headless in-tree* sesuai standar W3C WCAG 2.1 AA |
| **Iconography Engine** | Lucide React | Version 1.x | Ikon navigasi, status chip, dan pemicu aksi | Format SVG ringan dengan dukungan *tree-shaking* |
| **High-Density Data Grid** | TanStack Table | Version 8.x | Pengurutan tabel, filter rombel, dan paginasi data | Manajemen state tabular tanpa memicu *re-render* kanvas induk |
| **Client Form Manager** | React Hook Form | Version 7.x | Manajemen formulir tak terkontrol (*uncontrolled inputs*) | Efisiensi memori tinggi saat input nilai dan presensi massal |
| **Schema Validation** | Zod | Version 3.x | Validasi form klien dan Server Action boundaries | Inferensi tipe statis dua arah dari skema validasi runtime |
| **Relational Database** | Neon (Serverless PostgreSQL) | PostgreSQL 16+ | Persistensi data relasional, kunci asing, dan integritas ACID | Integritas transaksi ACID dengan pencadangan terkelola |
| **Connection Pooling** | Neon Connection Pooler | Transaction Mode | Manajemen antrean koneksi basis data serverless | Pencegahan kehabisan slot koneksi saat akses presensi serentak |
| **Database ORM** | Drizzle ORM | Version 0.45+ (`drizzle-kit 0.31+`) | *Query builder* tipe-aman dan migrasi SQL deklaratif | *Zero runtime overhead* tanpa penalti *serverless cold start* |
| **Session Authentication** | Clerk (`@clerk/nextjs`) | Managed Auth Engine | Sesi cookie aman dan integrasi klaim peran RBAC | Manajemen identitas dan sesi aman terpadu |
| **Cold Document Archive** | Cloudflare R2 | S3-Compatible API | Penyimpanan arsip berkas lampiran admisi lampau | Penyimpanan objek terdistribusi tanpa biaya transfer data keluar |
| **Ingress Rate Limiter** | Upstash Redis | REST Redis API | Pembatasan frekuensi pengiriman form publik `/admission` | Perlindungan memori basis data dari serangan pengisian massal |
| **Bot Protection Shield** | Cloudflare Turnstile | Managed Challenge API | Verifikasi pengguna manusia pada formulir pendaftaran | Alternatif CAPTCHA modern yang menjaga privasi pengguna |
| **Application Cloud Host** | Vercel Platform | Production Edge Serverless | Jalur build otomatis, CDN global, dan rilis edge | Ketersediaan tinggi tanpa pemeliharaan server fisik mandiri |
| **Unit & Integration Runner** | Vitest | Vite-Native Runner | Pengujian kalkulasi nilai dan transaksi basis data | Eksekusi paralel multi-thread cepat tanpa penalti transpiler |
| **Browser Automation Engine** | Playwright | Headless Chromium & WebKit | Pengujian simulasi peramban alur presensi & admisi | Otomasi lintas platform dengan mekanisme *auto-waiting* bawaan |
| **Version Control & CI** | GitHub Actions | Ubuntu Standard Runner | Repositori kode, proteksi branch, dan pipeline CI | Eksekusi otomatis seluruh gerbang verifikasi sebelum rilis |
| **Operational Telemetry** | Slack Webhook | Webhook API Specification | Log rilis produksi dan laporan insiden darurat | Notifikasi otomatis terpusat ke kanal `#albirru-project-stream` |
---
## 4. Subsystem Domain Architecture and Internal Module Boundaries
| Subsystem Domain | Scope Responsibility | Internal Namespace | Inbound Dependencies | Outbound Exposure |
|---|---|---|---|---|
| **Daily Attendance Tracking** | Sesi presensi rombel, pencatatan kehadiran harian, dan ringkasan | `attendance` | Rombongan belajar dan profil siswa dari `identity` | Rekapitulasi presensi harian ke `guardian` |
| **Grading and Academic Reporting** | Konfigurasi bobot nilai, input nilai, dan pembekuan buku rapor | `grading` | Data siswa aktif dari modul `identity` | Artefak rapor yang telah disahkan ke `guardian` |
| **Guardian Portal** | Tampilan profil siswa, pemantauan presensi, dan akses unduh rapor | `guardian` | Data presensi dari `attendance` dan rapor dari `grading` | Khusus antarmuka pengguna wali murid (read-only) |
| **Roster and Identity Allocation** | Profil civitas, direktori master, pembagian rombel, dan tahun ajaran | `identity` | Data calon siswa baru terverifikasi dari `admissions` | Referensi data profil ke `attendance` dan `grading` |
| **Public Information and Admission** | Beranda profil sekolah dan formulir pendaftaran siswa baru mandiri | `admissions` | Tidak memiliki dependensi inbound | Entitas calon siswa terverifikasi ke `identity` |
---
## 5. Canonical Directory Structure and Import Rules
### 5.1 Repository File Tree Layout
```plain text
albirru-sis-web/
├── .github/workflows/ci.yml               # Pipeline CI pengujian dan build otomatis
├── docs/                                  # Registri spesifikasi rekayasa in-tree
│   ├── 01-product-requirements-specification.md
│   ├── 02-software-architecture-and-technical-design.md
│   ├── 03-relational-database-specification.md
│   ├── 04-application-route-and-mutation-contract.md
│   ├── 05-visual-design-system-specification.md
│   ├── 06-application-layout-and-navigation-architecture.md
│   ├── 07-user-interface-component-anatomy-specification.md
│   ├── 08-landing-page-view-architecture.md
│   ├── 09-architecture-decision-records.md
│   ├── 10-quality-assurance-and-verification-plan.md
│   └── 11-operational-runbook-and-incident-procedures.md
├── public/                                # Aset statis publik
├── src/
│   ├── app/                               # Rute halaman Next.js App Router
│   │   ├── (auth)/authentication/sign-in/ # Rute login lintas peran
│   │   ├── (portal)/portal/               # Shell portal terproteksi otorisasi
│   │   │   ├── admin/                     # Rute kerja administrator
│   │   │   ├── instructor/                # Rute kerja instruktur
│   │   │   └── guardian/                  # Rute kerja wali murid
│   │   ├── (public)/                      # Rute web publik unauthenticated
│   │   │   ├── admission/                 # Portal admisi dan pelacakan status
│   │   │   └── page.tsx                   # Beranda publik profil sekolah
│   │   └── api/health/route.ts            # Endpoint health check & keep-alive cron
│   ├── components/                        # Primitif UI bersama (shadcn/ui, layout, tables)
│   ├── db/                                # Skema deklaratif Drizzle dan berkas migrasi
│   ├── lib/                               # Utilitas inti dan konfigurasi client adapter (Neon, Upstash, Clerk)
│   └── modules/                           # Modul logika modular monolit terisolasi
│       ├── attendance/                    # actions.ts, components/, service.ts, types.ts
│       ├── grading/                       # actions.ts, components/, service.ts, types.ts
│       ├── guardian/                      # actions.ts, components/, service.ts, types.ts
│       ├── identity/                      # actions.ts, components/, service.ts, types.ts
│       └── admissions/                    # actions.ts, components/, service.ts, types.ts
├── drizzle.config.ts                      # Konfigurasi migrasi Drizzle ORM
├── next.config.ts                         # Konfigurasi kompilasi Next.js
├── package.json                           # Manifes dependensi Node.js
├── tailwind.config.ts                     # Konfigurasi token visual Tailwind CSS
└── tsconfig.json                          # Aturan ketat compiler TypeScript
```
### 5.2 Module Interaction Guardrails
- **Isolasi Impor Silang:** Modul pada `src/modules/attendance/` dilarang mengimpor implementasi internal dari `src/modules/grading/`. Integrasi lintas domain wajib melalui kontrak publik antarmuka yang diekspos melalui `src/modules/{domain}/service.ts`.
- **Konsumsi Bersama:** Modul internal berhak mengonsumsi utilitas global `src/lib/`, komponen antarmuka bersama `src/components/`, dan skema basis data `src/db/`.
- **Validasi Gerbang Server Actions:** Seluruh berkas `actions.ts` wajib memvalidasi muatan parameter menggunakan skema Zod sebelum meneruskannya ke fungsi logika domain di `service.ts`.
## 6. Access Control and Technical Execution Constraints
### 6.1 Role-Based Boundary Enforcement
| **Canonical System Role** | **Session Scope** | **Database Access Policy** | **Permitted Route Scope** |
|---|---|---|---|
| **System Administrator** | Hak institusional penuh | Akses baca dan tulis penuh pada semua skema data | Rute internal bebas (`/portal/admin/*`) |
| **Instructor** | Rombel dan mata pelajaran penugasan | Izin tulis terbatas pada baris rombel dan mata pelajaran yang diampu | Rute instruktur (`/portal/instructor/*`) |
| **Guardian** | Hak ikatan wali-murid terverifikasi | Izin baca terbatas secara eksklusif pada data anak terhubung | Rute mandiri wali (`/portal/guardian/*`) |
| **Public Guest** | Sesi anonim tanpa login | Izin baca pada entitas publik; izin tulis pada pendaftaran admisi | Rute publik (`/`, `/admission/*`) |
### 6.2 Performance and Latency Budgets
- **Edge Static Delivery:** Rute statis publik tersaji di bawah ambang batas 200 milidetik.
- **Server Action Mutation:** Mutasi data transaksional (penguncian presensi, simpan nilai) selesai di bawah 800 milidetik.
- **Interactive Data Grid Hydration:** Kisi data tabular presensi dan nilai interaktif penuh di bawah 1000 milidetik pada jaringan standar.
### 6.3 Transactional and Retention Integrity
- **Atomic Persistence:** Penguncian presensi harian dan pembukuan nilai dieksekusi di dalam satu blok transaksi atomik.
- **Zero Hard Delete:** Penghapusan baris fisik dilarang keras untuk data civitas, presensi, dan rapor; penonaktifan menggunakan penanda status logis.
- **Audit Columns:** Seluruh entitas tabel wajib memelihara kolom rekam jejak: `created_at`, `updated_at`, dan identitas akun pelaksana mutasi.