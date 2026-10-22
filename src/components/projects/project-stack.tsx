import { Badge } from "@/components/ui/badge";

export function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <ul aria-label="Project technologies" className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech}>
          <Badge>{tech}</Badge>
        </li>
      ))}
    </ul>
  );
}
