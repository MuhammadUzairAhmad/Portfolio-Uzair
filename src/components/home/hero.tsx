import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { getProject, projectHref } from "@/lib/content";
export function Hero() {
  const project = getProject(profile.heroProjectSlug);
  return (
    <section className="border-b border-border py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <Eyebrow>
              {profile.name} · {profile.role}
            </Eyebrow>
            <h1 className="mt-6">
              {profile.headline[0]}
              <br />
              <span className="font-serif text-[.81em] font-normal italic tracking-[-.065em] text-primary">
                {profile.headline[1]}
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {profile.introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/work">
                Explore my work <ArrowUpRight size={16} aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Let’s talk
              </ButtonLink>
            </div>
            <p className="mt-9 flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Based in {profile.location} · Working across time zones
            </p>
          </div>
          {project?.image && (
            <Link
              href={projectHref(project)}
              className="group block rounded-xl border border-border bg-surface p-4 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  Featured project / 01
                </span>
                <ArrowUpRight size={17} className="text-primary" aria-hidden />
              </div>
              <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
                <div
                  className="flex gap-1 border-b border-[#e8e8e8] bg-[#f6f6f6] px-3 py-2"
                  aria-hidden
                >
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className="size-1 rounded-full bg-[#c7c7c7]"
                    />
                  ))}
                </div>
                <Image
                  src={project.image.src}
                  alt={`${project.name} application interface`}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width:1280px) 500px, (min-width:1024px) 42vw, 90vw"
                  preload
                  className="h-auto w-full transition-transform duration-300 motion-safe:group-hover:scale-[1.015]"
                />
              </div>
              <div className="mt-5 flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-medium">{project.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <span className="font-mono text-[9px] text-muted-foreground">
                  {project.platform}
                </span>
              </div>
            </Link>
          )}
        </div>
        <a
          href="#services"
          className="mt-12 flex w-fit items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <ArrowDown size={13} aria-hidden />A little further down
        </a>
      </Container>
    </section>
  );
}
