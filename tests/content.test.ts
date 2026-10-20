import { toolkitHighlights, toolkitGroups } from "../src/content/toolkit.ts";
import { toolArtwork } from "../src/content/tool-art.ts";
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
test("local assets exist and featured cards have visuals", () => {
  for (const item of all) {
    if (item.mockup)
      assert.ok(
        existsSync(join(process.cwd(), "public", item.mockup)),
        item.mockup,
      );
    if (item.featured || item.category === "Tools")
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

test("tool illustrations exist and toolkit examples resolve to real projects", () => {
  for (const artwork of Object.values(toolArtwork)) {
    assert.ok(existsSync(join(process.cwd(), "public", artwork.src)));
    assert.ok(artwork.width > 0 && artwork.height > 0);
  }
  assert.equal(
    new Set(toolkitGroups.map((group) => group.id)).size,
    toolkitGroups.length,
  );
  for (const group of toolkitGroups) {
    assert.ok(group.rows.length > 0);
    for (const row of group.rows) assert.ok(row.label && row.items.length > 0);
  }
  for (const item of toolkitHighlights) {
    assert.ok(getProject(item.project));
    assert.ok(item.skills.length > 0);
  }
});

// Media records must stay tied to valid local assets; this also checks future video additions.
test("project galleries have valid assets and preserve screenshot metadata", () => {
  assert.equal(getProject("bitlux")?.media?.length, 4);
  assert.equal(getProject("linxx")?.media?.length, 7);
  for (const project of all) {
    for (const media of project.media ?? []) {
      assert.ok(media.caption && media.width > 0 && media.height > 0);
      assert.ok(
        existsSync(join(process.cwd(), "public", media.src)),
        media.src,
      );
      if (media.kind === "image") assert.ok(media.alt);
      if (media.kind === "video") {
        assert.match(media.src, /\.(mp4|webm)$/);
        if (media.poster)
          assert.ok(existsSync(join(process.cwd(), "public", media.poster)));
        if (media.captions)
          assert.ok(
            existsSync(join(process.cwd(), "public", media.captions.src)),
          );
      }
    }
  }
});
