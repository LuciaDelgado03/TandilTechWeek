import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InteractiveGrid from "@/components/ui/InteractiveGrid";

export default function SuggestionCta() {
  return (
    <Section
      className="border-y border-white/5 bg-inkSoft/60"
      background={<InteractiveGrid speed={0.08} />}
    >
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-500/20 bg-gradient-to-b from-brand-500/10 to-transparent px-8 py-14 text-center">
        <span className="animate-float text-4xl" aria-hidden>
          💡
        </span>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Tenés una idea para el próximo evento?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-zinc-400">
          Proponé una charla, un formato nuevo o un desafío diferente. Las ideas
          de la comunidad son la materia prima de cada edición.
        </p>
        <Button href="/sugerencias" size="lg">
          Proponer mi idea
        </Button>
      </div>
    </Section>
  );
}
