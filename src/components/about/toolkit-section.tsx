import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Wrench,
  CheckCheck,
  Plug,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { toolkitGroups } from "@/content/toolkit";
const icons = {
  frontend: Monitor,
  backend: Server,
  data: Database,
  mobile: Smartphone,
  workflow: Wrench,
  quality: CheckCheck,
  integrations: Plug,
};
export function ToolkitSection() {
  return (
    <section id="toolkit" className="scroll-mt-6">
      <Container className="border-b border-border py-7">
        <SectionHeading
          eyebrow="Libraries & tools"
          title="My development toolkit"
          description="Experience across products, platforms, and delivery workflows."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {toolkitGroups.map((group) => {
            const Icon = icons[group.id as keyof typeof icons];
            return (
              <article
                key={group.id}
                className="rounded-xl border border-border bg-surface/25 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-primary"
                    aria-hidden
                  />
                  <h3 className="text-lg">{group.title}</h3>
                </div>
                <p className="mb-5 mt-2 text-xs text-muted-foreground">
                  {group.description}
                </p>
                <dl>
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1.5 border-t border-border py-3 sm:grid-cols-[130px_1fr] sm:gap-4"
                    >
                      <dt className="text-[11px] font-medium text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="text-xs leading-relaxed">
                        {row.items.join(" · ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
