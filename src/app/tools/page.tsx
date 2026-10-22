import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { ToolCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/layout/footer";
import { tools } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Personal projects & tools",
  "Personal projects. Useful tools.",
  "/tools",
);
export default function ToolsPage() {
  return (
    <main id="main-content">
      <PageIntro
        grid
        eyebrow="Tools"
        title={
          <>
            Personal projects.
            <br />
            <span className="text-primary">Useful tools.</span>
          </>
        }
        description="Personal applications and client tools I’ve built to solve useful problems—from full-stack publishing to creative and geography tools."
        note={
          <>
            Ideas
            <br />
            into useful
            <br />
            things.
          </>
        }
      />
      <section aria-label="Tool collection">
        <Container className="space-y-5 pb-7">
          <h2 className="sr-only">Tool collection</h2>
          {tools.map((tool, i) => (
            <ToolCard key={tool.slug} project={tool} archive index={i} />
          ))}
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
