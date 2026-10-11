> **Document Purpose:** Sequential layout specification for public web views, visual section anatomical decomposition, production microcopy contracts, and browser statutory content structure.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Landing Page View Architecture | Statutory specification title for public page architecture |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Master repository governance dashboard |
| **Specification Version** | 1.0.0 | Baseline version for public presentation architecture |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/08-landing-page-view-architecture.md` | File path within repository |
---
## 2. Page Hierarchy and Layout Foundations
The public homepage (`/`) operates within the *Public Guest Shell* framework without authentication barriers. The layout renders in a linear single-page vertical flow comprising six sequential sections:
1. **Global Public Navigation Header:** Sticky ribbon featuring school identity and section navigation anchors.
2. **Hero Presentation Section:** Primary institutional value proposition, active admissions intake gate, and operational metric cards.
3. **Institutional Identity and Accreditation Strip:** Statutory legality validation banner, national registration identifiers, and foundation registry.
4. **Academic Pillar and Curriculum Highlights:** Integrated curriculum pillars (Character, STEM, Bilingual Communication).
5. **Direct Action and Admission Intake Callout:** Centralized primary call-to-action card routing to the admission application form.
6. **Statutory Public Institutional Footer:** Official campus directory, authenticated portal shortcuts, and statutory copyright notices.
---
## 3. Granular Section Anatomy and Production Content
### 3.1 Global Public Navigation Header
- **Placement & Dimensions:** Permanently docked to top viewport (`sticky`, `z-index: 50`), fixed height 64px, background `color-surface-card` at 95% opacity with backdrop blur, 1px bottom border `color-border-subtle`.
- **Internal Layout:** Centered container with max-width 1200px, horizontal padding `space-24`, vertically centered flex row (`justify-between`).
- **Slot Hierarchy & Microcopy:**
	- **Left Slot (Institutional Identity):**
		- Vector Emblem: Slate shield and emerald open book insignia (36px × 36px).
		- Text Stack: Institutional title `SD Al-Birru` (`font-heading-2`, Semi-Bold 600, `color-brand-primary`) and statutory sub-label `NPSN: 70010111` (`font-caption`, `color-text-muted`).
	- **Center Slot (Desktop Navigation Links):** Hidden on viewports below 768px, inter-link gap `space-24`:
		- Link 1: Text `School Profile` (anchor target: `#institutional-profile`).
		- Link 2: Text `Academic Programs` (anchor target: `#academic-pillars`).
		- Link 3: Text `Admissions Criteria` (route target: `/admissions`).
		- Link 4: Text `Track Status` (route target: `/admissions/status`).
	- **Right Slot (Quick Action Triggers):** Action gap `space-12`:
		- Secondary Action: Text `Portal Sign In`, route `/sign-in`, transparent background with 1px border `color-border-subtle`, dark slate text.
		- Primary Action: Text `Enroll New Student`, route `/admissions`, solid background `color-brand-primary` with crisp white text.
---
### 3.2 Hero Presentation Section
- **Placement & Dimensions:** Directly below the navigation header, full width, vertical padding `space-48`, horizontal padding `space-24`, background `color-surface-base`.
- **Internal Layout:** Asymmetric two-column desktop grid (60% text content left, 40% metric data card right; single-column stacked on mobile devices), max-width 1200px, column gap `space-32`.
- **Slot Hierarchy & Microcopy:**
	- **Left Column (Core Proposition Block):**
		- Operational Badge: Pill container, emerald background (10% opacity), 1px border `color-brand-accent`, vertical padding `space-4`, horizontal padding `space-12`, bottom margin `space-16`. Emerald `Sparkles` icon 14px + Text: `Academic Year 2026/2027 Admissions Open`.
		- Main Headline (`font-display`, Bold 700, line-height 40px, `color-brand-primary`): `Nurturing Character, Cultivating Knowledge, Building Integrity.`
		- Supporting Paragraph (`font-subheading`, Regular 400, line-height 24px, `color-text-muted`, top margin `space-16`): `SD Al-Birru delivers an integrated primary curriculum grounded in Islamic values in Bandung, fostering disciplined adab, analytical reasoning, and noble moral excellence.`
		- Action Button Group (button gap `space-16`, top margin `space-32`):
			- Primary Button: Height 48px, horizontal padding `space-24`, background `color-brand-primary`, trailing `ArrowRight` icon 18px, text `Register Student Now`.
			- Secondary Button: Height 48px, horizontal padding `space-20`, transparent background, 1px border `color-border-subtle`, leading `FileText` icon 18px, text `Download Information Brochure`.
	- **Right Column (Operational Metric Card):**
		- Card Container: Background `color-surface-card`, 1px border `color-border-subtle`, border radius 16px, padding `space-24`, subtle elevation shadow.
		- Card Header: Text `School Operational Performance Metrics` (`font-heading-2`), bottom border 1px `color-border-subtle`, bottom padding `space-12`.
		- Metric Row 1: Label `Institutional Accreditation Status` \| Value `Grade A (Superior)` (filled emerald pill badge).
		- Metric Row 2: Label `Daily Student Attendance Compliance` \| Value `98.4% On-Time Attendance`.
		- Metric Row 3: Label `Maximum Student-to-Teacher Ratio` \| Value `15 : 1 Focused Instruction`.
---
### 3.3 Institutional Identity and Accreditation Strip
- **Placement & Dimensions:** Full-width dividing banner, vertical padding `space-24`, horizontal padding `space-24`, background `color-surface-card`, top and bottom 1px border `color-border-subtle`.
- **Internal Layout:** Centered flex row, max-width 1200px, responsive multi-column alignment, item gap `space-24`.
- **Statutory Data Items:**
	- Item 1: Label `National School Identification Number (NPSN)` $`\rightarrow`$ Value `70010111`.
	- Item 2: Label `Accreditation Authority` $`\rightarrow`$ Value `National Accreditation Board (BAN-S/M)`.
	- Item 3: Label `Founding Educational Foundation` $`\rightarrow`$ Value `Yayasan Pendidikan Al-Birru`.
	- Item 4: Label `Instructional Medium of Language` $`\rightarrow`$ Value `Indonesian & Formal English Immersion`.
---
### 3.4 Academic Pillar and Curriculum Highlights
- **Placement & Dimensions:** Full width, vertical padding `space-48`, horizontal padding `space-24`, background `color-surface-base`, section anchor `#academic-pillars`.
- **Internal Layout:** Centered vertical container, max-width 1200px.
- **Section Header:**
	- Sub-label: `font-caption`, Semi-Bold 600, uppercase, `color-brand-accent`: `CURRICULUM EXCELLENCE PILLARS`.
	- Title: `font-heading-1`, `color-brand-primary`: `Three Pillars of Integrated Education at SD Al-Birru`.
	- Subtitle: `font-body`, `color-text-muted`: `A balanced pedagogical approach harmonizing profound spiritual adab with rigorous academic competency standards.`
- **Three-Card Grid Structure:** Balanced three columns (`1fr 1fr 1fr`), card gap `space-24`, top margin `space-32`:
	- **Card 1 (Moral Character & Adab Foundations):**
		- Icon: `ShieldCheck` 28px navy slate.
		- Card Title: `font-heading-2`, text `Moral Character & Adab Foundations`.
		- Description: `font-body`, text `Structured daily worship habits, courtesy cultivation, internalized honesty, and mutual cooperation among students.`
	- **Card 2 (Mathematical Literacy & STEM Reasoning):**
		- Icon: `Compass` 28px navy slate.
		- Card Title: `font-heading-2`, text `Mathematical Literacy & STEM Reasoning`.
		- Description: `font-body`, text `Strengthening logical deduction, computational thinking fundamentals, scientific curiosity, and practical problem-solving numeracy.`
	- **Card 3 (Integrated Language Proficiency):**
		- Icon: `Languages` 28px navy slate.
		- Card Title: `font-heading-2`, text `Integrated Language Proficiency`.
		- Description: `font-body`, text `Structured Indonesian language articulation paired with active English vocabulary immersion through daily thematic dialogue.`
---
### 3.5 Direct Action and Admission Intake Callout
- **Placement & Dimensions:** Full width, vertical padding `space-48`, horizontal padding `space-24`, background `color-surface-base`.
- **Internal Layout:** Centered hero card container, max-width 1000px, background `color-brand-primary`, border radius 16px, vertical padding `space-48`, horizontal padding `space-32`, text-align center, white text.
- **Slot Hierarchy & Microcopy:**
	- Title: `font-heading-1`, white text: `Enroll Your Child for Academic Year 2026/2027`.
	- Supporting Paragraph: `font-body`, Slate 200, max-width 600px, centered margin, top margin `space-16`, bottom margin `space-32`: `Digital registration is open for regular and transfer admissions for Grades 1 through 6. Streamlined self-service equipped with instant verification tracking codes.`
	- Action Button Bar: Centered flex row, button gap `space-16`:
		- Primary Button: Height 48px, horizontal padding `space-24`, background `color-brand-accent` (emerald), text `Open Admission Form`, route link `/admissions`.
		- Secondary Button: Height 48px, horizontal padding `space-20`, transparent background, 1px solid white border (30% opacity), text `Contact Admissions Helpdesk`, mailto link `mailto:admissions@sd-albirru.sch.id`.
---
### 3.6 Statutory Public Institutional Footer
- **Placement & Dimensions:** Bottom document boundary, full width, top padding `space-48`, horizontal and bottom padding `space-24`, background `color-surface-card`, top border 1px `color-border-subtle`.
- **Internal Layout:** Three upper grid columns with separate bottom copyright bar, max-width 1200px, centered margin, column gap `space-32`.
- **Column Details:**
	- **Column 1 (School Institutional Legality):**
		- Title: `font-heading-2`, text `SD Al-Birru Primary School`.
		- Description: `font-caption`, text `A formal primary education institution conducting teaching and learning in compliance with national educational standards.`
		- Identity Attributes: `NPSN: 70010111` \| `Status: Accredited Private Institution`.
	- **Column 2 (Campus Address and Contact):**
		- Title: `font-subheading`, text `Campus Administrative Secretariat`.
		- Address: `font-caption`, text `Jl. Al-Birru Educational Precinct No. 12, Bandung, West Java, Indonesia`.
		- Phone: `font-caption`, text `+62 (022) 7001-0111`.
		- Email: `font-caption`, text `administration@sd-albirru.sch.id`.
	- **Column 3 (Authenticated Portal Access):**
		- Title: `font-subheading`, text `System Portal Gateway`.
		- Link 1: Text `Parent & Guardian Portal` (route target: `/portal/guardian`).
		- Link 2: Text `Teacher & Staff Workspace` (route target: `/portal/instructor`).
		- Link 3: Text `Administrative Operations Console` (route target: `/portal/admin`).
		- Link 4: Text `Track Admission Status` (route target: `/admissions/status`).
- **Bottom Bar:** Top border 1px `color-border-subtle`, top margin `space-32`, top padding `space-16`, flex row space-between (`justify-between`), typography `font-caption` (`color-text-muted`):
	- Left: `© 2026 SD Al-Birru Primary School. All statutory rights reserved.`
	- Right: `Primary School Information System Core (PSIS) Baseline v1.0.0`