import React from 'react';
import Ballpit from '../Ballpit/Ballpit';
import SplashCursor from "../SplashCursor/SplashCursor";
import ContactCard from "../Elements/ContactCard";

const Contactme = () => {
  return (
    <div>
      {/* Carte de contact */}
      <ContactCard />

      {/* Conteneur des balles fixé en bas de l'écran */}
      <SplashCursor>
        
      </SplashCursor>
    </div>
  );
};

export default Contactme;