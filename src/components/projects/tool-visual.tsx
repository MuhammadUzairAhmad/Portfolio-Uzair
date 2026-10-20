import { Globe2, ArrowUpRight, Type, AlignLeft } from "lucide-react";
import { cn } from "@/lib/cn";
export function ToolVisual({
  kind,
  className,
}: {
  kind?: "type" | "globe" | "blog";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border",
        kind === "type"
          ? "bg-[#e8e3f0] text-[#4d3769]"
          : kind === "globe"
            ? "bg-[#e4ecdf] text-[#355638]"
            : "bg-[#f2e7da] text-[#75513a]",
        className,
      )}
    >
      {kind === "type" ? (
        <>
          <span className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-widest">
            Words, with personality.
          </span>
          <span className="font-serif text-7xl italic tracking-tighter lg:text-8xl">
            Aa<span className="font-sans text-4xl font-light">✳</span>
          </span>
          <Type className="absolute bottom-5 right-5 opacity-50" size={18} />
          <div className="absolute bottom-5 left-5 flex gap-1">
            <span className="h-1 w-8 bg-current opacity-40" />
            <span className="h-1 w-4 bg-current opacity-20" />
          </div>
        </>
      ) : kind === "globe" ? (
        <>
          <div className="absolute inset-5 rounded-full border border-current opacity-10" />
          <Globe2 size={120} strokeWidth={0.6} />
          <span className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-widest">
            A world to explore.
          </span>
          <span className="absolute bottom-5 right-5 text-xl">↗</span>
        </>
      ) : (
        <>
          <div className="w-[65%] -rotate-6 rounded-sm border border-[#d6c2ad] bg-[#fbf7f0] p-5 shadow-sm">
            <div className="flex justify-between border-b border-[#d6c2ad] pb-2 text-[9px]">
              The Journal <ArrowUpRight size={10} />
            </div>
            <p className="my-4 font-serif text-3xl italic">
              Stories
              <br />
              worth sharing.
            </p>
            <AlignLeft size={28} strokeWidth={0.8} />
          </div>
          <span className="absolute bottom-4 right-5 font-mono text-[9px] uppercase tracking-widest">
            Made for reading.
          </span>
        </>
      )}
    </div>
  );
}
