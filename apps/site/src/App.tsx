import { StrictMode } from "react";
import { SiteLayout } from "./components/SiteLayout";
import { I18nProvider, type Page } from "./i18n";
import { AboutPage } from "./screens/AboutPage";
import { DemoPage } from "./screens/DemoPage";
import { HomePage } from "./screens/HomePage";
import { PlatformPage } from "./screens/PlatformPage";
import { PrivacyPage } from "./screens/PrivacyPage";
import { ServicesPage } from "./screens/ServicesPage";
import { ThesisPage } from "./screens/ThesisPage";
import "./styles/global.css";
import "./styles/site.css";
import "./styles/reading.css";

function Screen({ page }: { page: Page }) {
  switch (page) {
    case "platform":
      return <PlatformPage />;
    case "services":
      return <ServicesPage />;
    case "thesis":
      return <ThesisPage />;
    case "about":
      return <AboutPage />;
    case "demo":
      return <DemoPage />;
    case "privacy":
      return <PrivacyPage />;
    default:
      return <HomePage />;
  }
}

export default function App({ page = "home" }: { page?: Page }) {
  return (
    <StrictMode>
      <I18nProvider>
        <SiteLayout page={page}>
          <Screen page={page} />
        </SiteLayout>
      </I18nProvider>
    </StrictMode>
  );
}
