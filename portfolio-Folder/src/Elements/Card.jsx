import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';
import CountUp from './Countup';
import { LanguageContext } from "../LanguageContext";
import { useDarkMode } from "../DarkModeContext";

// Liste des services en anglais et en francais
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
            title: "Developpement Web",
            description: "Developpement de sites web en utilisant les dernieres technologies.",
            href: "#",
        },
        {
            num: "02",
            title: "Application Desktop",
            description: "Developpement d'applications desktop en utilisant Java et JavaFX.",
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
            title: "Donnees et IA",
            description: "Collecte et etude d'informations et d'idees sur le domaine.",
            href: "#",
        },
    ],
};

const Card = () => {
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useDarkMode();

    return (
        <section className="flex items-center justify-center mt-[1rem]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
                >
                    {services[language].map((service, index) => {
                        return (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl md:rounded-[2rem] border transition-all duration-500 group overflow-hidden ${
                                    isDarkMode 
                                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.2)] backdrop-blur-lg" 
                                        : "bg-white border-gray-100 hover:border-purple-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]"
                                }`}
                                whileHover={{ y: -8 }}
                            >
                                {/* Decorative Gradient Glow on Hover */}
                                <div className={`absolute top-0 right-0 w-32 h-32 blur-[3rem] rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none ${
                                    isDarkMode ? "bg-purple-600/30" : "bg-purple-400/20"
                                }`} />
                                
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    {/* Number with gradient */}
                                    <div className={`text-4xl sm:text-5xl font-extrabold font-mono transition-all duration-500 ${
                                        isDarkMode 
                                            ? "text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-700 group-hover:from-purple-400 group-hover:to-purple-600" 
                                            : "text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 group-hover:from-purple-400 group-hover:to-purple-600"
                                    }`}>
                                        <CountUp
                                            from={0}
                                            to={service.num}
                                            separator=","
                                            direction="up"
                                            duration={3}
                                            className="count-up-text drop-shadow-sm"
                                        />
                                    </div>

                                    {/* Link Arrow Button */}
                                    <a
                                        href={service.href}
                                        className={`w-[50px] h-[50px] rounded-full flex justify-center items-center transition-all duration-500 transform group-hover:-rotate-45 z-10 shadow-sm ${
                                            isDarkMode 
                                                ? "bg-white/10 text-white hover:bg-white/20 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                                                : "bg-gray-50 text-gray-900 border border-gray-100 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                                        }`}
                                    >
                                        <BsArrowDownRight className="text-xl" />
                                    </a>
                                </div>

                                {/* Title and Description */}
                                <div className="z-10 relative mt-4">
                                    <h2 className={`text-2xl sm:text-3xl font-bold mb-4 tracking-tight transition-colors duration-300 ${
                                        isDarkMode ? "text-gray-100 group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-600"
                                    }`}>
                                        {service.title}
                                    </h2>
                                    <p className={`leading-relaxed text-sm sm:text-base transition-colors duration-300 ${
                                        isDarkMode ? "text-gray-400 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-700"
                                    }`}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Card;
