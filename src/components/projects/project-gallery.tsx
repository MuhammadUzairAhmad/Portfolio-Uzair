import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectMedia } from "@/types/content";
export function ProjectGallery({
  projectName,
  media,
}: {
  projectName: string;
  media?: ProjectMedia[];
}) {
  if (!media?.length) return null;
  return (
    <section
      id="gallery"
      aria-label={`${projectName} screenshots and walkthroughs`}
      className="mt-7 scroll-mt-6 border-t border-border pt-6"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <h3 className="text-lg">Screenshots & walkthroughs</h3>
        <p className="text-xs text-muted-foreground">
          Select an image to view it full size.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item, index) => (
          <figure
            key={item.src}
            className="min-w-0 overflow-hidden rounded-xl border border-border bg-surface/40"
          >
            {item.kind === "image" ? (
              <a
                href={item.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full-size image: ${item.alt}`}
                className="group relative flex aspect-[4/3] items-center justify-center bg-surface p-3"
              >
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 90vw"
                  className="h-full w-full object-contain transition-transform duration-200 motion-safe:group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-2 right-2 rounded-md border border-border bg-background p-2 text-primary">
                  <ArrowUpRight size={14} aria-hidden />
                </span>
              </a>
            ) : (
              <div>
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={item.poster}
                  width={item.width}
                  height={item.height}
                  aria-label={`${projectName}: ${item.caption}`}
                  className="aspect-video w-full bg-surface object-contain"
                >
                  <source
                    src={item.src}
                    type={
                      item.src.endsWith(".webm") ? "video/webm" : "video/mp4"
                    }
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
                  Your browser cannot play this video.{" "}
                  <a href={item.src}>Download the walkthrough</a>.
                </video>
                {item.transcript && (
                  <details className="px-4 pt-3 text-xs">
                    <summary className="cursor-pointer text-primary">
                      Video transcript
                    </summary>
                    <p className="mt-2 whitespace-pre-line leading-relaxed text-muted-foreground">
                      {item.transcript}
                    </p>
                  </details>
                )}
              </div>
            )}
            <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              <span className="mr-2 font-mono text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
