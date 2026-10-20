import { SiteLayout } from "./components/SiteLayout";
import { I18nProvider, pageFromPathname } from "./i18n";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import "./styles/site.css";

export default function App() {
  const page = pageFromPathname(window.location.pathname);

  return (
    <I18nProvider>
      <SiteLayout>
        {page === "home" ? <HomePage /> : <LegalPage page={page} />}
      </SiteLayout>
    </I18nProvider>
  );
}
