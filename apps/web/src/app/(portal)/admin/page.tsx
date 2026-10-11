import React from "react";
import Link from "next/link";
import { Users, LayoutDashboard, Settings } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Konsol Manajemen Administrator
        </h1>
        <p className="mt-2 text-slate-600 font-medium">
          Kelola master data, pendaftaran, dan konfigurasi sistem Al-Birru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/identity" className="group block">
          <div className="bg-white border border-slate-200 rounded-none p-6 shadow-none hover:border-emerald-500 hover:bg-emerald-50 transition-colors h-full flex flex-col">
            <div className="size-12 bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center mb-4 border border-slate-200 group-hover:border-emerald-200">
              <Users className="size-6 text-slate-700 group-hover:text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Master Identity Provisioning</h3>
            <p className="text-slate-600 text-sm mt-auto">
              Tambahkan dan kelola profil Guru, Siswa, dan Administrator baru ke dalam basis data utama.
            </p>
          </div>
        </Link>
        
        {/* Adjudication Link (Modul 4.5.3 Placeholder) */}
        <Link href="/admin/admissions" className="group block">
          <div className="bg-white border border-slate-200 rounded-none p-6 shadow-none hover:border-emerald-500 hover:bg-emerald-50 transition-colors h-full flex flex-col">
            <div className="size-12 bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center mb-4 border border-slate-200 group-hover:border-emerald-200">
              <LayoutDashboard className="size-6 text-slate-700 group-hover:text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Admissions Adjudication</h3>
            <p className="text-slate-600 text-sm mt-auto">
              Tinjau dan setujui atau tolak aplikasi pendaftaran siswa baru.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
