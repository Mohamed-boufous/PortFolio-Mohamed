// DarkModeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Créez le contexte
const DarkModeContext = createContext();

// Function to generate star data
const generateStars = () => {
    const numStars = 100; // Adjust as needed
    return Array.from({ length: numStars }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // random size
    }));
  };

// Créez le fournisseur de contexte
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stars, setStars] = useState([]);

  // Charger le mode sombre depuis localStorage au démarrage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
     // Initialize stars if dark mode is on
     if (savedDarkMode) {
        setStars(generateStars());
    }
  }, []);

  // Appliquer le mode sombre au document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setStars(generateStars());
    } else {
      document.documentElement.classList.remove("dark");
      setStars([]);
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, stars }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useDarkMode = () => useContext(DarkModeContext);

// Exportez le contexte lui-même (optionnel, mais utile si vous en avez besoin ailleurs)
export { DarkModeContext };