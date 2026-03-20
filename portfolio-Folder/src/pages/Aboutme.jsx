import React, { useContext } from "react"; // Ajoutez useContext
import SEOHead from "../components/SEOHead";
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
import tecforge from "../assets/tec.png";
import Feelscan from "../assets/Feelscan.png";
import Creative from "../assets/Creative.png";
import Lbanka from "../assets/LBANKADYALNA (1).png";
import EtlSql from "../assets/etl.png";
import { SiBitcoin } from "react-icons/si";
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
      tecforgeDescription: "A platform for scraping Moroccan public tenders and enabling semantic search on tender documents.",
      feelscanDescription: "A platform for detecting emotions from text and images.",
      etlProjectDescription: "End-to-end ETL pipeline (SSIS) designed to centralize and analyze academic performance data, integrated with Power BI for advanced data visualization.",
      lbankaProjectDescription: "Comprehensive digital banking system built with Spring Boot, React, and Oracle DB/PL-SQL. Features dedicated portals for users, employees, admins, and super-admins.",
      cryptoProjectDescription: "This project implements a robust Dual-Write architecture: MongoDB (Raw data archive), InfluxDB (Optimized time-series for performance), Grafana (Dynamic market trends), Infrastructure (Docker & Docker Compose).",
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
      
      tecforgePosition: "Internship in scraping and data analytics",
tecforgeProjects: [
  "A platform for scraping Moroccan public tender offers",
  "Processing and analyzing tender documents",
  "Implementing semantic search for efficient information retrieval",
],
creativeCompanyPosition: "Internship in Machine Learning",
creativeCompanyProjects: [
  "An emotion detection platform based on 7 primary emotions",
    "Emotion analysis from text",
    "Emotion analysis from images",
],

      button:"Take a look" ,
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
      tecforgeDescription: "Une plateforme pour le scraping des marchés publics marocains et la mise en place d’une recherche sémantique sur les documents d’appel d’offres.",
      valableuPosition: "Stage en développement web",
      feelscanDescription: "Une plateforme de détection des émotions à partir de textes et d’images.",
      etlProjectDescription: "Pipeline ETL de bout en bout (SSIS) conçu pour centraliser et analyser les données de performance académique, intégré à Power BI pour une visualisation avancée des données.",
      lbankaProjectDescription: "Système bancaire numérique complet conçu avec Spring Boot, React et Oracle DB/PL-SQL. Comprend des portails dédiés pour les utilisateurs, employés, administrateurs et super-administrateurs.",
      cryptoProjectDescription: "Ce projet implémente une architecture Dual-Write robuste : MongoDB (Archivage), InfluxDB (Séries Temporelles optimisé), Grafana (Tendances de marché), Infrastructure (Docker & Docker Compose).",
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
      tecforgePosition: "Stage en scraping et analyse de données",
tecforgeProjects: [
  "Une plateforme pour le scraping des offres de marchés publics marocains",
  "Traitement et analyse des documents d’appel d’offres",
  "Mise en place d’une recherche sémantique pour un accès efficace à l’information",
],
creativeCompanyPosition: "Stage en Machine Learning",
creativeCompanyProjects: [
 "Une plateforme de détection des émotions basée sur 7 émotions principales",
    "Analyse des émotions à partir de textes",
    "Analyse des émotions à partir d’images",
],

      button:"Regardez ici" ,
    },
  };

  return (
    <main>
      <SEOHead
        title="About Me – Education, Projects & Experience"
        description="Learn about Mohamed Boufous: education at ENSA Agadir and EST Agadir, projects including LibroLink, Gig Galaxy, FeelScan, ETL pipelines, and professional internship experiences."
        path="/aboutme"
      />
      <div className='mt-[4rem] pt-16 md:pt-24'>
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
            button={texts[language].button}
          />

          {/* Carte pour l'école ENSAA Agadir */}
          <SchoolCard
            schoolName={texts[language].ensaaDescription} // Texte conditionnel
            from="2024"
            to="now"
            imageUrl={Ensaa}
            link="http://www.ensa-agadir.ac.ma/"
            button={texts[language].button}
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

    {/* Ce conteneur utilise flex-wrap pour que les cartes aillent automatiquement à la ligne et soient centrées. */}
<div className="flex flex-wrap justify-center items-center gap-8 pb-[2rem] p-4">
    {/* flex-wrap a été ajouté pour permettre aux éléments de passer à la ligne. */}
    {/* flex-col et md:flex-row ont été supprimés car flex-wrap gère mieux la disposition. */}

      {/* Carte 1 */}
      <ProjectCard
        imageUrl={Librolink}
        projectName="Librolink"
        description={texts[language].librolinkDescription}
        githubUrl="https://github.com/Mohamed-boufous/LibroLink"
      />

      {/* Carte 2 */}
      <ProjectCard
        imageUrl={Gig}
        projectName="Gig Galaxy"
        description={texts[language].gigDescription}
        githubUrl="https://github.com/Mohamed-boufous/GiG-Galaxy"
      />

      {/* Carte 3 */}
      <ProjectCard
        imageUrl={ManagerPro}
        projectName="ManagerPro"
        description={texts[language].managerProDescription}
        githubUrl="https://github.com/Mohamed-boufous/Football-app-disktop"
      />
      
      {/* Carte 4 */}
      <ProjectCard
        imageUrl={tecforge}
        projectName="tec forge project"
        description={texts[language].tecforgeDescription}
        githubUrl="https://github.com/Mohamed-boufous/Tecforge_project"
      />
      
      <ProjectCard
        imageUrl={Feelscan}
        projectName="Feelscan"
        description={texts[language].feelscanDescription}
        githubUrl="https://github.com/Mohamed-boufous/Projet_de_stage"
      />
      
      {/* Nouveaux Projets */}
      <ProjectCard
        imageUrl={EtlSql}
        projectName="Projet ETL SQLServer"
        description={texts[language].etlProjectDescription}
        githubUrl="https://github.com/Mohamed-boufous/Projet-ETL-SQLServer"
      />

      <ProjectCard
        imageUrl={Lbanka}
        projectName="Lbanka Dyalna"
        description={texts[language].lbankaProjectDescription}
        githubUrl="https://github.com/Mohamed-boufous/Project_BDA"
      />

      <ProjectCard
        // Pass a functional component returning the icon since ProjectCard expects an image URL or will need a custom render
        iconComponent={<SiBitcoin className="w-full h-full text-orange-500 bg-white" />}
        projectName="Crypto Market Pipeline"
        description={texts[language].cryptoProjectDescription}
        githubUrl="https://github.com/Mohamed-boufous/crypto-etl-pipeline"
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

      {/* Ce conteneur flexible permet aux cartes d'expérience de s'aligner et de passer à la ligne si nécessaire. */}
<div className="flex flex-wrap justify-center items-center gap-8 pb-[2rem] p-4">
    {/* Remplacement de 'flex-col md:flex-row' par 'flex-wrap' pour un affichage plus flexible. */}

      {/* Carte pour Vala Bleu */}
      <WorkExperienceCard
        companyLogo={Valableu}
        companyName="Vala Bleu"
        position={texts[language].valableuPosition}
        duration="2023-06 - 2023-08"
        projects={texts[language].valableuProjects}
      />

      {/* Carte pour Vala Orange */}
      <WorkExperienceCard
        companyLogo={valaorange}
        companyName="Vala Orange"
        position={texts[language].valaorangePosition}
        duration="2024-04 - 2024-06"
        projects={texts[language].valaorangeProjects}
      />
      <WorkExperienceCard
        companyLogo={tecforge}
        companyName="Tec Forge"
        position={texts[language].tecforgePosition}
        duration="2025-07-01 - 2025-07-31"
        projects={texts[language].tecforgeProjects}
      />
      <WorkExperienceCard
        companyLogo={Creative}
        companyName="Creative inernet solutions"
        position={texts[language].creativeCompanyPosition}
        duration="2025-08-01 - 2025-08-31"
        projects={texts[language].creativeCompanyProjects}
      />
      

      
</div>
    </div>
    </main>
  );
};

export default Aboutme;