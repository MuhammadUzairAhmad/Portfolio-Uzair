import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { DevicePreview } from "./device-preview";
import { ProjectStack } from "./project-stack";
import { ProjectChallenge } from "./project-challenge";
import { ProjectContributions } from "./project-contributions";
import { ProjectDecisions } from "./project-decisions";
import { ProjectEvidence } from "./project-evidence";
import { ToolSnapshot } from "./tool-snapshot";
import { NextProjectCard } from "./project-card";

function StorySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-6 grid-cols-[35px_1fr] gap-3 border-t border-border py-6 sm:grid-cols-[52px_1fr] sm:gap-5"
    >
      <span className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
        {number}
      </span>
      <div className="min-w-0">
        <h2 className="mb-4 text-xl sm:text-2xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function CaseStudy({
  project,
  next,
}: {
  project: PortfolioProject;
  next: PortfolioProject;
}) {
  if (project.category === "Tools")
    return <ToolSnapshot project={project} next={next} />;
  const hasVisual = !!(project.image || project.mockup);
  const hasEvidence = !!project.media?.length || !!project.walkthroughs?.length;
  const hasDecisions = project.decisions.some((item) => !item.demo);
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "contributions", label: "My contribution" },
    ...(project.highlightChallenge
      ? [{ id: "challenge", label: "Key challenge & solution" }]
      : []),
    ...(project.stackVerified !== false
      ? [{ id: "tech-stack", label: "Tech stack" }]
      : []),
    ...(hasEvidence
      ? [{ id: "evidence", label: "Screenshots & walkthroughs" }]
      : []),
    ...(hasDecisions ? [{ id: "decisions", label: "Key decisions" }] : []),
    { id: "outcomes", label: "Outcome" },
  ];
  return (
    <main id="main-content">
      <Container className="pt-7">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-xs text-muted-foreground"
        >
          <Link href="/work" className="hover:text-primary">
            Work
          </Link>
          <span>/</span>
          <span className="text-primary">{project.name}</span>
        </nav>
        <div className="relative mt-5">
          <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-3xl text-lg font-semibold text-primary sm:text-2xl">
            {project.subtitle}.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {project.detailSummary ?? project.summary}
          </p>
          {project.slug === "skillmatch" && (
            <p
              aria-hidden="true"
              className="absolute right-6 top-0 hidden -rotate-12 font-hand text-3xl text-primary lg:block"
            >
              Better
              <br />
              opportunities
              <br />
              for people
              <br />—
            </p>
          )}
          {project.involvement && (
            <div className="mt-4">
              <Badge>{project.involvement}</Badge>
            </div>
          )}
          {project.projectStatus && (
            <div className="mt-4">
              <Badge>{project.projectStatus}</Badge>
            </div>
          )}
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-5 rounded-xl bg-surface px-5 py-5 sm:grid-cols-4 sm:gap-0">
          {[
            { label: "Role", value: project.role },
            { label: "Team", value: project.team },
            { label: "Platform", value: project.platform },
            {
              label: "Stack",
              value: (
                project.keyTechnologies ?? project.stack.slice(0, 3)
              ).join(" · "),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="sm:border-r sm:border-border sm:px-5 sm:first:pl-0 sm:last:border-0"
            >
              <dt className="text-xs font-semibold">{item.label}</dt>
              <dd className="mt-1.5 text-sm text-muted-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <div
          data-project-cover={hasVisual ? "image" : "placeholder"}
          className="relative mt-5 flex aspect-[1.8] items-center justify-center overflow-hidden rounded-xl bg-[#faf5e9] sm:aspect-[2.15] dark:bg-[#121d17]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#d5c59935,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,#a7d54040,transparent_68%)]" />
          {hasVisual ? (
            <DevicePreview
              project={project}
              className="relative h-[94%] w-[94%]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="relative flex h-full w-full items-center justify-center px-6 text-center"
            >
              <span className="max-w-3xl font-serif text-3xl text-primary sm:text-5xl lg:text-6xl">
                {project.name}
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
          {!project.productUrl && project.status === "Private project" && (
            <p className="mr-auto text-xs text-muted-foreground">
              Private project · no public app link
            </p>
          )}
          {!!project.walkthroughs?.length && (
            <ButtonLink
              href={`#${project.slug}-walkthroughs`}
              variant="outline"
              size="sm"
            >
              Watch walkthrough{project.walkthroughs.length > 1 ? "s" : ""}{" "}
              <PlayCircle size={13} aria-hidden />
            </ButtonLink>
          )}
          {!!project.media?.length && (
            <ButtonLink
              href={`#${project.slug}-gallery`}
              variant="outline"
              size="sm"
            >
              View screenshots & media <ArrowRight size={13} aria-hidden />
            </ButtonLink>
          )}
          {project.productUrl && (
            <ButtonLink
              href={project.productUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
            >
              {project.productLinkLabel ?? "Open project"}{" "}
              <ArrowRight size={13} aria-hidden />
            </ButtonLink>
          )}
        </div>
        <div className="mt-6 grid items-start gap-6 xl:grid-cols-[220px_1fr] xl:gap-10">
          <aside className="hidden border-border xl:sticky xl:top-5 xl:block xl:border-r xl:pr-6">
            <nav
              aria-label="Case study contents"
              className="flex flex-col gap-3"
            >
              <Eyebrow className="mb-1 w-full">On this page</Eyebrow>
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 rounded py-2 text-sm text-muted-foreground hover:bg-surface hover:text-primary"
                >
                  <span className="font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>
          <div className="min-w-0">
            {sections.map((section, i) => (
              <StorySection
                key={section.id}
                id={section.id}
                number={String(i + 1).padStart(2, "0")}
                title={section.label}
              >
                {section.id === "overview" && (
                  <div className="space-y-4">
                    {(project.context ?? project.overview)
                      .split("\n\n")
                      .map((p) => (
                        <p
                          key={p}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {p}
                        </p>
                      ))}
                  </div>
                )}
                {section.id === "contributions" && (
                  <ProjectContributions project={project} />
                )}
                {section.id === "challenge" && (
                  <ProjectChallenge project={project} />
                )}
                {section.id === "tech-stack" && (
                  <ProjectStack stack={project.stack} />
                )}
                {section.id === "evidence" && (
                  <ProjectEvidence project={project} />
                )}
                {section.id === "decisions" && (
                  <ProjectDecisions decisions={project.decisions} />
                )}
                {section.id === "outcomes" && (
                  <div className="rounded-xl bg-surface p-5">
                    {project.results
                      .filter((r) => !r.demo)
                      .map((r) => (
                        <p
                          key={r.text}
                          className="text-sm leading-relaxed text-muted-foreground"
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
                )}
              </StorySection>
            ))}
          </div>
        </div>
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-xl">Next project</h2>
          <NextProjectCard project={next} />
        </section>
      </Container>
      <ContactCta />
    </main>
  );
}
