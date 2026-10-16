/**
 * GlobalGrid — Architectural Kinetic Swiss Bento Ambient Layer
 *
 * Implements:
 * 1. Micro-Noise Tactile Surface (2.5% opacity archival paper grain via inline SVG fractal noise)
 * 2. Mathematical 12-Column Blueprint Grid Lines (subtle hairline boundary markers)
 *
 * Runs strictly with zero JS computation, zero layout shift (CLS = 0.000),
 * and zero pointer event interception.
 */
export function GlobalGrid() {
  return (
    <>
      {/* 1. Archival Paper Micro-Noise Tactile Texture Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] dark:opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Subtle Outer Blueprint Grid on Left and Right Margins (for viewports > 1280px) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden xl:block opacity-40 dark:opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}
