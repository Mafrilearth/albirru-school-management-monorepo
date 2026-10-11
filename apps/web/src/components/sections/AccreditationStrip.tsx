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
    id: "npsn",
    label: "NPSN Kemendikdasmen",
    value: "70010111",
    subValue: "Terdaftar Resmi Data Pokok Pendidikan",
    icon: ShieldCheck,
  },
  {
    id: "accreditation",
    label: "Status Akreditasi Sekolah",
    value: "Grade A (Unggul)",
    subValue: "Sertifikasi BAN-S/M Jawa Barat",
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
    value: "Standar JSIT Indonesia",
    subValue: "Jaringan Sekolah Islam Terpadu",
    icon: CheckCircle2,
  },
];

export function AccreditationStrip() {
  return (
    <section
      aria-label="Identitas Kelembagaan dan Legalitas"
      className="border-b border-border bg-card/60 backdrop-blur-xs py-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statutoryData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl border border-border/80 bg-background/80 p-4.5 transition-all hover:border-primary/40 hover:bg-muted/30 shadow-xs"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="size-5.5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs font-medium text-muted-foreground truncate">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-foreground tracking-tight truncate">
                    {item.value}
                  </dd>
                  {item.subValue ? (
                    <span className="block text-[11px] text-muted-foreground/80 truncate mt-0.5">
                      {item.subValue}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
