import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useResponsive } from "../hooks/useResponsive";
import Educacion from "./Educacion";
import Certificados from "./Certificados";
import Idiomas from "./Idiomas";

// Sección paraguas: reúne Educación, Certificados e Idiomas como sub-bloques
// bajo una única cabecera para acortar la navegación.
const Formacion = () => {
  const { t } = useLanguage();
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`w-full ${
          isMobile || isTablet ? "flex flex-col items-center justify-center text-center" : ""
        }`}
      >
        <p className={`${styles.sectionSubText} select-none`}>{t("formacion.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>{t("formacion.title")}</h2>
      </motion.div>

      <div className="mt-14">
        <Educacion />
      </div>
      <div className="mt-16">
        <Certificados />
      </div>
      <div className="mt-16">
        <Idiomas />
      </div>
    </>
  );
};

export default SectionWrapper(Formacion, "formacion");
