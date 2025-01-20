import React, { useState } from "react";
import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const WorkExperienceCard = ({
  companyLogo,
  companyName,
  position,
  duration,
  projects = [], // Added default value to prevent undefined errors
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="w-80 h-96 [perspective:1500px] cursor-pointer"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleFlip();
        }
      }}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut",
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false)
        }}
      >
        {/* Front face */}
        <div
          className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 p-6 [backface-visibility:hidden] shadow-xl"
        >
          <motion.div
            className="flex flex-col h-full items-center justify-center"
            initial={false}
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-32 h-32 mb-4 bg-white rounded-full p-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={companyLogo || "/api/placeholder/128/128"}
                alt={`${companyName} logo`}
                className="object-contain rounded-full w-full h-full"
              />
            </motion.div>
            <motion.div className="space-y-2 text-center">
              <motion.h2
                className="text-2xl font-bold text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {companyName}
              </motion.h2>
              <motion.h3
                className="text-lg text-purple-200"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {position}
              </motion.h3>
              <motion.div
                className="mt-4 flex items-center justify-center text-purple-100"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                </motion.div>
                <span>{duration}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Back face */}
        <div
          className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl"
        >
          <motion.div
            className="flex flex-col h-full"
            initial={false}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Project Completed
            </motion.h3>
            <div className="flex-grow overflow-y-auto">
              <ul className="list-disc list-inside space-y-2">
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    className="text-lg text-purple-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 20 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    {project}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              className="mt-4 flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Briefcase className="w-6 h-6 mr-2 text-purple-200" />
              <span className="text-lg font-semibold">
                 Project
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperienceCard;