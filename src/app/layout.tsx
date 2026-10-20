import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProviderShell } from "@/components/theme/provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { publication } from "@/lib/seo";
import { profile } from "@/content/profile";
import "./globals.css";
export const ensureStatic = "navigation";
const body = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});
const handwriting = localFont({
  src: "../../node_modules/@fontsource/caveat/files/caveat-latin-400-normal.woff2",
  variable: "--font-handwriting",
  display: "swap",
  weight: "400",
});
const editorial = localFont({
  src: "../../node_modules/@fontsource/libre-baskerville/files/libre-baskerville-latin-400-italic.woff2",
  variable: "--font-editorial",
  display: "swap",
  weight: "400",
  style: "italic",
});
export const metadata: Metadata = {
  title: {
    default: "Muhammad Uzair Ahmad — Full-stack Developer",
    template: "%s | Muhammad Uzair Ahmad",
  },
  description:
    "Thoughtful web and mobile products, from interfaces to the systems behind them.",
  metadataBase: new URL(publication.siteUrl ?? "http://localhost:4337"),
  robots: { index: publication.isPublic, follow: publication.isPublic },
  openGraph: {
    type: "website",
    siteName: "Uzair — Full-stack Developer",
    title: "Muhammad Uzair Ahmad — Full-stack Developer",
    description:
      "Good ideas. Carefully built. Web and mobile products by Muhammad Uzair Ahmad.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${body.variable} ${editorial.variable} ${handwriting.variable}`}
      >
        <ThemeProviderShell>
          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-50 rounded-md bg-primary p-3 text-sm text-primary-foreground focus:not-sr-only"
          >
            Skip to content
          </a>
          {publication.isPublic && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: profile.name,
                  jobTitle: profile.role,
                  url: publication.siteUrl,
                  sameAs: [profile.github, profile.linkedin],
                }).replace(/</g, "\\u003c"),
              }}
            />
          )}
          <Header />
          {children}
          <Footer />
        </ThemeProviderShell>
      </body>
    </html>
  );
}
