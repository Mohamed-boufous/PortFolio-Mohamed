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
      <div
        style={{
          position: 'fixed', // Fixe le conteneur en bas de l'écran
          bottom: 0, // Positionne en bas
          left: 0,
          right: 0,
          height: '200px', // Hauteur du conteneur des balles
          overflow: 'hidden', // Cache les balles qui dépassent
          zIndex: 1, // Assure que les balles sont en arrière-plan
          pointerEvents: 'none', // Désactive les interactions avec les balles
        }}
      >
        <Ballpit
          count={20} // Nombre de balles
          gravity={2} // Gravité des balles
          friction={1} // Friction des balles
          wallBounce={1} // Rebond des balles sur les bords
          followCursor={false} // Les balles suivent le curseur
        />
      </div>
    </div>
  );
};

export default Contactme;