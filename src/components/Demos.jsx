import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import DemoPanel from "./demos/DemoPanel";
import SplitHeading from "./fx/SplitHeading";

const Demos = () => {
  const { t, data } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()} className="w-full text-center">
        <p className={`${styles.sectionSubText} select-none`}>{t("demos.subtitle")}</p>
        <SplitHeading text={t("demos.title")} className={`${styles.sectionHeadText} select-none`} />
      </motion.div>

      <div className="mt-14">
        <DemoPanel demos={data.demos} />
      </div>
    </>
  );
};

export default SectionWrapper(Demos, "demos", "#050816");
