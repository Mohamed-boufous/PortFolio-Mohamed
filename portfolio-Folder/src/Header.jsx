import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import { LanguageContext } from "./LanguageContext"; // Contexte de langue
import { useDarkMode } from "./DarkModeContext"; // Contexte de mode sombre

export default function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext); // Contexte de langue
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Contexte de mode sombre

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[20%]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-60 w-auto cursor-pointer"
              src={logo}
              alt="Your Company"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Bouton du menu mobile */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {isMenuOpen ? (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Menu desktop */}
          <div className="hidden sm:ml-6 sm:block w-[80%]">
  <div className="flex justify-between items-center w-full">
    {/* Navigation buttons */}
    <div className="flex flex-1 justify-center space-x-6">
    <motion.button
    onClick={() => scrollToSection('home')}
   className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out  bg-white text-black border-white  hover:bg-black hover:text-white w-full sm:w-auto"
  >
  <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
  <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
  <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
      {language === "en" ? "Home" : "Accueil"}
    </span>
    <span className="absolute inset-0 border-2 rounded-full"></span>
  </motion.button>


      <motion.button
      onClick={() => scrollToSection('skills')}
       className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
      >
        <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
        <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
          {language === "en" ? "Skills" : "Compétences"}
        </span>
        <span className="absolute inset-0 border-2 rounded-full"></span>
      </motion.button>

      <motion.button
       onClick={() => scrollToSection('aboutme')}
       className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
      >
        <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
        <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
          {language === "en" ? "About me" : "À propos"}
        </span>
        <span className="absolute inset-0 border-2 rounded-full"></span>
      </motion.button>

      <motion.button
       onClick={() => scrollToSection('contactme')}
       className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
      >
        <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
        <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
          {language === "en" ? "Contact me" : "Contactez-moi"}
        </span>
        <span className="absolute inset-0 border-2 rounded-full"></span>
      </motion.button>
    </div>

    {/* Utility buttons */}
    <div className="flex items-center space-x-4 ml-4">
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        {language === "en" ? "🇫🇷" : "🇬🇧"}
      </motion.button>

      <motion.button
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden"
          id="mobile-menu"
        >
               <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-16 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </motion.button>
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-32 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {language === "en" ? "🇫🇷" : "🇬🇧"}
          </motion.button>
          <div className="flex flex-col items-center gap-2 px-4 pb-3 pt-2 overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-900">
            {/* Bouton Home */}
            <motion.button
    onClick={() => scrollToSection('home')}
    className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
  >
  <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
  <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
  <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
      {language === "en" ? "Home" : "Accueil"}
    </span>
    <span className="absolute inset-0 border-2 rounded-full"></span>
  </motion.button>

            {/* Bouton Skills */}
            <motion.button
     onClick={() => scrollToSection('skills')}
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
      <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
        {language === "en" ? "Skills" : "Compétences"}
      </span>
      <span className="absolute inset-0 border-2 rounded-full"></span>
    </motion.button>

            {/* Bouton About me */}
            <motion.button
     onClick={() => scrollToSection('aboutme')}
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
      <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
          {language === "en" ? "About me" : "À propos"}
        </span>
        <span className="absolute inset-0 border-2 rounded-full"></span>
    </motion.button>

            {/* Bouton Contact me */}
           <motion.button
     onClick={() => scrollToSection('contactme')}
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out bg-white text-black border-white hover:bg-black hover:text-white w-full sm:w-auto"
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
      <span className="relative w-full text-center transition-colors duration-200 ease-in-out sm:text-[9px] md:text-xs ">
        {language === "en" ? "Contact me" : "Contactez-moi"}
      </span>
      <span className="absolute inset-0 border-2 rounded-full"></span>
    </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}