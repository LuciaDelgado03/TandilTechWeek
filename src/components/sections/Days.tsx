import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { days } from "@/lib/content";

export default function Days() {
  return (
    <Section
      id="jornadas"
      eyebrow="Agenda"
      title="Dos jornadas para construir y conectar"
      description="Una competencia técnica y un día para conectar. Elegí tu jornada o vení a las dos: cada una tiene su propio espíritu."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {days.map((day) => (
          <article
            key={day.num}
            className="card card-hover flex flex-col overflow-hidden p-8"
          >
            <div className="flex items-start justify-between">
              <Badge>{day.track}</Badge>
              <span className="font-mono text-4xl font-bold text-white/10">
                {day.num}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">{day.title}</h3>

            <div className="mt-3 space-y-1 font-mono text-sm text-brand-300">
              <p>{day.date} · {day.time}</p>
              <p className="text-zinc-400">{day.location}</p>
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
              {day.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {day.activities.map((activity) => (
                <li
                  key={activity}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                >
                  {activity}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/inscripcion" variant="outline" size="md">
                Quiero esta jornada →
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
