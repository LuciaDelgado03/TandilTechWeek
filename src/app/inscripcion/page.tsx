import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import RegisterForm from "@/components/forms/RegisterForm";
import { event } from "@/lib/content";

export const metadata: Metadata = {
  title: "Inscripción",
  description: "Sumate a Tandil Tech Week: elegí tu jornada y reservá tu lugar.",
};

export default function InscripcionPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Inscripciones ${event.year}`}
        title="Reservá tu lugar"
        description={`${event.dates} de ${event.hours} · Inscripción gratuita con cupos limitados.`}
      />
      <div className="px-6 pb-24">
        <RegisterForm />
      </div>
    </>
  );
}
