import { Suspense } from "react";
import { CaseStudyLoading } from "@/components/projects/case-study-loading";
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
async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const collection = project.featured
    ? projects.filter((item) => item.featured)
    : projects;
  const index = collection.indexOf(project);
  return (
    <CaseStudy
      project={project}
      next={collection[(index + 1) % collection.length]}
    />
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<CaseStudyLoading />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}
