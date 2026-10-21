import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ContactCta } from "@/components/layout/footer";
import { projects } from "@/content/projects";
import { projectHref } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Selected work",
  "The products. The decisions. My contribution.",
  "/work",
);
export default function WorkPage() {
  const tags = (category: string) =>
    category === "Mobile apps"
      ? ["Mobile apps"]
      : category === "Web & mobile"
        ? ["Mobile apps", "Web applications"]
        : category === "Websites"
          ? ["Web applications"]
          : ["Platforms", "Web applications"];
  return (
    <main id="main-content">
      <PageIntro
        grid
        eyebrow="Work"
        title="Selected work."
        subtitle="The products. The decisions. My contribution."
        description="A collection of real projects I’ve built and contributed to. Each one reflects a different problem, context and set of constraints. From internal tools to client products, I enjoy turning ideas into practical, scalable systems."
        note={
          <>
            Real products.
            <br />
            Real impact.
            <br />
            Built with care.
          </>
        }
      />
      <section aria-label="Project collection">
        <Container className="pb-7">
          <h2 className="sr-only">Project collection</h2>
          <ProjectFilters
            featured={projects
              .filter((p) => p.featured)
              .map((p, i) => ({
                slug: p.slug,
                tags: [
                  ...tags(p.category),
                  ...(p.role.toLowerCase().includes("full-stack")
                    ? ["Full-stack"]
                    : []),
                ],
                content: <ProjectCard project={p} archive index={i} />,
              }))}
            other={projects
              .filter((p) => !p.featured)
              .map((p, i) => ({
                slug: p.slug,
                tags: [
                  ...tags(p.category),
                  ...(p.role.toLowerCase().includes("full-stack")
                    ? ["Full-stack"]
                    : []),
                ],
                content: (
                  <Link
                    href={projectHref(p)}
                    prefetch
                    className="flex items-center gap-4 rounded-lg border border-border px-4 py-4 hover:bg-surface"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-primary">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base">{p.name}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {p.cardSubtitle ?? p.subtitle}
                      </p>
                    </div>
                    <span className="hidden text-xs sm:block">
                      Read project
                    </span>
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-primary"
                      aria-hidden
                    />
                  </Link>
                ),
              }))}
          />
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
