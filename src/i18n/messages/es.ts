import type { LandingCopy } from "../types";

/** Spanish landing copy. Brand name "Tacit" stays untranslated. */
export const es: LandingCopy = {
  meta: {
    title: "Tacit — Entiende, transforma y automatiza tus operaciones",
    description:
      "Impulsado por el conocimiento tácito dentro de tu empresa. Mapea cómo ocurre realmente el trabajo y luego construye herramientas y agentes que encajen.",
  },
  nav: {
    homeAria: "Inicio de Tacit",
    bookDiagnostic: "Reservar un diagnóstico",
    languageLabel: "Idioma",
  },
  cta: {
    bookDiagnostic: "Reservar un diagnóstico",
    seeHow: "Ver cómo funciona",
    siteUrlLabel: "tacit.guru",
  },
  diagnosticMailSubject: "Reservar un diagnóstico",
  productAria: "Producto",
  home: {
    kicker: "Para empresas B2B",
    headline: "Entiende, transforma y automatiza tus operaciones.",
    sub: "Impulsado por el conocimiento tácito dentro de tu empresa.",
    tagline: "El conocimiento detrás del trabajo.",
    problem: {
      eyebrow: "Problema",
      title:
        "Las herramientas nuevas fallan cuando los flujos de trabajo siguen igual.",
      body: "La mayoría de los proyectos tecnológicos se estancan por las personas y la cultura, no por un mal software. Si no ves cómo se mueve realmente el trabajo, los agentes solo aceleran el desorden.",
      closer: "Ve la cultura antes de automatizar.",
    },
    premise: {
      eyebrow: "Qué hacemos",
      title: "Primero una imagen clara. Luego los agentes.",
      body: "Tacit mapea la comunicación real, las herramientas en uso y el conocimiento de la empresa. Esa imagen te permite cambiar cómo trabajan los equipos. Después, añadimos una capa de juicio para que los agentes actúen como tus mejores personas, no como chatbots vacíos.",
      imageAlt: "Mapa de tipos de conocimiento y perfil de competencia cognitiva",
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos.",
      imageAlt:
        "Prioridades Pulse: Hacer ahora, Planificar, Delegar y Baja prioridad",
      steps: [
        {
          n: "01 · Mapear",
          title: "Ver el trabajo real",
          body: "Cómo habla la gente, qué herramientas usa, quién decide y cómo se mueve la información.",
        },
        {
          n: "02 · Cambiar",
          title: "Corregir flujos y adaptar la cultura",
          body: "Formar equipos, cambiar cómo ocurre el trabajo e instalar Tacit con las herramientas que encajan.",
        },
        {
          n: "03 · Automatizar",
          title: "Agentes con juicio",
          body: "Automatiza con agentes y asistentes que llevan el juicio de tus mejores personas.",
        },
      ],
    },
    who: {
      eyebrow: "Para quién",
      title: "Hecho para una transformación agéntica de abajo hacia arriba.",
      body: "Logística, tecnología y otros equipos B2B cuyo trabajo depende de cómo opera el cliente. Cuando entiendes los procesos y decisiones del cliente, puedes hacer su operación más rápida y la tuya más fuerte.",
      closer: "La eficiencia del cliente es el objetivo. La tuya mejora con ella.",
    },
    contrast: {
      eyebrow: "Contraste",
      title: "Camino habitual vs. Tacit",
      usualPath: "Camino habitual",
      withTacit: "Con Tacit",
      rows: [
        [
          "Comprar herramientas / agentes primero",
          "Mapear primero cómo ocurre realmente el trabajo",
        ],
        [
          "Confiar en el organigrama",
          "Ver la comunicación y las herramientas reales",
        ],
        ["Culpar al software", "Corregir hábitos y luego automatizar"],
        [
          "Adivinar cómo trabaja el cliente",
          "Conocer su flujo y luego optimizarlo",
        ],
      ],
    },
    close: {
      title:
        "Empieza por cómo trabaja tácitamente tu propia empresa para optimizar las operaciones de tus clientes.",
      body: "Reserva un diagnóstico. Obtén el mapa. Luego construye herramientas y agentes que encajen.",
    },
    filmLabel: "Grafo de Tacit y menú de la app",
  },
  solutions: [
    {
      slug: "consultation",
      name: "Consultoría AI-first",
      stage: "Mapear",
      homeLine: "Ve cómo se mueven realmente el trabajo, las herramientas y las decisiones.",
    },
    {
      slug: "embedded-team",
      name: "Equipo embebido",
      stage: "Cambiar",
      homeLine: "Siéntate con el equipo y cambia cómo ocurre el trabajo.",
    },
    {
      slug: "company-brain",
      name: "Company Brain",
      stage: "Lo que permanece",
      homeLine: "La imagen de cómo decide realmente tu empresa.",
    },
    {
      slug: "agentic-platform",
      name: "Plataforma agéntica",
      stage: "Automatizar",
      homeLine: "Agentes que llevan el juicio y luego mejoran.",
    },
  ],
  footer: {
    aria: "Pie de página",
    tagline: "El conocimiento detrás del trabajo.",
  },
};
