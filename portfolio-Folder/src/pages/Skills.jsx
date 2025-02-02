import React, { useContext } from "react"; // Ajoutez useContext
import Card from '../Elements/Card';
import AnimatedText from '../Elements/AnimatedText';
import RollingGallery from '../Elements/RollingGallery';
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiR, SiLinux, SiC } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { TbBrandCpp, TbBrandHtml5 } from "react-icons/tb";
import { SiOctave } from "react-icons/si"; // Alternative à MATLAB
import { LanguageContext } from "../LanguageContext"; // Importez le contexte

import CertificateSlider1 from "../CertificateSlider1"

// Liste des icônes avec leurs noms
const icons = [
  { icon: FaReact, name: "React" },
  { icon: DiPhp, name: "PHP" },
  { icon: SiOctave, name: "MATLAB" },
  { icon: SiR, name: "R" },
  { icon: SiC, name: "C" },
  { icon: FaJava, name: "Java" },
  { icon: FaPython, name: "Python" },
  { icon: SiTailwindcss, name: "Tailwind " },
  { icon: TbBrandHtml5, name: "HTML" },
  { icon: SiLinux, name: "Linux" },
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Skills = () => {
  const { language } = useContext(LanguageContext); // Utilisez le contexte pour obtenir la langue

  return (
    <div className="flex flex-col items-center mt-8 md:mt-[4rem] space-y-8">
      {/* Section "Skills" */}
      <div className="w-full flex justify-center">
        <AnimatedText
          text={language === "en" ? "Skills" : "Competences"} // Texte conditionnel
          className="text-3xl md:text-5xl font-mono text-purple-500"
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
      <div className="w-full px-4 md:px-[3rem] mt-4 md:mt-8">
        <Card />
      </div>

      {/* Section "Technologies" */}
      <div className="w-full flex justify-center pt-4 md:pt-[3rem]">
        <AnimatedText
          text={language === "en" ? "Technologies" : "Technologies"} // Texte conditionnel
          className="text-3xl md:text-5xl font-mono text-purple-500"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Section Galerie des technologies */}
      <div className="w-full flex items-center justify-center px-4">
        <RollingGallery
          autoplay={true}
          pauseOnHover={true}
          icons={icons}
        />
      </div>
   
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">My Certificates</h1>
      <CertificateSlider1 />
    </div>
    </div>
  );
};

export default Skills;