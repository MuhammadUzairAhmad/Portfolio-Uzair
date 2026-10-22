import type { Decision } from "@/types/content";

export function ProjectDecisions({ decisions }: { decisions: Decision[] }) {
  const confirmed = decisions.filter((item) => !item.demo);
  if (!confirmed.length) return null;
  return (
    <details className="group rounded-xl border border-border bg-surface/30">
      <summary className="cursor-pointer p-4 text-sm font-medium">
        Why these choices{" "}
        <span className="text-muted-foreground">({confirmed.length})</span>
      </summary>
      <ul className="grid gap-4 border-t border-border p-4 sm:grid-cols-2">
        {confirmed.map((item) => (
          <li key={item.topic}>
            <p className="text-xs font-medium text-primary">{item.topic}</p>
            <h3 className="mt-2 text-sm">{item.choice}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.reason}
            </p>
          </li>
        ))}
      </ul>
    </details>
  );
}
