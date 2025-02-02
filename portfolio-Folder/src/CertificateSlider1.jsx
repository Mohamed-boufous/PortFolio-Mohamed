import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "./assets/datacamp.png";

import certificates from './certificates';

const CertificateSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Navigation buttons for mobile */}
      <button
        onClick={handlePrev}
        className="absolute  top-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none z-10 sm:hidden"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none z-10 sm:hidden"
      >
        &#10095;
      </button>

      {/* Navigation buttons for medium and large screens */}
      <button
        onClick={handlePrev}
        className="absolute  top-1/2 left-0 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none hidden sm:block"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:outline-none hidden sm:block"
      >
        &#10095;
      </button>

      {/* Slider container */}
      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 overflow-hidden mt-10 mb-8 mr-2 ml-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedCertificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="relative group rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            style={{ perspective: "1000px" }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={certificate.imageUrl}
                alt={`${certificate.platform} Certificate`}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 ease-in-out"
                whileHover={{ rotateY: 20, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg h-16 flex flex-col justify-center">
                <p className="text-sm font-bold">{certificate.title}</p>
                <p className="text-xs">{certificate.platform}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificateSlider1;