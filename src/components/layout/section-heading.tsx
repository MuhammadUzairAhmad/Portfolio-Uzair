import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./container";
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="flex w-fit shrink-0 items-center gap-5 border-b border-border pb-1 text-xs font-medium hover:text-primary"
        >
          {action}
          <ArrowUpRight size={14} aria-hidden />
        </Link>
      )}
    </div>
  );
}
