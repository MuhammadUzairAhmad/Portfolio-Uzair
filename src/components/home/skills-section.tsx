import Link from "next/link";
import { Monitor, Database, Layers, Plug, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { toolkitHighlights } from "@/content/toolkit";
import { getProject } from "@/lib/content";
const icons = {
  frontend: Monitor,
  backend: Database,
  data: Layers,
  integrations: Plug,
};
export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-6">
      <Container className="border-b border-border pb-7 pt-2">
        <SectionHeading
          eyebrow="Skills in practice"
          title="What I bring"
          href="/about#toolkit"
          action="Full libraries & tools"
        />
        <p className="-mt-2 mb-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          From the interface to the backend and the services around it. Explore
          related projects for examples of my contributions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toolkitHighlights.map((item) => {
            const Icon = icons[item.id as keyof typeof icons];
            const project = getProject(item.project);
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-xl border border-border bg-surface/35 p-5"
              >
                <Icon
                  size={25}
                  strokeWidth={1.4}
                  className="mb-4 text-primary"
                  aria-hidden
                />
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mb-5 mt-4 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                {project && (
                  <Link
                    href={`/work/${project.slug}`}
                    prefetch
                    className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3 text-xs font-medium text-primary"
                  >
                    <span>Related work: {project.name}</span>
                    <ArrowUpRight size={13} className="shrink-0" aria-hidden />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
