import React from 'react';
import Card from '../Elements/Card';
import AnimatedText from '../Elements/AnimatedText';
import RollingGallery from '../Elements/RollingGallery';
import { FaReact, FaJava, FaCss3Alt, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiR } from "react-icons/si";

const icons = [
  FaReact, // React
  SiTailwindcss, // Tailwind CSS
  FaJava, // Java
  SiCplusplus, // C++
  FaPython, // Python
  FaNodeJs, // Node.js
  SiR, // R
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] space-y-8">
      {/* Section "Skills" */}
      <div className="w-full flex justify-center">
        <AnimatedText
          text="Skills"
          className="text-5xl font-mono text-purple-500"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Section Carte */}
      <div className="w-full pl-[3rem] mt-8">
        <Card />
      </div>

      {/* Section "Technologies" */}
      <div className="w-full flex justify-center pt-[3rem] ">
        <AnimatedText
          text="Technologies"
          className="text-5xl font-mono text-purple-500"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

    
      <div className="w-full flex items-center justify-center ">
        <RollingGallery
          autoplay={true}
          pauseOnHover={true}
          icons={icons}
        />
      </div>
    </div>
  );
};

export default Skills;