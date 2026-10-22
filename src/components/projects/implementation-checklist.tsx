import { CheckCircle2 } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { Badge } from "@/components/ui/badge";

export function ImplementationChecklist({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <div>
      <ul
        aria-label="Implemented features"
        className="grid gap-3 sm:grid-cols-2"
      >
        {project.scope.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-border p-4 text-sm leading-relaxed text-muted-foreground"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {project.stackVerified !== false && (
        <div className="mt-5" aria-label="Project technologies">
          <h3 className="mb-3 text-sm">Tech stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
