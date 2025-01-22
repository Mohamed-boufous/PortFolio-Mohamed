import React from 'react'; // Ajoutez cette ligne si ce n'est pas déjà fait
import "./App.css";
import Header from "./Header"; // Assurez-vous que ce chemin est correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assurez-vous que ce chemin est correct
import Skills from "./pages/Skills"; // Assurez-vous que ce chemin est correct
import Aboutme from "./pages/Aboutme"; // Assurez-vous que ce chemin est correct
import Contactme from "./pages/Contactme"; // Assurez-vous que ce chemin est correct
import { DarkModeProvider } from "./DarkModeContext"; // Assurez-vous que ce chemin est correct

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Contactme" element={<Contactme />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}