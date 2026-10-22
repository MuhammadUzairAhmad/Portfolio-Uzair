import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
const variants = {
  primary: "border-primary bg-primary text-primary-foreground hover:opacity-90",
  secondary: "border-border bg-surface text-foreground hover:bg-accent",
  outline: "border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "border-transparent bg-transparent text-foreground hover:bg-surface",
};
const sizes = {
  sm: "min-h-9 gap-3 px-3 py-2 text-xs",
  md: "min-h-11 gap-6 px-5 py-3 text-[13px]",
  lg: "min-h-12 gap-8 px-6 py-3.5 text-sm",
  icon: "size-11 justify-center p-0",
};
type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};
export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: StyleProps = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center rounded-md border font-medium transition-[background-color,opacity,transform] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 [&_.lucide-arrow-right]:transition-transform [&_.lucide-arrow-right]:duration-200 motion-safe:hover:[&_.lucide-arrow-right]:translate-x-0.5 disabled:pointer-events-none disabled:opacity-45",
    variants[variant],
    sizes[size],
    className,
  );
}
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & StyleProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<"a"> & StyleProps & { href: string }) {
  const classes = buttonClasses({ variant, size, className });
  return href.startsWith("/") ? (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
