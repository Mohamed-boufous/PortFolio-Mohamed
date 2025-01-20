import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importez framer-motion
import BlurText from "../BlurText/BlurText";
import TrueFocus from '../TrueFocus/TrueFocus';

import Profile from '../Elements/Profile';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Home = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100vh", padding: "0 2rem", position: "relative" }}>
      <div className='mb-16'>
        <BlurText
          text="Welcome To My Portfolio"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold mb-7"
        />
        
        <h1 className='text-[2rem] font-bold mb-4'>
          My name is{' '}
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

        <p className='text-xl text-gray-700 leading-7 mb-6'>
          <span className='block'>I'm a student in AI and Big Data Engineering.</span>
          <span className='block'>I'm interested in web development, AI, and Big Data.</span>
        </p>

        {/* Bouton de téléchargement avec animation */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="/mohamed.pdf"
            download="Mohamed_Boufous_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }} // Animation au survol
            whileTap={{ scale: 0.95 }} // Animation au clic
            className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-800 transition-colors duration-300"
          >
            Download CV
          </motion.a>

          {/* Animation de succès après le téléchargement */}
          <AnimatePresence>
            {isDownloaded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }} // État initial
                animate={{ opacity: 1, scale: 1 }} // Animation d'entrée
                exit={{ opacity: 0, scale: 0.5 }} // Animation de sortie
                transition={{ duration: 0.3 }} // Durée de l'animation
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
                <span className="ml-2 text-green-600 font-semibold">Downloaded</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Profile />
    </div>
  );
};

export default Home;