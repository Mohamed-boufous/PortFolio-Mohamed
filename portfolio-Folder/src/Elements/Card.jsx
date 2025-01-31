import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';
import CountUp from './Countup';
import { LanguageContext } from "../LanguageContext";
import { useDarkMode } from "../DarkModeContext";


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
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useDarkMode();

    // Define dynamic class names based on dark mode
  const cardClasses = (isDarkMode) => ({
        background: isDarkMode ? 'bg-gray-800' : 'bg-white',
        text: isDarkMode ? 'text-white' : 'text-black',
        hover: isDarkMode ? 'hover:border-purple-500' : 'hover:border-purple-500',
  });
    const textColor = (isDarkMode) => (isDarkMode ? "text-purple-500 group-hover:text-white" : "text-black group-hover:text-purple-500")

    return (
        <section className="flex items-center justify-center mt-[1rem]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {services[language].map((service, index) => {
                         const classes = cardClasses(isDarkMode)
                        return (
                        <motion.div
                            key={index}
                           className={`rounded-lg shadow-md p-4 text-center  hover:scale-105 group border  w-full sm:w-[28rem] mx-auto ${classes.background} ${classes.text} ${classes.hover}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className={`text-xl font-bold ${textColor(isDarkMode)} transition-all duration-300`}>
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
                            <h2 className={`text-2xl font-bold leading-none  mb-[4rem] ${textColor(isDarkMode)} transition-all duration-300`}>
                                {service.title}
                            </h2>
                            <p className={`text-gray-600 mb-4  ${isDarkMode ? "group-hover:text-white text-gray-200": "group-hover:text-purple-500 text-gray-600"} transition-all duration-50`}>
                                {service.description}
                            </p>
                        </motion.div>
                    )})}
                </motion.div>
            </div>
        </section>
    );
};

export default Card;