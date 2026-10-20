# Existing company logo assets

These are optimized copies of the company artwork supplied in the old portfolio. No logos were generated, substituted from the internet, or redrawn. Original files remain unchanged in `/home/uzairahmad/Desktop/portfolio/public/companies-logo/`.

| Company        | Original file            | New public asset                        | Dimensions |  Bytes |
| -------------- | ------------------------ | --------------------------------------- | ---------- | -----: |
| Sofrix         | `sofrix-logo.svg`        | `/images/companies/sofrix.webp`         | 512 × 138  |  3,060 |
| Weiblocks      | `weiblocks.svg`          | `/images/companies/weiblocks.webp`      | 246 × 256  | 45,166 |
| Strategist HUB | `startegisthub-logo.svg` | `/images/companies/strategist-hub.webp` | 512 × 95   |  4,320 |
| Netixsol       | `netixSol-logo.svg`      | `/images/companies/netixsol.webp`       | 512 × 168  | 21,086 |

All outputs use lossless WebP with alpha transparency, keeping supplied artwork proportions and colors. The SVGs were rasterized at high density and reduced to bounded display dimensions; the four files total 73,632 bytes (about 72 KiB).

## Source-specific notes

- The Weiblocks SVG is the asset actually referenced by the old portfolio. It preserves the colorful geometric symbol with transparency; the alternative PNG includes a large white surround and purple square backdrop. Only transparent outer padding was trimmed from the selected SVG so the symbol is legible in a small company-logo slot. Its traced edges are part of the supplied source.
- Strategist HUB includes white lettering. Display the complete wordmark on a consistent dark backing in both themes rather than applying a filter that changes brand colors.
- The Netixsol source uses JSX-style `stopColor` attributes instead of valid SVG `stop-color`. Those attributes were normalized in memory during conversion to preserve the supplied cyan, magenta, and blue gradient stops. The original source is untouched. The old site used a CSS filter that made this logo monochrome white; the exported file preserves the gradient artwork defined by the source instead.
- `1755684889964.jpeg` is a 1950 × 8192 full-page screenshot of the old portfolio, not a company logo. It was not migrated as a logo.
- No identifiable SJ Empowers company logo was found. Keep its textual/initials fallback until an approved company asset is supplied.

Conversion used the existing Sharp dependency. No new runtime dependency is required.
