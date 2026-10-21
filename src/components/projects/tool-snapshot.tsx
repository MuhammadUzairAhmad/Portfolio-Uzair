import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ToolVisual } from "./tool-visual";
import { NextProjectCard } from "./project-card";
import { ProjectGallery } from "./project-gallery";
import { ProjectWalkthroughs } from "./project-walkthroughs";

export function ToolSnapshot({
  project,
  next,
}: {
  project: PortfolioProject;
  next: PortfolioProject;
}) {
  const decisions = project.decisions.filter((item) => !item.demo);
  const results = project.results.filter((item) => !item.demo);
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
        <dl className="mt-7 grid gap-4 rounded-xl border border-border bg-surface/50 p-5 sm:grid-cols-3">
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
        <section className="mt-8 border-t border-border py-7">
          <h2 className="text-2xl">Overview</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {project.overview.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section className="border-t border-border py-7">
          <h2 className="text-2xl">My role & contributions</h2>
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
        {project.stackVerified !== false && (
          <section className="border-t border-border py-7">
            <h2 className="text-2xl">Tech stack</h2>
            <div
              aria-label="Project technologies"
              className="mt-5 flex flex-wrap gap-2"
            >
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>
        )}
        {decisions.length > 0 && (
          <section className="border-t border-border py-7">
            <h2 className="text-2xl">Decisions that mattered</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {decisions.map((item) => (
                <li key={item.topic} className="rounded-xl bg-surface p-5">
                  <p className="text-xs font-medium text-primary">
                    {item.topic}
                  </p>
                  <h3 className="mt-3 text-base">{item.choice}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.developmentWorkflow && (
          <section className="border-t border-border py-7">
            <h2 className="text-2xl">Development workflow</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {project.developmentWorkflow}
            </p>
          </section>
        )}
        {results.length > 0 && (
          <section className="border-t border-border py-7">
            <h2 className="text-2xl">What I delivered</h2>
            {results.map((item) => (
              <p
                key={item.text}
                className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground"
              >
                {item.text}
              </p>
            ))}
          </section>
        )}
        {project.lessons && !project.lessons.demo && (
          <section className="border-t border-border py-7">
            <h2 className="text-2xl">Lessons learned</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {project.lessons.text}
            </p>
          </section>
        )}
        {!!project.walkthroughs?.length && (
          <ProjectWalkthroughs
            id={`${project.slug}-walkthroughs`}
            recordings={project.walkthroughs}
          />
        )}
        <ProjectGallery
          id={`${project.slug}-gallery`}
          projectName={project.name}
          media={project.media}
        />
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
