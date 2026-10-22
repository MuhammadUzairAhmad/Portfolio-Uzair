import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, MapPin } from "lucide-react";
import { experience, type ExperienceEntry } from "@/content/experience";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function formatDate(value: string) {
  const [year, month] = value.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}
function EmploymentDates({
  item,
  className,
}: {
  item: ExperienceEntry;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] tabular-nums text-muted-foreground",
        className,
      )}
    >
      <time dateTime={item.startDate}>{formatDate(item.startDate)}</time>
      <span aria-hidden>—</span>
      <span className="sr-only">to</span>
      {item.endDate ? (
        <time dateTime={item.endDate}>{formatDate(item.endDate)}</time>
      ) : (
        <span>Present</span>
      )}
      {item.datesDemo && <DemoBadge />}
    </span>
  );
}
function CompanyLogo({ item }: { item: ExperienceEntry }) {
  return (
    <span
      className={cn(
        "flex h-12 w-16 shrink-0 sm:h-14 sm:w-20 items-center justify-center rounded-xl border border-border p-2.5",
        item.logo
          ? item.logo.tone === "dark"
            ? "bg-[#101827]"
            : "bg-white"
          : "bg-accent",
      )}
    >
      {item.logo ? (
        <Image
          src={item.logo.src}
          width={item.logo.width}
          height={item.logo.height}
          alt=""
          sizes="80px"
          className="max-h-10 w-full object-contain"
        />
      ) : (
        <span aria-hidden className="font-serif text-2xl text-primary">
          {item.initials}
        </span>
      )}
    </span>
  );
}
export function ExperienceList({ detailed = false }: { detailed?: boolean }) {
  if (!detailed)
    return (
      <ol aria-label="Employment timeline" className="divide-y divide-border">
        {experience.map((item) => (
          <li
            key={item.company}
            className="grid grid-cols-[64px_1fr] items-center gap-x-4 gap-y-1 py-4 sm:grid-cols-[80px_1fr_auto]"
          >
            <CompanyLogo item={item} />
            <div className="min-w-0">
              <h3 className="text-base">{item.company}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
              <EmploymentDates item={item} className="mt-1.5 sm:hidden" />
            </div>
            <EmploymentDates item={item} className="hidden sm:inline-flex" />
          </li>
        ))}
      </ol>
    );
  return (
    <ol aria-label="Detailed work experience" className="space-y-4">
      {experience.map((item) => (
        <li key={item.company}>
          <details
            open
            className="group rounded-xl border border-border bg-surface/25"
          >
            <summary className="grid list-none grid-cols-[64px_1fr_16px] items-center gap-3 p-4 sm:grid-cols-[80px_1fr_16px] sm:gap-4 sm:p-6">
              <CompanyLogo item={item} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1">
                  <h3 className="text-lg sm:text-xl">{item.company}</h3>
                  <EmploymentDates item={item} className="text-xs" />
                </div>
                <p className="mt-1 text-sm font-medium">{item.role}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={11} className="shrink-0" aria-hidden />
                  {item.location}
                </p>
              </div>
              <ChevronDown
                size={16}
                className="text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none"
                aria-hidden
              />
            </summary>
            <div className="px-5 pb-5 sm:pl-[136px] sm:pr-6 sm:pb-6">
              <ul className="space-y-3 border-t border-border pt-4">
                {item.highlights.map((point) => (
                  <li
                    key={point.title}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-primary"
                  >
                    {point.project ? (
                      <Link
                        href={`/work/${point.project}`}
                        prefetch
                        className="mr-1 inline-flex items-baseline gap-1 font-semibold text-foreground hover:text-primary"
                      >
                        {point.title}
                        <ArrowUpRight
                          size={11}
                          className="shrink-0 self-center"
                          aria-hidden
                        />
                      </Link>
                    ) : (
                      <span className="mr-1 font-semibold text-foreground">
                        {point.title}
                      </span>
                    )}
                    <span>— {point.description}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label={`${item.company} technologies`}
              >
                {item.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
