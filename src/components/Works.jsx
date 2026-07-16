import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  isTablet,
  isMobile,
  t,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl ${
          isTablet ? "sm:w-[400px]" : "sm:w-[360px]"
        } w-full`}
      >
        <div
          className={`flex flex-col ${
            isMobile || isTablet ? "items-center text-center" : ""
          }`}
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div
          className={`mt-4 flex flex-wrap gap-2 ${
            isMobile || isTablet ? "justify-center" : ""
          }`}
        >
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className={`${isMobile || isTablet ? "flex justify-center" : ""}`}>
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-[#915eff] text-[14px] font-medium hover:underline"
          >
            {t("works.viewOnGithub")} →
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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

  const filteredProjects = data.projects;

  return (
    <>
      <motion.div variants={textVariant()} className={`w-full ${isMobile || isTablet ? 'flex flex-col items-center justify-center text-center' : ''}`}>
        <p className={`${styles.sectionSubText} select-none`}>{t("works.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>{t("works.title")}</h2>
      </motion.div>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-14 justify-items-center items-center"
            : "flex flex-wrap gap-7 mt-20"
        }`}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} isTablet={isTablet} isMobile={isMobile} t={t} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "proyects");
