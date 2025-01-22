import React from 'react';
import { SchoolCard } from '../Elements/SchoolCard';
import est from "../assets/EST-Agadir.jpg";
import Ensaa from "../assets/Ensaa.png"; 
import AnimatedText from '../Elements/AnimatedText';
import ProjectCard from '../Elements/ProjectCard';
import Librolink from "../assets/LibroLink.png";
import Gig from "../assets/Gig Galaxy.png";
import ManagerPro from "../assets/ManagerPro.png";
import WorkExperienceCard from '../Elements/WorkExperienceCard';
import Valableu from "../assets/valableu.jpg";
import valaorange from  "../assets/valaorange.jpeg";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Aboutme = () => {
  return (
    <div className='mt-[4rem]'>
      {/* Section Éducation */}
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

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 p-4">
          {/* Carte pour l'école EST Agadir */}
          <SchoolCard
            schoolName="Highschool of Technology Agadir"
            from="2022"
            to="2024"
            imageUrl={est}
            link="https://www.esta.ac.ma/?page_id=469"
          />

          {/* Carte pour l'école ENSAA Agadir */}
          <SchoolCard
            schoolName="National School of Applied Sciences Agadir"
            from="2024"
            to="now"
            imageUrl={Ensaa}
            link="http://www.ensa-agadir.ac.ma/"
          />
        </div>
      </div>

      {/* Section Projets */}
      <div className="w-full flex justify-center mb-[2rem]">
        <AnimatedText
          text="Projects"
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

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-[2rem] p-4">
       
        <ProjectCard
          imageUrl={Librolink}
          projectName="Librolink"
          description="An online library platform for reading books."
          githubUrl="https://github.com/Mohamed-boufous/LibroLink"
        />

        {/* Carte pour Gig Galaxy */}
        <ProjectCard
          imageUrl={Gig}
          projectName="Gig Galaxy"
          description="A service offering platform."
          githubUrl="https://github.com/Mohamed-boufous/GiG-Galaxy"
        />

        {/* Carte pour ManagerPro */}
        <ProjectCard
          imageUrl={ManagerPro}
          projectName="ManagerPro"
          description="JavaFX desktop app for tournament management."
          githubUrl="https://github.com/Mohamed-boufous/Football-app-disktop"
        />
      </div>
      <div className="w-full flex justify-center mb-[2rem]">
        <AnimatedText
          text="Experience"
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-[2rem] p-4">
      <WorkExperienceCard
        companyLogo={Valableu} 
        companyName="Vala Bleu"
        position="Internship in web development"
        duration="2023-06 - 2023-08"
        projects={[
       "Developed a responsive car rental platform",
"A diverse catalogue of cars with a modern design",
"Connected to a database for better management"
        ]}
      />
      <WorkExperienceCard
        companyLogo={valaorange} 
        companyName="Vala orange"
        position="Internship in web development"
        duration="2024-04 - 2024-06"
        projects={[
     "Gig Galaxy, an online freelancing platform",
"Optimized for freelancers and clients, offering a wide range of services at various prices",
"Real-time chat for users"
        
        ]}
      />
    </div>
    </div>
  );
};

export default Aboutme;