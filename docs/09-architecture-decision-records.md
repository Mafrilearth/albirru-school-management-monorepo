> **Tujuan Dokumen:** Registri kronologis keputusan strategis arsitektur perangkat lunak, evaluasi kompromi teknis, rasionalitas pemilihan platform, dan protokol evolusi sistem.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Architecture Decision Records | Judul statutori spesifikasi keputusan arsitektur |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi pembaruan evaluasi keamanan dan arsip dingin |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/09-architecture-decision-records.md` | Jalur berkas dalam repositori |
---
## 2. Architecture Decision Records Governance Framework
### 2.1 Standard Decision Criteria
Setiap rekaman keputusan dievaluasi secara ketat berdasarkan empat kriteria utama:
- **Pemeliharaan Jangka Panjang:** Meminimalkan biaya perawatan kode dan mencegah fragmentasi dependensi.
- **Nol Biaya Infrastruktur:** Memaksimalkan efisiensi komputasi awan dan kuota terkelola (*zero financial software expenditure*).
- **Kesederhanaan Distribusi:** Menghilangkan kompleksitas orkestrasi distribusi (*single deployable unit*).
- **Isolasi Domain:** Mencegah kebocoran logika bisnis antarmodul internal monolit.
### 2.2 Status Lifecycle Matrix
- **Proposed:** Tahap evaluasi arsitektur aktif dan peninjauan teknis.
- **Accepted:** Disetujui resmi sebagai standar rekayasa baku sistem.
- **Superseded:** Digantikan oleh rekaman keputusan arsitektur yang lebih baru.
- **Deprecating:** Dipertahankan sementara untuk kompatibilitas mundur sebelum penghentian total.
---
## 3. Canonical Architecture Decision Records Index
| Decision Identifier | Architectural Title Context | Evaluation Status | Decision Date | Primary Architectural Domain |
|---|---|---|---|---|
| **ADR-001** | Modular Monolith Deployment Topology | Accepted | 2026-10-08 | System Top-Level Architecture |
| **ADR-002** | Next.js Server Actions Data Mutation | Accepted | 2026-10-08 | Presentation and Application Layer |
| **ADR-003** | Neon Serverless Relational Engine | Accepted | 2026-10-08 | Relational Persistence Layer |
| **ADR-004** | Drizzle ORM Type-Safe Query Interface | Accepted | 2026-10-08 | Data Access and Migration Layer |
| **ADR-005** | Headless shadcn/ui Component Primitives | Accepted | 2026-10-08 | User Interface Design System |
| **ADR-006** | Cloudflare Turnstile & Upstash Rate Limiting | Accepted | 2026-10-09 | Public Ingress and Security Layer |
| **ADR-007** | Cloudflare R2 S3-Compatible Cold Archive | Accepted | 2026-10-09 | Distributed File Storage Layer |
---
## 4. Comprehensive Architecture Decision Records
### 4.1 Architecture Decision Record 001: Modular Monolith Deployment Topology
- **Status:** Accepted (2026-10-08)
- **Context:** Mengadopsi arsitektur terdistribusi mikro secara prematur menimbulkan overhead komputasi, transaksi terdistribusi yang rumit, dan biaya sewa server.
- **Decision:** Memilih pola Modern Modular Monolith yang dikemas sebagai unit distribusi rilis tunggal di atas Vercel. Batas modul ditegakkan via isolasi direktori in-tree.
- **Consequences:** Nol latensi antar-domain internal, jaminan transaksi ACID penuh, namun menuntut disiplin peninjauan impor antar-modul.
### 4.2 Architecture Decision Record 002: Next.js Server Actions Data Mutation
- **Status:** Accepted (2026-10-08)
- **Context:** Pemeliharaan lapisan REST API terpisah menduplikasi skema tipe TypeScript dan menambah baris kode penanganan jaringan.
- **Decision:** Menstandardisasi mutasi transaksional terautentikasi menggunakan Next.js Server Actions.
- **Consequences:** Jaminan *end-to-end type safety*, eliminasi boilerplate serialisasi, namun mengikat mutasi pada ekosistem Next.js.
### 4.3 Architecture Decision Record 003: Neon Serverless Relational Engine
- **Status:** Accepted (2026-10-08)
- **Context:** Membutuhkan mesin relasional PostgreSQL murni serverless dengan integritas kunci asing fisik dan auto-scaling tanpa biaya pemeliharaan server fisik.
- **Decision:** Memilih Neon Serverless PostgreSQL dengan driver postgres (porsager/postgres) dan pooling koneksi bawaan.
- **Consequences:** Mesin PostgreSQL 16+ serverless dengan latensi rendah dan auto-suspend efisien, serta kompatibilitas penuh Drizzle ORM.
### 4.4 Architecture Decision Record 004: Drizzle ORM Type-Safe Query Interface
- **Status:** Accepted (2026-10-08)
- **Context:** ORM berat konvensional memiliki runtime overhead besar dan penalti waktu *cold start* serverless.
- **Decision:** Mengadopsi Drizzle ORM sebagai pembangun kueri dan migrasi SQL deklaratif.
- **Consequences:** Zero runtime overhead dan migrasi SQL transparan, namun menuntut pemahaman konstruksi kueri SQL relasional yang kuat.
### 4.5 Architecture Decision Record 005: Headless shadcn/ui Component Primitives
- **Status:** Accepted (2026-10-08)
- **Context:** Pustaka komponen pihak ketiga tertutup (*pre-styled UI*) membawa CSS runtime besar dan membatasi penyesuaian visual.
- **Decision:** Menggunakan komponen shadcn/ui berbasis Radix UI dan Tailwind CSS yang disalin langsung ke dalam repositori (*in-tree*).
- **Consequences:** Kepemilikan kode sumber penuh dan kepatuhan WCAG 2.1 AA bawaan, namun pembaruan komponen dikelola manual oleh tim.
### 4.6 Architecture Decision Record 006: Cloudflare Turnstile & Upstash Rate Limiting
- **Status:** Accepted (2026-10-09)
- **Context:** Formulir admisi publik (`/admission`) rentan terhadap serangan bot otomatis dan spam massal yang dapat menguras kapasitas basis data dan kuota eksekusi serverless.
- **Decision:** Mengintegrasikan Cloudflare Turnstile pada komponen formulir klien dan Upstash Redis untuk penegakan batas laju (*rate limiting*) 5 submisi per 15 menit per alamat IP.
- **Consequences:**
	- **Positif:** Verifikasi bot tanpa teka-teki visual yang mengganggu calon wali murid; perlindungan memori basis data dari beban berlebih.
	- **Negatif:** Menambah dependensi variabel lingkungan eksternal untuk verifikasi token Turnstile dan kredensial Redis REST API.
### 4.7 Architecture Decision Record 007: Cloudflare R2 S3-Compatible Cold Archive
- **Status:** Accepted (2026-10-09)
- **Context:** Berkas lampiran persyaratan peserta didik (Akta Kelahiran, Kartu Keluarga) dapat menghabiskan kuota penyimpanan dokumen jika dipertahankan tanpa batas waktu.
- **Decision:** Mengadopsi Cloudflare R2 sebagai repositori arsip dingin (*cold storage*) untuk berkas siswa tahun ajaran lampau menggunakan API yang kompatibel dengan protokol AWS S3.
- **Consequences:**
	- **Positif:** Eliminasi biaya transfer data keluar (*zero egress fees*) dan kapasitas penyimpanan dokumen yang elastis tanpa batas waktu.
	- **Negatif:** Membutuhkan adaptor klien S3 mandiri di `src/lib/` untuk menangani transfer arsip dokumen historis.
---
## 5. Architectural Evolution and Modification Protocol
Setiap usulan fitur atau perubahan teknologi yang bertentangan dengan keputusan arsitektur yang telah disetujui dalam dokumen ini wajib mengikuti protokol tata kelola berikut sebelum penggabungan kode (*merging*):
1. **Penolakan Deviasi Non-ADR:** Permohonan penggabungan kode (*pull request*) yang memperkenalkan penyimpangan arsitektur tanpa ADR pendukung berstatus *Accepted* akan diblokir otomatis oleh gerbang integrasi berkelanjutan (*CI gating*).
2. **Pengajuan Dokumen Pengganti:** Buat draf ADR baru berstatus *Proposed* yang merinci latar belakang masalah, opsi kompromi, dan alasan teknis penggantian keputusan sebelumnya dengan mencantumkan nomor ADR yang dirujuk.
3. **Pengesahan dan Transisi (*Supersession*):** Setelah draf baru disetujui resmi, ubah status ADR pendahulu menjadi *Superseded* disertai tautan penunjuk ke keputusan arsitektur baru yang menggantikannya.