import type { Locale } from "../i18n";
import { LEGAL_ENTITY, PRIVACY_EMAIL as SUPPORT_EMAIL, type LegalDoc } from "./privacy";

const en: LegalDoc = {
  metaTitle: "Terms of Service — Tacit",
  metaDescription:
    "The terms that govern access to and use of Tacit's website, application, integrations, and services.",
  crumb: "Home",
  title: "Terms of Service",
  deck: "The terms that govern access to and use of tacit.guru, app.tacit.guru, our browser extension, integrations, and services.",
  updated: "Last updated: October 20, 2026",
  tocLabel: "Contents",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of these terms",
      blocks: [
        {
          p: `These Terms of Service ("Terms") are an agreement between ${LEGAL_ENTITY} ("Tacit", "we", "us") and the organization that uses our services ("Customer", "you"). By creating an account, connecting an integration, signing an order form, or using the services, you accept these Terms on behalf of your organization and confirm that you have authority to do so.`,
        },
        {
          p: "If Customer has signed a separate written agreement with Tacit, that agreement prevails over these Terms where they conflict. Order forms, statements of work, and the Data Processing Agreement (DPA) form part of the agreement.",
        },
      ],
    },
    {
      id: "services",
      title: "2. The services",
      blocks: [
        {
          p: "Tacit provides a consulting layer, a knowledge platform that captures how work is done from the sources Customer connects, agent implementation, and related services (together, the \"Services\"). The scope, fees, and term of paid Services are set out in the applicable order form or statement of work.",
        },
        {
          p: "We may improve and change the Services over time. We will not make changes that materially reduce the core functionality of paid Services during a subscription term without notice.",
        },
      ],
    },
    {
      id: "accounts",
      title: "3. Accounts and access",
      blocks: [
        {
          ul: [
            "Customer is responsible for its users, for keeping credentials confidential, and for all activity under its accounts.",
            "Users must be employees or contractors of Customer authorized to use the Services on its behalf.",
            "Customer must notify us promptly at the support contact below of any unauthorized access or security concern.",
          ],
        },
      ],
    },
    {
      id: "customer-data",
      title: "4. Customer data",
      blocks: [
        {
          p: "Customer retains all rights to the content it connects or submits and to the knowledge derived from it (\"Customer Data\"). Customer grants Tacit a limited license to host, process, and display Customer Data only to provide, secure, and support the Services, as described in our Privacy Policy and the DPA.",
        },
        {
          p: "Tacit does not sell Customer Data, does not use it for advertising, and does not use it to train generalized AI models. Data received from Google, Microsoft, and Slack is handled according to those platforms' policies, including the Google API Services User Data Policy and its Limited Use requirements.",
        },
        {
          p: "Customer may export its data and disconnect any source at any time. After the agreement ends, Tacit deletes or returns Customer Data as set out in the Privacy Policy and the DPA.",
        },
      ],
    },
    {
      id: "customer-responsibilities",
      title: "5. Customer responsibilities",
      blocks: [
        {
          ul: [
            "Have a lawful basis to connect each source and process the personal data in it, and give employees and other affected people the notices and, where required, obtain the consents or consultations the law requires.",
            "Configure the scope of connected sources and the redaction rules appropriately for its organization.",
            "Comply with the terms of the third-party services it connects (such as Google Workspace, Microsoft 365, and Slack).",
            "Not use knowledge profiles or other outputs as the sole basis for hiring, termination, compensation, or disciplinary decisions.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "6. Acceptable use",
      blocks: [
        { p: "Customer and its users must not:" },
        {
          ul: [
            "Use the Services in violation of any law, or to infringe or misappropriate the rights of others.",
            "Use the Services for covert surveillance of individuals or to process special categories of personal data without a lawful basis.",
            "Upload malware, or attempt to gain unauthorized access to the Services or to other customers' data.",
            "Reverse engineer, copy, or resell the Services, or use them to build a competing product.",
            "Interfere with or overload the Services, or bypass usage limits or security controls.",
          ],
        },
      ],
    },
    {
      id: "ai-output",
      title: "7. AI-generated output",
      blocks: [
        {
          p: "The Services use artificial intelligence to classify and structure content. Output may be inaccurate or incomplete. Customer is responsible for reviewing output before relying on it, and for decisions made with it. Captured knowledge carries a confidence score and can be confirmed or rejected by Customer's users.",
        },
      ],
    },
    {
      id: "fees",
      title: "8. Fees and payment",
      blocks: [
        {
          p: "Customer will pay the fees set out in the order form, in the currency and on the schedule stated there. Unless the order form says otherwise, fees are invoiced in advance, payable within 30 days of the invoice date, non-refundable, and exclusive of taxes, which Customer is responsible for (other than taxes on Tacit's income). We may suspend the Services if an undisputed amount is more than 30 days overdue, after giving notice.",
        },
      ],
    },
    {
      id: "ip",
      title: "9. Intellectual property",
      blocks: [
        {
          p: "Tacit and its licensors own the Services, the software, models, methods, and documentation, and all improvements to them. These Terms do not transfer any of those rights to Customer, other than the right to use the Services during the term. If Customer gives us feedback, we may use it without obligation.",
        },
        {
          p: "Deliverables created specifically for Customer under a statement of work are licensed or assigned as that statement of work provides.",
        },
      ],
    },
    {
      id: "confidentiality",
      title: "10. Confidentiality",
      blocks: [
        {
          p: "Each party will protect the other's confidential information with at least reasonable care, use it only to perform under the agreement, and disclose it only to people who need to know it and are bound by similar obligations. This does not apply to information that is public, already known, independently developed, or lawfully received from a third party, or to disclosures required by law with prompt notice where permitted.",
        },
      ],
    },
    {
      id: "third-party",
      title: "11. Third-party services",
      blocks: [
        {
          p: "The Services connect to third-party products chosen by Customer. Tacit is not responsible for those products, their availability, or changes to their APIs that affect the Services. Use of those products is governed by their own terms.",
        },
      ],
    },
    {
      id: "term",
      title: "12. Term, suspension, and termination",
      blocks: [
        {
          p: "The agreement runs for the term in the order form and renews as stated there. Either party may terminate for material breach that is not cured within 30 days of written notice. We may suspend access immediately if needed to prevent harm to the Services, other customers, or third parties, or to comply with law, and will restore it once the issue is resolved.",
        },
        {
          p: "On termination, Customer's right to use the Services ends, unpaid fees for the period already provided become due, and Customer Data is handled as described in section 4. Sections that by their nature should survive termination will survive.",
        },
      ],
    },
    {
      id: "warranties",
      title: "13. Warranties and disclaimers",
      blocks: [
        {
          p: "Tacit will provide the Services with reasonable skill and care and in material accordance with their documentation. Except as expressly stated, the Services are provided \"as is\" and \"as available\", and Tacit disclaims all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the extent the law allows.",
        },
      ],
    },
    {
      id: "liability",
      title: "14. Limitation of liability",
      blocks: [
        {
          p: "To the extent the law allows, neither party is liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, and each party's total liability under the agreement is limited to the fees paid or payable by Customer in the 12 months before the event giving rise to the claim. These limits do not apply to Customer's payment obligations, breach of confidentiality, a party's indemnification obligations, or liability that cannot be limited by law.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "15. Indemnification",
      blocks: [
        {
          p: "Tacit will defend Customer against third-party claims that the Services infringe intellectual property rights, and pay resulting damages awarded or agreed in settlement. Customer will defend Tacit against third-party claims arising from Customer Data or from Customer's breach of sections 5 or 6, and pay resulting damages awarded or agreed in settlement. The indemnified party must give prompt notice, reasonable cooperation, and control of the defense to the indemnifying party.",
        },
      ],
    },
    {
      id: "general",
      title: "16. General",
      blocks: [
        {
          ul: [
            "Governing law and venue are those stated in the order form or signed agreement.",
            "We may update these Terms. We will post the new version on this page and, for material changes, notify account administrators before they take effect. Continued use after that date means acceptance.",
            "Neither party may assign the agreement without the other's consent, except to a successor in a merger, acquisition, or sale of substantially all its assets.",
            "Neither party is liable for delays caused by events beyond its reasonable control.",
            "If a provision is unenforceable, the rest remains in effect. Failure to enforce a provision is not a waiver.",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "17. Contact and support",
      blocks: [
        {
          p: `${LEGAL_ENTITY}. Customer support, legal notices, and questions about these Terms: ${SUPPORT_EMAIL}.`,
        },
      ],
    },
  ],
};

const es: LegalDoc = {
  metaTitle: "Términos de servicio — Tacit",
  metaDescription:
    "Los términos que rigen el acceso y uso del sitio, la aplicación, las integraciones y los servicios de Tacit.",
  crumb: "Inicio",
  title: "Términos de servicio",
  deck: "Los términos que rigen el acceso y uso de tacit.guru, app.tacit.guru, nuestra extensión de navegador, integraciones y servicios.",
  updated: "Última actualización: 20 de octubre de 2026",
  tocLabel: "Contenido",
  sections: [
    {
      id: "acceptance",
      title: "1. Aceptación de estos términos",
      blocks: [
        {
          p: `Estos Términos de servicio ("Términos") son un acuerdo entre ${LEGAL_ENTITY} ("Tacit", "nosotros") y la organización que usa nuestros servicios ("Cliente", "tú"). Al crear una cuenta, conectar una integración, firmar una orden de compra o usar los servicios, aceptas estos Términos en nombre de tu organización y confirmas que tienes facultades para hacerlo.`,
        },
        {
          p: "Si el Cliente firmó un contrato por separado con Tacit, ese contrato prevalece sobre estos Términos en lo que se contradigan. Las órdenes de compra, los alcances de trabajo y el Acuerdo de Tratamiento de Datos (DPA) forman parte del acuerdo.",
        },
      ],
    },
    {
      id: "services",
      title: "2. Los servicios",
      blocks: [
        {
          p: "Tacit presta una capa consultiva, una plataforma de conocimiento que captura cómo se hace el trabajo a partir de las fuentes que conecta el Cliente, implementación de agentes y servicios relacionados (en conjunto, los \"Servicios\"). El alcance, el precio y la vigencia de los Servicios de pago se establecen en la orden de compra o alcance de trabajo aplicable.",
        },
        {
          p: "Podemos mejorar y cambiar los Servicios con el tiempo. No haremos cambios que reduzcan de forma relevante la funcionalidad principal de los Servicios de pago durante una suscripción sin aviso previo.",
        },
      ],
    },
    {
      id: "accounts",
      title: "3. Cuentas y acceso",
      blocks: [
        {
          ul: [
            "El Cliente es responsable de sus usuarios, de mantener la confidencialidad de sus credenciales y de toda actividad en sus cuentas.",
            "Los usuarios deben ser empleados o contratistas del Cliente autorizados para usar los Servicios en su nombre.",
            "El Cliente debe avisarnos de inmediato, en el contacto de soporte indicado abajo, de cualquier acceso no autorizado o problema de seguridad.",
          ],
        },
      ],
    },
    {
      id: "customer-data",
      title: "4. Datos del Cliente",
      blocks: [
        {
          p: "El Cliente conserva todos los derechos sobre el contenido que conecta o envía y sobre el conocimiento derivado de él (\"Datos del Cliente\"). El Cliente otorga a Tacit una licencia limitada para alojar, tratar y mostrar los Datos del Cliente solo para prestar, proteger y dar soporte a los Servicios, conforme a nuestro Aviso de privacidad y al DPA.",
        },
        {
          p: "Tacit no vende los Datos del Cliente, no los usa para publicidad y no los usa para entrenar modelos de IA generales. Los datos recibidos de Google, Microsoft y Slack se tratan conforme a las políticas de esas plataformas, incluida la Política de Datos de Usuario de los Servicios de API de Google y sus requisitos de Uso Limitado.",
        },
        {
          p: "El Cliente puede exportar sus datos y desconectar cualquier fuente en cualquier momento. Al terminar el acuerdo, Tacit elimina o devuelve los Datos del Cliente según el Aviso de privacidad y el DPA.",
        },
      ],
    },
    {
      id: "customer-responsibilities",
      title: "5. Responsabilidades del Cliente",
      blocks: [
        {
          ul: [
            "Contar con una base legal para conectar cada fuente y tratar los datos personales que contiene, y dar a los empleados y demás personas afectadas los avisos y, cuando aplique, obtener los consentimientos o consultas que exija la ley.",
            "Configurar adecuadamente el alcance de las fuentes conectadas y las reglas de redacción para su organización.",
            "Cumplir los términos de los servicios de terceros que conecte (como Google Workspace, Microsoft 365 y Slack).",
            "No usar los perfiles de conocimiento u otros resultados como única base para decisiones de contratación, despido, compensación o disciplina.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "6. Uso aceptable",
      blocks: [
        { p: "El Cliente y sus usuarios no deben:" },
        {
          ul: [
            "Usar los Servicios en violación de cualquier ley, o para infringir o apropiarse de derechos de terceros.",
            "Usar los Servicios para vigilar de forma encubierta a personas o para tratar datos personales sensibles sin base legal.",
            "Subir software malicioso o intentar acceder sin autorización a los Servicios o a los datos de otros clientes.",
            "Hacer ingeniería inversa, copiar o revender los Servicios, o usarlos para construir un producto competidor.",
            "Interferir con los Servicios o sobrecargarlos, o eludir límites de uso o controles de seguridad.",
          ],
        },
      ],
    },
    {
      id: "ai-output",
      title: "7. Resultados generados por IA",
      blocks: [
        {
          p: "Los Servicios usan inteligencia artificial para clasificar y estructurar contenido. Los resultados pueden ser inexactos o incompletos. El Cliente es responsable de revisarlos antes de confiar en ellos y de las decisiones que tome con ellos. El conocimiento capturado lleva un nivel de confianza y los usuarios del Cliente pueden confirmarlo o rechazarlo.",
        },
      ],
    },
    {
      id: "fees",
      title: "8. Precio y pago",
      blocks: [
        {
          p: "El Cliente pagará el precio establecido en la orden de compra, en la moneda y con el calendario ahí indicados. Salvo que la orden diga otra cosa, se factura por adelantado, se paga dentro de los 30 días siguientes a la fecha de la factura, no es reembolsable y no incluye impuestos, que corren a cargo del Cliente (salvo los impuestos sobre los ingresos de Tacit). Podemos suspender los Servicios si un monto no disputado tiene más de 30 días de atraso, previo aviso.",
        },
      ],
    },
    {
      id: "ip",
      title: "9. Propiedad intelectual",
      blocks: [
        {
          p: "Tacit y sus licenciantes son titulares de los Servicios, el software, los modelos, los métodos y la documentación, y de todas sus mejoras. Estos Términos no transfieren ninguno de esos derechos al Cliente, salvo el derecho de usar los Servicios durante la vigencia. Si el Cliente nos da retroalimentación, podemos usarla sin obligación alguna.",
        },
        {
          p: "Los entregables creados específicamente para el Cliente bajo un alcance de trabajo se licencian o ceden según lo que ese alcance establezca.",
        },
      ],
    },
    {
      id: "confidentiality",
      title: "10. Confidencialidad",
      blocks: [
        {
          p: "Cada parte protegerá la información confidencial de la otra con al menos un cuidado razonable, la usará solo para cumplir el acuerdo y la revelará solo a quienes necesiten conocerla y estén sujetos a obligaciones similares. Esto no aplica a información pública, ya conocida, desarrollada de forma independiente u obtenida legalmente de un tercero, ni a revelaciones exigidas por ley, con aviso oportuno cuando esté permitido.",
        },
      ],
    },
    {
      id: "third-party",
      title: "11. Servicios de terceros",
      blocks: [
        {
          p: "Los Servicios se conectan con productos de terceros elegidos por el Cliente. Tacit no es responsable de esos productos, de su disponibilidad ni de cambios en sus API que afecten a los Servicios. El uso de esos productos se rige por sus propios términos.",
        },
      ],
    },
    {
      id: "term",
      title: "12. Vigencia, suspensión y terminación",
      blocks: [
        {
          p: "El acuerdo dura lo establecido en la orden de compra y se renueva como ahí se indique. Cualquiera de las partes puede terminarlo por incumplimiento grave que no se subsane dentro de los 30 días siguientes a un aviso por escrito. Podemos suspender el acceso de inmediato si es necesario para evitar daños a los Servicios, a otros clientes o a terceros, o para cumplir la ley, y lo restableceremos una vez resuelto el problema.",
        },
        {
          p: "Al terminar, cesa el derecho del Cliente a usar los Servicios, se vuelven exigibles las cantidades pendientes por el periodo ya prestado y los Datos del Cliente se tratan conforme a la sección 4. Las secciones que por su naturaleza deban subsistir seguirán vigentes.",
        },
      ],
    },
    {
      id: "warranties",
      title: "13. Garantías y exclusiones",
      blocks: [
        {
          p: "Tacit prestará los Servicios con pericia y cuidado razonables y conforme, en lo sustancial, a su documentación. Salvo lo expresamente indicado, los Servicios se prestan \"tal cual\" y \"según disponibilidad\", y Tacit excluye cualquier otra garantía, expresa o implícita, incluidas las de comerciabilidad, idoneidad para un fin particular y no infracción, en la medida en que la ley lo permita.",
        },
      ],
    },
    {
      id: "liability",
      title: "14. Limitación de responsabilidad",
      blocks: [
        {
          p: "En la medida en que la ley lo permita, ninguna de las partes responde por daños indirectos, incidentales, especiales, consecuenciales o punitivos, ni por lucro cesante, pérdida de ingresos o de datos, y la responsabilidad total de cada parte bajo el acuerdo se limita a lo pagado o pagadero por el Cliente en los 12 meses anteriores al hecho que origine la reclamación. Estos límites no aplican a las obligaciones de pago del Cliente, al incumplimiento de confidencialidad, a las obligaciones de indemnización ni a la responsabilidad que la ley no permita limitar.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "15. Indemnización",
      blocks: [
        {
          p: "Tacit defenderá al Cliente frente a reclamaciones de terceros que aleguen que los Servicios infringen derechos de propiedad intelectual, y pagará los daños resultantes condenados o pactados en una transacción. El Cliente defenderá a Tacit frente a reclamaciones de terceros derivadas de los Datos del Cliente o del incumplimiento de las secciones 5 o 6, y pagará los daños resultantes condenados o pactados en una transacción. La parte indemnizada debe avisar con prontitud, cooperar razonablemente y ceder el control de la defensa a la parte que indemniza.",
        },
      ],
    },
    {
      id: "general",
      title: "16. Disposiciones generales",
      blocks: [
        {
          ul: [
            "La ley aplicable y la jurisdicción son las que establezca la orden de compra o el contrato firmado.",
            "Podemos actualizar estos Términos. Publicaremos la nueva versión en esta página y, si los cambios son relevantes, avisaremos a los administradores de cuenta antes de que entren en vigor. Seguir usando los Servicios después de esa fecha implica aceptarlos.",
            "Ninguna de las partes puede ceder el acuerdo sin el consentimiento de la otra, salvo a un sucesor por fusión, adquisición o venta de sustancialmente todos sus activos.",
            "Ninguna de las partes responde por retrasos causados por hechos fuera de su control razonable.",
            "Si una disposición no es exigible, el resto sigue vigente. No ejercer un derecho no implica renunciar a él.",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "17. Contacto y soporte",
      blocks: [
        {
          p: `${LEGAL_ENTITY}. Soporte a clientes, avisos legales y preguntas sobre estos Términos: ${SUPPORT_EMAIL}.`,
        },
      ],
    },
  ],
};

export const terms: Record<Locale, LegalDoc> = { en, es };
