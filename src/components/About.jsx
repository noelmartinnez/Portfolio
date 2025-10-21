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
        ► Ingeniero de Software especializado en desarrollo <strong>backend</strong> y <strong>QA Automation</strong>, con experiencia en el diseño de arquitecturas distribuidas de microservicios y en la creación de entornos de despliegue automatizados bajo estándares de alta disponibilidad y seguridad.
        <br></br>
        <br></br>
        ► He participado en proyectos estratégicos para el sector <strong>bancario</strong> y <strong>estatal</strong> (BBVA, Banco Santander, OPPLUS, ANCERT), diseñando soluciones escalables, resilientes y orientadas a resultados.
        <br></br>
        <br></br>
        ► Áreas de especialización:
        <br></br>
        <br></br>
        → <strong>Arquitectura y Backend</strong>
        <br></br>
        Desarrollo de soluciones en <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Spring Cloud</strong> y <strong>Node.js</strong>, implementando <strong>APIs RESTful</strong>, comunicación entre microservicios con <strong>Feign Client</strong> y sistemas de mensajería con <strong>Apache Kafka</strong>. Diseño de arquitecturas mantenibles y escalables con despliegues en <strong>Docker</strong> y <strong>Kubernetes</strong>.
        <br></br>
        <br></br>
        → <strong>DevOps e Infraestructura</strong>
        <br></br> 
        Experiencia en la creación de pipelines CI/CD con <strong>Jenkins</strong>, <strong>Harbor</strong> y <strong>Argo CD</strong>, gestión de entornos productivos y monitorización de servicios en <strong>AWS</strong>.
        <br></br>
        <br></br>
        → <strong>Procesos y Datos</strong>
        <br></br>
        Integración de procesos de negocio con <strong>Camunda (BPM)</strong> y manejo avanzado de bases de datos relacionales como <strong>PostgreSQL</strong>, <strong>Oracle Database</strong> y <strong>MySQL</strong>, optimizando rendimiento y consultas.
        <br></br>
        <br></br>
        → <strong>Calidad y Testing</strong>
        <br></br>
        Diseño y ejecución de pruebas automatizadas con <strong>Selenium</strong>, <strong>Puppeteer</strong>, <strong>Allure Report</strong> y <strong>Mocha</strong>, validando flujos funcionales y regresiones end-to-end en entornos web.
        <br></br>
        <br></br>
        ► Destaco por mi enfoque analítico, mi capacidad para resolver incidencias complejas (L3) y mi compromiso con la estabilidad, fiabilidad y calidad del software.
        <br></br>
        <br></br>
        Siempre abierto a conectar, aprender y explorar nuevos retos tecnológicos.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
