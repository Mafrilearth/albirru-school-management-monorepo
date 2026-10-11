import { Button } from "@albirru/design-system";
import { ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";

export default function PortalHomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900 text-slate-100">
      <div className="max-w-md w-full border border-slate-800 bg-slate-950 p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
              Sistem Informasi Sekolah
            </span>
            <h1 className="text-xl font-black text-slate-100 tracking-tight">
              Portal SD Al-Birru
            </h1>
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Pusat kendali operasional akademik, presensi, evaluasi penilaian, dan
          manajemen identitas terpadu.
        </p>

        <div className="space-y-3">
          <Button
            render={<Link href="/admin" />}
            nativeButton={false}
            className="w-full justify-between bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono uppercase text-xs tracking-wider"
          >
            <span>Konsol Admin</span>
            <ArrowRight className="size-4" />
          </Button>

          <Button
            render={<Link href="/admin/identity" />}
            nativeButton={false}
            variant="outline"
            className="w-full justify-between border-slate-800 hover:bg-slate-900 text-slate-200 font-bold font-mono uppercase text-xs tracking-wider"
          >
            <div className="flex items-center gap-2">
              <UserCheck className="size-4 text-emerald-400" />
              <span>Identity Provisioning</span>
            </div>
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>NPSN: 69984214</span>
          <span>SIS v1.0</span>
        </div>
      </div>
    </main>
  );
}
