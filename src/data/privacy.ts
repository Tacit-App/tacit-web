import type { Locale } from "../i18n";

/** Legal identity shown in the policy. Fill in before publishing. */
export const LEGAL_ENTITY = "Tacit";
export const PRIVACY_EMAIL = "sales@tacit.guru";
export const PRIVACY_MAIL = `mailto:${PRIVACY_EMAIL}`;

export type PrivacyBlock = { h?: string; p?: string; ul?: string[] };

export type PrivacySection = {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
};

export type LegalDoc = {
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  title: string;
  deck: string;
  updated: string;
  tocLabel: string;
  sections: PrivacySection[];
};

const en: LegalDoc = {
  metaTitle: "Privacy Policy — Tacit",
  metaDescription:
    "How Tacit collects, uses, shares, and protects personal data, and the rights you have under GDPR, CCPA/CPRA, LFPDPPP, LGPD, PIPEDA, and other privacy laws.",
  crumb: "Home",
  title: "Privacy Policy",
  deck: "How Tacit collects, uses, shares, and protects personal data on tacit.guru, app.tacit.guru, and the services we provide to companies.",
  updated: "Last updated: October 20, 2026",
  tocLabel: "Contents",
  sections: [
    {
      id: "who-we-are",
      title: "1. Who we are and what this policy covers",
      blocks: [
        {
          p: `${LEGAL_ENTITY} ("Tacit", "we", "us") provides a consulting layer, knowledge capture, and agent implementation for B2B companies. This policy applies to our website (tacit.guru), our web application (app.tacit.guru), our browser extension, our integrations, and any communication you have with us.`,
        },
        {
          p: "Tacit acts in two roles. For website visitors, prospects, and the people who manage customer accounts, Tacit is the data controller (\"responsable\" under Mexican law). For the content our customers connect to Tacit (email, documents, chat, meeting transcripts), Tacit acts as a data processor (\"encargado\") on behalf of the customer, who is the controller. In that second role we process data only on the customer's documented instructions, set out in our agreement and Data Processing Agreement (DPA).",
        },
        {
          p: `Questions about this policy can be sent to ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "2. Personal data we collect",
      blocks: [
        { h: "Website visitors and prospects" },
        {
          ul: [
            "Contact data you send us: name, work email, company, role, and the content of your message.",
            "Demo bookings: when you schedule through the embedded Calendly widget, Calendly collects your name, email, chosen time, and any answers you provide, and shares them with us.",
            "Technical data: IP address, browser and device type, pages requested, and timestamps, recorded in server logs by our hosting provider for security and reliability.",
          ],
        },
        { h: "Account users" },
        {
          ul: [
            "Identity and account data: name, work email, role, team, organization, and authentication data.",
            "Usage data: actions taken in the app, settings, and feedback you give on captured knowledge (for example, confirming or rejecting an item).",
          ],
        },
        { h: "Customer workspace data (processed on behalf of our customers)" },
        {
          p: "When an organization connects a source, Tacit reads business content from it, with the scopes the organization authorizes:",
        },
        {
          ul: [
            "Google Workspace: Gmail messages and Google Drive files (Docs, Sheets, Slides, Word, Excel, PowerPoint, PDF).",
            "Microsoft 365: Outlook email, OneDrive and SharePoint documents, and Microsoft Teams messages and meetings.",
            "Slack: messages and threads in the channels the workspace authorizes.",
            "Atlassian Jira: the names, email addresses, and account IDs of the users on the Jira sites an administrator connects, used to build the team directory.",
            "Meeting notes: transcripts and summaries delivered by meeting tools such as Fathom.",
            "Manual input: text employees submit through the portal or capture with the browser extension.",
          ],
        },
        {
          p: "From that content Tacit derives knowledge objects (workflows, decision logic, escalation paths, and similar), vector embeddings, process maps, and per-employee knowledge profiles that show which kinds of knowledge each person contributes.",
        },
        { h: "Data we do not seek" },
        {
          p: "We do not intentionally collect special categories of personal data (health, religion, ethnicity, sexual orientation, political opinions, biometrics, union membership) or government identifiers. Customers can configure redaction rules that strip matching patterns before any content is stored.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. How we use personal data and our legal bases",
      blocks: [
        {
          ul: [
            "To provide and operate the service: capturing, structuring, and showing knowledge to the customer that owns it. Legal basis: performance of a contract, or the customer's instructions when we act as processor.",
            "To answer inquiries and schedule demos. Legal basis: steps taken at your request before entering a contract, and our legitimate interest in responding to business inquiries.",
            "To secure the service, prevent abuse, and debug errors. Legal basis: legitimate interest in keeping the service safe and available.",
            "To send service notices, such as the weekly digest and account messages. Legal basis: performance of a contract.",
            "To send occasional product updates to business contacts (a secondary purpose). Legal basis: legitimate interest or consent where required. You can opt out at any time, and opting out does not affect the service.",
            "To comply with legal obligations and respond to lawful requests. Legal basis: legal obligation.",
          ],
        },
        {
          p: "We do not sell personal data, we do not use it for targeted advertising, and we do not use customer workspace data to train generalized AI models.",
        },
      ],
    },
    {
      id: "employees",
      title: "4. Employee data, transparency, and automated decisions",
      blocks: [
        {
          p: "Tacit analyzes the work communication of a customer's employees in order to capture how work is done. The customer, as employer and controller, decides which sources are connected and is responsible for having a lawful basis, informing its employees, and consulting works councils or employee representatives where the law requires it. We support customers with documentation and configuration (source scoping, channel selection, redaction rules) to meet those duties.",
        },
        {
          p: "Tacit is built to capture knowledge, not to monitor individuals. Tacit does not make decisions that produce legal or similarly significant effects on any person. Knowledge profiles are informational, and our terms require customers not to use them as the sole basis for hiring, firing, compensation, or disciplinary decisions. Employees can confirm, correct, or flag knowledge attributed to them.",
        },
        {
          p: "If you are an employee of a Tacit customer, please direct privacy requests to your employer first. If you contact us, we will forward your request to your employer and assist them in answering it.",
        },
      ],
    },
    {
      id: "ai",
      title: "5. Artificial intelligence",
      blocks: [
        {
          p: "Tacit uses large language models from Anthropic (Claude) to filter, classify, and structure content, and embedding models from Voyage AI to compare related knowledge. These providers process data under API terms that prohibit training their models on our customers' data. The core of the knowledge engine (deduplication, process grouping, and impact scoring) is deterministic and auditable, and does not rely on a language model.",
        },
        {
          p: "AI output can be wrong. Captured knowledge carries a confidence score and can be reviewed, confirmed, or rejected by people in the customer organization.",
        },
      ],
    },
    {
      id: "integrations",
      title: "6. Google, Microsoft, Slack, and Atlassian data",
      blocks: [
        {
          p: "Tacit's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        },
        {
          p: "In particular, for data received from Google Workspace, Microsoft 365, Slack, and Atlassian:",
        },
        {
          ul: [
            "We use it only to provide and improve the user-facing features of Tacit that the customer has enabled.",
            "We do not transfer it to third parties except as needed to provide those features, to comply with law, or as part of a merger or acquisition with notice to users.",
            "We do not use it for advertising, including retargeting or personalized ads.",
            "We do not allow humans to read it unless we have the user's affirmative consent for specific content, it is necessary for security purposes or to comply with law, or it has been aggregated and anonymized for internal operations.",
            "We do not use it to develop, improve, or train generalized AI or machine learning models.",
          ],
        },
        {
          p: "An administrator can disconnect a source at any time from the app, or revoke access directly in the Google, Microsoft, Slack, or Atlassian admin console. Disconnecting stops all further collection. When an Atlassian user closes their account, we update or delete their data as reported through Atlassian's personal data reporting API.",
        },
      ],
    },
    {
      id: "sharing",
      title: "7. How we share personal data",
      blocks: [
        {
          p: "We share personal data only with service providers (subprocessors) that help us run Tacit, under contracts that limit their use of the data to providing services to us:",
        },
        {
          ul: [
            "Supabase: database and storage, hosted on Amazon Web Services.",
            "Vercel: hosting of the website and application.",
            "Anthropic: language-model processing.",
            "Voyage AI: embedding generation.",
            "Nango: management of OAuth connections to integrations.",
            "Resend: delivery of transactional email.",
            "Calendly: demo scheduling on the website.",
            "Google Fonts: delivery of web fonts, which receives your IP address when the page loads.",
          ],
        },
        {
          p: `We may also disclose data when required by law or to protect the rights, safety, and property of Tacit, our customers, or others, and to a successor in a merger, acquisition, or sale of assets, subject to this policy. An up-to-date list of subprocessors is available on request at ${PRIVACY_EMAIL}.`,
        },
        {
          p: "Customer workspace data is isolated per organization. No customer can see another customer's data.",
        },
      ],
    },
    {
      id: "transfers",
      title: "8. International transfers",
      blocks: [
        {
          p: "Tacit and its providers may process data in the United States and other countries whose laws may differ from those of your country. When we transfer personal data out of the European Economic Area, the United Kingdom, or Switzerland, we rely on the European Commission's Standard Contractual Clauses, the UK International Data Transfer Addendum, or another lawful transfer mechanism, together with supplementary measures where appropriate. Transfers from Mexico, Brazil, Canada, and other jurisdictions are made under the mechanisms those laws provide, including contractual safeguards. You can request a copy of the relevant safeguards by contacting us.",
        },
      ],
    },
    {
      id: "retention",
      title: "9. How long we keep data",
      blocks: [
        {
          ul: [
            "Customer workspace data and derived knowledge: for the duration of the customer agreement. After termination, we delete or return it within 30 days unless the agreement sets a different term or the law requires us to keep it.",
            "Account data: while the account is active, and up to 12 months afterwards for audit and dispute purposes.",
            "Inquiries and demo bookings: up to 24 months after the last interaction, unless a customer relationship begins.",
            "Server logs: up to 90 days, unless needed to investigate a security incident.",
          ],
        },
        {
          p: "Backups are overwritten on a rolling cycle. Customers can request earlier deletion of specific data at any time.",
        },
      ],
    },
    {
      id: "security",
      title: "10. Security",
      blocks: [
        {
          p: "We use administrative, technical, and organizational measures designed to protect personal data, including encryption in transit (TLS) and at rest, mandatory per-organization isolation on every query, least-privilege access for staff, OAuth tokens held by a dedicated integration service rather than in application code, and customer-defined redaction before storage.",
        },
        {
          p: "No system is perfectly secure. If a personal data breach affects you or your organization, we will notify the customer without undue delay and support it in notifying the authorities and affected people within the deadlines required by law (for example, 72 hours under GDPR).",
        },
      ],
    },
    {
      id: "rights",
      title: "11. Your privacy rights",
      blocks: [
        {
          p: `Depending on where you live, you have some or all of the rights below. To exercise them, write to ${PRIVACY_EMAIL}. We will verify your identity, respond within the period the law sets (one month under GDPR, 45 days under CCPA, 20 business days under Mexican law), and never discriminate against you for exercising your rights. You can act through an authorized agent where the law allows it.`,
        },
        { h: "European Economic Area, United Kingdom, and Switzerland (GDPR)" },
        {
          p: "Access, rectification, erasure, restriction of processing, data portability, objection to processing based on legitimate interests or for direct marketing, and withdrawal of consent at any time. You also have the right to lodge a complaint with your local data protection authority.",
        },
        { h: "California and other US states" },
        {
          p: "Under the CCPA/CPRA and the comprehensive privacy laws of states such as Virginia, Colorado, Connecticut, Utah, Texas, and Oregon, you can request to know the categories and specific pieces of personal data we collect, the sources, purposes, and the categories of recipients; request deletion and correction; and opt out of sale, sharing for cross-context behavioral advertising, and profiling. We do not sell or share personal data in that sense, and we do not use sensitive personal information for purposes that require a right to limit. If we deny a request, you can appeal by replying to our decision. We honor the Global Privacy Control signal.",
        },
        {
          p: "Categories collected in the last 12 months: identifiers (name, email, IP address), professional information (company, role), internet activity (usage and log data), and the content of work communications processed for customers. Sources: you, your employer, and the integrations your employer connects. Recipients: the service providers listed in section 7.",
        },
        { h: "Mexico (LFPDPPP)" },
        {
          p: "You have the ARCO rights (access, rectification, cancellation, and opposition), and you can revoke your consent or limit the use and disclosure of your data. Send a request with your name, a means to reply, a copy of an identification document, and a clear description of the data and the right you wish to exercise. If you believe your rights have been violated, you can go to the competent Mexican data protection authority.",
        },
        { h: "Brazil, Canada, and other countries" },
        {
          p: "Under the LGPD (Brazil), PIPEDA and Quebec's Law 25 (Canada), and similar laws, you can confirm whether we process your data and request access, correction, anonymization, deletion, portability, information about sharing, and review of decisions made solely by automated means, and you can withdraw consent. You can also complain to the national authority.",
        },
      ],
    },
    {
      id: "cookies",
      title: "12. Cookies and similar technologies",
      blocks: [
        {
          p: "tacit.guru does not use advertising or analytics cookies. The application uses strictly necessary cookies to keep you signed in. If you use the embedded Calendly scheduler, Calendly may set its own cookies under its privacy policy, and loading Google Fonts sends your IP address to Google. If we add analytics or other non-essential cookies in the future, we will update this policy and ask for consent where the law requires it.",
        },
      ],
    },
    {
      id: "children",
      title: "13. Children",
      blocks: [
        {
          p: "Tacit is a business service and is not directed to children under 16. We do not knowingly collect their personal data. If you believe a child has provided us data, contact us and we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      title: "14. Changes to this policy",
      blocks: [
        {
          p: "We may update this policy as our service or the law changes. We will post the new version on this page with a new date, and, if the changes are material, notify account administrators by email before they take effect.",
        },
      ],
    },
    {
      id: "contact",
      title: "15. Contact",
      blocks: [
        {
          p: `${LEGAL_ENTITY}. Privacy and data protection requests, and general questions: ${PRIVACY_EMAIL}. Please write "Privacy request" in the subject line.`,
        },
      ],
    },
  ],
};

const es: LegalDoc = {
  metaTitle: "Aviso de privacidad — Tacit",
  metaDescription:
    "Cómo Tacit recaba, usa, comparte y protege datos personales, y los derechos que tienes bajo la LFPDPPP, el GDPR, la CCPA/CPRA, la LGPD, la PIPEDA y otras leyes de privacidad.",
  crumb: "Inicio",
  title: "Aviso de privacidad",
  deck: "Cómo Tacit recaba, usa, comparte y protege datos personales en tacit.guru, app.tacit.guru y los servicios que presta a empresas.",
  updated: "Última actualización: 20 de octubre de 2026",
  tocLabel: "Contenido",
  sections: [
    {
      id: "who-we-are",
      title: "1. Quiénes somos y qué cubre este aviso",
      blocks: [
        {
          p: `${LEGAL_ENTITY} ("Tacit", "nosotros") presta una capa consultiva, captura de conocimiento e implementación de agentes para empresas B2B. Este aviso aplica a nuestro sitio web (tacit.guru), nuestra aplicación (app.tacit.guru), nuestra extensión de navegador, nuestras integraciones y cualquier comunicación que tengas con nosotros.`,
        },
        {
          p: "Tacit actúa en dos papeles. Para visitantes del sitio, prospectos y las personas que administran cuentas de clientes, Tacit es el responsable del tratamiento. Para el contenido que nuestros clientes conectan a Tacit (correo, documentos, chat, transcripciones de reuniones), Tacit actúa como encargado por cuenta del cliente, que es el responsable. En ese segundo papel tratamos los datos solo conforme a las instrucciones documentadas del cliente, establecidas en nuestro contrato y en el Acuerdo de Tratamiento de Datos (DPA).",
        },
        {
          p: `Puedes enviar preguntas sobre este aviso a ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "2. Datos personales que recabamos",
      blocks: [
        { h: "Visitantes del sitio y prospectos" },
        {
          ul: [
            "Datos de contacto que nos envías: nombre, correo de trabajo, empresa, puesto y el contenido de tu mensaje.",
            "Reserva de demos: al agendar con el widget de Calendly, Calendly recaba tu nombre, correo, horario elegido y las respuestas que des, y nos los comparte.",
            "Datos técnicos: dirección IP, tipo de navegador y dispositivo, páginas solicitadas y fecha y hora, registrados por nuestro proveedor de hosting por seguridad y continuidad.",
          ],
        },
        { h: "Usuarios de cuentas" },
        {
          ul: [
            "Datos de identidad y cuenta: nombre, correo de trabajo, puesto, equipo, organización y datos de autenticación.",
            "Datos de uso: acciones en la aplicación, configuración y la retroalimentación que das sobre el conocimiento capturado (por ejemplo, confirmar o rechazar un elemento).",
          ],
        },
        { h: "Datos del espacio de trabajo del cliente (tratados por cuenta de nuestros clientes)" },
        {
          p: "Cuando una organización conecta una fuente, Tacit lee contenido de negocio con los permisos que la organización autoriza:",
        },
        {
          ul: [
            "Google Workspace: mensajes de Gmail y archivos de Google Drive (Docs, Sheets, Slides, Word, Excel, PowerPoint, PDF).",
            "Microsoft 365: correo de Outlook, documentos de OneDrive y SharePoint, y mensajes y reuniones de Microsoft Teams.",
            "Slack: mensajes e hilos en los canales que el espacio de trabajo autoriza.",
            "Atlassian Jira: nombre, correo y ID de cuenta de los usuarios de los sitios de Jira que conecta un administrador, para armar el directorio del equipo.",
            "Notas de reuniones: transcripciones y resúmenes que envían herramientas como Fathom.",
            "Captura manual: texto que los empleados envían por el portal o capturan con la extensión de navegador.",
          ],
        },
        {
          p: "A partir de ese contenido Tacit genera objetos de conocimiento (flujos de trabajo, lógica de decisión, rutas de escalamiento y similares), embeddings vectoriales, mapas de procesos y perfiles de conocimiento por empleado que muestran qué tipos de conocimiento aporta cada persona.",
        },
        { h: "Datos que no buscamos" },
        {
          p: "No recabamos intencionalmente datos personales sensibles (salud, religión, origen étnico, orientación sexual, opiniones políticas, datos biométricos, afiliación sindical) ni identificadores oficiales. Los clientes pueden configurar reglas de redacción que eliminan patrones antes de almacenar cualquier contenido.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. Finalidades y bases legales",
      blocks: [
        { h: "Finalidades primarias (necesarias para el servicio)" },
        {
          ul: [
            "Prestar y operar el servicio: capturar, estructurar y mostrar el conocimiento a la organización a la que pertenece. Base legal: ejecución de un contrato, o las instrucciones del cliente cuando actuamos como encargado.",
            "Responder consultas y agendar demos. Base legal: medidas precontractuales a tu solicitud y nuestro interés legítimo en atender consultas de negocio.",
            "Proteger el servicio, prevenir abusos y corregir errores. Base legal: interés legítimo en mantener el servicio seguro y disponible.",
            "Enviar avisos del servicio, como el resumen semanal y mensajes de la cuenta. Base legal: ejecución de un contrato.",
            "Cumplir obligaciones legales y atender requerimientos de autoridad. Base legal: obligación legal.",
          ],
        },
        { h: "Finalidad secundaria" },
        {
          p: "Enviar ocasionalmente novedades del producto a contactos de negocio. Puedes oponerte en cualquier momento escribiendo a nuestro correo de privacidad; oponerte no afecta el servicio.",
        },
        {
          p: "No vendemos datos personales, no los usamos para publicidad dirigida y no usamos los datos del espacio de trabajo de los clientes para entrenar modelos de IA generales.",
        },
      ],
    },
    {
      id: "employees",
      title: "4. Datos de empleados, transparencia y decisiones automatizadas",
      blocks: [
        {
          p: "Tacit analiza la comunicación laboral de los empleados de un cliente para capturar cómo se hace el trabajo. El cliente, como empleador y responsable, decide qué fuentes se conectan y es responsable de contar con una base legal, informar a sus empleados y consultar a comités de empresa o representantes de los trabajadores cuando la ley lo exija. Apoyamos a los clientes con documentación y configuración (alcance de fuentes, selección de canales, reglas de redacción) para cumplir esas obligaciones.",
        },
        {
          p: "Tacit está hecho para capturar conocimiento, no para vigilar personas. Tacit no toma decisiones que produzcan efectos jurídicos o igualmente significativos sobre ninguna persona. Los perfiles de conocimiento son informativos, y nuestros términos exigen a los clientes no usarlos como única base para contratar, despedir, fijar compensación o sancionar. Los empleados pueden confirmar, corregir o señalar el conocimiento que se les atribuye.",
        },
        {
          p: "Si eres empleado de un cliente de Tacit, dirige primero tus solicitudes de privacidad a tu empleador. Si nos contactas, reenviaremos tu solicitud a tu empleador y le ayudaremos a responderla.",
        },
      ],
    },
    {
      id: "ai",
      title: "5. Inteligencia artificial",
      blocks: [
        {
          p: "Tacit usa modelos de lenguaje de Anthropic (Claude) para filtrar, clasificar y estructurar contenido, y modelos de embeddings de Voyage AI para comparar conocimiento relacionado. Estos proveedores tratan los datos bajo términos de API que prohíben entrenar sus modelos con los datos de nuestros clientes. El núcleo del motor de conocimiento (deduplicación, agrupación en procesos y puntuación de impacto) es determinístico y auditable, y no depende de un modelo de lenguaje.",
        },
        {
          p: "Los resultados de la IA pueden equivocarse. El conocimiento capturado lleva un nivel de confianza y las personas de la organización cliente pueden revisarlo, confirmarlo o rechazarlo.",
        },
      ],
    },
    {
      id: "integrations",
      title: "6. Datos de Google, Microsoft, Slack y Atlassian",
      blocks: [
        {
          p: "El uso y la transferencia a cualquier otra aplicación, por parte de Tacit, de la información recibida de las API de Google se apegará a la Política de Datos de Usuario de los Servicios de API de Google (Google API Services User Data Policy), incluidos los requisitos de Uso Limitado.",
        },
        {
          p: "En particular, respecto de los datos recibidos de Google Workspace, Microsoft 365, Slack y Atlassian:",
        },
        {
          ul: [
            "Los usamos solo para prestar y mejorar las funciones de Tacit que el cliente ha habilitado.",
            "No los transferimos a terceros salvo cuando es necesario para prestar esas funciones, para cumplir la ley o como parte de una fusión o adquisición con aviso a los usuarios.",
            "No los usamos para publicidad, incluido el retargeting o los anuncios personalizados.",
            "No permitimos que personas los lean salvo con el consentimiento expreso del usuario para contenido específico, cuando es necesario por seguridad o para cumplir la ley, o cuando se han agregado y anonimizado para operaciones internas.",
            "No los usamos para desarrollar, mejorar o entrenar modelos generales de IA o aprendizaje automático.",
          ],
        },
        {
          p: "Un administrador puede desconectar una fuente en cualquier momento desde la aplicación o revocar el acceso en la consola de administración de Google, Microsoft, Slack o Atlassian. Al desconectarla se detiene toda recolección. Cuando un usuario de Atlassian cierra su cuenta, actualizamos o eliminamos sus datos según lo que reporta la API de datos personales de Atlassian.",
        },
      ],
    },
    {
      id: "sharing",
      title: "7. Transferencias y con quién compartimos datos",
      blocks: [
        {
          p: "Compartimos datos personales solo con proveedores (subencargados) que nos ayudan a operar Tacit, bajo contratos que limitan su uso a prestarnos servicios:",
        },
        {
          ul: [
            "Supabase: base de datos y almacenamiento, alojados en Amazon Web Services.",
            "Vercel: hosting del sitio y la aplicación.",
            "Anthropic: procesamiento con modelos de lenguaje.",
            "Voyage AI: generación de embeddings.",
            "Nango: gestión de las conexiones OAuth con las integraciones.",
            "Resend: envío de correo transaccional.",
            "Calendly: agenda de demos en el sitio.",
            "Google Fonts: entrega de tipografías web; recibe tu dirección IP al cargar la página.",
          ],
        },
        {
          p: `También podemos revelar datos cuando la ley lo exija o para proteger los derechos, la seguridad y los bienes de Tacit, de nuestros clientes o de terceros, y a un sucesor en caso de fusión, adquisición o venta de activos, sujeto a este aviso. Las remisiones a encargados no requieren tu consentimiento. Puedes pedir la lista actualizada de subencargados en ${PRIVACY_EMAIL}.`,
        },
        {
          p: "Los datos del espacio de trabajo de cada cliente están aislados por organización. Ningún cliente puede ver los datos de otro.",
        },
      ],
    },
    {
      id: "transfers",
      title: "8. Transferencias internacionales",
      blocks: [
        {
          p: "Tacit y sus proveedores pueden tratar datos en Estados Unidos y otros países cuyas leyes pueden diferir de las de tu país. Cuando transferimos datos fuera del Espacio Económico Europeo, el Reino Unido o Suiza, nos apoyamos en las Cláusulas Contractuales Tipo de la Comisión Europea, el Addendum de Transferencia Internacional del Reino Unido u otro mecanismo legal, con medidas complementarias cuando corresponde. Las transferencias desde México, Brasil, Canadá y otras jurisdicciones se hacen con los mecanismos que esas leyes prevén, incluidas salvaguardas contractuales. Puedes pedirnos copia de las salvaguardas aplicables.",
        },
      ],
    },
    {
      id: "retention",
      title: "9. Conservación de los datos",
      blocks: [
        {
          ul: [
            "Datos del espacio de trabajo del cliente y conocimiento derivado: durante la vigencia del contrato. Al terminar, los eliminamos o devolvemos en un plazo de 30 días, salvo que el contrato fije otro plazo o la ley nos obligue a conservarlos.",
            "Datos de cuenta: mientras la cuenta esté activa y hasta 12 meses después, para fines de auditoría y aclaraciones.",
            "Consultas y reservas de demos: hasta 24 meses después de la última interacción, salvo que inicie una relación comercial.",
            "Registros del servidor: hasta 90 días, salvo que se necesiten para investigar un incidente de seguridad.",
          ],
        },
        {
          p: "Los respaldos se sobrescriben de forma cíclica. Los clientes pueden pedir la eliminación anticipada de datos específicos en cualquier momento.",
        },
      ],
    },
    {
      id: "security",
      title: "10. Seguridad",
      blocks: [
        {
          p: "Aplicamos medidas administrativas, técnicas y físicas para proteger los datos personales, entre ellas cifrado en tránsito (TLS) y en reposo, aislamiento obligatorio por organización en cada consulta, acceso del personal con mínimo privilegio, tokens OAuth resguardados por un servicio de integración dedicado y no en el código de la aplicación, y redacción definida por el cliente antes de almacenar.",
        },
        {
          p: "Ningún sistema es perfectamente seguro. Si una vulneración de datos personales te afecta a ti o a tu organización, lo notificaremos al cliente sin dilación indebida y le apoyaremos para avisar a las autoridades y a las personas afectadas en los plazos que exija la ley (por ejemplo, 72 horas bajo el GDPR).",
        },
      ],
    },
    {
      id: "rights",
      title: "11. Tus derechos",
      blocks: [
        {
          p: `Según dónde vivas, tienes algunos o todos los derechos siguientes. Para ejercerlos, escribe a ${PRIVACY_EMAIL}. Verificaremos tu identidad, responderemos en el plazo que fije la ley (20 días hábiles bajo la ley mexicana, un mes bajo el GDPR, 45 días bajo la CCPA) y nunca te discriminaremos por ejercerlos. Puedes actuar mediante un representante cuando la ley lo permita.`,
        },
        { h: "México (LFPDPPP)" },
        {
          p: "Tienes los derechos ARCO (acceso, rectificación, cancelación y oposición) y puedes revocar tu consentimiento o limitar el uso y la divulgación de tus datos. Envía tu solicitud con tu nombre, un medio para responderte, copia de una identificación y la descripción clara de los datos y del derecho que quieres ejercer. Si consideras que se vulneraron tus derechos, puedes acudir a la autoridad mexicana competente en protección de datos personales.",
        },
        { h: "Espacio Económico Europeo, Reino Unido y Suiza (GDPR)" },
        {
          p: "Acceso, rectificación, supresión, limitación del tratamiento, portabilidad, oposición al tratamiento basado en interés legítimo o con fines de mercadotecnia directa, y retirar tu consentimiento en cualquier momento. También puedes presentar una reclamación ante tu autoridad local de protección de datos.",
        },
        { h: "California y otros estados de EE. UU." },
        {
          p: "Bajo la CCPA/CPRA y las leyes de privacidad de estados como Virginia, Colorado, Connecticut, Utah, Texas y Oregón, puedes solicitar conocer las categorías y los datos específicos que recabamos, sus fuentes, finalidades y categorías de destinatarios; pedir su eliminación y corrección; y oponerte a su venta, a compartirlos para publicidad conductual y a la elaboración de perfiles. No vendemos ni compartimos datos personales en ese sentido, ni usamos información sensible para fines que requieran un derecho a limitarla. Si rechazamos una solicitud, puedes apelar respondiendo a nuestra decisión. Respetamos la señal Global Privacy Control.",
        },
        {
          p: "Categorías recabadas en los últimos 12 meses: identificadores (nombre, correo, dirección IP), información profesional (empresa, puesto), actividad en internet (datos de uso y registros) y el contenido de comunicaciones laborales tratado por cuenta de clientes. Fuentes: tú, tu empleador y las integraciones que tu empleador conecta. Destinatarios: los proveedores listados en la sección 7.",
        },
        { h: "Brasil, Canadá y otros países" },
        {
          p: "Bajo la LGPD (Brasil), la PIPEDA y la Ley 25 de Quebec (Canadá) y leyes similares, puedes confirmar si tratamos tus datos y solicitar acceso, corrección, anonimización, eliminación, portabilidad, información sobre con quién los compartimos y revisión de decisiones tomadas únicamente por medios automatizados, y puedes retirar tu consentimiento. También puedes presentar una queja ante la autoridad nacional.",
        },
      ],
    },
    {
      id: "cookies",
      title: "12. Cookies y tecnologías similares",
      blocks: [
        {
          p: "tacit.guru no usa cookies de publicidad ni de analítica. La aplicación usa cookies estrictamente necesarias para mantener tu sesión. Si usas el agendador de Calendly integrado, Calendly puede instalar sus propias cookies conforme a su política de privacidad, y al cargar Google Fonts se envía tu dirección IP a Google. Si en el futuro añadimos cookies de analítica u otras no esenciales, actualizaremos este aviso y pediremos tu consentimiento cuando la ley lo exija.",
        },
      ],
    },
    {
      id: "children",
      title: "13. Menores de edad",
      blocks: [
        {
          p: "Tacit es un servicio para empresas y no está dirigido a menores de 16 años. No recabamos sus datos a sabiendas. Si crees que un menor nos dio sus datos, contáctanos y los eliminaremos.",
        },
      ],
    },
    {
      id: "changes",
      title: "14. Cambios a este aviso",
      blocks: [
        {
          p: "Podemos actualizar este aviso conforme cambien nuestro servicio o la ley. Publicaremos la nueva versión en esta página con su fecha y, si los cambios son relevantes, avisaremos por correo a los administradores de cuenta antes de que entren en vigor.",
        },
      ],
    },
    {
      id: "contact",
      title: "15. Contacto",
      blocks: [
        {
          p: `${LEGAL_ENTITY}. Solicitudes de privacidad y protección de datos, y preguntas generales: ${PRIVACY_EMAIL}. Escribe "Solicitud de privacidad" en el asunto.`,
        },
      ],
    },
  ],
};

export const privacy: Record<Locale, LegalDoc> = { en, es };
