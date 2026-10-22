import type { ReactNode } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Container, Eyebrow } from "./container";
export function PageIntro({
  eyebrow,
  title,
  description,
  subtitle,
  note,
  grid = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string | readonly string[];
  subtitle?: string;
  note?: ReactNode;
  grid?: boolean;
}) {
  return (
    <section className={grid ? "relative isolate" : undefined}>
      {grid && <GridBackground size="small" className="opacity-70" />}
      <Container className="relative py-10 sm:py-12">
        <Eyebrow className="text-primary">{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-lg font-medium">{subtitle}</p>}
        <div className="mt-5 max-w-xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          {(typeof description === "string" ? [description] : description).map(
            (paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ),
          )}
        </div>
        {note && (
          <div
            aria-hidden="true"
            className="absolute right-6 top-10 hidden max-w-40 -rotate-12 font-hand text-3xl leading-tight text-primary lg:block"
          >
            {note}
            <span className="ml-14 mt-2 block rotate-12 text-5xl">⤵</span>
          </div>
        )}
      </Container>
    </section>
  );
}
