import { SiteLayout } from "./components/SiteLayout";
import { I18nProvider, pageFromPathname } from "./i18n";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import "./styles/site.css";

export default function App() {
  return (
    <I18nProvider>
      <SiteLayout>
        {pageFromPathname(window.location.pathname) === "privacy" ? (
          <PrivacyPage />
        ) : (
          <HomePage />
        )}
      </SiteLayout>
    </I18nProvider>
  );
}
