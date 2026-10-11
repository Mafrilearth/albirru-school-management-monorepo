export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="flex gap-2">
        {/* Brutalist square loading dots */}
        <div className="size-4 bg-amber-500 rounded-none animate-pulse" />
        <div className="size-4 bg-emerald-500 rounded-none animate-pulse delay-75" />
        <div className="size-4 bg-slate-800 dark:bg-slate-200 rounded-none animate-pulse delay-150" />
      </div>
      <p className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
