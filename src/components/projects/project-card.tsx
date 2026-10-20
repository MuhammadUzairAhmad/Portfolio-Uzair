import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { projectHref } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { ToolVisual } from "./tool-visual";
export function ProjectCard({
  project,
  featured = false,
}: {
  project: PortfolioProject;
  featured?: boolean;
}) {
  const image =
    project.slug === "bitlux"
      ? "/images/projects/bitlux-screen.webp"
      : project.slug === "linxx"
        ? "/images/projects/linxx-screen.webp"
        : project.image;
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-background",
        featured && "md:col-span-2",
      )}
    >
      <Link
        href={projectHref(project)}
        className={cn(
          "block focus-visible:outline-offset-[-3px]",
          featured && "md:grid md:grid-cols-[1.2fr_1fr]",
        )}
      >
        {project.illustration ? (
          <ToolVisual kind={project.illustration} />
        ) : (
          <div
            className={cn(
              "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface p-6 sm:p-8",
              featured && "md:aspect-auto md:min-h-80",
            )}
          >
            {image && (
              <Image
                src={image}
                alt={`${project.name} application interface`}
                width={1440}
                height={900}
                sizes={
                  featured
                    ? "(min-width: 1280px) 650px, (min-width: 768px) 55vw, 100vw"
                    : "(min-width: 1280px) 590px, (min-width: 768px) 46vw, 100vw"
                }
                className="h-auto max-h-80 w-full rounded-md object-contain shadow-md transition-transform duration-300 motion-safe:group-hover:scale-[1.025]"
              />
            )}
          </div>
        )}
        <div
          className={cn(
            "flex flex-col p-6 sm:p-7",
            featured && "md:justify-center md:p-10",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[.15em] text-muted-foreground">
              {project.category} · {project.status}
            </span>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-primary"
              aria-hidden
            />
          </div>
          <h3
            className={cn("text-2xl tracking-tight", featured && "sm:text-3xl")}
          >
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <span className="mt-6 text-xs font-medium text-primary">
            Read the{" "}
            {project.category === "Tools" ? "tool story" : "case study"}{" "}
            <span aria-hidden>↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
