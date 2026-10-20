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
  console.log(`PASS ${route}`);
}
for (const route of ["/missing", "/work/missing", "/tools/missing"]) {
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
  ...projects.map((p) => p.image?.src).filter((path): path is string => !!path),
]) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
}
console.log(
  "PASS preview metadata, sitemap, résumé, social preview, and all source images",
);
