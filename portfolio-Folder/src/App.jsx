import React, { useRef, useEffect } from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { useDarkMode } from "./DarkModeContext";
import Star from "./Star";

export default function App() {
    const { isDarkMode, stars } = useDarkMode();
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutmeRef = useRef(null);
    const contactmeRef = useRef(null);

    const sections = {
        home: homeRef,
        skills: skillsRef,
        aboutme: aboutmeRef,
        contactme: contactmeRef,
    };

    const scrollToSection = (sectionId) => {
        sections[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Function to handle anchor links
        const handleAnchorLinks = () => {
            const hash = window.location.hash.substring(1); // Remove the '#'
            if (hash && sections[hash]) {
                scrollToSection(hash);
                window.location.hash = '';
            }
        };

        // Run on initial render and whenever the hash changes
        handleAnchorLinks();

        window.addEventListener("hashchange", handleAnchorLinks);

        return () => {
            window.removeEventListener("hashchange", handleAnchorLinks);
        };

    }, [sections]);


    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative">
             {isDarkMode && (
                <div className="fixed inset-0 pointer-events-none">
                    {stars.map(star => (
                        <Star key={star.id} x={star.x} y={star.y} size={star.size} />
                    ))}
                </div>
            )}
            <Header scrollToSection={scrollToSection}/>
            <div ref={homeRef}><Home /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={aboutmeRef}><Aboutme /></div>
            <div ref={contactmeRef}><Contactme /></div>
         </div>
    );
}