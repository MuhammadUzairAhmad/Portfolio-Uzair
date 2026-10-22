import type { Decision } from "@/types/content";

export function ProjectDecisions({ decisions }: { decisions: Decision[] }) {
  const confirmed = decisions.filter((item) => !item.demo);
  if (!confirmed.length) return null;
  return (
    <ul
      aria-label="Key decisions"
      className={
        confirmed.length > 1 ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"
      }
    >
      {confirmed.map((item) => (
        <li
          key={item.topic}
          className="rounded-xl border border-border bg-surface/30 p-5"
        >
          <h3 className="text-base text-primary">{item.topic}</h3>
          {item.context && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.context}
            </p>
          )}
          <p className="mt-3 text-sm font-medium leading-relaxed">
            {item.choice}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              Why it matters:{" "}
            </span>
            {item.reason}
          </p>
        </li>
      ))}
    </ul>
  );
}
