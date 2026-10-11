> **Document Purpose:** Quality assurance governance specification, software testing pyramid, automated testing toolchain configuration, minimum viable product boundary verification scenarios, non-functional quality attributes, and continuous integration quality gates.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Quality Assurance and Verification Plan | Statutory specification title for system testing |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Master repository governance dashboard |
| **Specification Version** | 1.0.0 | Baseline production quality testing plan |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/10-quality-assurance-and-verification-plan.md` | File path within repository |
---
## 2. Quality Governance and Testing Pyramid
The verification lifecycle enforces a strict testing pyramid discipline to guarantee functional reliability, logic regression elimination, and absolute computational precision prior to production release:
| Testing Pyramid Tier | Primary Responsibility Scope | Target Verification Engine | Execution Environment Standard |
|---|---|---|---|
| **Unit Verification Tier** | Grade weighting calculation algorithms, pure utility functions, and Zod schema rules | Vitest | CI Pipeline & Pre-Commit Git Hook |
| **Integration Verification Tier** | Server Actions contracts, SQL transactional integrity, and Row-Level Security policies | Vitest (PostgreSQL Container) | CI Pipeline & Local Development Environment |
| **End-to-End Verification Tier** | Multi-role authentication flows, classroom attendance sessions, and admissions intake forms | Playwright | CI Pipeline & Preview Deployments |
---
## 3. Standard Quality Assurance Toolchain
The system standardizes quality assurance on a single platform per functional category to eliminate dependency duplication:
| Verification Functional Scope | Platform Tool | Technical Implementation Profile | Complimentary Quota & Selection Rationale |
|---|---|---|---|
| **Unit & Integration Test Runner** | Vitest | Vite-Native TypeScript Runner | High-speed multi-threaded parallel execution without compilation overhead |
| **Browser End-to-End Engine** | Playwright | Headless Chromium & WebKit | Resilient cross-browser automation with built-in auto-waiting |
| **Database Mocking and Seeding** | PostgreSQL Test Container | Local Dockerized PostgreSQL 16+ | Validates real SQL transactions without consuming managed cloud quotas |
| **Continuous Integration Automation** | GitHub Actions | Ubuntu Standard Runner | Free-tier automated pipeline execution on institutional repositories |
| **Quality Gate Telemetry** | Slack Webhook | Webhook API Specification | Automated delivery of build reports to `#albirru-project-stream` |
---
## 4. Minimum Viable Product Core Test Scenarios
### 4.1 Daily Attendance Tracking (`attendance`)
#### 4.1.1 Session Initialization and Headcount Baseline
- **Precondition:** Active classroom cohort registered with authorized instructor credentials.
- **Execution Step:** Instructor opens class attendance register for today's active calendar date.
- **Expected Outcome:** Attendance register is created, all enrolled students default to `Present` status, and summary attendance counters accurately reflect full headcount.
- **Boundary Exception Test:** Attempting to initialize attendance sessions for future calendar dates must be rejected with a calendar error message.
#### 4.1.2 Status Transition Mutual Exclusion and Counter Integrity
- **Precondition:** Active attendance session is open with all students marked `Present`.
- **Execution Step:** Instructor changes one student's status to `Sick` and provides medical explanation notes.
- **Expected Outcome:** Student status transitions exclusively to `Sick`, `Present` counter decrements by 1, and `Sick` counter increments by 1.
- **Boundary Exception Test:** Rapid multi-clicks on status toggles must resolve deterministically without corrupting summary headcount totals.
#### 4.1.3 Midnight Register Immutability Lock
- **Precondition:** Attendance register has verified status for a past calendar date.
- **Execution Step:** Instructor attempts to mutate student attendance records on the past register without administrator override privileges.
- **Expected Outcome:** Transaction is rejected immediately with an authorization conflict error; historical records remain immutable.
---
### 4.2 Grading and Academic Reporting (`grading`)
#### 4.2.1 Assessment Weight Summation Validation
- **Precondition:** Active academic semester term is open and course catalog is registered.
- **Execution Step:** Administrator inputs percentage allocation weights for each evaluation component (Daily Homework, Midterm Exam, Final Exam, Practical Skills).
- **Expected Outcome:** Configurations totaling exactly 100% are persisted to the database.
- **Boundary Exception Test:** Configurations totaling 99% or 101% are blocked with a domain validation error.
#### 4.2.2 Raw Score Boundary Enforcement
- **Precondition:** Evaluation component configuration is active for a class course.
- **Execution Step:** Instructor inputs numeric student scores into the evaluation grading grid.
- **Expected Outcome:** Decimal scores within range 0.00 to 100.00 are saved and update running averages in real time.
- **Boundary Exception Test:** Negative inputs (< 0) or values exceeding 100 are rejected immediately by form UI constraints and Server Actions.
#### 4.2.3 Report Card Publication Freezing
- **Precondition:** All required course scores for students in the active term are fully populated.
- **Execution Step:** Administrator triggers the official report card publication action.
- **Expected Outcome:** Report card document status transitions to `Published`, student evaluation records freeze into an immutable snapshot, and grades become accessible on the guardian portal.
---
### 4.3 Guardian Self-Service Portal (`guardian`)
#### 4.3.1 Dependent Identity Isolation Boundary
- **Precondition:** Guardian account is authenticated and legally linked to specific enrolled student profiles.
- **Execution Step:** Guardian navigates to attendance summary and academic report card views.
- **Expected Outcome:** View renders profile data, attendance metrics, and report cards belonging strictly to their linked dependents.
- **Boundary Exception Test:** Manually modifying student ID route parameters in the URL to access other students' data triggers a 403 Forbidden authorization rejection.
---
### 4.4 Roster and Identity Allocation (`identity`)
#### 4.4.1 National Identity Number Uniqueness
- **Precondition:** School civitas master directory contains existing active student identity records.
- **Execution Step:** Administrator registers a new profile using an existing National Identity Number (NIK).
- **Expected Outcome:** Database engine rejects write operation (*unique constraint violation*) and surfaces an identity conflict error.
#### 4.4.2 Singleton Classroom Cohort Membership
- **Precondition:** Student is registered in Classroom Cohort A for the active academic term.
- **Execution Step:** Administrator attempts to assign the same student to Classroom Cohort B within the identical term.
- **Expected Outcome:** Cohort assignment is blocked to prevent dual cohort membership in a single academic term.
---
### 4.5 Public Admissions and Information (`admissions`)
#### 4.5.1 Public Application Intake and Identifier Generation
- **Precondition:** Public admissions application form is accessible to unauthenticated guests.
- **Execution Step:** Applicant completes all mandatory fields, uploads document attachments, and submits the form.
- **Expected Outcome:** Application record is persisted with `Pending Review` status and a unique application tracking code is issued on screen.
- **Boundary Exception Test:** Submitting malformed contact telephone numbers or invalid email addresses is blocked immediately by client and server validation schemas.
---
## 5. Non-Functional Quality Attributes and Benchmarks
| Quality Parameter | Verification Methodology | Target Benchmark Threshold | Mandatory Quality Gate Enforcement |
|---|---|---|---|
| **Server Action Execution Latency** | Synthetic transactional load testing | Under 800 milliseconds | Automated CI latency gate |
| **Edge Route Static Hydration** | Browser network waterfall profiling | Under 200 milliseconds | Vercel preview deployment verification |
| **Calculation Rounding Precision** | Deterministic decimal edge unit tests | 0% computational error tolerance | Vitest strict decimal assertion suite |
| **Static Type Verification** | Full repository TypeScript compilation | 0 type errors (`tsc --noEmit`) | Mandatory CI pull request merge blocker |
| **Code Style and Schema Linting** | ESLint static code analysis | 0 critical warnings | Pre-commit Git hook and CI pipeline |
---
## 6. Continuous Deployment Quality Gates
Every pull request submitted to integration (`dev`), staging (`staging`), or production (`main`) branches must sequentially pass all quality gates specified in Document 11. Any failure halts the deployment workflow:
- **Gate 1 (Static Quality):** Static TypeScript type verification and code linting audits must pass with 0 errors.
- **Gate 2 (Logic & Integration Verification):** All grade weighting calculations, attendance immutability locks, and database transactions pass via Vitest.
- **Gate 3 (End-to-End Verification):** Headless Playwright browser tests on critical paths (instructor attendance and public admissions) pass without visual or functional regressions.
- **Gate 4 (Pipeline Telemetry):** Summary build report status is broadcast to Slack channel `#albirru-project-stream`.