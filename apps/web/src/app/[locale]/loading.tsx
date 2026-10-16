import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
      <Loader2 className="size-6 text-primary animate-spin" />
      <p className="text-xs font-medium text-muted-foreground">Loading...</p>
    </div>
  );
}
