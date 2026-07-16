import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const ExperienceCard = ({ index, experience, isMobile }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="w-full bg-tertiary rounded-2xl p-6 sm:p-8 shadow-card border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_-12px_rgba(145,94,255,0.35)]"
  >
    <div className="flex items-center gap-4">
      {!isMobile && (
        <div
          className="w-14 h-14 shrink-0 rounded-md flex items-center justify-center overflow-hidden"
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            width={56}
            height={56}
            loading="lazy"
            className="w-[88%] h-[88%] object-contain"
          />
        </div>
      )}
      <div>
        <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[15px] font-semibold">{experience.company_name}</p>
        <p className="text-secondary text-[13px] mt-0.5">{experience.date}</p>
      </div>
    </div>

    {experience.points?.length > 0 && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li key={`exp-${index}-p-${i}`} className="text-white-100 text-[14px] tracking-wide leading-[22px]">
            {point}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const Experience = () => {
  const { t, data } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    mobileQuery.addEventListener("change", handleMobileChange);

    return () => mobileQuery.removeEventListener("change", handleMobileChange);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center select-none`}>{t("experience.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center select-none`}>{t("experience.title")}</h2>
      </motion.div>

      <div className="mt-16 flex flex-col gap-7 max-w-5xl mx-auto">
        {data.experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} index={index} experience={experience} isMobile={isMobile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
