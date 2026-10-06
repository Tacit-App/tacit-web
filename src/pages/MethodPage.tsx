import { FounderQuote } from "../components/FounderQuote";
import { KnowledgeSphere } from "../components/KnowledgeSphere";
import { DIAGNOSTIC_MAIL } from "../data/site";
import { usePageTitle } from "../lib/usePageTitle";

export function MethodPage() {
  usePageTitle("Method — Tacit");

  return (
    <>
      <KnowledgeSphere
        primaryHref={DIAGNOSTIC_MAIL}
        primaryLabel="Book a diagnostic"
        secondaryHref="/solutions/company-brain"
        secondaryLabel="Company Brain"
      />
      <FounderQuote />
    </>
  );
}
