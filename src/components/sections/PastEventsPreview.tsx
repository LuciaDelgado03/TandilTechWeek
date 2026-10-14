import Link from "next/link";
import Section from "@/components/ui/Section";
import { pastEvents } from "@/lib/content";

export default function PastEventsPreview() {
  return (
    <Section id="ediciones" eyebrow="Historia" title="Ediciones anteriores">
      <div className="grid gap-6 md:grid-cols-2">
        {pastEvents.map((pastEvent) => (
          <Link
            key={pastEvent.year}
            href="/eventos-anteriores"
            className="card card-hover group relative overflow-hidden p-8"
          >
            <span className="absolute -right-4 -top-10 font-mono text-8xl font-bold text-white/[0.04]">
              {pastEvent.year}
            </span>

            <p className="font-mono text-xs uppercase tracking-widest text-brand-400">
              {pastEvent.date}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              {pastEvent.year} · {pastEvent.title}
            </h3>
            <p className="mt-2 font-mono text-sm text-zinc-500">
              {pastEvent.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {pastEvent.summary}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-brand-300 transition group-hover:gap-3">
              Ver la edición <span aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
