import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { ToolVisual } from "./tool-visual";
import { NextProjectCard } from "./project-card";
import { ProjectStack } from "./project-stack";
import { ProjectContributions } from "./project-contributions";
import { ProjectDecisions } from "./project-decisions";
import { ProjectEvidence } from "./project-evidence";

function ToolSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-t border-border py-7">
      <h2 className="mb-5 text-2xl">{title}</h2>
      {children}
    </section>
  );
}
export function ToolSnapshot({
  project,
  next,
}: {
  project: PortfolioProject;
  next: PortfolioProject;
}) {
  const results = project.results.filter((r) => !r.demo);
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
              {project.detailSummary ?? project.summary}
            </p>
            {project.productUrl && (
              <ButtonLink
                href={project.productUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5"
              >
                Open project <ArrowRight size={15} aria-hidden />
              </ButtonLink>
            )}
          </div>
          <ToolVisual
            kind={project.illustration}
            detailed
            eager
            className="h-60 sm:h-72"
          />
        </div>
        <dl className="mb-7 mt-7 grid gap-4 rounded-xl border border-border bg-surface/50 p-5 sm:grid-cols-3">
          {[
            { label: "Role", value: project.role },
            { label: "Project", value: project.team },
            { label: "Platform", value: project.platform },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-2 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <ToolSection id="overview" title="Overview">
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {project.overview.split("\n\n").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </ToolSection>
        <ToolSection id="contributions" title="My contribution">
          <ProjectContributions project={project} />
        </ToolSection>
        {project.stackVerified !== false && (
          <ToolSection id="tech-stack" title="Tech stack">
            <ProjectStack stack={project.stack} />
          </ToolSection>
        )}
        {(!!project.media?.length || !!project.walkthroughs?.length) && (
          <ToolSection id="evidence" title="Screenshots & walkthroughs">
            <ProjectEvidence project={project} />
          </ToolSection>
        )}
        {project.decisions.some((d) => !d.demo) && (
          <ToolSection id="decisions" title="Technical decisions">
            <ProjectDecisions decisions={project.decisions} />
          </ToolSection>
        )}
        {results.length > 0 && (
          <ToolSection id="outcomes" title="Outcome">
            <div className="rounded-xl bg-surface p-5">
              {results.map((r) => (
                <p
                  key={r.text}
                  className="max-w-3xl text-base leading-relaxed text-muted-foreground"
                >
                  {r.text}
                </p>
              ))}
              {project.lessons && !project.lessons.demo && (
                <details className="mt-4 border-t border-border pt-4">
                  <summary className="cursor-pointer text-sm">
                    Lessons learned
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.lessons.text}
                  </p>
                </details>
              )}
            </div>
          </ToolSection>
        )}
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
