import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.75, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-22 h-22 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const isTablet = window.matchMedia("(min-width: 500px) and (max-width: 1100px)").matches;
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  // Filtrar servicios para tablet (máximo 2 tarjetas)
  const filteredServices = isTablet ? services.slice(0, 2) : services;

  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`w-full ${
          isTablet || isMobile ? "text-center" : ""
        }`}
      >
        <p
          className={`${
            styles.sectionSubText
          } select-none ${isTablet || isMobile ? "" : "text-left"}`}
        >
          Introducción
        </p>
        <h2
          className={`${
            styles.sectionHeadText
          } select-none ${isTablet || isMobile ? "" : "text-left"}`}
        >
          Desarrollando{"{"}me{"}"}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] leading-[30px] select-none ${
          isTablet || isMobile
            ? "text-center max-w-3xl mx-auto"
            : "text-left max-w-full md:max-w-3xl"
        }`}
      >
        Soy un desarrollador de software con experiencia en Java, Spring Boot, Kubernetes, arquitecturas de microservicios y bases de datos como PostgreSQL y Oracle SQL Developer.
        <br />
        <br />
        ¡Siempre me esfuerzo para superar mis propias expectativas!
      </motion.p>

      <div
        className={`flex flex-wrap justify-center select-none ${
          isMobile ? "mt-14" : "mt-20"
        }`}
        style={{
          gap: isMobile ? "30px" : isTablet ? "100px" : "130px",
        }}
      >
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
