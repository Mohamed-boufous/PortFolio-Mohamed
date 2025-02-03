import React from 'react';
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { useDarkMode } from "./DarkModeContext";
import Star from "./Star";

export default function App() {
    const { isDarkMode, stars } = useDarkMode();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative">
            {isDarkMode && (
                <div className="fixed inset-0 pointer-events-none">
                    {stars.map(star => (
                        <Star key={star.id} x={star.x} y={star.y} size={star.size} />
                    ))}
                </div>
            )}
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
    );
}