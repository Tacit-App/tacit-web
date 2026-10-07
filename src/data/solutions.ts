export type SolutionSlug =
  | "consultation"
  | "embedded-team"
  | "company-brain"
  | "agentic-platform";

export type Solution = {
  slug: SolutionSlug;
  name: string;
  stage: string;
  homeLine: string;
  title: string;
  situation: string;
  happens: string;
  keep: string;
  paragraphs: string[];
};

export const solutions: Solution[] = [
  {
    slug: "consultation",
    name: "AI-first consultation",
    stage: "Map",
    homeLine: "See how work, tools, and decisions actually move.",
    title: "See how work actually moves before you automate it.",
    situation:
      "Most tech projects stall because of people and habits, not bad software. Agents on an unread operation only speed up the mess.",
    happens:
      "We map how people talk, which tools they actually use, who decides, and how information moves.",
    keep: "A picture of the operation, and a sequence for what to change before any agent is installed.",
    paragraphs: [
      "This is the diagnostic. It starts with the company as it is, not with a stack to sell.",
      "The map is communication, tools in use, decisions, and the know-how that never made it into a wiki.",
      "You leave with that picture and a plan: what to change in the work, what to install, and what should stay with people.",
    ],
  },
  {
    slug: "embedded-team",
    name: "Embedded team",
    stage: "Change",
    homeLine: "Sit with the team and change how the work happens.",
    title: "Change the work with the people who run it.",
    situation:
      "A map does not change a habit. The workflows, the training, and the tools still have to move.",
    happens:
      "People from Tacit sit inside the company, change how work happens, and install what fits.",
    keep: "Workflows the team can run after we step back, and a brain the company can keep.",
    paragraphs: [
      "The embedded team does the change with the people who already do the work. Training, workflow changes, and Tacit where it fits.",
      "This is not a pod rewriting your codebase. The work is how judgment moves: who decides, what gets handed off, which habit wins under pressure.",
      "The aim is a team that can keep working this way without us, on top of a picture of the company they can still use.",
    ],
  },
  {
    slug: "company-brain",
    name: "Company Brain",
    stage: "What remains",
    homeLine: "The picture of how your company actually decides.",
    title: "The unwritten know-how, kept where people and agents can use it.",
    situation:
      "The valuable layer was never in the docs. It lives in heads, threads, and calls, and it leaves when people do.",
    happens:
      "Tacit captures that know-how from the work itself. It is the only tool that captures without asking.",
    keep: "Domains, decisions, and a day-one guide. People and agents read the same judgment.",
    paragraphs: [
      "Other tools wait for someone to write it down. Tacit takes it from the work already happening in the tools the team uses.",
      "What comes out is not a wiki. It is the judgment proved in the field: negotiation tactics, exceptions, shortcuts, and the reason a decision was made.",
      "A new hire opens that picture on day one. An agent can read the same picture, instead of the empty policy page.",
    ],
  },
  {
    slug: "agentic-platform",
    name: "Agentic platform",
    stage: "Automate",
    homeLine: "Agents that carry the judgment, then get better.",
    title: "Agents that act with your judgment, and correct it from outcomes.",
    situation:
      "An agent without the company’s judgment is an empty chatbot. It answers fast and misses the exception your best people already know.",
    happens:
      "Plug the brain into Claude or ChatGPT via MCP, or feed the agents you already run. Routine lookups go to the agent. Ambiguous calls stay with people.",
    keep: "The same operational judgment for people and agents. When an outcome shows the call was wrong, the brain updates, and the next decision is better.",
    paragraphs: [
      "The platform is the last step. It runs on the picture from the diagnostic and the brain, not instead of them.",
      "Connect via MCP so answers include how your team really works. Or give your own agents the escalations, exceptions, and decisions that never got documented.",
      "Tacit does not replace the team. It gives agents context so people keep the decisions that matter. An outcome that shows the call was wrong updates the brain. The next decision is better.",
    ],
  },
];

export function solutionBySlug(slug: string | undefined) {
  return solutions.find((item) => item.slug === slug);
}
