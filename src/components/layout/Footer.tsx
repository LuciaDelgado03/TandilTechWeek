import Link from "next/link";
import { event } from "@/lib/content";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.6V22H.2V8.3zm7.6 0h4.4v1.9h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.1V22h-4.6v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H7.8V8.3z" />
    </svg>
  );
}

const socials = [
  { href: event.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: event.socials.x, label: "X", Icon: XIcon },
  { href: event.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 font-mono text-xs font-bold text-ink">
              {event.shortName}
            </span>
            <span className="text-sm font-semibold text-white">{event.name}</span>
          </div>
          <p className="font-mono text-xs text-zinc-500">
            {event.dates} {event.year} · {event.city}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          <Link href="/inscripcion" className="hover:text-brand-300">Inscripción</Link>
          <Link href="/sugerencias" className="hover:text-brand-300">Sugerencias</Link>
          <Link href="/eventos-anteriores" className="hover:text-brand-300">Ediciones anteriores</Link>
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-brand-500/40 hover:text-brand-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
