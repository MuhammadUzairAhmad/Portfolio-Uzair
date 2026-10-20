import Link from "next/link";
import { GridBackground } from "@/components/ui/grid-background";
import { preload } from "react-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { DevicePreview } from "@/components/projects/device-preview";
import { profile } from "@/content/profile";
import { getProject, projectHref } from "@/lib/content";
export function Hero() {
  const project = getProject(profile.heroProjectSlug);
  if (project?.mockup) preload(project.mockup, { as: "image" });
  return (
    <section className="relative isolate">
      <GridBackground size="small" />
      <Container className="grid items-center gap-5 border-b border-border py-10 md:grid-cols-[1.06fr_1fr] md:gap-4 md:py-12 lg:py-14">
        <div className="relative z-10">
          <Eyebrow className="max-w-64 leading-relaxed text-foreground">
            {profile.name}
            <br />
            {profile.role}
          </Eyebrow>
          <h1 className="mt-4">
            {profile.headline[0]}
            <br />
            <span className="font-serif text-[.83em] font-normal italic tracking-[-.07em] text-primary">
              {profile.headline[1]}
            </span>
          </h1>
          <p className="mt-5 max-w-[440px] text-base leading-[1.5] text-muted-foreground">
            {profile.introduction}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/work">
              Explore my work
              <ArrowRight size={15} aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Let’s talk
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin
              size={15}
              className="fill-primary text-primary"
              aria-hidden
            />
            {profile.location} / Working worldwide
          </p>
        </div>
        {project && (
          <Link
            href={projectHref(project)}
            prefetch
            className="relative isolate block aspect-[1.04] overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_60%_50%,#f0e5cd85,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_45%_55%,#b6cf5240,transparent_70%)]"
          >
            <div className="absolute right-7 top-6 z-10 flex items-center gap-4">
              <ArrowRight size={16} className="text-primary" aria-hidden />
              <div>
                <Eyebrow className="text-[8px]">Selected work</Eyebrow>
                <p className="text-lg font-semibold leading-tight">
                  {project.name}
                </p>
              </div>
            </div>
            <DevicePreview
              project={project}
              className="absolute bottom-[2%] left-[-1%] h-[81%] w-[147%] max-w-none"
            />
          </Link>
        )}
      </Container>
    </section>
  );
}
