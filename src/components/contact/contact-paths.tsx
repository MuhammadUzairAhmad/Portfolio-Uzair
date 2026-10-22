import { BriefcaseBusiness, Lightbulb, FileText } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
export function ContactPaths() {
  return (
    <section
      aria-label="What to share"
      className="mt-6 grid gap-4 md:grid-cols-2"
    >
      <article
        id="roles"
        className="scroll-mt-6 rounded-xl border border-border bg-surface/40 p-5 sm:p-6"
      >
        <BriefcaseBusiness className="text-primary" size={24} aria-hidden />
        <h2 className="mt-3 text-xl">Hiring for your team?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A few details help me understand the opportunity:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
          <li>Company, role and responsibilities</li>
          <li>Remote, hybrid or on-site arrangement</li>
          <li>Location and expected start date</li>
        </ul>
        <ButtonLink
          href={profile.resume.href}
          variant="outline"
          size="sm"
          target="_blank"
          rel="noreferrer"
          className="mt-5"
        >
          <FileText size={14} aria-hidden /> View résumé
        </ButtonLink>
      </article>
      <article
        id="projects"
        className="scroll-mt-6 rounded-xl border border-border bg-surface/40 p-5 sm:p-6"
      >
        <Lightbulb className="text-primary" size={24} aria-hidden />
        <h2 className="mt-3 text-xl">Building or improving a product?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Share what you know so far; a full brief is optional.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
          <li>Your idea, users or the problem to solve</li>
          <li>Key features or improvements you need</li>
          <li>Preferred timeline and budget, if known</li>
        </ul>
      </article>
    </section>
  );
}
