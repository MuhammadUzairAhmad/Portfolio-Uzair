import { notFound } from "next/navigation";
import { tools } from "@/content/tools";
import { getTool } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { CaseStudy } from "@/components/projects/case-study";
export function generateStaticParams() {
  return tools.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return pageMetadata(tool.name, tool.summary, `/tools/${slug}`);
}
export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  const index = tools.indexOf(tool);
  return <CaseStudy project={tool} next={tools[(index + 1) % tools.length]} />;
}
