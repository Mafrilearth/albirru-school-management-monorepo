> **Document Purpose:** Business requirements specification, product functional boundaries, user role authorization matrix, and minimum viable product release acceptance criteria for the school information system.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Product Requirements Specification | Statutory product requirements specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository root governance dashboard |
| **Specification Version** | 1.0.0 | Baseline minimum viable product version |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/01-product-requirements-specification.md` | File path within the repository |
---
## 2. Executive Summary and Problem Statement
### 2.1 Operational Problem
School administration faces operational inefficiencies with manual attendance taking, error-prone student grading calculations across scattered spreadsheets, and delayed delivery of academic report cards to guardians.
### 2.2 System Solution
Provide an isolated, modern modular monolith web application that consolidates the school community directory, daily cohort attendance tracking, weighted academic grade computation, a self-service guardian portal, and prospective student admissions.
### 2.3 Measurable Key Performance Indicators
- Daily classroom attendance recorded in under 3 minutes per cohort.
- Final grade computation and report card rounding achieve 100% absolute mathematical precision.
- Interface mutation and computational transaction response times execute below the 1000 millisecond threshold.
---
## 3. Canonical User Roles and Permission Matrix
| Capability Scope | System Administrator | Instructor | Guardian | Public Guest |
|---|---|---|---|---|
| **Classroom Daily Attendance Entry** | Full Management | Write Cohort Only | Read Dependent Only | Access Denied |
| **Continuous Numeric Grade Submission** | Full Management | Write Assigned Courses | Read Dependent Only | Access Denied |
| **Report Card Freezing and Issuance** | Full Management | Submit Final Draft | Read Dependent Only | Access Denied |
| **Member Identity and Roster Setup** | Full Management | Read Cohort Only | Access Denied | Access Denied |
| **Public Admission Application Intake** | Full Management | Access Denied | Access Denied | Write Submission |
| **Public School Profile Viewing** | Full Management | Read Only | Read Only | Read Only |
---
## 4. Minimum Viable Product Functional Modules
### 4.1 Daily Attendance Tracking
#### 4.1.1 Cohort Attendance Session Inception
- **Initialization:** Instructor initiates a daily attendance session for the assigned cohort on the active calendar date.
- **Execution & Data Intake:** The system populates all active enrolled students, sorted alphabetically by official legal name, defaulting to `Present`.
- **Validation & Exception:** The system rejects session creation if the client calendar date exceeds the server calendar date. Existing sessions redirect to update mode.
- **Finalization:** A summary panel provides immediate real-time attendance metric tallying.
#### 4.1.2 Real-Time Attendance Status Mutation
- **Initialization:** Instructor selects a student record row experiencing an attendance status change.
- **Execution & Data Intake:** Instructor assigns a replacement status (`Absent`, `Sick`, or `Excused`) along with optional explanatory notes.
- **Validation & Exception:** Status assignment is strictly mutually exclusive. Each student has exactly one attendance status per session.
- **Finalization:** Status values are temporarily preserved in the UI and update running totals without a full page reload.
#### 4.1.3 Register Submission and Immutability Lock
- **Initialization:** Instructor triggers the cohort attendance register finalization action.
- **Execution & Data Intake:** The system wraps all student attendance statuses into an atomic database transaction.
- **Validation & Exception:** The system rejects persistence if any active enrolled student lacks an explicit status.
- **Finalization:** Register status transitions to `Verified` and locks automatically at local calendar midnight (*midnight lock*).
---
### 4.2 Grading and Academic Reporting
#### 4.2.1 Assessment Component Weight Configuration
- **Initialization:** Administrator or lead instructor selects the course curriculum and active academic term.
- **Execution & Data Intake:** User configures integer percentage weights for each assessment component (Daily Assignments, Midterm Exam, Final Exam, and Practical Skills).
- **Validation & Exception:** The system rejects persistence if the cumulative weight sum does not equal exactly 100 percent.
- **Finalization:** The weighted grading formula locks as the baseline reference for final report card calculations.
#### 4.2.2 Continuous Numeric Score Intake
- **Initialization:** Instructor opens the class gradebook for their assigned course.
- **Execution & Data Intake:** Instructor enters raw numeric scores on a scale of 0 to 100 per student in a tabular spreadsheet-style interface.
- **Validation & Exception:** Scores below 0 or above 100 are rejected immediately by boundary validation. Non-numeric input is discarded.
- **Finalization:** Weighted course averages recalculate automatically on the client interface.
#### 4.2.3 Report Card Review and Publication Freeze
- **Initialization:** Instructor or administrator opens the report card issuance dashboard at the close of the academic term.
- **Execution & Data Intake:** The system compiles all weighted course scores into student draft report card records.
- **Validation & Exception:** Report cards cannot be published if required core courses lack finalized grades.
- **Finalization:** Administrator executes official sign-off; report card state transitions to `Published`, becomes strictly immutable, and is accessible to guardian accounts.
---
### 4.3 Guardian Portal
#### 4.3.1 Dependent Association Verification
- **Initialization:** Guardian authenticates into the portal using officially registered credentials.
- **Execution & Data Intake:** The security boundary verifies legal relationship ties and renders connected student profile cards.
- **Validation & Exception:** Unauthorized attempts to access student profiles outside legal relationships are rejected with access authorization errors. Unassociated accounts redirect to administrative verification.
- **Finalization:** Guardian selects a student profile to access that specific dependent's monitoring workspace.
#### 4.3.2 Dependent Attendance Metric Monitoring
- **Initialization:** Guardian navigates to the student attendance summary tab.
- **Execution & Data Intake:** The system renders semester-to-date attendance percentage metrics alongside daily calendar logs.
- **Validation & Exception:** Internal teacher notes are filtered out and hidden; the interface displays only statutory status indicators.
- **Finalization:** Guardian receives a clear visual summary of student attendance patterns and unexcused absence flags.
#### 4.3.3 Published Report Card Inspection
- **Initialization:** Guardian navigates to the student academic achievement tab.
- **Execution & Data Intake:** The system displays the catalog of published report cards available for active and historical terms.
- **Validation & Exception:** Report cards in draft or internal review status are completely hidden from view.
- **Finalization:** Complete course grades, instructor remarks, and official achievement ribbons are rendered with PDF document print export options.
---
### 4.4 Roster and Identity Allocation
#### 4.4.1 Master Individual Identity Provisioning
- **Initialization:** Administrator opens the school master identity directory console.
- **Execution & Data Intake:** Administrator inputs identity records (Full Legal Name, National Identity Number, Date of Birth, Gender, and Role: Student, Instructor, or Staff).
- **Validation & Exception:** The system verifies uniqueness of the National Identity Number; duplicates are blocked with conflict notifications.
- **Finalization:** The system issues a permanent Student Identification Number (NISN/NIS) and stores the entity in the master directory.
#### 4.4.2 Cohort Roster Assembly and Term Enrollment
- **Initialization:** Administrator opens cohort allocation management for the active academic year.
- **Execution & Data Intake:** Administrator assigns active students from the directory into designated classroom cohorts.
- **Validation & Exception:** Enrollment is blocked if class size exceeds maximum capacity or if the student is already assigned to another cohort in the same term.
- **Finalization:** Cohort enrollment locks and automatically provisions students into instructor attendance and grading registers.
#### 4.4.3 Logical Identity Deactivation and Archive Preservation
- **Initialization:** Administrator initiates member deactivation (graduation, transfer, or withdrawal).
- **Execution & Data Intake:** Administrator marks profile status as inactive with official administrative reason documentation.
- **Validation & Exception:** Physical row deletion (*hard delete*) is strictly prohibited. All historical attendance and grade data remain intact.
- **Finalization:** Account transitions to `Inactive`, revoking active authentication sessions and excluding the profile from future cohort rosters.
---
### 4.5 Public Information and Admission
#### 4.5.1 Public Institutional Profile Display
- **Initialization:** Public guest visits the school home URL (`/`).
- **Execution & Data Intake:** The system serves the institutional profile, mission and vision, accreditation metrics, and statutory announcements.
- **Validation & Exception:** Public routes require no authentication and operate completely isolated from internal member data directories.
- **Finalization:** Search engines index public pages through Open Graph tags and canonical metadata configurations.
#### 4.5.2 Electronic Admission Application Intake
- **Initialization:** Prospective guardian navigates to the new student admissions portal (`/admissions`).
- **Execution & Data Intake:** Applicant submits digital prospective student data, guardian contacts, and uploads statutory documents (Family Card and Birth Certificate).
- **Validation & Exception:** Uploads are validated against file size boundaries and permitted MIME types; all required fields must pass schema validation.
- **Finalization:** The system issues a unique tracking registration number and places the application into the `Pending Review` queue.
#### 4.5.3 Administrative Admission Application Adjudication
- **Initialization:** Admissions committee opens the application verification review queue.
- **Execution & Data Intake:** Administrator reviews submitted documents and application data integrity.
- **Validation & Exception:** Administrator records an adjudication decision: `Approved`, `Rejected`, or `Information Required`.
- **Finalization:** An `Approved` decision triggers initial student profile generation ready for upcoming academic term roster assignment.
---
## 5. Non-Functional System Constraints
- **Strict Domain Decoupling:** Modules operate with isolated domain context boundaries in a modular monolith without undefined cross-table logic couplings.
- **Transactional Integrity:** Attendance persistence and gradebook finalization execute within atomic database transactions.
- **Audit Trail and Retention:** Every state change in grades and attendance logs user identity and timestamp without physical deletion (*zero hard delete*).
- **Response Latency Upper Bound:** All grade aggregations and interface mutations must respond under the 1000 millisecond threshold under standard connectivity.
---
## 6. Post-Baseline Scalability Registry
| Extended Scope Title | Target Lifecycle Phase | In-Tree Documentation Directive |
|---|---|---|
| **Automated Tuition Billing** | Post-MVP Active (Sprint 2) | Append to Section 4.6 using standard 4-phase workflow template |
| **Computer-Based Examination** | Post-MVP Active (Sprint 3) | Append to Section 4.7 using standard 4-phase workflow template |
| **Learning Management Resources** | Research Pipeline | Append to Section 4.8 following approved architectural justification |