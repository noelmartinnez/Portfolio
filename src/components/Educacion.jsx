import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useResponsive } from "../hooks/useResponsive";

const EducationCard = ({ index, institution, degree, date, details, image, isMobile, isTablet }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className={`bg-tertiary p-6 rounded-2xl w-full sm:w-[320px] shadow-card ${
        isMobile || isTablet ? "flex flex-col items-center text-center" : ""
      }`}
    >
      {image && (
        <img
          src={image}
          alt={institution}
          width={320}
          height={110}
          loading="lazy"
          className="w-full h-[110px] object-contain mb-4"
        />
      )}
      <h3 className="text-white font-bold text-[20px] leading-tight">{degree}</h3>
      <p className="mt-1 text-secondary text-[14px] font-semibold">{institution}</p>
      <p className="mt-1 text-secondary text-[13px]">{date}</p>
      <p className="mt-3 text-white-100 text-[13px]">{details}</p>
    </Tilt>
  </motion.div>
);

const Educacion = () => {
  const { t, data } = useLanguage();
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <h3 className={`${styles.sectionSubHeadText} select-none`}>{t("education.title")}</h3>
      </motion.div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-8 justify-items-center items-center"
            : "flex flex-wrap gap-7 mt-10"
        }`}
      >
        {data.educacion.map((edu, index) => (
          <EducationCard key={edu.id} index={index} isMobile={isMobile} isTablet={isTablet} {...edu} />
        ))}
      </div>
    </>
  );
};

export default Educacion;
