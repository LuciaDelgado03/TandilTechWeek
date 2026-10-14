import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { pastEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ediciones anteriores",
  description: "La historia de Tandil Tech Week: ediciones pasadas, números y momentos destacados.",
};

export default function EventosAnterioresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Historia"
        title="Ediciones anteriores"
        description="Cada edición deja algo construido: proyectos, equipos y una comunidad más unida."
      />

      <div className="relative mx-auto max-w-3xl px-6 pb-24">
        {/* Línea del tiempo */}
        <div
          className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-brand-500/50 via-white/10 to-transparent"
          aria-hidden
        />

        <ol className="space-y-12">
          {[...pastEvents].reverse().map((pastEvent) => (
            <li key={pastEvent.year} className="relative pl-12">
              {/* Punto en la línea */}
              <span
                className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center"
                aria-hidden
              >
                <span className="absolute h-4 w-4 rounded-full bg-brand-500/20" />
                <span className="relative h-2 w-2 rounded-full bg-brand-400" />
              </span>

              <p className="font-mono text-xs uppercase tracking-widest text-brand-400">
                {pastEvent.date}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {pastEvent.year} · {pastEvent.title}
              </h2>
              <p className="mt-1 font-mono text-sm text-zinc-500">
                {pastEvent.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {pastEvent.summary}
              </p>

              <dl className="mt-6 flex flex-wrap gap-6">
                {pastEvent.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="order-2 text-xs uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </dt>
                    <dd className="font-mono text-2xl font-bold text-brand-300">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {pastEvent.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Fotos placeholder */}
              <div className="card mt-8 grid h-40 place-items-center">
                <span className="font-mono text-xs text-zinc-600">
                  FOTOS DE {pastEvent.year} · PLACEHOLDER
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-3xl border border-brand-500/20 bg-gradient-to-b from-brand-500/10 to-transparent p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            La próxima edición sos vos
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
            Sumate a la comunidad y ayudanos a construir la historia que viene.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/inscripcion">Inscribirme</Button>
            <Button href="/sugerencias" variant="outline">
              Proponer una idea
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
