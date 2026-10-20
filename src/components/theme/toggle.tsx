"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  return (
    <label className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background hover:bg-surface focus-within:ring-2 focus-within:ring-ring">
      <span className="sr-only">Color theme</span>
      <Sun size={16} className="dark:hidden" aria-hidden />
      <Moon size={16} className="hidden dark:block" aria-hidden />
      <select
        aria-label="Color theme"
        title="Choose light, dark, or system theme"
        className="absolute inset-0 w-full cursor-pointer appearance-none rounded-full opacity-0"
        value={mounted ? (theme ?? "system") : "system"}
        disabled={!mounted}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
