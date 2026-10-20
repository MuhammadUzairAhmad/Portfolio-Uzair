import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/layout/footer";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Selected work",
  "Web platforms, mobile experiences, and the thinking behind the work.",
  "/work",
);
export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The portfolio"
        title="Different problems. Considered solutions."
        description="A selection of products I’ve contributed to, with a closer look at the technology, decisions, and work behind each one."
      />
      <section className="py-12 sm:py-16" aria-label="Project collection">
        <Container>
          <h2 className="sr-only">Project collection</h2>
          <p className="mb-7 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {projects.length.toString().padStart(2, "0")} projects · Web /
            Mobile / Web3
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
