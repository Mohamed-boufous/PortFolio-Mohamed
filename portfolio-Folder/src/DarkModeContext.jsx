// DarkModeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Créez le contexte
const DarkModeContext = createContext();

// Créez le fournisseur de contexte
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Charger le mode sombre depuis localStorage au démarrage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  // Appliquer le mode sombre au document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useDarkMode = () => useContext(DarkModeContext);

// Exportez le contexte lui-même (optionnel, mais utile si vous en avez besoin ailleurs)
export { DarkModeContext };