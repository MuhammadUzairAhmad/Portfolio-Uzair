import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <table
      className={cn("w-full border-collapse text-left text-sm", className)}
      {...props}
    />
  );
}
export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "border-b border-border bg-surface px-4 py-3 text-xs font-medium",
        className,
      )}
      {...props}
    />
  );
}
export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "border-b border-border px-4 py-4 align-top text-xs leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
