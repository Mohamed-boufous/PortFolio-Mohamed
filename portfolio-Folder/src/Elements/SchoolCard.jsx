import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { BorderBeam } from "../components/ui/border-beam"; // Importez le composant BorderBeam


export function SchoolCard({ schoolName, from, to, imageUrl, link }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] border-purple-500/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Ajoutez le BorderBeam ici */}
        <BorderBeam
          size={300} // Taille de la bordure
          duration={10} // Durée de l'animation
          anchor={90} // Point d'ancrage de l'animation
          borderWidth={2} // Largeur de la bordure
          colorFrom="#ffaa40" // Couleur de départ du dégradé
          colorTo="#9c40ff" // Couleur d'arrivée du dégradé
          delay={0} // Délai avant le début de l'animation
          className="rounded-[inherit]" // Appliquez les mêmes bordures arrondies que la carte
        />
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-purple-800"
        >
          {schoolName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-purple-600 text-sm max-w-sm mt-2"
        >
          From {from} to {to}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-colors"
          >
            Take a look
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}