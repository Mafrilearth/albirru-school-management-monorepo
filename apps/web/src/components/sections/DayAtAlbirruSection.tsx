"use client";

import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  Heart,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  clockAngle: number;
}

const scheduleList: ScheduleItem[] = [
  {
    id: "dhuha",
    time: "07.15 - 07.45",
    title: "Morning Greeting (5S) & Shalat Dhuha",
    subtitle: "Penyambutan Hangat & Penguatan Ruhiyah Pagi",
    description:
      "Santri disambut para asatidz di gerbang sekolah dengan budaya Senyum, Salam, Sapa. Santri menaruh sepatu di rak secara mandiri, berwudhu, dan melaksanakan shalat Dhuha berjamaah di masjid sekolah.",
    icon: Sun,
    values: ["Budaya 5S Beradab", "Shalat Tepat Waktu", "Kemandirian Pagi"],
    mentorRole:
      "Guru piket menyambut di gerbang & asatidz memimpin doa di masjid",
    clockAngle: 30,
  },
  {
    id: "tahfidz",
    time: "07.45 - 09.15",
    title: "Halaqah Tahfidz Pagi (Talaqqi Bersanad)",
    subtitle: "Waktu Emas Menyerap & Menjaga Al-Qur'an",
    description:
      "Dalam suasana tenang dan fokus, santri dibagi ke halaqah kecil (1 muhaffizh membina 7-10 santri). Kegiatan meliputi talaqqi ayat baru, koreksi makharijul huruf, dan muroja'ah mutqin hafalan sebelumnya.",
    icon: BookOpen,
    values: ["Talaqqi Bersanad", "Koreksi Tajwid Teliti", "Mutaba'ah Harian"],
    mentorRole:
      "Muhaffizh bersanad riwayat Hafs 'an 'Ashim menyimak satu per satu",
    clockAngle: 90,
  },
  {
    id: "tematik",
    time: "09.15 - 11.45",
    title: "Pembelajaran Tematik & Eksplorasi Sains",
    subtitle: "Mengintegrasikan Kurikulum Merdeka & Ayat Kauniyah",
    description:
      "Pembelajaran kelas aktif yang menyenangkan. Menggabungkan penguasaan matematika aplikatif, literasi cerita islami, dan eksperimen sains di laboratorium alam terbuka sekolah.",
    icon: Sparkles,
    values: ["Inkuiri Terbuka", "Nalar Kritis", "Kolaborasi Teman Sebaya"],
    mentorRole:
      "Wali kelas memfasilitasi diskusi dan eksperimen interaktif santri",
    clockAngle: 150,
  },
  {
    id: "dzuhur",
    time: "11.45 - 13.00",
    title: "Shalat Dzuhur Berjamaah & Adab Makan",
    subtitle: "Pembiasaan Ibadah dan Etika Sehari-hari",
    description:
      "Latihan kepemimpinan santri putra untuk adzan dan iqamah. Dilanjutkan shalat dzuhur berjamaah dan makan siang sehat bersama dengan adab islami (cuci tangan, duduk tertib, dan doa bersama).",
    icon: Heart,
    values: ["Adzan & Iqamah Bergilir", "Adab Makan Berkah", "Kebersihan Diri"],
    mentorRole: "Guru mendampingi langsung di meja makan dan mengawasi shalat",
    clockAngle: 210,
  },
  {
    id: "coding",
    time: "13.00 - 14.30",
    title: "Junior Coding, Karakter & Proyek Kreatif",
    subtitle: "Computational Thinking & Soft Skills",
    description:
      "Santri diajak mengasah logika pemecahan masalah melalui pemrograman visual (Scratch Junior), kerajinan tangan islami, serta pembiasaan kosakata bilingual (Arab & Inggris praktis).",
    icon: Cpu,
    values: ["Logika Algoritma", "Kreativitas Karya", "Bilingual Daily"],
    mentorRole:
      "Guru bidang studi membimbing praktik langsung di ruang multimedia",
    clockAngle: 270,
  },
  {
    id: "closing",
    time: "14.30 - 15.00",
    title: "Muroja'ah Sore, Evaluasi & Penjemputan",
    subtitle: "Refleksi Harian Sebelum Kembali ke Rumah",
    description:
      "Penutupan kelas dengan muroja'ah singkat, pengisian buku mutaba'ah harian sebagai laporan ke orang tua, doa kafaratul majlis, dan penjemputan anak secara tertib dan aman.",
    icon: Clock,
    values: ["Refleksi Diri", "Buku Mutaba'ah Terpantau", "Penjemputan Aman"],
    mentorRole: "Wali kelas menyerahkan anak secara langsung kepada orang tua",
    clockAngle: 330,
  },
];

export function DayAtAlbirruSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = scheduleList[selectedIdx];
  const IconComponent = activeItem.icon;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yTimelineParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="day-at-albirru-heading"
      className="py-20 sm:py-28 bg-muted/20 border-b border-border relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary">
            <Clock className="size-3.5" />
            <span>KESEHARIAN SANTRI (07.15 - 15.00)</span>
          </div>
          <h2
            id="day-at-albirru-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight"
          >
            A Day at Al-Birru: Ritme Belajar Penuh Berkah.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Klik jadwal jam kegiatan di bawah untuk melihat bagaimana waktu
            ananda diisi dengan pembiasaan adab, halaqah Qur&apos;an, dan
            eksplorasi ilmu yang menyenangkan.
          </p>
        </div>

        {/* Interactive Schedule Selector with Spring Layout Indicator */}
        <motion.div
          style={{ y: yTimelineParallax }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        >
          {scheduleList.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={cn(
                  "relative p-3.5 text-start rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none active:scale-[0.97] shadow-xs",
                  isSelected
                    ? "text-primary-foreground font-semibold border-primary"
                    : "bg-card/90 text-muted-foreground border-border hover:bg-muted/80 hover:text-foreground",
                )}
              >
                {isSelected && (
                  <motion.span
                    layoutId="scheduleActivePill"
                    className="absolute inset-0 bg-primary rounded-2xl z-0 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between w-full mb-3 relative z-10">
                  <ItemIcon
                    className={cn(
                      "size-4.5",
                      isSelected ? "text-primary-foreground" : "text-primary",
                    )}
                  />
                  <span
                    className={cn(
                      "text-[10px] font-mono",
                      isSelected
                        ? "text-primary-foreground font-bold"
                        : "text-muted-foreground",
                    )}
                  >
                    {idx + 1}/6
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="block font-mono text-[11px] font-medium">
                    {item.time}
                  </span>
                  <span className="block text-xs font-bold truncate mt-0.5">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Detailed Showcase Card with AnimatePresence & Dynamic Dial */}
        <Card className="rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-7 sm:p-10 shadow-xl min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                        Pukul {activeItem.time} WIB
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
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

                  {/* Value Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeItem.values.map((val) => (
                      <div
                        key={val}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-foreground"
                      >
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Meta Column with Animated Clock Dial */}
                <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-muted/30 p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                      <Calendar className="size-4 text-primary" />
                      <span>Peran Asatidz &amp; Guru:</span>
                    </div>
                    {/* Rotating Clock Icon matching the schedule */}
                    <motion.div
                      animate={{ rotate: activeItem.clockAngle }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="size-7 rounded-full bg-primary/15 text-primary flex items-center justify-center"
                    >
                      <Clock className="size-4" />
                    </motion.div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activeItem.mentorRole}
                  </p>
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                    <span>LINGKUNGAN FITRAH</span>
                    <span className="text-primary font-bold">
                      1:15 MENTORING
                    </span>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}
