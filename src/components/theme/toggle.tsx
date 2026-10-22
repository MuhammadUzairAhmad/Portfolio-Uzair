"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
const subscribe = () => () => {};
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";
  const label = `Switch to ${isDark ? "light" : "dark"} theme`;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
    >
      <span
        key={isDark ? "sun" : "moon"}
        className="inline-flex motion-safe:animate-[theme-icon-in_200ms_ease-out]"
      >
        {isDark ? (
          <Sun size={18} aria-hidden />
        ) : (
          <Moon size={18} aria-hidden />
        )}
      </span>
    </button>
  );
}
