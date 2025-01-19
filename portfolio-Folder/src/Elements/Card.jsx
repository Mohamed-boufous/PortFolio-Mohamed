import React from 'react'
import { motion } from 'framer-motion'; 
import { BsArrowDownRight } from 'react-icons/bs'; 
import CountUp from './Countup';
const services = [
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
  ];
  
const Card = ({ image, title, description }) => {
    return (
        <section className="min-h-screen flex items-center justify-center mt-[3rem]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6" // Toujours 2 colonnes à partir de md
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform hover:scale-105 group border border-black hover:border-purple-500 w-[28rem] mx-auto" // Ajout de max-w-xs et mx-auto
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
                
  
                {/* Afficher les caractéristiques supplémentaires */}
              
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

export default Card