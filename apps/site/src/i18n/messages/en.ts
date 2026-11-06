import type { LandingCopy } from "../types";

/** English landing copy. Includes PR #5 problem wording (workflows / culture). */
export const en: LandingCopy = {
  meta: {
    title: "Tacit — Human decisions as the engine of growth",
    description:
      "Consulting layer, agent implementation, an agent in the loop, and a higher client SLA. The core is how your people actually work.",
  },
  nav: {
    homeAria: "Tacit home",
    bookDiagnostic: "Book a diagnostic",
    languageLabel: "Language",
    menuLabel: "Menu",
    skip: "Skip to content",
    platformMenu: "Platform parts",
    links: [
      { page: "services", label: "Services" },
      { page: "thesis", label: "Thesis" },
      { page: "about", label: "About" },
    ],
  },
  cta: {
    bookDiagnostic: "Book a diagnostic",
    seeHow: "See services",
    siteUrlLabel: "tacit.guru",
  },
  diagnosticMailSubject: "Book a diagnostic",
  productAria: "Product",
  home: {
    kicker: "For B2B companies",
    headline: "Human decisions as the engine of growth.",
    sub: "Profitability through an agentic strategy built on how people in the company already think and work.",
    tagline: "Experience behind execution.",
    benefits: {
      heading: "With Tacit, your company will:",
      items: [
        {
          title: "Reduce the risk of automating.",
          body: "Most companies want AI but don't know where to start, and deploying agents blindly breaks processes. We diagnose first, then implement where 80% of the value is.",
        },
        {
          title: "Keep its knowledge.",
          body: "When someone leaves, what they knew isn't lost. When someone joins, they ramp up faster.",
        },
        {
          title: "See its real inefficiencies.",
          body: "Bottlenecks, errors and people dependencies, not the ones on the org chart.",
        },
        {
          title: "Run agents that actually work.",
          body: "They feed on Tacit's context, not text search.",
        },
        {
          title: "Pay less per agent.",
          body: "They get only the context they need, already processed, instead of reading entire documents.",
        },
      ],
    },
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
      body: "An entrepreneurial and academic team of two engineers trained in neuroscience, artificial intelligence, and mathematics is building an engine that joins complex systems, logic algorithms, Bayesian theory, graph theory, LIWC, and modern theories of thought. The engine understands organizations as they are, and strengthens their digital transformation through agents.",
    },
    platform: {
      eyebrow: "Platform",
      title: "Four parts of the same work.",
      intro:
        "Agentic success runs on judgment and culture. Tacit makes both legible. Tacit captures the daily workflows and the tacit decisions behind them, and detects the inefficiencies where agents create the most value. Tech is a layer, not the whole story.",
      diagramAlt: "Agents, Tech, Operations, and Culture, with Culture as the base.",
      parts: [
        {
          id: "consulting",
          name: "Diagnostic",
          summary:
            "Map where expertise lives, how it is used, and which tools and steps are not productive.",
          body: "Map where expertise lives, how it is used, and which tools and steps are not productive.",
          marks: ["Human workflows", "A defined place", "Measurable value"],
        },
        {
          id: "agents",
          name: "Understand premises",
          summary: "Change how the team works and trains: education, roles, and structure.",
          body: "Change how the team works and trains: education, roles, and structure. Surface the inefficiencies and the bottlenecks.",
          marks: ["Simple and measurable", "Core points", "Quick results", "Adoption", "Human-agent symbiosis"],
        },
        {
          id: "apps",
          name: "Core basic agents",
          summary:
            "Implement Tacit and the tools people will actually use, so know-how becomes a living layer.",
          body: "Implement Tacit and the tools people will actually use, so know-how becomes a living layer.",
          marks: ["Centralize", "Evaluate", "Manage", "Their system", "Empowered by Tacit", "Clients", "Stakeholders"],
        },
        {
          id: "development",
          name: "Agentification",
          summary:
            "Ship specific agents that show a visible gain, then extend them with the same people.",
          body: "Ship specific agents that show a visible gain, then extend them with the same people.",
          marks: ["Core problems", "Tacit layer", "Intelligent infrastructure"],
        },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "The operations we work in.",
      items: [
        { id: "technology", name: "Technology / IT Sourcing" },
        { id: "logistics", name: "Logistics" },
        { id: "fintech", name: "Fintech" },
        { id: "healthcare", name: "Healthcare" },
      ],
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
  pages: {
    platform: {
      title: "Tacit — Platform",
      description:
        "Four parts of the same work: diagnostic, premises, core agents, and agentification.",
    },
    services: {
      title: "Tacit — Services",
      description:
        "Consulting layer, agent implementation, an agent in the loop, and a higher client SLA.",
    },
    thesis: {
      title: "Tacit — Thesis",
      description:
        "The usual path buys tools first. Tacit starts with how the work actually happens.",
    },
    about: {
      title: "Tacit — About",
      description: "Who the services are for, and the engine behind them.",
    },
    demo: {
      title: "Tacit — Book a diagnostic",
      description:
        "Book a diagnostic. We start from how your team thinks and what they know.",
    },
  },
  field: {
    captures: [
      {
        source: "Slack #sales",
        body: "When a prospect goes dark after the Zoom demo, send a 90-second Loom recap, not a follow-up email. Reply rate jumps from 12% to 58%. Tag the champion, not the DM.",
        person: "Ana G.",
        role: "Sales Lead",
      },
      {
        source: "Teams, sales channel",
        body: 'On Teams calls, share screen in "Window" mode, not "Desktop". It hides your other tabs and makes you look 10× more prepared. Start recording only after pleasantries.',
        person: "Luis R.",
        role: "Account Executive",
      },
      {
        source: "Slack #deals",
        body: "Never demo with default Zoom background. It turns off enterprise buyers. Real environment or blurred. Mute all Slack notifications before screen sharing.",
        person: "Marco V.",
        role: "Senior AE",
      },
      {
        source: "Slack #ops",
        body: 'Paste the DocuSign link in a Slack DM to the CFO with a 2-line summary of what they\'re signing. Eliminates the "I need to review with legal" delay. Saves 3–5 days per deal.',
        person: "María F.",
        role: "Sales Manager",
      },
    ],
    dayOne: {
      title: "New hire. Day one. Full context.",
      lead: "A living guide from what their predecessor actually did, not a six-month scavenger hunt.",
      name: "Sofia Martínez",
      role: "Account Manager, joined today",
      items: [
        {
          title: "How to approach SaaS enterprise prospects",
          meta: "14 tactics from 3 senior reps",
          tag: "Sales, negotiation",
        },
        {
          title: "Follow-up timing per industry",
          meta: "Retail, finance, and tech covered",
          tag: "Client management",
        },
        {
          title: "CRM shortcuts and pipeline rules",
          meta: "What the team actually does",
          tag: "Tools, workflow",
        },
      ],
      footer: "38 knowledge items ready for your role",
    },
    judgment: [
      {
        title: "Connect via MCP",
        body: "Plug Tacit into Claude or ChatGPT so answers include how your team really works, not only the wiki.",
      },
      {
        title: "Feed your own agents",
        body: "Give internal bots operational context: escalations, exceptions, and the judgment that never got documented.",
      },
      {
        title: "The fuel AI was missing",
        body: "Your company's unwritten know-how, captured from Slack, email, and meetings, finally usable by people and machines.",
      },
      {
        title: "A living knowledge graph",
        body: "Domains, links, and exceptions agents can navigate, not a flat dump of stale docs.",
      },
      {
        title: "Delegate the right things",
        body: "Routine lookups and known playbook steps go to the agent. Ambiguous calls stay with people.",
      },
      {
        title: "Human in the loop, by design",
        body: "Tacit doesn't replace your team. It gives agents context so humans keep control of the decisions that matter.",
      },
    ],
    cost: {
      title: "Your best employee just resigned. Now what?",
      lead: "Five years of client context and hard-won judgment walk out in two weeks. A rushed handoff doc rarely survives the first month.",
      withoutTitle: "Without Tacit",
      withoutBody:
        "Exit interviews and a Notion page nobody updates. The next hire relearns which buyers ghost, which formulas break, which CFO needs two lines, then stores it only in their head again.",
      withTitle: "With Tacit",
      withBody:
        "Day one, they open a living guide built from what the previous person actually did in Slack, email, and meetings: searchable and ready to run.",
    },
    founder: {
      quote:
        "Documented knowledge gives a company guidelines and direction. But tacit knowledge is the foundation of its identity, character and intelligence. A company cannot survive without it. In the AI paradigm, having this knowledge stops being optional. It becomes the condition for which companies survive this shift, and which don't.",
      name: "Juan Carlos Martorell",
      role: "Founder and CEO, Tacit. MBA IPADE. MSc Neuroscience and AI",
    },
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
    tagline: "Experience behind execution.",
    privacy: "Privacy",
  },
};
