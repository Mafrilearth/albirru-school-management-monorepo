> **Document Purpose:** Modular user interface component anatomical deconstructions, internal slot hierarchy, static and dynamic microcopy labels, visual state machine representations, and system feedback.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | User Interface Component Anatomy Specification | Statutory component anatomy specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Baseline component anatomy specification |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/07-user-interface-component-anatomy-specification.md` | File path within the repository |
---
## 2. Structural Component Tree and Content Standards
### 2.1 Anatomical Deconstruction Methodology
Every component specification enforces a deterministic 4-layer deconstruction protocol:
1. **Container and Boundary Properties:** Physical dimensions, vertical/horizontal spacing tokens, borders, border radii, and background surface colors.
2. **Internal Slot Hierarchy:** Sequential order of child slots, text labels, Lucide icons, input surfaces, and action triggers.
3. **Exact Content Labels and Formats:** Verbatim microcopy text without abbreviations, canonical numeric formats, and realistic placeholder examples.
4. **State Machine Representations:** Explicit visual behaviors across *Initial*, *Filled*, *Active/Focus*, *Loading/Skeleton*, *Validation Error*, and *Locked/Disabled* states.
### 2.2 Copywriting and Formatting Directives
- **Realistic Data Placeholders:** Input placeholders must reflect realistic data formats (e.g. `Muhammad Fauzul Hanif`) rather than generic instructions.
- **Explicit Quantitative Metrics:** Quantitative numbers explicitly declare units (e.g. `100.00%`, `30 Students`, `85.00/100`).
- **Canonical Status Vocabulary:** Status labels are strictly bound to standard keywords: `Present`, `Absent`, `Sick`, `Excused`, `Draft`, `Pending Verification`, `Published`, `Pending Review`, `Approved`, `Rejected`.
---
## 3. Granular Module Component Anatomy
### 3.1 Daily Attendance Tracking (`attendance`)
#### 3.1.1 Attendance Headcount Metric Strip
- **Placement:** Top right corner of the classroom attendance workspace.
- **Container Boundaries:** Horizontal row, 48px height, vertical padding `space-4`, horizontal padding `space-8`, gap `space-8`, background `color-surface-base`, border 1px `color-border-subtle`, radius 8px.
- **Slot Hierarchy:**
	- **Slot 1 (Present Metric Badge):** Soft emerald background, 16px `CheckCircle` icon, static label `Present:`, dynamic value `28`.
	- **Slot 2 (Absent Metric Badge):** Soft rose background, 16px `XCircle` icon, static label `Absent:`, dynamic value `1`.
	- **Slot 3 (Sick Metric Badge):** Soft amber background, 16px `AlertCircle` icon, static label `Sick:`, dynamic value `1`.
	- **Slot 4 (Excused Metric Badge):** Soft sky blue background, 16px `HelpCircle` icon, static label `Excused:`, dynamic value `0`.
	- **Slot 5 (Cohort Total Badge):** Neutral background, static label `Total Enrolled:`, dynamic value `30 Students`.
- **State Behaviors:**
	- *Loading:* Renders 5 pulsing skeleton pills measuring 90px × 32px (16px radius).
	- *Reconciled:* Numbers update immediately with smooth transition animations as student row statuses mutate.
#### 3.1.2 Attendance Roster Data Row
- **Placement:** Repeating row unit within the attendance register table.
- **Container Boundaries:** Full-width table row, minimum 60px height, middle vertical alignment, bottom 1px border `color-border-subtle`, hover background `color-surface-base`.
- **Slot Hierarchy:**
	- **Slot 1 (Sequence Index):** Width 40px, `font-caption`, center text (format: `01`, `02`).
	- **Slot 2 (Student Identity Group):** Width 280px, vertical stack:
		- Primary Row: `font-subheading` (Semi-Bold 600, `color-brand-primary`), rendering official student legal name.
		- Secondary Row: `font-caption` (`color-text-muted`), static label `NIK:` followed by national identity number.
	- **Slot 3 (Mutually Exclusive Status Segmented Control):** Width 360px, group of 4 horizontal buttons, 36px height, 2px padding, background `color-surface-base`, 1px border `color-border-subtle`, radius 6px:
		- Button A: 14px `Check` icon + Text `Present`
		- Button B: 14px `X` icon + Text `Absent`
		- Button C: 14px `Thermometer` icon + Text `Sick`
		- Button D: 14px `FileText` icon + Text `Excused`
	- **Slot 4 (Remarks Note Input):** Dynamic width (minimum 200px):
		- *Closed:* Secondary text button with 14px `MessageSquare` icon + Text `Add Note`.
		- *Open:* Single-line input field, 36px height, 1px border `color-border-subtle`, padding `space-4` vertical and `space-8` horizontal, placeholder: `Enter absence explanation or doctor note...`.
- **State Behaviors:**
	- *Active Selection:* Selected button filled with solid semantic color (`color-status-present`, `color-status-absent`, etc.) with white text; unselected buttons transparent with dark slate text.
	- *Midnight Locked:* Entire row controls transition to 0.6 opacity; interactions disabled; tooltip: `Attendance session automatically locked post-midnight`.
---
### 3.2 Grading and Academic Reporting (`grading`)
#### 3.2.1 Assessment Weight Summary Banner
- **Placement:** Header area immediately above subject grade evaluation grid.
- **Container Boundaries:** Full width, vertical padding `space-12`, horizontal padding `space-16`, background `color-surface-base`, border 1px `color-border-subtle`, radius 8px, space-between flex layout.
- **Slot Hierarchy:**
	- **Left Slot (Curriculum Metadata):**
		- Title: `font-heading-2`, example: `Mathematics - Grade 4 Primary`.
		- Subtitle: `font-caption`, format: `Curriculum Code: MATH-PRI-04 | Term: Odd Semester 2026/2027`.
	- **Right Slot (Component Weight Verification):**
		- Horizontal pill list of evaluation categories: `Daily Tasks: 20%`, `Skills: 20%`, `Midterm: 30%`, `Final: 30%`.
		- Cumulative Weight Badge: `Total Weight: 100%` (emerald text if valid 100%, rose red if unequal to 100%).
#### 3.2.2 High-Density Score Entry Cell
- **Placement:** Data grid cell on student grade evaluation matrix.
- **Container Boundaries:** Table data cell, width 110px, height 52px, padding `space-4`, center alignment.
- **Slot Hierarchy:** Numeric input, 100% width, 40px height, radius 6px, `font-body`, centered text, 1px border `color-border-subtle`.
- **Format & Value:** Placeholder `0.00`, constraining decimal scores from 0.00 to 100.00.
- **State Behaviors:**
	- *Empty:* Blank value, background `color-surface-card`, 1px border `color-border-subtle`.
	- *Valid Saved:* Filled numeric score (e.g. `87.50`), subtle green flash upon commit.
	- *Boundary Error:* If input \< 0.00 or \> 100.00, border turns 2px `color-status-absent`, popover microcopy: `Score must be between 0.00 and 100.00`.
	- *Published (Locked):* Input box transforms into a permanent static text label without an editable border.
---
### 3.3 Guardian Portal (`guardian`)
#### 3.3.1 Dependent Profile Header Card
- **Placement:** Top area of guardian portal monitoring workspace.
- **Container Boundaries:** Full width, padding `space-24`, background `color-surface-card`, border 1px `color-border-subtle`, radius 12px, soft elevation shadow.
- **Slot Hierarchy:**
	- **Left Slot (Connected Student Biodata):**
		- Avatar: Circular initials badge 64px × 64px, background `color-brand-primary`, white text.
		- Text Stack: Student legal name (`font-heading-1`), active cohort (`font-subheading`), institutional ID (`font-caption`, format: `NIS: STU-2026-0042 | NIK: 3273...`).
	- **Right Slot (Key Metric Cards):**
		- *Attendance Card:* Label `Attendance Rate`, large metric `96.7%` (`font-heading-1`, emerald text), sub-label `28 Present out of 29 Sessions`.
		- *Report Card:* Label `Term Report Card`, status badge `Published` (emerald filled chip), secondary action button with `Download` icon + Text `Download Official Report`.
---
### 3.4 Roster and Identity Allocation (`identity`)
#### 3.4.1 Master Identity Provisioning Drawer
- **Placement:** Slide-over drawer docked to right viewport edge (fixed 480px width, height 100vh).
- **Container Boundaries:** Background `color-surface-card`, left border 1px `color-border-subtle`, padding `space-24`, flex column layout.
- **Slot Hierarchy:**
	- **Header:** Title `font-heading-1` (`Provision New Community Member`), subtitle `font-caption`, close button with 20px `X` icon.
	- **Form (Vertical scroll container, gap `space-16`):**
		- Field 1: Label `Full Legal Name (Required)`, input placeholder: `Muhammad Fauzul Hanif`.
		- Field 2: Label `National Identity Number / NIK (Required)`, input placeholder: `16-digit NIK number`.
		- Field 3: Label `Organizational Role Classification`, 3 radio cards: `Student`, `Instructor`, `Administrative Staff`.
		- Field 4: Parallel dual columns: `Gender` (dropdown `Male`, `Female`) and `Date of Birth` (date picker `YYYY-MM-DD`).
		- Field 5: Label `Electronic Mail / Email (Optional)`, input placeholder: `name@sdalbirru.sch.id`.
	- **Action Footer:** Top border 1px `color-border-subtle`, secondary button `Cancel` and primary button `Save Identity Record`.
---
### 3.5 Public Admissions and Information (`admissions`)
#### 3.5.1 Multi-Step Admission Stepper Ribbon
- **Placement:** Top section of `/admission` registration form container.
- **Container Boundaries:** Full width, max width 800px, centered margin, bottom margin `space-32`, horizontal flex row.
- **Slot Hierarchy:**
	- **Step 1:** 36px indicator circle (number `1`, active: background `color-brand-primary`, white text), bottom label `1. Prospective Student`.
	- **Divider 1:** 1px horizontal line, background `color-border-subtle`, flex-grow.
	- **Step 2:** 36px indicator circle (number `2`, inactive: transparent, 2px border, dark slate text), bottom label `2. Guardian Details`.
	- **Divider 2:** 1px horizontal line, background `color-border-subtle`, flex-grow.
	- **Step 3:** 36px indicator circle (number `3`, inactive), bottom label `3. Documents`.
- **Completed State:** Circle fills with `color-brand-accent` (emerald) and displays an 18px `Check` icon replacing the step number.
#### 3.5.2 Application Verification Tracking Card
- **Placement:** Center screen of `/admission/status` following tracking code entry.
- **Container Boundaries:** Max width 600px, centered, background `color-surface-card`, border 1px `color-border-subtle`, radius 12px, padding `space-32`, medium elevation shadow.
- **Slot Hierarchy:**
	- **Top Ribbon:** Label `font-caption` (`Official Application Tracking Code`), code display `font-heading-1` monospace: `ADM-20261008-0841`.
	- **Status Callout Box (Full banner, padding `space-16`, radius 8px, vertical margin `space-16`):**
		- *Pending Review:* Soft amber background, 20px `Clock` icon, title: `Pending Document Review`, description: `Documents in verification queue (est. 3 business days).`
		- *Approved:* Soft emerald background, 20px `CheckCircle2` icon, title: `Application Approved`, description: `Student identity provisioned. Please check guardian email.`
		- *Information Required:* Soft sky blue background, 20px `AlertTriangle` icon, title: `Additional Information Required`, description: administrator remarks text.
	- **Summary Data Table:** Prospective student name, guardian applicant name, and submission timestamp.
---
## 4. Micro-Interaction and Feedback States
### 4.1 Skeleton Screen Dimensions
| Target Component | Skeleton Container Dimensions | Layout Placement | Animation Profile |
|---|---|---|---|
| **Attendance Metric Strip** | 5 pills, each 90px × 32px | Top ribbon of attendance workspace | Opacity pulse 0.4 to 0.8 |
| **Attendance Table Row** | Full width × 60px height (10 rows) | Table body container | Staggered vertical pulse |
| **Grade Entry Cell** | 110px width × 40px height per cell | Grade matrix coordinate points | Synchronized grid pulse |
| **Dependent Profile Card** | Full width × 160px height | Top of guardian portal area | Uniform container pulse |
| **Admission Status Card** | 600px width × 340px height | Center of tracking screen | Uniform single card pulse |
### 4.2 Ephemeral Toast Notification Microcopy Registry
| Triggering Event | Toast Variant | Exact Title Microcopy | Exact Body Description Microcopy |
|---|---|---|---|
| **Attendance Session Submitted** | Success (Emerald) | `Attendance Finalized` | `Cohort attendance register verified for 30 students.` |
| **Attendance Past Midnight Lock** | Conflict Error (Rose) | `Data Mutation Blocked` | `Attendance session automatically locked post-midnight.` |
| **Grade Score Saved** | Success (Emerald) | `Student Grade Saved` | `Numeric score recorded and semester average updated.` |
| **Grade Boundary Violation** | Validation Error (Rose) | `Invalid Grade Score` | `Score must fall strictly between 0.00 and 100.00.` |
| **Admission Intake Successful** | Success (Emerald) | `Application Submitted` | `Tracking code issued. Preserve code to check status.` |
| **Rate Limit Exceeded** | Warning (Amber) | `Submission Limit Exceeded` | `Too many requests from this network. Try again in 15 minutes.` |