import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importez useLocation et useNavigate
import logo from "./assets/logo.png";
import Button1 from "./Button1";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeButton = location.pathname;

  // Fonction pour rediriger vers la page d'accueil
  const goToHome = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[20%]">
            <img
              className="h-60 w-auto cursor-pointer" // Ajoutez cursor-pointer pour indiquer que c'est cliquable
              src={logo}
              alt="Your Company"
              onClick={goToHome} // Ajoutez le gestionnaire onClick
            />
          </div>

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
                isActive={activeButton === "/"} // Active si l'URL est "/"
              >
                Home
              </Button1>

              {/* Bouton Skills */}
              <Button1
                to="/skills"
                isActive={activeButton === "/skills"} // Active si l'URL est "/skills"
              >
                Skills
              </Button1>

              {/* Bouton About me */}
              <Button1
                to="/aboutme"
                isActive={activeButton === "/aboutme"} // Active si l'URL est "/aboutme"
              >
                About me
              </Button1>

              {/* Bouton Contact me */}
              <Button1
                to="/contactme"
                isActive={activeButton === "/contactme"} // Active si l'URL est "/contactme"
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
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto"
            >
              Home
            </Button1>

            {/* Bouton Skills */}
            <Button1
              to="/skills"
              isActive={activeButton === "/skills"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto"
            >
              Skills
            </Button1>

            {/* Bouton About me */}
            <Button1
              to="/aboutme"
              isActive={activeButton === "/aboutme"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto"
            >
              About me
            </Button1>

            {/* Bouton Contact me */}
            <Button1
              to="/contactme"
              isActive={activeButton === "/contactme"}
              className="w-fit px-6 py-3 text-center hover:bg-purple-100 rounded-lg transition-colors duration-300 mx-auto"
            >
              Contact me
            </Button1>
          </div>
        </div>
      )}
    </nav>
  );
}