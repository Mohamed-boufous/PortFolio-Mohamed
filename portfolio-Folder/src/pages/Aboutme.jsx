import React from 'react';
import { SchoolCard } from '../Elements/SchoolCard';
import est from "../assets/EST-Agadir-750x400.jpg";
import Ensaa from "../assets/Ensaa.png"; // Remplacez par l'image de la deuxième école
import AnimatedText from '../Elements/AnimatedText';
import { BorderBeam } from "../components/ui/border-beam";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Aboutme = () => {
  return (
   <div className='mt-[4rem]'>
   
      <div className="w-full flex justify-center">
        <AnimatedText
          text="Education"
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
     <div className="flex justify-center items-center min-h-screen ">
    

    <div className="flex flex-wrap justify-center gap-8">
      <SchoolCard
        schoolName="Highschool of Technology Agadir"
        from="2022"
        to="2024"
        imageUrl={est}
        link="https://www.esta.ac.ma/?page_id=469"
      />
      <SchoolCard
        schoolName="National School of Applied Sciences Agadir"
        from="2024"
        to="now"
        imageUrl={Ensaa}
        link="http://www.ensa-agadir.ac.ma/"
      />
    </div>
  </div>
   </div>
  );
};

export default Aboutme;