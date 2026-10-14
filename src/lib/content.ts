// ⚠️ DATOS DE EJEMPLO (PLACEHOLDERS)
// Reemplazá estos valores por la información real del evento.
// Toda la página se arma desde este archivo: cambiar acá cambia el sitio.

export const event = {
  name: "Tandil Tech Week",
  shortName: "TTW",
  year: "2026",
  claim: "Un encuentro para construir lo que viene",
  description:
    "Dos jornadas hechas por y para la comunidad: estudiantes, programadores y gente del ámbito tech, con el objetivo de inspirar, conectar y dar origen a nuevos proyectos.",
  dates: "14 & 15 de octubre",
  hours: "13 a 19 h",
  city: "Tandil, Argentina",
  socials: {
    instagram: "https://instagram.com/tandiltechweek",
    x: "https://x.com/tandiltechweek",
    linkedin: "https://linkedin.com/company/tandiltechweek",
  },
};

export const stats = [
  { value: "2", label: "jornadas" },
  { value: "10+", label: "charlas y actividades" },
  { value: "300+", label: "asistentes esperados" },
];

export type EventDay = {
  num: string;
  title: string;
  date: string;
  time: string;
  location: string;
  track: string;
  description: string;
  activities: string[];
};

export const days: EventDay[] = [
  {
    num: "01",
    title: "Hacking Day",
    date: "14 de octubre",
    time: "13 a 19 h",
    location: "Campus Universitario UNICEN",
    track: "Track 01 · Ciberseguridad",
    description:
      "Jornada de hacking en equipos. Vení a aprender ciberseguridad haciendo: retos, capturas y mucho aprendizaje práctico.",
    activities: ["Captura la bandera", "Charlas de seguridad", "Mentorías en vivo"],
  },
  {
    num: "02",
    title: "Startup Day",
    date: "15 de octubre",
    time: "13 a 19 h",
    location: "Distrito Avellaneda",
    track: "Track 02 · Startups",
    description:
      "Vení a conocer a los que hacen. Charlas dinámicas, networking entre fundadores, estudiantes y profesionales del ecosistema.",
    activities: ["Charlas de founders", "Networking", "Espacio de ideas"],
  },
];

export const community = {
  title: "Comunidad que inspira comunidad",
  description:
    "Tandil Tech Week nace para unir a estudiantes, programadores y profesionales en un mismo lugar. La idea es simple: inspirarnos entre nosotros y generar el tipo de comunidad de la que surgen proyectos, equipos y oportunidades.",
  pillars: [
    {
      icon: "🚀",
      title: "Inspirar",
      description:
        "Historias reales de gente que construye: desde el primer commit hasta la primera startup.",
    },
    {
      icon: "🤝",
      title: "Conectar",
      description:
        "Estudiantes, devs, fundadores y empresas en un mismo espacio, sin barreras ni jerarquías.",
    },
    {
      icon: "🛠️",
      title: "Crear",
      description:
        "Espacios para que las ideas se transformen en proyectos concretos con apoyo de la comunidad.",
    },
  ],
};

// PLACEHOLDER: reemplazar por startups reales
export const startups = [
  { name: "Startup Uno", category: "IA", initials: "S1" },
  { name: "Startup Dos", category: "Fintech", initials: "S2" },
  { name: "Startup Tres", category: "Agtech", initials: "S3" },
  { name: "Startup Cuatro", category: "Healthtech", initials: "S4" },
  { name: "Startup Cinco", category: "DevTools", initials: "S5" },
  { name: "Startup Seis", category: "EduTech", initials: "S6" },
  { name: "Startup Siete", category: "Gaming", initials: "S7" },
  { name: "Startup Ocho", category: "SaaS", initials: "S8" },
];

// PLACEHOLDER: reemplazar por organizadores reales
export const organizers = [
  {
    name: "Organizador A",
    url: "#",
    role: "Comunidad",
    description: "Organización sin fines de lucro que nuclea a la comunidad tecnológica local.",
    tag: "Community",
  },
  {
    name: "Organizador B",
    url: "#",
    role: "Universidad",
    description: "Facultad con formación en ingeniería y ciencias de la computación.",
    tag: "Educación",
  },
  {
    name: "Organizador C",
    url: "#",
    role: "Product Studio",
    description: "Estudio de diseño y desarrollo de productos digitales.",
    tag: "Producto",
  },
  {
    name: "Organizador D",
    url: "#",
    role: "Tech Company",
    description: "Empresa tecnológica regional con foco en software y talento.",
    tag: "Industria",
  },
];

// PLACEHOLDER: reemplazar por sponsors reales
export const sponsors = [
  "Sponsor Uno",
  "Sponsor Dos",
  "Sponsor Tres",
  "Sponsor Cuatro",
  "Sponsor Cinco",
  "Sponsor Seis",
];

export type PastEvent = {
  year: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  stats: { value: string; label: string }[];
  highlights: string[];
};

// PLACEHOLDER: reemplazar por ediciones reales
export const pastEvents: PastEvent[] = [
  {
    year: "2025",
    title: "Primera edición",
    date: "Octubre 2025",
    location: "UNICEN · Tandil",
    summary:
      "El puntapié inicial: una jornada de charlas y networking que reunió por primera vez a la comunidad tech de la ciudad.",
    stats: [
      { value: "150+", label: "asistentes" },
      { value: "8", label: "charlas" },
      { value: "12", label: "startups" },
    ],
    highlights: ["Primer hackathon local", "Meetup de founders", "Feria de proyectos estudiantiles"],
  },
  {
    year: "2026",
    title: "Segunda edición",
    date: "14 & 15 de octubre",
    location: "UNICEN + Distrito Avellaneda",
    summary:
      "La edición que duplica la apuesta: dos jornadas, más actividades y una comunidad que ya no para de crecer.",
    stats: [
      { value: "300+", label: "asistentes" },
      { value: "2", label: "jornadas" },
      { value: "10+", label: "actividades" },
    ],
    highlights: ["Hacking Day", "Startup Day", "Espacio de ideas abiertas"],
  },
];

export const faqs = [
  {
    q: "¿Quién puede participar?",
    a: "Todas las personas interesadas en tecnología: estudiantes, programadores, docentes, emprendedores y profesionales de cualquier área. No se necesita experiencia previa.",
  },
  {
    q: "¿Cuánto cuesta la entrada?",
    a: "El evento es gratuito con inscripción previa. Los cupos son limitados, así que te recomendamos anotarte pronto.",
  },
  {
    q: "¿Puedo ir a las dos jornadas?",
    a: "Sí. La inscripción te permite elegir una jornada o asistir a las dos. Cada jornada tiene actividades propias.",
  },
  {
    q: "¿Necesito armar equipo para el Hacking Day?",
    a: "Podés venir con tu equipo o anotarte solo: en el momento armamos equipos con otros participantes.",
  },
  {
    q: "¿Cómo hago para participar con mi startup o empresa?",
    a: "Podés sumarte como organizador, sponsor o con un stand. Escribinos por nuestras redes o desde la sección de contacto.",
  },
  {
    q: "¿Tengo una idea para un evento futuro, cómo la propongo?",
    a: "¡Genial! Dejanos tu propuesta en la sección de sugerencias. Todas las ideas se leen y las mejores entran a la agenda de próximas ediciones.",
  },
];
