import { ArrowRight, Monitor, Database, Smartphone } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { services, approach } from "@/content/services";
import { projects } from "@/content/projects";
import { tools } from "@/content/tools";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
const icons = [Monitor, Database, Smartphone];
export function Services() {
  return (
    <section id="services" className="scroll-mt-6">
      <Container className="py-7">
        <SectionHeading
          eyebrow="How I can help"
          title="Services"
          description="Turning ideas into scalable digital products."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <article
                key={service.id}
                className="rounded-xl border border-border bg-background/40 p-5 sm:p-6"
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="mb-5 text-foreground dark:text-primary"
                  aria-hidden
                />
                <h3 className="text-lg">{service.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
                  {service.id === "web"
                    ? "Modern, responsive web apps using React and Next.js."
                    : service.id === "systems"
                      ? "Scalable backend systems with Node.js and NestJS."
                      : "Cross-platform mobile apps with React Native and Expo."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.skills.slice(0, 2).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
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
    <section>
      <Container className="pb-7 pt-2">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          href="/work"
          action="View all projects"
        />
        <div className="grid gap-4 md:grid-cols-2">
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
    <section>
      <Container className="border-b border-border pb-7 pt-2">
        <SectionHeading
          eyebrow="Tools & smaller products"
          title="Tools & smaller products"
          description="Side projects and useful tools I’ve built along the way."
        />
        <div className="grid gap-4 sm:grid-cols-3">
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
    <div className="relative pl-6 before:absolute before:bottom-5 before:left-[5px] before:top-5 before:w-px before:bg-border">
      {(full ? experience : experience.slice(0, 4)).map((item) => (
        <article
          key={item.company}
          className="relative grid gap-2 border-b border-border py-4 last:border-0 sm:grid-cols-[1fr_1fr] before:absolute before:-left-6 before:top-5 before:size-3 before:rounded-full before:bg-primary"
        >
          <div>
            <p className="text-sm font-semibold">{item.company}</p>
            {full && (
              <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{item.role}</p>
            {full && (
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                {item.period}
                {item.datesDemo && <DemoBadge />}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
export function ExperienceSection() {
  return (
    <section>
      <Container className="border-b border-border py-7">
        <SectionHeading eyebrow="Experience" title="Where I’ve worked" />
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
      <SectionHeading eyebrow="My approach" title="From idea to impact" />
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
    <section>
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
