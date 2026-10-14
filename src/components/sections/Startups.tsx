import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { startups } from "@/lib/content";

export default function Startups() {
  return (
    <Section
      id="startups"
      eyebrow="Ecosistema"
      title="Startups participantes"
      description="Empresas y proyectos que hacen crecer el ecosistema local y vienen a compartir su experiencia."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {startups.map((startup) => (
          <div
            key={startup.name}
            className="card card-hover flex flex-col items-center gap-3 p-6 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/40 to-brand-300/20 font-mono text-sm font-bold text-brand-200">
              {startup.initials}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{startup.name}</p>
              <p className="mt-0.5 font-mono text-xs text-brand-300/80">
                {startup.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/sugerencias" variant="ghost" size="md">
          ¿Querés participar con tu proyecto? Dejanos tu propuesta →
        </Button>
      </div>
    </Section>
  );
}
