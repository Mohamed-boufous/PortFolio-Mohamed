import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import TextRoll from "./components/TextRoll";

const MotionLink = motion(Link);

const Button1 = ({ children, to, isActive, className = "" }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <MotionLink
      to={to}
      initial="initial"
      whileHover="hovered"
      whileTap="initial"
      variants={{
        initial: { scale: 1 },
        hovered: { scale: 1.05 },
      }}
      className={`relative inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-out 
        ${
          isActive
            ? "bg-purple-600 text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] ring-2 ring-purple-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
            : isDarkMode
            ? "bg-transparent text-gray-300 border border-transparent hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
            : "bg-transparent text-gray-600 border border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-200 hover:shadow-[0_4px_15px_rgba(168,85,247,0.15)]"
        }
        ${className}
      `}
    >
      <span className="relative z-10 block">
        {typeof children === 'string' ? <TextRoll>{children}</TextRoll> : children}
      </span>
    </MotionLink>
  );
};

export default Button1;
