import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20 bg-background">
      <div className="max-w-md w-full border border-border bg-card/60 p-8 sm:p-12 shadow-none rounded-none relative group text-center">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // ERR.404 — RESOLUTION FAILURE
          </span>
          <span className="font-mono text-[10px] uppercase text-muted-foreground">
            NOT_FOUND
          </span>
        </div>

        <div className="flex items-center justify-center bg-muted/60 border border-border text-foreground size-20 rounded-none mx-auto mb-6">
          <span className="text-2xl font-mono font-bold tracking-tight">
            404
          </span>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Routing resolution failed. The resource or document you requested may
          have been relocated, decommissioned, or does not exist.
        </p>

        <Button
          render={<Link href="/" />}
          nativeButton={false}
          className="w-full gap-2 font-mono uppercase tracking-wider text-xs font-bold py-5 rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-150 shadow-none cursor-pointer"
        >
          <ArrowLeft className="size-4" />
          <span>Return to Homepage</span>
        </Button>
      </div>
    </div>
  );
}
