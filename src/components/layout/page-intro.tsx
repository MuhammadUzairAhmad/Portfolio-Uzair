import type { ReactNode } from "react";
import { Container, Eyebrow } from "./container";
export function PageIntro({
  eyebrow,
  title,
  description,
  subtitle,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  subtitle?: string;
  note?: ReactNode;
}) {
  return (
    <section>
      <Container className="relative py-10 sm:py-12">
        <Eyebrow className="text-primary">{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-lg font-medium">{subtitle}</p>}
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
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
