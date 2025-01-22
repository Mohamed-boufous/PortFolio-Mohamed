import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext"; // Importez le LanguageProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider> {/* Enveloppez App avec LanguageProvider */}
      <App />
    </LanguageProvider>
  </StrictMode>
);