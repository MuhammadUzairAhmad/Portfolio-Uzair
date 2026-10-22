import { experience } from "../src/content/experience.ts";
import { toolkitGroups } from "../src/content/toolkit.ts";
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
  for (const service of services) {
    assert.equal(service.href, "/work");
    assert.ok(service.description && service.skills.length > 0);
  }
  assert.deepEqual(profile.homeFeaturedProjectSlugs, [
    "skillmatch",
    "hestiya",
    "bitlux",
  ]);
  for (const slug of profile.homeFeaturedProjectSlugs)
    assert.ok(getProject(slug)?.image);
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

test("owner handoff completes project and tool narratives", () => {
  assert.equal(projects.length, 10);
  assert.equal(getProject("welcome-to-food"), undefined);
  assert.deepEqual(
    projects.filter((p) => p.featured).map((p) => p.slug),
    ["bitlux", "linxx", "skillmatch"],
  );
  for (const project of projects)
    assert.equal(demoFields(project), 0, project.name);
  for (const tool of tools) assert.equal(demoFields(tool), 0, tool.name);
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
  assert.ok(
    gaming.contributions.some((item) =>
      /client-provided smart contract/.test(item.description),
    ),
  );
  assert.ok(
    gaming.stack.includes("MongoDB") && gaming.stack.includes("NextAuth"),
  );
  assert.ok(!profile.homeFeaturedProjectSlugs.includes(gaming.slug));
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

test("published tools retain verified stories and Codex workflow", () => {
  assert.equal(getProject("bitlux")?.productUrl, undefined);
  assert.equal(getProject("bitlux")?.media?.length, 4);
  assert.ok(getProject("get-foodies")?.stack.includes("Node.js"));
  assert.ok(getProject("get-foodies")?.stack.includes("Express"));
  assert.ok(
    getProject("skillmatch")?.contributions.some((item) =>
      /authentication/i.test(item.description),
    ),
  );
  for (const slug of ["textgenerators", "globepick"]) {
    const tool = getTool(slug)!;
    assert.equal(demoFields(tool), 0);
    assert.equal(tool.stackVerified, true);
    assert.equal(tool.lessons, undefined);
    assert.ok(tool.productUrl?.startsWith("https://"));
    assert.match(tool.developmentWorkflow ?? "", /Codex/);
    assert.doesNotMatch(tool.developmentWorkflow ?? "", /\d+%/);
  }
  assert.equal(getTool("blogsite"), undefined);
});

test("project roles, Foodies web work and Shopify camera workaround preserve confirmed boundaries", () => {
  for (const slug of ["hestiya", "development-solutions-group"]) {
    assert.equal(getProject(slug)?.role, "Frontend Developer");
    assert.equal(getProject(slug)?.developmentScope, "Frontend & integrations");
  }
  const foodies = getProject("get-foodies")!;
  assert.equal(foodies.category, "Web & mobile");
  assert.equal(foodies.platform, "Web + iOS + Android");
  const work = foodies.contributions.map((item) => item.description).join(" ");
  for (const feature of [
    "web application",
    "backend",
    "product listings",
    "dynamic banners",
    "discounts",
    "account settings",
    "theme settings",
  ])
    assert.ok(work.includes(feature), feature);
  const shopify = getProject("shopify-app")!;
  const modes = shopify.contributions.find(
    (item) => item.title === "Combined app experience",
  )!;
  for (const detail of [
    "button",
    "standalone browser",
    "embedded Shopify experience",
  ])
    assert.ok(modes.description.includes(detail), detail);
  assert.equal(shopify.highlightChallenge, true);
  assert.match(shopify.problem.text, /iframe.*permissions/);
  assert.match(shopify.solution.text, /without converting the entire app/);
  const kw = getProject("keller-williams")!;
  assert.match(kw.context!, /homes to buy or rent/);
  assert.doesNotMatch(kw.context!, /I worked|I built|shadowing/);
  assert.match(kw.contributions[0].description, /27\+/);
});

test("ownership distinguishes team contributions and supplied work from personal delivery", () => {
  for (const project of [...projects, ...tools])
    assert.ok(project.ownership?.summary);
  assert.match(
    getProject("skillmatch")!.ownership!.summary,
    /senior developer guidance/,
  );
  assert.match(
    getProject("hestiya")!.ownership!.summary,
    /another engineer who built the Python backend/,
  );
  assert.match(
    getProject("gaming-platform")!.ownership!.summary,
    /client supplied the smart contract/,
  );
  assert.match(
    getProject("onyx")!.ownership!.summary,
    /did not create or modify the backend APIs/,
  );
  assert.match(
    getProject("keller-williams")!.ownership!.summary,
    /Junior Software Engineer.*shadowing the CTO/,
  );
  assert.match(
    getProject("shopify-app")!.ownership!.summary,
    /existing client application/,
  );
  assert.equal(getTool("the-daily-mind")!.team, "Personal project");
});

test("personal publishing project and renamed live tools preserve evidence", () => {
  assert.equal(tools.length, 3);
  const blog = getTool("the-daily-mind")!;
  assert.equal(blog.developmentScope, "Full-stack");
  assert.equal(blog.role, "Full-Stack Developer");
  for (const tech of ["Next.js", "NestJS", "MongoDB", "Tiptap", "Cloudinary"])
    assert.ok(blog.stack.includes(tech));
  assert.equal(blog.productUrl, "https://the-daily-mind.vercel.app/");
  assert.equal(getTool("textgenerators")?.name, "TextGenerators.net");
  assert.equal(
    getTool("textgenerators")?.productUrl,
    "https://textgenerators.net/",
  );
  assert.equal(
    getTool("globepick")?.productUrl,
    "https://globe-pick-countries-tool.vercel.app/",
  );
  for (const item of [blog, ...tools])
    assert.equal(item.media?.[0].kind, "image");
  assert.match(getProject("get-foodies")!.walkthroughs![0].url, /loom.com/);
  assert.equal(demoFields(blog), 0);
});
