import type { PortfolioProject } from "@/types/content";
import { Eyebrow } from "@/components/layout/container";
export function ImplementationMap({
  map,
  compact = false,
}: {
  map: NonNullable<PortfolioProject["implementation"]>;
  compact?: boolean;
}) {
  return (
    <figure className="rounded-xl border border-border bg-surface/60 p-5 sm:p-6">
      <figcaption>
        <Eyebrow className="text-primary">Contribution map</Eyebrow>
        <p className="mt-2 text-lg font-semibold">{map.title}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {map.description}
        </p>
      </figcaption>
      <ol
        className={`mt-5 grid gap-3 ${compact || map.steps.length === 4 ? "sm:grid-cols-2" : "md:grid-cols-3"}`}
      >
        {map.steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-lg border border-border bg-background/65 p-4"
          >
            <span aria-hidden className="font-mono text-xs text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-semibold">{step.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
