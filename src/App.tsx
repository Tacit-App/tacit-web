import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import "./styles/site.css";

export default function App() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}
