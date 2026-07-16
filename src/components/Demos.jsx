import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import DemoPanel from "./demos/DemoPanel";

const Demos = () => {
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
      <motion.div variants={textVariant()} className="w-full text-center">
        <p className={`${styles.sectionSubText} select-none`}>{t("demos.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>{t("demos.title")}</h2>
      </motion.div>

      <div className="mt-14 grid gap-8">
        {data.demos.map((demo, index) => (
          <DemoPanel
            key={demo.id}
            index={index}
            categoryLabel={t(`demos.categories.${demo.category}`)}
            isMobile={isMobile}
            {...demo}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Demos, "demos");
