import React, { useContext } from "react"; // Ajoutez useContext
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';
import CountUp from './Countup';
import { LanguageContext } from "../LanguageContext"; // Importez le contexte

// Liste des services en anglais et en français
const services = {
  en: [
    {
      num: "01",
      title: "Web Development",
      description: "Developing websites using the latest technologies.",
      href: "#",
    },
    {
      num: "02",
      title: "Desktop Application",
      description: "Developing desktop applications using Java and JavaFX.",
      href: "#",
    },
    {
      num: "03",
      title: "UI/UX Design",
      description: "Designing interfaces for web or desktop applications.",
      href: "#",
    },
    {
      num: "04",
      title: "Data and AI",
      description: "Collecting and studying information and ideas about the domain.",
      href: "#",
    },
  ],
  fr: [
    {
      num: "01",
      title: "Développement Web",
      description: "Développement de sites web en utilisant les dernières technologies.",
      href: "#",
    },
    {
      num: "02",
      title: "Application Desktop",
      description: "Développement d'applications desktop en utilisant Java et JavaFX.",
      href: "#",
    },
    {
      num: "03",
      title: "Conception UI/UX",
      description: "Conception d'interfaces pour des applications web ou desktop.",
      href: "#",
    },
    {
      num: "04",
      title: "Données et IA",
      description: "Collecte et étude d'informations et d'idées sur le domaine.",
      href: "#",
    },
  ],
};

const Card = () => {
  const { language } = useContext(LanguageContext); // Utilisez le contexte pour obtenir la langue

  return (
    <section className="flex items-center justify-center mt-[1rem]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6" // Toujours 2 colonnes à partir de md
        >
          {services[language].map((service, index) => ( // Utilisez services[language] pour les textes traduits
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform hover:scale-105 group border hover:border-purple-500 w-[28rem] mx-auto" // Ajout de max-w-xs et mx-auto
              whileHover={{ scale: 1.05 }} // Animation au survol
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold text-black group-hover:text-purple-500 transition-all duration-300">
                  <CountUp
                    from={0}
                    to={service.num}
                    separator=","
                    direction="up"
                    duration={7}
                    className="count-up-text"
                  />
                </div>
                <a
                  href={service.href}
                  className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-purple-500 transition-all duration-300 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-black group-hover:text-white text-xl" />
                </a>
              </div>
              <h2 className="text-2xl font-bold leading-none text-black group-hover:text-purple-500 transition-all duration-300 mb-[4rem]">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4 group-hover:text-purple-500 transition-all duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Card;