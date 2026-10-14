import { Award, Building2, CheckCircle2, ShieldCheck } from "lucide-react";

interface StatutoryItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  icon: typeof ShieldCheck;
}

const statutoryData: readonly StatutoryItem[] = [
  {
    id: "registry",
    label: "Identifikasi Resmi Sekolah",
    value: "70010111",
    subValue: "Terdaftar Resmi Basis Data Nasional",
    icon: ShieldCheck,
  },
  {
    id: "accreditation",
    label: "Status Akreditasi Sekolah",
    value: "Grade A (Unggul)",
    subValue: "Badan Akreditasi Nasional",
    icon: Award,
  },
  {
    id: "foundation",
    label: "Yayasan Penyelenggara",
    value: "Yayasan Amal Cahaya Indonesia",
    subValue: "Legalitas SK Kemenkumham RI",
    icon: Building2,
  },
  {
    id: "network",
    label: "Jejaring Mutu Pendidikan",
    value: "Kurikulum Islam Terpadu",
    subValue: "Standar Pembelajaran Karakter Terpadu",
    icon: CheckCircle2,
  },
];

export function AccreditationStrip() {
  return (
    <section
      aria-label="Identitas Kelembagaan dan Legalitas"
      className="border-b border-border bg-muted/20 backdrop-blur-md py-10 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 list-none p-0 m-0">
          {statutoryData.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="flex items-center gap-4 border border-border/80 bg-card/90 rounded-2xl p-4.5 transition-all duration-200 hover:border-primary/40 hover:shadow-md group shadow-xs"
              >
                <div className="flex size-11 shrink-0 items-center justify-center bg-primary/10 text-primary border border-primary/20 rounded-xl group-hover:scale-105 transition-transform duration-200">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-bold text-foreground tracking-tight truncate">
                    {item.value}
                  </p>
                  {item.subValue ? (
                    <span className="block text-[11px] text-muted-foreground truncate mt-0.5">
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
