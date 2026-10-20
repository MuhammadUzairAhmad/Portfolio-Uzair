import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/layout/footer";
import { tools } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tools & experiments",
  "Focused client tools for text, geography, and publishing.",
  "/tools",
);
export default function ToolsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Useful, by design"
        title="Small tools. Everyday possibilities."
        description="Focused client tools for creating, exploring, and publishing. Each starts with a specific task and a simpler way to get it done."
      />
      <section className="py-12 sm:py-16" aria-label="Tool collection">
        <Container>
          <h2 className="sr-only">Tool collection</h2>
          <p className="mb-7 text-xs text-muted-foreground">
            Illustrated covers introduce each tool. Open a story to see its
            scope and contributions.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {tools.map((tool) => (
              <ProjectCard key={tool.slug} project={tool} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
