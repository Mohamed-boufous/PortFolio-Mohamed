// src/components/Star.jsx
import React from 'react';

const Star = ({ x, y, size }) => {
  return (
    <div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}vw`,
        top: `${y}vh`,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none', // Ensure stars don't interfere with mouse events
      }}
    />
  );
};

export default Star;