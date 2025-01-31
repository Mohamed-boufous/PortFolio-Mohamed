import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "../BlurText/BlurText";
import TrueFocus from '../TrueFocus/TrueFocus';
import Profile from '../Elements/Profile';
import { LanguageContext } from "../LanguageContext";
import { useDarkMode } from "../DarkModeContext"; // Importez le contexte du mode sombre

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Home = () => {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useDarkMode(); // Utilisez le contexte pour obtenir le mode sombre

    const handleDownload = () => {
        setIsDownloaded(true);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen p-4 md:p-8 relative">
            {/* Composant Profile en haut sur les petits écrans */}
            <div className="order-1 md:order-2 mb-8 md:mb-0">
                <Profile />
            </div>
            {/* Contenu principal en bas sur les petits écrans */}
            <div className="order-2 md:order-1 mb-8 md:mb-16 w-full text-center md:text-left">
                {/* Centrer uniquement sur les écrans mobiles */}
                <div className="flex justify-center md:justify-start">
    <BlurText
        text={language === "en" ? "Welcome To My Portfolio" : "Bienvenue sur mon portfolio"}
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl sm:text-2xl md:text-[2.2rem] lg:text-5xl font-bold mb-4 md:mb-7 whitespace-nowrap"
    />
</div>

                <h1 className='text-2xl md:text-[2rem] font-bold mb-4'>
                    {language === "en" ? "My name is" : "Je m'appelle"}{' '}
                    <span className='inline-block'>
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
                <p
                    className={`text-lg md:text-xl leading-7 mb-6 ${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                >
                    {language === "en" ? (
                        <>
                            <span className='block'>I'm a student in AI and Big Data Engineering.</span>
                            <span className='block'>I'm interested in web development, AI, and Big Data.</span>
                        </>
                    ) : (
                        <>
                            <span className='block'>Je suis étudiant en ingénierie de l'IA et du Big Data.</span>
                            <span className='block'>Je suis intéressé par le développement web, l'IA et le Big Data.</span>
                        </>
                    )}
                </p>

                {/* Bouton de téléchargement avec animation */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <motion.a
                        href="/mohamed.pdf"
                        download="Mohamed_Boufous_CV.pdf"
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
                                    {language === "en" ? "Downloaded" : "Téléchargé"}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Home;