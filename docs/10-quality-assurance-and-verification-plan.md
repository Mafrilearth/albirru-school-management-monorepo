> **Tujuan Dokumen:** Spesifikasi tata kelola penjaminan mutu, piramida pengujian perangkat lunak, konfigurasi perangkat uji otomatis, skenario verifikasi batas produk layak minimum, atribut kualitas non-fungsional, dan gerbang kualitas integrasi berkelanjutan.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Quality Assurance and Verification Plan | Judul statutori spesifikasi pengujian sistem |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar rencana pengujian mutu produksi |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/10-quality-assurance-and-verification-plan.md` | Jalur berkas dalam repositori |
---
## 2. Quality Governance and Testing Pyramid
Siklus verifikasi menerapkan disiplin piramida pengujian ketat untuk menjamin keandalan fungsional, eliminasi regresi logika, dan presisi mutlak komputasi numerik sebelum peluncuran produksi:
| Testing Pyramid Tier | Primary Responsibility Scope | Target Verification Engine | Execution Environment Standard |
|---|---|---|---|
| **Unit Verification Tier** | Algoritma komputasi bobot nilai, fungsi utilitas murni, dan aturan skema Zod | Vitest | Pipeline CI & Pre-Commit Git Hook |
| **Integration Verification Tier** | Kontrak Server Actions, integritas transaksi SQL, dan kebijakan Row-Level Security | Vitest (PostgreSQL Container) | Pipeline CI & Lingkungan Pengembang Lokal |
| **End-to-End Verification Tier** | Alur masuk autentikasi multi-peran, sesi presensi kelas, dan pengisian formulir admisi | Playwright | Pipeline CI & Preview Deployment |
---
## 3. Standard Quality Assurance Toolchain
Sistem membatasi perangkat penjamin mutu pada satu platform standar per kategori untuk mencegah duplikasi dependensi:
| Verification Functional Scope | Platform Tool | Technical Implementation Profile | Complimentary Quota & Selection Rationale |
|---|---|---|---|
| **Unit & Integration Test Runner** | Vitest | Vite-Native TypeScript Runner | Eksekusi paralel multi-thread berkecepatan tinggi tanpa overhead kompilasi |
| **Browser End-to-End Engine** | Playwright | Headless Chromium & WebKit | Otomasi tangguh lintas peramban dengan auto-waiting bawaan |
| **Database Mocking and Seeding** | PostgreSQL Test Container | Local Dockerized PostgreSQL 16+ | Validasi transaksi SQL riil tanpa memakai kuota cloud terkelola |
| **Continuous Integration Automation** | GitHub Actions | Ubuntu Standard Runner | Eksekusi pipeline otomatis bebas biaya pada repositori institusi |
| **Quality Gate Telemetry** | Slack Webhook | Webhook API Specification | Pengiriman laporan otomatis hasil build ke saluran `#albirru-project-stream` |
---
## 4. Minimum Viable Product Core Test Scenarios
### 4.1 Daily Attendance Tracking (`attendance`)
#### 4.1.1 Session Initialization and Headcount Baseline
- **Prakondisi:** Rombongan belajar aktif terdaftar dengan kredensial instruktur yang sah.
- **Langkah Eksekusi:** Instruktur membuka lembar presensi kelas pada tanggal kalender aktif hari ini.
- **Hasil yang Diharapkan:** Lembar presensi terbuat, daftar seluruh siswa berstatus awal `Present`, dan total ringkasan kehadiran tercatat penuh.
- **Uji Batas Pengecualian:** Percobaan inisialisasi sesi untuk tanggal masa depan (*future date*) wajib ditolak dengan pesan galat kalender.
#### 4.1.2 Status Transition Mutual Exclusion and Counter Integrity
- **Prakondisi:** Sesi presensi aktif telah terbuka dengan seluruh siswa berstatus `Present`.
- **Langkah Eksekusi:** Instruktur mengubah status satu siswa menjadi `Sick` dan mengisi catatan keterangan medis.
- **Hasil yang Diharapkan:** Status siswa berganti secara eksklusif menjadi `Sick`, penghitung `Present` berkurang 1, dan penghitung `Sick` bertambah 1.
- **Uji Batas Pengecualian:** Penekanan tombol status ganda secara cepat (*rapid multi-click*) harus diselesaikan secara deterministik tanpa merusak penghitung total.
#### 4.1.3 Midnight Register Immutability Lock
- **Prakondisi:** Lembar presensi telah berstatus terverifikasi pada tanggal kalender lampau.
- **Langkah Eksekusi:** Instruktur mencoba memutasi status kehadiran siswa pada rekaman lampau tanpa hak override admin.
- **Hasil yang Diharapkan:** Transaksi ditolak langsung oleh sistem dengan galat konflik otorisasi; rekaman data historis tetap utuh.
---
### 4.2 Grading and Academic Reporting (`grading`)
#### 4.2.1 Assessment Weight Summation Validation
- **Prakondisi:** Periode semester aktif dibuka dan master mata pelajaran terdaftar.
- **Langkah Eksekusi:** Administrator memasukkan alokasi persentase bobot tiap komponen evaluasi (Tugas Harian, Penilaian Tengah Semester, Penilaian Akhir Semester, Keterampilan).
- **Hasil yang Diharapkan:** Konfigurasi dengan total akumulasi tepat 100% tersimpan ke basis data.
- **Uji Batas Pengecualian:** Konfigurasi yang menghasilkan penjumlahan 99% atau 101% diblokir dengan pesan validasi bisnis.
#### 4.2.2 Raw Score Boundary Enforcement
- **Prakondisi:** Konfigurasi komponen evaluasi telah aktif untuk mata pelajaran kelas.
- **Langkah Eksekusi:** Instruktur memasukkan nilai numerik siswa pada kisi tabel evaluasi.
- **Hasil yang Diharapkan:** Nilai desimal pada rentang 0.00 hingga 100.00 tersimpan dan memperbarui nilai rata-rata berjalan secara langsung.
- **Uji Batas Pengecualian:** Masukan bilangan negatif (\< 0) atau melampaui 100 ditolak seketika oleh validasi batas antarmuka dan Server Actions.
#### 4.2.3 Report Card Publication Freezing
- **Prakondisi:** Seluruh nilai mata pelajaran wajib siswa semester aktif telah terisi lengkap.
- **Langkah Eksekusi:** Administrator menekan tombol pengesahan penerbitan rapor.
- **Hasil yang Diharapkan:** Status dokumen rapor berganti menjadi `Published`, rekaman data terkunci permanen (*immutable*), dan dapat diakses pada portal wali murid.
---
### 4.3 Guardian Self-Service Portal (`guardian`)
#### 4.3.1 Dependent Identity Isolation Boundary
- **Prakondisi:** Akun wali murid terautentikasi dan terhubung legal ke profil siswa tertentu.
- **Langkah Eksekusi:** Wali murid mengakses halaman ikhtisar kehadiran dan capaian akademik.
- **Hasil yang Diharapkan:** Layar menampilkan data profil, metrik kehadiran, dan rapor milik siswa terhubung secara eksklusif.
- **Uji Batas Pengecualian:** Modifikasi manual parameter ID siswa pada URL untuk mengakses data siswa lain menghasilkan galat penolakan akses otorisasi (403 Forbidden).
---
### 4.4 Roster and Identity Allocation (`identity`)
#### 4.4.1 National Identity Number Uniqueness
- **Prakondisi:** Direktori master civitas telah berisi rekaman data identitas siswa aktif.
- **Langkah Eksekusi:** Administrator mendaftarkan profil baru menggunakan Nomor Induk Kependudukan (NIK) yang telah terdaftar sebelumnya.
- **Hasil yang Diharapkan:** Sistem basis data menolak operasi penulisan (*unique constraint violation*) dan mengembalikan pesan konflik identitas.
#### 4.4.2 Singleton Classroom Cohort Membership
- **Prakondisi:** Siswa telah terdaftar pada Rombongan Belajar Kelas A pada semester aktif.
- **Langkah Eksekusi:** Administrator mencoba memasukkan siswa tersebut ke Rombongan Belajar Kelas B pada semester yang sama.
- **Hasil yang Diharapkan:** Aksi penugasan diblokir guna mencegah kepemilikan ganda rombel dalam satu periode akademik aktif.
---
### 4.5 Public Admissions and Information (`admissions`)
#### 4.5.1 Public Application Intake and Identifier Generation
- **Prakondisi:** Formulir pendaftaran calon siswa terbuka untuk pengunjung publik tanpa autentikasi.
- **Langkah Eksekusi:** Pengunjung melengkapi seluruh isian wajib, mengunggah berkas persyaratan, dan mengirim formulir.
- **Hasil yang Diharapkan:** Berkas tersimpan dengan status `Pending Review` dan kode pelacakan pendaftaran unik diterbitkan ke layar pendaftar.
- **Uji Batas Pengecualian:** Pengiriman data dengan nomor kontak atau format email tidak baku ditolak seketika oleh validasi skema formulir.
---
## 5. Non-Functional Quality Attributes and Benchmarks
| Quality Parameter | Verification Methodology | Target Benchmark Threshold | Mandatory Quality Gate Enforcement |
|---|---|---|---|
| **Server Action Execution Latency** | Pengujian beban transaksi sintetis | Kurang dari 800 milidetik | Penegakan batas latensi CI otomatis |
| **Edge Route Static Hydration** | Pengukuran penelusuran jaringan peramban | Kurang dari 200 milidetik | Verifikasi performa deployment Vercel |
| **Calculation Rounding Precision** | Pengujian unit deterministik desimal tepi | Toleransi galat komputasi 0% | Rangkaian uji presisi Vitest mutlak |
| **Static Type Verification** | Kompilasi menyeluruh proyek TypeScript | 0 galat tipe data (`tsc --noEmit`) | Pemblokir wajib merger pipeline CI |
| **Code Style and Schema Linting** | Analisis kode statis ESLint | 0 peringatan kritis | Git hook pre-commit dan pipeline CI |
---
## 6. Continuous Deployment Quality Gates
Setiap *pull request* yang diajukan ke cabang integrasi (`dev`), prapraproduksi (`staging`), atau produksi (`main`) wajib lolos seluruh gerbang mutu integrasi secara sekuensial sesuai spesifikasi Dokumen 11. Kegagalan pada salah satu gerbang akan menghentikan proses rilis secara otomatis:
- **Gerbang 1 (Kualitas Statis):** Verifikasi tipe statis TypeScript dan audit linting kode wajib tuntas tanpa galat.
- **Gerbang 2 (Verifikasi Logika & Integrasi):** Seluruh kalkulasi matematika nilai, aturan penguncian presensi, dan transaksi basis data lolos uji via Vitest.
- **Gerbang 3 (Verifikasi End-to-End):** Pengujian simulasi peramban Playwright pada rute kritis (presensi instruktur dan pendaftaran publik) tuntas tanpa regresi visual atau fungsional.
- **Gerbang 4 (Telemetri Pipeline):** Laporan ringkasan status kelulusan pipeline dipancarkan langsung ke kanal Slack `#albirru-project-stream`.