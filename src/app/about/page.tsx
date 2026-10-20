import { ToolkitSection } from "@/components/about/toolkit-section";
import {
  Monitor,
  Database,
  Link2,
  Smartphone,
  ChevronRight,
  Download,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactCta } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { DemoBadge } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { capabilities, approach } from "@/content/services";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About",
  "Curious by nature. Practical by approach.",
  "/about",
);
const icons = [Monitor, Database, Link2, Smartphone];
export default function AboutPage() {
  return (
    <main id="main-content">
      <div className="relative">
        <PageIntro
          eyebrow="About"
          title={
            <>
              Curious by nature.
              <br />
              <span className="text-primary">Practical by approach.</span>
            </>
          }
          description={profile.about}
          note={
            <>
              Build
              <br />
              useful things
              <br />
              for people.
            </>
          }
        />
        <Container className="pointer-events-none relative hidden h-0 lg:block">
          <div
            aria-hidden="true"
            className="absolute bottom-3 right-5 flex size-32 rotate-6 items-center justify-center rounded-sm bg-[#f3eedf] dark:bg-[#17251a]"
          >
            <span className="-rotate-6 font-serif text-7xl tracking-[-.2em] text-primary">
              UA
            </span>
          </div>
        </Container>
      </div>
      <section>
        <Container className="border-y border-border py-7">
          <Eyebrow>What I bring</Eyebrow>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, i) => {
              const Icon = icons[i];
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border p-5"
                >
                  <Icon
                    size={29}
                    strokeWidth={1.4}
                    className="mb-4 text-primary"
                    aria-hidden
                  />
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <ToolkitSection />
      <section id="experience" className="scroll-mt-5">
        <Container className="border-b border-border py-7">
          <div className="mb-4 flex flex-wrap justify-between gap-2">
            <Eyebrow>Work experience</Eyebrow>
            <p className="text-xs text-muted-foreground">
              Different problems. A richer perspective.
            </p>
          </div>
          {experience.map((item) => (
            <details
              key={item.company}
              className="group border-t border-border"
            >
              <summary className="flex min-h-16 list-none items-center gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent text-sm font-bold text-primary"
                >
                  {item.company[0]}
                </span>
                <span className="flex-1 text-sm font-semibold">
                  {item.company}
                </span>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {item.role}
                </span>
                <ChevronRight
                  size={15}
                  className="shrink-0 transition-transform group-open:rotate-90"
                  aria-hidden
                />
              </summary>
              <div className="pb-5 pl-12">
                <p className="mb-2 text-sm sm:hidden">{item.role}</p>
                <p className="max-w-xl text-sm text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  {item.period}
                  {item.datesDemo && <DemoBadge />}
                </p>
              </div>
            </details>
          ))}
        </Container>
      </section>
      <section>
        <Container className="py-7">
          <div className="mb-5 flex justify-between">
            <Eyebrow>How I work</Eyebrow>
            <p className="text-xs text-muted-foreground">
              From idea to impact.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => (
              <article key={item.title} className="rounded-lg bg-surface p-5">
                <span className="font-serif text-4xl text-[#a65f29] dark:text-primary">
                  0{i + 1}
                </span>
                <h2 className="mt-4 text-base">{item.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6">
            <div>
              <Eyebrow>Education</Eyebrow>
              <p className="mt-2 text-sm">{profile.education.qualification}</p>
              <p className="text-xs text-muted-foreground">
                {profile.education.institution} · {profile.education.period}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ButtonLink
                href={profile.resume.href}
                size="sm"
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                {profile.resume.label}
                <Download size={13} aria-hidden />
              </ButtonLink>
              {profile.resume.demo && <DemoBadge />}
            </div>
          </div>
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
