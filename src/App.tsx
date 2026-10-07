import { SiteLayout } from "./components/SiteLayout";
import { I18nProvider } from "./i18n";
import { HomePage } from "./pages/HomePage";
import "./styles/site.css";

export default function App() {
  return (
    <I18nProvider>
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    </I18nProvider>
  );
}
