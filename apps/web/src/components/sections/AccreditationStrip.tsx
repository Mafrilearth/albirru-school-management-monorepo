import { Award, Building2, Languages, ShieldCheck } from "lucide-react";

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
    label: "National School ID (NPSN)",
    value: "70010111",
    subValue: "Official MoEC Registry",
    icon: ShieldCheck,
  },
  {
    id: "accreditation",
    label: "Accreditation Authority",
    value: "Grade A (Superior)",
    subValue: "National Board (BAN-S/M)",
    icon: Award,
  },
  {
    id: "foundation",
    label: "Educational Foundation",
    value: "Yayasan Al-Birru",
    subValue: "Legal Foundation Deed",
    icon: Building2,
  },
  {
    id: "language",
    label: "Instructional Medium",
    value: "Bilingual Immersion",
    subValue: "Indonesian & English",
    icon: Languages,
  },
];

export function AccreditationStrip() {
  return (
    <section
      aria-label="Institutional Identity and Accreditation"
      className="border-b border-border bg-card/60 backdrop-blur-xs py-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statutoryData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl border border-border/80 bg-background/80 p-4 transition-colors hover:border-border hover:bg-muted/30"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5.5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs font-medium text-muted-foreground truncate">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground tracking-tight truncate">
                    {item.value}
                  </dd>
                  {item.subValue ? (
                    <span className="block text-[11px] text-muted-foreground/80 truncate">
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
