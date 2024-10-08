import React from "react";
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
              /* Con esto abrimos el link en una ventana nueva */
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
        </div>
      </Tilt>
    </motion.div>
  );
};

const Idiomas = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} select-none`}>Aprendizaje</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>Idiomas</h2>
      </motion.div>

      <div className="w-full flex select-none">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En esta sección, presento mis habilidades lingüísticas.
          Cada idioma que manejo representa un conjunto de habilidades y mi dedicación a aprender. <br /> <br />
          Estos conocimientos son una prueba de mi compromiso con el aprendizaje continuo y mi capacidad para adaptarme a contextos variados.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {idiomas.map((idioma, index) => (
          <ProjectCard key={`idioma-${index}`} index={index} {...idioma} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Idiomas, "idiomas");
