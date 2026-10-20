import { publicationState } from "../src/lib/publication.ts";
const state = publicationState(process.env);
if (state.issues.length) {
  console.error(
    "Not ready for publication:\n" +
      state.issues.map((issue) => `- ${issue}`).join("\n"),
  );
  process.exitCode = 1;
} else {
  console.log(
    `Content ready for ${state.siteUrl}. Set PORTFOLIO_PUBLIC=true when building the public release.`,
  );
}
