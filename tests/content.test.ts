import { experience } from "../src/content/experience.ts";
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
      item.stack.length && item.contributions.length && item.results.length,
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
    if (item.productUrl)
      assert.equal(new URL(item.productUrl).protocol, "https:");
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
  item.lessons = { text: "Illustrative lesson", demo: true };
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

test("employment dates, company assets, and contribution links are valid", () => {
  for (const item of experience) {
    assert.match(item.startDate, /^\d{4}-(0[1-9]|1[0-2])$/);
    if (item.endDate) {
      assert.match(item.endDate, /^\d{4}-(0[1-9]|1[0-2])$/);
      assert.ok(item.endDate >= item.startDate);
    }
    if (item.logo) {
      assert.ok(existsSync(join(process.cwd(), "public", item.logo.src)));
      assert.ok(item.logo.width > 0 && item.logo.height > 0);
    }
    assert.ok(item.highlights.length && item.skills.length);
    for (const point of item.highlights)
      if (point.project) assert.ok(getProject(point.project));
  }
});

test("owner handoff completes commercial narratives and keeps deferred tools pending", () => {
  assert.equal(projects.length, 10);
  assert.equal(getProject("welcome-to-food"), undefined);
  assert.deepEqual(
    projects.filter((p) => p.featured).map((p) => p.slug),
    ["bitlux", "linxx", "skillmatch"],
  );
  for (const project of projects)
    assert.equal(demoFields(project), 0, project.name);
  for (const tool of tools)
    assert.equal(demoFields(tool), tool.slug === "blogsite" ? 5 : 0, tool.name);
  const onyx = getProject("onyx")!;
  assert.equal(onyx.status, "Private project");
  assert.equal(onyx.productUrl, undefined);
  assert.equal(onyx.walkthroughs, undefined);
  assert.equal(onyx.media?.length ?? 0, 0);
  assert.equal(getProject("development-solutions-group")?.lessons, undefined);
});

test("external walkthroughs stay distinct from product links and local media", () => {
  const recordings = projects.flatMap((p) => p.walkthroughs ?? []);
  assert.equal(recordings.length, 5);
  assert.equal(new Set(recordings.map((r) => r.url)).size, 5);
  assert.deepEqual(
    getProject("linxx")?.walkthroughs?.map((r) => r.label),
    ["Web walkthrough", "Mobile walkthrough"],
  );
  for (const recording of recordings) {
    assert.match(
      recording.url,
      /^https:\/\/www\.loom\.com\/share\/[a-f0-9]{32}$/,
    );
    assert.ok(recording.label);
    assert.equal(recording.provider, "Loom");
  }
  assert.match(getProject("shopify-app")?.productLinkLabel ?? "", /App Store/);
  assert.match(
    getProject("keller-williams")?.productLinkLabel ?? "",
    /Keller Williams website/,
  );
});

test("Gaming Platform remains an explicit full-stack example with documented ownership", () => {
  const gaming = getProject("gaming-platform")!;
  assert.equal(gaming.role, "Full-Stack Developer");
  assert.deepEqual(gaming.keyTechnologies, ["Next.js", "MongoDB", "NextAuth"]);
  assert.match(gaming.cardSubtitle ?? "", /Frontend \+ backend/);
  assert.ok(gaming.implementation);
  assert.match(
    gaming.implementation.description,
    /client supplied the smart contract/,
  );
  assert.ok(
    gaming.stack.includes("MongoDB") && gaming.stack.includes("NextAuth"),
  );
  assert.equal(
    toolkitHighlights.find((item) => item.id === "backend")?.project,
    gaming.slug,
  );
});

test("contribution maps contain useful descriptions without replacing real media", () => {
  for (const project of projects) {
    if (!project.implementation) continue;
    assert.ok(
      project.implementation.title && project.implementation.description,
    );
    assert.ok(project.implementation.steps.length >= 3);
    for (const step of project.implementation.steps)
      assert.ok(step.title && step.description);
  }
  assert.equal(getProject("bitlux")?.media?.length, 4);
  assert.equal(getProject("linxx")?.media?.length, 7);
});

test("MERN full-stack positioning and project boundaries match owner clarification", () => {
  assert.equal(profile.heroProjectSlug, "skillmatch");
  assert.match(profile.heroRole, /Full-Stack Developer.*MERN.*Next.js/);
  assert.equal(
    getProject("skillmatch")?.involvement,
    "Contributed from day one",
  );
  assert.equal(getProject("skillmatch")?.projectStatus, undefined);
  for (const slug of [
    "bitlux",
    "linxx",
    "skillmatch",
    "gaming-platform",
    "get-foodies",
    "shopify-app",
  ])
    assert.equal(getProject(slug)?.developmentScope, "Full-stack", slug);
  for (const slug of [
    "hestiya",
    "keller-williams",
    "development-solutions-group",
    "onyx",
  ])
    assert.equal(
      getProject(slug)?.developmentScope,
      "Frontend & integrations",
      slug,
    );
  assert.equal(getProject("onyx")?.role, "Frontend Developer");
});

test("tool build evidence completes two stories without mandatory lessons or live links", () => {
  assert.equal(getProject("bitlux")?.productUrl, undefined);
  assert.equal(getProject("bitlux")?.media?.length, 4);
  assert.ok(getProject("get-foodies")?.stack.includes("Node.js"));
  assert.ok(getProject("get-foodies")?.stack.includes("Express"));
  assert.ok(
    getProject("skillmatch")?.contributions.some((item) =>
      /authentication/i.test(item.description),
    ),
  );
  for (const slug of ["typespark", "globepick"]) {
    const tool = getTool(slug)!;
    assert.equal(demoFields(tool), 0);
    assert.equal(tool.stackVerified, true);
    assert.equal(tool.lessons, undefined);
    assert.equal(tool.productUrl, undefined);
    assert.match(tool.developmentWorkflow ?? "", /Codex/);
    assert.doesNotMatch(tool.developmentWorkflow ?? "", /\d+%/);
  }
  assert.equal(getTool("blogsite")?.stackVerified, false);
});
