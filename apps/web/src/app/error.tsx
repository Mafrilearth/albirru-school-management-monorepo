"use client";

import { AlertCircle, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20 bg-background">
      <div className="max-w-md w-full border border-border bg-card/60 p-8 sm:p-12 shadow-none rounded-none relative group text-center">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-destructive">
            // SYS.500 — RUNTIME EXCEPTION
          </span>
          <span className="font-mono text-[10px] uppercase text-muted-foreground">
            ERROR_HANDLER
          </span>
        </div>

        <div className="flex items-center justify-center bg-destructive/10 border border-destructive/20 text-destructive size-20 rounded-none mx-auto mb-6">
          <AlertCircle className="size-10" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
          Something Went Wrong
        </h1>

        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          We apologize, an unexpected runtime exception occurred while
          processing this component. Click below to re-attempt execution.
        </p>

        <Button
          onClick={() => reset()}
          className="w-full gap-2 font-mono uppercase tracking-wider text-xs font-bold py-5 rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-150 shadow-none cursor-pointer"
        >
          <RotateCcw className="size-4" />
          <span>Re-attempt Execution</span>
        </Button>
      </div>
    </div>
  );
}
