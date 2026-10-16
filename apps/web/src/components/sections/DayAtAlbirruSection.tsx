"use client";

import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Sun;
  values: string[];
  mentorRole: string;
}

const scheduleList: ScheduleItem[] = [
  {
    id: "dhuha",
    time: "07.15 - 07.45",
    title: "Penyambutan 5S & Shalat Dhuha",
    subtitle: "Penyambutan Hangat & Penguatan Karakter Pagi",
    description:
      "Santri disambut para guru di gerbang sekolah dengan budaya Senyum, Salam, Sapa. Santri merapikan alas kaki secara mandiri, berwudhu, dan melaksanakan shalat Dhuha berjamaah di masjid sekolah.",
    icon: Sun,
    values: ["Budaya 5S Beradab", "Shalat Tepat Waktu", "Kemandirian Pagi"],
    mentorRole:
      "Guru piket menyambut di gerbang sekolah & asatidz memimpin doa bersama di masjid.",
  },
  {
    id: "tahfidz",
    time: "07.45 - 09.15",
    title: "Halaqah Tahfidzul Qur'an Pagi",
    subtitle: "Waktu Fokus Menyerap & Memelihara Hafalan",
    description:
      "Santri dibimbing dalam kelompok halaqah kecil dengan metode talaqqi bertahap. Meliputi bimbingan makharijul huruf, setoran hafalan baru, dan muroja'ah hafalan terdahulu.",
    icon: BookOpen,
    values: ["Metode Talaqqi", "Koreksi Tajwid Cermat", "Mutaba'ah Berkala"],
    mentorRole:
      "Asatidz pembimbing menyimak bacaan santri satu per satu secara teliti.",
  },
  {
    id: "tematik",
    time: "09.15 - 11.45",
    title: "Pembelajaran Tematik & Sains",
    subtitle: "Integrasi Kurikulum Merdeka & Pendekatan Inkuiri",
    description:
      "Pembelajaran interaktif di dalam dan luar kelas. Memadukan pemahaman matematika aplikatif, literasi bahasa, dan eksperimen sains di lingkungan terbuka sekolah.",
    icon: Sparkles,
    values: ["Inkuiri Terbuka", "Nalar Kritis", "Kolaborasi Kelas"],
    mentorRole:
      "Wali kelas memfasilitasi diskusi dan eksperimen santri secara aktif.",
  },
  {
    id: "dzuhur",
    time: "11.45 - 12.45",
    title: "Makan Siang Beradab & Shalat Dzuhur",
    subtitle: "Penanaman Adab Makan & Shalat Berjamaah",
    description:
      "Santri mencuci tangan, makan bersama dengan adab duduk tenang, berdoa, dan merapikan tempat makan sendiri. Dilanjutkan wudhu tertib dan shalat Dzuhur berjamaah di masjid.",
    icon: Clock,
    values: ["Adab Makan Sunnah", "Tertib Berwudhu", "Kebersamaan Jamaah"],
    mentorRole:
      "Guru mendampingi santri selama makan dan shalat berjamaah di masjid.",
  },
  {
    id: "siang",
    time: "12.45 - 14.30",
    title: "Penguatan Bahasa & Pengembangan Minat",
    subtitle: "Literasi Bilingual & Eksplorasi Bakat",
    description:
      "Sesi siang diisi dengan percakapan bahasa Arab dan Inggris kontekstual sederhana, diselingi kegiatan minat seperti seni kaligrafi, robotik dasar, dan olahraga panahan.",
    icon: BookOpen,
    values: ["Bilingual Terapan", "Eksplorasi Minat", "Aktivitas Motorik"],
    mentorRole:
      "Guru pembimbing memfasilitasi kegiatan praktik yang terarah dan menyenangkan.",
  },
  {
    id: "pulang",
    time: "14.30 - 15.00",
    title: "Refleksi Harian, Doa & Penjemputan",
    subtitle: "Evaluasi Diri Sebelum Pulang ke Rumah",
    description:
      "Santri merapikan perlengkapan belajar secara mandiri, merefleksikan capaian hari ini bersama wali kelas, melaksanakan doa, dan dijemput orang tua dengan tertib.",
    icon: Sun,
    values: ["Refleksi Diri", "Kemandirian Berkemas", "Penjemputan Tertib"],
    mentorRole:
      "Wali kelas menyerahkan kepulangan santri langsung kepada orang tua penjemput.",
  },
];

export function DayAtAlbirruSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = scheduleList[selectedIdx];
  const IconComponent = activeItem.icon;

  return (
    <section
      aria-labelledby="day-at-albirru-heading"
      className="w-full bg-background border-b border-border relative overflow-hidden"
    >
      {/* Header Cell — Full Width in Grid */}
      <div className="w-full p-6 sm:p-10 lg:p-12 border-b border-border bg-background">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">
            Jadwal &amp; Pembiasaan
          </span>

          <h2
            id="day-at-albirru-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight text-balance"
            style={{ textWrap: "balance" }}
          >
            Ritme Kegiatan Harian Santri
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Alur aktivitas harian santri dari pagi hingga sore hari yang
            mengintegrasikan penguatan adab, halaqah Al-Qur&apos;an, dan
            eksplorasi ilmu yang terstruktur.
          </p>
        </div>
      </div>

      {/* 6-Column Timeline Selector — Flush in Grid with 1px Shared Borders */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-border bg-card">
        {scheduleList.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          const ItemIcon = item.icon;
          const isLastDesktop = idx === scheduleList.length - 1;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={cn(
                "p-4 sm:p-5 text-start cursor-pointer flex flex-col justify-between transition-colors border-b lg:border-b-0",
                !isLastDesktop ? "lg:border-r border-border" : "",
                idx % 2 === 0 ? "border-r border-border sm:border-r" : "",
                isSelected
                  ? "bg-foreground text-background font-bold shadow-none"
                  : "bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              )}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <ItemIcon className="size-4 shrink-0" />
                <span className="text-[10px] font-mono opacity-70">
                  0{idx + 1}/06
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs font-bold tracking-tight">
                  {item.time}
                </span>
                <span className="block text-xs font-semibold truncate mt-1">
                  {item.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Slot Detail Display — Flush in Grid */}
      <div className="w-full p-6 sm:p-10 lg:p-12 bg-card">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Activity Info */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-none bg-muted/40 border border-border flex items-center justify-center text-foreground shrink-0 shadow-none">
                  <IconComponent className="size-5" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-muted-foreground tracking-wider uppercase block">
                    {activeItem.time} WIB
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mt-0.5">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-foreground">
                {activeItem.subtitle}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {activeItem.description}
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap gap-2 pt-2 font-mono">
                {activeItem.values.map((val) => (
                  <div
                    key={val}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-border bg-muted/20 text-[11px] font-medium text-foreground uppercase tracking-wider"
                  >
                    <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Mentorship Guidance */}
            <div className="lg:col-span-4 rounded-none border border-border bg-muted/20 p-6 flex flex-col gap-3 font-mono">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                <Calendar className="size-3.5 shrink-0" />
                <span>Pendampingan Guru:</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                {activeItem.mentorRole}
              </p>
              <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                <span>Ekosistem Belajar</span>
                <span className="font-bold text-foreground">
                  Bimbingan Terpadu
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
