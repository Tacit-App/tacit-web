import type { LandingCopy } from "../types";

/** English landing copy. Includes PR #5 problem wording (workflows / culture). */
export const en: LandingCopy = {
  meta: {
    title: "Tacit — Understand, transform, and automate your operations",
    description:
      "Powered by the tacit knowledge inside your company. Map how work really happens, then build tools and agents that fit.",
  },
  nav: {
    homeAria: "Tacit home",
    bookDiagnostic: "Book a diagnostic",
    languageLabel: "Language",
  },
  cta: {
    bookDiagnostic: "Book a diagnostic",
    seeHow: "See how it works",
    siteUrlLabel: "tacit.guru",
  },
  diagnosticMailSubject: "Book a diagnostic",
  productAria: "Product",
  home: {
    kicker: "For B2B companies",
    headline: "Understand, transform, and automate your operations.",
    sub: "Powered by the tacit knowledge inside your company.",
    tagline: "The knowledge behind the work.",
    problem: {
      eyebrow: "Problem",
      title: "New tools fail when workflows stay the same.",
      body: "Most tech projects stall because of people and culture, not bad software. If you do not see how work really moves, agents only speed up the mess.",
      closer: "See the culture before you automate.",
    },
    premise: {
      eyebrow: "What we do",
      title: "A clear picture first. Agents later.",
      body: "Tacit maps real communication, tools in use, and company knowledge. That picture lets you change how teams work. After that, we add a judgment layer so agents act like your best people, not empty chatbots.",
      imageAlt: "Knowledge Type Map and Cognitive Competency Profile",
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps.",
      imageAlt: "Pulse priorities: Do Now, Plan, Delegate, and Low Priority",
      steps: [
        {
          n: "01 · Map",
          title: "See the real work",
          body: "How people talk, what tools they use, who decides, and how information moves.",
        },
        {
          n: "02 · Change",
          title: "Fix workflows and adapt culture",
          body: "Train teams, change how work happens, and install Tacit with the tools that fit.",
        },
        {
          n: "03 · Automate",
          title: "Agents with judgment",
          body: "Automate with agents and assistants that carry the judgment of your best people.",
        },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      title: "Built for ground-up agentic transformation.",
      body: "Logistics, tech, and other B2B teams whose work depends on how the client operates. When you understand the client's processes and decisions, you can make their operation faster and yours stronger.",
      closer: "Client efficiency is the goal. Yours improves with it.",
    },
    contrast: {
      eyebrow: "Contrast",
      title: "Usual path vs. Tacit",
      usualPath: "Usual path",
      withTacit: "With Tacit",
      rows: [
        ["Buy tools / agents first", "Map how work really happens first"],
        ["Trust the org chart", "See real communication and tools"],
        ["Blame the software", "Fix habits, then automate"],
        ["Guess how the client works", "Know their flow, then optimize it"],
      ],
    },
    close: {
      title:
        "Start with how your own company tacitly works to optimize your clients' operations.",
      body: "Book a diagnostic. Get the map. Then build tools and agents that fit.",
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
