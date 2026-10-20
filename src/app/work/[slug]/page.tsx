import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getProject } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { CaseStudy } from "@/components/projects/case-study";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.name, project.summary, `/work/${slug}`);
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  return (
    <CaseStudy
      project={project}
      next={projects[(index + 1) % projects.length]}
    />
  );
}
