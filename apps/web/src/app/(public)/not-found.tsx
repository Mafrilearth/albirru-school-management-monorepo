import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* Brutalist 404 block */}
      <div className="flex items-center justify-center bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 w-32 h-32 rounded-none mb-8 shadow-2xl">
        <span className="text-6xl font-black font-mono tracking-tighter">404</span>
      </div>
      
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 uppercase tracking-wide">
        Page Not Found
      </h1>
      
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        Kode panggil gagal. Halaman atau dokumen yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak pernah ada dalam sistem.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 h-12 rounded-none font-mono uppercase text-sm transition-colors shadow-none"
      >
        <ArrowLeft className="size-4" />
        <span>Kembali ke Home</span>
      </Link>
    </div>
  );
}
