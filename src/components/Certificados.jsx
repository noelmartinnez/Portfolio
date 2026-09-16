import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { drive } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useResponsive } from "../hooks/useResponsive";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  link_icon,
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
        className={`bg-tertiary p-4 rounded-2xl shadow-card border border-white/10 ${
          isTablet ? "sm:w-[320px]" : "sm:w-[300px]"
        } w-full`}
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt={name}
            width={300}
            height={180}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link_icon || drive}
                alt={link_icon ? "Anthropic" : "Google Drive"}
                width={20}
                height={20}
                loading="lazy"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-4 ${
            isMobile || isTablet ? "flex flex-col items-center text-center" : ""
          }`}
        >
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificados = () => {
  const { t, data } = useLanguage();
  const certificados = data.certificados;
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <h3 className={`${styles.sectionSubHeadText} select-none`}>{t("certificates.title")}</h3>
      </motion.div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-8 justify-items-center items-center" // Diseño para móvil y tablets (una columna)
            : "flex flex-wrap gap-7 mt-10" // Diseño para pantallas grandes (flex)
        }`}
      >
        {certificados.map((certificado, index) => (
          <ProjectCard key={`certificado-${index}`} index={index} isTablet={isTablet} isMobile={isMobile} {...certificado} />
        ))}
      </div>
    </>
  );
};

export default Certificados;
