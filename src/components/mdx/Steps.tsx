import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="docs-steps">{children}</ol>;
}

export function Step({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <li className="docs-step">
      <p className="mb-1.5 mt-[0.2rem] text-[1.0625rem] font-semibold leading-snug text-foreground">{title}</p>
      {children}
    </li>
  );
}
