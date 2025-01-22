import React, { useContext } from "react"; // Ajoutez useContext
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
import valaorange from "../assets/valaorange.jpeg";
import { LanguageContext } from "../LanguageContext"; // Importez le contexte

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Aboutme = () => {
  const { language } = useContext(LanguageContext); // Utilisez le contexte pour obtenir la langue

  // Textes traduits
  const texts = {
    en: {
      education: "Education",
      projects: "Projects",
      experience: "Experience",
      estDescription: "Highschool of Technology Agadir",
      ensaaDescription: "National School of Applied Sciences Agadir",
      librolinkDescription: "An online library platform for reading books.",
      gigDescription: "A service offering platform.",
      managerProDescription: "JavaFX desktop app for tournament management.",
      valableuPosition: "Internship in web development",
      valableuProjects: [
        "Developed a responsive car rental platform",
        "A diverse catalogue of cars with a modern design",
        "Connected to a database for better management",
      ],
      valaorangePosition: "Internship in web development",
      valaorangeProjects: [
        "Gig Galaxy, an online freelancing platform",
        "Optimized for freelancers and clients, offering a wide range of services at various prices",
        "Real-time chat for users",
      ],
    },
    fr: {
      education: "Éducation",
      projects: "Projets",
      experience: "Expérience",
      estDescription: "École Supérieure de Technologie Agadir",
      ensaaDescription: "École Nationale des Sciences Appliquées Agadir",
      librolinkDescription: "Une plateforme de bibliothèque en ligne pour lire des livres.",
      gigDescription: "Une plateforme de proposition de services.",
      managerProDescription: "Application desktop JavaFX pour la gestion de tournois.",
      valableuPosition: "Stage en développement web",
      valableuProjects: [
        "Développement d'une plateforme de location de voitures responsive",
        "Un catalogue varié de voitures avec un design moderne",
        "Connecté à une base de données pour une meilleure gestion",
      ],
      valaorangePosition: "Stage en développement web",
      valaorangeProjects: [
        "Gig Galaxy, une plateforme de freelancing en ligne",
        "Optimisé pour les freelancers et les clients, offrant une large gamme de services à divers prix",
        "Chat en temps réel pour les utilisateurs",
      ],
    },
  };

  return (
    <div className='mt-[4rem]'>
      {/* Section Éducation */}
      <div className="w-full flex justify-center">
        <AnimatedText
          text={texts[language].education} // Texte conditionnel
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
            schoolName={texts[language].estDescription} // Texte conditionnel
            from="2022"
            to="2024"
            imageUrl={est}
            link="https://www.esta.ac.ma/?page_id=469"
          />

          {/* Carte pour l'école ENSAA Agadir */}
          <SchoolCard
            schoolName={texts[language].ensaaDescription} // Texte conditionnel
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
          text={texts[language].projects} // Texte conditionnel
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
        {/* Carte pour Librolink */}
        <ProjectCard
          imageUrl={Librolink}
          projectName="Librolink"
          description={texts[language].librolinkDescription} // Texte conditionnel
          githubUrl="https://github.com/Mohamed-boufous/LibroLink"
        />

        {/* Carte pour Gig Galaxy */}
        <ProjectCard
          imageUrl={Gig}
          projectName="Gig Galaxy"
          description={texts[language].gigDescription} // Texte conditionnel
          githubUrl="https://github.com/Mohamed-boufous/GiG-Galaxy"
        />

        {/* Carte pour ManagerPro */}
        <ProjectCard
          imageUrl={ManagerPro}
          projectName="ManagerPro"
          description={texts[language].managerProDescription} // Texte conditionnel
          githubUrl="https://github.com/Mohamed-boufous/Football-app-disktop"
        />
      </div>

      {/* Section Expérience */}
      <div className="w-full flex justify-center mb-[2rem]">
        <AnimatedText
          text={texts[language].experience} // Texte conditionnel
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
        {/* Carte pour Vala Bleu */}
        <WorkExperienceCard
          companyLogo={Valableu}
          companyName="Vala Bleu"
          position={texts[language].valableuPosition} // Texte conditionnel
          duration="2023-06 - 2023-08"
          projects={texts[language].valableuProjects} // Texte conditionnel
        />

        {/* Carte pour Vala Orange */}
        <WorkExperienceCard
          companyLogo={valaorange}
          companyName="Vala Orange"
          position={texts[language].valaorangePosition} // Texte conditionnel
          duration="2024-04 - 2024-06"
          projects={texts[language].valaorangeProjects} // Texte conditionnel
        />
      </div>
    </div>
  );
};

export default Aboutme;