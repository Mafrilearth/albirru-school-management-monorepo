# Al-Birru School Information System (albirru-sis)
# Technical Design Document (TDD) & Design System Specification

**Document Status:** Approved & Authoritative  
**Standard Compliance:** W3C WCAG 2.1 AA, RFC 9562 (UUIDv7), Conventional Design Doc Standard  
**System Scope:** Institutional Public Web (`apps/web`), Authenticated SIS Portal (`apps/app`), Edge API (`apps/api`), Email Studio (`apps/email`), Docs (`apps/docs`), Database (`packages/database`), and Design System (`packages/design-system`).

---

## 1. Executive Summary & Problem Statement

### 1.1 Context
Primary Islamic education institutions require integrated operational management spanning student admissions, daily multi-session attendance, weighted academic grading, guardian reporting, and institutional branding. Traditional school software is fragmented across paid external CMS platforms, rigid legacy monoliths, or disjointed spreadsheets.

### 1.2 Goals
1. **Unified Modular Monolith**: Consolidate institutional public web and administrative SIS operations under a unified Next.js 16 monorepo with zero external paid CMS runtime dependencies.
2. **Sub-15ms Edge Configuration & Sub-200ms Mutation Budget**: Serve static public pages instantaneously via Edge CDN, dynamic configurations via Vercel Edge Config (<15ms), and server mutations within p95 latency budgets (<200ms).
3. **Accessibility & Design Consistency**: Achieve 100% W3C WCAG 2.1 AA accessibility (>= 4.5:1 text contrast) using unstyled headless primitives (`@base-ui/react`, `@shadcn/react`) and CSS variable semantic tokens.
4. **Relational & Audit Integrity**: Guarantee complete transactional integrity with PostgreSQL, Drizzle ORM, time-sortable UUIDv7 primary keys, and zero physical deletion.

### 1.3 Non-Goals
- Third-party paid CMS hosting (Sanity, Strapi, Contentful).
- Custom unvetted cryptographic implementations (delegate strictly to Web Crypto API & Clerk IAM).
- Client-side direct database queries or unvalidated public mutation endpoints.

---

## 2. Visual Design System & Spatial Architecture: Architectural Kinetic Swiss Bento

The system enforces the **Architectural Kinetic Swiss Bento** design system across all applications (`apps/web`, `apps/app`, `apps/docs`, `packages/design-system`). It synthesizes mathematical Swiss Modernist precision, expansive breathing room, tactile kinetic responsiveness, and WCAG 2.1 AA accessibility.

### 2.1 The 60–30–10 Spatial Allocation Law ("Expansive Breathing Room")
To prevent visual clutter and guarantee generous negative space, all layouts must conform to the 60–30–10 spatial distribution:
- **60% Negative Space Canvas**: Pure empty space for cognitive breathing room. Vertical section padding is strictly enforced at $96\text{px} - 128\text{px}$ (`py-24` to `py-32`), with page margins maintaining expansive outer gutters.
- **30% Structural Bento Modules**: Rectilinear cards and containers holding core educational/operational content, with generous internal padding ($32\text{px} - 40\text{px}$ / `p-8` to `p-10`).
- **10% Kinetic Accents & High-Contrast CTAs**: Concentrated Amber-500 focal points, live pulse indicators, and interactive states.

### 2.2 Strict 8px Geometric Spatial Scale & Baseline Rhythm
All padding, margin, gap, and dimension definitions must strictly snap to multiples of 8px (with 4px reserved exclusively for sub-grid micro-adjustments):

| Token | Dimension | Mathematical Formula | Primary Use Case |
| :--- | :--- | :--- | :--- |
| `space-1` | 4px | $8 \times 0.5$ | Micro padding, dense badge offsets, icon gaps |
| `space-2` | 8px | $8 \times 1.0$ | Input interior padding, button icon gap, tight card margins |
| `space-3` | 12px | $8 \times 1.5$ | Compact component vertical padding |
| `space-4` | 16px | $8 \times 2.0$ | Standard button padding, stack gap, table cell padding |
| `space-6` | 24px | $8 \times 3.0$ | Card content padding, form section gap |
| `space-8` | 32px | $8 \times 4.0$ | Page header margin, modal container padding |
| `space-12` | 48px | $8 \times 6.0$ | Bento grid gap between major widgets |
| `space-16` | 64px | $8 \times 8.0$ | Intermediate module spacing |
| `space-24` | 96px | $8 \times 12.0$ | Standard section vertical padding |
| `space-32` | 128px | $8 \times 16.0$ | Public landing page Hero vertical padding |

Vertical baseline rhythm: All line-heights are locked to multiples of 4px/8px to ensure horizontal alignment across adjacent grid columns.

### 2.3 Modular Typographic Scale (Major Third 1.250) & Dual-Font Hierarchy
Typography adheres strictly to the Major Third ($1.250$) harmonic scale:

$$\text{Base Size} = 16\text{px} \quad \mid \quad \text{Scale Factor} = 1.250^n$$

| Level | Size (rem / px) | Line Height | Tracking | Typographic Role |
| :--- | :--- | :--- | :--- | :--- |
| `Display` | 3.052rem (48.8px) | 1.15 | `-0.025em` | Public landing page Hero headline |
| `Heading 1` | 2.441rem (39.0px) | 1.20 | `-0.020em` | Major page titles (`<h1>`) |
| `Heading 2` | 1.953rem (31.2px) | 1.25 | `-0.015em` | Section headers (`<h2>`) |
| `Heading 3` | 1.563rem (25.0px) | 1.30 | `-0.010em` | Bento card section titles (`<h3>`) |
| `Body Large` | 1.250rem (20.0px) | 1.50 | `normal` | Hero subheadings, lead value propositions |
| `Body Base` | 1.000rem (16.0px) | 1.50 | `normal` | Standard UI copy, inputs, table cells |
| `Body Small` | 0.800rem (12.8px) | 1.40 | `+0.010em` | Helper text, validation feedback, metadata |
| `Caption` | 0.640rem (10.2px) | 1.30 | `+0.020em` | Legal disclosures, statutory badges |

#### Dual-Font System
1. **Primary Humanist Sans**: *Plus Jakarta Sans* / *Inter* for headings and body content.
2. **Technical Monospace**: *JetBrains Mono* / *Roboto Mono* for systematic matrix labels, system statuses, school IDs, and telemetry badges (`[NPSN: 70010111]`, `[RATIO: 1:15]`, `// 01.00`).
3. **Arabic Script Harmony**: When `locale === "ar"`, font switches to *IBM Plex Sans Arabic* with proportional line-height scaled to `1.75` for vertical breathing space.

#### Typographic Balance Invariant
All heading elements (`h1`, `h2`, `h3`) must enforce `text-wrap: balance` (or be wrapped in `<Balancer>`) to prevent orphan words across viewports. Body copy enforces `text-wrap: pretty`.

### 2.4 Semantic Color Tokens & OKLCH Perceptual Uniformity
Hardcoded hexadecimal colors (e.g. `#0f172a`) in JSX/TSX are strictly prohibited. All colors use OKLCH color-space variables to guarantee uniform perceptual lightness and W3C WCAG 2.1 AA text contrast ($\ge 4.5:1$):

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.769 0.188 70.08);   /* Institutional Tailwind Amber-500 */
  --primary-foreground: oklch(0.145 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.145 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.769 0.188 70.08);   /* Institutional Tailwind Amber-500 */
  --primary-foreground: oklch(0.145 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --radius: 0;
}
```

### 2.5 Orthogonal Geometry, Zero Radius, & Hairline Delineation
- **Zero Border Radius (`--radius: 0`)**: All layout containers, buttons, cards, dialogs, badges, and form inputs strictly enforce sharp 90-degree rectilinear right angles. Rounded corners and pill geometries are strictly prohibited.
- **Zero Box-Shadows (`box-shadow: none`)**: All blur elevations, drop shadows, and ambient glows are completely eliminated (`--shadow-*: none`). Spatial containment is established exclusively through 1px hairline border strokes (`border-border`).
- **Architectural Corner Crosshairs (`+`)**: Major module intersections feature 5px hairline crosshairs (`+`) rendered via CSS pseudo-elements to reinforce architectural drafting rigor.
- **Micro-Noise Tactile Surface**: A microscopic 2% SVG noise grain overlay (`pointer-events: none; mix-blend-mode: overlay`) provides archival paper tactile quality without GPU overhead.

### 2.6 Strict Bento Aspect Ratio Constraints & Systematic Indexing
Bento modules eliminate ragged height discrepancies by locking cards into mathematical aspect ratios:
- `aspect-square` ($1:1$): Compact stat meters, category badges, avatar matrices.
- `aspect-[2/1]`: Double-column horizontal information cards.
- `aspect-video` ($16:9$): Facility showcase media, curriculum video modules.
- `aspect-[21/9]`: Full-width telemetry banners.

Every section features a systematic monospace matrix index: `// 01.00 — FITRAH & TAHFIDZ`, with bento cards tagged with telemetry coordinates (`[CARD_01]`, `[RATIO: 1:15]`).

### 2.7 Fluid Interpolation Mathematics (`clamp()`)
To ensure responsive proportions without abrupt breakpoint snapping, typographic scales and container gutters interpolate fluidly:

$$\text{Value} = \text{clamp}\left(V_{\min},\; V_{\min} + (V_{\max} - V_{\min}) \times \frac{100\text{vw} - W_{\min}}{W_{\max} - W_{\min}},\; V_{\max}\right)$$

### 2.8 Physics-Based Spring Motion & Kinetic Micro-Interactions
Motion is strictly purposeful, realistic, and non-distracting:
- **Spring Physics Curves**: Transitions use high-damping spring mechanics: `cubic-bezier(0.16, 1, 0.3, 1)` (stiffness: 350, damping: 25).
- **Mouse-Aware Spotlight**: Bento card borders illuminate with subtle Amber-500 radiance dynamically driven by cursor coordinates (`--mouse-x`, `--mouse-y`).
- **Magnetic Buttons**: Primary CTA buttons exhibit subtle magnetic pull ($\pm 4\text{px} - 6\text{px}$) when cursor enters a $20\text{px}$ proximity threshold.
- **Kinetic Counters**: Numerical stats animate smoothly from 0 upon entering viewport.
- **Live Pulse**: Operational status indicators incorporate subtle ping/pulse animations.
- **Micro-Haptics (Mobile)**: Primary touch interactions trigger subtle $10\text{ms}$ vibration feedback (`navigator.vibrate(10)`).
- **Reduced Motion Governance**: All animations immediately collapse to instant state switches when `@media (prefers-reduced-motion: reduce)` is detected.

### 2.9 Deterministic Performance Invariants (CLS = 0.000 & 60 FPS)
- All layout dimensions reserve deterministic bounding boxes to ensure Cumulative Layout Shift ($CLS = 0.000$).
- All kinetic animations animate exclusively on compositor properties (`transform`, `opacity`) locked to a consistent 60 FPS / 120 FPS runtime budget.
- Bento cards maintain strict state machine rendering across 4 states: Skeleton Shimmer $\to$ Empty State $\to$ Error State $\to$ Live State.

---

## 3. UI Component Anatomy & Headless Architecture

The design system is constructed upon `@albirru/design-system` using `@base-ui/react` and `@shadcn/react` primitives. Custom unstyled HTML `<div>` replacements are strictly forbidden when equivalent primitives exist.

### 3.1 Component Primacy Rules
- **Overlays**: Modals, sheets, and drawers must use `Dialog`, `Sheet`, or `Drawer` primitives with accessible `DialogTitle` (use `className="sr-only"` if visually hidden). Manual `z-index` stacking hacks are prohibited.
- **Card Composition**: Must compose hierarchically using `CardHeader` -> `CardTitle` -> `CardDescription` -> `CardContent` -> `CardFooter`.
- **Button Micro-states**: Buttons do not carry bespoke `isLoading` props. Compose with `<Spinner />` and `disabled` attributes.
- **Avatars**: Every `Avatar` must render an accessible `<AvatarFallback>` displaying user initials.
- **Icon Placement**: Icons from `lucide-react` must specify positioning using `data-icon="inline-start"` or `data-icon="inline-end"`.

### 3.2 Accessible Form Architecture
All form workflows must utilize React Hook Form with `@hookform/resolvers/zod`:

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
  <FieldGroup className="flex flex-col gap-4">
    <Field data-invalid={Boolean(errors.guardianPhone)}>
      <FieldLabel htmlFor="guardianPhone">Guardian Phone Number</FieldLabel>
      <InputGroup>
        <InputGroupAddon>+62</InputGroupAddon>
        <InputGroupInput
          id="guardianPhone"
          {...register("guardianPhone")}
          aria-invalid={Boolean(errors.guardianPhone)}
        />
      </InputGroup>
      {errors.guardianPhone && (
        <FieldError>{errors.guardianPhone.message}</FieldError>
      )}
    </Field>
  </FieldGroup>
</form>
```

---

## 4. Application Mutation Contract & State Transitions

### 4.1 Canonical Server Action Envelope
All data mutations in the portal and public applications must return the typed envelope defined in `src/types/action.ts`:

```typescript
export interface ActionResponse<T = unknown> {
  is_success: boolean;
  status_code: number;
  response_payload: T | null;
  error_descriptor: {
    error_code: string;
    error_message: string;
    validation_issues?: Array<{
      field_path: string;
      issue_description: string;
    }>;
  } | null;
}
```

### 4.2 Error Descriptor Taxonomy
| HTTP Status | Error Code | Description | User Message |
| :---: | :--- | :--- | :--- |
| `400` | `ERR_VALIDATION_FAILED` | Payload rejected by Zod schema | "Please review and correct your form inputs." |
| `401` | `ERR_UNAUTHORIZED` | Invalid or absent Clerk session | "Session expired. Please sign in again." |
| `403` | `ERR_FORBIDDEN` | RBAC role authorization denied | "You do not have permission to perform this action." |
| `404` | `ERR_NOT_FOUND` | Target record does not exist or inactive | "The requested record could not be found." |
| `429` | `ERR_RATE_LIMITED` | Rate limiter threshold exceeded | "Too many requests. Please wait a few moments." |
| `500` | `ERR_INTERNAL_SERVER` | Unhandled exception | "An unexpected system error occurred. Please try again." |

---

## 5. Security & Edge Infrastructure Design

```mermaid
graph TD
    Client([Client Browser]) -->|HTTP Request| CloudflareEdge[Cloudflare CDN & Turnstile Bot Check]
    CloudflareEdge -->|Reverse Proxy| VercelEdge[Vercel Serverless Edge Runtime]
    VercelEdge -->|Rate Limit Check| UpstashRedis[(Upstash Redis Token Bucket)]
    VercelEdge -->|Session Validation| ClerkAuth[Clerk JWT Session Verifier]
    VercelEdge -->|Server Action Query| NeonPostgres[(Neon PostgreSQL Database)]
```

### 5.1 Public Admissions Form Protection
1. **Cloudflare Turnstile**: Zero-friction CAPTCHA token validation attached to public registration submissions.
2. **Upstash Redis Rate Limiting**: Sliding window rate limiting restricted to 5 submissions per 15 minutes per IP:
   ```typescript
   const ratelimit = new Ratelimit({
     redis: Redis.fromEnv(),
     limiter: Ratelimit.slidingWindow(5, "15 m"),
     analytics: true,
     prefix: "ratelimit:admissions",
   });
   ```

### 5.2 Server Identification & Header Hardening
All Next.js applications declare strict security headers:
- `X-Frame-Options: SAMEORIGIN` (Clickjacking mitigation)
- `X-Content-Type-Options: nosniff` (MIME-sniffing prevention)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `poweredByHeader: false` (Suppression of server fingerprinting)

---

## 6. Relational Database Design & Invariants

### 6.1 UUIDv7 Primary Keys
All table primary keys use RFC 9562 UUIDv7 (`uuidv7()`):
- **Why**: Eliminates B-tree indexing hotspot fragmentation associated with random UUIDv4 while avoiding the enumerable security risk of auto-increment serial integers.

### 6.2 Mandatory Operational Audit Trail
Every operational table maintains:
- `created_at` (`timestamptz`, default `now()`, `not null`)
- `updated_at` (`timestamptz`, default `now()`, `not null`)
- `created_by` (`uuid`, references `users.id`, nullable only for initial public registration)

### 6.3 Zero Physical Deletion (Soft Deletion Only)
Executing SQL `DELETE` is strictly forbidden across all production operational tables:
- Record deactivation is performed via logical column `is_active` (`boolean`, default `true`, `not null`).
- Foreign key constraints must enforce `onDelete: "restrict"`.
- All default Drizzle queries must include `.where(eq(table.isActive, true))`.

---

## 7. Alternatives Considered & Architectural Decisions

| Decision | Selected Option | Rejected Alternative | Rationale |
| :--- | :--- | :--- | :--- |
| **ORM** | Drizzle ORM | Prisma ORM | Drizzle has 0MB engine overhead, near-native query execution speed, and instant cold-starts on Serverless Edge runtimes. |
| **Primary Keys** | UUIDv7 | Legacy Sequential ID | Time-sortable B-tree locality index without sequential enumeration risks. |
| **Code Quality Tool** | Biome v2 | ESLint + Prettier | Unified Rust toolchain executing under 150ms across 270+ files without plugin dependency sprawl. |
| **UI Primitives** | Base UI + shadcn/ui | Custom HTML Divs | 100% accessible keyboard navigation, ARIA tagging, and design token consistency out of the box. |
| **CMS Platform** | In-House CMS (`apps/app`) | Third-Party Headless CMS | Eliminates SaaS subscription costs, provides single sign-on with Clerk, and ensures direct relational database foreign keys. |
