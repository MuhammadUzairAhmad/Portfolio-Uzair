import { Container, Eyebrow } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main-content">
      <Container className="py-24 sm:py-32">
        <Eyebrow>404 / A little off track</Eyebrow>
        <h1 className="mt-5 text-5xl sm:text-6xl">
          Nothing here. Plenty to explore.
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          This page may have moved, or the link may be incomplete.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            Explore the work
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
