import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const SkillGroup = ({ index, category, skills, isLastOdd }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className={`bg-tertiary rounded-2xl p-6 shadow-card border border-white/10 max-[500px]:text-center${
      isLastOdd ? " md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto" : ""
    }`}
  >
    <h4 className="text-white font-bold text-[18px] mb-4">{category}</h4>
    <div className="flex flex-wrap gap-2.5 max-[500px]:justify-center">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-black-100 text-secondary border border-white/15 rounded-lg px-3 py-1.5 text-[13px] font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { t, data } = useLanguage();
  const { ref: ballsRef, inView: ballsInView } = useInView();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center select-none`}>{t("skills.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center select-none`}>{t("skills.title")}</h2>
      </motion.div>

      <div ref={ballsRef} className="flex flex-row flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28 max-[500px]:w-24 max-[500px]:h-24" key={technology.name}>
            <Suspense fallback={null}>
              <BallCanvas icon={technology.icon} active={ballsInView} />
            </Suspense>
            <p className="flex items-center justify-center text-white text-[14px] font-bold select-none">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 max-w-5xl mx-auto">
        {data.skills.map((group, index) => {
          const isLastOdd =
            index === data.skills.length - 1 && data.skills.length % 2 === 1;
          return (
            <SkillGroup key={group.id} index={index} isLastOdd={isLastOdd} {...group} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
