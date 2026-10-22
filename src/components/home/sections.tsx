import Link from "next/link";
import { ArrowRight, Monitor, Database, Smartphone } from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";
import { Container, Eyebrow } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { services, approach } from "@/content/services";
import { getProject } from "@/lib/content";
import { tools } from "@/content/tools";
import { ExperienceList } from "@/components/experience/experience-list";
import { profile } from "@/content/profile";
const icons = [Monitor, Database, Smartphone];
export function Services() {
  return (
    <section id="services" className="scroll-mt-6">
      <Container className="py-7">
        <SectionHeading
          eyebrow="How I can help"
          title="Services"
          description="New builds, focused MVPs and improvements to existing products."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-xl border border-border bg-background/40 p-5 sm:p-6"
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="mb-5 text-foreground dark:text-primary"
                  aria-hidden
                />
                <h3 className="text-lg">{service.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {service.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-primary"
                >
                  View all work <ArrowRight size={13} aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href="/about#toolkit"
            className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-primary"
          >
            Explore my skills & tools <ArrowRight size={13} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
export function SelectedWork() {
  return (
    <section>
      <Container className="pb-7 pt-2">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          href="/work"
          action="View all projects"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {profile.homeFeaturedProjectSlugs.map((slug, i) => {
            const project = getProject(slug);
            return project ? (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={i === 0}
              />
            ) : null;
          })}
        </div>
      </Container>
    </section>
  );
}
export function ToolsSection() {
  return (
    <section>
      <Container className="border-b border-border pb-7 pt-2">
        <SectionHeading
          eyebrow="Tools & smaller products"
          title="Tools & smaller products"
          description="Client projects and useful tools I’ve built along the way."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <ProjectCard key={tool.slug} project={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
export function ExperienceSection() {
  return (
    <section>
      <Container className="border-b border-border py-7">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve worked"
          href="/about#experience"
          action="Role details"
        />
        <ExperienceList />
      </Container>
    </section>
  );
}
export function ApproachSection({
  standalone = true,
}: {
  standalone?: boolean;
}) {
  const content = (
    <>
      <SectionHeading
        eyebrow="My approach"
        title="From idea to impact"
        description="Start with a useful first version. Improve it as the product grows."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {approach.map((step, i) => (
          <article key={step.title} className="flex gap-3">
            <span className="font-serif text-4xl leading-none text-primary">
              0{i + 1}
            </span>
            <div className="pt-1">
              <h3 className="text-sm">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
  return standalone ? (
    <section className="relative isolate">
      <GridBackground size="medium" />
      <Container className="border-b border-border py-7">{content}</Container>
    </section>
  ) : (
    <div>{content}</div>
  );
}
export function AboutTeaser() {
  return (
    <section>
      <Container className="border-b border-border py-7">
        <Eyebrow>About me</Eyebrow>
        <div className="mt-3 flex flex-col items-start gap-5 sm:flex-row">
          <div
            aria-hidden="true"
            className="flex h-28 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-accent"
          >
            <span className="font-serif text-5xl tracking-[-.2em] text-primary">
              UA
            </span>
          </div>
          <div className="max-w-xl flex-1">
            <h2 className="text-xl sm:text-2xl">
              I care about how it looks.
              <br />
              And how it works.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {profile.about}
            </p>
          </div>
          <ButtonLink
            href="/about"
            variant="outline"
            size="sm"
            className="sm:ml-auto"
          >
            More about me
            <ArrowRight size={13} aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
