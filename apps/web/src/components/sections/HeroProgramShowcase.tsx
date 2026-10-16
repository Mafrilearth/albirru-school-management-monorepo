"use client";

import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * SantriIllustration — High-craft vector line-art illustration of an Al-Birru student.
 * Features an Islamic peci, round glasses, cheerful smile, and school uniform collar.
 * Includes micro-animations: periodic natural eye-blinking and subtle gentle breathing.
 */
function SantriIllustration({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 130"
      className="w-24 h-28 sm:w-28 sm:h-32 shrink-0 select-none overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Gentle Floating & Breathing Group */}
      <motion.g
        animate={{
          y: isHovered ? -3 : [0, -2, 0],
          rotate: isHovered ? 1.5 : [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 3.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "60px 100px" }}
      >
        {/* Peci / Islamic Songkok */}
        <path
          d="M 36 38 C 36 24, 84 24, 84 38 L 86 44 L 34 44 Z"
          className="fill-foreground"
        />
        <path d="M 34 44 L 86 44" className="stroke-card" strokeWidth="1.5" />

        {/* Hair Tuft Peeking */}
        <path
          d="M 34 44 Q 28 54 34 60 Q 37 50 42 46"
          className="fill-foreground"
        />
        <path
          d="M 86 44 Q 92 54 86 60 Q 83 50 78 46"
          className="fill-foreground"
        />

        {/* Head Contour */}
        <path
          d="M 36 44 C 34 72, 40 88, 60 88 C 80 88, 86 72, 84 44"
          className="fill-card stroke-foreground"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Ears */}
        <path
          d="M 36 56 C 30 56, 30 68, 36 68"
          className="fill-card stroke-foreground"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 84 56 C 90 56, 90 68, 84 68"
          className="fill-card stroke-foreground"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Round Glasses Frame (Screenshot Style) */}
        <circle
          cx="47"
          cy="58"
          r="9.5"
          className="stroke-foreground fill-card/50"
          strokeWidth="2.5"
        />
        <circle
          cx="73"
          cy="58"
          r="9.5"
          className="stroke-foreground fill-card/50"
          strokeWidth="2.5"
        />
        {/* Glasses Bridge */}
        <path
          d="M 56.5 58 L 63.5 58"
          className="stroke-foreground"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Glasses Temples / Side Arms */}
        <path
          d="M 37.5 57 L 33 55"
          className="stroke-foreground"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 82.5 57 L 87 55"
          className="stroke-foreground"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Blinking Eyes (Natural Human Cadence) */}
        <motion.g
          animate={{
            scaleY: [1, 1, 0.1, 1, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.88, 0.92, 0.96, 1],
          }}
          style={{ transformOrigin: "60px 58px" }}
        >
          <circle cx="47" cy="58" r="2.8" className="fill-foreground" />
          <circle cx="73" cy="58" r="2.8" className="fill-foreground" />
          {/* Eye catchlight highlights */}
          <circle cx="48" cy="57" r="0.9" className="fill-card" />
          <circle cx="74" cy="57" r="0.9" className="fill-card" />
        </motion.g>

        {/* Cheeks / Warm Fitrah Glow */}
        <circle cx="41" cy="68" r="3" className="fill-emerald-500/30" />
        <circle cx="79" cy="68" r="3" className="fill-emerald-500/30" />

        {/* Cheerful Smile */}
        <path
          d="M 53 73 Q 60 80 67 73"
          className="stroke-foreground"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neck */}
        <path
          d="M 52 88 L 52 98 L 68 98 L 68 88"
          className="fill-card stroke-foreground"
          strokeWidth="2"
        />

        {/* Uniform Shoulders */}
        <path
          d="M 28 126 C 30 106, 46 98, 52 98 L 68 98 C 74 98, 90 106, 92 126 Z"
          className="fill-card stroke-foreground"
          strokeWidth="2.5"
        />

        {/* Uniform Collar */}
        <path
          d="M 52 98 L 60 110 L 68 98"
          className="stroke-foreground fill-none"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Tie / Al-Birru Green Placket */}
        <path
          d="M 59 110 L 61 110 L 62 124 L 58 124 Z"
          className="fill-emerald-600"
        />
      </motion.g>
    </svg>
  );
}

/**
 * TreeCircuitConnector — SVG Branching Circuit Tree.
 * Connects the two top cards into the bottom card with native SVG <animateMotion>
 * data pulses flowing continuously like a living hardware/software architecture.
 */
function TreeCircuitConnector() {
  return (
    <div className="w-full h-9 sm:h-11 relative pointer-events-none select-none">
      <svg
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        {/* Branch Lines: Left and Right meet at center junction and flow down */}
        <path
          d="M 25 0 V 22 H 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
        />
        <path
          d="M 75 0 V 22 H 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
        />
        <path
          d="M 50 22 V 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
        />

        {/* Center Junction Node */}
        <circle
          cx="50"
          cy="22"
          r="3"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="22" r="1.5" className="fill-emerald-500" />

        {/* Pulsing Light Packet from Top Left */}
        <circle r="2.5" className="fill-emerald-500">
          <animateMotion
            path="M 25 0 V 22 H 50 V 44"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Pulsing Light Packet from Top Right */}
        <circle r="2.5" className="fill-emerald-500">
          <animateMotion
            path="M 75 0 V 22 H 50 V 44"
            dur="2.8s"
            begin="1.4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

const barChartData = [
  { label: "07:30", height: 35, topic: "Shalat Dhuha & Doa" },
  { label: "08:15", height: 48, topic: "Tahsin Talaqqi" },
  { label: "09:00", height: 68, topic: "Halaqah Tahfidz" },
  { label: "09:45", height: 62, topic: "Adab Makan & Istirahat" },
  { label: "10:30", height: 50, topic: "Inkuiri Sains Alam" },
  { label: "11:15", height: 42, topic: "Matematika Nalaria" },
  { label: "12:00", height: 38, topic: "Shalat Dzuhur Berjamaah" },
  { label: "12:45", height: 66, topic: "Bahasa Arab Dasar" },
  { label: "13:30", height: 78, topic: "Junior Scratch Logic" },
  { label: "14:15", height: 96, topic: "Mutaba'ah & Evaluasi Mutqin" },
  { label: "15:00", height: 92, topic: "Penjemputan & Doa Kepulangan" },
];

/**
 * HeroProgramShowcase — Living Interactive Architectural Bento Graphic.
 * Renders an animated, code-driven graphic matching the blueprint diagram:
 * - Outer Blueprint Enclosure with crosshair target markers and center ticks.
 * - Top-Left: Tahfidz Milestone statistics (+38%, 3 Juz target, Talaqqi badge).
 * - Top-Right: Fitrah Community (1:15 ratio, +9.2% Adab, animated Santri avatar).
 * - Tree Circuit Connector: SVG branching lines with live pulsing data packets.
 * - Bottom Card: PPDB Admission live status, breakdown rows, animated bar columns,
 *   and smooth wave trend line with live beacon point.
 */
export function HeroProgramShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeBarIndex, setActiveBarIndex] = useState<number>(9);

  return (
    <div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full select-none">
      {/* Outer Blueprint Canvas Enclosure */}
      <div className="relative p-4 sm:p-5 lg:p-6 border border-border bg-card/40 backdrop-blur-xs rounded-none">
        {/* Architectural Crosshair Target Corner Marks */}
        <span
          aria-hidden="true"
          className="absolute -top-2.5 -left-2.5 text-muted-foreground/60 font-mono text-xs select-none pointer-events-none"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="absolute -top-2.5 -right-2.5 text-muted-foreground/60 font-mono text-xs select-none pointer-events-none"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="absolute -bottom-2.5 -left-2.5 text-muted-foreground/60 font-mono text-xs select-none pointer-events-none"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="absolute -bottom-2.5 -right-2.5 text-muted-foreground/60 font-mono text-xs select-none pointer-events-none"
        >
          +
        </span>

        {/* Center Boundary Notch Ticks */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-border rounded-none pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-1 bg-border rounded-none pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-6 bg-border rounded-none pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-6 bg-border rounded-none pointer-events-none"
        />

        {/* =========================================================================
            TOP ROW: 2 BENTO CARDS (Tahfidz Stat & Santri Ratio with Avatar)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
          {/* Card 1: Tahfidz Growth & Target */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 4.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setHoveredCard("tahfidz")}
            onHoverEnd={() => setHoveredCard(null)}
            className="group"
          >
            <Link
              href="/academics"
              className="block h-full border border-border bg-card p-4 rounded-none transition-colors hover:border-foreground/30 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
            >
              {/* Header: Icon & Trend Percentage */}
              <div className="flex items-center justify-between">
                <div className="size-8 rounded-none border border-border bg-muted/40 flex items-center justify-center text-foreground group-hover:bg-muted transition-colors">
                  <BookOpen className="size-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span>+38%</span>
                  <ArrowUpRight className="size-3" />
                </div>
              </div>

              {/* Big Metric Display */}
              <div className="mt-3.5">
                <div className="text-2xl sm:text-3xl font-black font-mono text-foreground tracking-tight">
                  3 Juz
                </div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                  Target Mutqin
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-3.5 pt-2.5 border-t border-border/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none font-mono text-[10px] uppercase tracking-wider border border-border bg-muted/30 text-muted-foreground">
                  <Sparkles className="size-2.5 text-emerald-600" />
                  Metode Talaqqi
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  Al-Qur&apos;an
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Santri Fitrah & Ratio with Illustrated Character */}
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.4,
            }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setHoveredCard("santri")}
            onHoverEnd={() => setHoveredCard(null)}
            className="group"
          >
            <Link
              href="/programs"
              className="block h-full border border-border bg-card p-4 rounded-none transition-colors hover:border-foreground/30 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden"
            >
              <div className="flex justify-between items-start gap-2">
                {/* Left side: Metrics */}
                <div className="flex flex-col justify-between h-full z-10">
                  <div>
                    <div className="text-sm font-bold text-foreground tracking-tight">
                      Rasio Santri
                    </div>
                    <div className="mt-1">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-border bg-muted/30 text-muted-foreground">
                        Kelas Personal
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-2xl sm:text-3xl font-black font-mono text-foreground tracking-tight">
                      1:15
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                      +9.2% Adab
                    </div>
                  </div>
                </div>

                {/* Right side: Illustrated Santri Character */}
                <div className="relative -mr-2 -mb-2 shrink-0">
                  <SantriIllustration isHovered={hoveredCard === "santri"} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* =========================================================================
            TREE CIRCUIT CONNECTOR: SVG Branching Tree with Data Pulses
           ========================================================================= */}
        <TreeCircuitConnector />

        {/* =========================================================================
            BOTTOM CARD: PPDB 2026/2027 & Dynamic School Progress
           ========================================================================= */}
        <motion.div
          animate={{ y: [0, -1.5, 0] }}
          transition={{
            duration: 4.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="border border-border bg-card p-4 sm:p-5 rounded-none relative z-10 transition-colors hover:border-foreground/30"
        >
          {/* Top Header: PPDB Title & Live Status Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-none border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <TrendingUp className="size-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground tracking-tight">
                  PPDB 2026/2027
                </div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  Status Penerimaan
                </div>
              </div>
            </div>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors font-semibold"
            >
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 bg-emerald-500" />
              </span>
              <span>Rincian</span>
              <ArrowUpRight className="size-3 text-muted-foreground" />
            </Link>
          </div>

          {/* Main Figure Display */}
          <div className="mt-3.5 flex items-baseline gap-2.5 flex-wrap">
            <span className="text-2xl sm:text-3xl font-black font-mono text-foreground tracking-tight">
              16 / 30 Kursi
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              +52% Terisi
            </span>
          </div>

          {/* Breakdown Rows */}
          <div className="mt-3.5 pt-3 border-t border-border/60 flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="size-3.5 shrink-0" />
                <span className="text-[11px]">Pendaftaran Online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-[11px]">
                  18 Berkas
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  +12.6%
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="size-3.5 shrink-0" />
                <span className="text-[11px]">Observasi Fitrah</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-[11px]">
                  12 Santri
                </span>
                <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                  Tahap 1
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              MINI ANIMATED BAR & WAVE TREND LINE CHART
             ========================================================================= */}
          <div className="mt-4 pt-3 border-t border-border/40 relative">
            {/* Active Milestone Banner on Hover */}
            <div className="mb-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span className="uppercase tracking-wider">
                Aktivitas Harian:{" "}
                <span className="text-foreground font-bold">
                  {barChartData[activeBarIndex]?.topic}
                </span>
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {barChartData[activeBarIndex]?.label}
              </span>
            </div>

            {/* Bars Container with SVG Line Chart Overlay */}
            <div className="relative h-24 sm:h-26 w-full flex items-end justify-between px-1">
              {/* Vertical Columns (Bars) */}
              {barChartData.map((item, idx) => {
                const isActive = activeBarIndex === idx;
                return (
                  <button
                    type="button"
                    key={item.label}
                    onMouseEnter={() => setActiveBarIndex(idx)}
                    onFocus={() => setActiveBarIndex(idx)}
                    className="relative h-full w-[6.5%] flex items-end justify-center cursor-pointer select-none group"
                    aria-label={`${item.label}: ${item.topic}`}
                  >
                    <div
                      style={{ height: `${item.height}%` }}
                      className={cn(
                        "w-full rounded-none transition-all duration-200 border-t",
                        isActive
                          ? "bg-emerald-500/35 border-emerald-500"
                          : "bg-emerald-500/15 border-emerald-500/30 group-hover:bg-emerald-500/25",
                      )}
                    />
                  </button>
                );
              })}

              {/* Continuous Wave Polyline tracing across the bars */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 size-full pointer-events-none overflow-visible"
                aria-hidden="true"
              >
                {/* Emerald Trend Line */}
                <path
                  d="M 5 65 L 14 52 L 23 32 L 32 38 L 41 50 L 50 58 L 59 62 L 68 34 L 77 22 L 86 4 L 95 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-600 dark:text-emerald-400"
                />
              </svg>

              {/* Pulsing Beacon Dot at Peak (over bar #9 / 86% x, 4% y) */}
              <div
                style={{ left: "86.3%", top: "4%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
              >
                <span className="relative flex size-3">
                  <span className="animate-ping absolute inline-flex size-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-3 bg-emerald-500 border border-card" />
                </span>
                <span className="absolute -top-4 right-0 font-mono text-[9px] font-bold px-1 py-0.2 bg-foreground text-background whitespace-nowrap">
                  Puncak
                </span>
              </div>
            </div>

            {/* X-Axis Time / Stage Labels */}
            <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-2.5 px-1 border-t border-border/40 pt-1.5">
              <span>07:30</span>
              <span>10:30</span>
              <span>12:45</span>
              <span>15:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
