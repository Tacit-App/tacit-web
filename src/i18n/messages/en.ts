import type { LandingCopy } from "../types";

/** English landing copy. Includes PR #5 problem wording (workflows / culture). */
export const en: LandingCopy = {
  meta: {
    title: "Tacit — Automate your company from your team's real experience",
    description:
      "Consulting layer, agent implementation, an agent in the loop, and a higher client SLA. The core is how your people actually work.",
  },
  nav: {
    homeAria: "Tacit home",
    bookDiagnostic: "Book a diagnostic",
    languageLabel: "Language",
    menuLabel: "Sections",
    links: [
      { href: "#services", label: "Servicios" },
      { href: "#nosotros", label: "Nosotros" },
      { href: "#research", label: "Research" },
      { href: "#demo", label: "Book a demo" },
      { href: "#tesis", label: "Tesis" },
    ],
  },
  cta: {
    bookDiagnostic: "Book a diagnostic",
    seeHow: "See our services",
    siteUrlLabel: "tacit.guru",
  },
  diagnosticMailSubject: "Book a diagnostic",
  productAria: "Product",
  home: {
    kicker: "For B2B companies",
    headline: "Automate your company from your team's real experience.",
    sub: "Four services. One core.",
    tagline: "The knowledge behind the work.",
    problem: {
      eyebrow: "The core",
      title: "Every service starts from how the work really happens.",
      body: "How people communicate, which tools they use, where judgment leans, and where bottlenecks form. Without that, tools and agents only speed up the mess.",
      closer: "The client takes the service. The core is what makes it hold.",
    },
    premise: {
      eyebrow: "What we do",
      title: "A clear picture first. Agents later.",
      body: "Tacit maps real communication, tools in use, and company knowledge. That picture lets you change how teams work. After that, we add a judgment layer so agents act like your best people, not empty chatbots.",
      imageAlt: "Knowledge Type Map and Cognitive Competency Profile",
    },
    how: {
      eyebrow: "Services",
      title: "What we do for companies",
      imageAlt: "Pulse priorities: Do Now, Plan, Delegate, and Low Priority",
      steps: [
        {
          n: "01",
          id: "consulting",
          title: "Consulting layer",
          body: "We see how your employees actually communicate and how they work day to day.",
          detail:
            "We extract that knowledge so the next employee has no learning curve. We detect an inefficiency as it forms and act before the client complains.",
          points: [
            "Which tools they use, what they are biased toward, and where to find bottlenecks.",
            "That picture is extracted, so the next employee has no learning curve.",
            "An inefficiency is caught as it is created. We act then, before the client complains.",
          ],
          imageAlt: "Knowledge Type Map of how the team actually works",
          media: "knowledge-left",
        },
        {
          n: "02",
          id: "agents",
          title: "Implement agents",
          body: "Agents are implemented from the real knowledge and the tacit workflows.",
          detail:
            "An 80/20 thesis decides exactly where, how, and with whom, so those agents raise the company's productivity and growth.",
          points: [
            "The source is the real knowledge and the tacit workflows.",
            "An 80/20 thesis decides exactly where, how, and with whom.",
            "The aim is to raise the company's productivity and growth.",
          ],
          imageAlt: "Knowledge flow from work area to knowledge type",
          media: "none",
        },
        {
          n: "03",
          id: "loop",
          title: "Agent in the loop",
          body: "An agent stays in the loop as the company is agentified.",
          detail:
            "That can sit inside one area, one process, or the operation as a whole.",
          points: [
            "The agent stays in the loop of the work.",
            "Agentification can cover one area.",
            "It can cover one process, or the operation as a whole.",
          ],
          imageAlt: "Tacit graph and app menu",
          media: "none",
        },
        {
          n: "04",
          id: "sla",
          title: "Higher SLA",
          body: "Clients are asking for a higher SLA. Today the client is a black box, and that blocks high efficiency.",
          detail:
            "Integrate Tacit to understand the client's behavior and knowledge, then implement solutions whose only aim is a higher SLA and a stronger client relationship.",
          points: [
            "The client is a black box, and that black box blocks high efficiency.",
            "Tacit is integrated to understand the client's behavior and knowledge.",
            "The solutions have one aim: a higher SLA, and growth in the client relationship.",
          ],
          imageAlt: "A verified SOP with its process steps",
          media: "none",
        },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      title: "Who these services are for.",
      body: "Complex operations that inherently have high turnover, depend entirely on a few highly experienced managers, or keep a delicate relationship with clients who need a higher level of service.",
      closer: "Client efficiency is the goal. Yours improves with it.",
    },
    research: {
      eyebrow: "Research",
      title: "An engine that understands organizations as they are.",
      body: "We are two engineers, trained in neuroscience, artificial intelligence, and mathematics. From academia and from the company, we are building an engine that joins complex systems, the mathematics of propositional logic, Bayesian theory, graph theory, LIWC, and modern theories of thought. The aim is an engine that understands organizations as they are, and strengthens their digital transformation through agents.",
    },
    contrast: {
      eyebrow: "Contrast",
      title: "Usual path vs. Tacit",
      usualPath: "Usual path",
      withTacit: "With Tacit",
      rows: [
        ["Buy tools or agents first", "Start with the consulting layer"],
        ["Trust the org chart", "See how people actually work, and which tools they use"],
        ["Agents everywhere", "80/20: exactly where, how, and with whom"],
        ["The client stays a black box", "Understand them, then raise the SLA"],
      ],
    },
    close: {
      title:
        "Start with how your team thinks and what they know, then turn that real experience into profitable growth across agents and infrastructure.",
      body: "Book a diagnostic. We start from the core, then deliver the service: consulting layer, agents, an agent in the loop, or a higher SLA.",
    },
    filmLabel: "Tacit graph and app menu",
  },
  solutions: [
    {
      slug: "consultation",
      name: "AI-first consultation",
      stage: "Map",
      homeLine: "See how work, tools, and decisions actually move.",
    },
    {
      slug: "embedded-team",
      name: "Embedded team",
      stage: "Change",
      homeLine: "Sit with the team and change how the work happens.",
    },
    {
      slug: "company-brain",
      name: "Company Brain",
      stage: "What remains",
      homeLine: "The picture of how your company actually decides.",
    },
    {
      slug: "agentic-platform",
      name: "Agentic platform",
      stage: "Automate",
      homeLine: "Agents that carry the judgment, then get better.",
    },
  ],
  footer: {
    aria: "Footer",
    tagline: "The knowledge behind the work.",
  },
};
