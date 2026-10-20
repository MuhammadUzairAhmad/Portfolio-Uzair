import { cn } from "@/lib/cn";
export function ToolVisual({
  kind,
  className,
  detailed = false,
}: {
  kind?: "type" | "globe" | "blog";
  className?: string;
  detailed?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-36 items-center justify-center",
        className,
      )}
    >
      {kind === "type" ? (
        <>
          <span
            className={cn(
              "font-serif text-[90px] leading-none tracking-[-.13em] text-[#131532] dark:text-[#bc8bdf]",
              detailed &&
                "relative z-10 -rotate-6 rounded-md border border-white/20 bg-[#252927] p-5 text-8xl text-[#eee8d8] shadow-xl",
            )}
          >
            Aa
          </span>
          <span className="ml-6 text-5xl text-[#1a1b3d] dark:text-[#c7a0e5]">
            ✦
          </span>
          {detailed && (
            <div className="absolute right-[12%] top-2 rotate-12 rounded-sm bg-[#f0e4c9] px-6 py-7 font-serif text-5xl italic text-[#64543d] shadow-lg">
              Aa
            </div>
          )}
        </>
      ) : kind === "globe" ? (
        <>
          <span
            className={cn(
              "text-[104px] leading-none drop-shadow-lg",
              detailed && "text-[180px]",
            )}
          >
            🌍
          </span>
          {detailed && (
            <div className="absolute bottom-0 right-1 w-32 rotate-6 rounded-md border border-[#d7dfc6] bg-[#f7f8e9] p-3 text-[9px] text-[#304621] shadow-lg">
              <b>Capitals Quiz</b>
              <p className="mt-2">Which city is the capital?</p>
              {[1, 2, 3].map((n) => (
                <div key={n} className="mt-2 flex items-center gap-2">
                  <span className="size-2 rounded-full border border-[#86a262]" />
                  <span className="h-1 w-14 rounded bg-[#dce4cd]" />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className={cn("relative h-28 w-36", detailed && "scale-150")}>
          <div className="absolute inset-1 -rotate-12 rounded-sm bg-[#e8d8b9] shadow-sm" />
          <div className="absolute inset-1 rotate-12 rounded-sm bg-[#ecdfc5] shadow-sm" />
          <div className="absolute inset-1 rounded-sm border border-[#ded2ba] bg-[#fffdf5] px-5 py-4 shadow-md">
            <div className="mb-2 h-1 w-7 bg-[#30352e]" />
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={cn("mt-1.5 h-px bg-[#858b7e]", n === 3 && "w-2/3")}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
