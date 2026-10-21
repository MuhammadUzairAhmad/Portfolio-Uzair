import {
  ArrowRight,
  Layers,
  Database,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Eyebrow } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getProject } from "@/lib/content";
export function FullStackSpotlight() {
  const project = getProject("gaming-platform");
  if (!project) return null;
  return (
    <article
      aria-labelledby="full-stack-spotlight"
      className="mt-5 grid gap-6 overflow-hidden rounded-xl border border-primary/20 bg-surface p-5 sm:p-7 lg:grid-cols-[1.2fr_1fr]"
    >
      <div>
        <Eyebrow className="text-primary">Full-stack spotlight</Eyebrow>
        <h3 id="full-stack-spotlight" className="mt-3 text-2xl sm:text-3xl">
          From a frontend demo to a working product.
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Gaming Platform · Frontend &amp; backend development
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          I turned the client’s v0 demo into a Next.js application, building
          authentication, MongoDB-backed features, wallet integration, gameplay,
          referrals, credits, and user/admin workflows.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js", "MongoDB", "NextAuth", "Web3"].map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <ButtonLink
          href="/work/gaming-platform"
          variant="outline"
          className="mt-5"
        >
          Explore the full-stack project <ArrowRight size={15} aria-hidden />
        </ButtonLink>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            title: "Application",
            text: "Next.js frontend and backend",
            Icon: Layers,
          },
          {
            title: "Accounts & data",
            text: "NextAuth and MongoDB",
            Icon: Database,
          },
          {
            title: "Connected wallets",
            text: "Client-provided contract integration",
            Icon: Wallet,
          },
          {
            title: "Admin workflows",
            text: "Users, referrals and credit approvals",
            Icon: ShieldCheck,
          },
        ].map(({ title, text, Icon }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-background/60 p-4"
          >
            <Icon className="text-primary" size={21} aria-hidden />
            <h4 className="mt-3 text-sm">{title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
