import React from "react";
import { Github } from "lucide-react"; // Assurez-vous d'avoir installé lucide-react

export default function ProjectCard({ imageUrl, projectName, description, githubUrl }) {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px]">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front face */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-200 p-6 [backface-visibility:hidden]">
          <div className="flex flex-col h-full items-center justify-center">
            {/* Image du projet */}
            <div className="relative w-32 h-32 mb-6">
              <img
                src={imageUrl || "/placeholder.svg"} // Utilisation de <img> au lieu de next/image
                alt={projectName}
                className="object-contain w-full h-full rounded-lg shadow-lg" // Ajout d'ombres et de coins arrondis
              />
            </div>

            {/* Titre du projet */}
            <h2 className="text-3xl font-serif font-bold text-slate-800 text-center">
              {projectName}
            </h2>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            {/* Titre du projet */}
            <h3 className="text-3xl font-serif font-bold mb-4 text-purple-400">
              {projectName}
            </h3>

            {/* Description du projet */}
            <p className="text-lg font-sans font-light leading-relaxed text-gray-300 flex-grow">
              {description}
            </p>

            {/* Bouton "View on GitHub" */}
            <div className="mt-auto">
              <button
                className="w-full bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center px-4 py-2 rounded-md border border-transparent transition-colors font-medium"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}