import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { event, stats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Fondo: grilla + halos verdes */}
      <div className="bg-grid mask-fade absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28">
        <Badge className="animate-fadeUp">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {event.dates} {event.year} · {event.city}
        </Badge>

        <h1 className="mt-8 animate-fadeUp font-mono text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl [animation-delay:100ms]">
          {event.name}
        </h1>

        <p className="mt-8 max-w-2xl animate-fadeUp text-lg leading-relaxed text-zinc-300 sm:text-xl [animation-delay:200ms]">
          Un encuentro para{" "}
          <em className="text-gradient font-semibold not-italic">construir</em>{" "}
          lo que viene.
        </p>

        <div className="mt-10 flex animate-fadeUp flex-col items-center gap-3 sm:flex-row [animation-delay:300ms]">
          <Button href="/inscripcion" size="lg">
            Quiero participar
          </Button>
          <Button href="#jornadas" variant="outline" size="lg">
            Ver jornadas
          </Button>
        </div>

        {/* Métricas */}
        <dl className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-ink/90 px-4 py-6">
              <dt className="order-2 mt-1 text-xs uppercase tracking-wider text-zinc-500">
                {stat.label}
              </dt>
              <dd className="order-1 font-mono text-2xl font-bold text-brand-300">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
