import { projects } from "../src/content/projects.ts";
import { tools } from "../src/content/tools.ts";
import { experience } from "../src/content/experience.ts";
import { profile } from "../src/content/profile.ts";
import { demoFields } from "../src/lib/content.ts";
console.log("Content review checklist\n");
for (const project of [...projects, ...tools]) {
  const count = demoFields(project);
  console.log(
    `${count ? "[ ]" : "[x]"} ${project.name}: ${count ? `${count} draft fields remaining` : "core narrative ready"}`,
  );
}
for (const item of experience)
  console.log(
    `${item.datesDemo ? "[ ]" : "[x]"} ${item.company}: employment dates`,
  );
console.log(
  `${profile.resume.demo ? "[ ]" : "[x]"} Real résumé configured (document wording needs separate review)`,
);

console.log(
  `\n${projects.flatMap((project) => project.walkthroughs ?? []).length} external Loom walkthrough links supplied. Playback/access needs publication-environment verification.`,
);
console.log(
  "Private projects and optional metrics, lessons, or media do not require draft badges.",
);
