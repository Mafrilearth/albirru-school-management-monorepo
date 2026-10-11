"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Brutalist Error block */}
      <div className="flex items-center justify-center bg-red-600 text-white w-32 h-32 rounded-none mb-8 shadow-2xl">
        <span className="text-5xl font-black font-mono tracking-tighter">ERR</span>
      </div>
      
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
        System Error Occurred
      </h1>
      
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        Maaf, sistem mendeteksi anomali saat memuat komponen ini. Klik tombol di bawah untuk mencoba memuat ulang.
      </p>
      
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-8 h-12 rounded-none font-mono uppercase text-sm transition-colors border border-transparent dark:border-slate-700"
      >
        <RotateCcw className="size-4" />
        <span>Reload System</span>
      </button>
    </div>
  );
}
