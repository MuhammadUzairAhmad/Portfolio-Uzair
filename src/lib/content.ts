import { projects } from "../content/projects.ts";
import { tools } from "../content/tools.ts";
import type { PortfolioProject } from "../types/content.ts";
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
export function projectHref(project: PortfolioProject) {
  return `${project.category === "Tools" ? "/tools" : "/work"}/${project.slug}`;
}
export function demoFields(project: PortfolioProject) {
  return [
    project.problem,
    project.solution,
    ...project.decisions,
    ...project.results,
    project.lessons,
  ].filter((item) => item?.demo).length;
}
