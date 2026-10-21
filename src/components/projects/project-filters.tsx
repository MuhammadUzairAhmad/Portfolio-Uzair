"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
type Entry = { slug: string; tags: string[]; content: ReactNode };
export function ProjectFilters({
  featured,
  other,
}: {
  featured: Entry[];
  other: Entry[];
}) {
  const [filter, setFilter] = useState("All");
  const matches = (item: Entry) =>
    filter === "All" || item.tags.includes(filter);
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter projects">
        {[
          "All",
          "Web applications",
          "Mobile apps",
          "Full-stack",
          "Platforms",
        ].map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={label === filter}
            onClick={() => setFilter(label)}
            className={cn(
              "min-h-10 rounded-md border px-4 py-2 text-xs transition-colors",
              label === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-surface",
            )}
          >
            {label}
          </button>
        ))}
        <Link
          href="/tools"
          className="flex min-h-10 items-center rounded-md border border-border px-4 py-2 text-xs hover:bg-surface"
        >
          Tools
        </Link>
      </div>
      <div className="space-y-4">
        {featured.map((item) => (
          <div key={item.slug} hidden={!matches(item)}>
            {item.content}
          </div>
        ))}
      </div>
      {other.some(matches) && (
        <section className="mt-7">
          <p className="mb-4 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Other projects
          </p>
          <div className="space-y-3">
            {other.map((item) => (
              <div key={item.slug} hidden={!matches(item)}>
                {item.content}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
