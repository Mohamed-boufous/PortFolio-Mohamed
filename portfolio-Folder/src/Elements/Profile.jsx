import React from 'react'
import { motion } from 'framer-motion'; // Importez Framer Motion
import image from "../../public/assets/Mohamed_Boufous-BO80vEsw.jpg"; // Importez votre image
const Profile = () => {
  return (
<div
        style={{
          position: "relative",
          borderRadius: "50%", // Forme circulaire
          overflow: "hidden", // Pour s'assurer que l'image ne dépasse pas du cadre
          padding: "8px", // Espace entre le cadre et l'image
          width: "350px", // Taille du cadre circulaire
          height: "350px", // Taille du cadre circulaire
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Bordure animée avec Framer Motion */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%", // Forme circulaire
            border: "2px dashed purple", // Bordure fine et cassée (dashed)
            boxShadow: "0 0 0 4px white", // Bordure blanche à l'extérieur
            strokeDasharray: "24 10", // Espace entre les tirets
          }}
          initial={{ rotate: 0, strokeDasharray: "24 100" }} // Position initiale
          animate={{
            rotate: 360, // Rotation à 360 degrés
            strokeDasharray: ["15 120", "16 25", "4 259"], // Variation des tirets
          }}
          transition={{
            duration: 40, // Durée de l'animation (très lent)
            repeat: Infinity, // Répéter indéfiniment
            repeatType: "reverse", // Inverser l'animation
            ease: "linear", // Animation linéaire
          }}
        />

        {/* Image */}
        <img
          src={image} // Utilisez l'image importée
          alt="Portfolio"
          style={{
            display: "block", // Pour éviter l'espace sous l'image
            width: "100%", // Taille de l'image (remplit le cadre circulaire)
            height: "100%", // Taille de l'image (remplit le cadre circulaire)
            borderRadius: "50%", // Forme circulaire pour l'image
            objectFit: "cover", // Pour s'assurer que l'image couvre tout l'espace
          }}
        />
      </div>
  )
}

export default Profile