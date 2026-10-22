import { CheckCircle2 } from "lucide-react";
import type { PortfolioProject } from "@/types/content";

export function ProjectContributions({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <div>
      <ul aria-label="My contributions" className="grid gap-3 sm:grid-cols-2">
        {project.contributions.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-3 rounded-lg border border-border p-4"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden
            />
            <div className="min-w-0">
              <h3 className="text-sm">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {project.developmentWorkflow && (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">
            Development workflow:{" "}
          </span>
          {project.developmentWorkflow}
        </p>
      )}
    </div>
  );
}
