import { contentSettings, profile } from "../content/profile.ts";
import { projects } from "../content/projects.ts";
import { tools } from "../content/tools.ts";
import { experience } from "../content/experience.ts";
import { demoFields } from "./content.ts";
export function validSiteUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      !url.hostname.includes(".") ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".localhost") ||
      /^\d+\.\d+\.\d+\.\d+$/.test(url.hostname) ||
      /\.(local|test|invalid|example)$/.test(url.hostname)
    )
      return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}
export function publicationIssues() {
  const issues: string[] = [];
  if (contentSettings.demoMode)
    issues.push(
      "Disable contentSettings.demoMode after reviewing the content.",
    );
  if (profile.resume.demo)
    issues.push("Replace the demo résumé and remove its demo flag.");
  for (const item of [...projects, ...tools])
    if (demoFields(item))
      issues.push(
        `${item.name}: ${demoFields(item)} demo narrative fields remain.`,
      );
  for (const item of experience)
    if (item.datesDemo)
      issues.push(`${item.company}: confirm employment dates.`);
  return issues;
}
export function publicationState(env: Record<string, string | undefined>) {
  const siteUrl = validSiteUrl(env.NEXT_PUBLIC_SITE_URL);
  const issues = publicationIssues();
  if (!siteUrl)
    issues.push("Set NEXT_PUBLIC_SITE_URL to your real HTTPS origin.");
  return {
    siteUrl,
    issues,
    isPublic: env.PORTFOLIO_PUBLIC === "true" && issues.length === 0,
  };
}
