import {
  ArrowRight,
  Mail,
  FileText,
  List,
  CalendarDays,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { ContactPaths } from "@/components/contact/contact-paths";
import { CopyEmail } from "@/components/contact/copy-email";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Get in touch",
  "What are you working on? Let’s talk about projects, roles, and ideas.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content">
      <div className="relative isolate">
        <GridBackground size="large" glow />
        <PageIntro
          eyebrow="Contact"
          title="Let’s talk."
          subtitle="Your next project. Or your next teammate."
          description="I work with product teams and direct clients on web and mobile applications. Share a role, a new build, or an existing product that needs improvement."
          note={
            <>
              Ideas,
              <br />
              projects,
              <br />
              collaborations.
            </>
          }
        />
      </div>
      <Container className="pb-8">
        <ContactPaths />
        <section
          className="rounded-xl border border-border bg-surface/70 p-5 sm:p-7"
          aria-label="Contact details"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <Mail size={36} strokeWidth={1.5} aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-primary">Let’s talk</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block break-all text-xl font-semibold tracking-tight sm:text-4xl"
              >
                {profile.email}
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={`mailto:${profile.email}`}>
              Write an email
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={profile.whatsapp}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>
          <div className="mt-3">
            <CopyEmail email={profile.email} fullWidth />
            <p className="mt-4 text-xs text-muted-foreground">
              Prefer a phone call?{" "}
              <a
                href={profile.phoneHref}
                className="ml-1 inline-block text-primary underline underline-offset-4"
              >
                {profile.phone}
              </a>
            </p>
          </div>
        </section>
        <section className="mt-5 rounded-xl border border-border p-5 sm:p-7">
          <h2 className="mb-4 flex items-center gap-3 text-sm">
            <span className="font-serif text-xl text-primary">01</span>What to
            share (optional)
          </h2>
          {[
            {
              title: "Project idea",
              text: "A brief overview of what you’re trying to build.",
              Icon: FileText,
            },
            {
              title: "Scope",
              text: "Key features, goals or current challenges.",
              Icon: List,
            },
            {
              title: "Timing",
              text: "Your preferred timeline or any constraints.",
              Icon: CalendarDays,
            },
          ].map(({ title, text, Icon }) => (
            <div key={title} className="flex gap-4 border-t border-border py-5">
              <Icon
                size={23}
                className="mt-1 shrink-0 text-muted-foreground"
                strokeWidth={1.4}
                aria-hidden
              />
              <div>
                <h3 className="text-sm">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-3 text-sm">
            <span className="font-serif text-xl text-primary">02</span>Other
            ways to connect
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "GitHub",
                description: "See my code and projects.",
                href: profile.github,
                Icon: GithubIcon,
              },
              {
                label: "LinkedIn",
                description: "Let’s connect professionally.",
                href: profile.linkedin,
                Icon: LinkedinIcon,
              },
            ].map(({ label, description, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-5 hover:border-primary"
              >
                <Icon size={36} />
                <div className="flex-1">
                  <h3 className="text-base">{label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {description}
                  </p>
                </div>
                <ArrowRight size={15} aria-hidden />
              </a>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-3 text-sm">
            <span className="font-serif text-xl text-primary">03</span>Location
          </h2>
          <div className="flex gap-4 rounded-xl border border-border bg-surface/60 p-5">
            <MapPin
              size={30}
              strokeWidth={1.3}
              className="text-primary"
              aria-hidden
            />
            <div>
              <p className="text-sm font-medium">{profile.location}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {profile.timeZone}
              </p>
            </div>
          </div>
        </section>
        <div className="mt-5 flex items-start gap-4 rounded-xl border border-primary/20 bg-accent/50 p-5">
          <MessageSquare
            size={27}
            className="shrink-0 text-primary"
            aria-hidden
          />
          <div>
            <h2 className="text-base">Have something else in mind?</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Share a role on your team, a product idea, or an interesting
              collaboration. I’d love to hear about it.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
