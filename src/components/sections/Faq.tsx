import Section from "@/components/ui/Section";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Preguntas frecuentes">
      <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.02]">
        {faqs.map((faq) => (
          <details key={faq.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-white [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span
                aria-hidden
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-xs text-brand-300 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
