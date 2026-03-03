import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { BorderBeam } from "../components/ui/border-beam";
import { useDarkMode } from "../DarkModeContext";

export function SchoolCard({ schoolName, from, to, imageUrl, link, button }) {
  const { isDarkMode } = useDarkMode();

  return (
    <CardContainer className="inter-var group perspective-1000">
      <CardBody
        className={`relative w-[90vw] sm:w-[30rem] h-auto rounded-3xl p-6 transition-all duration-500 overflow-hidden ${
          isDarkMode
            ? "bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(168,85,247,0.25)] backdrop-blur-xl"
            : "bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
        }`}
      >
        {/* BorderBeam Effect for a premium touch */}
        <BorderBeam
          size={250}
          duration={12}
          anchor={90}
          borderWidth={1.5}
          colorFrom={isDarkMode ? "#c084fc" : "#e879f9"}
          colorTo={isDarkMode ? "#6d28d9" : "#c084fc"}
          delay={0}
          className="rounded-[inherit] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Decorative background glow */}
        <div
          className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[3rem] opacity-30 pointer-events-none transition-all duration-500 group-hover:opacity-60 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
        ></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header Info */}
          <div className="mb-6">
            <CardItem
              translateZ="40"
              className={`text-2xl font-extrabold tracking-tight mb-2 leading-tight transition-colors duration-300 ${
                isDarkMode ? "text-gray-100 group-hover:text-purple-400" : "text-gray-800 group-hover:text-purple-600"
              }`}
            >
              {schoolName}
            </CardItem>
            
            <CardItem
              as="div"
              translateZ="50"
              className="flex items-center space-x-2"
            >
              <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                isDarkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-700"
              }`}>
                {from} - {to}
              </span>
            </CardItem>
          </div>

          {/* Image Container */}
          <CardItem translateZ="80" className="w-full mt-auto mb-6 relative group/img">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-inner">
              <img
                src={imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110"
                alt={schoolName}
              />
              {/* Gradient Overlay for the image */}
              <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-[#111]/80 via-transparent" : "from-black/40 via-transparent"} opacity-50 group-hover/img:opacity-20 transition-opacity duration-500`} />
            </div>
          </CardItem>

          {/* Action Button */}
          <div className="flex justify-between items-center mt-auto border-t pt-4 border-gray-200/20 dark:border-white/10">
            <CardItem
              translateZ="30"
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all duration-300 flex items-center space-x-2 hover:-translate-y-1 ${
                isDarkMode 
                  ? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                  : "bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <span>{button}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}