import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-background/60 px-2 py-1 text-[10px] leading-tight text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
export function DemoBadge() {
  return (
    <span className="inline-flex rounded border border-primary/15 bg-accent px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent-foreground">
      Demo copy
    </span>
  );
}
