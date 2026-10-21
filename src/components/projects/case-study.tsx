import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Users,
  ShieldCheck,
  Lightbulb,
  PlayCircle,
} from "lucide-react";
import type { PortfolioProject, Narrative } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Table, TableHead, TableCell } from "@/components/ui/table";
import { DevicePreview } from "./device-preview";
import { ToolVisual } from "./tool-visual";
import { ProjectWalkthroughs } from "./project-walkthroughs";
import { ProjectGallery } from "./project-gallery";
import { NextProjectCard } from "./project-card";
import { demoFields } from "@/lib/content";
const technologyRoles: Record<string, string> = {
  "Next.js": "Web interface",
  React: "Interface",
  TypeScript: "Application language",
  NestJS: "API / business logic",
  MongoDB: "Database",
  Salesforce: "CRM integration",
  Capacitor: "Mobile wrapper",
  Plaid: "Financial integration",
  Wagmi: "Wallet connections",
  "Tailwind CSS": "Styling",
};
const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The problem" },
  { id: "contributions", label: "My role & contributions" },
  { id: "decisions", label: "Solution & decisions" },
  { id: "implementation", label: "Implementation" },
  { id: "outcomes", label: "Results & lessons" },
];
function NarrativeCopy({ content }: { content: Narrative }) {
  return (
    <div>
      {content.demo && (
        <div className="mb-2">
          <DemoBadge />
        </div>
      )}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {content.text}
      </p>
    </div>
  );
}
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
  const isTool = project.category === "Tools";
  const icons = [Code2, ShieldCheck, Lightbulb];
  return (
    <main id="main-content">
      <Container className="pt-7">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-xs text-muted-foreground"
        >
          <Link
            href={isTool ? "/tools" : "/work"}
            className="hover:text-primary"
          >
            {isTool ? "Tools" : "Work"}
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
            {project.summary}
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
          {project.projectStatus && (
            <div className="mt-4">
              <Badge>{project.projectStatus}</Badge>
            </div>
          )}
          {demoFields(project) > 0 && (
            <p className="mt-4 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
              <DemoBadge />
              Illustrative details are marked below.
            </p>
          )}
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-5 rounded-xl bg-surface px-5 py-5 sm:grid-cols-4 sm:gap-0">
          {[
            { label: "Role", value: project.role },
            { label: "Team", value: project.team },
            { label: "Platform", value: project.platform },
            { label: "Stack", value: project.stack.slice(0, 3).join(" · ") },
          ].map((item) => (
            <div
              key={item.label}
              className="sm:border-r sm:border-border sm:px-5 sm:first:pl-0 sm:last:border-0"
            >
              <dt className="text-xs font-semibold">{item.label}</dt>
              <dd className="mt-1.5 text-[11px] text-muted-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="relative mt-5 flex aspect-[1.8] items-center justify-center overflow-hidden rounded-xl bg-[#faf5e9] sm:aspect-[2.15] dark:bg-[#121d17]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#d5c59935,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,#a7d54040,transparent_68%)]" />
          {project.illustration ? (
            <ToolVisual
              kind={project.illustration}
              detailed
              className="h-full w-full px-5 py-6"
              eager
            />
          ) : (
            <DevicePreview
              project={project}
              className="relative h-[94%] w-[94%]"
            />
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
        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="border-border lg:border-r lg:pr-6">
            <nav
              aria-label="Case study contents"
              className="flex flex-wrap gap-3 lg:sticky lg:top-5 lg:flex-col"
            >
              <Eyebrow className="w-full mb-1">On this page</Eyebrow>
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 rounded py-2 text-[11px] text-muted-foreground hover:bg-surface hover:text-primary"
                >
                  <span className="font-mono text-[10px]">0{i + 1}</span>
                  {section.id === "outcomes" && !project.lessons
                    ? "Results"
                    : section.label}
                </a>
              ))}
            </nav>
          </aside>
          <div className="min-w-0">
            <StorySection id="overview" number="01" title="Overview">
              <div className="space-y-4">
                {project.overview.split("\n\n").map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </StorySection>
            <StorySection id="challenge" number="02" title="The problem">
              <NarrativeCopy content={project.problem} />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "The experience",
                    text: project.scope[0],
                    Icon: Users,
                  },
                  {
                    title: "The workflow",
                    text: project.scope[1] ?? project.platform,
                    Icon: Code2,
                  },
                ].map(({ title, text, Icon }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-border bg-surface/60 p-4"
                  >
                    <Icon
                      size={20}
                      className="mb-3 text-primary"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="text-sm">{title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </StorySection>
          </div>
        </div>
        <StorySection
          id="contributions"
          number="03"
          title="My role & contributions"
        >
          <div className="space-y-3">
            {project.contributions.map((item, i) => (
              <article
                key={item.title}
                className="grid items-start gap-3 sm:grid-cols-[35px_190px_1fr]"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm text-primary">
                  0{i + 1}
                </span>
                <h3 className="pt-1 text-sm">{item.title}</h3>
                <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </StorySection>
        <StorySection
          id="decisions"
          number="04"
          title="Solution & technical decisions"
        >
          <div className="mb-5">
            <NarrativeCopy content={project.solution} />
          </div>
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {project.stack.slice(0, 3).map((tech) => (
              <div
                key={tech}
                className="relative flex items-center gap-3 rounded-lg border border-border p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
                  {tech[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold">{tech}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {technologyRoles[tech] ?? "Project technology"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {project.decisions.length > 0 && (
            <div
              role="region"
              aria-label="Scrollable technical decisions"
              tabIndex={0}
              className="overflow-x-auto rounded-lg border border-border"
            >
              <Table>
                <caption className="sr-only">
                  Technical decisions for {project.name}
                </caption>
                <thead>
                  <tr>
                    <TableHead scope="col">Topic</TableHead>
                    <TableHead scope="col">Decision</TableHead>
                    <TableHead scope="col">Reasoning</TableHead>
                  </tr>
                </thead>
                <tbody>
                  {project.decisions.map((item) => (
                    <tr key={item.topic}>
                      <TableCell className="min-w-32 font-medium text-foreground">
                        {item.topic}
                        {item.demo && (
                          <div className="mt-2">
                            <DemoBadge />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="min-w-40">{item.choice}</TableCell>
                      <TableCell className="min-w-48">{item.reason}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </StorySection>
        <StorySection id="implementation" number="05" title="Implementation">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="flex aspect-[1.7] items-center justify-center overflow-hidden rounded-lg border border-border bg-surface">
              {project.illustration ? (
                <ToolVisual
                  kind={project.illustration}
                  detailed
                  className="w-full"
                />
              ) : (
                <DevicePreview project={project} />
              )}
            </div>
            <div>
              <h3 className="mb-4 text-sm">Key features</h3>
              <ul className="space-y-3">
                {project.scope.map((scope) => (
                  <li
                    key={scope}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-primary"
                      aria-hidden
                    />
                    {scope}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(3).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
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
        </StorySection>
        <StorySection
          id="outcomes"
          number="06"
          title={project.lessons ? "Results & lessons" : "Results"}
        >
          <div
            className={`grid gap-4 rounded-xl bg-surface p-5 ${project.results.length + (project.lessons ? 1 : 0) > 1 ? "sm:grid-cols-2" : ""}`}
          >
            {[
              ...project.results.map((content, i) => ({
                title: i === 0 ? "Outcome" : "Additional outcome",
                content,
              })),
              ...(project.lessons
                ? [{ title: "Lessons learned", content: project.lessons }]
                : []),
            ].map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <article
                  key={item.title}
                  className="sm:border-r sm:border-border sm:pr-4 sm:last:border-0"
                >
                  <Icon size={20} className="mb-3 text-primary" aria-hidden />
                  <h3 className="mb-3 text-sm">{item.title}</h3>
                  <NarrativeCopy content={item.content} />
                </article>
              );
            })}
          </div>
        </StorySection>
        <section className="border-t border-border py-6">
          <h2 className="mb-4 text-xl">Next {isTool ? "tool" : "project"}</h2>
          <NextProjectCard project={next} />
        </section>
      </Container>
      <ContactCta />
    </main>
  );
}
