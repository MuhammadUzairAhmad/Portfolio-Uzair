import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-1.5">{title}</h2>
      </div>
      {description && (
        <p className="max-w-56 text-xs leading-relaxed text-muted-foreground sm:text-right">
          {description}
        </p>
      )}
      {href && (
        <Link
          href={href}
          className="flex w-fit shrink-0 items-center gap-4 py-1 text-xs font-medium text-primary"
        >
          {action}
          <ArrowRight size={15} aria-hidden />
        </Link>
      )}
    </div>
  );
}
