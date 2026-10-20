import { Container } from "@/components/layout/container";
export function CaseStudyLoading() {
  return (
    <main id="main-content" aria-busy="true">
      <Container className="py-10" role="status">
        <p className="sr-only">Loading project details…</p>
        <div aria-hidden="true" className="space-y-6">
          <div className="h-3 w-32 rounded bg-surface" />
          <div className="h-14 w-2/3 max-w-lg rounded-lg bg-surface" />
          <div className="h-4 w-4/5 max-w-xl rounded bg-surface" />
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-border p-6 sm:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 rounded bg-surface" />
            ))}
          </div>
          <div className="aspect-[1.8] rounded-xl border border-border bg-surface sm:aspect-[2.15]" />
        </div>
      </Container>
    </main>
  );
}
