import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext";
import { DarkModeProvider } from "./DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>
  </StrictMode>
);