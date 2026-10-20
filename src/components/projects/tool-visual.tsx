import Image from "next/image";
import { cn } from "@/lib/cn";
import { toolArtwork } from "@/content/tool-art";
export function ToolVisual({
  kind,
  className,
  detailed = false,
  eager = false,
}: {
  kind?: "type" | "globe" | "blog";
  className?: string;
  detailed?: boolean;
  eager?: boolean;
}) {
  const artwork = toolArtwork[kind ?? "blog"];
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate flex h-36 items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-[15%] -z-10 rounded-full bg-[#aca779]/10 blur-2xl dark:bg-[#b0c263]/10" />
      <Image
        src={artwork.src}
        width={artwork.width}
        height={artwork.height}
        alt=""
        preload={eager}
        sizes={
          detailed
            ? "(min-width:1280px) 520px, (min-width:768px) 45vw, 90vw"
            : "(min-width:1024px) 320px, (min-width:640px) 30vw, 90vw"
        }
        className="relative h-full w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.035]"
      />
    </div>
  );
}
