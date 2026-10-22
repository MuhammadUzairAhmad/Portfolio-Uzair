import type { PortfolioProject } from "@/types/content";

export function ProjectChallenge({ project }: { project: PortfolioProject }) {
  return (
    <div className="space-y-4 rounded-xl border border-border bg-surface/30 p-5">
      <div>
        <h3 className="text-sm">The challenge</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.problem.text}
        </p>
      </div>
      <div>
        <h3 className="text-sm text-primary">My solution</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.solution.text}
        </p>
      </div>
    </div>
  );
}
