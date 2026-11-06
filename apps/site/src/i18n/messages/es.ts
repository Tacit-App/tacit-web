import type { LandingCopy } from "../types";

/** Spanish landing copy. Brand name "Tacit" stays untranslated. */
export const es: LandingCopy = {
  meta: {
    title: "Tacit — Las decisiones humanas como el motor del crecimiento",
    description:
      "Capa consultiva, implementación de agentes, un agente en el ciclo y un SLA más alto. El núcleo es cómo trabaja realmente tu gente.",
  },
  nav: {
    homeAria: "Inicio de Tacit",
    bookDiagnostic: "Reservar un diagnóstico",
    languageLabel: "Idioma",
    menuLabel: "Menú",
    skip: "Saltar al contenido",
    platformMenu: "Partes de la plataforma",
    links: [
      { page: "services", label: "Servicios" },
      { page: "thesis", label: "Tesis" },
      { page: "about", label: "Nosotros" },
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
    headline: "Las decisiones humanas como el motor del crecimiento.",
    sub: "Rentabilidad mediante una estrategia agéntica construida sobre cómo las personas en la empresa ya piensan y trabajan.",
    tagline: "La experiencia detrás de la ejecución.",
    benefits: {
      heading: "Con Tacit tu empresa va a:",
      items: [
        {
          title: "Reducir el riesgo de automatizar.",
          body: "La mayoría quiere IA pero no sabe por dónde empezar, y poner agentes a ciegas rompe procesos. Primero diagnosticamos, luego implementamos donde está el 80% del valor.",
        },
        {
          title: "Retener su conocimiento.",
          body: "Cuando alguien se va, lo que sabía no se pierde. Cuando alguien entra, aprende en menos tiempo.",
        },
        {
          title: "Ver sus ineficiencias reales.",
          body: "Cuellos de botella, errores y dependencia de personas, no las del organigrama.",
        },
        {
          title: "Tener agentes que sí funcionan.",
          body: "Se alimentan del contexto de Tacit, no de búsqueda por texto.",
        },
        {
          title: "Pagar menos por cada agente.",
          body: "Reciben solo el contexto que necesitan, ya procesado, en lugar de leer documentos completos.",
        },
      ],
    },
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
      body: "Un equipo empresarial y académico de dos ingenieros con formación en neurociencias, inteligencia artificial y matemáticas construye un engine que une sistemas complejos, algoritmos lógicos, la teoría bayesiana, la teoría de grafos, LIWC y las teorías modernas del pensamiento. El engine comprende las organizaciones tal como son y fortalece su transformación digital mediante agentes.",
    },
    platform: {
      eyebrow: "Plataforma",
      title: "Cuatro partes del mismo trabajo.",
      intro:
        "El éxito agéntico se sostiene en el juicio y la cultura. Tacit hace legibles ambos. Tacit captura los flujos de trabajo diarios y las decisiones tácitas que hay detrás, y detecta las ineficiencias donde los agentes crean el mayor valor. La tecnología es una capa, no toda la historia.",
      diagramAlt: "Agents, Tech, Operations y Culture, con Culture como base.",
      parts: [
        {
          id: "consulting",
          name: "Diagnóstico",
          summary:
            "Mapea dónde vive la pericia, cómo se usa y qué herramientas y pasos no son productivos.",
          body: "Mapea dónde vive la pericia, cómo se usa y qué herramientas y pasos no son productivos.",
          marks: ["Flujos humanos", "Un lugar definido", "Valor medible"],
        },
        {
          id: "agents",
          name: "Entender las premisas",
          summary: "Cambia cómo trabaja y se forma el equipo: educación, roles y estructura.",
          body: "Cambia cómo trabaja y se forma el equipo: educación, roles y estructura. Saca a la superficie las ineficiencias y los cuellos de botella.",
          marks: ["Simples y medibles", "Puntos core", "Resultados rápidos", "Adopción", "Simbiosis humana y agéntica"],
        },
        {
          id: "apps",
          name: "Agentes básicos core",
          summary:
            "Implementa Tacit y las herramientas que la gente sí va a usar, para que el saber hacer se vuelva una capa viva.",
          body: "Implementa Tacit y las herramientas que la gente sí va a usar, para que el saber hacer se vuelva una capa viva.",
          marks: ["Centralizar", "Evaluar", "Manejar", "Su sistema", "Empoderado por Tacit", "Clientes", "Stakeholders"],
        },
        {
          id: "development",
          name: "Agentificación",
          summary:
            "Lanza agentes específicos que muestren una ganancia visible y luego extiéndelos con las mismas personas.",
          body: "Lanza agentes específicos que muestren una ganancia visible y luego extiéndelos con las mismas personas.",
          marks: ["Problemas core", "Capa de Tacit", "Infraestructura inteligente"],
        },
      ],
    },
    industries: {
      eyebrow: "Industrias",
      title: "Las operaciones en las que trabajamos.",
      items: [
        { id: "technology", name: "Tecnología / IT Sourcing" },
        { id: "logistics", name: "Logística" },
        { id: "fintech", name: "Fintech" },
        { id: "healthcare", name: "Healthcare" },
      ],
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
  pages: {
    platform: {
      title: "Tacit — Plataforma",
      description:
        "Cuatro partes del mismo trabajo: diagnóstico, premisas, agentes básicos y agentificación.",
    },
    services: {
      title: "Tacit — Servicios",
      description:
        "Capa consultiva, implementación de agentes, un agente en el ciclo y un SLA más alto.",
    },
    thesis: {
      title: "Tacit — Tesis",
      description:
        "El camino habitual compra herramientas primero. Tacit empieza por cómo ocurre realmente el trabajo.",
    },
    about: {
      title: "Tacit — Nosotros",
      description: "Para quién son los servicios, y el engine que hay detrás.",
    },
    demo: {
      title: "Tacit — Reservar un diagnóstico",
      description:
        "Reserva un diagnóstico. Partimos de cómo piensa tu equipo y de lo que sabe.",
    },
  },
  field: {
    captures: [
      {
        source: "Slack #sales",
        body: "Cuando un prospecto se queda en silencio después del demo en Zoom, manda un recap de Loom de 90 segundos, no un correo de seguimiento. La tasa de respuesta sube del 12% al 58%. Etiqueta al champion, no al DM.",
        person: "Ana G.",
        role: "Líder de ventas",
      },
      {
        source: "Teams, canal de ventas",
        body: 'En llamadas de Teams, comparte la pantalla en modo "Ventana", no "Escritorio". Oculta las otras pestañas y te hace ver mucho más preparado. Empieza a grabar solo después de los saludos.',
        person: "Luis R.",
        role: "Ejecutivo de cuenta",
      },
      {
        source: "Slack #deals",
        body: "Nunca hagas un demo con el fondo predeterminado de Zoom. Apaga a los compradores enterprise. Entorno real o desenfocado. Silencia las notificaciones de Slack antes de compartir pantalla.",
        person: "Marco V.",
        role: "AE senior",
      },
      {
        source: "Slack #ops",
        body: 'Pega el enlace de DocuSign en un DM de Slack al CFO con un resumen de dos líneas de lo que firma. Elimina el retraso de "lo tengo que revisar con legal". Ahorra de 3 a 5 días por trato.',
        person: "María F.",
        role: "Gerente de ventas",
      },
    ],
    dayOne: {
      title: "Nueva persona. Día uno. Contexto completo.",
      lead: "Una guía viva de lo que su predecesor hizo de verdad, no una búsqueda de seis meses.",
      name: "Sofia Martínez",
      role: "Account manager, se unió hoy",
      items: [
        {
          title: "Cómo acercarse a prospectos enterprise de SaaS",
          meta: "14 tácticas de 3 representantes senior",
          tag: "Ventas, negociación",
        },
        {
          title: "Tiempos de seguimiento por industria",
          meta: "Retail, finanzas y tecnología",
          tag: "Gestión de clientes",
        },
        {
          title: "Atajos de CRM y reglas del pipeline",
          meta: "Lo que el equipo hace de verdad",
          tag: "Herramientas, flujo de trabajo",
        },
      ],
      footer: "38 piezas de conocimiento listas para tu rol",
    },
    judgment: [
      {
        title: "Conecta por MCP",
        body: "Enchufa Tacit a Claude o ChatGPT para que las respuestas incluyan cómo trabaja tu equipo, no solo el wiki.",
      },
      {
        title: "Alimenta tus propios agentes",
        body: "Dale a los bots internos el contexto operativo: escalaciones, excepciones y el juicio que nunca se documentó.",
      },
      {
        title: "El combustible que le faltaba a la IA",
        body: "El saber hacer no escrito de tu empresa, capturado de Slack, correo y reuniones, usable por personas y máquinas.",
      },
      {
        title: "Un grafo de conocimiento vivo",
        body: "Dominios, vínculos y excepciones que los agentes pueden recorrer, no un volcado plano de documentos viejos.",
      },
      {
        title: "Delega lo que corresponde",
        body: "Las consultas de rutina y los pasos conocidos del playbook van al agente. Las decisiones ambiguas se quedan con las personas.",
      },
      {
        title: "Humano en el ciclo, por diseño",
        body: "Tacit no reemplaza al equipo. Les da contexto a los agentes para que las personas conserven las decisiones que importan.",
      },
    ],
    cost: {
      title: "Tu mejor empleado acaba de renunciar. ¿Y ahora?",
      lead: "Cinco años de contexto de clientes y de juicio ganado a pulso se van en dos semanas. Un documento de traspaso hecho a prisa rara vez sobrevive el primer mes.",
      withoutTitle: "Sin Tacit",
      withoutBody:
        "Entrevistas de salida y una página de Notion que nadie actualiza. La siguiente persona vuelve a aprender qué compradores desaparecen, qué fórmulas se rompen y qué CFO necesita dos líneas, y otra vez lo guarda solo en su cabeza.",
      withTitle: "Con Tacit",
      withBody:
        "El día uno abre una guía viva armada con lo que la persona anterior hizo de verdad en Slack, correo y reuniones: se puede buscar y está lista para usarse.",
    },
    founder: {
      quote:
        "El conocimiento documentado le da a una empresa pautas y dirección. Pero el conocimiento tácito es el fundamento de su identidad, su carácter y su inteligencia. Una empresa no puede sobrevivir sin él. En el paradigma de la IA, tener este conocimiento deja de ser opcional. Se vuelve la condición que decide qué empresas sobreviven este cambio y cuáles no.",
      name: "Juan Carlos Martorell",
      role: "Fundador y CEO, Tacit. MBA IPADE. MSc en neurociencias e IA",
    },
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
    tagline: "La experiencia detrás de la ejecución.",
    privacy: "Aviso de privacidad",
  },
};
