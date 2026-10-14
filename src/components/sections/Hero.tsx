import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import { event, stats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Fondo interactivo: parallax al scrollear + cuadrados que se iluminan con el mouse */}
      <InteractiveGrid mouse speed={0.14} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:gap-8 md:pt-16">
        {/* Piedra movediza con el nombre, anclada a la izquierda */}
        <h1 className="animate-fadeUp">
          <Logo
            variant="full"
            className="mx-auto h-80 w-auto max-w-full text-white md:h-[30rem] lg:h-[34rem]"
          />
        </h1>

        {/* Texto a la derecha */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Badge className="animate-fadeUp [animation-delay:100ms]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {event.city} · Edición {event.year}
          </Badge>

          <p className="mt-6 max-w-xl animate-fadeUp text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl [animation-delay:200ms]">
            Un encuentro para{" "}
            <em className="text-gradient font-semibold not-italic">construir</em>{" "}
            lo que viene.
          </p>

          <p className="mt-5 max-w-lg animate-fadeUp text-base leading-relaxed text-zinc-400 [animation-delay:250ms]">
            {event.description}
          </p>

          <div className="mt-8 flex animate-fadeUp flex-col gap-3 sm:flex-row [animation-delay:300ms]">
            <Button href="/inscripcion" size="lg">
              Quiero participar
            </Button>
            <Button href="#jornadas" variant="outline" size="lg">
              Ver jornadas
            </Button>
          </div>

          {/* Métricas en fila */}
          <dl className="mt-10 grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-6 sm:max-w-md md:max-w-none">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
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
      </div>
    </section>
  );
}
