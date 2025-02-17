import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./_global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { SWRConfig } from "swr";
import { ThemeProvider } from "./components/DarkLightmode/theme.jsx"

const BASE_URL = "https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent";

const fetcher = (endpoint) =>
  fetch(`${BASE_URL}${endpoint}`).then((res) => res.json());

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider>
    <Router>
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <App />
      </SWRConfig>
    </Router>
    </ThemeProvider>
  </StrictMode>
);


