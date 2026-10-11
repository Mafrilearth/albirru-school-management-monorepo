> **Document Purpose:** Physical table schema specifications, relational data conventions, referential integrity constraints, performance indexing strategies, and PostgreSQL Row-Level Security policies.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Relational Database Specification | Statutory database architecture specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Production relational database baseline specification |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/03-relational-database-specification.md` | File path within the repository |
---
## 2. Structural Conventions and Global Data Standards
### 2.1 Primary Keys and Identifier Types
Every relational table uses Universally Unique Identifier version 7 (UUIDv7) as its primary key (`id`). This guarantees natural chronological sorting, optimal B-Tree index locality, zero ID collision risk, and complete protection against Insecure Direct Object Reference (IDOR) enumeration attacks.
### 2.2 Mandatory Audit Columns
All operational tables consistently maintain three audit columns:
- `created_at` (Timestamp with Time Zone, Default: Current Time, Not Null)
- `updated_at` (Timestamp with Time Zone, Default: Current Time, Not Null)
- `created_by` (UUID, Foreign Key referencing `users.id`, Nullable only for public registration intakes)
### 2.3 Logical Deactivation Policy
Physical row deletion (*hard delete*) is strictly forbidden across all member, academic, and attendance tables. Record deactivation is handled through the logical status column `is_active` (Boolean, Default: True, Not Null).
---
## 3. Relational Table Schemas
### 3.1 Domain Identity and Roster (`identity`)
#### 3.1.1 Table: `users`
Stores security authentication accounts bound to the authentication engine.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique security principal identifier |
| **`email`** | Varchar(255) | Unique, Not Null | Registered electronic mail address |
| **`role`** | Enumeration | Not Null | `System Administrator`, `Instructor`, `Guardian`, `Public Guest` |
| **`is_active`** | Boolean | Default True, Not Null | System access qualification flag |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Account initialization timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Last account modification timestamp |
#### 3.1.2 Table: `profiles`
Stores institutional biodata attributes isolated from the auth credentials engine.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique member profile identifier |
| **`user_id`** | UUID | Foreign Key (`users.id`), Unique, Nullable | Association to active authentication account |
| **`full_legal_name`** | Varchar(255) | Not Null | Full legal name matching civil documents |
| **`national_identity_number`** | Varchar(32) | Unique, Not Null | Unique National Identity Number (NIK) |
| **`gender`** | Enumeration | Not Null | `Male`, `Female` |
| **`birth_date`** | Date | Not Null | Official legal date of birth |
| **`phone_number`** | Varchar(32) | Nullable | Primary contact telephone number |
| **`address_street`** | Text | Nullable | Residential street address |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Profile record creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Last profile update timestamp |
#### 3.1.3 Table: `academic_terms`
Stores operational calendar terms and active academic cycles.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique academic term identifier |
| **`term_code`** | Varchar(32) | Unique, Not Null | Standard term code (e.g. `2026-2027-SEM-1`) |
| **`title`** | Varchar(128) | Not Null | Term title label (e.g. Odd Semester 2026/2027) |
| **`start_date`** | Date | Not Null | Cycle calendar start date |
| **`end_date`** | Date | Not Null | Cycle calendar end date |
| **`is_active`** | Boolean | Default False, Not Null | Active term indicator (Singleton: exactly 1 is true) |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Record creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Record update timestamp |
#### 3.1.4 Table: `classroom_cohorts`
Stores classroom cohort entities within an active academic term.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique cohort identifier |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Reference to active academic term |
| **`grade_level`** | Integer | Not Null | Primary school grade level (1 through 6) |
| **`section_name`** | Varchar(32) | Not Null | Cohort section label (e.g. `A`, `B`) |
| **`lead_instructor_profile_id`** | UUID | Foreign Key (`profiles.id`), Nullable | Reference to lead homeroom instructor |
| **`maximum_capacity`** | Integer | Default 30, Not Null | Maximum allowed student headcount |
| **`is_active`** | Boolean | Default True, Not Null | Operational cohort status |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Record creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Record update timestamp |
#### 3.1.5 Table: `cohort_enrollments`
Maps active student enrollments into specific classroom cohorts per term.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique enrollment association identifier |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to enrolled student profile |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Reference to target cohort allocation |
| **`enrollment_status`** | Enumeration | Not Null | `Active`, `Transferred`, `Withdrawn`, `Completed` |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Enrollment inception timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Last enrollment status update timestamp |
---
### 3.2 Domain Attendance (`attendance`)
#### 3.2.1 Table: `attendance_sessions`
Records daily attendance session initialization for a cohort on a given date.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique attendance session identifier |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Reference to cohort |
| **`session_date`** | Date | Not Null | Calendar date session was conducted |
| **`recording_instructor_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to presiding instructor |
| **`is_verified`** | Boolean | Default False, Not Null | Verification completion flag |
| **`is_locked`** | Boolean | Default False, Not Null | Post-midnight automated lock flag |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Session creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Last session mutation timestamp |
#### 3.2.2 Table: `attendance_records`
Stores specific student presence statuses within an attendance session.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique student presence record identifier |
| **`attendance_session_id`** | UUID | Foreign Key (`attendance_sessions.id`), Not Null | Reference to parent session |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to evaluated student profile |
| **`status`** | Enumeration | Not Null | `Present`, `Absent`, `Sick`, `Excused` |
| **`remarks`** | Text | Nullable | Optional explanatory note or medical excuse |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Record creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Status mutation timestamp |
---
### 3.3 Domain Grading and Academic Reporting (`grading`)
#### 3.3.1 Table: `subjects`
Stores the institutional curriculum master course catalog.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique subject course identifier |
| **`code`** | Varchar(32) | Unique, Not Null | Subject course code (e.g. `MATH-PRI`) |
| **`name`** | Varchar(128) | Not Null | Official curriculum course title |
| **`is_active`** | Boolean | Default True, Not Null | Curriculum availability flag |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Master creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Curriculum update timestamp |
#### 3.3.2 Table: `assessment_configurations`
Stores percentage weight configurations for assessment categories per term.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique assessment configuration identifier |
| **`subject_id`** | UUID | Foreign Key (`subjects.id`), Not Null | Reference to subject course |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Reference to active academic term |
| **`category_name`** | Varchar(64) | Not Null | Component (Daily Assignments, Midterm, Final, Skills) |
| **`weight_percentage`** | Integer | Not Null | Integer weight percentage (Sum must equal 100%) |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Configuration creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Weight update timestamp |
#### 3.3.3 Table: `student_grades`
Stores raw numeric grade entries for a student on a specific component.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique grade record identifier |
| **`assessment_config_id`** | UUID | Foreign Key (`assessment_configurations.id`), Not Null | Reference to assessment component |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to graded student profile |
| **`evaluator_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to evaluating instructor |
| **`raw_score`** | Decimal(5,2) | Not Null | Numeric score constrained from 0.00 to 100.00 |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Score entry timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Score revision timestamp |
#### 3.3.4 Table: `report_cards`
Stores finalized term report card records and their publication freeze state.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique report card record identifier |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to target student profile |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Reference to report academic term |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Reference to student cohort |
| **`calculated_grade_point`** | Decimal(4,2) | Nullable | Final weighted average grade |
| **`publication_status`** | Enumeration | Default Draft, Not Null | `Draft`, `Pending Verification`, `Published` |
| **`published_at`** | Timestamp with Time Zone | Nullable | Administrative publication sign-off timestamp |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Draft report card creation timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Publication status update timestamp |
---
### 3.4 Domain Guardian (`guardian`)
#### 3.4.1 Table: `guardian_student_relations`
Maps verified legal custody relationships between guardian accounts and students.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique legal relationship identifier |
| **`guardian_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to guardian biodata profile |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Reference to dependent student profile |
| **`relationship_type`** | Enumeration | Not Null | `Father`, `Mother`, `Legal Guardian` |
| **`is_verified`** | Boolean | Default False, Not Null | Legal validity verification status flag |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Relationship inception timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Verification status update timestamp |
---
### 3.5 Domain Admissions (`admissions`)
#### 3.5.1 Table: `admission_applications`
Ingests digital admission applications submitted from the public portal.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Unique application intake identifier |
| **`registration_tracking_code`** | Varchar(32) | Unique, Not Null | Unique tracking code (Format: `ADM-YYYYMMDD-XXXX`) |
| **`prospective_student_name`** | Varchar(255) | Not Null | Full legal name of prospective student |
| **`prospective_student_birth_date`** | Date | Not Null | Date of birth of prospective student |
| **`guardian_contact_name`** | Varchar(255) | Not Null | Full legal name of parent or guardian |
| **`guardian_contact_phone`** | Varchar(32) | Not Null | Active telephone number |
| **`guardian_contact_email`** | Varchar(255) | Not Null | Active electronic mail address |
| **`submitted_documents_url`** | Text | Nullable | Supporting documents storage URI |
| **`application_status`** | Enumeration | Default Pending Review, Not Null | `Pending Review`, `Information Required`, `Approved`, `Rejected` |
| **`adjudicated_by`** | UUID | Foreign Key (`profiles.id`), Nullable | Reference to reviewing administrator |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Application submission timestamp |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Adjudication decision timestamp |
---
## 4. Referential Integrity and Composite Constraints
| Target Relational Table | Composite Constraint Type | Enforced Rule | Business Objective |
|---|---|---|---|
| **`cohort_enrollments`** | Composite Unique Index | `(student_profile_id, classroom_cohort_id)` | Prevents duplicate student assignment to the same cohort |
| **`attendance_sessions`** | Composite Unique Index | `(classroom_cohort_id, session_date)` | Enforces exactly one attendance session per cohort per date |
| **`attendance_records`** | Composite Unique Index | `(attendance_session_id, student_profile_id)` | Guarantees exactly one attendance status per student per session |
| **`assessment_configurations`** | Composite Unique Index | `(subject_id, academic_term_id, category_name)` | Prevents duplicate assessment category weights per subject term |
| **`student_grades`** | Composite Unique Index | `(assessment_config_id, student_profile_id)` | Enforces exactly one score per assessment component per student |
| **`report_cards`** | Composite Unique Index | `(student_profile_id, academic_term_id)` | Restricts to one report card per student per term |
| **`guardian_student_relations`** | Composite Unique Index | `(guardian_profile_id, student_profile_id)` | Eliminates duplicate relationship mappings for the same guardian-student pair |
---
## 5. Performance Indexing Strategy and Row Security Directives
### 5.1 Indexing Policies for Query Latency
- **Foreign Key Coverage:** All foreign key columns (`_id`) are indexed with standard B-Trees to optimize relational joins and eliminate full table locks during writes.
- **Chronological Range Indexes:** Columns `attendance_sessions.session_date` and `student_grades.created_at` maintain descending B-Tree indexes to accelerate date-range queries.
- **Exact Match Lookup Indexes:** Columns `admission_applications.registration_tracking_code` and `profiles.national_identity_number` maintain unique indexes for instant lookups.
### 5.2 Row-Level Access Policies (PostgreSQL RLS)
- **Profiles Table Isolation:** Users are permitted to read and update `profiles` rows only when `user_id` matches the authenticated session identity claim.
- **Instructor Cohort Scope:** Instructors are restricted to mutate `attendance_records` and `student_grades` exclusively for cohorts and subjects assigned to them.
- **Guardian Dependent Scope:** Guardian accounts are granted read permissions exclusively on attendance and published report cards for dependents verified in `guardian_student_relations`.
- **Public Admission Boundary:** `admission_applications` permits unauthenticated inserts from public forms, while select and update operations are strictly restricted to System Administrators.