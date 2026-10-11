import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="flex items-center justify-center bg-muted text-foreground size-24 rounded-full mb-6">
        <span className="text-3xl font-extrabold tracking-tight">404</span>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
        Page Not Found
      </h1>

      <p className="text-muted-foreground max-w-md mb-8 text-sm">
        Routing resolution failed. The page or document you are looking for may
        have been moved, renamed, or does not exist.
      </p>

      <Button render={<Link href="/" />} nativeButton={false} className="gap-2">
        <ArrowLeft className="size-4" />
        <span>Return to Home</span>
      </Button>
    </div>
  );
}
