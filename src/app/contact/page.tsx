import { ArrowRight, Mail, MapPin } from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/brand-icons";
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
          description="Reach me by email or WhatsApp. A brief introduction is enough to start."
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
        <section
          className="rounded-xl border border-border bg-surface/70 p-5 sm:p-7"
          aria-label="Contact details"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <Mail size={36} strokeWidth={1.5} aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-medium text-primary">
                Start a conversation
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block break-all text-xl font-semibold tracking-tight sm:text-4xl"
              >
                {profile.email}
              </a>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs leading-relaxed">
            <p className="inline-flex items-center gap-2 text-foreground">
              <span
                className="size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
              {profile.availability}
            </p>
            <p className="text-muted-foreground">
              Replies: {profile.responseTime}
            </p>
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
              <WhatsappIcon size={18} />
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
        <ContactPaths />
        <section
          aria-label="Social links and location"
          className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6"
        >
          <nav
            aria-label="Professional profiles"
            className="flex flex-wrap gap-5"
          >
            {[
              { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
              { label: "GitHub", href: profile.github, Icon: GithubIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-primary"
              >
                <Icon size={18} />
                {label}
                <ArrowRight size={13} aria-hidden />
              </a>
            ))}
          </nav>
          <p className="flex items-center gap-2 text-xs leading-relaxed text-muted-foreground">
            <MapPin size={16} className="shrink-0 text-primary" aria-hidden />
            <span>
              {profile.location} · {profile.timeZone}
            </span>
          </p>
        </section>
      </Container>
    </main>
  );
}
