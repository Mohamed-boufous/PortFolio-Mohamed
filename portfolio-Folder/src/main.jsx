// main.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext"; // Importez le LanguageProvider
import { DarkModeProvider } from "./DarkModeContext"; // Importez le DarkModeProvider
import { HelmetProvider } from "react-helmet-async"; // SEO: Dynamic meta tags per page


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
      <LanguageProvider> {/* Enveloppez App avec LanguageProvider */}
        <App />
      </LanguageProvider>
    </DarkModeProvider>
    </HelmetProvider>
  </StrictMode>
);