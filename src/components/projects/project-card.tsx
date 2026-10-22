import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { projectHref } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { DevicePreview } from "./device-preview";
import { ToolVisual } from "./tool-visual";
const tones = {
  bitlux: "bg-[#faf5e9] dark:bg-[#171c13]",
  linxx: "bg-[#fff0e7] dark:bg-[#211a14]",
  skillmatch: "bg-[#eaf5f9] dark:bg-[#0b2223]",
};
export function ProjectCard({
  project,
  featured = false,
  archive = false,
  index,
}: {
  project: PortfolioProject;
  featured?: boolean;
  archive?: boolean;
  index?: number;
}) {
  if (project.category === "Tools" || project.illustration)
    return <ToolCard project={project} archive={archive} index={index} />;
  const wide = featured || archive;
  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-xl border border-border/65",
        tones[project.slug as keyof typeof tones] ?? "bg-surface",
        featured && "md:col-span-2",
      )}
    >
      <Link
        href={projectHref(project)}
        prefetch
        className={cn(
          "relative grid min-h-60 grid-cols-[.9fr_1.1fr] gap-1 p-5 sm:p-6",
          wide && "sm:min-h-72 sm:grid-cols-[.9fr_1.2fr] sm:p-8",
        )}
      >
        <div className="relative z-10 flex flex-col items-start">
          {index !== undefined && (
            <span className="mb-3 flex size-8 items-center justify-center rounded-full bg-accent font-serif text-sm text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className={cn("text-xl sm:text-2xl", wide && "sm:text-4xl")}>
            {project.name}
          </h3>
          <p className="mt-1 max-w-xs text-xs font-medium leading-relaxed sm:text-sm">
            {project.cardSubtitle ?? project.subtitle}
          </p>
          {wide && (
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {project.summary}
            </p>
          )}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.stack.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-3 text-xs font-medium text-primary">
            Read case study
            <ArrowRight size={13} aria-hidden />
          </span>
        </div>
        <div className="relative flex min-w-0 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c0a76518,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,#b3d94922,transparent_70%)]" />
          <DevicePreview
            project={project}
            compact={!wide}
            className={cn(
              "absolute -right-6 top-1/2 h-56 w-[115%] max-w-none -translate-y-1/2 transition-transform duration-300 motion-safe:group-hover:-translate-y-[52%]",
              wide && "sm:-right-5 sm:h-72 sm:w-[118%]",
            )}
          />
        </div>
      </Link>
    </article>
  );
}
export function ToolCard({
  project,
  archive = false,
  index,
}: {
  project: PortfolioProject;
  archive?: boolean;
  index?: number;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-border",
        project.illustration === "type"
          ? "bg-[#f8f3f4] dark:bg-[#18141f]"
          : project.illustration === "globe"
            ? "bg-[#eff6f5] dark:bg-[#0d1c1d]"
            : "bg-[#f9f5ea] dark:bg-[#221f14]",
      )}
    >
      <Link
        href={projectHref(project)}
        prefetch
        className={cn(
          "flex h-full flex-col p-5",
          archive && "grid min-h-72 items-center gap-6 sm:grid-cols-2 sm:p-7",
        )}
      >
        <div className={cn(archive && "flex h-full flex-col items-start")}>
          {archive && (
            <span className="mb-2 font-serif text-lg text-primary">
              {String((index ?? 0) + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className={cn("text-xl", archive && "text-3xl")}>
            {project.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          {archive && (
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.scope.map((scope) => (
                <Badge key={scope}>{scope}</Badge>
              ))}
            </div>
          )}
          {archive && (
            <span className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-primary">
              Explore project
              <ArrowRight size={14} aria-hidden />
            </span>
          )}
        </div>
        <ToolVisual
          kind={project.illustration}
          detailed={archive}
          eager={archive && index === 0}
          className={archive ? "h-56" : "my-auto h-36 sm:h-40"}
        />
        {!archive && (
          <span className="mt-2 inline-flex items-center gap-3 text-xs font-medium text-primary">
            Explore project
            <ArrowRight size={13} aria-hidden />
          </span>
        )}
      </Link>
    </article>
  );
}

export function NextProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={projectHref(project)}
      prefetch
      className="grid items-center gap-4 rounded-xl border border-border bg-surface p-4 sm:grid-cols-[160px_1fr_auto]"
    >
      <div className="h-28 overflow-hidden">
        {project.illustration ? (
          <ToolVisual kind={project.illustration} className="h-28" />
        ) : (
          <DevicePreview project={project} />
        )}
      </div>
      <div>
        <h3 className="text-xl">{project.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
      <span className="flex items-center gap-3 text-xs font-medium text-primary">
        View case study
        <ArrowRight size={14} aria-hidden />
      </span>
    </Link>
  );
}
