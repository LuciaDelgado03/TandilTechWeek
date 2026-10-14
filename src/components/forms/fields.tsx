export const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-brand-500/60 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition";

export const labelClass =
  "mb-1.5 block text-sm font-medium text-zinc-300";

export const selectClass = `${inputClass} appearance-none [&>option]:bg-ink`;

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}
