> **Document Purpose:** Mathematical foundations of the visual design system, linear spatial scale tokens, modular typography hierarchy, semantic color matrix, primitive component anatomy, and user interface accessibility standards.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Visual Design System Specification | Statutory visual design system specification title |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Repository governance root dashboard |
| **Specification Version** | 1.0.0 | Production visual design system baseline specification |
| **Lifecycle State** | Approved (In Development) | Operational governance readiness state |
| **File Path** | `/docs/05-visual-design-system-specification.md` | File path within the repository |
---
## 2. Spatial Scale and Layout Foundations
The user interface enforces an **8-pixel linear progression baseline** to maintain rhythmic spatial harmony vertically and horizontally across desktop and mobile viewports:
| Spatial Token Identifier | Dimension Value | Tailwind CSS Equivalent | Canonical Component Structural Usage |
|---|---|---|---|
| **`space-2`** | 2 pixels | `gap-0.5`, `p-0.5` | Micro divider lines, hairline divider rules, subtle focus rings |
| **`space-4`** | 4 pixels | `gap-1`, `p-1` | Dense padding, status tag insets, vertical field label margins |
| **`space-8`** | 8 pixels | `gap-2`, `p-2` | Standard button internal padding, form input insets |
| **`space-12`** | 12 pixels | `gap-3`, `p-3` | Group icon offsets, compact data card padding |
| **`space-16`** | 16 pixels | `gap-4`, `p-4` | Standard component padding, horizontal table cell padding |
| **`space-24`** | 24 pixels | `gap-6`, `p-6` | Container panel padding, column gutters, main content cards |
| **`space-32`** | 32 pixels | `gap-8`, `p-8` | Interface section dividers, major content block separation |
| **`space-48`** | 48 pixels | `gap-12`, `p-12` | Modal dialog outer margins, vertical segment boundaries |
---
## 3. Modular Typography Scale and Hierarchy
The typographic hierarchy utilizes system sans-serif font fallbacks to eliminate external web font network download latency penalties, scaled according to the *Major Third* (1.250) modular ratio:
| Typography Token | Font Weight Standard | Font Size | Line Height | Canonical Structural Usage |
|---|---|---|---|---|
| **`font-display`** | Bold (700) | 32 pixels | 40 pixels | Main page titles, portal dashboard welcome banners |
| **`font-heading-1`** | Semi-Bold (600) | 24 pixels | 32 pixels | Major section dividers, primary modal dialog headers |
| **`font-heading-2`** | Semi-Bold (600) | 20 pixels | 28 pixels | Grouped data card titles, functional panel headers |
| **`font-subheading`** | Medium (500) | 16 pixels | 24 pixels | Data table column headers, form field group labels |
| **`font-body`** | Regular (400) | 14 pixels | 20 pixels | Table data cell copy, primary form inputs, body paragraphs |
| **`font-caption`** | Regular (400) | 12 pixels | 16 pixels | Form helper notes, audit timestamps, metadata tags |
---
## 4. Semantic Color Palette and Contrast Matrix
The use of raw hexadecimal or RGB color codes is strictly prohibited across all interface components. Every component layer must reference semantic token aliases:
| Semantic Token Identifier | Spectrum Classification | Minimum WCAG Contrast | Canonical Operational Role |
|---|---|---|---|
| **`color-brand-primary`** | Deep Navy Slate (`#0f172a`) | 4.5:1 (Level AA) | Primary navigation bar, primary action triggers, active tabs |
| **`color-brand-accent`** | Emerald Forest (`#059669`) | 4.5:1 (Level AA) | Interactive highlights, verified success badges |
| **`color-surface-base`** | Neutral Slate 50 (`#f8fafc`) | 3.0:1 (Surface) | Baseline canvas background for application and portal |
| **`color-surface-card`** | Pure White (`#ffffff`) | 3.0:1 (Surface) | Card containers, data grid surfaces, modal dialogs |
| **`color-border-subtle`** | Slate 200 (`#e2e8f0`) | 3.0:1 (Border) | Table row hairline dividers, input perimeter borders |
| **`color-status-present`** | Muted Emerald Green (`#10b981`) | 4.5:1 (Level AA) | Daily attendance present status, approved admissions badge |
| **`color-status-absent`** | Rose Red (`#f43f5e`) | 4.5:1 (Level AA) | Unexcused absence markers, rejected application status |
| **`color-status-sick`** | Amber Yellow (`#f59e0b`) | 4.5:1 (Level AA) | Illness absence markers, pending document review status |
| **`color-status-excused`** | Sky Blue (`#0284c7`) | 4.5:1 (Level AA) | Official excused absence markers, dispensation notes |
---
## 5. Primitive Component Specifications
### 5.1 Interactive Form Inputs
- **Structural Bounds:** Rectangular container with minimum 40px height, 8px horizontal padding (`space-8`), 1px perimeter border (`color-border-subtle`), and 6px border radius.
- **Typographic Hierarchy:** Label renders `font-subheading` spaced 4px above container; input text renders `font-body`; helper or error messages render `font-caption` spaced 4px below container.
- **Interactive States:**
	- *Default:* Perimeter colored with `color-border-subtle`, background `color-surface-card`.
	- *Focus:* 2px outer focus ring using `color-brand-primary`.
	- *Validation Error:* Perimeter colored with `color-status-absent`, accompanied by red helper text.
	- *Disabled:* Opacity lowered to 50%, background shaded with `color-surface-base`, cursor locked.
### 5.2 Status Chips and Indicator Badges
- **Structural Bounds:** Full rounded pill container with fixed 24px height and 8px horizontal padding (`space-8`).
- **Typography:** Strictly constrained to `font-caption` with medium weight (500).
- **Semantic Variants:** Mutually exclusive fill variants matching status tokens (`color-status-present`, `color-status-absent`, `color-status-sick`, `color-status-excused`).
### 5.3 Action Buttons
- **Structural Bounds:** Minimum interactive target dimension of 40px height by 80px width, enforcing 16px horizontal padding (`space-16`) and 6px border radius.
- **Variant Classifications:**
	- *Primary Action:* Solid fill with `color-brand-primary` and high-contrast white text.
	- *Secondary Action:* Transparent background with perimeter border `color-border-subtle` and dark slate text.
	- *Destructive Action:* Solid fill or outlined perimeter with `color-status-absent`.
---
## 6. Web Accessibility Guardrails and Compliance Standards
- **Contrast Ratio Compliance:** All foreground typography pairs against surface backgrounds must meet minimum Web Content Accessibility Guidelines (WCAG) 2.1 AA standards (4.5:1 for regular text, 3.0:1 for large text).
- **Keyboard Navigation Focus Rings:** Every interactive element must render a distinct 2px visual focus indicator ring when traversed via keyboard Tab navigation.
- **Non-Color Exclusivity:** All critical data statuses (attendance registers, admissions decisions) must pair an explicit statutory text label alongside color indicators to ensure full accessibility for color-blind users.