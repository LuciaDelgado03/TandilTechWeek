import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12">
      <div className="bg-grid mask-fade absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-400">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
