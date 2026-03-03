import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificates from './Certif.jsx';
import { LanguageContext } from './LanguageContext';
import { useDarkMode } from './DarkModeContext';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CertificateSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useDarkMode();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  const displayedCertificates = [
    ...certificates.slice(currentIndex),
    ...certificates.slice(0, Math.max(4 - (certificates.length - currentIndex), 0))
  ].slice(0, 4);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Slider container */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AnimatePresence mode="popLayout">
          {displayedCertificates.map((certificate, index) => (
            <motion.div
              key={`${certificate.id}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 border ${
                isDarkMode 
                  ? "bg-white/5 border-white/10 hover:border-purple-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]" 
                  : "bg-white border-gray-100 hover:border-purple-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]"
              }`}
            >
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <motion.img
                    src={certificate.imageUrl}
                    alt={`${certificate.platform} Certificate`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay for better text contrast if we had texts on top, but here just for aesthetics */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-[#111] via-transparent" : "from-white/30 via-transparent"} to-transparent opacity-60`}></div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex flex-col justify-between h-[120px]">
                  <div>
                    <h3 className={`font-bold text-sm sm:text-base line-clamp-2 leading-tight transition-colors duration-300 ${
                      isDarkMode ? "text-gray-100 group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-600"
                    }`}>
                      {language === 'en' ? certificate.title : certificate.title_fr}
                    </h3>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-xs font-medium px-2 py-1 rounded-md ${
                      isDarkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-50 text-purple-600"
                    }`}>
                      {language === 'en' ? certificate.platform : certificate.platform_fr}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modern Navigation controls */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        <button
          onClick={handleNext}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
            isDarkMode 
              ? "bg-white/10 text-white hover:bg-white/20 hover:text-purple-400 shadow-md backdrop-blur-sm" 
              : "bg-white text-gray-800 border border-gray-100 hover:border-purple-300 hover:text-purple-600 shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
          }`}
          aria-label="Previous Certificate"
        >
          <FaChevronLeft className="text-lg" />
        </button>
        <button
          onClick={handlePrev}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
            isDarkMode 
              ? "bg-white/10 text-white hover:bg-white/20 hover:text-purple-400 shadow-md backdrop-blur-sm" 
              : "bg-white text-gray-800 border border-gray-100 hover:border-purple-300 hover:text-purple-600 shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
          }`}
          aria-label="Next Certificate"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CertificateSlider1;