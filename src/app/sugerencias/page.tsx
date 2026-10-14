import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SuggestionForm from "@/components/forms/SuggestionForm";

export const metadata: Metadata = {
  title: "Sugerencias",
  description: "Proponé una idea para las próximas ediciones de Tandil Tech Week.",
};

export default function SugerenciasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Abierto a la comunidad"
        title="Proponé una idea para el próximo evento"
        description="Charlas, talleres, desafíos o formatos nuevos: lo que se te ocurra. Tu idea puede ser la propuesta estrella de la próxima edición."
      />
      <div className="px-6 pb-24">
        <SuggestionForm />
      </div>
    </>
  );
}
