import test from "node:test";
import assert from "node:assert/strict";
import { loomEmbedUrl } from "../src/lib/media.ts";
import { projects } from "../src/content/projects.ts";

test("supplied walkthroughs become non-autoplay Loom embeds", () => {
  for (const recording of projects.flatMap((p) => p.walkthroughs ?? [])) {
    const url = loomEmbedUrl(recording.url);
    assert.ok(url);
    assert.equal(new URL(url).origin, "https://www.loom.com");
    assert.match(new URL(url).pathname, /^\/embed\/[a-f0-9]{32}$/);
    assert.equal(new URL(url).searchParams.get("autoplay"), "0");
  }
});

test("arbitrary URLs cannot become an iframe source", () => {
  for (const url of [
    "invalid",
    "javascript:alert(1)",
    "https://example.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0",
    "https://www.loom.com.evil.test/share/a93960cdd4eb4dde9b04b4b2d9b56cb0",
    "http://www.loom.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0",
    "https://www.loom.com/share/not-a-recording",
    "https://user:pass@www.loom.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0",
  ])
    assert.equal(loomEmbedUrl(url), undefined, url);
});
