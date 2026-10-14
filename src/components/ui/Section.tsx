import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  /** Fondo decorativo opcional (se renderiza detrás del contenido). */
  background?: ReactNode;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  background,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {background}
      <div className="relative mx-auto max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
