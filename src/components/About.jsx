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
        Soy Ingeniero de Software especializado en arquitecturas de microservicios distribuidos y la integración de sistemas de misión crítica. Convierto requerimientos complejos en soluciones robustas, seguras y escalables.
        <br />
        <br />
        En Arquitectura y Backend, tengo experiencia sólida con Java, Spring Boot, contenedores Docker y Kubernetes. Diseño e implemento soluciones resilientes, incluyendo sistemas de mensajería con Apache Kafka y modelado de procesos con Camunda (BPM).
        <br />
        <br />
        En Automatización y DevOps, desarrollo automatizaciones con Python y JavaScript (Node.js), y construyo flujos CI/CD con Jenkins, Harbor y Argo CD para una entrega continua de valor.
        <br />
        <br />
        En Infraestructura y Datos, gestiono entornos on-premise y en la nube (AWS), y trabajo con bases de datos relacionales como PostgreSQL, Oracle Database y MySQL.
        <br />
        <br />
        Además, destaco por mi resolución de problemas complejos (L3): identifico la causa raíz en sistemas distribuidos y garantizo la estabilidad operativa.
        <br />
        <br />
        Siempre abierto a conectar y explorar nuevos retos tecnológicos. ¡Hablemos!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
