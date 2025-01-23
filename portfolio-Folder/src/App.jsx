import React from 'react';
import "./App.css";
import Header from "./Header"; // Assurez-vous que ce chemin est correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assurez-vous que ce chemin est correct
import Skills from "./pages/Skills"; // Assurez-vous que ce chemin est correct
import Aboutme from "./pages/Aboutme"; // Assurez-vous que ce chemin est correct
import Contactme from "./pages/Contactme"; // Assurez-vous que ce chemin est correct
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} /> {/* Utilisez des minuscules pour les chemins */}
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contactme" element={<Contactme />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}