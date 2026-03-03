import { React, useContext } from 'react'
import { motion } from 'framer-motion';
import image from "../assets/Mohamed_Boufous.jpg";
import { DarkModeContext } from "../DarkModeContext";

const Profile = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    
    return (
        <div className="relative flex items-center justify-center p-2 w-[350px] h-[350px] rounded-full overflow-hidden">
            {/* Animated Border */}
            <motion.div
                className={`absolute inset-0 rounded-full border-[3px] border-dashed ${isDarkMode ? "border-white" : "border-purple-600"} shadow-[0_0_0_4px_rgba(255,255,255,0.3)]`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Image */}
            <img
                src={image}
                alt="Mohamed Boufous - Portfolio"
                className="block w-full h-full rounded-full object-cover z-10"
            />
        </div>
    )
}

export default Profile