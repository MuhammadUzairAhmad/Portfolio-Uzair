import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { PortfolioProject, Narrative } from "@/types/content";
import { Container, Eyebrow } from "@/components/layout/container";
import { ContactCta } from "@/components/layout/footer";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Table, TableHead, TableCell } from "@/components/ui/table";
import { ToolVisual } from "./tool-visual";
import { demoFields, projectHref } from "@/lib/content";
const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "solution", label: "The solution" },
  { id: "contributions", label: "My contributions" },
  { id: "decisions", label: "Technical decisions" },
  { id: "outcomes", label: "Outcomes & lessons" },
];
function NarrativeBlock({ content }: { content: Narrative }) {
  return (
    <div>
      {content.demo && (
        <div className="mb-3">
          <DemoBadge />
        </div>
      )}
      <p className="leading-relaxed text-muted-foreground">{content.text}</p>
    </div>
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
  const image = project.image;
  return (
    <main id="main-content">
      <section className="border-b border-border py-12 sm:py-16">
        <Container>
          <Link
            href={isTool ? "/tools" : "/work"}
            className="inline-flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} aria-hidden />
            All {isTool ? "tools" : "projects"}
          </Link>
          <div className="mt-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Eyebrow>
                {project.category} / {project.status}
              </Eyebrow>
              <h1 className="mt-4 text-5xl sm:text-7xl">{project.name}</h1>
              <p className="mt-5 text-lg text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                View live project <ArrowUpRight size={15} aria-hidden />
              </ButtonLink>
            )}
          </div>
          {demoFields(project) > 0 && (
            <p className="mt-7 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <DemoBadge />
              Some narrative details are illustrative and await review.
            </p>
          )}
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7 md:grid-cols-4">
            {[
              { label: "My role", value: project.role },
              { label: "Team / context", value: project.team },
              { label: "Platform", value: project.platform },
              { label: "Scope", value: project.scope.join(" · ") },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-surface">
            {project.illustration ? (
              <ToolVisual
                kind={project.illustration}
                className="aspect-[16/8] max-h-[480px] border-0"
              />
            ) : (
              image && (
                <div className="p-5 sm:p-12">
                  <Image
                    src={image.src}
                    alt={`${project.name} product interface`}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width:1280px) 1100px, 90vw"
                    preload
                    className="mx-auto h-auto max-h-[620px] w-full rounded-md object-contain"
                  />
                </div>
              )
            )}
          </div>
        </Container>
      </section>
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[190px_1fr] lg:gap-16">
        <aside>
          <nav
            aria-label="Case study contents"
            className="flex flex-wrap gap-x-6 gap-y-3 lg:sticky lg:top-8 lg:flex-col"
          >
            <Eyebrow className="w-full mb-1">In this story</Eyebrow>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 max-w-3xl space-y-14">
          <section id="overview" className="scroll-mt-8">
            <Eyebrow>01 / Context</Eyebrow>
            <h2 className="mt-3">The overview.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>
          <section
            id="challenge"
            className="scroll-mt-8 border-t border-border pt-8"
          >
            <Eyebrow>02 / The problem</Eyebrow>
            <h2 className="mb-5 mt-3">What needed to work better.</h2>
            <NarrativeBlock content={project.problem} />
          </section>
          <section
            id="solution"
            className="scroll-mt-8 rounded-lg border border-border bg-surface p-6 sm:p-8"
          >
            <Eyebrow>03 / The solution</Eyebrow>
            <h2 className="mb-5 mt-3">A practical way forward.</h2>
            <NarrativeBlock content={project.solution} />
          </section>
          <section id="contributions" className="scroll-mt-8">
            <Eyebrow>04 / My contribution</Eyebrow>
            <h2 className="mt-3">Where I made a difference.</h2>
            <div className="mt-6">
              {project.contributions.map((item, i) => (
                <article
                  key={item.title}
                  className="flex gap-5 border-t border-border py-5"
                >
                  <span className="pt-1 font-mono text-[10px] text-primary">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="decisions" className="scroll-mt-8">
            <Eyebrow>05 / Behind the choices</Eyebrow>
            <h2 className="mt-3">Decisions, with a reason.</h2>
            <div
              role="region"
              aria-label="Scrollable technical decisions"
              tabIndex={0}
              className="mt-6 overflow-x-auto rounded-lg border border-border"
            >
              <Table>
                <caption className="sr-only">
                  Technical decisions for {project.name}
                </caption>
                <thead>
                  <tr>
                    <TableHead scope="col">Area</TableHead>
                    <TableHead scope="col">Choice</TableHead>
                    <TableHead scope="col">Why</TableHead>
                  </tr>
                </thead>
                <tbody>
                  {project.decisions.map((decision) => (
                    <tr key={decision.topic}>
                      <TableCell className="min-w-28 font-medium text-foreground">
                        {decision.topic}
                        {decision.demo && (
                          <div className="mt-2">
                            <DemoBadge />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="min-w-36">
                        {decision.choice}
                      </TableCell>
                      <TableCell className="min-w-44">
                        {decision.reason}
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>
          <section
            id="outcomes"
            className="scroll-mt-8 border-t border-border pt-8"
          >
            <Eyebrow>06 / Outcomes & reflection</Eyebrow>
            <h2 className="mt-3">What came out of it.</h2>
            <ul className="mt-6 space-y-5">
              {project.results.map((result, i) => (
                <li key={i} className="border-l-2 border-primary pl-5">
                  <NarrativeBlock content={result} />
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-9">What I took forward</h3>
            <NarrativeBlock content={project.lessons} />
          </section>
        </div>
      </Container>
      <section className="border-t border-border py-10">
        <Container>
          <Link
            href={projectHref(next)}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <Eyebrow>Next {isTool ? "tool" : "project"}</Eyebrow>
              <p className="mt-3 text-2xl font-medium tracking-tight sm:text-4xl">
                {next.name}
              </p>
            </div>
            <ArrowRight
              size={28}
              strokeWidth={1}
              className="text-primary transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
