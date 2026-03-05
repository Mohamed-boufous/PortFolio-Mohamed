import React from "react";
import { Github } from "lucide-react";
import { useDarkMode } from "../DarkModeContext";

export default function ProjectCard({ imageUrl, iconComponent, projectName, description, githubUrl }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="group relative h-96 w-72 [perspective:1000px] cursor-pointer">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
        
        {/* Front face */}
        <div className={`absolute w-full h-full rounded-2xl p-6 [backface-visibility:hidden] flex flex-col items-center justify-center border transition-all duration-500 ${
          isDarkMode
            ? "bg-white/5 border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]"
            : "bg-white border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)]"
        }`}>
          {/* Decorative Background Glow */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[3rem] opacity-30 pointer-events-none ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}></div>

          <div className="relative z-10 w-40 h-40 mb-6 bg-white/50 dark:bg-black/50 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-inner overflow-hidden border border-black/5 dark:border-white/10 p-4">
            {iconComponent ? (
              <div className="w-full h-full flex items-center justify-center drop-shadow-lg scale-95 group-hover:scale-105 transition-transform duration-500 overflow-hidden rounded-xl">
                 {iconComponent}
              </div>
            ) : (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={projectName}
                className="object-contain w-full h-full drop-shadow-lg scale-95 group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>

          <h2 className={`relative z-10 text-2xl font-bold text-center tracking-tight transition-colors duration-300 ${
            isDarkMode ? "text-gray-100 group-hover:text-purple-400" : "text-gray-800 group-hover:text-purple-600"
          }`}>
            {projectName}
          </h2>
          
          <div className={`mt-4 text-xs tracking-wider uppercase font-semibold ${
            isDarkMode ? "text-purple-400" : "text-purple-600"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
            Flip to see details
          </div>
        </div>

        {/* Back face */}
        <div className={`absolute w-full h-full rounded-2xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col border ${
          isDarkMode
            ? "bg-gray-900/90 border-purple-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(168,85,247,0.2)]"
            : "bg-purple-50/95 border-purple-200 backdrop-blur-xl shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
        }`}>
          {/* Internal Glow on Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full">
            <h3 className={`text-2xl font-extrabold mb-4 pb-4 border-b ${
              isDarkMode ? "text-purple-400 border-white/10" : "text-purple-700 border-purple-200"
            }`}>
              {projectName}
            </h3>

            <p className={`text-sm leading-relaxed flex-grow font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              {description}
            </p>

            <div className="mt-auto pt-4">
               <button
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-xl font-bold transition-all duration-300 shadow-md group/btn ${
                    isDarkMode
                      ? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                      : "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(githubUrl, "_blank");
                  }}
                >
                  <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-y-1" />
                  <span>View on GitHub</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}