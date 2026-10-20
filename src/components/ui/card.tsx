import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
const tones = { default: "bg-background", muted: "bg-surface" };
export function Card({
  tone = "default",
  className,
  ...props
}: ComponentProps<"div"> & { tone?: keyof typeof tones }) {
  return (
    <div
      className={cn("rounded-xl border border-border", tones[tone], className)}
      {...props}
    />
  );
}
export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}
export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}
