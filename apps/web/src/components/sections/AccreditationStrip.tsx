import { Award, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatutoryItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  icon: typeof ShieldCheck;
}

const statutoryData: readonly StatutoryItem[] = [
  {
    id: "curriculum",
    label: "Pendekatan Kurikulum",
    value: "Kurikulum Terpadu",
    subValue: "Integrasi Nilai Islam & Sains Modern",
    icon: ShieldCheck,
  },
  {
    id: "character",
    label: "Pembinaan Karakter",
    value: "Pendidikan Adab & Fitrah",
    subValue: "Pembiasaan Akhlak Mulia Sejak Dini",
    icon: Award,
  },
  {
    id: "learning",
    label: "Metode Pembelajaran",
    value: "Talaqqi & Eksplorasi",
    subValue: "Bimbingan Intensif & Interaktif",
    icon: Building2,
  },
  {
    id: "environment",
    label: "Lingkungan Belajar",
    value: "Kondusif & Ramah Anak",
    subValue: "Mendukung Potensi Unik Setiap Santri",
    icon: CheckCircle2,
  },
];

export function AccreditationStrip() {
  return (
    <section
      aria-label="Identitas Kelembagaan dan Legalitas"
      className="w-full border-b border-border bg-card relative z-20"
    >
      <div className="w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
          {statutoryData.map((item, index) => {
            const Icon = item.icon;
            const isLastOnDesktop = index === statutoryData.length - 1;
            const isEvenOnTablet = index % 2 === 0;
            const isFirstRowOnTablet = index < 2;
            const isLastOnMobile = index === statutoryData.length - 1;

            return (
              <li
                key={item.id}
                className={cn(
                  "relative flex items-center gap-4 p-5 sm:p-6 transition-colors duration-150 hover:bg-muted/40 group shadow-none",
                  // Mobile vertical dividing borders
                  !isLastOnMobile ? "border-b border-border" : "border-b-0",
                  // Tablet 2-column borders
                  isEvenOnTablet
                    ? "sm:border-r sm:border-border"
                    : "sm:border-r-0",
                  isFirstRowOnTablet
                    ? "sm:border-b sm:border-border"
                    : "sm:border-b-0",
                  // Desktop 4-column borders (no bottom border because section has border-b)
                  !isLastOnDesktop
                    ? "lg:border-r lg:border-border"
                    : "lg:border-r-0",
                  "lg:border-b-0",
                )}
              >
                <div className="flex size-10 shrink-0 items-center justify-center bg-muted/60 text-foreground group-hover:bg-muted group-hover:text-foreground border border-border group-hover:border-foreground/30 rounded-none transition-colors duration-150">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground truncate">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-bold text-foreground tracking-tight truncate">
                    {item.value}
                  </p>
                  {item.subValue ? (
                    <span className="block font-mono text-[10px] text-muted-foreground truncate mt-0.5">
                      {item.subValue}
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
