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

// Datos reales tomados de tandiltechweek.com
export const organizers = [
  {
    name: "Picante",
    url: "https://picante.fund",
    tag: "Venture Capital",
    description:
      "Acompañan desde el principio a la nueva generación de founders latinoamericanos: AI Natives construyendo productos globales. Confían cuando nadie más confía.",
    logo: "/logos/picante.png",
  },
  {
    name: "Relaw",
    url: "https://relaw.io",
    tag: "Venture Legal",
    description:
      "El partner legal de startups y empresas de tecnología. Expertise legal y visión de negocio, con acompañamiento 360° para crecer en múltiples mercados.",
    logo: "/logos/relaw.jpg",
  },
  {
    name: "Paisanos",
    url: "https://paisanos.io",
    tag: "Product & Tech",
    description:
      "Estudio global de diseño y desarrollo de productos digitales, acompañando a startups y corporates a crear soluciones que escalan.",
    logo: "/logos/paisanos.png",
  },
  {
    name: "HackTandil",
    url: "https://hacktandil.org",
    tag: "Community",
    description:
      "Comunidad tecnológica de Tandil que conecta desarrolladores, estudiantes, emprendedores y entusiastas a través de meetups, hackathons y eventos.",
    logo: "/logos/hacktandil.png",
  },
  {
    name: "Geonosis",
    url: "https://geonosisgroup.com",
    tag: "Tech Partner",
    description:
      "El brazo tecnológico de startups y empresas, que las acompaña desde la idea hasta el scale-up. Liderazgo técnico, pensamiento de producto y visión de negocio para construir soluciones digitales reales.",
    logo: "/logos/geonosisgroup.png",
  },
  {
    name: "Fardo",
    url: "https://heyfardo.com",
    tag: "AI Visibility",
    description:
      "La primera plataforma de brand intelligence de Latam. Miden cómo aparece tu marca en ChatGPT, Gemini, Perplexity y Claude, y arman el plan para que la IA te cite y te recomiende.",
    logo: "/logos/heyfardo.png",
  },
];

// Datos reales tomados de tandiltechweek.com
export const sponsors = [
  { name: "Grupo Rotonda", url: "https://gruporotonda.com.ar", logo: "/logos/gruporotonda.png" },
  { name: "The Red Guild", url: "https://theredguild.org", logo: "/logos/theredguild.png" },
  { name: "Payoneer", url: "https://www.payoneer.com", logo: "/logos/payoneer.png" },
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
