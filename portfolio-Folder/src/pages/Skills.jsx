import React, { useContext } from "react"; // Ajoutez useContext
import Card from '../Elements/Card';
import AnimatedText from '../Elements/AnimatedText';
import RollingGallery from '../Elements/RollingGallery';
import { 
  FaPython, FaJava, FaReact, FaGithub, FaDocker, FaSpider, 
  FaChartArea, FaChartPie, FaCogs, FaGitAlt, FaChartBar
} from "react-icons/fa";
import { 
  SiTailwindcss, SiC, SiJavascript, SiScikitlearn, SiNumpy, SiPandas, 
  SiMysql, SiArangodb, SiNeo4J
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { DiPhp } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { LanguageContext } from "../LanguageContext"; // Importez le contexte

import CertificateSlider1 from "../CertificateSlider1"

// Liste des icônes avec leurs noms
const icons = [
  // Languages
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: DiPhp, name: "PHP" },
  { icon: SiC, name: "C" },
  { icon: TbSql, name: "SQL" },
  
  // Data Science
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiPandas, name: "Pandas" },
  { icon: FaChartArea, name: "Matplotlib" },
  { icon: FaChartPie, name: "Statistics" },
  { icon: FaSpider, name: "Web Scraping" },
  
  // Web Development
  { icon: FaReact, name: "ReactJS" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: GrOracle, name: "APEX" },

  // Databases
  { icon: SiMysql, name: "MySQL" },
  { icon: GrOracle, name: "Oracle DB" },
  { icon: GrOracle, name: "PL/SQL" },
  { icon: SiArangodb, name: "ArangoDB" },
  { icon: SiNeo4J, name: "Neo4j" },
  
  // Tools & Skills
  { icon: FaCogs, name: "ETL" },
  { icon: FaChartBar, name: "Power BI" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaDocker, name: "Docker" },
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Skills = () => {
  const { language } = useContext(LanguageContext); // Utilisez le contexte pour obtenir la langue

  return (
    <div className="flex flex-col items-center mt-8 md:mt-[4rem] pt-16 md:pt-24 space-y-8">
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
      <div className="w-full px-4 md:px-[3rem] mt-4 md:mt-8 pb-[2rem]">
        <Card />
      </div>

      {/* Section "Technologies" */}
      
   
    <div >
    <div className="w-full flex justify-center ">
        <AnimatedText
          text={language === "en" ? "Certificates" : "Certificats"} // Texte conditionnel
          className="text-3xl md:text-5xl font-mono text-purple-500 pb-2" 
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
      <CertificateSlider1 />
    </div>
    <div className="w-full flex justify-center  ">
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

      
      <div className="w-full flex items-center justify-center px-4">
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