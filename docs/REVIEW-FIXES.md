# Code review fixes — 22 October 2026

All three findings from the end-to-end code review are addressed.

- Clipboard failure: the full-width Contact control now displays its fallback instruction visibly and changes to “Try copying again”. Success feedback and the live region remain available.
- Formatting: formatted the flagged project-detail component; the full repository formatting check passed.
- Browser coverage: added 12 Chromium tests via Playwright. They cover clipboard success, permission denial and API absence; phone menu dismissal; filters; gallery navigation, native modal focus behavior and focus return; on-demand Loom embedding; persistent theme choice; reduced motion; and all 18 routes at 320px, 768px and 1280px. The Loom iframe is stubbed, so remote playback is outside this suite’s scope.

## Verification

- 24 existing Node tests passed.
- ESLint, repository formatting and production build/type checking passed.
- All 12 browser tests passed against the production build on an isolated local server (port 4338).
- The menu/gallery tests preserve native browser behavior. Chromium can briefly expose BODY as activeElement while tabbing through browser chrome at a native dialog boundary; the test verifies that the next Tab returns to the modal and never accepts focus on background page controls.

Run `npm run build` then `npm run test:e2e`; install Chromium once with `npx playwright install chromium`. README includes setup and CI instructions. Test reports, traces and screenshots are ignored by Git.

## Separate dependency advisory

The dependency audit reported five high-severity entries in the existing development-only ESLint dependency chain, all stemming from braces <=3.0.3 (GHSA-vfj7-8cjw-p6xm). The registry’s current braces release is 3.0.3; there is no compatible patched release available. The suggested npm force fix downgrades eslint-config-next to 14.2.35, so it was not applied to this Next.js 16 project. `npm audit --omit=dev` reports zero vulnerabilities. Revisit the development dependency chain when a compatible patch becomes available.

The résumé and public deployment configuration remain owner-deferred. Pre-existing uncommitted toolkit edits were preserved.
