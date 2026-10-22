import type { PortfolioProject } from "@/types/content";
import { ProjectGallery } from "./project-gallery";
import { ProjectWalkthroughs } from "./project-walkthroughs";

export function ProjectEvidence({
  project,
  includeWalkthroughs = true,
}: {
  project: PortfolioProject;
  includeWalkthroughs?: boolean;
}) {
  return (
    <div>
      {includeWalkthroughs && !!project.walkthroughs?.length && (
        <ProjectWalkthroughs
          id={`${project.slug}-walkthroughs`}
          recordings={project.walkthroughs}
        />
      )}
      <ProjectGallery
        id={`${project.slug}-gallery`}
        projectName={project.name}
        media={project.media}
      />
    </div>
  );
}
