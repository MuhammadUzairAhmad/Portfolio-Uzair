"use client";
import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { ProjectMedia } from "@/types/content";
import { loomEmbedUrl } from "@/lib/media";

export type ViewerItem =
  ProjectMedia | { kind: "loom"; url: string; caption: string };

export function MediaLightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: ViewerItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const item = items[index];
  useEffect(() => {
    const node = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    node?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      node?.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);
  function move(offset: number) {
    onIndexChange((index + offset + items.length) % items.length);
  }
  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      className="m-auto max-h-[94dvh] w-[calc(100%-1.5rem)] max-w-6xl overflow-y-auto rounded-2xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/80"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
      onKeyDown={(event) => {
        if (items.length < 2 || event.target instanceof HTMLIFrameElement)
          return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
        <h2
          id={titleId}
          className="min-w-0 text-sm leading-relaxed sm:text-base"
        >
          {item.caption}
        </h2>
        <button
          type="button"
          aria-label="Close media viewer"
          onClick={onClose}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border hover:bg-surface"
        >
          <X size={20} aria-hidden />
        </button>
      </div>
      <div className="bg-surface p-2 sm:p-4">
        {item.kind === "image" ? (
          <Image
            key={item.src}
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            sizes="(min-width:1280px) 1120px, 96vw"
            className="mx-auto max-h-[70dvh] w-full object-contain"
          />
        ) : item.kind === "loom" ? (
          <iframe
            key={item.url}
            src={loomEmbedUrl(item.url)}
            title={item.caption}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-video max-h-[70dvh] w-full rounded-lg border-0 bg-black"
          />
        ) : (
          <div>
            <video
              key={item.src}
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
              aria-label={item.caption}
              className="max-h-[70dvh] w-full"
            >
              <source
                src={item.src}
                type={item.src.endsWith(".webm") ? "video/webm" : "video/mp4"}
              />
              {item.captions && (
                <track
                  kind="captions"
                  src={item.captions.src}
                  srcLang={item.captions.language}
                  label={item.captions.label}
                  default
                />
              )}
            </video>
            {item.transcript && (
              <details className="p-4 text-sm">
                <summary>Video transcript</summary>
                <p className="mt-3 whitespace-pre-line">{item.transcript}</p>
              </details>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs text-muted-foreground sm:px-6">
        <p aria-live="polite">
          {index + 1} of {items.length}
          {item.kind === "loom" ? " · Hosted on Loom" : ""}
        </p>
        {items.length > 1 && (
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous media"
              onClick={() => move(-1)}
              className="flex size-11 items-center justify-center rounded-lg border border-border hover:bg-surface"
            >
              <ArrowLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next media"
              onClick={() => move(1)}
              className="flex size-11 items-center justify-center rounded-lg border border-border hover:bg-surface"
            >
              <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        )}
        {item.kind === "loom" && (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Playback trouble? Open on Loom
          </a>
        )}
      </div>
    </dialog>
  );
}
