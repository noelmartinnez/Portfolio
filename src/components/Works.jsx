import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isTablet,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
                src={github}
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

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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

  // Filtrar proyectos para tablet (solo mostrar las primeras dos tarjetas)
  const filteredProjects = isTablet ? [projects[0], projects[2]] : projects;

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <p className={`${styles.sectionSubText} select-none`}>Mi trabajo</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>Proyectos</h2>
      </motion.div>

      <div className={`w-full flex select-none ${isMobile || isTablet ? 'flex-col items-center justify-center text-center' : ''}`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-secondary text-[17px] max-w-full md:max-w-2xl leading-[30px] ${isMobile || isTablet ? 'text-center' : ''}`}
        >
          Los siguientes proyectos validan mis habilidades y experiencia, al igual que
          reflejan mi capacidad para resolver problemas complejos y trabajar con diferentes tecnologías.
          <br /><br />
          Me encanta trabajar en proyectos que me desafíen y me permitan aprender algo nuevo.
        </motion.p>
      </div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-14 justify-items-center items-center" 
            : "flex flex-wrap gap-7 mt-20" 
        }`}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} isTablet={isTablet} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "proyectos");
