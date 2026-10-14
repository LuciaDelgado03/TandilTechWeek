import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import { event } from "@/lib/content";

export default function RegisterCta() {
  return (
    <Section
      id="inscripcion"
      className="border-t border-white/5"
      background={<InteractiveGrid speed={0.08} />}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-400">
          Inscripciones {event.year}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Construyamos juntos{" "}
          <em className="text-gradient not-italic">lo que viene</em>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
          Sumate a una jornada o a las dos. Cupos limitados, inscripción gratuita.
        </p>
        <div className="mt-10">
          <Button href="/inscripcion" size="lg">
            Inscribirme ahora
          </Button>
        </div>
        <p className="mt-8 font-mono text-xs text-zinc-500">
          {event.hours} · {event.city} · Entrada gratuita
        </p>
      </div>
    </Section>
  );
}
