import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProviderShell } from "@/components/theme/provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { contentSettings } from "@/content/profile";
import "./globals.css";
const body = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
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
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${body.variable} ${editorial.variable}`}>
        <ThemeProviderShell>
          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-50 rounded-md bg-primary p-3 text-sm text-primary-foreground focus:not-sr-only"
          >
            Skip to content
          </a>
          {contentSettings.demoMode && (
            <div className="border-b border-border bg-surface px-4 py-2 text-center font-mono text-[9px] tracking-wide text-muted-foreground">
              PORTFOLIO PREVIEW · Demo copy is labeled.
            </div>
          )}
          <Header />
          {children}
          <Footer />
        </ThemeProviderShell>
      </body>
    </html>
  );
}
