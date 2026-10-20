import { ArrowUpRight, Download } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ExperienceList } from "@/components/home/sections";
import { ContactCta } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { Badge, DemoBadge } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { capabilities } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About",
  "Meet Muhammad Uzair Ahmad, a full-stack developer based in Pakistan.",
  "/about",
);
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="border-b border-border py-14 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <Eyebrow>A little about me</Eyebrow>
            <h1 className="mt-5 text-5xl sm:text-6xl">
              A builder.
              <br />
              <span className="font-serif text-[.85em] font-normal italic text-primary">
                Always curious.
              </span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {profile.about}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              My work spans web platforms, mobile interfaces, integrations, and
              focused client tools. I enjoy connecting the visible experience
              with the systems that make it useful.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={profile.resume.href}
                target="_blank"
                rel="noreferrer"
              >
                {profile.resume.label}
                <Download size={15} aria-hidden />
              </ButtonLink>
              {profile.resume.demo && <DemoBadge />}
            </div>
          </div>
          <div
            aria-label="Uzair’s initials"
            className="flex aspect-square max-h-96 items-center justify-center rounded-lg border border-border bg-accent"
          >
            <span className="font-serif text-9xl italic tracking-tighter text-primary">
              ua.
            </span>
          </div>
        </Container>
      </section>
      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The craft"
            title="A connected set of skills."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border p-7"
              >
                <h3>{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section
        id="experience"
        className="scroll-mt-8 border-b border-border py-16 sm:py-24"
      >
        <Container>
          <SectionHeading
            eyebrow="The journey"
            title="People, products, and places I’ve learned."
          />
          <ExperienceList full />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>Education</Eyebrow>
            <h2 className="mt-4 text-xl">{profile.education.qualification}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {profile.education.institution} · {profile.education.period}
            </p>
          </div>
          <div>
            <Eyebrow>Elsewhere</Eyebrow>
            <p className="mt-4 text-sm text-muted-foreground">
              Code, professional background, and a place to say hello.
            </p>
            <div className="mt-5 flex flex-wrap gap-6">
              {[
                { label: "GitHub", href: profile.github },
                { label: "LinkedIn", href: profile.linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-xs text-primary"
                >
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
