# Asset provenance and demo content

## Project screenshots

Source: the existing portfolio at `../portfolio/public/mock-ups/`. These six images are existing project mockups, not newly generated or substituted screenshots. Visual contents were preserved; only proportional resizing and WebP compression were applied.

Each original is 1640 x 924 PNG. Outputs are 1440 x 811 WebP, quality 84, generated with Sharp. No asset package was added to the application.

| Original filename                | Public output                                       | PNG bytes | WebP bytes |
| -------------------------------- | --------------------------------------------------- | --------: | ---------: |
| `Bitlux.png`                     | `/images/projects/bitlux.webp`                      |   419,956 |     27,506 |
| `linxx-app.png`                  | `/images/projects/linxx.webp`                       |   477,364 |     33,396 |
| `skill-match.png`                | `/images/projects/skillmatch.webp`                  |   717,477 |     48,920 |
| `hestiya-marketplace.png`        | `/images/projects/hestiya.webp`                     |   642,815 |     48,046 |
| `gaming-platfrom.png`            | `/images/projects/gaming-platform.webp`             |   469,077 |     29,942 |
| `development-solution-group.png` | `/images/projects/development-solutions-group.webp` |   846,826 |     45,980 |

Combined source size: 3,573,515 bytes. Combined output size: 233,790 bytes (93.5% smaller). Responsive image delivery can further size these for the viewport. The original portfolio assets were not modified.

## Demo resume

Historical record: the generated `public/documents/uzair-resume-demo.pdf` was replaced on 20 October 2026 by the owner’s updated two-page PDF. The old generated file is no longer served. The following paragraphs record its original provenance. It was an explicitly labeled one-page DEMO, not a publication-ready resume. Profile source: `../portfolio/about-me.md`. It contains the documented name, role, contact links, employer/role summaries, capabilities, and education. Pakistan was requested as the profile location. No new performance metrics or current employment claim were invented. Dates for employment were deliberately omitted pending confirmation.

A prominent demo banner and footer instruct the owner to verify and replace it before publication. Keep the demo label on any website download link until replacement. Update this file directly or generate a final resume with confirmed details, then update the centrally defined profile download URL.

Validation: PDF rendered with Poppler and visually reviewed at full-page resolution; single-page size and text extraction checked. WebP dimensions and file sizes verified with Sharp metadata.

## Flat application screenshots

Additional screenshots were taken from the existing `../portfolio/public/project-model-image/` assets. Both source images were visually inspected and preserve the actual application interface, with no replacement/generated UI, cropping, or content editing. Proportional resizing only, maximum 1440 px width without upscaling, WebP quality 88. These support a flat browser-frame presentation.

| Source              | Public output                         | Source dimensions | Output dimensions | Source bytes | Output bytes |
| ------------------- | ------------------------------------- | ----------------- | ----------------- | -----------: | -----------: |
| `bitlux-2.png`      | `/images/projects/bitlux-screen.webp` | 1169 x 832        | 1169 x 832        |       67,895 |       49,492 |
| `linxx-desktop.png` | `/images/projects/linxx-screen.webp`  | 1688 x 936        | 1440 x 798        |       65,079 |       53,958 |

## Reference alignment presentation

The existing optimized mockup artwork is now displayed through inline SVG clip paths to match the overlapping device presentation in the approved design. Its application screen pixels remain those of the original artwork. Device stands are drawn as simple SVG frame elements. No Three.js or client animation runtime is involved. A project without a matching `mockup` falls back to its ordinary `image` asset.

The additional Caveat Latin font (400) is self-hosted through `next/font/local` for the handwritten annotations. Both normal and italic Libre Baskerville faces are used so numbers, monograms, and the italic hero match their respective treatments.

## Tool preview illustrations

Created with the built-in ImageGen tool from the supplied connected-pages reference board. These are decorative product illustrations, not screenshots of the tools. Exact prompts and original generation paths are saved in [TOOL-ART-PROMPTS.md](TOOL-ART-PROMPTS.md). GlobePick's geography is stylized artwork, not map data.

| Public output                             | Dimensions |  Bytes |
| ----------------------------------------- | ---------- | -----: |
| `/images/tools/typespark-preview-v2.webp` | 900 × 675  | 43,140 |
| `/images/tools/globepick-preview-v2.webp` | 900 × 675  | 44,936 |
| `/images/tools/blogsite-preview-v2.webp`  | 900 × 675  | 65,384 |

All three have a real alpha channel; transparent backgrounds were preserved during proportional resizing and WebP encoding with Sharp. Combined source size: 153,460 bytes (about 150 KiB). Responsive Next.js image variants are used; the first Tools archive image and tool detail hero are preloaded, with other tool images lazy by default. No 3D or animation runtime was added.

## Résumé and project-gallery migration

The owner's `Uzair-MERN-Stack-Resume.pdf` was copied unchanged to `public/documents/uzair-mern-stack-resume.pdf` (138,238 bytes, two pages). Both pages were rendered and read; no PDF editing or content rewriting was performed.

Eleven original screenshots from `../portfolio/public/project-model-image/` are now available in project galleries. Images were visually inspected and only proportionally resized (maximum width 1440, no upscaling) and encoded to WebP quality 88. The two existing flat exports are reused. No screenshot content was generated or replaced.

| Original                       | Output                                                 | Dimensions | Output bytes |
| ------------------------------ | ------------------------------------------------------ | ---------- | -----------: |
| `bitlux-2.png`                 | `/images/projects/bitlux-screen.webp`                  | 1169 × 832 |       49,492 |
| `bitlux-3.png`                 | `/images/projects/gallery/bitlux-request-detail.webp`  | 1169 × 832 |       45,452 |
| `bitlux-login.png`             | `/images/projects/gallery/bitlux-login.webp`           | 1169 × 832 |       76,106 |
| `bitlux.png`                   | `/images/projects/gallery/bitlux-requests-table.webp`  | 1169 × 832 |       51,652 |
| `linxx-desktop.png`            | `/images/projects/linxx-screen.webp`                   | 1440 × 798 |       53,958 |
| `linxx-tablet-admin.png`       | `/images/projects/gallery/linxx-admin-wide.webp`       | 1440 × 798 |       54,544 |
| `linxx-desktop-admin.png`      | `/images/projects/gallery/linxx-brand-admin.webp`      | 768 × 1312 |       64,394 |
| `linxx-mobile-app-home.png`    | `/images/projects/gallery/linxx-mobile-discovery.webp` | 387 × 838  |       30,744 |
| `linxx-mobile-app-earning.png` | `/images/projects/gallery/linxx-mobile-earnings.webp`  | 387 × 838  |       23,982 |
| `linxx-mobile-app-profile.png` | `/images/projects/gallery/linxx-mobile-profile.webp`   | 387 × 838  |       30,776 |
| `linxx-tablet.png`             | `/images/projects/gallery/linxx-tablet-jobs.webp`      | 768 × 1152 |       65,510 |

All eleven exports total 546,610 bytes, including the two reused files. The nine new files total 443,160 bytes. Gallery images use responsive Next.js delivery and lazy loading. There are no additional gallery scripts or dependencies.

No MP4, WebM, MOV, M4V, or MKV project recordings were found when searching the old portfolio outside dependency, Git, and build folders. Its unrelated confetti GIF was not migrated as project evidence. The gallery accepts real video records once supplied.
