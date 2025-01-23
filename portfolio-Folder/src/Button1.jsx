import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import { useDarkMode } from "./DarkModeContext"; // Importez le contexte du mode sombre

const Button1 = ({ children, to, isActive }) => {
  const { isDarkMode } = useDarkMode(); // Correction : Ajout du contexte du mode sombre

  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full group border-2 transition-colors duration-200 ease-in-out ${
        isActive
          ? "bg-purple-600 text-white border-purple-600"
          : isDarkMode
          ? "bg-gray-800 text-white border-gray-800"
          : "bg-white text-black border-white"
      } hover:bg-black hover:text-white w-full sm:w-auto`} // Correction : Ajout de "w-full sm:w-auto" pour mobile
    >
      <span className="w-24 h-24 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-40 h-40 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-48 -translate-y-20 bg-black opacity-100 group-hover:-translate-x-6"></span>
      <span className="relative w-full text-center transition-colors duration-200 ease-in-out text-sm">
        {children}
      </span>
      <span className="absolute inset-0 border-2 rounded-full"></span>
    </Link>
  );
};

export default Button1;
