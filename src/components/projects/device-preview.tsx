import Image from "next/image";
import { useId } from "react";
import type { PortfolioProject } from "@/types/content";
import { cn } from "@/lib/cn";
// The original device artwork is presented through vector clipping, preserving its real screens.
export function DevicePreview({
  project,
  className,
  compact = false,
}: {
  project: PortfolioProject;
  className?: string;
  compact?: boolean;
}) {
  const id = useId().replaceAll(":", "");
  if (!project.mockup)
    return project.image ? (
      <Image
        src={project.image.src}
        width={project.image.width}
        height={project.image.height}
        alt={`${project.name} application interface`}
        sizes="(min-width:1024px) 600px, 90vw"
        className={cn("h-full w-full rounded-lg object-contain", className)}
      />
    ) : (
      <div
        aria-hidden="true"
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg bg-accent/40 p-5",
          className,
        )}
      >
        <span className="font-serif text-5xl text-primary">
          {project.name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {project.platform}
        </span>
      </div>
    );
  const bitlux = project.slug === "bitlux";
  return (
    <svg
      viewBox={compact ? "180 170 1020 590" : "120 165 1440 590"}
      role="img"
      aria-label={`${project.name} responsive device previews`}
      className={cn(
        "h-full w-full overflow-hidden drop-shadow-[0_12px_14px_#00000018]",
        className,
      )}
    >
      <defs>
        <clipPath id={id}>
          <rect x="259" y="201" width="634" height="444" rx="30" />
          <path d="M505 642H652L663 688Q665 700 684 703L686 709H466L469 704Q496 702 499 685Z" />
          <rect x="837" y="269" width="609" height="411" rx="27" />
          <path d="M768 676H1515V688Q1515 697 1501 697H782Q768 697 768 688Z" />
          {bitlux ? (
            <rect x="159" y="367" width="257" height="342" rx="32" />
          ) : (
            <>
              <rect x="734" y="367" width="255" height="342" rx="32" />
              <rect x="198" y="456" width="124" height="250" rx="22" />
            </>
          )}
        </clipPath>
      </defs>
      <image
        href={project.mockup}
        x="0"
        y="0"
        width="1640"
        height="924"
        clipPath={`url(#${id})`}
      />
      <path
        d="M505 643H652L663 688Q665 700 684 703L686 709H466L469 704Q496 702 499 685Z"
        fill="#b9b9b9"
      />
    </svg>
  );
}
