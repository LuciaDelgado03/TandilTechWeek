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
            <div className="flex items-start justify-between gap-3">
              {org.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-9 w-9 rounded-lg object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 font-mono text-sm font-bold text-brand-300">
                  {org.name.charAt(0)}
                </span>
              )}
              <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 font-mono text-[11px] uppercase text-brand-300">
                {org.tag}
              </span>
            </div>
            <h4 className="mt-4 font-semibold text-white">
              {org.url !== "#" ? (
                <a href={org.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-300">
                  {org.name}
                </a>
              ) : (
                org.name
              )}
            </h4>
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover flex h-24 items-center justify-center gap-3 px-6"
          >
            {sponsor.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-medium text-zinc-300">{sponsor.name}</span>
            )}
          </a>
        ))}
      </div>
    </Section>
  );
}
