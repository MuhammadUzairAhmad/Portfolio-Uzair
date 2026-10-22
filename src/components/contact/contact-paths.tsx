import {
  BriefcaseBusiness,
  Lightbulb,
  ArrowRight,
  FileText,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
export function ContactPaths() {
  return (
    <section
      aria-label="Ways to work together"
      className="mb-6 grid gap-4 md:grid-cols-2"
    >
      <article
        id="roles"
        className="scroll-mt-6 rounded-xl border border-border bg-surface/60 p-5 sm:p-7"
      >
        <BriefcaseBusiness className="text-primary" size={26} aria-hidden />
        <h2 className="mt-4 text-xl">Hiring for your team?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Explore my experience across web, full-stack, and mobile products.
          Share the role, responsibilities, and working arrangement you have in
          mind.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Software engineering role")}`}
          >
            Discuss a role <ArrowRight size={14} aria-hidden />
          </ButtonLink>
          <ButtonLink
            href={profile.resume.href}
            variant="outline"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={14} aria-hidden />
            View résumé
          </ButtonLink>
        </div>
      </article>
      <article
        id="projects"
        className="scroll-mt-6 rounded-xl border border-border bg-surface/60 p-5 sm:p-7"
      >
        <Lightbulb className="text-primary" size={26} aria-hidden />
        <h2 className="mt-4 text-xl">Building or improving a product?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Tell me about your users, what you need to build or fix, and your
          preferred timeline. We can discuss a new application or work on an
          existing product.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`}
          >
            Discuss a project <ArrowRight size={14} aria-hidden />
          </ButtonLink>
          <ButtonLink
            href={profile.whatsapp}
            variant="outline"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </article>
    </section>
  );
}
