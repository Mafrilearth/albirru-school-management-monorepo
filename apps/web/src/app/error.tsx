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
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="flex items-center justify-center bg-destructive/10 text-destructive size-20 rounded-full mb-6">
        <AlertCircle className="size-10" />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
        Something Went Wrong
      </h1>

      <p className="text-muted-foreground max-w-md mb-8 text-sm">
        We apologize, the system encountered an unexpected error while loading
        this component. Click the button below to try again.
      </p>

      <Button onClick={() => reset()} className="gap-2">
        <RotateCcw className="size-4" />
        <span>Try Again</span>
      </Button>
    </div>
  );
}
