> **Tujuan Dokumen:** Spesifikasi tata kelola operasional platform, topologi layanan terkelola, alur kerja pengiriman berkelanjutan, protokol migrasi skema basis data, prosedur mitigasi insiden darurat, pedoman orkestrasi agen pengodean otonom, serta mitigasi batas kuota gratis dan kontinjensi platform.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Operational Runbook and Incident Procedures | Judul statutori spesifikasi operasional sistem |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.2.0 | Versi dasar prosedur operasional produksi dan tata kelola percabangan diperluas |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/11-operational-runbook-and-incident-procedures.md` | Jalur berkas dalam repositori |
---
## 2. Platform Operational Topology
Infrastruktur sistem beroperasi sepenuhnya di atas platform awan terkelola (*managed serverless cloud*) yang dirancang untuk ketersediaan tinggi, eliminasi pemeliharaan server fisik, dan keandalan eksekusi dalam batas kuota gratis institusi:
| Operational Tier Classification | Dedicated Management Platform | Operational Responsibility Scope | Management Access Location |
|---|---|---|---|
| **Application Hosting Tier** | Vercel Platform | Pipeline kompilasi build, perutean edge, SSL, dan log runtime | Dasbor Vercel Proyek |
| **Relational Database Tier** | Neon Serverless PostgreSQL | Mesin PostgreSQL 16+, pooling koneksi, dan pencadangan terkelola | Konsol Neon Proyek |
| **Source and Continuous Delivery** | GitHub Actions | Repositori kode, perlindungan cabang, dan gerbang verifikasi otomatis | Repositori GitHub Proyek |
| **Operational Telemetry** | Slack Integration | Notifikasi rilis produksi, kegagalan build, dan telemetri sistem | Saluran `#albirru-project-stream` |
---
## 3. Tata Kelola Percabangan dan Pengiriman Berkelanjutan (Branch Governance & Continuous Delivery)
Dokumentasi ini menetapkan arsitektur dan spesifikasi tata kelola percabangan Git resmi yang mencakup lingkungan infrastruktur, arsitektur monorepo, inisiatif tim, integrasi otomatisasi pihak ketiga, pemulihan insiden, dan tata kelola rilis berdasarkan standar Trunk-Based Development, GitLab Flow, GitHub Flow, GitVersion, Semantic Versioning 2.0.0, dan Conventional Commits 1.0.0.

### 3.1 Taksonomi dan Matriks Klasifikasi Cabang Repositori
Tabel taksonomi ini memetakan seluruh kategori cabang repositori beserta titik asal, tujuan integrasi, dan durasi keberadaannya:

| Kategori Cabang | Kunci Identifikasi | Titik Asal Percabangan | Target Integrasi Akhir | Karakteristik Retensi |
| --- | --- | --- | --- | --- |
| Produksi | `main` | Inisialisasi repositori | Nihil | Permanen |
| Pemulihan Bencana | `dr` | `main` | `main` | Permanen |
| Uji Penerimaan Pengguna | `uat` | `staging` | `main` | Permanen |
| Prapraproduksi | `staging` | `main` | `main` | Permanen |
| Integrasi Mitra | `sandbox` | `staging` | Nihil | Permanen |
| Integrasi Pengembangan | `dev` | `staging` | `staging` | Permanen |
| Fitur Standar | `feat/` | `dev` | `dev` | Efemeral |
| Inisiatif Lintas Tim | `epic/` | `dev` | `dev` | Efemeral |
| Subfitur Bagian Epik | `subfeat/` | Cabang `epic/` terkait | Cabang `epic/` terkait | Efemeral |
| Fitur Paket Monorepo | `feat/<lingkup>/` | `dev` | `dev` | Efemeral |
| Eksperimen Flag Fitur | `experiment/` | `dev` | `dev` | Efemeral |
| Perbaikan Cacat Standar | `fix/` | `dev` | `dev` | Efemeral |
| Perbaikan Cacat Monorepo | `fix/<lingkup>/` | `dev` | `dev` | Efemeral |
| Perbaikan Kritis Produksi | `hotfix/` | `main` | `main`, `staging`, dan `dev` | Efemeral |
| Pembatalan Regresi Komit | `revert/` | Cabang terjadinya regresi | Cabang target pemulihan | Efemeral |
| Rilis Distribusi Terjadwal | `release/` | `dev` | `staging` dan `main` | Efemeral |
| Optimasi Performa | `perf/` | `dev` | `dev` | Efemeral |
| Restrukturisasi Kode | `refactor/` | `dev` | `dev` | Efemeral |
| Riset Kelayakan Teknis | `spike/` | `dev` | Nihil | Efemeral |
| Draf Mandiri Pengembang | `users/<inisial>/` | `dev` | `dev` | Efemeral |
| Pembaruan Dokumentasi | `docs/` | `dev` | `dev` | Efemeral |
| Penulisan Modul Uji | `test/` | `dev` | `dev` | Efemeral |
| Pemeliharaan Dependensi | `chore/` | `dev` | `dev` | Efemeral |
| Konfigurasi Pipa Alur Kerja | `ci/` | `dev` | `dev` | Efemeral |
| Pembaruan Dependensi Bot | `deps/` | `dev` | `dev` | Efemeral |
| Modifikasi Berbantuan AI | `ai/` | `dev` | `dev` | Efemeral |
| Dukungan Jangka Panjang | `support/` | Tag rilis spesifik | Cabang versi terkait | Permanen |
| Kontribusi Eksternal Garpu | `external/` | `upstream/main` | `upstream/dev` | Efemeral |

**Prinsip Pemisahan Kategori:**
1. Cabang berstatus permanen merefleksikan alokasi server fisik dan gerbang promosi lingkungan.
2. Cabang berstatus efemeral merefleksikan isolasi unit modifikasi kode sumber yang wajib dimusnahkan pascaintegrasi.

---

### 3.2 Rumus Sintaksis Penamaan Cabang Berbagai Kondisi
Tabel formula sintaksis ini merinci formula notasi penamaan cabang untuk seluruh skenario rekayasa perangkat lunak:

| Kondisi Rekayasa | Formula Sintaksis Baku | Contoh Penerapan Riil |
| --- | --- | --- |
| Lingkungan Produksi | `main` | `main` |
| Lingkungan Pemulihan Bencana | `dr` | `dr` |
| Lingkungan Uji Penerimaan Pengguna | `uat` | `uat` |
| Lingkungan Prapraproduksi | `staging` | `staging` |
| Lingkungan Integrasi Mitra | `sandbox` | `sandbox` |
| Lingkungan Pengembangan Internal | `dev` | `dev` |
| Fitur Repositori Tunggal | `feat/<id-tiket>-<deskripsi>` | `feat/DEV-101-auth-oauth2` |
| Fitur Inisiatif Lintas Tim | `epic/<id-tiket>-<deskripsi>` | `epic/DEV-200-banking-migration` |
| Subfitur Bagian Epik | `subfeat/<id-tiket>-<deskripsi>` | `subfeat/DEV-201-ledger-table` |
| Fitur Paket Monorepo | `feat/<lingkup>/<id-tiket>-<deskripsi>` | `feat/billing/DEV-301-invoice-pdf` |
| Eksperimen Flag Fitur | `experiment/<id-tiket>-<deskripsi>` | `experiment/DEV-302-new-checkout-ab` |
| Perbaikan Cacat Repositori Tunggal | `fix/<id-tiket>-<deskripsi>` | `fix/DEV-102-memory-leak` |
| Perbaikan Cacat Paket Monorepo | `fix/<lingkup>/<id-tiket>-<deskripsi>` | `fix/auth/DEV-303-session-null` |
| Penanganan Insiden Produksi | `hotfix/<id-tiket>-<deskripsi>` | `hotfix/INC-911-sqli-patch` |
| Pembatalan Regresi Komit | `revert/<id-tiket>-<deskripsi>` | `revert/DEV-103-rollback-migration` |
| Penyiapan Rilis Versi | `release/v<mayor>.<minor>.<patch>` | `release/v2.4.0` |
| Peningkatan Efisiensi Kode | `perf/<id-tiket>-<deskripsi>` | `perf/DEV-104-cache-redis` |
| Restrukturisasi Basis Kode | `refactor/<id-tiket>-<deskripsi>` | `refactor/DEV-105-clean-handler` |
| Riset Prototipe Kelayakan | `spike/<id-tiket>-<deskripsi>` | `spike/DEV-106-wasm-parser` |
| Isolasi Eksperimen Pengembang | `users/<inisial>/<deskripsi>` | `users/budi/dark-mode-test` |
| Modifikasi Berkas Dokumentasi | `docs/<id-tiket>-<deskripsi>` | `docs/DEV-107-swagger-spec` |
| Penulisan Modul Pengujian | `test/<id-tiket>-<deskripsi>` | `test/DEV-108-payment-e2e` |
| Pemeliharaan Dependensi Proyek | `chore/<id-tiket>-<deskripsi>` | `chore/DEV-109-upgrade-node20` |
| Penyetelan Konfigurasi Pipa | `ci/<id-tiket>-<deskripsi>` | `ci/DEV-110-matrix-build` |
| Otomasi Pembaruan Bot | `deps/<nama-pustaka>-v<versi>` | `deps/lodash-v4.17.21` |
| Modifikasi Berbantuan AI | `ai/<id-tiket>-<deskripsi>` | `ai/DEV-111-gen-unit-test` |
| Dukungan Pemeliharaan Versi Lama | `support/v<mayor>.<minor>.x` | `support/v1.2.x` |
| Kontribusi Repositori Terpisah | `external/<id-isu>-<deskripsi>` | `external/GH-504-cors-fix` |

1. **Batasan Pembentuk Variabel:**
    - Komponen `<id-tiket>` menggunakan nomor identitas resmi pelacak pekerjaan.
    - Komponen `<lingkup>` menggunakan nama folder paket mandiri pada struktur monorepo.
    - Komponen `<deskripsi>` menggunakan format kebab-case huruf kecil.
2. **Restriksi Notasi Simbol:**
    - Karakter huruf kapital, spasi kosong, garis bawah, dan karakter nonalfanumerik dilarang.

---

### 3.3 Protokol Siklus Hidup Eksekusi Alur Kerja
Tabel protokol ini memetakan urutan instruksi operasional Git dari pembentukan awal hingga penghapusan cabang:

| Tahapan Operasional | Instruksi Baris Perintah Git Baku | Kriteria Keberhasilan Validasi |
| --- | --- | --- |
| Sinkronisasi Hulu | `git checkout dev && git pull --ff-only origin dev` | Salinan lokal mutakhir |
| Inisiasi Cabang Kerja | `git checkout -b <nama-cabang> dev` | Kepala cabang berada pada posisi komit terbaru |
| Perekaman Perubahan | `git commit -m "<tipe>(<lingkup>): <deskripsi>"` | Pesan komit mematuhi format baku |
| Rekonsiliasi Linear | `git fetch origin && git rebase origin/dev` | Riwayat garis cabang lurus tanpa percabangan |
| Publikasi Jarak Jauh | `git push origin <nama-cabang>` | Cabang terdaftar pada repositori peladen |
| Penghapusan Pascaproses | `git branch -d <nama-cabang>` | Jejak cabang lokal terhapus tuntas |

1. **Disiplin Tata Urut Operasional:**
    - Inisiasi cabang kerja wajib mengambil titik tolak dari cabang basis yang telah tersinkronisasi.
    - Penyelesaian konflik integrasi wajib dieksekusi melalui strategi rebase sebelum pembukaan Pull Request.

---

### 3.4 Parameter Gerbang Kendali Mutu Integrasi
Tabel parameter ini menetapkan kriteria ambang batas verifikasi mutlak sebelum penggabungan kode disetujui:

| Parameter Evaluasi | Batas Ambang Minimal | Instrumen Penegakan |
| --- | --- | --- |
| Uji Otomatis Unit dan Integrasi | 100% Lolos | Continuous Integration |
| Cakupan Pengujian Kode Sumber | 80% Lolos | Code Coverage Analyzer |
| Tinjauan Kode Manusia | 1 Persetujuan Sah | Pull Request Review Protection |
| Integritas Kriptografis Komit | Lolos Audit GPG | Cryptographic Verification |
| Metode Integrasi Akhir | Squash and merge | Branch Protection Rule |

1. **Ketentuan Integrasi Mutlak:**
    - Penggabungan kode hanya diizinkan apabila seluruh parameter pengujian memberikan status lulus.
    - Riwayat komit pada cabang efemeral wajib disatukan menjadi satu komit atomik pada cabang target.

---

### 3.5 Alur Kerja Promosi Lingkungan dan Pengiriman Berkelanjutan
Komitmen langsung (*direct commit*) ke cabang utama (`main`) maupun cabang terlindungi (`staging`, `dev`) dilarang keras oleh kebijakan proteksi cabang repositori. Seluruh perubahan kode bergerak melalui gerbang promosi lingkungan:
1. **Inisialisasi Cabang Efemeral:** Buat cabang fitur/perbaikan terisolasi dari cabang `dev` tersinkronisasi (`git checkout -b <nama-cabang> dev`) sesuai notasi baku.
2. **Pra-Verifikasi Lokal:** Jalankan verifikasi tipe statis TypeScript (`tsc --noEmit`), audit linting kode (`eslint`), dan rangkaian pengujian unit lokal sebelum membuka permohonan penggabungan (*pull request*).
3. **Pembukaan Pull Request ke `dev`:** Ajukan pull request ke cabang `dev`. Tindakan ini memicu eksekusi otomatis seluruh gerbang verifikasi GitHub Actions.
4. **Promosi ke `staging` (Prapraproduksi):** Melalui cabang `release/` yang stabil, kode diintegrasikan ke `staging` untuk pengujian integrasi menyeluruh dan inspeksi *preview deployment* Vercel.
5. **Uji Penerimaan Pengguna (`uat`):** Cabang `uat` yang berpangkal dari `staging` digunakan untuk validasi fungsional civitas sekolah sebelum otorisasi rilis produksi.
6. **Penggabungan ke Produksi (`main`):** Setelah seluruh gerbang uji mutu lulus mutlak, lakukan merger pull request ke `main` menggunakan strategi *Squash and Merge*. Jaringan Vercel secara otomatis mendistribusikan kode terbaru ke alamat produksi resmi (`sd-albirru.vercel.app`).
7. **Verifikasi Telemetri:** Konfirmasi penerimaan pesan keberhasilan rilis yang dipancarkan secara otomatis ke saluran Slack `#albirru-project-stream`.
---
## 4. Database Migration and Schema Management Protocol
Modifikasi skema basis data relasional wajib menerapkan pola migrasi progresif kompatibel-mundur (*backward-compatible progressive migration*) guna menjamin layanan beroperasi tanpa henti (*zero-downtime*):
### 4.1 Zero-Downtime Schema Modification Procedure
- **Fase 1 (Eksekusi Migrasi Aditif):** Terapkan perubahan skema non-destruktif (seperti penambahan kolom baru bernilai *nullable* atau pembuatan tabel independen baru) sebelum kode aplikasi yang mengonsumsinya diterapkan ke produksi.
- **Fase 2 (Penyebaran Kode Aplikasi):** Rilis kode aplikasi baru yang menulis ke struktur skema lama maupun skema baru secara paralel jika memproses transisi rekaman aktif.
- **Fase 3 (Pembersihan Migrasi Subtraktif):** Setelah kode aplikasi berjalan stabil di produksi, jalankan migrasi pembersihan untuk menghentikan kolom usang atau batasan integritas yang didepresiasi.
### 4.2 Automated Database Backup and Snapshot Schedule
- **Pencadangan Otomatis Harian:** Snapshot harian basis data berjalan otomatis pada tengah malam melalui infrastruktur terkelola Neon.
- **Pencadangan Manual Pra-Migrasi:** Sebelum mengeksekusi migrasi struktural besar, buat snapshot cadangan manual sesuai permintaan (*on-demand snapshot*) melalui konsol manajemen Neon.
---
## 5. Emergency Incident Management and Disaster Recovery
### 5.1 Incident Severity Classification Framework
| Severity Level | Operational Impact Scope | Incident Response Target | Escalation Notification Protocol |
|---|---|---|---|
| **Severity 1 (Critical)** | Platform lumpuh total, pencatatan presensi terblokir, atau koneksi basis data terputus | Kurang dari 30 menit | Peringatan darurat instan ke saluran `#albirru-project-stream` |
| **Severity 2 (Major)** | Modul fungsional terdegradasi (seperti kalkulasi nilai terhambat) dengan alternatif tersedia | Kurang dari 2 jam | Pencatatan tiket operasional di Linear dengan prioritas *Urgent* |
| **Severity 3 (Minor)** | Defek visual kosmetik, peringatan masukan non-pemblokir, atau anomali teks mikro | Kurang dari 24 jam | Pencatatan tiket tugas standar di Linear pada siklus sprint berjalan |
### 5.2 Application Instant Rollback Procedure
1. **Konfirmasi Gangguan:** Verifikasi degradasi sistem melalui log galat runtime pada konsol manajemen Vercel atau laporan insiden di Slack.
2. **Pemilihan Titik Rilis Stabil:** Buka riwayat deployment proyek di konsol Vercel dan tentukan versi rilis terverifikasi terakhir sebelum kegagalan terjadi.
3. **Promosi Rilis Cepat:** Eksekusi aksi promosi (*instant rollback promotion*). Jaringan edge Vercel seketika mengalihkan lalu lintas global ke rilis stabil dalam hitungan detik.
4. **Remediasi Kode Sumber:** Batalkan (*revert*) pull request penyebab galat pada repositori GitHub, selidiki akar masalah secara lokal, dan catat tindakan perbaikan di Linear.
### 5.3 Database Disaster Recovery Procedure
1. **Akses Konsol Pencadangan:** Masuk ke panel direktori pencadangan basis data di konsol manajemen proyek Neon.
2. **Pemilihan Titik Pemulihan:** Pilih snapshot cadangan bersih terakhir yang tercatat sebelum anomali mutasi atau kerusakan integritas relasional terjadi.
3. **Eksekusi Restorasi:** Jalankan prosedur pemulihan terkelola (*managed point-in-time restore*) ke basis data utama.
4. **Verifikasi Integritas Data:** Lakukan audit validasi atas integritas data civitas, keterikatan rombongan belajar, lembar presensi, dan buku rapor yang telah disahkan.
---
## 6. Autonomous Coding Agent and Environment Orchestration
Seluruh agen perangkat lunak otonom (*autonomous coding agents*) yang beroperasi pada repositori ini wajib mematuhi batasan operasional berikut guna mencegah kontaminasi kode:
- **Prinsip Prioritas Dokumentasi:** Agen wajib membaca berkas spesifikasi teknis (`01-product-requirements-specification.md`, `02-software-architecture-and-technical-design.md`, dan `03-relational-database-specification.md`) sebelum memodifikasi kode atau membuat berkas baru.
- **Isolasi Batas Tugas Tunggal:** Pekerjaan agen dibatasi secara ketat hanya pada batas tiket Linear yang ditugaskan. Agen dilarang keras melakukan refaktor struktural di luar cakupan tugas tanpa otorisasi tertulis.
- **Validasi Pra-Commit Mandatori:** Setiap mutasi kode yang dibuat oleh agen wajib lolos uji kompilasi statis TypeScript penuh (`tsc --noEmit`), audit sintaks, dan seluruh rangkaian pengujian otomatis sebelum mengajukan pull request.
- **Persyaratan Pertahanan Berlapis:** Seluruh penanganan masukan pengguna yang dibuat agen wajib menyertakan verifikasi skema Zod di sisi server serta pembungkus penanganan galat standar sistem.
---
## 7. Complimentary Quota Exhaustion and Platform Incident Mitigations
### 7.1 Database Storage Quota Thresholds and Escalation
- **Ambang Batas Peringatan (80% Kapasitas):** Peringatan otomatis dipancarkan ke saluran Slack `#albirru-project-stream` jika ruang basis data mencapai 400 MB (dari batas kuota 500 MB).
- **Ambang Batas Kritis (90% Kapasitas):** Tim pengelola wajib mengeksekusi salah satu dari tiga prosedur eskalasi dalam jangka waktu maksimal 7 hari kerja:
	- **Jalur 1 (Optimasi & Pengarsipan In-Tree — Biaya Rp0):** Ekspor rekaman presensi yang telah melewati batas retensi 3 tahun ke berkas arsip terkompresi, lalu eksekusi pembersihan ruang fisik (*VACUUM FULL*) via Neon SQL Editor untuk mereklamasi ruang penyimpanan cakram.
	- **Jalur 2 (Peningkatan Layanan Terkelola — Skala Resmi):** Tingkatkan kapasitas komputasi Neon melalui anggaran Bantuan Operasional Sekolah (BOS). Kapasitas bertambah instan tanpa jeda padam (*zero downtime*) dan tanpa modifikasi kode.
	- **Jalur 3 (Migrasi Mandiri Tanpa Keterikatan Vendor — Self-Hosted VPS):** Siapkan server VPS mandiri dengan kontainer PostgreSQL 16+, ekspor data via `pg_dump`, pulihkan via `pg_restore`, dan alihkan variabel lingkungan `DATABASE_URL` pada konsol Vercel tanpa perlu menulis ulang kode.
### 7.2 Connection Pool Starvation Mitigation
- **Kanal Koneksi Terkelola:** Seluruh string koneksi basis data pada konfigurasi aplikasi wajib menggunakan Neon Connection Pooler guna mencegah kehabisan slot koneksi PostgreSQL langsung.
- **Batas Waktu Eksekusi Transaksi:** Menetapkan batas waktu transaksi maksimal 3000 milidetik pada Drizzle ORM agar koneksi yang menggantung (*dangling connections*) diputus otomatis dan dikembalikan ke antrean pool.
### 7.3 Document Attachment Storage Quota Mitigation
- **Kompresi Dokumen Sisi Klien:** Skema validasi Zod membatasi ukuran maksimal berkas unggahan pendaftaran hingga 2 MB per berkas serta mewajibkan format terkompresi (PDF/WebP) sebelum dikirimkan ke server.
- **Pengalihan Penyimpanan Dingin (Cold Storage Offloading):** Berkas lampiran admisi tahun ajaran lampau dipindahkan ke Cloudflare R2 (kuota gratis 10 GB per bulan tanpa biaya transfer data keluar).
### 7.4 Public Ingress Protection and Rate Limiting
- **Pembatasan Frekuensi Permintaan:** Menerapkan pembatasan frekuensi (*rate limiting*) pada rute `/admission` maksimal 5 pengiriman formulir per 15 menit per alamat protokol internet klien guna mencegah serangan spam formulir yang menghabiskan memori basis data.
- **Verifikasi Otomasi Headless:** Mengintegrasikan widget Cloudflare Turnstile pada Client Island formulir pendaftaran publik guna memblokir bot pengisi data otomatis tanpa membebani biaya API.
### 7.5 Serverless Execution Budget and Batching
- **Pemindahan Komputasi Agregat:** Kalkulasi rata-rata nilai semester dan rekonsiliasi presensi dieksekusi melalui kueri agregasi SQL langsung di basis data, bukan di-*looping* pada runtime serverless Next.js, guna menghemat kuota eksekusi bulanan Vercel.
- **Pemrosesan Data Berkelompok (Chunk Processing):** Operasi massal seperti pembekuan rapor dijalankan bertahap per rombongan belajar (maksimal 30 siswa per eksekusi Server Action) untuk menghindari batas waktu henti paksa (*serverless timeout execution limit*).
### 7.6 Academic Holiday Inactivity Guard
- **Pencegahan Suspensi Proyek:** Untuk mencegah suspensi otomatis instans serverless PostgreSQL akibat ketiadaan aktivitas saat libur panjang semester, sistem menggunakan alur kerja GitHub Actions terjadwal (*scheduled cron job*) setiap 48 jam.
- **Kueri Denyut Sistem:** Alur kerja memanggil rute `/api/health` yang menjalankan kueri baca ringan (`SELECT 1`) guna menjaga status proyek tetap aktif secara terus-menerus tanpa intervensi manual.