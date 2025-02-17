import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/Category";
import DetailPage from "./pages/Detail";
import PaymentPage from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import CookieBanner from "./components/CookieBanner";
import { ThemeContext } from "./components/DarkLightmode/theme"; // ThemeContext
import DashboardPage from "./pages/DashboardAdmin/index";

function App() {
  // ThemeContext ile tema bilgisini alıyoruz
  const { theme } = useContext(ThemeContext);

  return (
    // Components lerinizi Homepage içinde çağırınız.
    <div className={`${theme}`}>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </div>
  );
}

export default App;
