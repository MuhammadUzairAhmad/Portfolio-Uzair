"use client";
import { useState } from "react";
import { PlayCircle, Expand } from "lucide-react";
import type { PortfolioProject } from "@/types/content";
import { MediaLightbox } from "./media-lightbox";
export function ProjectWalkthroughs({
  id,
  recordings,
}: {
  id: string;
  recordings: NonNullable<PortfolioProject["walkthroughs"]>;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section id={id} className="mt-8 scroll-mt-6">
      <h3 className="text-lg">See it in action</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Watch a project walkthrough without leaving this page.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {recordings.map((recording, index) => (
          <button
            type="button"
            key={recording.url}
            onClick={() => setSelected(index)}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-left transition-colors hover:border-primary"
          >
            <PlayCircle
              className="shrink-0 text-primary"
              size={24}
              aria-hidden
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold">
                {recording.label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Play video · {recording.provider}
              </span>
            </span>
            <Expand size={15} className="shrink-0" aria-hidden />
          </button>
        ))}
      </div>
      {selected !== null && (
        <MediaLightbox
          items={recordings.map((r) => ({
            kind: "loom",
            url: r.url,
            caption: r.label,
          }))}
          index={selected}
          onIndexChange={setSelected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
