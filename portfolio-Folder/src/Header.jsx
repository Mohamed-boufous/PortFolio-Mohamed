// Header.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importez useLocation
import logo from "./assets/logo.png";
import Button1 from "./Button1";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Utilisez useLocation pour obtenir l'URL actuelle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Déterminez le bouton actif en fonction de l'URL
  const activeButton = location.pathname;

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex-shrink-0 w-[20%]">
            <img className="h-60 w-auto" src={logo} alt="Your Company" />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                activeButton === "/dashboard" ? "bg-purple-600" : "bg-gray-800"
              } hover:bg-yellow-500`}
            >
              Dashboard
            </a>

            <a
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                activeButton === "/team" ? "bg-purple-600" : "bg-gray-800"
              } hover:bg-yellow-500`}
            >
              Team
            </a>

            <a
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                activeButton === "/projects" ? "bg-purple-600" : "bg-gray-800"
              } hover:bg-yellow-500`}
            >
              Projects
            </a>

            <a
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                activeButton === "/calendar" ? "bg-purple-600" : "bg-gray-800"
              } hover:bg-yellow-500`}
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}