import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { drive } from "../assets";
import { SectionWrapper } from "../hoc";
import { idiomas } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={drive}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Idiomas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(min-width: 769px) and (max-width: 1100px)");

    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return (
    <>
      {/* Centrado de texto para móvil y tablet */}
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <p className={`${styles.sectionSubText} select-none`}>Aprendizaje</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>Idiomas</h2>
      </motion.div>

      <div className={`w-full flex select-none ${isMobile || isTablet ? 'flex-col items-center justify-center text-center' : ''}`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-secondary text-[17px] max-w-full md:max-w-2xl leading-[30px] ${isMobile || isTablet ? 'text-center' : ''}`}
        >
          En esta sección, presento mis habilidades lingüísticas.
          Cada idioma que manejo representa un conjunto de habilidades y mi dedicación a aprender. <br /> <br />
        </motion.p>
      </div>

      <div
        className={`mt-20 ${
          isMobile
            ? "grid grid-cols-1 gap-7" // Diseño para móvil (una columna)
            : isTablet
            ? "grid grid-cols-2 gap-40" // Diseño para tabletas (dos columnas)
            : "flex flex-wrap gap-7" // Diseño para pantallas grandes (flex)
        }`}
      >
        {idiomas.map((idioma, index) => (
          <ProjectCard key={`idioma-${index}`} index={index} {...idioma} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Idiomas, "idiomas");
