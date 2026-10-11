# SD Al-Birru School Information System (`albirru-sis-web`)

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45+-C5F74F?style=flat-square&logo=drizzle)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon-Serverless_PostgreSQL-00E599?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Production_Edge-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **Platform Tata Kelola Institusi Resmi SD Al-Birru Tahfidzul Qur'an**  
> Dibangun dengan arsitektur **Modern Modular Monolith**, desain visual **Fine-Line Boxy Brutalism**, penegakan tipe data *end-to-end* TypeScript, serta integrasi infrastruktur *serverless cloud* performa tinggi berlatensi rendah.

---

## 🌐 Lingkungan & Rilis Resmi (*Live Environments*)

Sistem dideploy secara otomatis melalui pipa integrasi berkelanjutan Vercel Edge Network:

| Lingkungan (*Environment*) | Target Cabang Git | Alamat URL Resmi | Status Infrastruktur |
| :--- | :--- | :--- | :--- |
| **Produksi (*Production*)** | `main` | [albirru.mafrilearth.com](https://albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |
| **Prapraproduksi (*Staging*)** | `staging` | [staging.albirru.mafrilearth.com](https://staging.albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |
| **Pengembangan (*Development*)** | `dev` | [dev.albirru.mafrilearth.com](https://dev.albirru.mafrilearth.com) | ![Status](https://img.shields.io/badge/Status-READY-success?style=flat-square) |

---

## 🏛️ Identitas & Legalitas Statutori Institusi

- **Nama Institusi:** SD Al-Birru Tahfidzul Qur'an
- **Nomor Pokok Sekolah Nasional (NPSN):** `70010111`
- **Badan Sertifikasi Akreditasi:** Badan Akreditasi Nasional (BAN-S/M)
- **Yayasan Penyelenggara:** Yayasan Pendidikan Al-Birru
- **Bahasa Pengantar:** Bahasa Indonesia & Pengenalan Bahasa Inggris Formal

---

## 📦 Modul Fungsional Utama (*Domain Modules*)

Logika bisnis dikelompokkan secara independen pada direktori `src/modules/{domain}/` dengan komunikasi antarmuka publik yang terisolasi ketat:

1. **Master Identity & RBAC Provisioning (`src/modules/identity/`)**  
   Penyediaan akun terpusat civitas sekolah (Administrator, Instruktur/Guru, Wali Murid, Siswa) dengan kunci UUIDv7 dan validasi NIK unik.
2. **Penerimaan Peserta Didik Baru / PPDB (`src/modules/admissions/`)**  
   Formulir pendaftaran publik daring berpelindung Cloudflare Turnstile (verifikasi bot) dan Upstash Redis (pembatasan frekuensi 5 submisi / 15 menit).
3. **Presensi Harian Rombongan Belajar (`src/modules/attendance/`)**  
   Pencatatan kehadiran kelas harian sekuensial (Hadir, Sakit, Izin, Alpa) dengan penguncian mutasi (*immutability lock*) pascafinalisasi.
4. **Komputasi Nilai Akademik & Rapor (`src/modules/grading/`)**  
   Kalkulasi nilai terbobot desimal deterministik (presisi 100%) dan pembekuan buku rapor semesteran.
5. **Portal Mandiri Wali Murid (`src/modules/guardian/`)**  
   Akses informasi riwayat presensi harian, grafik capaian akademik, dan lembar rapor digital putra-putri secara terisolasi.

---

## 📚 Peta Dokumentasi In-Tree (*Single Source of Truth*)

Repositori menerapkan dokumentasi spesifikasi in-tree pada direktori `/docs/` sebagai acuan mutlak operasional sistem:

| Berkas Spesifikasi | Ruang Lingkup & Tanggung Jawab | Status Siklus Hidup |
| :--- | :--- | :--- |
| **[01-product-requirements-specification.md](./docs/01-product-requirements-specification.md)** | Kebutuhan bisnis, matriks izin RBAC, modul MVP, dan anggaran batas latensi. | Disetujui (*Approved*) |
| **[02-software-architecture-and-technical-design.md](./docs/02-software-architecture-and-technical-design.md)** | Arsitektur Modular Monolith, tumpukan teknologi, dan batasan Server Actions. | Disetujui (*Approved*) |
| **[03-relational-database-specification.md](./docs/03-relational-database-specification.md)** | Skema DDL lengkap Drizzle ORM, UUIDv7, indeks kunci asing, dan aturan audit. | Disetujui (*Approved*) |
| **[04-application-route-and-mutation-contract.md](./docs/04-application-route-and-mutation-contract.md)** | Kontrak amplop `ActionResponse`, validasi skema Zod, dan limit Upstash Redis. | Disetujui (*Approved*) |
| **[05-visual-design-system-specification.md](./docs/05-visual-design-system-specification.md)** | Skala spasial 8px, rasio tipografi Major Third (1.250), dan token semantik WCAG. | Disetujui (*Approved*) |
| **[06-application-layout-and-navigation-architecture.md](./docs/06-application-layout-and-navigation-architecture.md)** | Tiga viewport shell (Public, Auth, Portal) dan dimensi layout navigasi. | Disetujui (*Approved*) |
| **[07-user-interface-component-anatomy-specification.md](./docs/07-user-interface-component-anatomy-specification.md)** | Anatomi komponen visual, mikrokopi statutori, dan mesin state interaktif. | Disetujui (*Approved*) |
| **[08-landing-page-view-architecture.md](./docs/08-landing-page-view-architecture.md)** | Dekonstruksi 6 seksi beranda publik dan mikrokopi legalitas NPSN/BAN-S/M. | Disetujui (*Approved*) |
| **[09-architecture-decision-records.md](./docs/09-architecture-decision-records.md)** | Kronologi catatan keputusan arsitektur (ADR-001 hingga ADR-005). | Disetujui (*Approved*) |
| **[10-quality-assurance-and-verification-plan.md](./docs/10-quality-assurance-and-verification-plan.md)** | Piramida pengujian, skenario batas, dan gerbang mutu CI berkelanjutan. | Disetujui (*Approved*) |
| **[11-operational-runbook-and-incident-procedures.md](./docs/11-operational-runbook-and-incident-procedures.md)** | Tata kelola percabangan Git, runbook darurat, mitigasi kuota, dan orkestrasi agen. | Disetujui (*Approved*) |

---

## 🛠️ Tumpukan Teknologi & Arsitektur Monorepo (*Technology Stack & Monorepo Architecture*)

Repositori ini diorganisasikan sebagai **Turborepo Multi-Package Monorepo** (terinspirasi dari arsitektur *next-forge* tingkat enterprise) dengan pembagian workspace:

### Aplikasi (*Applications*)
- **`apps/web` (`@albirru/web`):** Aplikasi web publik, pendaftaran PPDB daring, arsip warta, galeri, dan profil statutori institusi SD Al-Birru.
- **`apps/portal` (`@albirru/portal`):** Sistem Informasi Sekolah (SIS) internal untuk modul administrasi terpusat (Master Identity, Presensi Siswa, Rekapitulasi Penilaian & Rapor Akademik, dan Portal Wali Murid).

### Paket Bersama (*Shared Packages*)
- **`packages/database` (`@albirru/database`):** Pustaka basis data bersama berisikan skema DDL Drizzle ORM, migrasi SQL statis terkelola, dan koneksi *connection pooler* PostgreSQL.
- **`packages/design-system` (`@albirru/design-system`):** Pustaka UI design system terstandarisasi (primitif Radix UI, tema Fine-Line Boxy Brutalism, utilitas Tailwind CSS, hooks, dan ThemeProvider).
- **`packages/eslint-config` (`@albirru/eslint-config`):** Aturan linting terpusat lintas monorepo (`base.js` dan `nextjs.js`).
- **`packages/typescript-config` (`@albirru/typescript-config`):** Konfigurasi kompilasi TypeScript modular (`base.json`, `nextjs.json`, `react-library.json`).

### Tumpukan Teknologi Resmi Terkurasi (*Zero Redundancy Stack*)

| Lapisan / Fungsi | Teknologi Terpilih |
| :--- | :--- |
| **Bahasa Pemrograman** | TypeScript 5 (Strict Mode) |
| **Package Manager** | [pnpm (Workspaces)](https://pnpm.io/) |
| **Monorepo Engine** | [Turborepo](https://turbo.build/repo) |
| **Framework Utama** | [Next.js 16](https://nextjs.org/) (App Router, RSC) |
| **Library UI Core** | React 19 + React DOM |
| **Platform Hosting & Serverless** | [Vercel](https://vercel.com/) |
| **DNS & Proteksi Jaringan** | Cloudflare |
| **Basis Data Relasional** | Neon (Serverless PostgreSQL) |
| **Database Driver** | `postgres` (porsager/postgres) |
| **ORM & Migrations** | Drizzle ORM + Drizzle Kit |
| **Autentikasi & Akun** | Clerk (`@clerk/nextjs`) |
| **Cache & Rate Limiting** | Upstash (`@upstash/ratelimit`, `@upstash/redis`) |
| **Server Actions Wrapper** | ZSA (`zsa`, `zsa-react`) |
| **Validasi Skema** | Zod (`zod`) |
| **Form Controller** | React Hook Form + `@hookform/resolvers` |
| **CSS Framework** | Tailwind CSS v4 |
| **Primitive Headless UI** | Radix UI |
| **Sistem Komponen** | shadcn/ui |
| **Class Merging Utility** | `clsx` + `tailwind-merge` |
| **Variant Authority** | `class-variance-authority` |
| **Animasi** | Motion (`motion`) |
| **Ikon** | Lucide React (`lucide-react`) |
| **Komponen Layout** | `react-resizable-panels` |
| **Komponen Carousel** | Embla Carousel (`embla-carousel-react`) |
| **Komponen Input Khusus** | `input-otp` |
| **Komponen Date Picker** | `react-day-picker` |
| **Komponen Command Palette** | cmdk (`cmdk`) |
| **Grafik & Visualisasi** | Recharts (`recharts`) |
| **Dark/Light Mode Theme** | `next-themes` |
| **Mesin Pencari In-Memory** | Orama (`@orama/orama`) |
| **Unique ID Generator** | UUID v7 (`uuidv7`) |
| **Manipulasi Tanggal** | date-fns (`date-fns`) |
| **Layanan Kirim Email** | Resend (`resend`) |
| **Komponen Desain Email** | React Email (`@react-email/components`) |
| **Error & Crash Monitoring** | Sentry (`@sentry/nextjs`) |
| **Product Analytics & Flags** | PostHog (`posthog-js`) |
| **Web Vitals & Performance** | `@vercel/speed-insights` + `@vercel/analytics` |
| **Secrets Management** | Doppler |
| **Linter & Formatter** | Biome (`@biomejs/biome`) |
| **Automasi Git Pre-commit** | Husky + Lint-Staged |
| **Unit & Integration Test** | Vitest (`vitest`) |
| **End-to-End Test** | Playwright (`playwright`) |
| **Dokumentasi UI** | Storybook (`storybook`) |
| **Visual Regression Platform**| Chromatic |
| **Version Control & CI/CD** | GitHub + GitHub Actions |

---

## 🚀 Panduan Memulai (*Getting Started*)

### 1. Prasyarat Sistem
- **Node.js:** Versi `>= 20.18.0` (Direkomendasikan `v22.x LTS`)
- **Package Manager:** `pnpm` versi `12.x`
- **PostgreSQL Database:** Instans aktif Serverless PostgreSQL (Neon)

### 2. Kloning Repositori & Instalasi Dependensi
```bash
# Kloning repositori
git clone https://github.com/Mafrilearth/albirru-school-management-monorepo.git
cd albirru-school-management-monorepo

# Sinkronisasi ke cabang pengembangan dev
git checkout dev

# Instalasi paket dependensi via pnpm
pnpm install
```

### 3. Konfigurasi Variabel Lingkungan
Salin templat konfigurasi dan sesuaikan kredensial lokal:
```bash
cp .env.example .env.local
```

Pastikan variabel-variabel kunci berikut terisi pada `.env.local`:
```ini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://neondb_owner:<password>@ep-...neon.tech/neondb?sslmode=require
```

### 4. Perintah Operasional Monorepo & Basis Data
```bash
# Menjalankan server pengembangan (Next.js via Turborepo & pnpm)
pnpm run dev

# Menjalankan kompilasi produksi seluruh workspace
pnpm run build

# Menjalankan linter & formatting via Biome
pnpm run check
pnpm run format

# Memeriksa validasi tipe TypeScript di seluruh workspace
pnpm run check-types

# Menjalankan pengujian otomatis (Vitest)
pnpm run test

# Menghasilkan berkas migrasi SQL Drizzle
pnpm run db:generate

# Menjalankan Drizzle Studio untuk inspeksi visual basis data
pnpm run db:studio
```
Buka peramban pada alamat [http://localhost:3000](http://localhost:3000) untuk antarmuka web.

---

## 🌿 Tata Kelola Percabangan Git (*Branch Governance*)

Repositori menerapkan regulasi resmi berbasis **Trunk-Based Development** dan **GitLab/GitHub Flow** yang mengikat seluruh kontributor:

### 1. Taksonomi Cabang Permanen
- `main`: Lingkungan Produksi resmi (`albirru.mafrilearth.com`).
- `staging`: Lingkungan Prapraproduksi (`staging.albirru.mafrilearth.com`).
- `dev`: Lingkungan Integrasi Pengembangan internal (`dev.albirru.mafrilearth.com`).
- `dr`, `uat`, `sandbox`: Lingkungan pemulihan bencana, pengujian penerimaan sekolah, dan integrasi mitra.

### 2. Konvensi Penamaan Cabang Efemeral
Seluruh cabang kerja wajib berpangkal dari `dev` dan menggunakan notasi huruf kecil kebab-case:
```
feat/<lingkup>/<id-tiket>-<deskripsi>     # Fitur baru domain
fix/<lingkup>/<id-tiket>-<deskripsi>      # Perbaikan cacat kode
docs/<id-tiket>-<deskripsi>               # Pembaruan dokumentasi
hotfix/<id-tiket>-<deskripsi>             # Perbaikan darurat produksi (dari main)
```

### 3. Protokol Alur Kerja Kontributor
```bash
# 1. Sinkronisasi hulu
git checkout dev && git pull --ff-only origin dev

# 2. Inisiasi cabang kerja efemeral
git checkout -b feat/grading/DEV-201-report-card dev

# 3. Perekaman komit atomik (Conventional Commits 1.0.0)
git commit -m "feat(grading): implement report card calculation formula"

# 4. Rekonsiliasi riwayat linear rebase
git fetch origin && git rebase origin/dev

# 5. Publikasi ke repositori peladen
git push origin feat/grading/DEV-201-report-card

# 6. Buka Pull Request ke dev (Metode integrasi: Squash and Merge)
```

---

## 🧪 Parameter Gerbang Kendali Mutu (*Quality Gates*)

Sebelum penggabungan kode disetujui, perubahan wajib lolos verifikasi mutlak:

```bash
# Verifikasi tipe statis TypeScript (Wajib 0 error)
npx tsc --noEmit

# Audit penataan dan aturan kode ESLint
npm run lint

# Eksekusi seluruh rangkaian pengujian otomatis
npm run test
```

- **Uji Unit & Integrasi:** 100% Lolos
- **Cakupan Pengujian (*Coverage*):** Ambang batas minimal 80%
- **Tinjauan Kode Manusia:** Minimal 1 persetujuan sah (*Approved PR*)
- **Strategi Integrasi Akhir:** *Squash and Merge*

---

## 🤝 Kontribusi & Standar Kode

Kami menyambut kontribusi perbaikan dan pengembangan fitur baru. Silakan baca dokumen acuan [AGENTS.md](./AGENTS.md) dan [02-software-architecture-and-technical-design.md](./docs/02-software-architecture-and-technical-design.md) untuk memahami batasan *hard invariants* arsitektur (penggunaan UUIDv7, larangan SQL DELETE fisik, Server Actions envelope `ActionResponse`, dan kepatuhan WCAG 2.1 AA).

---

## 📜 Lisensi & Hak Cipta

Didistribusikan di bawah lisensi resmi [MIT License](https://opensource.org/licenses/MIT).  
Hak Cipta © 2026 **SD Al-Birru Tahfidzul Qur'an** & **Yayasan Pendidikan Al-Birru**. Seluruh hak dilindungi undang-undang.
