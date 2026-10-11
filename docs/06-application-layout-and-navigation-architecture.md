> **Document Purpose:** Application layout framework specifications, viewport shell boundaries, role-based navigation route hierarchy, spatial layout zoning, and responsive web browser strategies.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Application Layout and Navigation Architecture | Statutory layout and navigation architecture specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Production application layout baseline specification |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/06-application-layout-and-navigation-architecture.md` | File path within the repository |
---
## 2. Global Viewport Shell Topologies
The application structures its layouts into three independent root viewport shells under the Next.js App Router:
| Shell Classification | Route Group Context | Structural Boundaries | Global Behavior and State |
|---|---|---|---|
| **Public Guest Shell** | `src/app/(public)/*` | Fixed top navigation bar (64px) and statutory institutional footer | Unauthenticated access, search-engine indexed canonical content |
| **Authentication Shell** | `src/app/(auth)/*` | Vertically and horizontally centered card dialog (max-width 440px) | Isolated from global navigation, focused entirely on auth forms |
| **Protected Portal Shell** | `src/app/(portal)/*` | Persistent left sidebar (260px) and top utility ribbon (60px) | Session protected, role-based data isolation, modular workspace |
---
## 3. Spatial Layout Zoning for Protected Portal Shell
The protected portal shell (`/portal/*`) applies standardized grid zoning to ensure workflow uniformity across all user roles:
| Layout Zone | Spatial Dimensions | Layout Alignment | Canonical Functional Scope |
|---|---|---|---|
| **Persistent Left Sidebar** | Fixed width 260px, height 100vh | Fixed to left viewport edge on desktop | School emblem, active profile tag, and vertical nav tree |
| **Top Utility Ribbon** | Fixed height 60px, flexible width | Sticky top boundary of workspace | Navigation breadcrumbs, system alerts, and sign-out controls |
| **Primary Workstage Canvas** | Flexible width, auto height | Main container area with vertical scrolling | Tabular registers, gradebooks, metric cards, and forms |
| **Contextual Flyout Drawer** | Fixed width 480px, height 100vh | Slide-over drawer docked to right edge | Member provisioning forms, student inspection, and audit logs |
---
## 4. Role-Based Navigation Routing Tree
### 4.1 System Administrator Workspace Navigation (`/portal/admin/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Master Civitas Directory** | `/portal/admin/identities` | `Users` | Master biodata provisioning, NIS issuance, and account audits |
| **Cohort Roster Setup** | `/portal/admin/rosters` | `Layers` | Classroom cohort allocations per active academic term |
| **Admissions Adjudication** | `/portal/admin/admissions` | `UserCheck` | Review and verification queue for prospective student applications |
| **Academic Term Calendar** | `/portal/admin/terms` | `Calendar` | Term calendar configuration and operational date boundaries |
| **Institutional Settings** | `/portal/admin/settings` | `Settings` | Institutional profile, subject curriculum, and audit logs |
### 4.2 Instructor Workspace Navigation (`/portal/instructor/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Daily Attendance Register** | `/portal/instructor/attendance` | `ClipboardCheck` | Session inception, attendance mutations, and lock submission |
| **Grade Assessment Ledger** | `/portal/instructor/grading` | `Award` | Component score entry and running average computation |
| **Homeroom Cohort Overview** | `/portal/instructor/roster` | `GraduationCap` | Overview of assigned cohort students and achievement summary |
### 4.3 Guardian Self-Service Navigation (`/portal/guardian/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Dependent Monitoring** | `/portal/guardian` | `Home` | Overview dashboard of dependent presence and academic progress |
| **Attendance History** | `/portal/guardian/attendance` | `CalendarDays` | Daily presence calendar log and term attendance percentages |
| **Academic Report Cards** | `/portal/guardian/reports` | `FileText` | Review and PDF export of official published report cards |
---
## 5. Responsive Breakpoint and Collapsible Behavior
The system enforces layout adaptation rules across desktop and mobile browsers:
- **Desktop Viewport (**$`\ge`$** 1024px):** The left sidebar is persistently visible at 260px; the workstage canvas occupies remaining width proportionally.
- **Tablet & Mobile Viewports (\< 1024px):** The left sidebar collapses into an off-canvas slide-out sheet; a hamburger trigger appears in the top ribbon to open navigation.
- **Workstage Density Adaptation:** On viewport widths below 1280px, tabular attendance and grade grids activate horizontal scroll containment without breaking parent layout bounds.
- **Breadcrumb Truncation:** Breadcrumbs limit display to a maximum of 3 hierarchy levels; intermediate levels collapse into an ellipsis icon if ribbon width is constrained.