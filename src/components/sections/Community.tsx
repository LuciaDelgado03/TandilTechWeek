import Section from "@/components/ui/Section";
import { community } from "@/lib/content";

export default function Community() {
  return (
    <Section id="comunidad" className="border-y border-white/5 bg-inkSoft/60">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-400">
            Comunidad
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {community.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {community.description}
          </p>
        </div>

        <div className="grid content-start gap-4">
          {community.pillars.map((pillar) => (
            <div key={pillar.title} className="card flex items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-xl">
                {pillar.icon}
              </span>
              <div>
                <h3 className="font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
