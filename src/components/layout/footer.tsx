import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { Container, Eyebrow } from "./container";
import { ButtonLink } from "@/components/ui/button";
export function ContactCta() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-24">
      <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Eyebrow>A good place to start</Eyebrow>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl">
            Have something{" "}
            <span className="font-serif font-normal italic text-primary">
              in mind?
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            A product to build, a team to join, or an idea worth exploring.
            Let’s talk.
          </p>
        </div>
        <ButtonLink href="/contact" size="lg">
          Start a conversation <ArrowUpRight size={17} aria-hidden />
        </ButtonLink>
      </Container>
    </section>
  );
}
export async function Footer() {
  "use cache";
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col justify-between gap-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.shortName}. Thoughtfully built.
        </p>
        <nav
          aria-label="Social links"
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn ↗
          </a>
          <Link href="/contact" className="hover:text-foreground">
            Say hello ↗
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
