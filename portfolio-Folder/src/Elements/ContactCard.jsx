import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../LanguageContext";
import { DarkModeContext } from "../DarkModeContext";
import { database, ref, push } from "../../firebaseConfig"; // Assuming correct path

const ContactCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(""); 
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useContext(DarkModeContext);

    const texts = {
        en: {
            contactMe: "Get In Touch",
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
            errorMessage: "Error sending message.", 
        },
        fr: {
            contactMe: "Me Contacter",
            yourName: "Votre Nom",
            yourEmail: "Votre Email",
            yourMessage: "Votre Message",
            namePlaceholder: "Entrez votre nom",
            emailPlaceholder: "Entrez votre email",
            messagePlaceholder: "Entrez votre message",
            sendMessage: "Envoyer le message",
            nameError: "Le nom est requis",
            emailError: "L'email est requis",
            messageError: "Le message est requis",
            successMessage: "Message envoyé avec succès !",
             errorMessage: "Erreur lors de l'envoi du message."
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
            setStatus("Sending...");
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
                setTimeout(() => setStatus(""), 5000);
            } catch (error) {
                console.error("Erreur lors de l'envoi :", error);
                setStatus(texts[language].errorMessage);
            }
        }
    };

    const cardContainerClasses = `relative max-w-lg mx-auto p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        isDarkMode
            ? "bg-gray-900/60 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]"
            : "bg-white/80 border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
    }`;

    const labelClasses = `block mb-2 text-sm font-semibold tracking-wide ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
    }`;

    const inputClasses = `w-full px-5 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
        isDarkMode
            ? "bg-black/20 border-white/10 text-white placeholder-gray-500 focus:bg-white/5"
            : "bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white"
    }`;

    const buttonClasses = `w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md ${
        isDarkMode
            ? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            : "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
    }`;

    const iconClasses = `p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
        isDarkMode 
        ? "bg-white/5 text-purple-400 hover:bg-white/10 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]" 
        : "bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
    }`;

    return (
        <div className="container px-4 mx-auto relative z-10 w-full">
            <motion.div
                className={cardContainerClasses}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -5 }}
            >
                {/* Decorative Glow */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[4rem] opacity-20 pointer-events-none transition-all duration-500 ${
                    isDarkMode ? "bg-purple-500" : "bg-purple-400"
                }`}></div>
                <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[4rem] opacity-20 pointer-events-none transition-all duration-500 ${
                    isDarkMode ? "bg-blue-500" : "bg-blue-400"
                }`}></div>

                <div className="relative z-10">
                    <h2 className={`text-4xl font-extrabold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
                        isDarkMode ? "from-purple-400 to-pink-400" : "from-purple-600 to-indigo-600"
                    }`}>
                        {texts[language].contactMe}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className={labelClasses} htmlFor="name">
                                {texts[language].yourName}
                            </label>
                            <input
                                className={inputClasses}
                                placeholder={texts[language].namePlaceholder}
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if(errors.name) setErrors({...errors, name: null});
                                }}
                            />
                            {errors.name && <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} className="text-pink-500 text-xs font-semibold mt-2">{errors.name}</motion.p>}
                        </div>

                        <div>
                            <label className={labelClasses} htmlFor="email">
                                {texts[language].yourEmail}
                            </label>
                            <input
                                className={inputClasses}
                                placeholder={texts[language].emailPlaceholder}
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if(errors.email) setErrors({...errors, email: null});
                                }}
                            />
                            {errors.email && <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} className="text-pink-500 text-xs font-semibold mt-2">{errors.email}</motion.p>}
                        </div>

                        <div>
                            <label className={labelClasses} htmlFor="message">
                                {texts[language].yourMessage}
                            </label>
                            <textarea
                                className={`${inputClasses} resize-none`}
                                rows="5"
                                placeholder={texts[language].messagePlaceholder}
                                id="message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    if(errors.message) setErrors({...errors, message: null});
                                }}
                            ></textarea>
                            {errors.message && <motion.p initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} className="text-pink-500 text-xs font-semibold mt-2">{errors.message}</motion.p>}
                        </div>

                        <motion.button
                            className={buttonClasses}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                        >
                            {texts[language].sendMessage}
                        </motion.button>
                    </form>

                    <AnimatePresence>
                        {status && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`mt-6 p-3 rounded-lg text-center font-medium text-sm border ${
                                    status.includes("Error") || status.includes("Erreur") 
                                    ? "bg-red-500/10 text-red-500 border-red-500/20" 
                                    : "bg-green-500/10 text-green-500 border-green-500/20"
                                }`}
                            >
                                {status}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className={`mt-10 pt-8 border-t flex flex-col items-center space-y-4 ${isDarkMode ? "border-white/10" : "border-gray-200"}`}>
                        <p className={`text-sm font-semibold tracking-wider uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Or find me on</p>
                        <div className="flex justify-center space-x-6">
                            <motion.a
                                href="https://www.facebook.com/profile.php?id=100022534726772"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={iconClasses}
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/Mohamed-boufous"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={iconClasses}
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/mohmad_boufous?igsh=NTc0bWNmaHZkcjY4"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={iconClasses}
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="http://www.linkedin.com/in/mohamed-boufous-529aa026a"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={iconClasses}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </motion.a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default ContactCard;