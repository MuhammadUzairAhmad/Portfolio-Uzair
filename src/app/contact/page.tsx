import {
  ArrowUpRight,
  Mail,
  CalendarDays,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { CopyEmail } from "@/components/contact/copy-email";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Get in touch",
  "Talk about a product, a project, or a role for your team.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Let’s make something useful"
        title="Good work starts with a conversation."
        description="Have a project in mind or a role on your team? Share a little about it, and we can take it from there."
      />
      <section className="py-12 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-lg border border-border p-6 sm:p-9">
            <Mail
              size={25}
              strokeWidth={1.3}
              className="text-primary"
              aria-hidden
            />
            <Eyebrow className="mt-7">The easiest way to reach me</Eyebrow>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block break-all text-2xl font-medium tracking-tight text-primary sm:text-3xl"
            >
              {profile.email}
            </a>
            <p className="mb-7 mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell me what you’re building, where things stand, and what kind of
              help you’re looking for.
            </p>
            <CopyEmail email={profile.email} />
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                Write an email
                <ArrowUpRight size={15} aria-hidden />
              </ButtonLink>
              <ButtonLink
                href={profile.calendar}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                <CalendarDays size={15} aria-hidden />
                Schedule a call
              </ButtonLink>
            </div>
            <p className="mt-7 text-xs text-muted-foreground">
              {profile.location} · {profile.timeZone}
            </p>
          </div>
          <div className="space-y-7">
            <article className="border-b border-border pb-7">
              <BriefcaseBusiness
                size={21}
                className="mb-4 text-primary"
                strokeWidth={1.3}
                aria-hidden
              />
              <h3>For your team</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share the role, product, and how the team works. My case studies
                offer a closer look at my contribution and technical approach.
              </p>
              <ButtonLink
                href="/work"
                variant="ghost"
                size="sm"
                className="mt-4 px-0"
              >
                Explore my work
                <ArrowUpRight size={13} aria-hidden />
              </ButtonLink>
            </article>
            <article>
              <Layers3
                size={21}
                className="mb-4 text-primary"
                strokeWidth={1.3}
                aria-hidden
              />
              <h3>For your project</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A short brief, target timeline, and budget range help make the
                first conversation useful. Early ideas are welcome too.
              </p>
              <ButtonLink
                href="/#services"
                variant="ghost"
                size="sm"
                className="mt-4 px-0"
              >
                See how I can help
                <ArrowUpRight size={13} aria-hidden />
              </ButtonLink>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
