import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Importez le contexte du mode sombre

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  icons = [],
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  const { isDarkMode } = useDarkMode(); // Utilisez le contexte pour obtenir l'état du mode sombre

  useEffect(() => {
    // Vérifier si window est défini (pour éviter les erreurs SSR)
    if (typeof window !== "undefined") {
      setIsScreenSizeSm(window.innerWidth <= 640);

      const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1200 : 2500; // Augmenter la largeur pour espacer plus d'icônes
  const faceCount = icons.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[100px] sm:min-h-[150px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {icons.map(({ icon: Icon, name }, i) => (
            <div
              key={i}
              className="group absolute flex h-fit flex-col items-center justify-center [backface-visibility:hidden] p-[4%] sm:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              {/* Icône de la technologie */}
              <Icon
                className={`pointer-events-none h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] transition-transform duration-300 ease-out group-hover:scale-110 ${
                  isDarkMode ? "text-white" : "text-black"
                }`} // Couleur conditionnelle
              />

              {/* Nom de la technologie (affiché au survol) */}
              <span
                className={`mt-2 text-[10px] sm:text-xs whitespace-nowrap font-medium transition-opacity duration-300 group-hover:opacity-100 ${
                  isDarkMode ? "text-white" : "text-black"
                }`} // Couleur conditionnelle
              >
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;