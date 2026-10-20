import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("screen-container", className)} {...props} />;
}
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] font-normal uppercase tracking-[.16em] text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
