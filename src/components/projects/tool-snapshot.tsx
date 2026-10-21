import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ToolVisual } from "./tool-visual";
import { NextProjectCard } from "./project-card";
export function ToolSnapshot({
  project,
  next,
}: {
  project: PortfolioProject;
  next: PortfolioProject;
}) {
  return (
    <main id="main-content">
      <Container className="py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex gap-3 text-sm text-muted-foreground"
        >
          <Link href="/tools" className="text-primary">
            Tools
          </Link>
          <span>/</span>
          <span>{project.name}</span>
        </nav>
        <div className="mt-7 grid items-center gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>Project snapshot</Eyebrow>
            <h1 className="mt-3 text-4xl sm:text-6xl">{project.name}</h1>
            <p className="mt-4 text-lg font-semibold text-primary">
              {project.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.scope.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <ToolVisual
            kind={project.illustration}
            detailed
            eager
            className="h-60 sm:h-72"
          />
        </div>
        <section className="mt-8 border-t border-border py-7">
          <h2 className="text-2xl">Overview</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </section>
        <section className="border-t border-border py-7">
          <h2 className="text-2xl">My contribution</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {project.contributions.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border p-5"
              >
                <h3 className="text-base">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="border-t border-border py-7">
          <h2 className="mb-4 text-xl">Next tool</h2>
          <NextProjectCard project={next} />
        </section>
        <Link
          href="/tools"
          className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-primary"
        >
          All tools <ArrowRight size={15} aria-hidden />
        </Link>
      </Container>
      <ContactCta />
    </main>
  );
}
