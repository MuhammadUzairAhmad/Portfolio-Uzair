import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/content/projects.ts";
import { tools } from "../src/content/tools.ts";
import { profile } from "../src/content/profile.ts";
import { services } from "../src/content/services.ts";
import {
  getProject,
  getTool,
  projectHref,
  demoFields,
} from "../src/lib/content.ts";
const all = [...projects, ...tools];
test("homepage hero resolves to a project with a screenshot", () => {
  assert.ok(getProject(profile.heroProjectSlug)?.image);
});
test("content resolves to unique valid portfolio routes", () => {
  const routes = all.map(projectHref);
  assert.equal(new Set(routes).size, routes.length);
  for (const item of all) {
    assert.match(item.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(
      (item.category === "Tools" ? getTool : getProject)(item.slug),
      item,
    );
    assert.ok(item.name && item.summary && item.overview && item.role);
    assert.ok(
      item.stack.length &&
        item.contributions.length &&
        item.decisions.length &&
        item.results.length,
    );
  }
  assert.equal(getProject("not-a-project"), undefined);
  assert.equal(getTool("bitlux"), undefined);
});
test("every linked local asset exists and each card has a visual", () => {
  for (const item of all) {
    if (item.mockup)
      assert.ok(
        existsSync(join(process.cwd(), "public", item.mockup)),
        item.mockup,
      );
    assert.ok(item.image || item.illustration, `${item.name} needs a visual`);
    if (item.image)
      assert.ok(
        existsSync(join(process.cwd(), "public", item.image.src)),
        item.image.src,
      );
    if (item.liveUrl) assert.equal(new URL(item.liveUrl).protocol, "https:");
  }
  assert.ok(existsSync(join(process.cwd(), "public", profile.resume.href)));
  for (const file of ["bitlux-screen.webp", "linxx-screen.webp"])
    assert.ok(existsSync(join(process.cwd(), "public/images/projects", file)));
});
test("services point at existing evidence and featured work is intentional", () => {
  for (const service of services) assert.ok(getProject(service.project));
  assert.equal(projects.filter((item) => item.featured).length, 3);
});
test("every type of illustrative narrative is counted", () => {
  const item = structuredClone(projects[0]);
  item.problem.demo = true;
  item.solution.demo = true;
  item.lessons.demo = true;
  item.decisions = item.decisions.map((x) => ({ ...x, demo: true }));
  item.results = item.results.map((x) => ({ ...x, demo: true }));
  assert.equal(
    demoFields(item),
    3 + item.decisions.length + item.results.length,
  );
  item.problem.demo = false;
  assert.equal(
    demoFields(item),
    2 + item.decisions.length + item.results.length,
  );
});
