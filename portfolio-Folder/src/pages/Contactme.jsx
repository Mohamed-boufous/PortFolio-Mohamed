import React from 'react';
import ContactCard from "../Elements/ContactCard";
import { Globe3D } from '../components/ui/3d-globe';
import profileImage from "../assets/Mohamed_Boufous.jpg";
import { useDarkMode } from '../DarkModeContext';

const Contactme = () => {
  const { isDarkMode } = useDarkMode();

  // Marker for Agadir, Morocco
  const myLocationMarker = [
    {
      lat: 30.4278,
      lng: -9.5981,
      src: profileImage,
      label: "Agadir, Morocco",
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Container for Form and Globe */}
      <div className="container mx-auto px-4 z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
          
          {/* Left Column: Contact Form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md transform scale-90 lg:scale-95 origin-center lg:origin-right">
              <ContactCard />
            </div>
          </div>

          {/* Right Column: 3D Globe */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start relative perspective-1000 -mt-8 lg:-mt-24">
            <div className="w-full max-w-md h-[400px] md:h-[500px] relative flex items-center justify-center">
              {/* Subtle underglow for the globe */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] rounded-full pointer-events-none ${isDarkMode ? 'bg-indigo-500/20' : 'bg-purple-300/30'}`}></div>
              
              <Globe3D
                markers={myLocationMarker}
                config={{
                  globeColor: isDarkMode ? "#111827" : "#f3f4f6", // dark vs light fallback
                  atmosphereColor: isDarkMode ? "#4da6ff" : "#8b5cf6",
                  atmosphereIntensity: 15, // High glow
                  bumpScale: 5,
                  autoRotateSpeed: 0.5, // gentle rotation
                  enableZoom: false, // Prevent page scrolling issues
                  markerSize: 0.08, // slightly larger marker
                  ambientIntensity: isDarkMode ? 0.3 : 0.8,
                }}
                onMarkerClick={(marker) => {
                  console.log("Clicked:", marker.label);
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactme;