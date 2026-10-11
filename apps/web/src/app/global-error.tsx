"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-950 text-slate-50 font-sans">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="size-16 rounded-full bg-red-500/10 text-red-500 mx-auto flex items-center justify-center text-2xl font-bold">
            !
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Terjadi Kesalahan Sistem
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Sistem mengalami kendala saat memuat layout utama. Silakan muat
              ulang halaman atau hubungi pengelola sistem.
            </p>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors cursor-pointer"
          >
            Muat Ulang Halaman
          </button>
        </div>
      </body>
    </html>
  );
}
