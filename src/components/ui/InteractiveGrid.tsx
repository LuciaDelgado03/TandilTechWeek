"use client";

import { useEffect, useRef } from "react";

type InteractiveGridProps = {
  className?: string;
  /** Los cuadrados se iluminan alrededor del cursor. */
  mouse?: boolean;
  /** Factor de parallax al scrollear (0 = estático). */
  speed?: number;
  /** Halo verde difuminado que se mueve con el parallax. */
  halo?: boolean;
};

/**
 * Fondo interactivo: grilla de cuadrados con parallax al scrollear
 * y, opcionalmente, un "foco" que ilumina los cuadrados cerca del cursor.
 * Solo usa transform + requestAnimationFrame: sin impacto de performance.
 */
export default function InteractiveGrid({
  className = "",
  mouse = false,
  speed = 0.12,
  halo = true,
}: InteractiveGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const glowHaloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    if (!root || !wrap) return;

    let raf = 0;

    // Parallax: el fondo se desplaza más lento que la página.
    const update = () => {
      raf = 0;
      const offset = root.getBoundingClientRect().top * speed;
      wrap.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Spotlight: máscara radial que sigue el mouse.
    let onMove: ((e: MouseEvent) => void) | null = null;
    if (mouse && glowRef.current) {
      onMove = (e: MouseEvent) => {
        const rect = root.getBoundingClientRect();
        const x = `${e.clientX - rect.left}px`;
        const y = `${e.clientY - rect.top}px`;
        for (const el of [glowRef.current, glowHaloRef.current]) {
          if (!el) continue;
          el.style.setProperty("--mx", x);
          el.style.setProperty("--my", y);
          el.style.opacity = "1";
        }
      };
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (onMove) window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mouse, speed]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Capa con parallax (sobredimensionada para no dejar bordes al moverse) */}
      <div ref={wrapRef} className="absolute inset-x-0 -top-40 -bottom-40 will-change-transform">
        {halo && (
          <div className="absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
        )}
        <div className="bg-grid absolute inset-0" />
      </div>

      {/* Cuadrados iluminados cerca del cursor */}
      {mouse && (
        <>
          <div
            ref={glowRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-500"
            style={{
              maskImage:
                "radial-gradient(190px circle at var(--mx, 50%) var(--my, 35%), black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(190px circle at var(--mx, 50%) var(--my, 35%), black 30%, transparent 75%)",
            }}
          >
            <div
              className="bg-grid absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(94,241,99,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(94,241,99,0.35) 1px, transparent 1px)",
              }}
            />
          </div>
          <div
            ref={glowHaloRef}
            className="absolute inset-0 opacity-0 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(240px circle at var(--mx, 50%) var(--my, 35%), rgba(12,211,37,0.14), transparent 70%)",
            }}
          />
        </>
      )}
    </div>
  );
}