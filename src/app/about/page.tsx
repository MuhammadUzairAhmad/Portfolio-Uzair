import { BackgroundSection } from "@/components/about/background-section";
import { ToolkitSection } from "@/components/about/toolkit-section";
import { Monitor, Database, Link2, Smartphone, Download } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactCta } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { DemoBadge } from "@/components/ui/badge";
import { ExperienceList } from "@/components/experience/experience-list";
import { profile } from "@/content/profile";
import { capabilities, approach } from "@/content/services";
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
          grid
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
      <section id="experience" className="scroll-mt-5">
        <Container className="border-b border-border py-7">
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve worked"
            description="Different problems. A richer perspective."
          />
          <ExperienceList detailed />
        </Container>
      </section>
      <ToolkitSection />
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
              <p className="mt-1 text-xs text-muted-foreground">
                GPA {profile.education.gpa}
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
      <BackgroundSection />
      <ContactCta />
    </main>
  );
}
