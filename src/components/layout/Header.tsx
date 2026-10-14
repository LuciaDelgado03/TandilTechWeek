"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { event } from "@/lib/content";

const navLinks = [
  { href: "/#jornadas", label: "Jornadas" },
  { href: "/#comunidad", label: "Comunidad" },
  { href: "/#startups", label: "Startups" },
  { href: "/#organizan", label: "Organizan" },
  { href: "/#faq", label: "FAQ" },
  { href: "/eventos-anteriores", label: "Ediciones" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo variant="mark" className="h-9 w-auto text-white" />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            {event.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-brand-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/inscripcion" size="md">
            Inscribirme
          </Button>
        </div>

        {/* Botón menú mobile */}
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <nav className="border-t border-white/5 bg-ink/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-brand-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/inscripcion"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Inscribirme
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}