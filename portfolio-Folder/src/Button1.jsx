import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom

const Button1 = ({ children, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center w-28 px-4 py-2 overflow-hidden font-bold rounded-full group ${
        isActive
          ? "bg-purple-600 text-white border-purple-600" // Bouton actif
          : "bg-white text-black border-white" // Bouton inactif
      } border-2 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white`} // Styles communs et survol
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