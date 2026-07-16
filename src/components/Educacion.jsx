import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const EducationCard = ({ index, institution, degree, date, details, image, isMobile, isTablet }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className={`bg-tertiary p-8 rounded-2xl w-full sm:w-[420px] shadow-card ${
        isMobile || isTablet ? "flex flex-col items-center text-center" : ""
      }`}
    >
      {image && (
        <img
          src={image}
          alt={institution}
          width={420}
          height={160}
          loading="lazy"
          className="w-full h-[160px] object-contain mb-5"
        />
      )}
      <h3 className="text-white font-bold text-[24px]">{degree}</h3>
      <p className="mt-1 text-secondary text-[16px] font-semibold">{institution}</p>
      <p className="mt-1 text-secondary text-[14px]">{date}</p>
      <p className="mt-4 text-white-100 text-[14px]">{details}</p>
    </Tilt>
  </motion.div>
);

const Educacion = () => {
  const { t, data } = useLanguage();
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

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <p className={`${styles.sectionSubText} select-none`}>{t("education.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>{t("education.title")}</h2>
      </motion.div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-14 justify-items-center items-center"
            : "flex flex-wrap gap-7 mt-20"
        }`}
      >
        {data.educacion.map((edu, index) => (
          <EducationCard key={edu.id} index={index} isMobile={isMobile} isTablet={isTablet} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Educacion, "education");
