import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "../BlurText/BlurText";
import TrueFocus from '../TrueFocus/TrueFocus';
import { AsciiArt } from "../components/ui/ascii-art";
import { LanguageContext } from "../LanguageContext";
import { useDarkMode } from "../DarkModeContext";
import profileImage from "../assets/Mohamed_Boufous.jpg";
import SEOHead from "../components/SEOHead";


const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Home = () => {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useDarkMode();

    const handleDownload = () => {
        setIsDownloaded(true);
    };

    return (
        <main>
            <SEOHead
                title="Home"
                description="Mohamed Boufous – AI and Big Data Engineering student at ENSA Agadir. Explore my portfolio showcasing web development, machine learning, and data engineering projects."
                path="/"
            />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen p-4 md:p-8 pt-20 md:pt-24 relative z-10">
            {/* Interactive Profile Picture Container */}
            <div className="order-1 md:order-2 mb-8 md:mb-0 w-full md:w-1/2 flex justify-center perspective-1000">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl overflow-hidden border-4 border-transparent transition-all duration-700">
                    
                    {/* The AsciiArt (Underneath Layer, always visible when top is hidden) */}
                    <div className="absolute inset-0 z-0">
                        <AsciiArt
                            src={profileImage}
                            resolution={80}
                            color={isDarkMode ? "white" : "#7c3aed"} // #7c3aed is tailwind's purple-600
                            animationStyle="fade"
                            animationDuration={1.5}
                            animateOnView={false}
                            className={`w-full h-full ${isDarkMode ? 'bg-neutral-950' : 'bg-neutral-100'}`} 
                        />
                    </div>

                    {/* Original Photo (Top Layer, animating automatically to create a glitch effect) */}
                    <motion.img
                        src={profileImage}
                        alt="Mohamed Boufous - Portfolio"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        animate={{ 
                            opacity: [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1] 
                        }}
                        transition={{
                            duration: 6,             // Loop runs every 6 seconds
                            times: [
                                0,      // start
                                0.5,    // wait perfectly still
                                0.51,   // FLASH 1 OFF (quick micro-glitch)
                                0.53,   // FLASH 1 ON
                                0.6,    // wait perfectly still
                                0.61,   // FLASH 2 OFF (second micro-glitch)
                                0.63,   // FLASH 2 ON
                                0.7,    // wait perfectly still
                                0.71,   // THE BIG REVEAL OFF (Ascii visible)
                                0.95,   // THE BIG REVEAL ENDS (Stays visible for 1.44 seconds)
                                0.96,   // ON (Back to original picture instantly)
                                1       // end
                            ], 
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    
                    {/* Interactive Animated Border around the group */}
                    <motion.div
                        className={`absolute inset-0 rounded-full border-[2px] border-dashed pointer-events-none z-20 ${isDarkMode ? "border-white/30" : "border-purple-600/30"}`}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>
            </div>
            {/* Contenu principal en bas sur les petits écrans */}
            <div className="order-2 md:order-1 w-full text-center md:text-left">
                {/* Centrer uniquement sur les écrans mobiles */}
                <div className="flex justify-center md:justify-start mb-2 md:mb-4">
                    <BlurText
                        text={language === "en" ? "Welcome To My Portfolio" : "Bienvenue sur mon portfolio"}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider whitespace-nowrap ${
                            isDarkMode ? "text-neutral-300 drop-shadow-sm" : "text-neutral-600 drop-shadow-sm"
                        }`}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black mb-6 tracking-tight leading-tight drop-shadow-sm">
                        <span className={`block mb-4 text-sm md:text-base font-bold uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? "from-purple-300 to-indigo-300" : "from-purple-700 to-indigo-700"}`}>
                            {language === "en" ? "My name is" : "Je m'appelle"}
                        </span>
                        <span className="inline-block mt-1">
                            <TrueFocus
                                sentence="Mohamed Boufous"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="purple"
                                animationDuration={2}
                                pauseBetweenAnimations={0.02}
                            />
                        </span>
                    </h1>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className={`relative pl-6 py-2 border-l-2 md:border-l-4 ${isDarkMode ? "border-purple-500/50" : "border-purple-600/70"} 
                                    bg-gradient-to-r ${isDarkMode ? "from-purple-900/10 to-transparent" : "from-purple-100/40 to-transparent"} 
                                    rounded-r-xl`}
                    >
                        <p
                            className={`text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-relaxed font-normal tracking-wide ${
                                isDarkMode ? "text-neutral-200" : "text-neutral-800"
                            }`}
                        >
                            {language === "en" ? (
                                <>
                                    <span className="block mb-2">
                                        I'm a student in <b className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? "from-purple-400 to-blue-400" : "from-purple-700 to-blue-700"}`}>AI and Big Data Engineering</b>.
                                    </span>
                                    <span className={`block text-base md:text-lg font-medium opacity-90 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                                        I'm interested in web development, AI, and Big Data.
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="block mb-2">
                                        Je suis étudiant en <b className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? "from-purple-400 to-blue-400" : "from-purple-700 to-blue-700"}`}>ingénierie de l'IA et du Big Data</b>.
                                    </span>
                                    <span className={`block text-base md:text-lg font-medium opacity-90 transition-colors duration-300 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                                        Je suis intéressé par le développement web, l'IA et le Big Data.
                                    </span>
                                </>
                            )}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bouton de téléchargement avec animation */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <motion.a
                        href={`${
                            language === "en" ? "resume_Mohamed_Boufous.pdf" : "Cv_Mohamed_Boufous.pdf"
                        }`}
                        download={`${
                            language === "en" ? "resume_Mohamed_Boufous.pdf" : "Cv_Mohamed_Boufous.pdf"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleDownload}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-800 transition-colors duration-300"
                    >
                        {language === "en" ? "Download CV" : "Télécharger CV"}
                    </motion.a>
                    {/* Animation de succès après le téléchargement */}
                    <AnimatePresence>
                        {isDownloaded && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="ml-2 text-green-600 font-semibold">
                                    {language === "en" ? "Resume downloaded " : "CV téléchargé "}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
        </main>
    );
};

export default Home;