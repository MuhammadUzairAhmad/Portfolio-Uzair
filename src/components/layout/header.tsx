"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./container";
import { ThemeToggle } from "@/components/theme/toggle";
import { buttonClasses } from "@/components/ui/button";
const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
  }
  return (
    <header
      className="relative z-20 border-b border-border bg-background"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          trigger.current?.focus();
        }
      }}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Uzair — home"
          className="text-xl font-bold tracking-[-.06em]"
          onClick={close}
        >
          UZAIR<span className="text-primary">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className={buttonClasses({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
            onClick={close}
          >
            Let’s talk <ArrowUpRight size={13} aria-hidden />
          </Link>
          <button
            ref={trigger}
            type="button"
            className="flex size-11 items-center justify-center rounded-md border border-border md:hidden"
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
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col py-5">
            {[...links, { href: "/contact", label: "Get in touch" }].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-border py-4 text-sm last:border-0"
                >
                  {link.label}
                </Link>
              ),
            )}
          </Container>
        </nav>
      )}
    </header>
  );
}
