> **Document Purpose:** Network interface contract specifications, web route topology, Server Actions mutations, payload data schemas, and standard system error codes.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Application Route and Mutation Contract | Statutory network contract specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Production public gate protection contract revision |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/04-application-route-and-mutation-contract.md` | File path within the repository |
---
## 2. Network Topology and Communication Standards
### 2.1 Interface Distribution Architecture
The system leverages Next.js Server Actions for all authenticated transactional data mutations and dynamic data fetching. This pattern eliminates the maintenance overhead of external REST API gateways and guarantees compile-time static type safety. Standard HTTP Route Handlers are dedicated strictly to platform health checks (`/api/health`), cron keep-alives, external telemetry webhooks, and public metadata sitemaps.
### 2.2 Global Envelope and Idempotency Directives
Every Server Action returns a deterministic response envelope containing four standard keys:
- **`is_success`**: Boolean indicating mutation success.
- **`status_code`**: Canonical HTTP status code integer.
- **`response_payload`**: Execution result data object or `null` on failure.
- **`error_descriptor`**: Error descriptor object (`code`, `message`, `field_errors`) or `null` on success.
All critical mutation contracts accept an optional idempotency token to prevent duplicate transaction execution during network retransmissions. All actions verify session integrity, role-based authorization rules, and runtime Zod parsing before domain business logic executes.
---
## 3. Canonical Route Ingress and Access Boundaries
| URL Route Pattern | Rendering & Execution Strategy | Canonical Authorization Level | Purpose and Content Scope |
|---|---|---|---|
| **`/`** | Static Edge Prerendered | Public Guest | Public homepage, institutional profile, and accreditation |
| **`/admission`** | Server Component with Client Island | Public Guest | Self-service prospective student application form |
| **`/admission/status`** | Dynamic Server Rendered | Public Guest | Self-service application tracking via registration code |
| **`/authentication/sign-in`** | Server Component with Client Island | Public Guest | Multi-role user authentication interface |
| **`/portal/admin/*`** | Dynamic Server Rendered | System Administrator | Master directory console, cohort allocations, admissions adjudication |
| **`/portal/instructor/*`** | Dynamic Server Rendered | Instructor | Daily attendance logging and grading registers |
| **`/portal/guardian/*`** | Dynamic Server Rendered | Guardian | Dependent attendance monitoring and report card downloads |
| **`/api/health`** | Route Handler (GET) | Public Guest / Internal Monitor | Platform health verification and database keep-alive |
---
## 4. Domain Server Action Mutation Contracts
### 4.1 Daily Attendance Tracking (`attendance`)
#### 4.1.1 `initialize_attendance_session`
- **Execution Context:** Triggered by instructor when opening the cohort attendance sheet.
- **Access Authorization:** Assigned Cohort Instructor, System Administrator.
- **Input Parameters:**
	- `classroom_cohort_id` (UUID, Required)
	- `session_date` (Date, Required, Format: `YYYY-MM-DD`)
- **Output Payload:**
	- `attendance_session_id` (UUID)
	- `session_status` (Enumeration: `Initialized`, `Previously Existing`)
	- `cohort_roster_headcount` (Integer)
- **Exception Conditions:**
	- `403 Forbidden`: User does not have homeroom/instructor assignment over target cohort.
	- `422 Unprocessable Content`: Session date exceeds current server calendar date.
#### 4.1.2 `submit_attendance_register`
- **Execution Context:** Locks the cohort attendance sheet into verified status.
- **Access Authorization:** Assigned Cohort Instructor, System Administrator.
- **Input Parameters:**
	- `attendance_session_id` (UUID, Required)
	- `status_records` (Array of Objects, Required):
		- `student_profile_id` (UUID, Required)
		- `status` (Enumeration: `Present`, `Absent`, `Sick`, `Excused`, Required)
		- `remarks` (Text, Optional)
- **Output Payload:**
	- `is_verified` (Boolean: `true`)
	- `submitted_records_count` (Integer)
	- `verification_timestamp` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `400 Bad Request`: Incomplete attendance records for enrolled students.
	- `409 Conflict`: Attendance session has passed the midnight lock threshold.
---
### 4.2 Grading and Academic Reporting (`grading`)
#### 4.2.1 `configure_assessment_weights`
- **Execution Context:** Configures evaluation components and percentage weights per subject for a term.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `subject_id` (UUID, Required)
	- `academic_term_id` (UUID, Required)
	- `weight_allocations` (Array of Objects, Required):
		- `category_name` (Varchar(64), Required)
		- `weight_percentage` (Integer, Required)
- **Output Payload:**
	- `configured_categories_count` (Integer)
	- `total_cumulative_weight` (Integer: Exactly 100)
- **Exception Conditions:**
	- `422 Unprocessable Content`: Cumulative percentage weight sum does not equal 100%.
	- `409 Conflict`: Assessment category already possesses active student grade entries.
#### 4.2.2 `record_student_grade`
- **Execution Context:** Records or updates raw numeric grade scores per assessment category.
- **Access Authorization:** Assigned Course Instructor, System Administrator.
- **Input Parameters:**
	- `assessment_config_id` (UUID, Required)
	- `student_profile_id` (UUID, Required)
	- `raw_score` (Decimal(5,2), Required, Range: 0.00 to 100.00)
- **Output Payload:**
	- `grade_entry_id` (UUID)
	- `calculated_running_average` (Decimal)
- **Exception Conditions:**
	- `422 Unprocessable Content`: Numeric score falls outside 0.00 to 100.00 range.
	- `403 Forbidden`: Student is not enrolled in the target course cohort.
#### 4.2.3 `publish_term_report_card`
- **Execution Context:** Freezes all course grade records and publishes official term report card.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `student_profile_id` (UUID, Required)
	- `academic_term_id` (UUID, Required)
- **Output Payload:**
	- `report_card_id` (UUID)
	- `publication_status` (Enumeration: `Published`)
	- `calculated_grade_point` (Decimal)
	- `published_at` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `412 Precondition Failed`: Core compulsory courses lack complete assessment scores.
---
### 4.3 Guardian Self-Service (`guardian`)
#### 4.3.1 `query_dependent_overview`
- **Execution Context:** Retrieves academic profile summaries and attendance metrics for connected dependents.
- **Access Authorization:** Authenticated Guardian.
- **Input Parameters:** None (Cryptographically extracted from active session identity).
- **Output Payload:**
	- `dependents` (Array of Objects):
		- `student_profile_id` (UUID)
		- `full_legal_name` (Varchar)
		- `classroom_cohort_label` (Varchar)
		- `cumulative_attendance_percentage` (Decimal)
		- `latest_published_report_id` (UUID or Null)
- **Exception Conditions:**
	- `404 Not Found`: Guardian account lacks verified relationships to student profiles.
---
### 4.4 Roster and Identity Allocation (`identity`)
#### 4.4.1 `provision_master_identity`
- **Execution Context:** Inserts master community member biodata into the institutional directory.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `full_legal_name` (Varchar(255), Required)
	- `national_identity_number` (Varchar(32), Required)
	- `gender` (Enumeration: `Male`, `Female`, Required)
	- `birth_date` (Date, Required)
	- `role_classification` (Enumeration: `Student`, `Instructor`, `Administrative Staff`, Required)
	- `email` (Varchar(255), Optional)
- **Output Payload:**
	- `profile_id` (UUID)
	- `institutional_identifier` (Varchar)
- **Exception Conditions:**
	- `409 Conflict`: National Identity Number (NIK) is already registered in master directory.
#### 4.4.2 `assign_cohort_roster`
- **Execution Context:** Enrolls active students into classroom cohorts per semester.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `student_profile_id` (UUID, Required)
	- `classroom_cohort_id` (UUID, Required)
- **Output Payload:**
	- `enrollment_id` (UUID)
	- `remaining_cohort_capacity` (Integer)
- **Exception Conditions:**
	- `409 Conflict`: Student is already enrolled in another cohort within the same term.
	- `422 Unprocessable Content`: Maximum classroom cohort capacity has been reached.
---
### 4.5 Public Admissions (`admissions`)
#### 4.5.1 `submit_public_admission_application`
- **Execution Context:** Ingests self-service applicant form from public portal guarded by Upstash Redis & Cloudflare Turnstile.
- **Access Authorization:** Public Guest (Anonymous).
- **Input Parameters:**
	- `prospective_student_name` (Varchar(255), Required)
	- `prospective_student_birth_date` (Date, Required)
	- `guardian_contact_name` (Varchar(255), Required)
	- `guardian_contact_phone` (Varchar(32), Required)
	- `guardian_contact_email` (Varchar(255), Required)
	- `submitted_documents_url` (Text, Optional, Cloudflare R2 storage URI)
	- `turnstile_token` (Text, Required, Cloudflare Turnstile challenge token)
- **Output Payload:**
	- `registration_tracking_code` (Varchar, Format: `ADM-YYYYMMDD-XXXX`)
	- `application_status` (Enumeration: `Pending Review`)
	- `submission_timestamp` (Timestamp with Time Zone)
- **Exception Conditions:**
	- `429 Too Many Requests`: Submission rate exceeds quota of 5 submissions per 15 minutes per IP (Upstash Redis guardrail).
	- `403 Forbidden`: Cloudflare Turnstile token is invalid or fails challenge verification.
	- `422 Unprocessable Content`: Email or phone format fails schema validation syntax.
#### 4.5.2 `adjudicate_admission_application`
- **Execution Context:** Records an adjudication verdict over prospective student application files.
- **Access Authorization:** System Administrator.
- **Input Parameters:**
	- `application_id` (UUID, Required)
	- `adjudication_verdict` (Enumeration: `Approved`, `Rejected`, `Information Required`, Required)
	- `adjudication_notes` (Text, Optional)
- **Output Payload:**
	- `application_status` (Enumeration: Updated verdict status)
	- `provisioned_profile_id` (UUID or Null, Generated automatically upon `Approved` status)
- **Exception Conditions:**
	- `404 Not Found`: Application record not found.
---
## 5. Standard Operational Error Response Codes
| Status Code | Classification | Meaning and Recovery Directives |
|---|---|---|
| **`400 Bad Request`** | Validation Syntax Error | Parameter payload failed baseline schema validation; adjust input format |
| **`401 Unauthorized`** | Authentication Missing | Session token absent or expired; re-authenticate user account |
| **`403 Forbidden`** | Authorization Violation | User violates role privilege or bot protection token was rejected |
| **`404 Not Found`** | Resource Missing | Target entity does not exist within the relational database namespace |
| **`409 Conflict`** | Constraint Conflict | Unique index violation, duplicate allocation, or midnight lock boundary |
| **`422 Unprocessable Content`** | Business Logic Rejection | Input syntax valid but violates domain operational rules |
| **`429 Too Many Requests`** | Rate Limiting Triggered | Request frequency exceeds throttled quota on public routes |
| **`500 Internal Error`** | Unhandled System Exception | Uncaught server exception; automated incident telemetry dispatched to Slack |