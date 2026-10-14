import Section from "@/components/ui/Section";
import { organizers, sponsors } from "@/lib/content";

export default function Sponsors() {
  return (
    <Section
      id="organizan"
      eyebrow="Impulsores"
      title="Quienes hacen posible el evento"
      description="Empresas y organizaciones que apuestan por la comunidad tecnológica de Tandil."
    >
      <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-brand-400">
        Organizan
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {organizers.map((org) => (
          <article key={org.name} className="card card-hover flex flex-col p-6">
            <span className="w-fit rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 font-mono text-[11px] uppercase text-brand-300">
              {org.tag}
            </span>
            <h4 className="mt-4 font-semibold text-white">{org.name}</h4>
            <p className="mt-1 font-mono text-xs text-zinc-500">{org.url}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              {org.description}
            </p>
          </article>
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-mono text-sm uppercase tracking-[0.2em] text-brand-400">
        Acompañan
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor}
            className="card flex h-20 items-center justify-center px-4 text-center"
          >
            <span className="text-sm font-medium text-zinc-400">{sponsor}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
