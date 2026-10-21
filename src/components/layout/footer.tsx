import Link from "next/link";
import { GridBackground } from "@/components/ui/grid-background";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { profile, contentSettings } from "@/content/profile";
import { Container, Eyebrow } from "./container";
import { ButtonLink } from "@/components/ui/button";
export function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="flex flex-wrap items-center gap-5 text-xs"
    >
      {[
        { label: "GitHub", href: profile.github, Icon: GithubIcon },
        { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
        { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
      ].map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noreferrer"}
          className="inline-flex items-center gap-2 hover:text-primary"
        >
          <Icon size={16} aria-hidden />
          {label}
        </a>
      ))}
    </nav>
  );
}
export function ContactCta() {
  return (
    <section className="relative isolate">
      <GridBackground size="large" glow markers />
      <Container className="flex flex-col justify-between gap-5 py-12 sm:flex-row sm:items-center">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-1.5">A project in mind? A role on your team?</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Explore my experience for your team, or tell me about a product you
            want to build or improve.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 sm:items-end">
          <ButtonLink href="/contact">
            Get in touch
            <ArrowRight size={15} aria-hidden />
          </ButtonLink>
          <SocialLinks />
        </div>
      </Container>
    </section>
  );
}
export async function Footer() {
  "use cache";
  return (
    <footer>
      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-5">
        <Link href="/" className="text-xl font-extrabold tracking-tighter">
          UZAIR<span className="text-primary">.</span>
        </Link>
        <p className="text-[10px] text-muted-foreground">
          {contentSettings.demoMode && <span className="mr-3">Preview</span>}©{" "}
          {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
