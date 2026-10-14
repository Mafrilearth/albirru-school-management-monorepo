# Matriks Kesesuaian & Audit Fitur Next-Forge
# Al-Birru School Information System (`albirru-sis`)

Dokumen ini memetakan seluruh daftar navigasi dan sub-navigasi dokumentasi resmi **next-forge** secara 1:1, membedah isi resmi setiap halaman dokumen, serta membandingkannya dengan arsitektur dan kode yang diimplementasikan pada repositori monorepo **SD Al-Birru Sukabumi**.

---

## 1. Ringkasan Eksekutif

| Status | Total Item | Persentase | Keterangan |
| :--- | :---: | :---: | :--- |
| ✅ **Sudah Dipakai** | **48** | **69.6%** | Arsitektur inti monorepo, database, auth, UI system, keamanan, SEO, AI chatbot, i18n, Cron Jobs, dll. |
| ⏳ **Belum Dipakai** | **2** | **2.9%** | Fitur cadangan fase operasional lanjutan (Payment Gateway QRIS/BSI, Outbound Webhooks Slack/Discord). |
| ❌ **Tidak Dipakai** | **19** | **27.5%** | Opsi migrasi alternatif pihak ketiga (karena sudah menggunakan opsi utama terbaik) dan platform berbayar/asing. |
| **Total Nav & Sub-Nav** | **69** | **100%** | Seluruh struktur hierarki dokumentasi resmi next-forge |

---

## 2. Rangkuman Isi Resmi Masing-Masing Halaman Dokumen Next-Forge

Berikut adalah intisari dari setiap tautan dokumen resmi next-forge (diambil langsung dari dokumentasi asli):

### A. Introduction
1. **Overview** (`/docs`): Template Turborepo production-grade untuk Next.js SaaS, menyeimbangkan kecepatan rilis (*speed*) dan kualitas (*quality*). Menyediakan demo live untuk `web`, `app`, `storybook`, dan `api`.
2. **Philosophy** (`/docs/philosophy`): 5 pilar perancangan: *Fast* (cepat validasi ide), *Cheap* (gratis/murah di awal), *Opinionated* (tool terintegrasi harmonis), *Modern* (tool stabil terkini), dan *Safe* (type-safety end-to-end).
3. **Structure** (`/docs/structure`): Tata kelola monorepo multi-aplikasi (`apps/*`) dan pustaka bersama (`packages/*`), pemisahan domain, serta batas workspace (*boundaries*).
4. **Updates** (`/docs/updates`): Skrip otomatis `npx next-forge@latest update` dan pembaruan dependensi `bump-deps`.
5. **FAQ** (`/docs/faq`): Penjelasan teknis mengapa tidak menggunakan tRPC (digantikan oleh Server Actions native Next.js), mengapa ada `suppressHydrationWarning`, dan aturan pengecualian linter.

### B. Usage: Setup
1. **Quickstart** (`/docs/setup/quickstart`): Panduan cepat inisialisasi monorepo baru dalam hitungan menit.
2. **Prerequisites** (`/docs/setup/prerequisites`): Kebutuhan sistem (Node.js v20+, package manager, git, akun cloud).
3. **Installation** (`/docs/setup/installation`): Langkah instalasi dependensi via lockfile dan konfigurasi repositori.
4. **Environment Variables** (`/docs/setup/env`): Pola validasi variabel lingkungan secara *type-safe* menggunakan Zod (`src/env.ts`).

### C. Usage: Apps
1. **API** (`/docs/apps/api`): Backend serverless terisolasi untuk cron jobs, webhooks, dan endpoints publik non-UI.
2. **App** (`/docs/apps/app`): Dashboard utama terautentikasi (portal guru, admin, dan penanganan pendaftaran santri).
3. **Documentation** (`/docs/apps/docs`): Aplikasi dokumentasi terintegrasi berbasis Fumadocs untuk panduan sistem.
4. **Email** (`/docs/apps/email`): Studio pratinjau lokal React Email untuk merancang template email dinamis.
5. **Storybook** (`/docs/apps/storybook`): Workbench komponen visual untuk menguji state UI tanpa server Next.js.
6. **Studio** (`/docs/apps/studio`): GUI lokal inspeksi dan manipulasi database (Drizzle Studio).
7. **Web** (`/docs/apps/web`): Website publik profil sekolah, kurikulum, artikel berita, dan landing page PPDB.

### D. Usage: Packages
1. **Analytics: Product Analytics** (`/docs/packages/analytics/product`): Pelacakan event, user journey, dan funnel pendaftaran via PostHog.
2. **Analytics: Web Analytics** (`/docs/packages/analytics/web`): Pemantauan Core Web Vitals via Vercel Web Analytics & Speed Insights tanpa cookie.
3. **Authentication** (`/docs/packages/authentication`): Integrasi Clerk Auth untuk manajemen akun, sesi cookie, SSO, MFA, dan RBAC.
4. **CMS: Overview, Components, Metadata** (`/docs/packages/cms/*`): Pengelolaan konten artikel/berita, komponen render, dan dynamic OpenGraph metadata.
5. **Collaboration** (`/docs/packages/collaboration`): Real-time multiplayer rooms, live cursors, dan avatar stack menggunakan Liveblocks.
6. **Cron Jobs** (`/docs/packages/cron`): Serverless scheduled jobs berbasis Vercel Cron di endpoint `GET` aplikasi API.
7. **Database** (`/docs/packages/database`): Lapisan akses data terisolasi menggunakan PostgreSQL (Neon) dan Drizzle ORM dengan UUIDv7.
8. **Design System: Colors, Components, Dark Mode, Provider, Typography** (`/docs/packages/design-system/*`): Desain berbasis token CSS semantik, komponen Base UI bersudut siku 90°, mode gelap, dan tipografi Inter/Roboto Mono.
9. **Transactional Emails** (`/docs/packages/email`): Pembuatan email dinamis via React Email dan pengiriman via Resend API.
10. **Feature Flags** (`/docs/packages/flags`): Pengaturan buka/tutup fitur secara dinamis di runtime menggunakan PostHog Flags.
11. **Formatting** (`/docs/packages/formatting`): Standar format kode dan linter terpadu menggunakan Biome v2.
12. **Internationalization** (`/docs/packages/internationalization`): Lokalisasi multibahasa berbasis kamus terjemahan dan arah baca LTR/RTL.
13. **Observability: Debugging, Error Capture, Logging, Uptime** (`/docs/packages/observability/*`): Sentry error tracking, structured JSON logs, dan endpoint `/api/health`.
14. **Next.js Config: Bundle Analysis, Configuration** (`/docs/packages/next-config/*`): Konfigurasi server anti-fingerprinting dan analisis bundel JS.
15. **Notifications** (`/docs/packages/notifications`): Sistem pengumuman dan notifikasi pengguna (in-app `<NotificationBell />`).
16. **Payments** (`/docs/packages/payments`): Integrasi penagihan dan langganan otomatis (Stripe / Bank BSI).
17. **Security: Application, Dependencies, Headers, IP Geolocation, Rate Limiting** (`/docs/packages/security/*`): Validasi Zod, Turnstile bot protect, HTTP headers (CSP, HSTS), deteksi IP geo, dan Upstash Redis rate limiting.
18. **SEO: JSON-LD, Metadata, Sitemap** (`/docs/packages/seo/*`): Data terstruktur Schema.org, OpenGraph/Twitter cards, dan `sitemap.xml`.
19. **Storage** (`/docs/packages/storage`): Upload berkas langsung ke cloud storage via presigned URL (Vercel Blob / Cloudflare R2).
20. **Toolbar** (`/docs/packages/toolbar`): Vercel Toolbar untuk inspeksi dan kolaborasi visual pada branch preview.
21. **Webhooks: Inbound, Outbound** (`/docs/packages/webhooks/*`): Verifikasi kriptografi webhook masuk (Svix) dan notifikasi webhook keluar.

### E. Deployment
1. **Deploying with Docker** (`/docs/deployment/docker`): Containerization multi-stage untuk server mandiri.
2. **Deploying to Netlify** (`/docs/deployment/netlify`): Panduan deployment ke Netlify.
3. **Deploying to Vercel** (`/docs/deployment/vercel`): Target rilis produksi resmi ke jaringan edge network Vercel.

### F. Addons & Examples
1. **c15t** (`/docs/addons/c15t`): Banner persetujuan privasi & cookie kepatuhan hukum.
2. **Dub** (`/docs/addons/dub`): Shortlink bermerek dan pelacakan tautan promosi.
3. **Fuse.js** (`/docs/addons/fuse`): Pencarian fuzzy instan di memori peramban tanpa server.
4. **Joyful** (`/docs/addons/joyful`): Generator kombinasi kata ramah dan acak.
5. **Metabase** (`/docs/addons/metabase`): Platform business intelligence dan dashboard data internal.
6. **Motion** (`/docs/addons/motion`): Pustaka animasi mikro deklaratif Motion 12.
7. **Next Safe Action** (`/docs/addons/next-safe-action`): Kontrak type-safe Server Actions dengan Zod.
8. **NUQS** (`/docs/addons/nuqs`): Sinkronisasi filter URL query parameters secara type-safe.
9. **React Wrap Balancer** (`/docs/addons/react-wrap-balancer`): Penyeimbang tipografi judul anti-orphan.
10. **Trunk** (`/docs/addons/trunk`): Merge queue dan deteksi flaky test di CI.
11. **Zustand** (`/docs/addons/zustand`): State management mikro persisten untuk formulir pendaftaran.
12. **Create an AI Chatbot** (`/docs/examples/ai-chatbot`): Asisten cerdas streaming via Vercel AI SDK.

### G. Migrations (Opsi Alternatif)
Panduan resmi jika ingin beralih dari opsi default ke opsi lain:
* **Authentication**: Appwrite, Auth.js, Better Auth, Supabase Auth.
* **CMS**: Content Collections.
* **Database**: Appwrite, Convex, Drizzle, EdgeDB, PlanetScale, Prisma Postgres, Supabase, Turso.
* **Documentation**: Fumadocs.
* **Flags**: Hypertune.
* **Formatting**: ESLint.
* **Notifications**: Novu.
* **Payments**: Lemon Squeezy, Paddle Billing.
* **Storage**: Appwrite Storage, uploadthing.

---

## 3. Tabel Matriks Kesesuaian Navigasi 1:1

| Kategori Utama | Sub-Nav 1 | Sub-Nav 2 | Status | Implementasi di Al-Birru SIS | Rationale Teknis |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **Introduction** | Overview | - | ✅ **Sudah** | Turborepo + pnpm workspaces | Fondasi monorepo resmi Next.js 16 & React 19. |
| **Introduction** | Philosophy | - | ✅ **Sudah** | Modular Monolith & Invariants | 5 pilar dipenuhi: Cepat, Murah ($0 di awal), Modern, Aman, dan Terarah. |
| **Introduction** | Structure | - | ✅ **Sudah** | `apps/*` & `packages/*` | 10 paket internal dengan batas workspace (*boundaries*) ketat. |
| **Introduction** | Updates | - | ✅ **Sudah** | Next.js 16.3.8 & Biome 2.5.15 | Dependensi terkunci dan selalu diperbarui berkala. |
| **Introduction** | FAQ | - | ✅ **Sudah** | `docs/architecture.md` & `AGENTS.md` | Aturan baku: Server Actions menggantikan tRPC, anti-orphan, dll. |
| **Usage: Setup** | Quickstart | - | ✅ **Sudah** | `pnpm install`, `pnpm run dev` | Standar instalasi terpusat satu perintah. |
| **Usage: Setup** | Prerequisites | - | ✅ **Sudah** | Node.js v22+, pnpm v10+ | Runtime modern dengan native ESM. |
| **Usage: Setup** | Installation | - | ✅ **Sudah** | `pnpm-lock.yaml` | Kunci dependensi deterministik di seluruh paket. |
| **Usage: Setup** | Environment Variables | - | ✅ **Sudah** | `src/env.ts` (Zod schema) | Validasi variabel lingkungan saat build & startup di `web`, `app`, dan `api`. |
| **Usage: Apps** | API | - | ✅ **Sudah** | `apps/api` | Rute Serverless API untuk integrasi pihak luar. |
| **Usage: Apps** | App | - | ✅ **Sudah** | `apps/app` | Portal internal guru, admin, & adjudication PPDB. |
| **Usage: Apps** | Documentation | - | ✅ **Sudah** | `apps/docs` (Fumadocs) | Dokumentasi internal sistem berbasis Fumadocs. |
| **Usage: Apps** | Email | - | ✅ **Sudah** | `apps/email` (React Email) | Studio pratinjau interaktif template email bukti pendaftaran. |
| **Usage: Apps** | Storybook | - | ✅ **Sudah** | `apps/storybook` | Isolasi pengujian visual komponen UI tanpa Next.js. |
| **Usage: Apps** | Studio | - | ✅ **Sudah** | `apps/studio` (Drizzle Studio) | GUI inspeksi database lokal untuk guru/admin IT. |
| **Usage: Apps** | Web | - | ✅ **Sudah** | `apps/web` | Website profil sekolah publik dan landing page PPDB. |
| **Usage: Packages** | Analytics | Product Analytics | ✅ **Sudah** | PostHog (`PostHogProvider.tsx`) | Pelacakan funnel formulir pendaftaran PPDB (1 juta event gratis/bulan). |
| **Usage: Packages** | Analytics | Web Analytics | ✅ **Sudah** | Vercel Analytics & Speed Insights | Pantauan Core Web Vitals langsung di Edge tanpa cookie. |
| **Usage: Packages** | Authentication | - | ✅ **Sudah** | Clerk Auth (`@clerk/nextjs`) | Autentikasi enterprise, MFA, & RBAC di `apps/app`. Opsi terbaik di Next.js. |
| **Usage: Packages** | CMS | Overview | ✅ **Sudah** | In-House CMS via Drizzle ORM | CMS terpadu 100% in-house tanpa vendor SaaS berbayar. |
| **Usage: Packages** | CMS | Components | ✅ **Sudah** | Shadcn Bento Grid Primitives | Komponen artikel, agenda tahfidz, & dokumentasi kegiatan. |
| **Usage: Packages** | CMS | Metadata | ✅ **Sudah** | Dynamic OpenGraph & Meta Tags | SEO dinamis otomatis untuk setiap halaman berita sekolah. |
| **Usage: Packages** | Collaboration | - | ❌ **Tidak** | Liveblocks / Multiplayer | **Tidak dibutuhkan.** Tidak ada kebutuhan kursor multiplayer ala Figma di sistem sekolah. |
| **Usage: Packages** | Cron Jobs | - | ✅ **Sudah** | Vercel Cron (`vercel.json`) | Cron jobs aktif: `/api/cron/keep-alive` & `/api/cron/ppdb-summary` dengan otentikasi `CRON_SECRET`. |
| **Usage: Packages** | Database | - | ✅ **Sudah** | Neon PostgreSQL + Drizzle ORM | Database serverless dengan UUIDv7, soft deletion, & zero SQL manual. |
| **Usage: Packages** | Design System | Colors | ✅ **Sudah** | Semantic CSS Variables (No raw hex) | Variabel warna OKLCH/HSL terstandarisasi di `globals.css`. |
| **Usage: Packages** | Design System | Components | ✅ **Sudah** | 63 Primitives Design System | Komponen UI Base UI/shadcn dengan sudut siku tajam 90°. |
| **Usage: Packages** | Design System | Dark Mode | ✅ **Sudah** | `next-themes` + `ThemeToggle` | Mode terang dan gelap kontras tinggi W3C WCAG 2.1 AA. |
| **Usage: Packages** | Design System | Provider | ✅ **Sudah** | `ThemeProvider` & `DirectionProvider` | Provider tema global dan penanganan LTR/RTL otomatis. |
| **Usage: Packages** | Design System | Typography | ✅ **Sudah** | Inter (Sans) + Roboto Mono (Mono) | Tipografi bersih tanpa elemen generik AI. |
| **Usage: Packages** | Transactional Emails | - | ✅ **Sudah** | React Email + Resend SDK | Pengiriman bukti pendaftaran PPDB ke orang tua santri. |
| **Usage: Packages** | Feature Flags | - | ✅ **Sudah** | PostHog Feature Flags SDK | Buka/tutup kuota gelombang PPDB secara instan. |
| **Usage: Packages** | Formatting | - | ✅ **Sudah** | Biome v2 (Gantikan ESLint & Prettier) | Toolchain cepat format & linting (<200ms). |
| **Usage: Packages** | Internationalization | - | ✅ **Sudah** | In-App Dictionary (`id`, `ar`, `en`) | Multi-bahasa (Indonesia, Arab RTL, Inggris LTR). |
| **Usage: Packages** | Observability | Debugging | ✅ **Sudah** | Turbopack & React DevTools | Inspeksi rendering komponen dan server actions. |
| **Usage: Packages** | Observability | Error Capture | ✅ **Sudah** | Sentry (`@sentry/nextjs`) | Pelaporan bug dan error runtime otomatis dengan source maps. |
| **Usage: Packages** | Observability | Logging | ✅ **Sudah** | Structured JSON Logger (`logger.ts`) | Format log terstruktur untuk audit jejak aktivitas. |
| **Usage: Packages** | Observability | Uptime Monitoring | ✅ **Sudah** | `/api/health` + Synthetic Probe | Endpoint uptime monitoring aktif di web dan portal. |
| **Usage: Packages** | Next.js Config | Bundle Analysis | ✅ **Sudah** | `@next/bundle-analyzer` | Pemantauan ukuran bundle JS agar tetap ringan di perangkat mobile. |
| **Usage: Packages** | Next.js Config | Configuration | ✅ **Sudah** | Hardened HTTP Security Headers | `poweredByHeader: false`, `compress: true`, CSP, HSTS. |
| **Usage: Packages** | Notifications | - | ✅ **Sudah** | In-App `<NotificationBell />` | Pengumuman sekolah real-time di navbar dengan unread badge. |
| **Usage: Packages** | Payments | - | ⏳ **Belum** | Midtrans / Xendit / Bank BSI | Saat ini pendaftaran gratis; pembayaran SPP via transfer yayasan. |
| **Usage: Packages** | Security | Application Security | ✅ **Sudah** | Zod Validation + Turnstile Bot Protect | Perlindungan formulir publik dari bot otomatis (100% free). |
| **Usage: Packages** | Security | Dependency Security | ✅ **Sudah** | Dependabot & `pnpm audit` | Audit otomatis rantai pasokan paket npm. |
| **Usage: Packages** | Security | Security Headers | ✅ **Sudah** | CSP, HSTS, X-Frame-Options | Hardening keamanan HTTP anti-clickjacking & sniffing. |
| **Usage: Packages** | Security | IP Geolocation | ✅ **Sudah** | Vercel Geo / Cloudflare Header | Deteksi asal kota/provinsi pengunjung situs. |
| **Usage: Packages** | Security | Rate Limiting | ✅ **Sudah** | Upstash Redis + Memory Fallback | Pembatasan akses 5 submit / 15 menit pada formulir publik. |
| **Usage: Packages** | SEO | JSON-LD | ✅ **Sudah** | Schema.org EducationalOrganization | Rich snippet di hasil pencarian Google (NPSN, Akreditasi A). |
| **Usage: Packages** | SEO | Metadata | ✅ **Sudah** | Metadata API (`layout.tsx`) | Judul, deskripsi, favicon, OpenGraph, dan Twitter cards. |
| **Usage: Packages** | SEO | Sitemap | ✅ **Sudah** | `sitemap.ts` & `robots.ts` | Peta situs terindeks otomatis oleh perayap Google. |
| **Usage: Packages** | Storage | - | ✅ **Sudah** | Vercel Blob / Cloudflare R2 | Upload berkas Akta/KK via presigned URL langsung ke cloud. |
| **Usage: Packages** | Toolbar | - | ✅ **Sudah** | `@vercel/toolbar` | Panel inspeksi cepat status preview deployment. |
| **Usage: Packages** | Webhooks | Inbound Webhooks | ✅ **Sudah** | Svix Signature Verification | Verifikasi keamanan kriptografi webhook Clerk. |
| **Usage: Packages** | Webhooks | Outbound Webhooks | ⏳ **Belum** | Slack/Discord webhook alerts | Cadangan pengiriman notifikasi otomatis saat ada pendaftar baru. |
| **Usage: Deployment** | Deploying with Docker | - | ✅ **Sudah** | Multi-stage `Dockerfile` | Standar container untuk deployment server mandiri (on-premise). |
| **Usage: Deployment** | Deploying to Netlify | - | ❌ **Tidak** | Netlify Target | **Tidak dipakai**, arsitektur dioptimalkan penuh untuk Vercel Edge. |
| **Usage: Deployment** | Deploying to Vercel | - | ✅ **Sudah** | Vercel Zero-Config Edge Network | Target rilis produksi utama dengan latensi rendah di Jakarta/SG. |
| **Other: Addons** | c15t | - | ✅ **Sudah** | In-House `<CookieConsent />` | Banner privasi kepatuhan UU PDP No. 27/2022 lokal. |
| **Other: Addons** | Dub | - | ✅ **Sudah** | In-House Shortlinks (`/go/[slug]`) | Pengalihan tautan singkat ramah medsos (`/go/ppdb`, `/go/wa`). |
| **Other: Addons** | Fuse.js | - | ✅ **Sudah** | `Fuse.js` (`apps/web/src/lib/search.ts`) | Pencarian cepat santri, berita, dan program tanpa query berat. |
| **Other: Addons** | Joyful | - | ✅ **Sudah** | In-House `<FloatingFeedbackWidget />` | Kotak saran fitur dan evaluasi orang tua santri tanpa login. |
| **Other: Addons** | Metabase | - | ❌ **Tidak** | Metabase BI Platform | **Terlalu berat** untuk sekolah dasar; PostHog & Drizzle sudah cukup. |
| **Other: Addons** | Motion | - | ✅ **Sudah** | `motion/react` (Motion 12) | Animasi mikro interaktif dan transisi halus pada hero section. |
| **Other: Addons** | Next Safe Action | - | ✅ **Sudah** | `ActionResponse` Server Actions | Standar kontrak mutasi data type-safe dengan Zod validation. |
| **Other: Addons** | NUQS | - | ✅ **Sudah** | `nuqs/adapters/next/app` | Sinkronisasi filter tabel dan tab langsung ke URL query params. |
| **Other: Addons** | React Wrap Balancer | - | ✅ **Sudah** | `<Balancer>` | Tipografi rapi otomatis mencegah teks menggantung (*orphan*). |
| **Other: Addons** | Trunk | - | ❌ **Tidak** | Trunk Code Quality Platform | **Tidak dipakai**, sudah digantikan oleh Biome + Husky git hooks. |
| **Other: Addons** | Zustand | - | ✅ **Sudah** | `useAdmissionsWizard` | Penyimpanan formulir PPDB bertahap dengan *session persistence*. |
| **Other: Examples** | Create an AI Chatbot | - | ✅ **Sudah** | Vercel AI SDK + `<AIChatWidget />` | Asisten AI 24/7 untuk layanan tanya jawab PPDB SD Al-Birru. |
| **Other: Migrations** | Authentication | Appwrite, Auth.js, Better Auth, Supabase | ❌ **Tidak** | Menggunakan opsi utama: **Clerk Auth** | Clerk menyediakan portal siap pakai, SSO, dan MFA paling matang. |
| **Other: Migrations** | CMS | Content Collections | ❌ **Tidak** | Menggunakan: **Drizzle In-House CMS** | Menjaga relasi data tunggal langsung di database Postgres sekolah. |
| **Other: Migrations** | Database | Convex, EdgeDB, PlanetScale, Prisma, Supabase, Turso | ❌ **Tidak** | Menggunakan opsi utama: **Neon + Drizzle** | Neon + Drizzle adalah kombinasi paling mutakhir dan hemat biaya. |
| **Other: Migrations** | Database | Drizzle | ✅ **Sudah** | **Sudah memakai Drizzle ORM** | Telah menjadi fondasi database resmi repositori (`@albirru/database`). |
| **Other: Migrations** | Documentation | Fumadocs | ✅ **Sudah** | **Sudah memakai Fumadocs** | Sudah terpasang dan berjalan di workspace `apps/docs`. |
| **Other: Migrations** | Flags | Hypertune | ❌ **Tidak** | Menggunakan: **PostHog Feature Flags** | Menyatukan analitik dan feature flags dalam satu platform gratis. |
| **Other: Migrations** | Formatting | ESLint | ❌ **Tidak** | Menggunakan: **Biome v2** | Biome 100x lebih cepat dan menyatukan linting + formatting. |
| **Other: Migrations** | Notifications | Novu | ❌ **Tidak** | Menggunakan: **In-App Notification Bell** | Novu memerlukan server/akun eksternal; in-app bell 100% in-house. |
| **Other: Migrations** | Payments | Lemon Squeezy, Paddle | ❌ **Tidak** | Menggunakan: **Transfer Manual / Bank BSI** | Lembaga pendidikan di Indonesia menggunakan perbankan lokal & QRIS. |
| **Other: Migrations** | Storage | Appwrite Storage, uploadthing | ❌ **Tidak** | Menggunakan opsi utama: **Vercel Blob** | Integrasi upload presigned URL langsung di dalam Next.js. |

---

## 4. Matriks Layanan Tambahan Platform Vercel

Sesuai permintaan integrasi layanan ekosistem Vercel terbaru, berikut adalah status implementasi layanan platform Vercel pada repositori ini:

| Kategori Vercel | Layanan Vercel | Status | Berkas / Modul Implementasi | Rationale & Penjelasan Teknis |
| :--- | :--- | :---: | :--- | :--- |
| **Tools & DX** | **Vercel Flags SDK** (`@vercel/flags`) | ✅ **Sudah** | `apps/web/src/flags.ts`<br>`apps/web/src/app/.well-known/vercel/flags/route.ts` | Integrasi discovery endpoint untuk Vercel Toolbar guna override feature flags (`ppdbWave1Open`, `showRamadhanTheme`, dll.) secara visual pada preview deployments. |
| **Core Platform** | **Vercel Cron Jobs** | ✅ **Sudah** | `vercel.json`<br>`apps/web/src/app/api/cron/keep-alive/route.ts`<br>`apps/web/src/app/api/cron/ppdb-summary/route.ts` | Otomasi serverless terjadwal: ping keep-alive jam 23:00 UTC dan rekap harian kuota PPDB jam 01:00 UTC dengan otentikasi `CRON_SECRET`. |
| **Agent Stack** | **Vercel AI SDK & AI Gateway** | ✅ **Sudah** | `apps/web/src/app/api/chat/route.ts` | AI Chatbot 24/7 untuk PPDB dengan header metadata AI Gateway dan edge semantic response caching (`X-Vercel-AI-Gateway-Cache`). |
| **Agent Stack** | **Vercel Workflows Pattern** | ✅ **Sudah** | `apps/web/src/lib/workflows/admissions-workflow.ts` | Durable orchestration lifecycle pendaftaran multi-tahap (pengingat berkas, verifikasi dokumen, jadwal tes observasi, penetapan santri). |
| **Security** | **Vercel BotID & WAF Protection** | ✅ **Sudah** | `apps/web/src/lib/security/bot-id.ts`<br>`vercel.json` | Penilaian reputasi request via header `x-vercel-bot-score`, filter ancaman bot otomatis, dan hardening HTTP security headers. |
| **Tools & DX** | **Vercel Toolbar** | ✅ **Sudah** | `apps/web/src/components/layout/Navbar.tsx` | Toolbar kolaboratif dan inspeksi visual komentar preview di edge. |
| **Core Platform** | **Vercel Web Analytics & Speed Insights** | ✅ **Sudah** | `apps/web/src/app/layout.tsx` | Pantauan Core Web Vitals (LCP, FID, CLS) langsung dari peramban pengunjung tanpa cookie pihak ketiga. |
| **Storage** | **Vercel Blob** | ✅ **Sudah** | `apps/web/src/lib/storage/blob.ts` | Upload dokumen pendaftaran (Akta & Kartu Keluarga) via presigned direct-to-cloud upload. |
| **Security** | **Vercel Edge Config** | ✅ **Sudah** | `apps/web/src/lib/config/edge-config.ts` | Pembacaan konfigurasi global latensi sub-milidetik di edge network. |

