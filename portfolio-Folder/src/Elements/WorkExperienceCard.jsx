import React, { useState } from "react";
import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const WorkExperienceCard = ({
  companyLogo,
  companyName,
  position,
  duration,
  projects = [],
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDarkMode } = useDarkMode();

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="group w-[90vw] sm:w-80 h-96 [perspective:1500px] cursor-pointer"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleFlip();
        }
      }}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] shadow-xl rounded-3xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        }}
      >
        {/* Front face */}
        <div
          className={`absolute w-full h-full rounded-3xl p-6 [backface-visibility:hidden] flex flex-col items-center justify-center border transition-all duration-500 overflow-hidden ${
            isDarkMode
              ? "bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]"
              : "bg-white border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)]"
          }`}
        >
          {/* Decorative Glow */}
          <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[3rem] opacity-30 pointer-events-none transition-all duration-500 group-hover:opacity-60 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}></div>

          <motion.div
            className="flex flex-col h-full items-center justify-center w-full relative z-10"
            initial={false}
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`relative w-28 h-28 mb-6 rounded-2xl p-3 shadow-inner flex flex-col items-center justify-center backdrop-blur-sm border ${
                isDarkMode ? "bg-white/10 border-white/10" : "bg-gray-50 border-gray-200"
              }`}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={companyLogo || "/api/placeholder/128/128"}
                alt={`${companyName} logo`}
                className="object-contain w-full h-full drop-shadow-md"
              />
            </motion.div>
            
            <motion.div className="space-y-3 w-full text-center">
              <motion.h2
                className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                  isDarkMode ? "text-gray-100 group-hover:text-purple-400" : "text-gray-800 group-hover:text-purple-600"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {companyName}
              </motion.h2>
              
              <motion.h3
                className={`text-sm font-semibold uppercase tracking-widest ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {position}
              </motion.h3>
              
              <motion.div
                className={`mt-4 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold font-mono ${
                  isDarkMode ? "bg-white/10 text-gray-300 border border-white/10" : "bg-purple-50 text-purple-700 border border-purple-100"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                </motion.div>
                <span>{duration}</span>
              </motion.div>
            </motion.div>

            <div className={`absolute bottom-4 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isDarkMode ? "text-purple-500" : "text-purple-400"
            }`}>
              Click to flip
            </div>
          </motion.div>
        </div>

        {/* Back face */}
        <div
          className={`absolute w-full h-full rounded-3xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col border overflow-hidden ${
             isDarkMode
              ? "bg-gray-900/90 border-purple-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(168,85,247,0.2)] text-gray-200"
              : "bg-purple-50/95 border-purple-200 backdrop-blur-xl shadow-[0_10px_40px_rgba(168,85,247,0.15)] text-gray-800"
          }`}
        >
          {/* Internal Glow on Back */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-3xl pointer-events-none"></div>

          <motion.div
            className="relative z-10 flex flex-col h-full"
            initial={false}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.h3
              className={`text-xl font-extrabold mb-4 pb-3 border-b ${
                isDarkMode ? "text-purple-400 border-white/10" : "text-purple-700 border-purple-200"
              }`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Key Projects & Tasks
            </motion.h3>
            
            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    className={`text-sm leading-relaxed flex items-start space-x-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                      isDarkMode ? "bg-purple-400" : "bg-purple-500"
                    }`}></span>
                    <span>{project}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div
              className={`mt-4 pt-4 flex items-center justify-center border-t ${
                isDarkMode ? "border-white/10" : "border-purple-200/50"
              }`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Briefcase className={`w-5 h-5 mr-3 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
              <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                 Experience
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperienceCard;