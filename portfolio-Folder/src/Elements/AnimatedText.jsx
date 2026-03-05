import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedText = ({
  text = '',
  className = '',
  delay = 50, // Default delay per letter
  rootMargin = '-50px',
  onAnimationComplete,
}) => {
  const letters = typeof text === 'string' ? text.split('') : [];
  const ref = useRef(null);
  
  // Trigger animation once when the element comes into view
  const isInView = useInView(ref, { once: true, margin: rootMargin });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onAnimationComplete={onAnimationComplete}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block will-change-transform"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;