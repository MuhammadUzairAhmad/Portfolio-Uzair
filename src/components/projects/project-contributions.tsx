import type { PortfolioProject } from "@/types/content";

export function ProjectContributions({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <div>
      <ul className="space-y-4">
        {project.contributions.map((item, i) => (
          <li
            key={item.title}
            className="grid items-start gap-3 sm:grid-cols-[35px_190px_1fr]"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pt-1 text-sm">{item.title}</h3>
            <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      {project.developmentWorkflow && (
        <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">
            Development workflow:{" "}
          </span>
          {project.developmentWorkflow}
        </p>
      )}
    </div>
  );
}
