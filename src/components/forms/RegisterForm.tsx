"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { days } from "@/lib/content";
import { inputClass, labelClass, selectClass } from "./fields";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (title: string) =>
    setSelectedDays((prev) =>
      prev.includes(title)
        ? prev.filter((d) => d !== title)
        : [...prev, title]
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO (backend): enviar a POST /api/register cuando esté conectado
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card mx-auto max-w-lg border-brand-500/40 p-10 text-center">
        <span className="text-4xl" aria-hidden>🎉</span>
        <h2 className="mt-4 text-2xl font-bold text-white">¡Inscripción enviada!</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Gracias por sumarte. Te vamos a contactar por correo para confirmar
          tu lugar.
        </p>
        <p className="mt-4 font-mono text-xs text-brand-300">
          {selectedDays.length > 0
            ? `Elegiste: ${selectedDays.join(" + ")}`
            : "Sin jornada elegida aún"}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm text-brand-300 underline-offset-4 hover:underline"
        >
          Hacer otra inscripción
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card mx-auto max-w-lg space-y-5 p-8 sm:p-10"
      noValidate={false}
    >
      <div>
        <label htmlFor="name" className={labelClass}>Nombre y apellido *</label>
        <input id="name" name="name" required placeholder="Ej: Ada Torres" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input id="email" name="email" type="email" required placeholder="ada@ejemplo.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="role" className={labelClass}>Sos… *</label>
        <select id="role" name="role" required defaultValue="" className={selectClass}>
          <option value="" disabled>Elegí una opción</option>
          <option>Estudiante</option>
          <option>Programador / Profesional</option>
          <option>Docente / Investigador</option>
          <option>Emprendedor</option>
          <option>Otro</option>
        </select>
      </div>

      <fieldset>
        <legend className={labelClass}>¿A qué jornada querés venir?</legend>
        <div className="space-y-2.5">
          {days.map((day) => (
            <label
              key={day.num}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-brand-500/40"
            >
              <input
                type="checkbox"
                checked={selectedDays.includes(day.title)}
                onChange={() => toggleDay(day.title)}
                className="h-4 w-4 accent-brand-500"
              />
              <span className="flex-1">
                <span className="block text-sm font-medium text-white">{day.title}</span>
                <span className="block font-mono text-xs text-zinc-500">
                  {day.date} · {day.location}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Contanos qué te interesa <span className="text-zinc-500">(opcional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Intereses, expectativas, cómo llegaste al evento…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-500 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-400 hover:shadow-glow"
      >
        Enviar inscripción
      </button>

      <Badge className="w-full justify-center border-white/10 bg-transparent text-zinc-500">
        Demo · sin conexión al backend todavía
      </Badge>
    </form>
  );
}
