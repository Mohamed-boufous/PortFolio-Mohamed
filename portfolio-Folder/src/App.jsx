import React from 'react';
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { useDarkMode } from "./DarkModeContext";
import Star from "./Star";
import RippleGrid from "./RippleGrid";

function AppContent() {
    const { isDarkMode, stars } = useDarkMode();
    const location = useLocation();
    
    // Check if we are on the contact page
    const isContactPage = location.pathname === '/contactme';

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative">
            {/* Dark Mode Stars (always visible in dark mode across all pages) */}
            {isDarkMode && (
                <div className="fixed inset-0 pointer-events-none">
                    {stars.map(star => (
                        <Star key={star.id} x={star.x} y={star.y} size={star.size} />
                    ))}
                </div>
            )}
            
            {/* Light Mode RippleGrid (hidden on Contact page so it doesn't mess with the 3D globe) */}
            {!isDarkMode && !isContactPage && (
                <div className="fixed inset-0 pointer-events-none z-0 filter invert contrast-125 brightness-100">
                     <RippleGrid
                        enableRainbow={false}
                        gridColor="#ffffff"
                        rippleIntensity={0.05}
                        gridSize={10}
                        gridThickness={15}
                        mouseInteraction={true}
                        mouseInteractionRadius={1.2}
                        opacity={0.8}
                      />
                </div>
            )}
            
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/aboutme" element={<Aboutme />} />
                <Route path="/contactme" element={<Contactme />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}