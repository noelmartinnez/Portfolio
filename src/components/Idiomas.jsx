import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useResponsive } from "../hooks/useResponsive";

const LanguageCard = ({ index, name, level, source_code_link, t }) => (
  <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)} className="h-full w-full max-w-[280px]">
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className="bg-tertiary p-8 rounded-2xl w-full sm:w-[280px] h-full shadow-card flex flex-col items-center text-center"
    >
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[16px]">{level}</p>
      {source_code_link ? (
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-[#915eff] text-[14px] font-medium hover:underline"
        >
          {t("languages.credential")} →
        </a>
      ) : (
        <span className="mt-4 text-[#915eff] text-[14px] font-medium">
          {t("languages.noCredential")}
        </span>
      )}
    </Tilt>
  </motion.div>
);

const Idiomas = () => {
  const { t, data } = useLanguage();
  const idiomas = data.idiomas;
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <h3 className={`${styles.sectionSubHeadText} select-none`}>{t("languages.title")}</h3>
      </motion.div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-8 justify-items-center items-stretch"
            : "flex flex-wrap items-stretch gap-7 mt-10"
        }`}
      >
        {idiomas.map((idioma, index) => (
          <LanguageCard key={idioma.id} index={index} t={t} {...idioma} />
        ))}
      </div>
    </>
  );
};

export default Idiomas;
