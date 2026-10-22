import { services } from "../src/content/services.ts";
import { experience } from "../src/content/experience.ts";
import { toolArtwork } from "../src/content/tool-art.ts";
import assert from "node:assert/strict";
import { projects } from "../src/content/projects.ts";
import { tools } from "../src/content/tools.ts";
import { profile } from "../src/content/profile.ts";
import { projectHref } from "../src/lib/content.ts";
const origin = process.env.SMOKE_URL ?? "http://127.0.0.1:4337";
const routes = [
  "/",
  "/work",
  "/tools",
  "/about",
  "/contact",
  ...[...projects, ...tools].map(projectHref),
];
for (const route of routes) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.match(html, /<main[^>]*id="main-content"/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  assert.equal(
    (html.match(/<h1(?: |>)/g) ?? []).length,
    1,
    `${route}: one main heading`,
  );
  if (route === "/" || route === "/about") {
    for (const item of experience) {
      assert.ok(html.includes(item.company));
      assert.ok(html.includes(item.role));
      assert.match(
        html,
        new RegExp(`<time[^>]*datetime="${item.startDate}"`, "i"),
      );
      if (item.endDate)
        assert.match(
          html,
          new RegExp(`<time[^>]*datetime="${item.endDate}"`, "i"),
        );
    }
  }
  if (route === "/") {
    assert.doesNotMatch(html, /id="skills"|What I bring/);
    assert.match(html, /Explore my skills &amp; tools/);
    assert.doesNotMatch(
      html,
      /Full-stack spotlight|Gaming Platform|Full-stack contributions/,
    );
    assert.match(html, /Full-Stack Developer/);
    assert.match(html, /SkillMatch responsive device previews/);
    const featuredSection = html.slice(
      html.indexOf("Featured projects"),
      html.indexOf("Where I’ve worked"),
    );
    const featuredLinks = [
      ...featuredSection.matchAll(/href="(\/work\/[^"#]+)"/g),
    ].map((match) => match[1]);
    assert.deepEqual(
      featuredLinks,
      profile.homeFeaturedProjectSlugs.map((slug) => `/work/${slug}`),
    );
    assert.match(html, /Build the MVP/);
    assert.match(html, /Improve &amp; scale/);
    assert.equal((html.match(/>View all work/g) ?? []).length, services.length);
    assert.match(html, /uzair-mern-stack-resume.pdf/);
    for (const service of services)
      assert.ok(
        html.includes(service.description.replaceAll("&", "&amp;")),
        service.title,
      );
  }
  if (route === "/" || route === "/tools") {
    for (const artwork of [
      "typespark-preview-v2.webp",
      "globepick-preview-v2.webp",
    ])
      assert.ok(html.includes(artwork), `${route}: illustrated tool card`);
    assert.doesNotMatch(html, /textgenerators-live.webp|globepick-live.webp/);
  }
  if (route === "/work")
    assert.doesNotMatch(html, /the-daily-mind|The Daily Mind/);
  if (route === "/" || route === "/tools")
    assert.ok(html.includes("blogsite-preview-v2.webp"));
  if (route === "/contact") {
    assert.match(html, /Hiring for your team/);
    assert.match(html, /Building or improving a product/);
    assert.match(html, /subject=Software%20engineering%20role/);
    assert.match(html, /subject=Project%20enquiry/);
  }
  if (route.startsWith("/tools/")) {
    const tool = tools.find((item) => route === `/tools/${item.slug}`)!;
    const hero = html.match(/<img\b[^>]*src="([^"]+)"/)?.[1] ?? "";
    assert.ok(
      hero.includes(encodeURIComponent(toolArtwork[tool.illustration!].src)),
      `${route}: hero matches card artwork`,
    );
    assert.match(html, /Project snapshot/);
    assert.doesNotMatch(
      html,
      /Replace this draft|Add a verified lesson|framework and public URL remain to be verified|Illustrative details/,
    );
    assert.doesNotMatch(html, /Scrollable technical decisions/);
    assert.match(html, /aria-label="My contributions"/);
    assert.match(html, /aria-label="My involvement"/);
  }
  if (route === "/tools/textgenerators" || route === "/tools/globepick") {
    assert.match(html, /Tech stack/);
    assert.match(html, /Codex-assisted/);
    assert.match(html, /Why it matters/);
    assert.doesNotMatch(html, /Lessons learned/);
  }

  if (route === "/work/bitlux")
    assert.doesNotMatch(html, /bitlux-ops.vercel.app/);
  if (route === "/work/get-foodies") assert.match(html, /Express/);
  if (route === "/about") {
    assert.match(html, /id="toolkit"/);
    assert.match(html, /What I bring/);
    assert.match(html, /Jul 2025/);
    assert.doesNotMatch(html, /Full-stack contributions/);
    assert.equal(
      (html.match(/<details[^>]*\bopen(?:[ >="\'])/g) ?? []).length,
      experience.length,
    );
    for (const item of experience)
      for (const point of item.highlights)
        assert.ok(html.includes(point.description));
    assert.match(html, /uzair-mern-stack-resume.pdf/);
    assert.doesNotMatch(html, /View demo résumé|Dates to confirm/);
  }
  const project = projects.find((item) => projectHref(item) === route);
  if (project?.media?.length) {
    assert.ok(html.includes(`id="${project.slug}-gallery"`));
    assert.ok(html.includes(`href="#${project.slug}-gallery"`));
    for (const media of project.media) assert.ok(html.includes(media.caption));
  }
  if (project?.productUrl)
    assert.ok(
      html.includes(`href="${project.productUrl.replaceAll("&", "&amp;")}"`),
    );
  if (project && !project.productUrl)
    assert.doesNotMatch(html, /Open project<|View live project/);
  if (project) {
    assert.doesNotMatch(
      html,
      /Illustrative details are marked below|>Demo copy<\/span>/,
    );
    for (const recording of project.walkthroughs ?? []) {
      assert.match(html, /<button[^>]*type="button"/);
      assert.ok(html.includes(recording.label));
    }
    if (project.category !== "Tools") {
      assert.match(html, /data-project-cover="(?:image|placeholder)"/);
      if (!project.image && !project.mockup)
        assert.match(html, /data-project-cover="placeholder"/);
      for (const recording of project.walkthroughs ?? []) {
        assert.ok(recording.url);
        assert.ok(
          html.indexOf('id="evidence"') <
            html.indexOf(`id="${project.slug}-walkthroughs"`),
          `${route}: walkthrough belongs in evidence`,
        );
      }
    }
    if (project.slug === "skillmatch") {
      assert.match(html, /Contributed from day one/);
      assert.doesNotMatch(html, /Ongoing product/);
    }
    assert.match(html, /aria-label="My contributions"/);
    assert.match(html, /aria-label="My involvement"/);
    assert.match(html, /id="contributions"/);
    assert.doesNotMatch(
      html,
      /id="implementation"|href="#implementation"|My role &amp; contributions/,
    );
    if (project.stackVerified !== false) assert.match(html, /id="tech-stack"/);
    else assert.doesNotMatch(html, /id="tech-stack"/);
    if (project.highlightChallenge) {
      assert.match(html, /id="challenge"/);
      assert.match(html, /The challenge/);
      assert.match(html, /My solution/);
    } else assert.doesNotMatch(html, /id="challenge"|href="#challenge"/);
    if (project.decisions.some((item) => !item.demo)) {
      assert.match(html, /aria-label="Key decisions"/);
      assert.match(html, /Why it matters/);
      assert.doesNotMatch(html, /Why these choices/);
    }
    if (!project.decisions.some((item) => !item.demo)) {
      assert.doesNotMatch(html, /id="decisions"|href="#decisions"/);
    }
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(
        html.includes(`id="${fragment}"`),
        `${route}: missing ${fragment}`,
      );
    assert.doesNotMatch(html, /<iframe\b/); // Loom loads only after viewer interaction.
    if (!project.decisions.length)
      assert.doesNotMatch(html, /Scrollable technical decisions/);
    if (!project.lessons) assert.doesNotMatch(html, /Lessons learned/);
    if (project.slug === "onyx")
      assert.doesNotMatch(
        html,
        /Watch walkthrough|View screenshots &amp; media/,
      );
  }
  if (["/", "/work"].includes(route))
    assert.doesNotMatch(html, /welcome-to-food|Welcome to Food/);
  console.log(`PASS ${route}`);
}
for (const route of [
  "/missing",
  "/work/missing",
  "/tools/missing",
  "/work/welcome-to-food",
]) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 404, route);
  assert.match(await response.text(), /Nothing here/);
  console.log(`PASS 404 ${route}`);
}
const robots = await fetch(origin + "/robots.txt");
assert.match(await robots.text(), /Disallow: \/\n/);
const sitemap = await fetch(origin + "/sitemap.xml");
assert.doesNotMatch(await sitemap.text(), /<loc>/);
for (const path of [
  profile.resume.href,
  "/icon.svg",
  "/opengraph-image",
  ...experience.flatMap((item) => (item.logo ? [item.logo.src] : [])),
  ...Object.values(toolArtwork).map((artwork) => artwork.src),
  ...new Set(
    projects
      .flatMap((p) => [
        p.image?.src,
        p.mockup,
        ...(p.media ?? []).flatMap((media) => [
          media.src,
          ...(media.kind === "video"
            ? [media.poster, media.captions?.src]
            : []),
        ]),
      ])
      .filter((path): path is string => !!path),
  ),
]) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
}
console.log(
  "PASS preview metadata, sitemap, résumé, social preview, and all source images",
);

for (const [legacy, destination] of [
  ["/tools/typespark", "/tools/textgenerators"],
  ["/tools/blogsite", "/tools/the-daily-mind"],
  ["/work/the-daily-mind", "/tools/the-daily-mind"],
]) {
  const response = await fetch(origin + legacy, { redirect: "manual" });
  assert.equal(response.status, 308, legacy);
  assert.equal(
    new URL(response.headers.get("location")!, origin).pathname,
    destination,
  );
  console.log(`PASS redirect ${legacy} → ${destination}`);
}
