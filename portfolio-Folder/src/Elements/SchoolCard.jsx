import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { BorderBeam } from "../components/ui/border-beam";
import { useDarkMode } from "../DarkModeContext"; // Importez useDarkMode

export function SchoolCard({ schoolName, from, to, imageUrl, link }) {
  const { isDarkMode } = useDarkMode(); // Utilisez useDarkMode

  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] border-purple-500/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-purple-800"
        }`}
      >
        <BorderBeam
          size={300}
          duration={10}
          anchor={90}
          borderWidth={2}
          colorFrom="#ffaa40"
          colorTo="#9c40ff"
          delay={0}
          className="rounded-[inherit]"
        />
        <CardItem
          translateZ="50"
          className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-purple-800"
          }`}
        >
          {schoolName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className={`text-sm max-w-sm mt-2 ${
            isDarkMode ? "text-gray-300" : "text-purple-600"
          }`}
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