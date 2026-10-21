import test from "node:test";
import { profile } from "../src/content/profile.ts";
import assert from "node:assert/strict";
import {
  validSiteUrl,
  publicationState,
  publicationIssues,
} from "../src/lib/publication.ts";
test("public metadata requires an HTTPS origin", () => {
  for (const value of [
    undefined,
    "",
    "invalid",
    "http://portfolio.com",
    "https://localhost",
    "https://127.0.0.1",
    "https://portfolio.test",
    "https://portfolio.com/work",
    "https://portfolio.com?x=1",
    "https://user:pass@portfolio.com",
    "https://portfolio.com:444",
  ])
    assert.equal(validSiteUrl(value), undefined, String(value));
  assert.equal(validSiteUrl("https://uzair.dev/"), "https://uzair.dev");
});
test("preview remains noindex even when a real URL is supplied", () => {
  const state = publicationState({ NEXT_PUBLIC_SITE_URL: "https://uzair.dev" });
  assert.equal(state.isPublic, false);
});
test("a public flag cannot expose demo content", () => {
  const state = publicationState({
    NEXT_PUBLIC_SITE_URL: "https://uzair.dev",
    PORTFOLIO_PUBLIC: "true",
  });
  assert.equal(state.isPublic, false);
  assert.ok(!state.issues.some((issue) => issue.includes("résumé")));
  assert.ok(!state.issues.some((issue) => issue.includes("Bitlux")));
  assert.ok(state.issues.some((issue) => issue.includes("TypeSpark")));
  assert.ok(!state.issues.some((issue) => issue.includes("employment dates")));
  assert.ok(publicationIssues().length > 0);
});

test("a demo résumé is still blocked if reintroduced", () => {
  const original = profile.resume.demo;
  try {
    profile.resume.demo = true;
    assert.ok(publicationIssues().some((issue) => issue.includes("résumé")));
  } finally {
    profile.resume.demo = original;
  }
});
