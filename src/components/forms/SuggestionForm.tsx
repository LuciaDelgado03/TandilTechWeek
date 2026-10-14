"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { inputClass, labelClass, selectClass } from "./fields";

const categories = [
  "Charla / conferencia",
  "Taller práctico",
  "Hackathon / desafío",
  "Panel de discusión",
  "Actividad de networking",
  "Otro formato",
];

export default function SuggestionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO (backend): enviar a POST /api/suggestions cuando esté conectado
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card mx-auto max-w-lg border-brand-500/40 p-10 text-center">
        <span className="text-4xl" aria-hidden>💡</span>
        <h2 className="mt-4 text-2xl font-bold text-white">¡Idea sugerida!</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Gracias por proponerla. La comunidad y el equipo organizador la van a
          revisar para las próximas ediciones.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm text-brand-300 underline-offset-4 hover:underline"
        >
          Sugerir otra idea
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card mx-auto max-w-lg space-y-5 p-8 sm:p-10"
    >
      <div>
        <label htmlFor="title" className={labelClass}>Título de tu idea *</label>
        <input id="title" name="title" required placeholder="Ej: Taller de IA aplicada" className={inputClass} />
      </div>

      <div>
        <label htmlFor="category" className={labelClass}>Tipo de actividad *</label>
        <select id="category" name="category" required defaultValue="" className={selectClass}>
          <option value="" disabled>Elegí una opción</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Contanos de qué se trata *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          placeholder="Describí la propuesta, a quién le sirve y por qué le sumaría al evento…"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="senderName" className={labelClass}>
            Tu nombre <span className="text-zinc-500">(opcional)</span>
          </label>
          <input id="senderName" name="senderName" placeholder="Anónimo ok 👌" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact" className={labelClass}>
            Email de contacto <span className="text-zinc-500">(opcional)</span>
          </label>
          <input id="contact" name="contact" type="email" placeholder="te@ejemplo.com" className={inputClass} />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-500 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-400 hover:shadow-glow"
      >
        Enviar sugerencia
      </button>

      <Badge className="w-full justify-center border-white/10 bg-transparent text-zinc-500">
        Demo · sin conexión al backend todavía
      </Badge>
    </form>
  );
}
