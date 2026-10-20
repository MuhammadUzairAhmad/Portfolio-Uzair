import { projects } from "../src/content/projects.ts";
import { tools } from "../src/content/tools.ts";
import { experience } from "../src/content/experience.ts";
import { profile } from "../src/content/profile.ts";
import { demoFields } from "../src/lib/content.ts";
console.log("Content review checklist\n");
for (const project of [...projects, ...tools]) {
  const count = demoFields(project);
  console.log(
    `${count ? "[ ]" : "[x]"} ${project.name}: ${count} demo narrative fields`,
  );
}
for (const item of experience)
  console.log(
    `${item.datesDemo ? "[ ]" : "[x]"} ${item.company}: employment dates`,
  );
console.log(`${profile.resume.demo ? "[ ]" : "[x]"} Replace demo résumé`);
