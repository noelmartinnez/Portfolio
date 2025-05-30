import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
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
        Soy un desarrollador backend con sólida experiencia en Java, Spring Boot y arquitecturas basadas en microservicios.
        Tengo un perfil técnico orientado a la estabilidad, la eficiencia y la calidad del software, con conocimientos avanzados en despliegue de aplicaciones sobre infraestructuras Docker y Kubernetes, así como en la aplicación de prácticas DevOps e integración continua.
        <br />
        <br />
        Mi enfoque de trabajo se basa en el código limpio, la automatización de procesos y la mejora continua.
        Me implico en cada fase del desarrollo, aportando soluciones escalables, seguras y alineadas con los objetivos técnicos y funcionales del proyecto.
        <br />
        <br />
        ¡Trabajo con responsabilidad, criterio técnico y una actitud siempre proactiva!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
