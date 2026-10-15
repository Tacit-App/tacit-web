import type { LandingCopy } from "../types";

/** Spanish landing copy. Brand name "Tacit" stays untranslated. */
export const es: LandingCopy = {
  meta: {
    title: "Tacit — Automatiza tu empresa desde la experiencia real de tu equipo",
    description:
      "Capa consultiva, implementación de agentes, un agente en el ciclo y un SLA más alto. El núcleo es cómo trabaja realmente tu gente.",
  },
  nav: {
    homeAria: "Inicio de Tacit",
    bookDiagnostic: "Reservar un diagnóstico",
    languageLabel: "Idioma",
    menuLabel: "Secciones",
    links: [
      { href: "#services", label: "Servicios" },
      { href: "#nosotros", label: "Nosotros" },
      { href: "#research", label: "Research" },
      { href: "#demo", label: "Book a demo" },
      { href: "#tesis", label: "Tesis" },
    ],
  },
  cta: {
    bookDiagnostic: "Reservar un diagnóstico",
    seeHow: "Ver los servicios",
    siteUrlLabel: "tacit.guru",
  },
  diagnosticMailSubject: "Reservar un diagnóstico",
  productAria: "Producto",
  home: {
    kicker: "Para empresas B2B",
    headline: "Automatiza tu empresa desde la experiencia real de tu equipo.",
    sub: "Cuatro servicios. Un núcleo.",
    tagline: "El conocimiento detrás del trabajo.",
    problem: {
      eyebrow: "El núcleo",
      title: "Cada servicio parte de cómo ocurre realmente el trabajo.",
      body: "Cómo se comunica la gente, qué herramientas usa, hacia dónde se inclina el juicio y dónde se atasca el trabajo. Sin eso, las herramientas y los agentes solo aceleran el desorden.",
      closer: "El cliente se lleva el servicio. El núcleo es lo que lo sostiene.",
    },
    premise: {
      eyebrow: "Qué hacemos",
      title: "Primero una imagen clara. Luego los agentes.",
      body: "Tacit mapea la comunicación real, las herramientas en uso y el conocimiento de la empresa. Esa imagen te permite cambiar cómo trabajan los equipos. Después, añadimos una capa de juicio para que los agentes actúen como tus mejores personas, no como chatbots vacíos.",
      imageAlt: "Mapa de tipos de conocimiento y perfil de competencia cognitiva",
    },
    how: {
      eyebrow: "Servicios",
      title: "Lo que hacemos para las empresas",
      imageAlt:
        "Prioridades Pulse: Hacer ahora, Planificar, Delegar y Baja prioridad",
      steps: [
        {
          n: "01",
          id: "consulting",
          title: "Capa consultiva",
          body: "Vemos cómo se comunican tus empleados y cómo trabajan en el día a día.",
          detail:
            "Extraemos ese conocimiento para que el siguiente empleado no tenga curva de aprendizaje. Detectamos la ineficiencia cuando se está creando y actuamos antes de que el cliente se queje.",
          points: [
            "Qué herramientas usan, hacia qué se inclinan y dónde encontrar los cuellos de botella.",
            "Esa imagen se extrae, para que el siguiente empleado no tenga curva de aprendizaje.",
            "La ineficiencia se detecta cuando se está creando. Actuamos entonces, antes de que el cliente se queje.",
          ],
          imageAlt: "Mapa de tipos de conocimiento de cómo trabaja el equipo",
          media: "knowledge-left",
        },
        {
          n: "02",
          id: "agents",
          title: "Implementar agentes",
          body: "Los agentes se implementan a partir del conocimiento real y los flujos de trabajo tácitos.",
          detail:
            "Una tesis 80/20 decide exactamente dónde, cómo y con quién, para subir la productividad y el crecimiento de la empresa.",
          points: [
            "La fuente es el conocimiento real y los flujos de trabajo tácitos.",
            "Una tesis 80/20 decide exactamente dónde, cómo y con quién.",
            "El fin es subir la productividad y el crecimiento de la empresa.",
          ],
          imageAlt: "Flujo de conocimiento del área de trabajo al tipo",
          media: "none",
        },
        {
          n: "03",
          id: "loop",
          title: "Agente en el ciclo",
          body: "Un agente permanece en el ciclo mientras la empresa se agentifica.",
          detail:
            "Puede vivir en un área, en un proceso o en la operación completa.",
          points: [
            "El agente permanece en el ciclo del trabajo.",
            "La agentificación puede cubrir un área.",
            "Puede cubrir un proceso, o la operación completa.",
          ],
          imageAlt: "Grafo de Tacit y menú de la app",
          media: "none",
        },
        {
          n: "04",
          id: "sla",
          title: "SLA más alto",
          body: "Los clientes piden un SLA más alto. Hoy el cliente es una caja negra, y eso impide la alta eficiencia.",
          detail:
            "Integra Tacit para entender su comportamiento y su conocimiento, e implementa soluciones cuyo único fin es subir el SLA y hacer crecer la relación con el cliente.",
          points: [
            "El cliente es una caja negra, y esa caja negra impide la alta eficiencia.",
            "Tacit se integra para entender el comportamiento y el conocimiento del cliente.",
            "Las soluciones tienen un solo fin: un SLA más alto y el crecimiento de la relación con el cliente.",
          ],
          imageAlt: "Un SOP verificado con sus pasos",
          media: "none",
        },
      ],
    },
    who: {
      eyebrow: "Para quién",
      title: "Para quién son estos servicios.",
      body: "Operaciones complejas que por naturaleza tienen alta rotación, dependen por completo de unos pocos gerentes con mucha experiencia, o sostienen una relación delicada con clientes que necesitan un nivel de servicio más alto.",
      closer: "La eficiencia del cliente es el objetivo. La tuya mejora con ella.",
    },
    research: {
      eyebrow: "Research",
      title: "Un engine que comprende las organizaciones como están.",
      body: "Un equipo empresarial y académico — dos ingenieros con formación en neurociencias, inteligencia artificial y matemáticas — construye, desde la academia y la empresa, un engine que integra sistemas complejos, la lógica proposicional, la teoría bayesiana, la teoría de grafos, LIWC y las teorías modernas del pensamiento. Ese engine comprende las organizaciones tal como son, para potenciar su transformación digital mediante agentes.",
    },
    contrast: {
      eyebrow: "Contraste",
      title: "Camino habitual vs. Tacit",
      usualPath: "Camino habitual",
      withTacit: "Con Tacit",
      rows: [
        ["Comprar herramientas o agentes primero", "Empezar por la capa consultiva"],
        [
          "Confiar en el organigrama",
          "Ver cómo trabaja la gente y qué herramientas usa",
        ],
        ["Agentes en todas partes", "80/20: exactamente dónde, cómo y con quién"],
        ["El cliente sigue siendo una caja negra", "Entenderlo y luego subir el SLA"],
      ],
    },
    close: {
      title:
        "Empieza por cómo piensa tu equipo y lo que sabe, y convierte esa experiencia real en crecimiento rentable a través de agentes e infraestructura.",
      body: "Reserva un diagnóstico. Partimos del núcleo y entregamos el servicio: capa consultiva, agentes, un agente en el ciclo o un SLA más alto.",
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
