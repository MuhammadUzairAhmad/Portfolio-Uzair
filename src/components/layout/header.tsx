"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "@/components/theme/toggle";
import { profile } from "@/content/profile";
const links = [
  { href: "/#services", label: "Services", description: "How I can help" },
  { href: "/work", label: "Work", description: "Projects & case studies" },
  {
    href: "/tools",
    label: "Tools",
    description: "Personal projects & useful tools",
  },
  { href: "/about", label: "About", description: "Experience & approach" },
  {
    href: "/contact",
    label: "Contact",
    description: "Projects, roles & conversations",
  },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
  }
  return (
    <header
      className="relative z-20 border-b border-border bg-background"
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          trigger.current?.focus();
        }
      }}
    >
      {open && (
        <button
          type="button"
          tabIndex={-1}
          aria-label="Dismiss navigation"
          onClick={close}
          className="fixed inset-x-0 bottom-0 top-[76px] z-10 bg-black/30 md:hidden"
        />
      )}
      <Container className="relative z-20 flex h-[76px] items-center justify-between gap-4 bg-background">
        <Link
          href="/"
          aria-label="Uzair — home"
          className="text-2xl font-extrabold tracking-[-.06em]"
          onClick={close}
        >
          UZAIR<span className="text-primary">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "page"
                  : undefined
              }
              className="text-xs text-foreground transition-colors hover:text-primary aria-[current=page]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.resume.href}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-md border border-border px-3 text-xs font-medium hover:bg-surface sm:inline-flex"
          >
            <FileText size={14} aria-hidden />
            Résumé
          </a>
          <ThemeToggle />
          <button
            ref={trigger}
            type="button"
            className="flex size-11 items-center justify-center rounded-lg border border-border transition-colors duration-200 hover:bg-surface aria-expanded:border-primary/40 aria-expanded:bg-accent aria-expanded:text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="absolute inset-x-0 top-full z-20 px-3 pt-2 md:hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-100px)] max-w-xl overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background p-3 shadow-xl motion-safe:animate-[navigation-in_180ms_ease-out]"
          >
            <p className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[.18em] text-muted-foreground">
              Explore
            </p>
            <div className="space-y-1">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface aria-[current=page]:bg-accent aria-[current=page]:text-primary"
                  >
                    <span>
                      <span className="block text-base font-medium">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-primary"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 border-t border-border pt-3">
              <a
                href={profile.resume.href}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface text-sm font-medium transition-colors hover:bg-accent"
              >
                <FileText size={16} aria-hidden /> View résumé{" "}
                <span className="text-xs text-muted-foreground">PDF</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
