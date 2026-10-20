import Link from "next/link";
import { ArrowUpRight, Layers3, Code2, Smartphone } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { services, approach } from "@/content/services";
import { projects } from "@/content/projects";
import { tools } from "@/content/tools";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
const icons = [Code2, Layers3, Smartphone];
export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-8 border-b border-border py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="01 / What I do"
          title="From first idea to working product."
          description="Thoughtful interfaces. Reliable systems. The connections in between."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <article
                key={service.id}
                className="rounded-lg border border-border p-6 sm:p-7"
              >
                <Icon
                  size={24}
                  strokeWidth={1.3}
                  className="mb-8 text-primary"
                  aria-hidden
                />
                <h3>{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <Link
                  href={`/work/${service.project}`}
                  className="mt-7 inline-flex items-center gap-4 text-xs text-primary"
                >
                  See it in practice <ArrowUpRight size={14} aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export function SelectedWork() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="02 / Selected work"
          title="A few things I’ve helped bring to life."
          description="Real products. Different challenges. A closer look at the work behind them."
          href="/work"
          action="All projects"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={i === 0}
              />
            ))}
        </div>
      </Container>
    </section>
  );
}
export function ToolsSection() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="03 / Small tools, useful ideas"
          title="Built to do one thing well."
          description="Client tools and focused experiences for everyday tasks."
          href="/tools"
          action="Explore the tools"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <ProjectCard key={tool.slug} project={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
export function ExperienceList({ full = false }: { full?: boolean }) {
  return (
    <div>
      {(full ? experience : experience.slice(0, 4)).map((item, i) => (
        <article
          key={item.company}
          className="grid gap-3 border-t border-border py-6 sm:grid-cols-[2fr_2fr_1.3fr] sm:gap-6"
        >
          <div>
            <span className="mr-4 font-mono text-[10px] text-muted-foreground">
              0{i + 1}
            </span>
            <span className="font-medium">{item.company}</span>
          </div>
          <div>
            <p className="text-sm">{item.role}</p>
            {full && (
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-start gap-2 sm:justify-end">
            <span className="text-xs text-muted-foreground">{item.period}</span>
            {item.datesDemo && <DemoBadge />}
          </div>
        </article>
      ))}
    </div>
  );
}
export function ExperienceSection() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="04 / Along the way"
          title="Experience that shapes the work."
          href="/about#experience"
          action="More about my background"
        />
        <ExperienceList />
      </Container>
    </section>
  );
}
export function ApproachSection() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="05 / My approach"
          title="A clear process. Room for good ideas."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => (
            <article key={step.title} className="border-t border-border pt-6">
              <span className="font-serif text-4xl italic text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-base">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div
          aria-hidden="true"
          className="flex aspect-[4/3] max-h-80 items-center justify-center rounded-lg border border-border bg-accent"
        >
          <span className="font-serif text-8xl italic tracking-tighter text-primary">
            ua<span className="font-sans">.</span>
          </span>
        </div>
        <div>
          <Eyebrow>06 / The person behind the pixels</Eyebrow>
          <h2 className="mt-4">{profile.philosophy}</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {profile.about}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-6 text-xs font-medium text-primary"
          >
            A bit more about me <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
