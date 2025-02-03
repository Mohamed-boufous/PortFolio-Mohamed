import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../LanguageContext";
import { DarkModeContext } from "../DarkModeContext";
import { database, ref, push } from "../../firebaseConfig"; // Importe Firebase

const ContactCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(""); // Ajout de l'état status pour le feedback
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useContext(DarkModeContext);

    // Textes traduits
    const texts = {
        en: {
            contactMe: "Contact Me",
            yourName: "Your Name",
            yourEmail: "Your Email",
            yourMessage: "Your Message",
            namePlaceholder: "Enter your name",
            emailPlaceholder: "Enter your email",
            messagePlaceholder: "Enter your message",
            sendMessage: "Send Message",
            nameError: "Name is required",
            emailError: "Email is required",
            messageError: "Message is required",
            successMessage: "Message sent successfully!",
            errorMessage: "Error sending message.", // Ajout message d'erreur
        },
        fr: {
            contactMe: "Contactez-moi",
            yourName: "Votre nom",
            yourEmail: "Votre email",
            yourMessage: "Votre message",
            namePlaceholder: "Entrez votre nom",
            emailPlaceholder: "Entrez votre email",
            messagePlaceholder: "Entrez votre message",
            sendMessage: "Envoyer le message",
            nameError: "Le nom est requis",
            emailError: "L'email est requis",
            messageError: "Le message est requis",
            successMessage: "Message envoyé avec succès !",
             errorMessage: "Erreur lors de l'envoi du message.", // Ajout message d'erreur
        },
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = texts[language].nameError;
        if (!email) newErrors.email = texts[language].emailError;
        if (!message) newErrors.message = texts[language].messageError;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
              await push(ref(database, "messages"), {
                  name,
                  email,
                  message,
                  timestamp: new Date().toISOString(),
              });
              setStatus(texts[language].successMessage);
              setName("");
              setEmail("");
              setMessage("");
              setErrors({});
          } catch (error) {
              console.error("Erreur lors de l'envoi :", error);
              setStatus(texts[language].errorMessage);
          }
        }
    };

    // Styles conditionnels pour le mode sombre
    const cardClasses = `max-w-md mx-auto px-8 py-6 rounded-lg shadow-lg border ${
        isDarkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-purple-200 text-purple-800"
    }`;

    const inputClasses = `w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
        isDarkMode
            ? "bg-gray-700 text-white focus:ring-purple-500"
            : "bg-purple-50 focus:ring-purple-300"
    }`;

    const buttonClasses = `w-full py-2 px-4 rounded-lg transition duration-300 ${
        isDarkMode
            ? "bg-purple-700 hover:bg-purple-600 text-white"
            : "bg-purple-600 hover:bg-purple-700 text-white"
    }`;

    const iconClasses = `transition-colors duration-300 ${
        isDarkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-800"
    }`;

    return (
        <div className="container px-4 mx-auto mt-16">
            <div className="mx-auto">
                <motion.div
                    className={cardClasses}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">{texts[language].contactMe}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="name">
                                {texts[language].yourName}
                            </label>
                            <input
                                className={inputClasses}
                                placeholder={texts[language].namePlaceholder}
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="email">
                                {texts[language].yourEmail}
                            </label>
                            <input
                                className={inputClasses}
                                placeholder={texts[language].emailPlaceholder}
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="message">
                                {texts[language].yourMessage}
                            </label>
                            <textarea
                                className={inputClasses}
                                rows="4"
                                placeholder={texts[language].messagePlaceholder}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <motion.button
                            className={buttonClasses}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                        >
                            {texts[language].sendMessage}
                        </motion.button>
                    </form>

                    {status && <p className="mt-2 text-center">{status}</p>}
                   

                    <div className="flex justify-center space-x-6 mt-6">
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=100022534726772"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={iconClasses}
                        >
                            <FaFacebook className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Mohamed-boufous"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={iconClasses}
                        >
                            <FaGithub className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/mohmad_boufous?igsh=NTc0bWNmaHZkcjY4"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={iconClasses}
                        >
                            <FaInstagram className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="http://www.linkedin.com/in/mohamed-boufous-529aa026a"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className={iconClasses}
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactCard;