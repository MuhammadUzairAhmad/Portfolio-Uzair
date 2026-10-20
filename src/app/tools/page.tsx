import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { ToolCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/layout/footer";
import { tools } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tools & experiments",
  "Small tools. Useful possibilities.",
  "/tools",
);
export default function ToolsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Tools"
        title={
          <>
            Small tools.
            <br />
            <span className="text-primary">Useful possibilities.</span>
          </>
        }
        description="A collection of small products and experiments built to explore ideas, solve specific problems and learn new things."
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
