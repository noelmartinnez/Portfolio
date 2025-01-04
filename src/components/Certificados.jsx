import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { drive } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificados } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  isTablet,
  isMobile,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl ${
          isTablet ? "sm:w-[400px]" : "sm:w-[360px]"
        } w-full`}
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

        <div
          className={`mt-5 ${
            isMobile ? "flex flex-col items-center text-center" : ""
          }`}
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificados = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 500px) and (max-width: 1100px)");

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
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <p className={`${styles.sectionSubText} select-none`}>Aprendizaje</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>Certificados</h2>
      </motion.div>

      <div className={`w-full flex select-none ${isMobile || isTablet ? 'flex-col items-center justify-center text-center' : ''}`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-secondary text-[17px] max-w-full md:max-w-2xl leading-[30px] ${isMobile || isTablet ? 'text-center' : ''}`}
        >
          Las certificaciones son clave en mi desarrollo profesional, reflejando mi compromiso con la mejora continua y el aprendizaje constante.
          Cada una de ellas respalda mi dedicación a mantenerme actualizado y a perfeccionar mis habilidades en diversas áreas.
        </motion.p>
      </div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-14 justify-items-center items-center" // Diseño para móvil y tablets (una columna)
            : "flex flex-wrap gap-7 mt-20" // Diseño para pantallas grandes (flex)
        }`}
      >
        {certificados.map((certificado, index) => (
          <ProjectCard key={`certificado-${index}`} index={index} isTablet={isTablet} isMobile={isMobile} {...certificado} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificados, "certificados");
