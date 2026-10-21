import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { profile } from "@/content/profile";
export function BackgroundSection() {
  return (
    <section aria-label="Background and recent work">
      <Container className="grid gap-4 border-t border-border py-7 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-surface/40 p-5 sm:p-6">
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="mt-3 text-xl">Shopify workflows, connected.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {profile.recentWork}
          </p>
          <Link
            href="/work/shopify-app"
            prefetch
            className="mt-5 inline-flex items-center gap-3 text-xs font-medium text-primary"
          >
            About the project <ArrowUpRight size={14} aria-hidden />
          </Link>
        </article>
        <article className="rounded-xl border border-border p-5 sm:p-6">
          <Eyebrow>Learning & communication</Eyebrow>
          <h2 className="mt-3 text-xl">Certifications & languages</h2>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
            {profile.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-3 text-xs">
            <span className="text-muted-foreground">Languages </span>
            {profile.languages.join(" · ")}
          </p>
        </article>
      </Container>
    </section>
  );
}
