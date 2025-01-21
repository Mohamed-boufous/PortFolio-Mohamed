import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icônes sociaux

const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simuler l'envoi du formulaire
      setTimeout(() => {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      }, 1000);
    }
  };

  // Disparition de l'animation de succès après 3 secondes
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Disparaît après 3 secondes
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="container px-4 mx-auto mt-16">
      {/* Espace en haut */}
      <div className="mx-auto">
        {/* Carte de contact */}
        <motion.div
          className="max-w-md mx-auto px-8 py-6 bg-white rounded-lg shadow-lg border border-purple-200"
          whileHover={{ scale: 1.02, rotate: 0 }} // Animation plus douce
          transition={{ type: "spring", stiffness: 100, damping: 10 }} // Transition plus fluide
        >
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Champ Nom */}
            <div className="mb-4">
              <label className="block text-purple-800 mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 bg-purple-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                placeholder="Enter your name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Champ Email */}
            <div className="mb-4">
              <label className="block text-purple-800 mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full px-4 py-2 bg-purple-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                placeholder="Enter your email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Champ Message */}
            <div className="mb-4">
              <label className="block text-purple-800 mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-purple-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                rows="4"
                placeholder="Enter your message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Bouton Envoyer */}
            <motion.button
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </form>

          {/* Icônes des réseaux sociaux */}
          <div className="flex justify-center space-x-6 mt-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              <FaFacebook className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" /> {/* Icône GitHub */}
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              <FaInstagram className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>

        {/* Animation de succès */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactCard;