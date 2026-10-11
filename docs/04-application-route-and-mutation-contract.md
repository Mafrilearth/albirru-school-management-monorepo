> **Tujuan Dokumen:** Spesifikasi kontrak antarmuka jaringan, topologi rute web, mutasi Server Actions, skema data muatan, dan kode status galat sistem.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Application Route and Mutation Contract | Judul statutori spesifikasi kontrak jaringan |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi pembaruan perlindungan gerbang publik |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/04-application-route-and-mutation-contract.md` | Jalur berkas dalam repositori |
---
## 2. Network Topology and Communication Standards
### 2.1 Interface Distribution Architecture
Sistem memanfaatkan Next.js Server Actions untuk seluruh operasi mutasi data transaksional terautentikasi dan pengambilan data dinamis. Pola ini mengeliminasi *overhead* pemeliharaan gateway REST API eksternal serta menjamin kepatuhan tipe statis waktu kompilasi. Route Handlers HTTP standar dikhususkan hanya untuk verifikasi kesehatan platform (*health check* & *keep-alive cron*), webhook telemetri eksternal, dan berkas sitemap metadata publik.
### 2.2 Global Envelope and Idempotency Directives
Setiap Server Action mengembalikan struktur amplop respons deterministik dengan empat kunci standar:
- **`is_success`**: Boolean penanda status keberhasilan mutasi.
- **`status_code`**: Integer kode status HTTP kanonikal.
- **`response_payload`**: Objek data hasil eksekusi atau `null` jika terjadi kegagalan.
- **`error_descriptor`**: Objek rincian galat (`code`, `message`, `field_errors`) atau `null` jika berhasil.
Semua kontrak mutasi kritis menerima token idempotensi opsional guna mencegah eksekusi transaksi ganda saat terjadi transmisi ulang jaringan. Seluruh aksi memverifikasi integritas sesi autentikasi, aturan otorisasi berbasis peran, dan parsing skema runtime Zod sebelum logika domain dieksekusi.
---
## 3. Canonical Route Ingress and Access Boundaries
| URL Route Pattern | Rendering & Execution Strategy | Canonical Authorization Level | Purpose and Content Scope |
|---|---|---|---|
| **`/`** | Static Edge Prerendered | Public Guest | Beranda publik, profil sekolah, dan akreditasi institusi |
| **`/admission`** | Server Component with Client Island | Public Guest | Formulir pendaftaran mandiri calon peserta didik baru |
| **`/admission/status`** | Dynamic Server Rendered | Public Guest | Verifikasi mandiri status pendaftaran via kode pelacak |
| **`/authentication/sign-in`** | Server Component with Client Island | Public Guest | Antarmuka autentikasi kredensial pengguna multi-peran |
| **`/portal/admin/*`** | Dynamic Server Rendered | System Administrator | Konsol identitas master, alokasi rombel, dan putusan admisi |
| **`/portal/instructor/*`** | Dynamic Server Rendered | Instructor | Pengisian presensi harian dan lembar evaluasi nilai |
| **`/portal/guardian/*`** | Dynamic Server Rendered | Guardian | Pemantauan kehadiran anak terhubung dan unduh buku rapor |
| **`/api/health`** | Route Handler (GET) | Public Guest / Internal Monitor | Verifikasi kesehatan platform dan pemeliharaan denyut database |
---
## 4. Domain Server Action Mutation Contracts
### 4.1 Daily Attendance Tracking (`attendance`)
#### 4.1.1 `initialize_attendance_session`
- **Execution Context:** Dipicu oleh instruktur saat membuka lembar presensi rombongan belajar.
- **Access Authorization:** Instructor penanggung jawab rombel, System Administrator.
- **Input Parameters:**
	- `classroom_cohort_id` (UUID, Wajib)
	- `session_date` (Date, Wajib, Format: `YYYY-MM-DD`)
- **Output Payload:**
	- `attendance_session_id` (UUID)
	- `session_status` (Enumerasi: `Initialized`, `Previously Existing`)
	- `cohort_roster_headcount` (Integer)
- **Exception Conditions:**
	- `403 Forbidden`: Pengguna tidak memiliki penugasan atas rombongan belajar terkait.
	- `422 Unprocessable Content`: Tanggal sesi melampaui tanggal kalender server.
#### 4.1.2 `submit_attendance_register`
- **Execution Context:** Mengunci lembar kehadiran siswa ke status final terverifikasi.
- **Access Authorization:** Instructor penanggung jawab rombel, System Administrator.
- **Input Parameters:**
	- `attendance_session_id` (UUID, Wajib)
	- `status_records` (Array of Objects, Wajib):
		- `student_profile_id` (UUID, Wajib)
		- `status` (Enumerasi: `Present`, `Absent`, `Sick`, `Excused`, Wajib)
		- `remarks` (Text, Opsional)
- **Output Payload:**
	- `is_verified` (Boolean: `true`)
	- `submitted_records_count` (Integer)
	- `verification_timestamp` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `400 Bad Request`: Data siswa aktif belum terisi status presensi secara lengkap.
	- `409 Conflict`: Sesi presensi telah melewati batas kunci tengah malam (*midnight lock*).
---
### 4.2 Grading and Academic Reporting (`grading`)
#### 4.2.1 `configure_assessment_weights`
- **Execution Context:** Menentukan komponen evaluasi dan bobot nilai per mata pelajaran dalam semester.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `subject_id` (UUID, Wajib)
	- `academic_term_id` (UUID, Wajib)
	- `weight_allocations` (Array of Objects, Wajib):
		- `category_name` (Varchar(64), Wajib)
		- `weight_percentage` (Integer, Wajib)
- **Output Payload:**
	- `configured_categories_count` (Integer)
	- `total_cumulative_weight` (Integer: Tepat bernilai 100)
- **Exception Conditions:**
	- `422 Unprocessable Content`: Akumulasi bobot persentase tidak sama dengan 100%.
	- `409 Conflict`: Komponen nilai telah memiliki rekaman nilai siswa aktif untuk periode ini.
#### 4.2.2 `record_student_grade`
- **Execution Context:** Menyimpan atau memperbarui nilai numerik mentah siswa per komponen penilaian.
- **Access Authorization:** Assigned Course Instructor, System Administrator.
- **Input Parameters:**
	- `assessment_config_id` (UUID, Wajib)
	- `student_profile_id` (UUID, Wajib)
	- `raw_score` (Decimal(5,2), Wajib, Rentang: 0.00 s.d. 100.00)
- **Output Payload:**
	- `grade_entry_id` (UUID)
	- `calculated_running_average` (Decimal)
- **Exception Conditions:**
	- `422 Unprocessable Content`: Nilai numerik berada di luar batas rentang 0.00 hingga 100.00.
	- `403 Forbidden`: Siswa tidak terdaftar aktif pada kelas mata pelajaran bersangkutan.
#### 4.2.3 `publish_term_report_card`
- **Execution Context:** Membekukan seluruh rekaman nilai mata pelajaran dan menerbitkan rapor resmi.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `student_profile_id` (UUID, Wajib)
	- `academic_term_id` (UUID, Wajib)
- **Output Payload:**
	- `report_card_id` (UUID)
	- `publication_status` (Enumerasi: `Published`)
	- `calculated_grade_point` (Decimal)
	- `published_at` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `412 Precondition Failed`: Terdapat mata pelajaran wajib yang belum memiliki komponen nilai tuntas.
---
### 4.3 Guardian Self-Service (`guardian`)
#### 4.3.1 `query_dependent_overview`
- **Execution Context:** Mengambil ringkasan profil akademik dan presensi seluruh anak terhubung.
- **Access Authorization:** Authenticated Guardian.
- **Input Parameters:** Tidak ada (Diambil otomatis secara kriptografis dari sesi akun pengguna aktif).
- **Output Payload:**
	- `dependents` (Array of Objects):
		- `student_profile_id` (UUID)
		- `full_legal_name` (Varchar)
		- `classroom_cohort_label` (Varchar)
		- `cumulative_attendance_percentage` (Decimal)
		- `latest_published_report_id` (UUID atau Null)
- **Exception Conditions:**
	- `404 Not Found`: Akun wali murid belum memiliki relasi terverifikasi ke profil siswa.
---
### 4.4 Roster and Identity Allocation (`identity`)
#### 4.4.1 `provision_master_identity`
- **Execution Context:** Menambahkan entitas biodata master civitas ke direktori sekolah.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `full_legal_name` (Varchar(255), Wajib)
	- `national_identity_number` (Varchar(32), Wajib)
	- `gender` (Enumerasi: `Male`, `Female`, Wajib)
	- `birth_date` (Date, Wajib)
	- `role_classification` (Enumerasi: `Student`, `Instructor`, `Administrative Staff`, Wajib)
	- `email` (Varchar(255), Opsional)
- **Output Payload:**
	- `profile_id` (UUID)
	- `institutional_identifier` (Varchar)
- **Exception Conditions:**
	- `409 Conflict`: Nomor Induk Kependudukan (NIK) telah terdaftar di direktori master.
#### 4.4.2 `assign_cohort_roster`
- **Execution Context:** Memasukkan siswa aktif ke rombongan belajar kelas per semester.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `student_profile_id` (UUID, Wajib)
	- `classroom_cohort_id` (UUID, Wajib)
- **Output Payload:**
	- `enrollment_id` (UUID)
	- `remaining_cohort_capacity` (Integer)
- **Exception Conditions:**
	- `409 Conflict`: Siswa telah terdaftar pada rombel aktif lain dalam periode akademik yang sama.
	- `422 Unprocessable Content`: Kapasitas maksimum rombongan belajar telah terpenuhi.
---
### 4.5 Public Admissions (`admissions`)
#### 4.5.1 `submit_public_admission_application`
- **Execution Context:** Menerima formulir pendaftaran mandiri calon siswa dari portal publik via proteksi Upstash Redis & Cloudflare Turnstile.
- **Access Authorization:** Public Guest (Anonim).
- **Input Parameters:**
	- `prospective_student_name` (Varchar(255), Wajib)
	- `prospective_student_birth_date` (Date, Wajib)
	- `guardian_contact_name` (Varchar(255), Wajib)
	- `guardian_contact_phone` (Varchar(32), Wajib)
	- `guardian_contact_email` (Varchar(255), Wajib)
	- `submitted_documents_url` (Text, Opsional, Tautan berkas Cloudflare R2)
	- `turnstile_token` (Text, Wajib, Token validasi Cloudflare Turnstile)
- **Output Payload:**
	- `registration_tracking_code` (Varchar, Format: `ADM-YYYYMMDD-XXXX`)
	- `application_status` (Enumerasi: `Pending Review`)
	- `submission_timestamp` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `429 Too Many Requests`: Frekuensi pendaftaran melampaui batas kuota 5 submisi per 15 menit per IP (Upstash Redis guardrail).
	- `403 Forbidden`: Token Cloudflare Turnstile tidak valid atau gagal verifikasi bot.
	- `422 Unprocessable Content`: Format surat elektronik atau nomor telepon tidak memenuhi sintaks valid.
#### 4.5.2 `adjudicate_admission_application`
- **Execution Context:** Memberikan putusan verifikasi atas berkas formulir calon siswa.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `application_id` (UUID, Wajib)
	- `adjudication_verdict` (Enumerasi: `Approved`, `Rejected`, `Information Required`, Wajib)
	- `adjudication_notes` (Text, Opsional)
- **Output Payload:**
	- `application_status` (Enumerasi: Status putusan baru)
	- `provisioned_profile_id` (UUID atau Null, Dihasilkan otomatis saat status `Approved`)
- **Exception Conditions:**
	- `404 Not Found`: Berkas pendaftaran tidak ditemukan.
---
## 5. Standard Operational Error Response Codes
| Status Code | Classification | Meaning and Recovery Directives |
|---|---|---|
| **`400 Bad Request`** | Validation Syntax Error | Muatan parameter gagal validasi skema dasar; perbaiki struktur input data |
| **`401 Unauthorized`** | Authentication Missing | Token sesi otentikasi tidak ada atau kedaluwarsa; autentikasi ulang akun |
| **`403 Forbidden`** | Authorization Violation | Pengguna melanggar hak peran atau token perlindungan bot ditolak |
| **`404 Not Found`** | Resource Missing | Entitas target tidak ditemukan di dalam ruang nama relasional basis data |
| **`409 Conflict`** | Constraint Conflict | Melanggar indeks unik, alokasi duplikat, atau batas kunci tengah malam |
| **`422 Unprocessable Content`** | Business Logic Rejection | Sintaks masukan valid namun melanggar aturan bisnis modul |
| **`429 Too Many Requests`** | Rate Limiting Triggered | Frekuensi permintaan melampaui batas ambang pada rute publik |
| **`500 Internal Error`** | Unhandled System Exception | Galat komputasi sisi server; telemetri insiden otomatis terkirim ke Slack |