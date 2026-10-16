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
      <body className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground font-sans">
        <div className="max-w-md w-full text-center flex flex-col gap-6 p-8 border border-border bg-card/60 shadow-none rounded-none relative group">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-destructive">
              // SYS.CRITICAL — GLOBAL ROOT EXCEPTION
            </span>
            <span className="font-mono text-[10px] uppercase text-muted-foreground">
              FATAL_RECOVERY
            </span>
          </div>

          <div className="size-16 rounded-none bg-destructive/10 border border-destructive/20 text-destructive mx-auto flex items-center justify-center text-2xl font-mono font-bold">
            !
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Terjadi Kesalahan Sistem
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Sistem mengalami kendala saat memuat layout utama. Silakan muat
              ulang halaman atau hubungi pengelola sistem.
            </p>
          </div>

          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-4 px-4 rounded-none font-mono uppercase tracking-wider text-xs font-bold bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-150 cursor-pointer shadow-none"
          >
            Muat Ulang Halaman
          </button>
        </div>
      </body>
    </html>
  );
}
