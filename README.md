# Tandil Tech Week 🌿

Landing page para **Tandil Tech Week** — un encuentro anual para unir estudiantes,
programadores y profesionales del ámbito tech de Tandil, con el objetivo de inspirar
y generar la comunidad de la que surgen nuevos proyectos.

> Un encuentro para *construir lo que viene*.

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Fuentes Geist (locales, sin dependencias de red)

## Cómo correr

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Landing: hero, jornadas, comunidad, startups, sponsors, CTA de ideas, FAQ, ediciones anteriores, inscripción |
| `/inscripcion` | Formulario de inscripción (demo) |
| `/sugerencias` | Formulario para proponer ideas para próximos eventos (demo) |
| `/eventos-anteriores` | Historia del evento con línea de tiempo |

## Editar el contenido

Casi todo el texto y los datos viven en **`src/lib/content.ts`**. Cambiando ese
archivo se actualiza todo el sitio (nombre, fechas, jornadas, startups, sponsors,
FAQ, ediciones anteriores).

⚠️ Los datos marcados como **PLACEHOLDER** son de ejemplo y deben reemplazarse:
startups y ediciones anteriores. Los organizadores y sponsors son **datos reales**
tomados de tandiltechweek.com, con logos en `public/logos/`.

## Identidad

- Verde de marca: `#0cd325` (escala `brand` en `tailwind.config.ts`).
- Logo: silueta de la Piedra Movediza (`src/components/ui/Logo.tsx`), favicon en `src/app/icon.svg`.
- Tipografía display del wordmark: **Chakra Petch** (600/700, bundlada en `src/app/fonts/`).

## Estado / próximos pasos

- [x] Front completo con diseño responsive (desktop y mobile)
- [x] Formularios funcionan en modo demo (validación y pantalla de éxito)
- [ ] **Backend**: base de datos + API para guardar inscripciones y sugerencias
- [ ] Reemplazar placeholders por contenido real (logos, fotos, textos)
- [ ] SEO: imágenes Open Graph, sitemap

## Estructura

```
src/
├── app/                  # Páginas (App Router)
│   ├── page.tsx          # Landing
│   ├── inscripcion/
│   ├── sugerencias/
│   └── eventos-anteriores/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Secciones de la landing
│   ├── forms/            # Formularios (client components)
│   └── ui/               # Button, Section, Badge, PageHeader
└── lib/
    └── content.ts        # ⭐ Todo el contenido editable
```
