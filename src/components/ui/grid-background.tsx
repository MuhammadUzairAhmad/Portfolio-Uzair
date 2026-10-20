import { cn } from "@/lib/cn";
const sizes = {
  small: "[background-size:24px_24px]",
  medium: "[background-size:48px_48px]",
  large: "[background-size:96px_96px]",
};
export function GridBackground({
  size = "medium",
  glow = false,
  markers = false,
  className,
}: {
  size?: keyof typeof sizes;
  glow?: boolean;
  markers?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden",
        className,
      )}
    >
      {glow && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_65%,var(--accent),transparent_65%)] opacity-60 dark:opacity-50" />
      )}
      <div
        className={cn(
          "absolute inset-0 text-primary/[0.12] dark:text-primary/[0.10] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_82%)]",
          sizes[size],
        )}
      />
      {markers &&
        [
          "left-[8%] top-7",
          "right-[8%] top-7",
          "left-[8%] bottom-7",
          "right-[8%] bottom-7",
        ].map((position) => (
          <span
            key={position}
            className={cn(
              "absolute size-3 text-primary/25 before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-px after:bg-current",
              position,
            )}
          />
        ))}
    </div>
  );
}
