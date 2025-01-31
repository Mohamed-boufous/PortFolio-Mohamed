import React from 'react';
import "./App.css";
import Header from "./Header"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Skills from "./pages/Skills"; 
import Aboutme from "./pages/Aboutme"; 
import Contactme from "./pages/Contactme"; 
import { DarkModeProvider } from "./DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contactme" element={<Contactme />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}