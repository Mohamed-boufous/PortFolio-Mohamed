import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../dist/assets/logo-CStf4fja.png";
import Button1 from "./Button1";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre
  const location = useLocation();
  const navigate = useNavigate();

  // Charger le mode sombre depuis localStorage au démarrage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  // Appliquer le mode sombre au document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const activeButton = location.pathname;

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[20%]">
            <img
              className="h-60 w-auto cursor-pointer"
              src={logo}
              alt="Your Company"
              onClick={goToHome}
            />
          </div>

          {/* Bouton de dark mode */}
          <button
            onClick={toggleDarkMode}
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
          </button>

          {/* Bouton du menu mobile */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
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
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden sm:ml-6 sm:block w-[80%]">
            <div className="flex justify-center space-x-6">
              {/* Bouton Home */}
              <Button1
                to="/"
                isActive={activeButton === "/"}
                className="text-gray-900 dark:text-white"
              >
                Home
              </Button1>

              {/* Bouton Skills */}
              <Button1
                to="/skills"
                isActive={activeButton === "/skills"}
                className="text-gray-900 dark:text-white"
              >
                Skills
              </Button1>

              {/* Bouton About me */}
              <Button1
                to="/aboutme"
                isActive={activeButton === "/aboutme"}
                className="text-gray-900 dark:text-white"
              >
                About me
              </Button1>

              {/* Bouton Contact me */}
              <Button1
                to="/contactme"
                isActive={activeButton === "/contactme"}
                className="text-gray-900 dark:text-white"
              >
                Contact me
              </Button1>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="flex flex-col items-center gap-2 px-4 pb-3 pt-2 overflow-hidden transition-all duration-300 ease-in-out">
            {/* Bouton Home */}
            <Button1
              to="/"
              isActive={activeButton === "/"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto text-gray-900 dark:text-white"
            >
              Home
            </Button1>

            {/* Bouton Skills */}
            <Button1
              to="/skills"
              isActive={activeButton === "/skills"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto text-gray-900 dark:text-white"
            >
              Skills
            </Button1>

            {/* Bouton About me */}
            <Button1
              to="/aboutme"
              isActive={activeButton === "/aboutme"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto text-gray-900 dark:text-white"
            >
              About me
            </Button1>

            {/* Bouton Contact me */}
            <Button1
              to="/contactme"
              isActive={activeButton === "/contactme"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto text-gray-900 dark:text-white"
            >
              Contact me
            </Button1>
          </div>
        </div>
      )}
    </nav>
  );
}